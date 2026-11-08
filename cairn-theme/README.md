# Survey for cairn

Survey as a cairn site theme. These files replace their namesakes in a cairn site's `src/theme/`, the theme half of cairn's chassis. The site keeps its own `cairn.config.ts`, `site-config.ts`, `site.config.yaml`, `site.css`, `ArticleView.svelte`, and islands, since those hold the site's content and wiring, not its look.

| File | Holds |
| --- | --- |
| `theme.css` | The chassis import, Survey's faces and components, the `survey` and `survey-dark` daisyUI themes, and the design tokens. Built from `tokens.json` by `scripts/build`. Do not edit. |
| `survey-site.css` | The cairn site recipe from `DESIGN.md`: Spectral reading text, the link, blockquote, and code rules, the alert directive, the code colors, and the keys the chassis needs a theme to set. |
| `theme-names.ts` | The toggle's theme names and cookie. |
| `components/SiteHeader.svelte` | The wordmark with the benchmark triangle, the nav, and the theme toggle, over the contour texture. |
| `components/SiteFooter.svelte` | The margin collar: the site name and the footer menu. |
| `components/EntryRow.svelte` | A listing row, with a contour rule under it. |

## Install it

From the site's root, with `<version>` the Survey release:

```bash
npm install github:glw907/survey#v<version>
npm install -D @fontsource/spectral @fontsource-variable/karla @fontsource/monaspace-neon
cp -R node_modules/survey/cairn-theme/. src/theme/
rm src/theme/README.md
```

Then edit the one line outside `src/theme/` that names the themes. In `src/app.html`, the inline script's cookie regex becomes:

```js
var match = document.cookie.match(/(?:^|; )survey-site-theme=(survey-dark|survey)(?:;|$)/);
```

Waymark's font packages (`@fontsource-variable/figtree`, `source-sans-3`, and `source-code-pro`) are no longer imported, and you can uninstall them.

## Check it

```bash
npx svelte-kit sync
npx vitest run src/theme/theme-names.test.ts
npx cairn-audit --rule public-literals --rule theme-conformance --rule theme-contrast
npm run build
```

The names test fails if `app.html` still carries Waymark's regex.

## What it leaves out

- **The index rail.** Survey's alphabet thumb-index belongs on a long alphabetical list, and a stock cairn site has none. A site that adds one, such as a glossary or a tag index, puts `site-index-rail` on it.
- **The home and archive pages.** They live in `src/routes/`, outside the theme. Their "Latest" and "Archive" eyebrows use the `uppercase` utility, so `survey-site.css` turns the case back to sentence case.

## Survey's type steps

cairn's chassis uses `--text-step--2` through `--text-step-5` as its reading scale, the sizes of body text and headings. Survey's `--text-step-1` through `--text-step-13` are interface sizes with some of the same names. So `theme.css` keeps the chassis scale, declares Survey's steps as `--site-text-step-N`, and gives them back under their Survey names only inside `.site-collar`, `.site-index-rail`, and `.alert`. Inside `.alert`, only the steps the chassis doesn't use come back, so a heading in an alert keeps the reading scale.
