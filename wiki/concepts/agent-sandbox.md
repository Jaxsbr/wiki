# Agent Sandbox — What It Actually Is

> Companion to [AI Agent Permission Models](../topics/ai-agent-permissions.md).
> Most articles say "run in a sandbox" without explaining what that means mechanically. This page does.

---

## The one-sentence answer

An agent sandbox is **kernel-level OS enforcement** that restricts what filesystem paths and network destinations a process can reach — enforced by the operating system itself, not by the agent's willingness to behave.

This is the critical distinction: it is not an honor system. A sandboxed process that tries to write outside its allowed paths gets an `EPERM` from the kernel. It's not a prompt or a warning — it's a hard block.

---

## What the sandbox is NOT

Before the details: common misconceptions.

| Misconception | Reality |
|---|---|
| "The sandbox is Docker" | Docker is **external** isolation. The agent sandbox is **internal** — it can run inside Docker, and Docker adds a second layer, but they are separate things. |
| "The sandbox is the permission system" | Permissions control which *tools* the agent can call. The sandbox controls what those tools can *actually do* at the OS level. |
| "A container replaces the need for a sandbox" | They're complementary. A container limits what the host sees. The sandbox limits what the agent process sees inside the container. |
| "The sandbox prevents all attacks" | No. Known limitations exist (domain fronting, Docker socket escalation, overly broad write paths). Defense-in-depth is still required. |

---

## Platform implementations

Claude Code and Codex use the same underlying primitives, platform by platform:

### macOS — Apple Seatbelt

Both tools call `/usr/bin/sandbox-exec` with embedded `.sbpl` (Sandbox Policy Language) profiles.

- Same framework that isolates App Store applications
- Enforces: filesystem read/write paths, network destinations (reduced to loopback + detected proxy ports), system call subsets
- **No installation required** — Seatbelt is built into macOS
- Enable: `/sandbox` command in Claude Code; configure `sandbox_mode` in Codex

### Linux and WSL2 — bubblewrap

bubblewrap (`bwrap`) is an unprivileged sandboxing tool, the same one Flatpak uses for app isolation. Both tools use it with a consistent set of flags:

```bash
bwrap \
  --ro-bind / /              # root filesystem is read-only
  --bind /project /project   # project dir is writable
  --unshare-user             # isolated user namespace
  --unshare-pid              # isolated PID namespace
  --unshare-net              # isolated network namespace (when proxy not active)
  # ... plus seccomp filter
```

The **seccomp filter** adds syscall-level restrictions on top of namespace isolation:

| Blocked syscall | Why |
|---|---|
| `ptrace` | Prevents process introspection / debugging attacks |
| `process_vm_readv`, `process_vm_writev` | Prevents reading/writing other processes' memory |
| `io_uring` | Prevents async I/O bypasses |
| All socket families except `AF_UNIX` | Blocks raw network access in restricted-network mode |

**Install (Ubuntu/Debian):**
```bash
sudo apt-get install bubblewrap socat
```

**Install (Fedora):**
```bash
sudo dnf install bubblewrap socat
```

WSL1 is **not supported** — it lacks the kernel namespacing features bubblewrap requires. You need WSL2.

### Landlock (Linux fallback)

When bubblewrap is unavailable, both tools fall back to Landlock, a Linux Security Module (LSM) that restricts filesystem access at the kernel level without requiring namespace support.

Landlock is substantially weaker than bubblewrap. Codex admins can disable the fallback entirely via `requirements.toml`:

```toml
features.use_legacy_landlock = false   # require bubblewrap; fail if unavailable
```

### Windows — Restricted Token + Job Objects + WFP

On Windows, the sandbox uses:
- **Restricted token** — runs the agent process with a reduced privilege token
- **Job Object** — enforces process group limits (CPU, memory, child process creation)
- **Windows Filtering Platform (WFP)** — kernel-level network traffic filtering

Codex on Windows also supports the native **Windows Sandbox** (a lightweight Hyper-V VM) as an alternative isolation layer.

---

## Filesystem isolation

The sandbox restricts filesystem access in two directions:

### Write isolation
- Write access defaults to the **current working directory and subdirectories only**
- Anything outside (home directory, system files, other repos) is write-blocked at the kernel
- Protected paths are always read-only regardless of mode:
  - Claude Code: `.git/`, `.claude/`, `.claude/skills/`
  - Codex: `.git/`, `.codex/`, `.agents/`

### Read isolation
- Read access is typically broader — whole filesystem readable by default
- Sensitive paths can be explicitly excluded: `~/.ssh`, `~/.aws`, `.env` files

### Child process inheritance
A key property: **child processes inherit all restrictions**. A subprocess spawned by a build script cannot circumvent the sandbox. If a malicious npm package spawns a shell, that shell runs inside the same kernel-enforced boundaries.

---

## Network isolation

Network isolation works on two levels:

### Level 1 — Local proxy (domain allowlisting)

A local proxy process intercepts outbound HTTP/HTTPS traffic and checks against an allowlist:

```json
{
  "sandbox": {
    "allowedDomains": ["registry.npmjs.org", "api.github.com"]
  }
}
```

New domain requests trigger an approval prompt (or fail silently in unattended mode). The proxy filters by domain name — it's **not** deep-packet inspection.

**Known limitation — domain fronting:** An attacker who controls an allowed domain (or a CDN in front of one) could potentially route exfiltration through it. The proxy sees the hostname, not the destination IP of the actual content.

### Level 2 — Kernel-level socket blocking

