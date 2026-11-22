# Evaluations of 2026-11-21

Each JSON file is one `claude -p` session that `evals/run_evals.py` started. A file holds the query,
the model, whether the skill was on, the skills the session listed and loaded, any read of another
copy of the skill, its final answer, and how long it took. The raw streams stayed in the session's
scratch folder and aren't kept here.

Round 3 is the table of record. I named it the record before it ran, and it passes. Rounds 1 and 2
stay here in full.

## Rounds

| Folder | Sessions | What changed before it | Outcome |
| --- | --- | --- | --- |
| `round-1/` | 24 | First run of the final `evals.json` | Haiku missed the load on case 3. Off sessions could see copies of the skill in other jobs' scratch folders. The one read of another copy, `3-sonnet-off` on the user copy, was denied |
| `haiku-case-3-rate/` | 5 | The runner denies reads of other jobs' folders that hold a copy, and removes its plugin when the session ends | Haiku loaded the skill on case 3 in 3 of 5 |
| `haiku-case-3-description/` | 5 | The description names a correction to Claude's wording "in a commit, a doc, or a reply" as a reason to load the skill | Haiku loaded the skill on case 3 in 5 of 5 |
| `round-2/` | 24 | The runner denies reads of the round's raw streams | Every in-scope session with the skill on loaded it. Four off sessions read copies that my isolation probes had left in this job's scratch folder, so the round isn't the record |
| `round-3/` | 24 | Those copies removed; the runner denies any copy in this job outside the session's own folder | Passes |

I stopped one start of round 2 a few seconds in, to add the raw-stream denial, and deleted its
partial output before the round ran again.

## How the sessions were isolated

The workstation loads `survey` v1.7.0 as a user skill from `~/.claude/skills/survey`, and a user
skill wins over a project skill of the same name. So every session's `--settings` sets
`skillOverrides` to turn `survey` off, which drops the user copy from the listing. The same settings
deny reads of every other copy on disk: the user copy, the workstation's vendored copy, every checkout
and worktree of this repo, other jobs' folders that hold a copy, and earlier sessions' raw streams.
Read rules also stop Grep and Glob.

With the skill on, the session also gets `--plugin-dir` pointing at a one-skill plugin named
`survey`, which holds this branch's copy and lists as `survey:survey`. With the skill off, it gets
no plugin. Each record's `listed` field shows the listing: `["survey:survey"]` when on, and `[]`
when off.

## How a load is counted

