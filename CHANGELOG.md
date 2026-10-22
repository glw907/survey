# Changelog

All notable changes to Survey are recorded here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow [Semantic Versioning](https://semver.org/): a changed value or rule is a minor, and a removed or renamed one is a major.

## [Unreleased]

## [1.0.0] - 2026-10-22

### Added

- `tokens.json` (W3C DTCG) with every color, radius, font, size, spacing, and motion value, in light and dark.
- `scripts/build`, which writes `theme/survey.css` (daisyUI 5 `survey` and `survey-dark` themes), `theme/survey-vars.css` (plain CSS variables), and the token table in `DESIGN.md`.
- `theme/components.css` and `theme/fonts.css`, adapted from the approval queue's copy of cairn-themes commit `dea9839`.
- `DESIGN.md` with the principles, the token table, the signature details, four recipes (cairn admin, cairn site, plain app, theme-limited app), and the motion rules.
- Motion tokens: `--motion-quick` (150ms), `--motion-base` (240ms), `--motion-ease`, and `--motion-ease-enter`, with a `prefers-reduced-motion: reduce` block that sets both durations to 0.
- Code colors (`--site-code-*`), the field ground and edge, and the contour color and opacity as tokens.
- The `survey` skill, `scripts/gate` (build current and theme contrast), and `scripts/release`.

### Changed

Values that differ from the approval queue's copy, by the rulings of 2026-10-22:

- Light contour color is `#a67c52`, and contour opacity is 28% light and 25% dark.
- Light `--site-code-comment` is `#756857` and dark is `#91897a`, tuned from the specimen for 4.5:1.
- Alert text sits 14px from the box edge.
- Karla's real italic is loaded.
- The index rail letter hover color fades at `--motion-quick`.
