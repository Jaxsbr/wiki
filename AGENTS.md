# Ver-Kyker research wiki

Jaco's persistent research repository, relocated from NanoClaw on 2026-09-16. The Ver-Kyker persona is retired; use these instructions directly from any assistant working in this repository.

## Layout

- `wiki/`: authoritative Markdown research, including `index.md`, `requests.md`, `log.md`, `topics/`, `concepts/`, and optional `entities/` and `demos/`.
- `sources/`: private original documents and extracted source text. Preserve originals; never publish this directory. It is ignored by Git.
- `_build/`: observatory theme, static-site builder and publishing scripts.
- Root `index.html`, `_assets/`, `topics/`, `concepts/`, `demos/`, `requests/`, and `log/`: generated site output.

The publishing repository remains `Jaxsbr/wiki`; its public site is https://jaxsbr.github.io/wiki/. There is no persistent local server. The former source checkout's Git metadata is preserved at `../../archive/personas/retirement-2026-09-16/wiki-source-git/`; current Markdown belongs to this repository.

## Research workflow

Start by reading `wiki/requests.md` and `wiki/index.md`. Register each new request as R-NNN, with scope and status. Reuse prior research when it answers the request; if an overlapping request is ambiguous, clarify whether it is an amendment or new work. Keep status current and append a dated entry to `wiki/log.md`.

The three layers are immutable sources, an interlinked wiki, and these instructions. Operate in three modes:

1. **Ingest:** read one source fully, extract evidence and takeaways, then update relevant topic, entity and concept pages, cross-links, index and log. Complete that source before reading the next. Do not batch several sources into a shallow combined summary.
2. **Query:** locate existing pages through the index, synthesize with citations, and save useful new answers into the wiki.
3. **Lint:** check contradictory or stale claims, broken links, orphan pages, missing cross-references and concepts deserving dedicated pages; record findings and repairs.

Preserve full source content when tools and permissions allow. A search snippet or summarized fetch is not a substitute for reading the document. For JavaScript pages, extract readable content with an appropriate browser tool. Record source URL and retrieval date, distinguish inference from sourced fact, and make claims traceable to source filenames in each page's Sources section. Be explicit about inaccessible evidence and uncertainty.

Use kebab-case filenames, a single leading `# Title`, and relative Markdown links. Update the catalog whenever adding a page. Research pages should include relevant imagery, official trailers, and direct links to the games/projects being discussed. Steam header hotlinks are supported; downloaded image files are not published by the current builder. Prefer official websites, Steam/itch.io, developer pages, repositories and primary documentation.

## Build and publication

Author Markdown in `wiki/`; the build owns generated HTML and the theme. Intentional HTML showcases may live in `wiki/demos/`. Avoid editing generated output or theme assets for ordinary research.

Run `node _build/build.mjs` to rebuild locally. It defaults to this repository's `wiki/`; `WIKI_SRC` overrides the input and `WIKI_OUT` selects an alternate output directory for verification. Check that pages render and internal links work before publishing. Raw sources must stay private, and source references should be readable citations rather than links to unpublished files.

Publish only when Jaco requests it. The existing `sh _build/publish.sh "message"` builds and publishes through GitHub's Git Data API. On the host, select the `Jaxsbr` account according to the parent AGENTS.md; pass an existing credential via `WIKI_PUBLISH_TOKEN` without exposing it. Inside an already configured OneCLI gateway, the placeholder credential is injected by the gateway. Git transport restrictions were container-specific, not a general ban on host Git.

The API publisher includes only generated site paths and `_build/`; private `sources/`, local Markdown, and other files are not part of its public snapshot. Do not change this boundary casually. The current operation does not publish any migration changes.

For publishing failures, inspect the actual API response and Pages deployment logs. Account-level 401s from a repository-scoped gateway credential do not prove repository authentication is broken. Do not repeat pushes or builds blindly. Research exact errors, check current GitHub status and documentation, and treat historical workaround notes as hypotheses requiring verification.