For processes that might bypass the proxy (opening raw sockets directly), the seccomp filter blocks all socket creation except `AF_UNIX` (local Unix sockets). This is the kernel safety net.

Technical detail: the managed proxy uses "an internal TCP→UDS→TCP routing bridge rather than full network isolation, so the proxy itself remains reachable." After this bridge activates, seccomp blocks socket creation for the user command, forcing all egress through the proxy.

**Known limitation — Docker socket:** If you allow access to `/var/run/docker.sock`, the process gains Docker API access. Docker can spawn new containers outside the sandbox. Mounting the Docker socket is an escalation path. Avoid `allowUnixSockets: true` unless you specifically need it.

---

## The two-phase runtime (Codex cloud)

Codex hosted/cloud splits execution to prevent credential leakage:

```
SETUP PHASE
├── Internet: ON (for npm install, pip install, etc.)
├── Secrets: decrypted and available
└── Agent has what it needs to build the environment

         ↓ boundary: secrets are removed

AGENT PHASE  
├── Internet: OFF by default
├── Secrets: scrubbed from environment
└── Model generates and executes code here
```

The rationale: prompt injection and data exfiltration attacks concentrate in the agent phase (where the model is running arbitrary code). Removing secrets before this phase means a successful attack can't exfiltrate credentials that were used in setup. It limits the blast radius from "credential theft + exfiltration" to "file modification within sandbox bounds."

---

## Docker: external isolation, not the sandbox

Docker (and similar container runtimes) operates at a different level:

| | Docker | Agent sandbox |
|---|---|---|
| **What it isolates** | Container from host OS | Agent process from container/host filesystem |
| **Filesystem isolation** | Container sees its own filesystem layer | Process sees kernel-enforced path restrictions |
| **Network isolation** | Container network namespace | Process-level proxy + seccomp socket blocks |
| **Who owns it** | You (the human operator) | The agent tool (Claude Code / Codex) |
| **Bypassed by** | Container escape (kernel exploits) | Docker socket access, Landlock fallback weaknesses |

**The right mental model:** Docker is the outer wall; the agent sandbox is the inner wall. The most secure setup has both. Running `bypassPermissions` or `--yolo` inside a Docker container means you have the outer wall but no inner wall.

**Codex note:** When Codex detects it's running inside Docker, it relaxes the need for nested bubblewrap (since the container itself provides the outer layer). But the sandbox config still applies — it determines what Codex can do *inside* that container.

---

## Setting up a sandbox

### Claude Code

**macOS:** No install. Run `/sandbox` inside a Claude Code session. Seatbelt activates.

**Linux/WSL2:**
```bash
# Install dependencies
sudo apt-get install bubblewrap socat

# Enable in Claude Code
/sandbox
```

**Configuration** (`settings.json`):
```json
{
  "sandbox": {
    "mode": "auto-allow",
    "allowedDomains": ["registry.npmjs.org"],
    "excludedCommands": ["docker"],
    "allowUnixSockets": false
  }
}
```

### Codex CLI

Configure in `.codex/config.toml` or `~/.codex/config.toml`:

```toml
[sandbox_workspace_write]
network_access = false          # default; set true to enable
writable_roots = []             # additional writable paths
allowed_http_methods = ["GET", "HEAD", "OPTIONS"]   # optional read-only restriction
```

### Using Docker as external isolation

For `bypassPermissions` (Claude) or `--yolo` (Codex):

```dockerfile
FROM node:20-slim
WORKDIR /project
COPY . .
# No real credentials, no mounted production volumes
# This container is disposable
```

```bash
docker run --rm \
  --network none \          # no network at all (or use a restricted bridge)
  --read-only \             # read-only root filesystem
  --tmpfs /tmp \
  myimage \
  claude --dangerously-skip-permissions "fix all the linting errors"
```

With `--network none`, Docker provides the network isolation that the internal sandbox normally supplies. With `--read-only`, filesystem writes outside `/tmp` are blocked at the Docker layer.

---

## Known limitations and mitigations

| Limitation | Risk | Mitigation |
|---|---|---|
| Domain fronting | Exfiltration via allowed CDN domains | Tight domain allowlist; prefer IP-based blocking for high-sensitivity |
| Docker socket (`/var/run/docker.sock`) | Full Docker API access from agent | Never allow Unix sockets unless required; exclude from sandbox |
| Broad write paths | Privilege escalation within writable tree | Scope writable_roots to minimal required paths |
| Landlock fallback (Linux) | Weaker enforcement than bubblewrap | Require bubblewrap via `features.use_legacy_landlock = false` |
| Nested sandbox weakness | Reduced isolation inside unprivileged Docker | Use privileged Docker or run bubblewrap on the host |
| WSL1 unsupported | No sandbox on WSL1 | Upgrade to WSL2 or use macOS/Linux host |

---

## Summary: what the sandbox gives you

1. **Kernel enforcement** — not honor-system. The OS blocks out-of-bounds ops.
2. **Child process coverage** — malicious subprocesses can't escape the sandbox.
3. **Network filtering** — domain allowlisting + socket-level kernel blocks.
4. **Credential-aware design** (Codex cloud) — secrets removed before the high-risk agent phase.
5. **Complementary to permissions** — permissions say what tools Claude can call; the sandbox says what those tools can actually reach.

The sandbox doesn't make `bypassPermissions` safe. It makes a permissive approval mode survivable.

---

## Sources

- [ai-agent-permissions-research.md](/sources/ai-agent-permissions-research.md)
