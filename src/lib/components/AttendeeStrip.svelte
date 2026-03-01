<script lang="ts">
	import type { AttendeeCompany } from '$lib/data/attendee-companies';

	let { companies }: { companies: AttendeeCompany[] } = $props();
</script>

<div class="flex flex-wrap items-center gap-px bg-border">
	<span
		class="shrink-0 px-5 py-4 text-[10px] font-medium tracking-wider uppercase bg-card text-accent"
	>
		Attendees from
	</span>
	{#each companies as company (company.name)}
		<span class="flex items-center px-5 py-4 bg-card">
			{#if company.wordmark}
				<img src={company.wordmark} alt={company.name} class="h-4 w-auto opacity-50" />
			{:else}
				<span class="text-xs text-muted-foreground">{company.name}</span>
			{/if}
		</span>
	{/each}
</div>
