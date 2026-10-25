# Survey

The house style for every house tool: a daisyUI theme, a CSS-variable sheet, a DESIGN.md for agents, and the house writing voice. Releases are git tags.

## Use it

```bash
npm install github:glw907/survey#v1.1.0
```

This installs `theme/` and `DESIGN.md`. Read `DESIGN.md` first; it has a recipe for each kind of app. To roll back, pin the previous tag.

Two other ways in carry the Vale style and the writing files. A repo that lints prose adds `Packages = https://github.com/glw907/survey/releases/download/v1.1.0/Survey.zip` to its `.vale.ini`, runs `vale sync`, and commits `.vale/styles/Survey/`. A workstation session reads the `survey` skill, which the workstation vendors from this repo.

## Report a gap

A project that finds a gap in Survey records it in `FRICTION.md`, then works around it in its own CSS until Survey ships the fix.

## Work on it

Edit `tokens.json`, run `scripts/build`, and run `scripts/gate` before committing (`npm install` first). A release is `scripts/release <version>` from `main`, after the PR that bumps `package.json` and dates the `CHANGELOG.md` entry has merged.
