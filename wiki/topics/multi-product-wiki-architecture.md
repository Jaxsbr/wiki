# Multi-Product Wiki Architecture

> How to build an internal wiki that spans many products and exposes entry points for content producers (e.g., software teams maintaining their own product pages). Synthesizes the [LLM Wiki pattern](llm-wiki-pattern.md) and the [Open Knowledge Format](open-knowledge-format.md).

## The design goal

Jaco's requirement:
1. **An agent builds and maintains an internal wiki** spanning many products — the agent does the bookkeeping, compounding knowledge across the whole portfolio.
2. **Content producers can update their own product's pages** — individual software teams own their product's entry in the wiki and can push updates without going through the central agent.

This is exactly the architecture OKF's producer/consumer independence principle enables.

## Architecture overview

```
                    ┌─────────────────────────────────┐
                    │        Root OKF Bundle          │
                    │  index.md  ·  log.md            │
                    │  products/                      │
                    │    ├── product-a/               │
                    │    ├── product-b/               │
                    │    └── product-c/               │
                    └──────────────┬──────────────────┘
                                   │ consumed by
                    ┌──────────────▼──────────────────┐
                    │       Orchestrating Agent       │
                    │  (ver-kyker or equivalent)      │
                    │  • Reads all bundles            │
                    │  • Maintains cross-product pages│
                    │  • Enriches / synthesizes       │
                    └─────────────────────────────────┘
```

Each product has its **own OKF bundle** (a sub-directory) owned and maintained by that product's team. The root index wires them together. The orchestrating agent consumes all bundles but doesn't need to own the per-product content.

## Layer breakdown

### Layer 1 — Per-product bundles (producer-owned)

Each software team maintains their own OKF bundle:

```
products/product-a/
├── index.md          ← team-maintained catalog of their product's concepts
├── log.md            ← their change history
├── overview.md       ← product overview (type: overview)
├── api/
│   ├── endpoints.md  ← API reference (type: api)
│   └── auth.md       ← auth docs (type: runbook)
├── data/
│   ├── events.md     ← event schema (type: table)
│   └── metrics.md    ← key metrics (type: metric)
└── runbooks/
    ├── deploy.md     ← deployment runbook (type: runbook)
    └── incident.md   ← incident playbook (type: runbook)
```

**Content producers write these.** They can be:
- Human engineers writing markdown directly (the format is just markdown + frontmatter)
- A metadata export pipeline generating concept files from live schema
- A product's own LLM agent maintaining its sub-bundle
- A combination (human curates; agent fills in technical details)

The only requirement: each concept file has a `type` field. Everything else is the product team's choice.

### Layer 2 — Root bundle (agent-maintained)

The orchestrating agent maintains the root bundle:

```
root/
├── index.md                ← master catalog linking to all product bundles
├── log.md                  ← agent activity log (ingests, cross-product queries)
├── cross-product/
│   ├── architecture.md     ← agent-synthesized: how products relate
│   ├── data-model.md       ← agent-synthesized: shared data entities
│   └── join-paths.md       ← agent-synthesized: how to join across products
└── concepts/
    ├── weekly-active-users.md  ← canonical definition, cross-linked to each product's impl
    └── customer-id.md          ← shared entity definition
```

The agent:
- Watches for updates to product bundles
- Ingests new/changed concept files (marks them in log.md)
- Builds cross-product synthesis pages (architecture, shared data model, canonical metric definitions)
- Resolves conflicts between product-level definitions

### Layer 3 — Query interface

When answering questions, the agent:
1. Reads `root/index.md` to orient
2. Identifies which product bundles are relevant
3. Reads those bundles' `index.md` files
4. Drills into specific concept files
5. Synthesizes a cross-product answer with citations

The agent never needs a proprietary integration for each product — OKF's format is the contract.

## Entry point patterns for content producers

How teams actually contribute to the wiki:

### Pattern 1: Git-based (simplest)

```
wiki-repo/
└── products/
    └── product-a/        ← product-a team has write access to this subtree
        └── *.md          ← they commit markdown + frontmatter directly
```

The orchestrating agent polls the repo (via scheduled task or webhook trigger) and ingests any changed files. Product teams work in markdown in their sub-directory; the agent picks up changes automatically.

