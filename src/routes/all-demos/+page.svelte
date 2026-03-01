<script lang="ts">
	import DemoProjectCard from '$lib/components/DemoProjectCard.svelte';
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();

	const formatNightDate = (dateStr: string) => {
		return new Date(dateStr).toLocaleDateString('en-GB', {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		});
	};
</script>

<section class="border-b px-6 py-20 border-border">
	<div class="mx-auto max-w-4xl">
		<a href="/" class="text-xs transition-colors text-muted-foreground">← Back to home</a>
		<h1 class="mt-4 text-3xl font-bold tracking-tight md:text-5xl text-foreground">
			All Demos
		</h1>
		<p class="mt-4 text-sm text-muted-foreground">
			Complete list of demo submissions from the Notion export, including socials and project links.
		</p>
	</div>
</section>

<section class="px-6 py-12">
	<div class="mx-auto max-w-4xl space-y-10">
		{#each data.nights as night}
			<div class="space-y-4">
				<div class="flex flex-wrap items-baseline gap-3">
					<h2 class="text-lg font-semibold text-foreground">{night.number}</h2>
					<span class="text-sm text-muted-foreground">{formatNightDate(night.date)}</span>
				</div>
				<div class="grid gap-4">
					{#each night.demos as demo}
						<DemoProjectCard {demo} />
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
