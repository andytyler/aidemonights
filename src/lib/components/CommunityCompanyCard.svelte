<script lang="ts">
	import type { CommunityCompany } from '$lib/data/community-companies';
	import { getIconUrl } from '$lib/utils/markdown';

	let { company, index = 0 }: { company: CommunityCompany; index?: number } = $props();

	const website_url = $derived(company.website_url?.trim() || '/');
	const wordmark_url = company.wordmark_url?.trim() || null;

	const favicon: string | null = $derived(getIconUrl(company.website_url?.trim() || ''));
</script>

<div
	class="card-enter group bg-surface relative aspect-square h-full w-full overflow-hidden"
	style={`animation-delay: ${index * 50}ms;`}
>
	<div class="relative h-full w-full">
		<div class="absolute inset-0 h-full w-full">
			<a
				href={website_url}
				target="_blank"
				rel="noopener noreferrer external"
				aria-label={`Visit ${company.name}`}
				class="group/media grid h-full w-full place-items-center px-4 py-2"
			>
				{#if wordmark_url}
					<div
						class="grid h-full w-full place-items-center bg-[color:var(--dn-surface)] px-2 py-1.5"
					>
						<img
							src={wordmark_url}
							alt={company.name}
							class="h-full max-h-[94%] w-full max-w-[94%] object-contain"
							loading="lazy"
						/>
					</div>
				{:else}
					<div
						class="grid h-full w-full place-items-center px-2 text-center text-[10px] font-semibold tracking-wide text-[color:var(--dn-text)]"
					>
						{company.name}
					</div>
				{/if}
			</a>
		</div>

		<div class="absolute inset-0 flex h-full w-full flex-col justify-between p-2">
			{#if company.affiliation}
				<span
					class="inline-flex shrink-0 items-center bg-card px-1 py-0.5 text-xs font-medium tracking-wider text-accent uppercase"
				>
					{company.affiliation.label}
				</span>
			{/if}
			<div class="items-cente flex min-w-0 justify-center gap-1">
				<span
					class="text-md flex min-w-0 flex-1 flex-row items-center justify-center gap-1 truncate align-middle font-medium"
				>
					<img
						src={favicon}
						alt={company.name + 'icon'}
						class="h-3.5 w-3.5 rounded"
						loading="lazy"
						decoding="async"
					/>
					{company.name}</span
				>
				<p class="mt-1 truncate text-xs leading-tight text-muted">
					{company.one_liner}
				</p>
			</div>
		</div>
	</div>

	<div
		class="dn-glow-surface-sm absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
	></div>
</div>
