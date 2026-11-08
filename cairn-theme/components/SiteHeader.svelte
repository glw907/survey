<!-- @component
Survey's public header: the wordmark with the benchmark triangle, the primary nav, and the theme
toggle, over a band of faint contour lines. The site name and the nav come from `page.data`, which
the root layout server load fills from `site.config.yaml`; this component reads no site config.

The current page's nav link is underlined 6px below in `--site-contour`. Labels are in Karla, in
sentence case. The toggle is a text button, since Survey keeps icons to search, the menu, and links
that open another site. A link into `/admin` renders `rel="external"`, so SvelteKit's prerender
crawler skips it. -->
<script lang="ts">
  import { page } from '$app/state';
  import { browser } from '$app/env';
  import { resolveTheme, toggleTheme } from '#chassis/theme-toggle.js';
  import type { NavNode } from '@glw907/cairn-cms';
  import { isAdminHref } from './admin-link.js';
  import { themeConfig, type Theme } from '../theme-names.js';

  // A node with no url is a label-only group heading; the header renders top-level links only.
  const nav = $derived(
    (page.data.nav ?? []).filter(
      (item): item is NavNode & { url: string } => item.url !== undefined,
    ),
  );

  // Unset only when the root load throws before this mounts (the root +error.svelte).
  const siteName = $derived(page.data.siteName ?? '');

  /** The home link matches only the root; a deeper link also matches the pages under it. */
  function isCurrent(href: string): boolean {
    const path = page.url.pathname;
    if (href === '/') return path === '/';
    return path === href || path.startsWith(`${href}/`);
  }

  let theme = $state<Theme>(browser ? resolveTheme(themeConfig) : themeConfig.light);

  // Survey changes the scheme at once, with no cross-fade.
  function flip() {
    theme = toggleTheme(themeConfig, theme);
  }
</script>

<header class="site-header relative isolate border-b border-base-300 bg-base-100">
  <svg
    class="site-contour-texture"
    viewBox="0 0 1200 60"
    preserveAspectRatio="none"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M0 52 C 160 40, 300 58, 470 46 S 780 30, 930 44 S 1120 56, 1200 42" />
    <path d="M0 42 C 140 30, 320 48, 480 36 S 760 18, 920 32 S 1110 46, 1200 30" />
    <path d="M0 32 C 150 22, 330 38, 500 26 S 770 8, 910 22 S 1100 36, 1200 20" />
    <path d="M0 22 C 170 14, 340 28, 520 16 S 790 0, 900 12 S 1090 26, 1200 10" />
  </svg>

  <div
    class="mx-auto flex max-w-measure flex-wrap items-center justify-between gap-x-m gap-y-2xs px-m py-xs"
  >
    <a
      href="/"
      class="brand-link inline-flex min-h-11 items-center text-base-content no-underline"
      aria-label={siteName || 'Home'}
    >
      <span class="site-benchmark" aria-hidden="true"></span>
      <span class="whitespace-nowrap font-display font-heading heading-case text-step-2"
        >{siteName}</span
      >
    </a>

    <div class="flex flex-wrap items-center gap-s">
      <nav class="site-nav flex flex-wrap items-center gap-s font-body" aria-label="Primary">
        {#each nav as item (item.url)}
          {@const current = isCurrent(item.url)}
          <a
            href={item.url}
            aria-current={current ? 'page' : undefined}
            rel={isAdminHref(item.url) ? 'external' : undefined}
            class="inline-flex min-h-11 items-center {current
              ? 'text-base-content'
              : 'text-muted hover:text-base-content'}"
          >
            {item.label}
          </a>
        {/each}
      </nav>

      <!-- A ghost button set like a nav link, so the toggle doesn't outweigh the nav beside it. -->
      <button
        type="button"
        class="btn btn-ghost btn-sm font-body font-normal text-base text-muted hover:text-base-content"
        onclick={flip}
      >
        {theme === themeConfig.dark ? 'Light theme' : 'Dark theme'}
      </button>
    </div>
  </div>
</header>

<style>
  .brand-link {
    transition: color var(--motion-quick) var(--motion-ease);
  }
  .brand-link:hover {
    color: var(--color-primary);
  }
  .site-nav a {
    text-decoration: none;
    transition: color var(--motion-quick) var(--motion-ease);
  }
  .site-nav a[aria-current='page'] {
    text-decoration-line: underline;
    text-decoration-color: var(--site-contour);
    text-decoration-thickness: var(--spacing-2px);
    text-underline-offset: var(--spacing-6px);
  }
</style>
