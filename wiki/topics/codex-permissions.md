# Codex CLI — Permission & Approval Modes

> Part of [AI Agent Permission Models](ai-agent-permissions.md).
> For OS-level sandbox mechanics, see [agent-sandbox](../concepts/agent-sandbox.md).

---

## Architecture: approval mode × sandbox level

Codex uses two orthogonal dials:

1. **Approval mode** — when does Codex ask for human sign-off?
2. **Sandbox level** — what is the OS actually allowed to touch?

They are combined in the CLI. Example: `-a on-request -s workspace-write` means "ask me before crossing workspace boundaries, and restrict writes to the project directory."

> **Warning (Beta):** Newer Codex versions use *permission profiles* (`:read-only`, `:workspace`, `:danger-full-access`) instead of separate `-a` / `-s` flags. Do NOT mix the old and new systems in the same config.

---

## Approval modes

### `on-request` — interactive (safest)

Codex prompts you before any operation that crosses a boundary. Within-workspace routine ops run uninterrupted; anything that would hit the network, modify outside the project, or execute a risky command gets a checkpoint.

**Best for:** Daily development, initial setup of a new project, situations where you want to stay in the loop.  
**Tradeoff:** Requires presence. Can't walk away.

---

### `never` — unattended (no prompts)

No approval prompts at all. Out-of-bounds operations don't ask for permission — they fail silently and return an error to the model, which then tries a different approach. The agent self-corrects within its sandbox.

**Best for:** Long-running unattended tasks in CI or overnight runs, where you've defined the boundaries via sandbox level and the model should work within them without waking you.  
**Tradeoff:** You won't see surprising operations — you'll just see surprising results. Requires a well-configured sandbox to be safe.

You can switch modes mid-session without restarting: `/mode on-request` → `/mode never`.

---

### `--dangerously-bypass-approvals-and-sandbox` (also `--yolo`) — full bypass

Bypasses **both** approval prompts **and** sandboxing. This is the nuclear option.

*"Bypasses approvals and sandboxing, so use it only inside externally isolated environments."*

**Only valid use case:** Inside a Docker container or VM that is itself isolated — no real credentials mounted, no access to production systems, no persistent state you care about.  
**Tradeoff:** If you run this on your laptop, you are the sandbox.

---

## Sandbox levels

The sandbox level controls what the OS enforces regardless of approval mode.

### `read-only`

Codex can inspect and analyze files but cannot edit them or run commands without explicit approval. Think of it as an AI pair reviewer, not a pair programmer.

**Best for:** Code audits, understanding an unfamiliar codebase, generating plans before committing to changes.  
**Limitations:** No file writes, no dependency installs, no test runs.

---

### `workspace-write` (default)

Within the project directory, Codex can read, write, and run routine local commands. Outside the project:
- Filesystem writes are blocked
- Network access is **disabled by default**

Protected paths (always read-only even in workspace-write):
- `.git/` and resolved Git pointers
- `.codex/` (Codex own config)
- `.agents/` (agent definitions)

You can extend write access to additional directories without escalating to full access:

```toml
[sandbox_workspace_write]
writable_roots = ["/tmp/build-output", "/home/user/generated"]
```

**Best for:** Standard software development. The right default for most work.

---

### `danger-full-access`

All restrictions removed. Codex can read and write anywhere on the filesystem and reach the network freely.

**Only valid use case:** Inside a disposable, externally isolated container. "Never on a long-lived host."  
**Tradeoff:** One prompt-injection or mis-generated command away from deleting things you care about.

---

## Mode × sandbox combination guide

| Approval mode | Sandbox level | Result | Use case |
|---|---|---|---|
| `on-request` | `read-only` | Max oversight, no changes | Code review, audits |
| `on-request` | `workspace-write` | Standard dev, human in loop | Daily development |
| `never` | `workspace-write` | Unattended, contained | Overnight/CI runs |
| `never` | `danger-full-access` | Unattended, wide open | Only inside isolated container |
| `--yolo` | *(sandbox bypassed)* | No guardrails at all | Disposable throwaway env only |

