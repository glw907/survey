# BACKLOG

> Project issue tracker. Managed by `/log-issue`.

## High

- [ ] **#1** Add the empty "own" to the writing tells, with a deterministic check `#improvement` `#survey` *(2026-10-22)*
  A possessive followed by "own" that adds nothing reads as machine-written: "the plugin's own settings page" says no more than "the plugin's settings page". Geoff ruled it must be caught in all house writing. Add it to `writing-voice.md`'s tells and give `tellgrader` a warn-level lexical check for `'s own`. Keep it a warning, because "own" that marks a contrast ("the site declares its own role names, or uses the default pair") is fine.
  Batch 2: `tellgrader --register docs` exits 0 on both blueprints Geoff sent back for the empty "own" (record 7).

## Medium

- [ ] **#2** Add a dangling-idiom scan to `tellgrader` and to any word-sweep method `#improvement` `#survey` `#initiative:docs-system` *(2026-10-24)*
  Scripted removal of "own" turned "no X of its own" into "no X of its" in the PR #137 sweep; a post-merge scan ("of" or "on", then "its" or "their", then punctuation or a function word) found 14 remnants. Pair it with #1's warning and build it into any future sweep's method (record 6).
  Record: `~/Projects/initiatives/docs-system/research/2026-10-22-extend-blueprints-batch-2-friction.md`