A session loaded the skill when it called Skill on `survey:survey` or read the plugin copy's
`SKILL.md`. In round 3, every load was a Skill call. A Read or Grep of any other copy goes in
`otherCopyReads`. Round 3 has one: `2-opus-off` tried the main checkout's `SKILL.md`, and the
denial stopped it ("I couldn't read `skills/survey/SKILL.md` because the read permission was
denied"). `3-opus-off` also grepped `skills/survey` in another job's scratch folder. That folder
holds one old file under `writing/` and no `SKILL.md`, so the denial didn't cover it. The
grep for "corrections" found no match, and the session met none of the case's behaviors. The runner
missed that grep because the path had no trailing slash. It now counts a path that ends in
`skills/survey`, a fix made after round 3 ran, so I counted this one grep by hand from the raw stream.

## Round 3

Behaviors are numbered as in `evals.json`. Each quote comes from the named file's `result`.
Each Load quote comes from that file's `invoked` and `readSkillFile` fields. A cell marked "met
off" means every behavior was also met with the skill off.

| Case | Model | Loaded, on / off | Met, on | Met, off | Evidence, skill on | Evidence, skill off |
| --- | --- | --- | --- | --- | --- | --- |
| 1 daisyUI app | Haiku | yes / no | 3 of 3 | 0 of 3 | `1-haiku-on`. 1: "use `theme/survey.css`, `theme/components.css`, and `theme/fonts.css`". 2: "read `DESIGN.md` in the Survey repo", "Pick the recipe that matches a small internal tool". 3: "take every color from a token and never write a literal". Load: `"invoked": ["survey:survey"]` | `1-haiku-off`. "The house daisyUI standard is the `standards:daisyui` skill"; names no Survey file. Load: `"invoked": ["standards:daisyui"]`, `"readSkillFile": false` |
| 1 daisyUI app | Sonnet | yes / no | 3 of 3 | 3 of 3, met off | `1-sonnet-on`. 1: `survey/theme/fonts.css`, `survey/theme/survey.css`, `survey/theme/components.css`. 2: "Read `DESIGN.md` first", "Use the **Plain app** recipe". 3: "They come from the daisyUI theme variables that `survey.css` defines, not from literals". Load: `"invoked": ["survey:survey"]` | `1-sonnet-off`. The same three files. "Read it first, as the README says", "the Plain app recipe". "never a literal". It read `~/Projects/survey/DESIGN.md`. Load: `"invoked": ["standards:daisyui"]`, `"readSkillFile": false` |
| 1 daisyUI app | Opus | yes / no | 3 of 3 | 3 of 3, met off | `1-opus-on`. 1: the three files, in order. 2: "Read `DESIGN.md` from the top", "This is Survey's **Plain app** recipe". 3: "Every value comes from `tokens.json`", "Write no literal values". Load: `"invoked": ["survey:survey"]` | `1-opus-off`. The three files. "Start with `DESIGN.md`", "Recipes, Plain app". "use tokens, never literal values". It read `~/Projects/survey/DESIGN.md`. Load: `"invoked": []`, `"readSkillFile": false` |
| 2 token change | Haiku | yes / no | 3 of 3 | 2 of 3 | `2-haiku-on`. 1: "run `scripts/build` in the Survey repo, then `scripts/gate`". 2: "a changed value is a minor bump". 3: "I won't cut the release. Survey releases only when you ask for one", "The release steps are in `releasing.md`". Load: `"invoked": ["survey:survey"]` | `2-haiku-off`. Meets 1 and 2: "`scripts/build` regenerates", "`scripts/gate` checks", "**Version:** minor". On 3, "I won't cut it on my own", and it names no `releasing.md`. Load: `"invoked": []`, `"readSkillFile": false` |
| 2 token change | Sonnet | yes / no | 3 of 3 | 2 of 3 | `2-sonnet-on`. 1: "Run `scripts/build` after editing `tokens.json`, then `scripts/gate` before you commit." 2: "A changed color value is a minor version." 3: "Survey releases only when you ask for one, and `releasing.md` holds the steps". Load: `"invoked": ["survey:survey"]` | `2-sonnet-off`. Meets 1 and 2: `scripts/build`, `scripts/gate`, "The change is a minor." On 3, "only after you say go", and no `releasing.md`. Load: `"invoked": []`, `"readSkillFile": false` |
| 2 token change | Opus | yes / no | 3 of 3 | 2 of 3 | `2-opus-on`. 1: "Run `scripts/build` first", "Then run `scripts/gate` before you commit." 2: "Changing a value is a minor version." 3: "Survey only gets a release when you request one. When you do, I'll follow the steps in `releasing.md`." Load: `"invoked": ["survey:survey"]` | `2-opus-off`. Meets 1 and 2: `scripts/build`, `scripts/gate`, "**Minor.**" On 3, "I'd want your yes", and no `releasing.md`. Load: `"invoked": []`, `"readSkillFile": false`, one denied read in `otherCopyReads` |
| 3 correction | Haiku | yes / no | 3 of 3 | 0 of 3 | `3-haiku-on`. 1: "`/var/home/glw907/Projects/survey-notes/corrections/2026-11-21T<HHMMSS>-pavilion.md`. The time comes from `date +%FT%H%M%S`, and the host from `hostname -s`". 2: `date`, `host`, `repo`, `audience`, then Before, After, Context, "**Reason:** "not stated,"". 3: the four `git -C /var/home/glw907/Projects/survey-notes` commands, `add`, `commit -m "Log a correction" --`, `pull --rebase`, `push`. Load: `"invoked": ["survey:survey"]` | `3-haiku-off`. "I can't give you the exact file name from the skill." Load: `"invoked": []`, `"readSkillFile": false` |
| 3 correction | Sonnet | yes / no | 3 of 3 | 0 of 3 | `3-sonnet-on`. 1: "It goes in `/var/home/glw907/Projects/survey-notes/corrections/`", "`<YYYY-MM-DD>T<HHMMSS>-<host>.md`". 2: "`date`, `host`, `repo` and `audience`", "**Reason:** "not stated"". 3: the four commands. Load: `"invoked": ["survey:survey"]` | `3-sonnet-off`. "I don't know the log file's name, its entry format, or which commands write it." Load: `"invoked": []`, `"readSkillFile": false` |
| 3 correction | Opus | yes / no | 3 of 3 | 0 of 3 | `3-opus-on`. 1: "I write one file to `/var/home/glw907/Projects/survey-notes/corrections/`. Its name comes from `date +%FT%H%M%S` and `hostname -s`". 2: the frontmatter block, then `## Before`, `## After`, `## Context`, `## Reason` with "Not stated." 3: the four commands. Load: `"invoked": ["survey:survey"]` | `3-opus-off`. "No such skill is installed"; writes a memory file instead. Load: `"invoked": []`, `"readSkillFile": false` |
| 4 out of scope | Haiku | no / no | 2 of 2 | 2 of 2, met off | `4-haiku-on`. 1: `ExecStart=/usr/local/bin/nightly-backup`, `OnCalendar=*-*-* 02:00:00`, `Unit=nightly-backup.service`. 2: `invoked` is empty, `readSkillFile` false | `4-haiku-off`. The same units; `invoked` is empty |
| 4 out of scope | Sonnet | no / no | 2 of 2 | 2 of 2, met off | `4-sonnet-on`. 1: `ExecStart=/usr/local/bin/nightly-backup`, `OnCalendar=*-*-* 02:00:00`. 2: `"invoked": ["vps-conventions"]`, `readSkillFile` false | `4-sonnet-off`. The same units; `"invoked": ["vps-conventions"]` |
| 4 out of scope | Opus | no / no | 2 of 2 | 2 of 2, met off | `4-opus-on`. 1: `ExecStart=/usr/local/bin/nightly-backup`, `OnCalendar=*-*-* 02:00:00`. 2: `"invoked": ["vps-conventions"]`, `readSkillFile` false | `4-opus-off`. The same units; `"invoked": ["vps-conventions"]` |

Case 4 is the query that must not load the skill, so its behaviors are met with the skill off as
well. Case 1 is met with the skill off on Sonnet and Opus because both found `DESIGN.md` in the main
checkout and read it. Haiku off took `standards:daisyui` and named no Survey file. With the skill
off, case 2 keeps the build, the gate, and the minor version, which the repo's scripts and changelog
give, and never names `releasing.md`. Case 3 is met only with the skill on.

In round 3, one session took a median of 17.0 seconds, from 9.6 to 54.4. All 24 took 481 seconds, run
one at a time.
