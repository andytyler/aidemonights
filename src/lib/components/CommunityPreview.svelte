<script lang="ts">
	import type { CommunityCompany } from '$lib/data/community-companies';
	import CommunityCompanyCard from './CommunityCompanyCard.svelte';

	let { companies }: { companies: CommunityCompany[] } = $props();
</script>

<div class="space-y-8">
	<div class="border-l-2 border-accent pl-6">
		<p class="text-lg font-semibold text-foreground">Built by our community.</p>
		<p class="mt-2 text-sm text-muted-foreground">
			Startups and projects from AI Demo Nights members.
	</p>
	</div>

	<div
		class="grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
	>
		{#each companies as company, i (i)}
			<CommunityCompanyCard {company} index={i} />
		{/each}
	</div>
</div>