---

## Network access control

Network is **off by default** inside the agent phase of `workspace-write`. Enable it:

```toml
[sandbox_workspace_write]
network_access = true
```

When enabled, you can further restrict which HTTP methods are allowed — useful for read-only API access:

```toml
[sandbox_workspace_write]
network_access = true
allowed_http_methods = ["GET", "HEAD", "OPTIONS"]   # blocks POST/PUT/PATCH/DELETE
```

Domain-level allowlisting via the managed proxy:

```toml
[permissions.myprofile.network]
allowed_domains = [
  "registry.npmjs.org",
  "*.internal.corp.example.com"
]
denied_domains = ["pastebin.com"]
mode = "limited"    # proxy-only; raw sockets blocked
```

---

## Two-phase runtime (cloud/hosted Codex)

Codex cloud splits execution into two phases:

```
┌─────────────────────────────────────────────────────┐
│  SETUP PHASE                                        │
│  • Internet: ON                                     │
│  • Secrets: decrypted and available                 │
│  • Purpose: install dependencies, configure env     │
└─────────────────────┬───────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────┐
│  AGENT PHASE                                        │
│  • Internet: OFF (by default)                       │
│  • Secrets: REMOVED                                 │
│  • Purpose: model generates and runs code           │
└─────────────────────────────────────────────────────┘
```

The separation ensures that credentials needed to install packages are not available when the model is executing arbitrary code. This is where prompt injection and exfiltration attacks concentrate — removing secrets before this phase is a critical security boundary.

---

## Configuration layers

Precedence (highest to lowest):

1. **CLI flags** and `-c` overrides
2. **Project** — `.codex/config.toml` (in repo)
3. **Profile files** — `~/.codex/<name>.config.toml`
4. **User** — `~/.codex/config.toml`
5. **System** — `/etc/codex/config.toml`
6. **Built-in defaults**

### Admin enforcement: `requirements.toml`

Admins deploy `requirements.toml` as an organization-wide constraint file. **Developers cannot override values it disallows.** When a conflict is detected, Codex falls back to the nearest compatible (safer) value. This is the enterprise control plane.

Example air-gapped deployment:

```toml
# requirements.toml
web_search = "disabled"
allowed_web_search_modes = ["disabled"]
features.use_legacy_landlock = false   # force bubblewrap, not fallback Landlock
```

---

## Permission profiles (beta — newer Codex versions)

The newer Codex model uses named profiles that bundle approval + sandbox settings together:

| Profile | Equivalent to |
|---|---|
| `:read-only` | `on-request` + `read-only` |
| `:workspace` | `on-request` + `workspace-write` |
| `:danger-full-access` | `on-request` + `danger-full-access` |

**Do not mix profiles with the old `sandbox_mode` settings in the same config.** Pick one system.

---

## Sandbox technical implementation

Codex uses OS-level kernel enforcement, not application-level trust:

- **macOS**: Apple Seatbelt framework
- **Linux/WSL2**: bubblewrap user-namespace isolation
  - Landlock LSM as fallback (weaker; avoid unless bubblewrap unavailable)
- **Windows**: Native Windows Sandbox

Full details → [agent-sandbox](../concepts/agent-sandbox.md)

---

## Quick decision guide

```
Auditing / planning?                     → on-request + read-only
Normal development?                      → on-request + workspace-write
Unattended CI in a real repo?            → never + workspace-write
Unattended + broad system access?        → never + danger-full-access (container only)
Throwaway container, maximum speed?      → --yolo (only if container is truly disposable)
Organization-wide lockdown?              → requirements.toml
```

---

## Sources

- [ai-agent-permissions-research.md](/sources/ai-agent-permissions-research.md)
