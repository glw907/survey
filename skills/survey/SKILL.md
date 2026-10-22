---
name: survey
description: Use when building or styling any house tool's UI (a daisyUI theme, CSS variables, a recipe for the cairn admin, a cairn site, a plain app, or a theme-limited app), or when asked where Survey's pieces live. Survey is the house style; this skill says which file to read for the task.
---

# Survey

Survey is the house style for every house tool. The repo is `glw907/survey`; a project pins it by git tag.

## Where each piece is

| For | Read |
| --- | --- |
| Any UI work | `DESIGN.md` first: principles, the token table, the signature details, one recipe per kind of app, and the motion rules |
| The values themselves | `tokens.json`, the one source. Never edit a built file |
| A daisyUI app | `theme/survey.css`, `theme/components.css`, `theme/fonts.css` |
| An app with no daisyUI | `theme/survey-vars.css` and `theme/fonts.css` |

Run `scripts/build` after editing `tokens.json`, and `scripts/gate` before a commit. A change to a value or a rule is a minor version, and a removed or renamed token is a major. `scripts/release <version>` tags and publishes once the changelog entry and `package.json` version are merged.

## Rules for working in a project

- Take a value from a token, never a literal.
- Pick the recipe in `DESIGN.md` that matches the app, and say in the change which one you followed.
- Consider motion in every place and keep it only where it helps. `DESIGN.md` says when.
- A value that fails contrast is tuned within its hue, and the change lists the old and new values.

## Writing

The writing files arrive in Survey's next release and will live in `skills/survey/writing/`. Edit them in the Survey repo only. A workstation edit to a vendored copy is overwritten by the next update.
