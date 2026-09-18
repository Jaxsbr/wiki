# Claude Code — Permission Modes

> Part of [AI Agent Permission Models](ai-agent-permissions.md).
> For what the sandbox actually does under the hood, see [agent-sandbox](../concepts/agent-sandbox.md).

---

## The six permission modes

Claude Code has six modes. You cycle through them in-session with **Shift+Tab**, or set a default in `settings.json`.

### 1. `default` — safest, slowest

Every tool call that modifies state or touches the network triggers an explicit approval prompt. Nothing happens without your say-so. This is what you get out of the box.

**Best for:** Production codebases, first-time setup, anything with real credentials attached.  
**Tradeoff:** High cognitive overhead — you will click Approve dozens of times per session.

---

### 2. `plan` — read-only exploration

All write, edit, and shell-mutation operations are blocked. Claude can read files, search, and build a mental model, but cannot change anything.

**Best for:** Code review sessions, understanding an unfamiliar codebase, safe exploration before committing to changes.  
**Tradeoff:** Can't apply any fixes — you have to switch modes to act on what Claude finds.

---

### 3. `acceptEdits` — balanced dev (recommended starting point)

File edits (`Edit`, `Write`) are auto-approved. Shell commands (`Bash`) and network operations are still gated. This covers ~80% of routine dev work without constant interruption.

**Best for:** Day-to-day feature development, refactoring, writing tests.  
**Tradeoff:** Still prompts for shell commands. Won't help if your bottleneck is `npm install` or `git push` approvals.

---

### 4. `auto` — AI-mediated approval (Team/Enterprise/API only)

*Available from March 2026. Not available on Pro or Max individual plans.*

A secondary Sonnet 4.6 classifier evaluates each tool call before it runs. Low-risk operations (file edits, standard shell commands, routine git ops) are auto-approved. High-risk operations are blocked or escalated:

- **Blocked:** mass file deletion, data exfiltration, malicious code execution, production deploys, force-pushes to main
- **Auto-approved:** normal read/write/edit ops within the working tree

Anthropic measured that **93% of permission prompts get approved** by users. `auto` automates that majority while human review still catches the tail.

Activation: `claude --enable-auto-mode`

**Best for:** Team workflows, CI/CD with human oversight, high-volume sessions where fatigue would cause rubber-stamping.  
**Tradeoff:** Classifier can occasionally block legitimate ops; the mode is not available on personal plans.

---

### 5. `dontAsk` — pre-approved allow-list only

All tool use is silently denied unless the tool appears in your allow list (via `/permissions` or `permissions.allow` rules). If a tool isn't listed, Claude doesn't prompt — it simply can't use it.

**Best for:** Tightly scripted automation where you want exactly the set of tools you've pre-approved and nothing else.  
**Tradeoff:** Any tool you forget to pre-approve fails silently. Easy to mis-configure.

---

### 6. `bypassPermissions` — full trust, sandboxed environments only

Activated with: `claude --dangerously-skip-permissions`

All approval prompts are removed. Claude can call any tool freely. The flag name uses "dangerously" deliberately — it's a signal that this is not a casual choice.

**Protected paths remain protected even in bypass mode:**
- `.git/`
- `.claude/`
- `.claude/skills/`

**Best for:** Fully sandboxed CI runners, throwaway containers with no real credentials, automated pipelines where an external isolation layer (Docker + restricted network) provides the safety net.  
**Tradeoff:** Zero interactive oversight. If something goes wrong, it goes wrong at full speed.

---

## Mode comparison table

| Mode | Approval required | Can edit files | Can run shell | Network | Notes |
|---|---|---|---|---|---|
| `default` | All ops | Prompted | Prompted | Prompted | Safest |
| `plan` | N/A — writes blocked | ✗ | ✗ | ✗ | Read-only |
| `acceptEdits` | Shell + network | ✓ auto | Prompted | Prompted | Best balance |
| `auto` | Classifier decides | ✓ auto | Auto/blocked | Auto/blocked | Enterprise only |
| `dontAsk` | Deny unless listed | If in allow list | If in allow list | If in allow list | Scripted automation |
| `bypassPermissions` | None | ✓ | ✓ | ✓ | Isolated env only |

---

## Configuration: settings.json

### Layer precedence (highest to lowest)

