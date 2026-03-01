<script lang="ts">
	import type { Partner } from '$lib/data/partners';

	let { partners }: { partners: Partner[] } = $props();
</script>

<div class="space-y-8">
	<div class="border-l-2 border-accent pl-6">
		<p class="text-lg font-semibold text-foreground">
			Our partners make it happen.
		</p>
		<p class="mt-2 text-sm text-muted-foreground">
			Venues, tools, and support from orgs who believe in the community.
		</p>
	</div>

	<div
		class="grid gap-px bg-border" style={`grid-template-columns: repeat(${Math.min(partners.length, 3)}, 1fr);`}
	>
		{#each partners as partner, i}
			<div
				class="partner-enter flex flex-col items-start justify-between bg-card p-6"
				style={`animation-delay: ${i * 80}ms;`}
			>
				{#if partner.logo}
					<img
						src={partner.logo}
						alt={partner.name}
						class="h-6 w-auto opacity-70"
					/>
				{:else}
					<span class="text-sm font-medium text-foreground">
						{partner.name}
					</span>
				{/if}
				<span class="mt-3 section-meta-label text-muted-foreground">
					{partner.contribution}
				</span>
			</div>
		{/each}
	</div>
</div>

<style>
	.section-meta-label {
		font-size: 0.625rem;
		font-weight: 500;
		letter-spacing: 0.15em;
		text-transform: uppercase;
	}
</style>
