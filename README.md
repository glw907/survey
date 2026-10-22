# Survey

The house style for every house tool: a daisyUI theme, a CSS-variable sheet, a DESIGN.md for agents, and the house writing voice. Releases are git tags.

## Use it

```bash
npm install github:glw907/survey#v1.0.0
```

This installs `theme/` and `DESIGN.md`. Read `DESIGN.md` first; it has a recipe for each kind of app. To roll back, pin the previous tag.

## Work on it

Edit `tokens.json`, run `scripts/build`, and run `scripts/gate` before committing (`npm install` first). A release is `scripts/release <version>` from `main`, after the PR that bumps `package.json` and dates the `CHANGELOG.md` entry has merged.
