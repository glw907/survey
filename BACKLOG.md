# BACKLOG

> Project issue tracker. Managed by `/log-issue`.

## High

- [x] **#1** Add the empty "own" to the writing tells, with a deterministic check `#improvement` `#survey` *(2026-10-22)*
  A possessive followed by "own" that adds nothing reads as machine-written: "the plugin's own settings page" says no more than "the plugin's settings page". Geoff ruled it must be caught in all house writing. Add it to `writing-voice.md`'s tells and give `tellgrader` a warn-level lexical check for `'s own`. Keep it a warning, because "own" that marks a contrast ("the site declares its own role names, or uses the default pair") is fine.
  Batch 2: `tellgrader --register docs` exits 0 on both docs pages Geoff sent back for the empty "own" (record 7).
  Done: Survey PR #4 adds the tell (v1.3.0); the workstation PR adds the `empty-own` warning.

## Medium

- [ ] **#9** Add the person-read default to the authoring charter's audience table `#improvement` `#survey` *(2026-11-13)*
  `skills/survey/writing/authoring-charter.md:38-49` lists Google for developer docs and has no row for a page a person reads in a repo with no recorded rules. Geoff ruled on 2026-11-13 that `~/.claude/docs/voice/written-for-people.md` is the default there. The workstation's guide, router, global `CLAUDE.md`, and planner reference now say so (workstation backlog #91), and the charter is the one map that still omits it. Add the row, then release and vendor per the `survey` skill.

- [ ] **#8** Remove `writing/approval-brief.md` at the next release `#improvement` `#survey` *(2026-11-13)*
  The workstation no longer reads the file: from round `ws-documents` (glw907/workstation#237), writing for Geoff follows the workstation's `~/.claude/docs/voice/written-for-people.md`, and the workstation's copy sits unused until a release drops it. Remove `skills/survey/writing/approval-brief.md`, and with it the `SKILL.md` table row at line 40 and the pointer at `skills/survey/writing/commit-and-pr.md:32`, which would otherwise name a file that is gone.
- [ ] **#7** Add touch guidance for phone-width apps `#improvement` `#survey` *(2026-11-01)*
  Found in phonebook's voicemail prototype at 375px. `DESIGN.md` has no rule for touch targets, hover-only states, or form text size. `btn-sm` measured about 34px tall, and daisyUI's `input` measured 14.875px at phonebook's 17px root, which makes iOS Safari zoom on focus. Phonebook overrides both below `sm`. State a minimum target size, a 16px floor for field text, and a pressed state for anything that shows hover.
- [ ] **#6** Give an audio player a treatment `#improvement` `#survey` *(2026-11-01)*
  Found in phonebook's voicemail messages prototype. `DESIGN.md` says nothing about audio, so the browser's native `<audio controls>` shows in rows and cards, with its own colors and shape. Phonebook uses the native control in both its greeting and message rows. Say whether the native control is the house default, and how it sits beside `btn-sm` controls.
- [ ] **#5** Say how a destructive action repeats down a list `#improvement` `#survey` *(2026-11-01)*
  Found in phonebook's voicemail messages prototype. `DESIGN.md` makes a destructive button `btn btn-outline btn-error`, which assumes one on the screen. Three message rows gave three red outlines beside each row's Play, and the rule doesn't say whether a repeated row action stays red until its confirm step. Phonebook follows the rule as written. Add a line for the repeated case.
- [ ] **#4** Style a plain `btn` inside `alert` `#bug` `#survey` *(2026-10-31)*
  Found in phonebook. Survey sets `.alert` to `--color-base-200`, and daisyUI 5's plain `.btn` uses the same color for its background with a border about 5% darker, so the button fills in like the alert behind it and reads as bold text (WCAG 1.4.11, borderline). Phonebook's Phones page key hold uses `btn btn-sm btn-outline` for the Clear action. Style a plain `.btn` inside `.alert` with a visible edge in `components.css`, or document `btn-outline` as the in-alert default in `DESIGN.md`.
- [ ] **#3** Ship a text selection color `#bug` `#survey` *(2026-10-25)*
  Found in phonebook. Neither `survey.css` nor `components.css` sets `::selection`, so a saturated system blue shows, clashing with the muted ground and reading harsh in `survey-dark`. Phonebook's override in `src/app.css` sets `background-color: color-mix(in oklab, var(--color-primary) 28%, var(--color-base-100))` with `color: var(--color-base-content)`. Ship that rule in `components.css`.

- [x] **#2** Add a dangling-idiom scan to `tellgrader` and to any word-sweep method `#improvement` `#survey` `#initiative:docs-system` *(2026-10-24)*
  Scripted removal of "own" turned "no X of its own" into "no X of its" in the PR #137 sweep; a post-merge scan ("of" or "on", then "its" or "their", then punctuation or a function word) found 14 remnants. Pair it with #1's warning and build it into any future sweep's method (record 6).
  Record: `~/Projects/initiatives/docs-system/research/2026-10-22-extend-blueprints-batch-2-friction.md`
  Done: the workstation PR adds the `dangling-possessive` warning and the word-sweep method page; ticked here in Survey PR #4.