**Entry point:** Pull request to `products/<product>/` — reviewable by the product team, no agent involvement required for updates.

### Pattern 2: Export pipeline (for schema-heavy products)

Product teams run an export script that reads live schema (database tables, API specs, etc.) and generates OKF concept files:

```bash
# example: generate OKF bundle from BigQuery dataset
enrichment-agent --dataset=acme.sales --output=products/sales/
```

The enrichment agent (Google ships a reference implementation) drafts a concept file per table, enriches it with documentation citations, and commits to the wiki repo. Product teams can then edit the generated files to add business context.

**Entry point:** Scheduled export + human review of generated content.

### Pattern 3: Per-product agent (for high-velocity teams)

Each product has its own LLM agent that maintains its sub-bundle autonomously:
- Ingests Slack threads, PR descriptions, incident postmortems
- Generates and updates concept files
- Proposes cross-links to other products via PR

The orchestrating root agent stays aware of updates via `log.md` in each sub-bundle.

**Entry point:** The per-product agent; humans curate via review.

## Cross-linking between products

Within a product bundle, links are relative markdown:
```markdown
See [auth runbook](../runbooks/auth.md)
```

Cross-product links should use `resource:` URLs pointing to the canonical location of the target concept, or use root-relative paths if everything is in one repo:
```markdown
See [customer entity definition](/products/crm/entities/customer.md)
```

The orchestrating agent's job includes **discovering and maintaining these cross-product links** — reading all bundles and identifying when product-a's concept of "customer_id" is the same as product-b's. This is where the agent adds value that no human team could sustain.

## Agent workflow: ingesting a product update

When a product bundle changes:

1. **Detect** — agent is triggered (webhook, scheduled scan, or manual)
2. **Identify** — read the product's `log.md` to see what changed since last ingest
3. **Ingest** — read changed concept files fully; update the agent's understanding
4. **Cross-reference** — check whether changed concepts affect cross-product synthesis pages
5. **Update root** — update `root/index.md` if new concepts appeared; append to `root/log.md`
6. **Synthesize** — if the change is significant, update or create cross-product pages

This is the same [Ingest operation](llm-wiki-pattern.md) from the LLM Wiki pattern, applied across a fleet of product bundles.

## Practical starting point

For a small organization (< 10 products, < 5 engineers per product):

1. Create a single git repo: `internal-wiki/`
2. Add a root `index.md` and `log.md`
3. Create `products/<product-name>/` for each product
4. Give each team write access to their sub-directory
5. Add a `CONTRIBUTING.md` that explains the OKF frontmatter convention (`type` required; `title`, `description`, `resource` recommended)
6. Wire an orchestrating agent (ver-kyker or equivalent) to the repo
7. Schedule the agent to ingest and synthesize on a daily or per-commit trigger

As the wiki grows:
- Add per-product export pipelines for schema-heavy content
- Add a static HTML visualizer (OKF reference implementation) for browsing
- Add search (qmd or similar) once the index.md approach shows strain

## What the orchestrating agent uniquely provides

Content producers own depth (per-product accuracy). The agent owns breadth (cross-product synthesis). Things only the agent can do at scale:

- **Canonical definitions** — "customer_id" means the same thing across all products
- **Join path discovery** — "to compute weekly active users, join events.user_id → crm.customer_id"
- **Conflict detection** — product-a says metric X is computed one way; product-b says another; agent flags it
- **Orphan detection** — concept mentioned in 3 product bundles but never given a top-level page
- **Cross-product runbooks** — incident playbooks that span multiple services

## See also

- [llm-wiki-pattern](llm-wiki-pattern.md) — the foundational three-layer architecture
- [open-knowledge-format](open-knowledge-format.md) — the spec that makes this interoperable
- [concepts/okf-bundle](../concepts/okf-bundle.md) — bundle anatomy and producer/consumer contract
- [agent-memory-engineering](context-memory-engineering-overview.md) — complementary: memory patterns for the orchestrating agent itself

## Sources

- sources/okf-google-cloud-blog.html
- sources/karpathy-llm-wiki-gist.md
