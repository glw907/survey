# Survey design guide

Survey is the house style for every house tool. Its look comes from USGS topographic quadrangle maps: paper-toned grounds, ink text, water blue, contour brown, and a few map details. It reads as a deliberate identity while staying on stock daisyUI 5 and Tailwind 4. Read this file first, then take the recipe that matches your app. The approved specimen of 2026-10-07 is in the history of `glw907/cairn-themes` at commit `c19e7ac`, under `survey-theme/reference/`.

## Principles

- Use stock daisyUI components through theme variables first. Add an override to `theme/components.css` only when a component cannot take the look through its variables, and record the reason beside the rule.
- Use tokens, never literals. A color, radius, duration, or easing that a token covers comes from the token, so a change to `tokens.json` reaches every app.
- Nothing casts a shadow, and nothing is a gradient. `--depth` and `--noise` are 0.
- No all-caps labels.
- Every control edge and every text pair meets WCAG 2.2 contrast: 4.5:1 for text, 3:1 for a control boundary. Decorative marks, such as the contour lines, carry no floor.
- Consider motion in every place and use it only where it helps. See [Motion](#motion).
- Nothing in Survey names a site. Site-specific details are settings in the app.

## What is in the repo

| Path | Holds |
| --- | --- |
| `tokens.json` | Every color, radius, font, size, spacing, and motion value, in light and dark (W3C DTCG). The one source. |
| `theme/survey.css` | The daisyUI 5 `survey` and `survey-dark` themes, the design scale, and the motion variables. Built. |
| `theme/survey-vars.css` | The same values as plain CSS variables, for an app with no daisyUI. Built. |
| `theme/components.css` | The alert, tab, and soft badge overrides, the icon stroke, and the `site-` signature details, as Tailwind `utilities` sublayers. |
| `theme/fonts.css` | Self-hosted Fontsource imports for Spectral, Karla (with its real italic), and Monaspace Neon. |

Run `scripts/build` after editing `tokens.json`. The gate (`scripts/gate`) fails when a built file is stale.

## Tokens

Spectral sets titles and reading text (headings at weight 500). Karla sets interface text. Monaspace Neon sets code. Fields and buttons take a 3px radius, boxes 4px, and badges, checkboxes, and toggles are fully round. Borders are 1px.

The `--cairn-*-ink` tokens are the status colors for alert headings. `--color-muted` is the secondary text gray, and it is also the placeholder color. `--site-field-bg` and `--site-field-border` give inputs and selects their own ground and a 3:1 edge. `--site-contour` and its opacity color the map lines. The `--site-code-*` tokens color syntax on a `base-200` ground.

<!-- tokens:start -->

### Color

| Token | Light | Dark |
| --- | --- | --- |
| `--color-base-100` | `#f7f7f3` | `#11171e` |
| `--color-base-200` | `#eeede6` | `#18212a` |
| `--color-base-300` | `#d9d6c9` | `#2a3542` |
| `--color-base-content` | `#22262b` | `#e6e8ea` |
| `--color-primary` | `#1c5a8c` | `#7fb5e4` |
| `--color-primary-content` | `#f1f7fc` | `#0b2236` |
| `--color-secondary` | `#8a5f36` | `#c79a6a` |
| `--color-secondary-content` | `#fbf5ee` | `#24160a` |
| `--color-accent` | `#2e4a5c` | `#9fb9cc` |
| `--color-accent-content` | `#eef4f8` | `#10202b` |
| `--color-neutral` | `#33383f` | `#262e38` |
| `--color-neutral-content` | `#eef0f2` | `#e6e8ea` |
| `--color-info` | `#1b7f86` | `#5cc3c9` |
| `--color-info-content` | `#f5fdfd` | `#062729` |
| `--color-success` | `#4c7538` | `#9ac884` |
| `--color-success-content` | `#f3f9ef` | `#142410` |
| `--color-warning` | `#c9952e` | `#e3b65a` |
| `--color-warning-content` | `#2b1d03` | `#2b1d03` |
| `--color-error` | `#b3261e` | `#f08a80` |
| `--color-error-content` | `#fff4f2` | `#3a0a06` |
| `--cairn-info-ink` | `#155f64` | `#7fd3d8` |
| `--cairn-success-ink` | `#3b5c2b` | `#a9d394` |
| `--cairn-warning-ink` | `#7a5510` | `#ebc678` |
| `--cairn-error-ink` | `#9a2019` | `#f4a199` |
| `--color-muted` | `#5d5f58` | `#a2a9b1` |
| `--site-field-bg` | `#ffffff` | `#0d1318` |
| `--site-field-border` | `#7d8187` | `#66717e` |
| `--site-contour` | `#a67c52` | `#c79a6a` |
| `--site-contour-opacity` | `0.28` | `0.25` |
| `--site-code-keyword` | `#1c5a8c` | `#7fb5e4` |
| `--site-code-string` | `#3b5c2b` | `#a9d394` |
| `--site-code-number` | `#9a2019` | `#f4a199` |
| `--site-code-function` | `#2e4a5c` | `#9fb9cc` |
| `--site-code-comment` | `#756857` | `#91897a` |

### Shape

| Token | Value |
| --- | --- |
| `--radius-selector` | `2rem` |
| `--radius-field` | `3px` |
| `--radius-box` | `4px` |
| `--size-selector` | `0.25rem` |
| `--size-field` | `0.25rem` |
| `--border` | `1px` |
| `--icon-stroke` | `1.5px` |
| `--depth` | `0` |
| `--noise` | `0` |

### Type

| Token | Value |
| --- | --- |
| `--font-display` | `"Spectral", serif` |
| `--font-body` | `"Karla Variable", system-ui, sans-serif` |
| `--font-mono` | `"Monaspace Neon", ui-monospace, monospace` |
| `--font-weight-heading` | `500` |
| `--text-step-1` | `0.64rem` |
| `--text-step-2` | `0.74rem` |
| `--text-step-3` | `0.76rem` |
| `--text-step-4` | `0.78rem` |
| `--text-step-5` | `0.8rem` |
| `--text-step-6` | `0.82rem` |
| `--text-step-7` | `0.86rem` |
| `--text-step-8` | `0.88rem` |
| `--text-step-9` | `0.9rem` |
| `--text-step-10` | `0.95rem` |
| `--text-step-11` | `1rem` |
| `--text-step-12` | `1.2rem` |
| `--text-step-13` | `1.6rem` |
| `--text-step-inline-code` | `0.86em` |

### Spacing

| Token | Value |
| --- | --- |
| `--spacing-1px` | `1px` |
| `--spacing-2px` | `2px` |
| `--spacing-3px` | `3px` |
| `--spacing-4px` | `4px` |
| `--spacing-5px` | `5px` |
| `--spacing-6px` | `6px` |
| `--spacing-7px` | `7px` |
| `--spacing-8px` | `8px` |
| `--spacing-9px` | `9px` |
| `--spacing-10px` | `10px` |
| `--spacing-12px` | `12px` |
| `--spacing-13px` | `13px` |
| `--spacing-14px` | `14px` |
| `--spacing-16px` | `16px` |
| `--spacing-20px` | `20px` |
| `--spacing-24px` | `24px` |

### Motion

| Token | Value | Use |
| --- | --- | --- |
| `--motion-quick` | `150ms` | Hover and color changes. |
| `--motion-base` | `240ms` | Panels and toasts appearing. |
| `--motion-ease` | `cubic-bezier(0.2, 0, 0.38, 0.9)` | Things moving within the page. |
| `--motion-ease-enter` | `cubic-bezier(0, 0, 0.38, 0.9)` | Things arriving. |

Under `prefers-reduced-motion: reduce`, both durations become `0ms`.

<!-- tokens:end -->

## Signature details

The map character comes from five details in `theme/components.css`. Each encodes structure, and none carries text of its own.

| Class | What it is |
| --- | --- |
| `site-contour-texture` | Faint contour lines filling a page header (an inline SVG in a `relative isolate` header). |
| `site-benchmark` | A small triangle beside a wordmark or a tool page's title. |
| `site-contour-rule` | A dashed contour-brown divider under a section or list group. |
| `site-collar` | A footer strip like a quad sheet's margin, with two fields from markup. |
| `site-index-rail` | An alphabet thumb-index on a long list. A letter with entries is dark and bold, an empty letter is gray, the current letter is filled. |

The alert gets one override: a 4px status bar on a `base-200` field, with its text 14px from the box edge. The ochre warning bar is low contrast on its ground, so an alert's bold heading, in the status ink, always carries the meaning.

Stock daisyUI covers the rest. The Cancel button is a plain `btn btn-ghost`. A destructive button is `btn btn-outline btn-error`.

## Icons

Survey's icon set is [Lucide](https://lucide.dev) (ISC license, about 2,100 icons). cairn-cms already ships it, so every house tool draws from one set. Lucide draws strokes on a 24px grid with round caps, which suits the ink-line look. A Svelte app installs `@lucide/svelte`, and an app with no framework copies inline SVG from `lucide-static`. Both put the `lucide` class on every icon, and `components.css` sets that class's stroke to `--icon-stroke` (1.5px) at every size. Lucide's stock stroke grows from 1.33px at 16px to 2px at 24px, which reads heavier than Survey's 1px borders.

### When to use an icon

An icon earns its place when it helps the reader find or recognize something they will act on. NN/g's research finds that few icons are understood without a label (home, search, and print among them), so a visible text label goes beside nearly every icon. Put one in these places:

- Beside the label of a frequent action, so the button is found at a glance (Add, Upload, Edit).
- Beside a navigation entry or a tab, when every sibling entry has one too.
- At the start of a list row, to show the item's kind (a login, a card, a note).
- Beside status text, in the status ink, so a warning or an error stands out from plain rows.
- Alone in an icon-only button, only for close, search, and an overflow menu, and only in a toolbar or a field where space is tight. The button carries an accessible name.

Leave the icon out in these places:

- Reading text, headings, and article pages. A cairn site's prose carries no icons.
- Every button in a row. When each one has an icon, none stands out. Cancel stays text.
- Field labels, table headers, and section headings, where the words already do the work.
- Anywhere the icon is the only signal. A state shown by an icon also shows in text.
- In place of a signature detail. The benchmark triangle and the contour marks are drawn by `components.css`, never taken from the icon set.

### One icon for one meaning

Use the same icon for the same meaning in every house tool, since an icon that changes meaning between tools stops being read. These are the house choices, matched to what cairn-cms already uses:

| Meaning | Lucide icon |
| --- | --- |
| Add | `plus` |
| Edit | `square-pen` |
| Delete | `trash-2` |
| Close or dismiss | `x` |
| Done or confirmed | `check` |
| Search | `search` |
| Settings | `settings` |
| Opens another site | `external-link` |
| Warning | `triangle-alert` |
| Information | `info` |
| Show or hide a value | `eye`, `eye-off` |
| Expand a section | `chevron-down` |

A meaning not in the table takes the icon Lucide's search returns first for its plain name. Add it to the table when a second tool uses it.

### Treatment

| For | Rule |
| --- | --- |
| Size | 16px beside interface text, in buttons, and at the start of a list row. 14px in a badge or a dense row of small text. 20px in primary navigation. 24px in an item tile. Take the size from the spacing tokens (`--spacing-16px`) or Tailwind's matching `size-4`, never a value between them. |
| Stroke | `--icon-stroke`, set by `components.css`. Never pass `strokeWidth` to one icon. |
| Color | An icon takes `currentColor`, the color of the text it sits beside, as Carbon also advises. A secondary icon, such as a list row's kind, takes `--color-muted`. A status icon takes its `--cairn-*-ink`, never the status fill. Icons have no fills, no duotone, no colored tile behind them, no gradient, and no shadow. |
| Tile | Where an item needs a picture, such as a vault entry, the tile is a 24px ink icon centered in a 40px box with a 1px `base-300` border and the `--radius-box` corner. |
| Alignment | An icon beside text sits in an `inline-flex items-center` row with a 6px gap, centered on the text and never on its baseline. Beside text that wraps, the icon sits on the first line (`items-start`, with a top margin that centers it on that line). |
| Accessibility | An icon beside a label is decorative: `@lucide/svelte` sets `aria-hidden="true"` when you pass no accessible name, and an inline SVG needs the attribute added. An icon-only button carries `aria-label`, and its icon meets 3:1 against its ground (WCAG 1.4.11). Its target is at least 24px square (WCAG 2.5.8), which daisyUI's `btn-sm btn-square` gives. |
| Motion | Icons do not move. The one moving icon is daisyUI's `loading` spinner during a wait. An icon's color changes with its button's hover, at the button's speed. |

Sources: NN/g, [Icon usability](https://www.nngroup.com/articles/icon-usability/); [Carbon icon usage](https://carbondesignsystem.com/elements/icons/usage/); WCAG 2.2 [SC 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) and [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).

## Recipes

Every recipe starts the same way: install `daisyui`, `tailwindcss`, and the three Fontsource packages that `theme/fonts.css` imports, and install Survey with `npm install github:glw907/survey#v<version>`. A Svelte app with icons also installs `@lucide/svelte`; see [Icons](#icons).

### Cairn admin

Use this for a cairn-cms admin or any tool built on its chassis.

1. In the entry sheet, import Tailwind, activate the daisyUI plugin, then import `survey/theme/fonts.css`, `survey/theme/survey.css`, and `survey/theme/components.css`, in that order.
2. Build screens from stock daisyUI components. Reach for a `site-` class only for a signature detail.
3. Put the benchmark triangle beside the tool page's title, and the index rail on any long alphabetical list.

Motion: lean on daisyUI's stock motion for buttons, fields, toasts, drawers, and modals, and use the Survey tokens only in rules you add. A save confirms with a toast; lists, forms, and editor panes appear in place with no arrival animation.

### Cairn site

Use this for a public, reading-first site on cairn-cms.

1. Take the admin recipe's imports.
2. Point reading text at the display face (`font-display`), and keep Karla for navigation and forms.
3. Style prose from the specimen's details: links in `--color-primary` with a 1px underline offset 3px; a blockquote in italic Spectral, `--color-muted`, with a 2px `--color-secondary` rule and 14px left padding; inline code on `base-200` with a 3px radius and `--text-step-inline-code`; a code block on `base-200` with a 1px `base-300` border, a 4px radius, and 10px 12px padding; and the current page in the nav underlined 6px below in `--site-contour`.
4. Color code from the `--site-code-*` tokens: keyword, string, number, function, and comment.
5. Use all five signature details. The collar's two fields are site settings.
6. Keep icons to the interface: the search field, the menu button, and a link that opens another site. Reading text, headings, and the collar carry none.

Motion: a reading page has almost nothing to animate. Links and the index rail fade color at `--motion-quick`, and article text, images, and navigation appear without motion on load or scroll.

### Plain app

Use this for a small daisyUI app that is not on cairn, such as the approval queue.

1. Take the admin recipe's imports.
2. Set `data-theme` only if you must force a scheme. Otherwise `survey` is the default and `survey-dark` follows `prefers-color-scheme`.
3. Write app CSS with tokens (`var(--color-muted)`, `var(--spacing-8px)`), never literals.

Motion: follow the cairn admin rule. Take daisyUI's stock motion, use the tokens for any transition the app writes itself, and put page content on screen at once.

### Theme-limited app

Use this for an app that cannot run daisyUI, such as Bulwark webmail.

1. Import `survey/theme/survey-vars.css`. It sets the same variable names as the daisyUI theme on `:root`, with dark values under `prefers-color-scheme: dark`.
2. Import `survey/theme/fonts.css` for the faces, and set `font-family` from `--font-body`, `--font-display`, and `--font-mono`.
3. Map the app's own theming hooks to the variables: grounds to `--color-base-100` through `-300`, text to `--color-base-content` and `--color-muted`, accents to `--color-primary` and `--color-secondary`, and radii to `--radius-field` and `--radius-box`. Add the details that fit, copying a rule from `components.css` with its variables.
4. For icons, inline the SVG from `lucide-static` and copy the `.lucide` stroke rule from `components.css`. The rule needs inline SVG, since `vector-effect` does not reach an icon drawn through `<use>` or an `<img>`.
5. Check every pair you map against the contrast floor. A hook that cannot take a token's value is the app's finding to raise, not a reason to pick a nearby color.

Motion: without daisyUI, the app's own CSS carries every transition, so write each one with the `--motion-*` variables from `survey-vars.css`. The reduced-motion block then covers them all. Keep to a short list: hover color, a toast or panel arriving, a panel closing.

## Motion

Survey treats motion as a token group like color and space, so every place gets a decision, and most places
decide against it. Motion earns its place when it tells the reader something: that the system heard an
action, that the screen changed state, or where a new element came from. NN/g names these as the jobs
animation does well, and Apple puts the rest plainly: "Don't add motion for the sake of adding motion."
This follows Survey's wider rule of no shadows and no decorative effects.

### When to leave motion out

- The interaction happens often. Apple advises avoiding motion on frequent UI interactions, and NN/g says
  the more often an animation plays, the shorter and subtler it should be.
- The content is the point. Text, tables, and forms appear in place, with nothing fading or rising in.
- The cue is focus. A focus ring shows at once, with no transition, because a delayed ring is a delayed
  answer to "where am I?"
- The motion would be the only signal. Any state that moves also shows in text, color, or position.

### Durations and easings

The research supports all four values. Both durations are IBM Carbon tokens: 150ms is `duration-moderate-01`
(micro-interactions, small expansions) and 240ms is `duration-moderate-02` (expansions, system
communication, toasts). Material 3 sits close by, with `short3` at 150ms and `medium1` at 250ms, and NN/g
puts a modal entering at 200 to 300ms. Both easings are Carbon's productive standard and entrance curves,
meant for task-focused work. An exit runs at `--motion-quick` with `--motion-ease`: NN/g notes exits can
be shorter than entrances, and Carbon uses the standard curve for a panel that can come back. Use the
tokens in every transition you write, since a hard-coded duration escapes the reduced-motion rule.

### Reduced motion

Every built sheet ends with a `prefers-reduced-motion: reduce` block that sets `--motion-quick` and
`--motion-base` to 0. This is WCAG technique C39, and it meets success criterion 2.3.3, Animation from
Interactions (AAA). That criterion excludes color and opacity changes from "motion," so zeroing color
fades goes further than required; one rule is simpler to trust. Two caveats apply. First, the block
reaches only Survey's tokens. daisyUI already stills its own toast, skeleton, spinner, and collapse under
`reduce`, but its drawer and modal still slide for 300ms, so
`survey.css` also sets their transition duration to 0 inside the same block. Second, a transition with a
0s duration fires no `transitionend` event, so never wait on that event to finish removing an element.

Anything that moves on its own for more than five seconds beside other content needs a way to pause,
stop, or hide it (SC 2.2.2, Pause, Stop, Hide, level A).

### Place by place

Before adding motion anywhere, ask whether the reader would miss the change without it. If they would
not, leave it instant.

- **Index rail letter hover** (`.site-index-rail a:hover`): keep, at `--motion-quick` with `--motion-ease`.
  The color change confirms the pointer target in a dense rail, and the fade matches daisyUI's buttons.
- **Link hover color** (in a link rule your app writes): keep on the same terms, so links and buttons answer the pointer alike. The color
  change itself carries the feedback, and a 150ms fade only softens it.
- **daisyUI button and field hover and focus**: keep daisyUI's stock 200ms color transitions and leave
  them alone. Overriding stock components breaks the DaisyUI-first rule for no gain. Focus outlines
  stay instant.
- **List row hover background**: drop the fade and change it at once. The pointer crosses many rows
  on its way to one, so a fade plays over and over and lags behind the pointer.
- **Icons**: drop. An icon changes color with its button and never moves on its own, except daisyUI's
  `loading` spinner during a wait.
- **Alert or toast appearing**: keep. Use daisyUI's stock toast (250ms ease-out) where daisyUI is
  present. Elsewhere use `--motion-base` with `--motion-ease-enter`. Inline alerts that render with the
  page appear without motion.
- **Panel or drawer opening**: keep, since it shows where the panel came from. daisyUI's drawer and
  modal keep their stock slide. A panel you build opens at `--motion-base` with `--motion-ease-enter`
  and closes at `--motion-quick` with `--motion-ease`.
- **Fade or rise-in on page content at arrival** (the approval queue): drop. It plays on every page
  load, delays reading, and tells the reader nothing the content does not. The rise is motion under
  2.3.3, too.
- **Skeleton and loading**: keep daisyUI's `loading` spinner for short waits, since it answers "is
  anything happening?" Drop skeletons. Their shimmer loops alongside live content, which is decoration
  and a 2.2.2 risk on a slow load. Plain "Loading" text is often enough.

### Sources

[Carbon motion](https://carbondesignsystem.com/elements/motion/overview/);
[Material 3 motion tokens](https://github.com/material-components/material-web/blob/main/tokens/versions/v0_192/_md-sys-motion.scss);
[Apple HIG, Motion](https://developer.apple.com/design/human-interface-guidelines/motion);
NN/g on [animation duration](https://www.nngroup.com/articles/animation-duration/) and
[animation's purpose](https://www.nngroup.com/articles/animation-purpose-ux/);
WCAG 2.2 [SC 2.3.3](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html),
[SC 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html), and
[technique C39](https://www.w3.org/WAI/WCAG22/Techniques/css/C39).
