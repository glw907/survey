# BACKLOG

> Project issue tracker. Managed by `/log-issue`.

## High

- [x] **#1** Add the empty "own" to the writing tells, with a deterministic check `#improvement` `#survey` *(2026-10-22)*
  A possessive followed by "own" that adds nothing reads as machine-written: "the plugin's own settings page" says no more than "the plugin's settings page". Geoff ruled it must be caught in all house writing. Add it to `writing-voice.md`'s tells and give `tellgrader` a warn-level lexical check for `'s own`. Keep it a warning, because "own" that marks a contrast ("the site declares its own role names, or uses the default pair") is fine.
  Batch 2: `tellgrader --register docs` exits 0 on both docs pages Geoff sent back for the empty "own" (record 7).
  Done: Survey PR #4 adds the tell (v1.3.0); the workstation PR adds the `empty-own` warning.

## Medium

- [ ] **#4** Style a plain `btn` inside `alert` `#bug` `#survey` *(2026-10-31)*
  Found in phonebook. Survey sets `.alert` to `--color-base-200`, and daisyUI 5's plain `.btn` uses the same color for its background with a border about 5% darker, so the button fills in like the alert behind it and reads as bold text (WCAG 1.4.11, borderline). Phonebook's Phones page key hold uses `btn btn-sm btn-outline` for the Clear action. Style a plain `.btn` inside `.alert` with a visible edge in `components.css`, or document `btn-outline` as the in-alert default in `DESIGN.md`.
- [ ] **#3** Ship a text selection color `#bug` `#survey` *(2026-10-25)*
  Found in phonebook. Neither `survey.css` nor `components.css` sets `::selection`, so a saturated system blue shows, clashing with the muted ground and reading harsh in `survey-dark`. Phonebook's override in `src/app.css` sets `background-color: color-mix(in oklab, var(--color-primary) 28%, var(--color-base-100))` with `color: var(--color-base-content)`. Ship that rule in `components.css`.

- [x] **#2** Add a dangling-idiom scan to `tellgrader` and to any word-sweep method `#improvement` `#survey` `#initiative:docs-system` *(2026-10-24)*
  Scripted removal of "own" turned "no X of its own" into "no X of its" in the PR #137 sweep; a post-merge scan ("of" or "on", then "its" or "their", then punctuation or a function word) found 14 remnants. Pair it with #1's warning and build it into any future sweep's method (record 6).
  Record: `~/Projects/initiatives/docs-system/research/2026-10-22-extend-blueprints-batch-2-friction.md`
  Done: the workstation PR adds the `dangling-possessive` warning and the word-sweep method page; ticked here in Survey PR #4.
