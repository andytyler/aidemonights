<script lang="ts">
	import type { Partner } from '$lib/data/partners';

	let { partners }: { partners: Partner[] } = $props();
</script>

<div class="space-y-8">
	<div class="border-l-2 pl-6 dn-accent-border">
		<p class="text-lg font-semibold dn-text">
			Our partners make it happen.
		</p>
		<p class="mt-2 text-sm dn-muted">
			Venues, tools, and support from orgs who believe in the community.
		</p>
	</div>

	<div
		class="grid gap-px dn-bg-border" style="grid-template-columns: repeat({Math.min(partners.length, 3)}, 1fr);"
	>
		{#each partners as partner, i}
			<div
				class="partner-enter flex flex-col items-start justify-between p-6 dn-bg-surface" style={`animation-delay: ${i * 80}ms;`}
			>
				{#if partner.logo}
					<img
						src={partner.logo}
						alt={partner.name}
						class="h-6 w-auto opacity-70"
					/>
				{:else}
					<span class="text-sm font-medium dn-text">
						{partner.name}
					</span>
				{/if}
				<span class="mt-3 text-[10px] uppercase tracking-wider dn-muted">
					{partner.contribution}
				</span>
			</div>
		{/each}
	</div>
</div>
