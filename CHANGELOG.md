# Changelog

All notable changes to Survey are recorded here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow [Semantic Versioning](https://semver.org/): a changed value or rule is a minor, and a removed or renamed one is a major.

## [Unreleased]

## [1.5.0] - 2026-10-25

### Changed

- The `survey` skill's project rules say Survey is starting guidance, and ask a project to report each gap or hole as an entry in `FRICTION.md`.
- `DESIGN.md` asks every project to report a gap or hole it finds as an entry in Survey's `FRICTION.md`.
- `DESIGN.md` opens by saying Survey is starting guidance that a project may depart from, with the WCAG floors as the exception, and the icon size and stroke rules read as defaults.

### Fixed

- `DESIGN.md` "Icons" says the cairn admin's default stroke is 1.75px, and that Survey's rule overrides it in a Survey site.

## [1.4.0] - 2026-10-25

### Added

- An "Icons" section in `DESIGN.md`: Lucide is the house icon set, with when to use an icon and when to leave it out, one icon per meaning, and the size, color, tile, alignment, accessibility, and motion rules.
- The `--icon-stroke` token (1.5px) and a `components.css` rule that holds every Lucide icon's stroke at that width at any size.
- Icon steps in the cairn site and theme-limited recipes, and list row hover and icons in the motion guide.

### Fixed

- An inactive daisyUI tab takes `--color-muted`, which meets 4.5:1 on base-200 in both schemes.
- A soft warning or success badge takes its alert ink for its text, which meets 4.5:1 in light.

## [1.3.0] - 2026-10-24

### Added

- The empty "own" in `writing-voice.md`'s structural habits: a possessive plus "own" that adds nothing is a tell, and a real contrast keeps it.

## [1.2.0] - 2026-10-22

### Added

- A "Corrections" section in the `survey` skill: when Geoff corrects Claude's wording, Claude logs the before, after, context, and reason to a private notes repo.
- A "Releasing a change" section in the `survey` skill, with the release sequence from version bump to rollback.
- One paragraph in `writing-voice.md` pointing a wording correction at that section.

### Changed

- The `survey` skill's description also triggers when Geoff corrects Claude's wording.
- `technical-doc-go.md` names the vendored `Survey` style where it said the `glw907` overlay.

## [1.1.0] - 2026-10-22

### Added

- The writing files in `skills/survey/writing/`: the base style (`writing-voice.md`), the authoring charter, and six registers (agent-facing, approval-brief, commit-and-pr, editor, technical-doc-go, technical-doc-web), copied unchanged from the workstation.
- The `Survey` Vale style in `vale/Survey/`, seven rules copied from the `glw907` style, with the `EmDash` message naming `Survey.EmDash`.
- `audit/code-colors.css`, a gate-only sheet that maps cairn's code roles onto the `--site-code-*` colors.

### Changed

- `scripts/gate` measures the code-color contrast pairs instead of excluding the `--cairn-code-` ones.

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
