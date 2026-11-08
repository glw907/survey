<!-- @component
One row of the home and archive listings: the date, the title, and the excerpt. A dashed contour
rule runs under each row. -->
<script lang="ts">
  import type { ContentSummary } from '@glw907/cairn-cms/delivery';
  import { formatDate } from '#chassis/date.js';

  interface Props {
    /** The entry this row renders: its date, title, permalink, and optional excerpt. */
    post: ContentSummary;
  }

  let { post }: Props = $props();
</script>

<article class="site-entry site-contour-rule" class:site-entry--undated={!post.date} data-cairn-post>
  {#if post.date}
    <div class="site-entry__date">{formatDate(post.date)}</div>
  {/if}
  <div>
    <h3 class="site-entry__title">
      <a href={post.permalink}>{post.title}</a>
    </h3>
    {#if post.summaryFields.description}
      <p class="site-entry__excerpt">{post.summaryFields.description}</p>
    {/if}
  </div>
</article>

<style>
  .site-entry {
    display: grid;
    grid-template-columns: 7.5rem 1fr;
    gap: var(--spacing-m);
    align-items: baseline;
    padding-block: var(--spacing-s);
  }
  .site-entry--undated {
    grid-template-columns: 1fr;
  }

  .site-entry__date {
    font-family: var(--font-body);
    font-size: var(--text-step--1);
    color: var(--color-muted);
    font-variant-numeric: tabular-nums;
  }

  .site-entry__title {
    margin: 0 0 var(--spacing-4px);
    font-family: var(--font-display);
    font-weight: var(--font-weight-heading);
    text-transform: var(--cairn-heading-case);
    font-size: var(--text-step-2);
    line-height: var(--leading-snug);
  }
  .site-entry__title a {
    color: inherit;
    text-decoration: none;
    transition: color var(--motion-quick) var(--motion-ease);
  }
  .site-entry__title a:hover {
    color: var(--color-primary);
  }

  .site-entry__excerpt {
    margin: 0;
    font-family: var(--font-display);
    line-height: var(--leading-snug);
    color: var(--color-muted);
  }

  @media (max-width: 34rem) {
    .site-entry {
      grid-template-columns: 1fr;
      gap: var(--spacing-4px);
    }
  }
</style>
