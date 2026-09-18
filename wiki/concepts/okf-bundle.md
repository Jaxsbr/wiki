# OKF Bundle

> The unit of knowledge in the [Open Knowledge Format](../topics/open-knowledge-format.md). A self-contained directory of markdown concept files with YAML frontmatter. Designed to be produced by anyone and consumed by any agent without translation.

## Anatomy

```
<bundle-root>/
├── index.md              # (optional) catalog of all concepts in this bundle
├── log.md                # (optional) append-only change history
└── <domain>/
    ├── <concept>.md      # one file per concept
    └── <sub-domain>/
        └── <concept>.md
```

The **file path** is the concept's identity. Rename the file = change the concept's id. There is no separate id field.

## Concept file structure

Every concept file has two parts:

**YAML frontmatter** — structured fields, queryable without parsing the body:

```yaml
---
type: table          # REQUIRED — the only required field
title: Orders
description: One row per completed order.
resource: https://bigquery.../orders
tags: [sales, core]
timestamp: 2026-05-28T14:30:00Z
---
```

**Markdown body** — all prose, tables, schemas, runbook steps, anything that needs to be communicated. Free-form; the spec imposes no structure on the body.

## Cross-linking

Concepts link to each other using **standard relative markdown links**:

```markdown
FK to [customers](/tables/customers.md).
```

This turns the directory into a **graph** — relationships richer than the parent/child hierarchy of the file system. An agent (or human) can follow links to navigate context without loading the entire bundle.

Cross-bundle links use `resource:` URLs pointing to external resources (web URLs, BigQuery URLs, API endpoints). There is no bundle-level namespace resolution in v0.1 — cross-bundle linking is by URL, not by relative path.

## Reserved filenames

Two filenames have special meaning in OKF:

| File | Role |
|---|---|
| `index.md` | Catalog/table-of-contents for agents navigating a directory. Agents are expected to read this first before drilling into individual concept files. |
| `log.md` | Append-only chronological record of changes to the bundle. Same pattern as the [LLM Wiki pattern](../topics/llm-wiki-pattern.md) log. |

Both are **optional** — a bundle without them is still conformant. But both are strongly recommended for bundles that grow over time and are consumed by LLM agents (the index is how the agent orients without loading every file; the log is how it understands what changed recently).

## What makes a conformant bundle

OKF v0.1 conformance requires:
1. Every concept file has a `type` field in its YAML frontmatter
2. Cross-links use standard markdown link syntax
3. The `index.md` and `log.md` filenames are used only for their reserved purposes (not as arbitrary concept files)

Nothing else is required. The bundle can be:
- A single flat directory of files
- A deeply nested hierarchy
- Committed to a git repo
- Shipped as a tarball
- Mounted on any filesystem
- Hosted in any S3-compatible bucket

## Producer/consumer contract

The bundle is the contract. Producers decide:
- What `type` values to use
- What additional frontmatter fields to include
- How to structure the body
- What directory hierarchy makes sense for their domain

Consumers handle:
- Whatever `type` values they encounter (or ignore ones they don't understand)
- Arbitrary bodies (they read markdown)
- Any directory depth
- Missing optional fields

This **decouples producer velocity from consumer compatibility.** A metadata export pipeline can add new fields without breaking the agent consuming the bundle. An agent can query bundles from five different teams without a per-team integration.

## See also

- [open-knowledge-format](../topics/open-knowledge-format.md) — the full spec and design principles
- [multi-product-wiki-architecture](../topics/multi-product-wiki-architecture.md) — how to federate multiple bundles across products
- [llm-wiki-pattern](../topics/llm-wiki-pattern.md) — the foundational pattern OKF formalizes

## Sources

- sources/okf-google-cloud-blog.html