1. **Enterprise** — `/Library/Application Support/ClaudeCode/managed-settings.json` *(admin-locked)*
2. **User** — `~/.claude/settings.json`
3. **Project shared** — `.claude/settings.json` *(checked in — applies to whole team)*
4. **Project local** — `.claude/settings.local.json` *(gitignored — per-developer overrides)*

### Structure

```json
{
  "permissions": {
    "defaultMode": "acceptEdits",
    "allow": [
      "Bash(git:*)",
      "Bash(npm run:*)",
      "Bash(npm test:*)",
      "Bash(npx tsc:*)",
      "Bash(ls:*)",
      "Read(./**)",
      "Edit(./src/**)",
      "Write(./src/**)",
      "mcp__github__*"
    ],
    "deny": [
      "Bash(rm -rf:*)",
      "Bash(curl:*)",
      "Bash(git push:*)",
      "Read(./.env*)",
      "Write(./.env*)"
    ]
  }
}
```

### Pattern syntax

| Pattern | Matches |
|---|---|
| `Bash(git status)` | Exact command only |
| `Bash(git status:*)` | Command with any arguments |
| `Read(./src/**)` | Any file under `./src/` |
| `mcp__github__*` | All tools from the github MCP server |

**Specificity wins:** `Bash(rm:*)` in deny blocks `rm -rf node_modules` even if `Bash(rm:*)` also appears in allow. Deny always beats allow at equal or greater specificity.

### Common mistakes

- **Omitting `:*`** on Bash patterns — the pattern matches the exact string only, not the command with arguments
- **Storing team allow rules in `.local.json`** — teammates don't inherit them
- **Enabling bypassPermissions without a deny list** — nothing is blocked
- **Allowing `Read(/**)`** — grants access to sensitive user-level files
- **Scoping edits too broadly** (e.g., `Write(./**)`) — allows writing dotfiles and config

---

## Hooks: programmatic permission gates

`PreToolUse` hooks run a shell command before any tool call. They let you enforce conditional logic that the allow/deny syntax can't express.

```bash
# .claude/hooks.json
{
  "PreToolUse": [
    {
      "matcher": "Bash",
      "command": "/usr/local/bin/check-git-branch.sh"
    }
  ]
}
```

Exit codes:
- **0** → allow the tool call
- **2** → block (stderr message shown to Claude)
- **Other** → fall back to normal permission flow

Use cases: prevent merges to main, block calls to production endpoints, enforce audit logging before destructive ops.

> **Known issue (as of Feb 2026):** deny rules may not function correctly in certain configurations; defense-in-depth combining hooks + rules is recommended.

---

## Sandbox: the layer beneath permissions

Permissions control *which tools Claude can call*. The sandbox controls *what those tools can actually do at the OS level*.

On **macOS**, Claude Code's sandbox uses Seatbelt (the same framework that isolates App Store apps). On **Linux/WSL2**, it uses bubblewrap (`bwrap`). Neither requires Docker.

Enable via the `/sandbox` command within Claude Code. Linux requires two packages:

```bash
sudo apt-get install bubblewrap socat   # Ubuntu/Debian
sudo dnf install bubblewrap socat       # Fedora
```

Sandbox config in `settings.json`:

```json
{
  "sandbox": {
    "mode": "auto-allow",
    "allowedDomains": ["registry.npmjs.org", "api.github.com"],
    "excludedCommands": ["docker"],
    "allowUnixSockets": false
  }
}
```

Sandbox modes:
- **`auto-allow`** — commands run inside sandbox automatically; only new domain requests prompt
- **regular** — every Bash command prompts even inside sandbox (max security)

Full technical details → [agent-sandbox](../concepts/agent-sandbox.md)

---

## Decision guide

```
Need full safety with oversight?         → default
Exploring / code review?                 → plan
Daily development?                       → acceptEdits + sandbox enabled
High-volume team use?                    → auto (requires Team/Enterprise)
Scripted pipeline, known tool set?       → dontAsk + explicit allow list
Fully sandboxed CI/throwaway container?  → bypassPermissions
```

---

## Sources

- [ai-agent-permissions-research.md](/sources/ai-agent-permissions-research.md)
- [agentic-engineering-overview](agentic-engineering-overview.md) — for broader context on human-in-the-loop vs autonomy
