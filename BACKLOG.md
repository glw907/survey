# BACKLOG

> Project issue tracker. Managed by `/log-issue`.

## High

- [x] **#1** Add the empty "own" to the writing tells, with a deterministic check `#improvement` `#survey` *(2026-10-22)*
  A possessive followed by "own" that adds nothing reads as machine-written: "the plugin's own settings page" says no more than "the plugin's settings page". Geoff ruled it must be caught in all house writing. Add it to `writing-voice.md`'s tells and give `tellgrader` a warn-level lexical check for `'s own`. Keep it a warning, because "own" that marks a contrast ("the site declares its own role names, or uses the default pair") is fine.
  Batch 2: `tellgrader --register docs` exits 0 on both blueprints Geoff sent back for the empty "own" (record 7).
  Done: Survey PR #4 adds the tell (v1.3.0); the workstation PR adds the `empty-own` warning.

## Medium

- [ ] **#3** Raise inactive daisyUI tab contrast on the light header `#bug` `#survey` *(2026-10-25)*
  An inactive `.tab` measures 2.99:1 (#888989 on base-200 #eeede6), under WCAG 1.4.3's 4.5:1; dark measures 4.33:1. Setting inactive tabs to `--color-muted` gives 5.52:1 light and 6.86:1 dark, and the active tab still reads by its ink and underline. Found in a house app's design pass, which overrides it locally until Survey ships the fix.
- [ ] **#4** Raise soft warning and success badge text contrast `#bug` `#survey` *(2026-10-25)*
  In light, `badge-soft badge-warning` text measures 2.34:1 (#c9952e on #f4efe5) and `badge-soft badge-success` 4.49:1. The alert inks (`--cairn-warning-ink`, `--cairn-success-ink`) give 5.85:1 and 6.37:1. Dark already passes. Found in the same design pass.
- [ ] **#5** List a dense list row's hover as instant in the motion guide `#improvement` `#survey` *(2026-10-25)*
  DESIGN.md's "Place by place" covers link and button hover but not a list row's hover background. A 150ms fade on a contact list's rows read as too slow to the owner, since it plays on every row the pointer crosses. Add the row as an instant case under "When to leave motion out" (frequent interaction).
- [x] **#2** Add a dangling-idiom scan to `tellgrader` and to any word-sweep method `#improvement` `#survey` `#initiative:docs-system` *(2026-10-24)*
  Scripted removal of "own" turned "no X of its own" into "no X of its" in the PR #137 sweep; a post-merge scan ("of" or "on", then "its" or "their", then punctuation or a function word) found 14 remnants. Pair it with #1's warning and build it into any future sweep's method (record 6).
  Record: `~/Projects/initiatives/docs-system/research/2026-10-22-extend-blueprints-batch-2-friction.md`
  Done: the workstation PR adds the `dangling-possessive` warning and the word-sweep method page; ticked here in Survey PR #4.
