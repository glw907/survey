// The light and dark toggle's config: Survey's two daisyUI theme names and the cookie that remembers
// a visitor's choice. SiteHeader.svelte imports it.
//
// Two places outside this file carry the same names and change with it:
//   1. The inline script in src/app.html, which reads the cookie before first paint. Its regex
//      names the cookie and both themes; cairn-theme/README.md gives the line.
//   2. The two @plugin "daisyui/theme" blocks in theme.css, built from tokens.json.
// theme-names.test.ts fails when either one drifts from this file.
import type { ThemeToggleConfig } from '#chassis/theme-toggle.js';

/** The two explicit theme choices; theme.css defines both as named daisyUI themes. */
export type Theme = 'survey' | 'survey-dark';

/** Survey's names and cookie, fed to the chassis toggle. */
export const themeConfig: ThemeToggleConfig<Theme> = {
  light: 'survey',
  dark: 'survey-dark',
  cookieName: 'survey-site-theme',
};
