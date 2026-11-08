<!-- @component
Survey's public footer: the margin collar, a strip like a quad sheet's margin with two fields. Both
are site settings from `site.config.yaml`, read through `page.data`: the site name on the left and
the `menus.footer` links on the right. An empty field still holds its place, so the other keeps its
side. A link into `/admin` renders `rel="external"`, so SvelteKit's prerender crawler skips it. -->
<script lang="ts">
  import { page } from '$app/state';
  import type { NavNode } from '@glw907/cairn-cms';
  import { isAdminHref } from './admin-link.js';

  const nav = $derived(
    (page.data.footerNav ?? []).filter(
      (item): item is NavNode & { url: string } => item.url !== undefined,
    ),
  );

  const siteName = $derived(page.data.siteName ?? '');
</script>

<footer class="site-footer site-collar">
  <span>{siteName}</span>

  <nav class="flex flex-wrap gap-x-s" aria-label="Footer">
    {#each nav as item (item.url)}
      <a href={item.url} rel={isAdminHref(item.url) ? 'external' : undefined}>{item.label}</a>
    {/each}
  </nav>
</footer>

<style>
  .site-collar a {
    color: inherit;
    text-decoration-line: underline;
    text-decoration-thickness: var(--spacing-1px);
    text-underline-offset: var(--spacing-3px);
    transition: color var(--motion-quick) var(--motion-ease);
  }
  .site-collar a:hover {
    color: var(--color-base-content);
  }
</style>
