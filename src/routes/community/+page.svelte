<script lang="ts">
	import CommunityCompanyCard from '$lib/components/CommunityCompanyCard.svelte';
	import AttendeeStrip from '$lib/components/AttendeeStrip.svelte';
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();

	const stats = [
		{ value: '1,200+', label: 'Newsletter subscribers' },
		{ value: '80-100', label: 'Builders per event' },
		{ value: '9', label: 'Events and counting' }
	];
</script>

<!-- Hero -->
<section class="border-b px-6 py-20" style="border-color: var(--dn-border);">
	<div class="mx-auto max-w-4xl">
		<a
			href="/"
			class="mb-6 inline-flex items-center gap-2 text-xs transition-colors"
			style="color: var(--dn-muted);"
		>
			← Back to AI Demo Nights
		</a>
		<h1 class="text-3xl font-bold tracking-tight md:text-5xl" style="color: var(--dn-text);">
			Community
		</h1>
		<p class="mt-4 text-sm leading-relaxed" style="color: var(--dn-muted);">
			Engineers, builders, and super-early founders shipping in AI. High signal — attendees from
			frontier labs, YC startups, and the best of London's AI scene.
		</p>
	</div>
</section>

<!-- Stats -->
<section class="border-b px-6 py-12" style="border-color: var(--dn-border);">
	<div class="mx-auto max-w-4xl">
		<div class="grid grid-cols-3 gap-px" style="background-color: var(--dn-border);">
			{#each stats as stat, i (stat.label)}
				<div
					class="stat-enter p-6 text-center"
					style="background-color: var(--dn-surface); animation-delay: {i * 80}ms;"
				>
					<span class="block text-2xl font-bold md:text-3xl" style="color: var(--dn-accent);">
						{stat.value}
					</span>
					<span
						class="mt-1 block text-[10px] tracking-wider uppercase"
						style="color: var(--dn-muted);"
					>
						{stat.label}
					</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Attendees From -->
<section class="border-b px-6 py-12" style="border-color: var(--dn-border);">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-8 text-xs font-medium tracking-wider uppercase" style="color: var(--dn-muted);">
			Attendees From
		</h2>
		<AttendeeStrip companies={data.attendeeCompanies} />
	</div>
</section>

<!-- All Community Companies -->
<section class="px-6 py-12">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-8 text-xs font-medium tracking-wider uppercase" style="color: var(--dn-muted);">
			Community Companies
		</h2>
		<div class="grid gap-px md:grid-cols-2" style="background-color: var(--dn-border);">
			{#each data.communityCompanies as company, i}
				<CommunityCompanyCard {company} index={i} />
			{/each}
		</div>
	</div>
</section>

<style>
	.stat-enter {
		animation: fadeIn 0.4s ease-out both;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(8px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
