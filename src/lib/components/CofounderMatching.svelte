<script lang="ts">
	let { linkedIn }: { linkedIn: string } = $props();

	const steps = [
		{
			num: '01',
			title: 'Tell us what you\'re building',
			detail: 'Share your project, skills, and what kind of cofounder you\'re looking for.'
		},
		{
			num: '02',
			title: 'We match you',
			detail: 'Curated intros based on complementary skills, shared vision, and ambition level.'
		},
		{
			num: '03',
			title: 'Meet at Demo Night',
			detail: 'Your first meeting happens in person. See each other\'s work live before committing.'
		}
	];
</script>

<div class="space-y-8">
	<!-- Pitch -->
	<div class="grid gap-8 md:grid-cols-5">
		<div class="md:col-span-3">
			<p class="text-lg font-semibold leading-snug text-foreground">
				The best cofounders aren't found on a form.<br />
				<span class="text-accent">They're found building.</span>
			</p>
			<p class="mt-3 text-sm leading-relaxed text-muted-foreground">
				Every month, dozens of AI builders demo live at Demo Night. We connect founders
				who are actively shipping — not just talking about ideas. If you're looking for
				a technical or non-technical cofounder, this is where it starts.
			</p>
		</div>
		<div class="flex flex-col justify-center border-l border-border pl-6 md:col-span-2">
			<div class="space-y-2">
				<div class="flex items-baseline gap-3">
					<span class="text-2xl font-bold text-foreground">50+</span>
					<span class="text-xs text-muted-foreground">builders per event</span>
				</div>
				<div class="flex items-baseline gap-3">
					<span class="text-2xl font-bold text-foreground">8</span>
					<span class="text-xs text-muted-foreground">events and counting</span>
				</div>
				<div class="flex items-baseline gap-3">
					<span class="text-2xl font-bold text-accent">IRL</span>
					<span class="text-xs text-muted-foreground">London only</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Steps -->
	<div class="grid gap-px bg-border md:grid-cols-3">
		{#each steps as step, i}
			<div
				class="group relative overflow-hidden bg-card p-6 step-enter"
				style={`animation-delay: ${i * 80}ms;`}
			>
				<span
					class="cofounder-step-number text-3xl font-bold text-accent"
				>
					{step.num}
				</span>
				<h4 class="mt-3 text-sm font-medium text-foreground">
					{step.title}
				</h4>
				<p class="mt-2 text-xs leading-relaxed text-muted-foreground">
					{step.detail}
				</p>
				<!-- Step number lights up on hover -->
				<div
					class="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					style="background: linear-gradient(180deg, var(--accent-soft-4) 0%, transparent 50%);"
				></div>
			</div>
		{/each}
	</div>

	<!-- CTA -->
	<a
		href={linkedIn}
		target="_blank"
		rel="noopener noreferrer"
		class="group relative block overflow-hidden border border-border bg-card p-6 transition-colors"
	>
		<div class="flex items-center justify-between">
			<div>
				<span class="text-sm font-semibold text-foreground">
					Looking for a cofounder?
				</span>
				<span class="ml-3 text-xs text-muted-foreground">
					DM me on LinkedIn to get matched
				</span>
			</div>
			<span
				class="text-sm text-accent transition-transform duration-200 group-hover:translate-x-1"
			>
				→
			</span>
		</div>
		<div
			class="cofounder-underline absolute bottom-0 left-0 w-0 bg-accent transition-all duration-500 group-hover:w-full"
		></div>
	</a>
</div>

<style>
	.cofounder-underline {
		height: 2px;
	}
</style>
