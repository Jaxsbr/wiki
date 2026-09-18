# LLM Wiki Pattern

> Karpathy's foundational pattern for building compounding knowledge bases with LLMs. Published as a [GitHub gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) (2026). Formalized by Google as the [Open Knowledge Format](open-knowledge-format.md).

## The core problem with RAG

Standard RAG systems — NotebookLM, ChatGPT file uploads, most retrieval pipelines — retrieve chunks at query time and generate an answer. Nothing accumulates. Ask a question that requires synthesizing five documents and the LLM finds and pieces together fragments from scratch every time.

**The LLM Wiki pattern does something different:** the LLM incrementally builds and maintains a persistent wiki that sits between you and the raw sources. When a new source arrives, the LLM doesn't just index it — it reads it, extracts key information, and integrates it into the existing wiki: updating entity pages, revising summaries, noting where new data contradicts old claims. Knowledge is **compiled once and kept current**, not re-derived on every query.

This is the key property: **the wiki is a persistent, compounding artifact.** Cross-references are already there. Contradictions have already been flagged. Synthesis reflects everything you've read. The wiki gets richer with every source added and every question answered.

## Three-layer architecture

```
Raw Sources (immutable)
      ↓  LLM reads
    Wiki (LLM-maintained markdown)
      ↓  LLM follows
    Schema (CLAUDE.md / AGENTS.md)
```

**Raw Sources** — your curated collection of articles, papers, images, data files. Immutable: the LLM reads, never modifies. Source of truth.

**The Wiki** — a directory of LLM-generated markdown files. Summaries, entity pages, concept pages, comparisons, overview, synthesis. The LLM owns this layer entirely. You read it; the LLM writes it.

**The Schema** — a config document (CLAUDE.md for Claude Code, AGENTS.md for Codex) that tells the LLM how the wiki is structured, what conventions to follow, and what workflows to run when ingesting sources, answering questions, or doing maintenance. This is what makes the LLM a disciplined wiki maintainer rather than a generic chatbot. Co-evolved by you and the LLM over time.

## Three operations

**Ingest** — you drop a new source into the raw collection and tell the LLM to process it. The LLM reads it, discusses key takeaways, writes a summary page, updates the index, updates relevant entity and concept pages, appends to the log. A single source may touch 10–15 wiki pages. Process one source at a time; stay involved to guide emphasis.

**Query** — ask questions against the wiki. The LLM searches for relevant pages (starting from index.md), reads them, and synthesizes an answer with citations. Answers can be filed back into the wiki as new pages. This matters: **good answers compound in the knowledge base** — comparisons, analyses, discovered connections shouldn't disappear into chat history.

**Lint** — periodic health check. Look for: contradictions between pages, stale claims newer sources have superseded, orphan pages with no inbound links, concepts mentioned but lacking their own page, missing cross-references, data gaps a web search could fill. The LLM can suggest new questions and new sources as a by-product.

## Indexing and logging

Two special files help the LLM navigate the wiki as it grows:

**index.md** — content-oriented. A catalog of every page: link, one-line summary, optional metadata (date, source count). Organized by category. The LLM reads it first when answering queries to locate relevant pages. Survives to moderate scale (~100 sources, hundreds of pages) without embedding-based RAG.

**log.md** — chronological. Append-only record of what happened and when: ingests, queries, lint passes. If entries start with a consistent prefix (`## [2026-04-02] ingest | Title`), the log becomes parseable with simple unix tools (`grep "^## \["`) and gives a timeline of the wiki's evolution.

## Why LLMs outperform humans at wiki maintenance

> "The tedious part of maintaining a knowledge base is not the reading or the thinking — it's the bookkeeping." — Karpathy

Humans abandon wikis because maintenance burden grows faster than value. Updating cross-references, keeping summaries current, noting when new data contradicts old claims, maintaining consistency across dozens of pages — no one wants to do this.

LLMs don't get bored, don't forget to update a cross-reference, and can touch 15 files in one pass. **The wiki stays maintained because the cost of maintenance is near zero.**

Human's job: curate sources, direct analysis, ask good questions, think about what it means.
LLM's job: everything else.

## Division of labor

In practice: the LLM agent is open on one side, Obsidian (or any markdown editor) is open on the other. The LLM makes edits based on the conversation; you browse results in real time — following links, checking the graph view, reading updated pages. Obsidian is the IDE; the LLM is the programmer; the wiki is the codebase.

## Use cases

- **Personal** — tracking goals, health, psychology, self-improvement; filing journal entries, articles, podcast notes
- **Research** — going deep on a topic over weeks/months; building a comprehensive wiki with an evolving thesis
- **Reading** — filing each chapter as you go, building out pages for characters, themes, plot threads (think fan wikis like Tolkien Gateway, built personally with LLM doing the cross-referencing)
- **Business/team** — internal wiki fed by Slack threads, meeting transcripts, project documents, customer calls. Humans in the loop reviewing updates. The wiki stays current because LLMs do the maintenance no one on the team wants to do.
- **Competitive analysis, due diligence, trip planning, course notes, hobby deep-dives**

## Optional tooling

- **Obsidian Web Clipper** — browser extension that converts web articles to markdown, useful for quickly getting sources into the raw collection
- **Search (qmd)** — at small scale the index file is enough; at larger scale, [qmd](https://github.com/tobi/qmd) provides local BM25/vector hybrid search for markdown files with an MCP server interface the LLM can use
- **Marp** — markdown-based slide deck format; useful for generating presentations from wiki content
- **Dataview** — Obsidian plugin that runs queries over YAML frontmatter; enables dynamic tables and lists if the LLM adds structured frontmatter
- **Version control** — the wiki is just a git repo of markdown files; version history, branching, and collaboration come for free

## Historical note

The idea is related in spirit to Vannevar Bush's Memex (1945) — a personal, curated knowledge store with associative trails between documents. Bush's vision was closer to this than to what the web became: private, actively curated, with the connections between documents as valuable as the documents themselves. **The part Bush couldn't solve was who does the maintenance. The LLM handles that.**

## Relation to OKF

Karpathy's gist describes an individual pattern. Google's [Open Knowledge Format](open-knowledge-format.md) takes the next step: formalizing it into a portable, interoperable specification so that wikis written by different producers can be consumed by different agents without translation. The LLM Wiki pattern is to OKF what "I'll use HTTP" is to "here is the HTTP/1.1 RFC."

See also: [open-knowledge-format](open-knowledge-format.md), [multi-product-wiki-architecture](multi-product-wiki-architecture.md), [concepts/okf-bundle](../concepts/okf-bundle.md)

## Sources

- sources/karpathy-llm-wiki-gist.md
