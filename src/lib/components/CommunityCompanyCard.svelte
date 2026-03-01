<script lang="ts">
	import type { CommunityCompany } from '$lib/data/community-companies';
	import { getIconUrl } from '$lib/utils/markdown';

	let { company, index = 0 }: { company: CommunityCompany; index?: number } = $props();

	const website_url = $derived(company.website_url?.trim() || '/');
	const wordmark_url = company.wordmark_url?.trim() || null;

	const favicon: string | null = $derived(getIconUrl(company.website_url?.trim() || ''));
</script>

<div
	class="card-enter group relative aspect-square h-full w-full overflow-hidden bg-card"
	style={`animation-delay: ${index * 50}ms;`}
>
	<div class="relative flex h-full w-full flex-col">
		{#if company.affiliation}
			<span
				class="absolute top-2 right-2 inline-flex shrink-0 items-center rounded bg-muted px-1 py-[0.3px] text-[9px] font-medium tracking-wider text-muted-foreground uppercase"
			>
				{company.affiliation.label}
			</span>
		{/if}
		<div class="relative mt-4 flex h-full w-full items-center justify-center">
			<a
				href={website_url}
				target="_blank"
				rel="noopener noreferrer external"
				aria-label={`Visit ${company.name}`}
				class="group/media"
			>
				<div class="h-full max-h-1/2 w-full place-items-center bg-card px-2 py-1.5">
					{#if wordmark_url}
						<img src={wordmark_url} alt={company.name} class="" loading="lazy" />
					{:else}
						<span class=" flex flex-row items-center justify-center gap-2 text-2xl font-bold">
							<img
								src={favicon}
								alt={company.name + 'icon'}
								class="h-5 w-5 rounded"
								loading="lazy"
								decoding="async"
							/>
							{company.name}
						</span>
					{/if}
				</div>
			</a>
		</div>

		<div class="flex h-full max-h-min w-full flex-col justify-end">
			<div
				class=" flex w-full max-w-full min-w-0 flex-col items-center justify-end gap-1 self-end p-2"
			>
				<span
					class="flex min-w-0 flex-1 flex-row items-center justify-center truncate align-middle text-xs font-medium text-foreground"
				>
					{company.name}
				</span>
				<p
					class="line-clamp-2 max-w-full truncate text-center text-[10px] text-balance text-ellipsis text-muted-foreground"
				>
					{company.one_liner}
				</p>
			</div>
		</div>
	</div>

	<div
		class="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		style="background: linear-gradient(135deg, var(--accent-soft-3) 0%, transparent 60%);"
	></div>
</div>
