# AI Agent Permission Models — Hub

> A guide to permission and approval modes across Claude Code and OpenAI Codex CLI:
> what each permutation gives you, what it restricts, and the tradeoffs.
> Companion piece: [what "sandbox" actually means technically](../concepts/agent-sandbox.md).

---

## Why permissions matter for agentic coding

AI coding agents can read files, edit code, run shell commands, install packages, push to git, and make network calls. By default, every one of those actions requires your approval. Permission modes let you slide the dial from *maximum oversight* to *maximum autonomy* — but each position changes your blast radius if something goes wrong.

The key insight: **permissions and sandbox are two separate, complementary layers**.

| Layer | Controls | Enforced by |
|---|---|---|
| **Permissions / Approval** | *Which tools Claude/Codex is allowed to call* | Application logic, allow/deny rules |
| **Sandbox** | *What those tools can actually do at the OS level* | Kernel (Seatbelt, bubblewrap, Job Objects) |

You can have generous permissions inside a strict sandbox, or strict permissions with no sandbox at all. The most secure setup combines both.

---

## Quick comparison: all modes at a glance

| | Claude Code | Codex CLI |
|---|---|---|
| **Max safety** | `default` | `on-request` + `read-only` |
| **Read-only exploration** | `plan` | `on-request` + `read-only` |
| **Balanced dev** | `acceptEdits` | `on-request` + `workspace-write` |
| **Unattended, contained** | `dontAsk` + allow list | `never` + `workspace-write` |
| **AI-mediated auto** | `auto` (Team/Enterprise) | _(no equivalent — approval is binary)_ |
| **Full trust, isolated env** | `bypassPermissions` | `--dangerously-bypass-approvals-and-sandbox` |
| **Network control** | `allowedDomains` in sandbox config | `network_access = false` (default); domain allowlist |
| **Admin lock-down** | Enterprise managed-settings.json | `requirements.toml` (cannot be overridden) |

---

## Deep dives

- [Claude Code permission modes](claude-code-permissions.md) — all 6 modes, configuration syntax, hooks, tradeoffs table
- [Codex CLI permission modes](codex-permissions.md) — approval modes, sandbox levels, permission profiles, two-phase runtime
- [What the sandbox actually is](../concepts/agent-sandbox.md) — OS-level mechanics: Seatbelt, bubblewrap, Docker, network proxy, setup steps

---

## The "big picture" risk model

When choosing a mode, ask four questions:

1. **Can the agent reach production?** If yes, never use bypass/full-access without external isolation.
2. **Is the repo disposable?** If no, keep at least workspace-write (not danger-full-access).
3. **Do you need unattended operation?** Use `never` (Codex) or `dontAsk` + allow list (Claude), not bypass.
4. **Is there a sandbox underneath?** If yes, you can afford more permissive approval modes — the OS enforces the real limits.

The most common mistake: using `bypassPermissions` or `--yolo` on a long-lived host machine "because it's faster." That's not a sandbox — it's a loaded gun.

---

## Sources

- [ai-agent-permissions-research.md](/sources/ai-agent-permissions-research.md)
