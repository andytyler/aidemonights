<script lang="ts">
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();

	const audienceStats = [
		{ value: '80-100', label: 'Attendees / event' },
		{ value: '1,200+', label: 'Newsletter subscribers' },
		{ value: '9', label: 'Events to date' },
		{ value: 'IRL', label: 'London only' }
	];

	const tiers = [
		{
			name: 'Headline',
			includes: [
				'Full-width logo feature on event page',
				'Opening shoutout at every event',
				'Logo on all marketing & comms',
				'Direct access to attendee community',
				'Dedicated recruiting slot',
				'Featured in newsletter (1,200+ builders)'
			]
		},
		{
			name: 'Partner',
			includes: [
				'Logo on event page',
				'Shoutout during event',
				'Community channel access',
				'Attendee introductions'
			]
		},
		{
			name: 'Community',
			includes: [
				'Logo on event page',
				'Mention in event comms',
				'Community access'
			]
		}
	];
</script>

<!-- Hero -->
<section class="border-b px-6 py-20 border-border">
	<div class="mx-auto max-w-4xl">
		<a
			href="/aidemonights"
			class="mb-6 inline-flex items-center gap-2 text-xs transition-colors text-muted-foreground"
		>
			← Back to AI Demo Nights
		</a>
		<h1 class="text-3xl font-bold tracking-tight md:text-5xl text-foreground">
			Sponsor AI Demo Nights
		</h1>
		<p class="mt-4 text-sm leading-relaxed text-muted-foreground">
			We're not-for-profit and rely on sponsors to make the night happen. Your support
			puts you in front of London's most active AI builders — engineers from frontier labs,
			YC founders, and the people shipping real products.
		</p>
	</div>
</section>

<!-- Audience Stats -->
<section class="border-b px-6 py-12 border-border">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-8 text-xs font-medium uppercase tracking-wider text-muted-foreground">
			The Audience
		</h2>
		<div class="grid grid-cols-2 gap-px md:grid-cols-4 bg-border">
			{#each audienceStats as stat, i}
				<div
					class="stat-enter p-6 text-center bg-card" style={`animation-delay: ${i * 80}ms;`}
				>
					<span class="block text-2xl font-bold md:text-3xl text-accent">
						{stat.value}
					</span>
					<span class="mt-1 block section-meta-label text-muted-foreground">
						{stat.label}
					</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.section-meta-label {
		font-size: 0.625rem;
		font-weight: 500;
		letter-spacing: 0.15em;
		text-transform: uppercase;
	}
</style>

<!-- Tiers -->
<section class="border-b px-6 py-12 border-border">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-8 text-xs font-medium uppercase tracking-wider text-muted-foreground">
			Sponsorship Tiers
		</h2>
		<div class="grid gap-px md:grid-cols-3 bg-border">
			{#each tiers as tier, i}
				<div class="flex flex-col p-6 md:p-8 bg-card">
					<div class="flex items-center gap-3">
						{#if i === 0}
							<span class="inline-block h-2 w-2 bg-accent"></span>
						{/if}
						<span
							class={`text-sm font-semibold ${i === 0 ? 'text-accent' : 'text-foreground'}`}
						>
							{tier.name}
						</span>
					</div>
					<ul class="mt-4 flex-1 space-y-2">
						{#each tier.includes as perk}
							<li class="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
								<span class="mt-1 shrink-0 text-border">—</span>
								{perk}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="px-6 py-12">
	<div class="mx-auto max-w-4xl">
		<a
			href={data.sponsorLinkedIn}
			target="_blank"
			rel="noopener noreferrer"
			class="cta-strip group relative block overflow-hidden p-6 transition-colors md:p-8 bg-accent"
		>
			<div class="relative flex items-center justify-between">
				<div>
					<span class="text-sm font-bold text-accent-foreground">
						Get in touch
					</span>
					<span class="ml-3 text-xs font-medium text-accent-foreground">
						DM me on LinkedIn with your company, tier, and any questions
					</span>
				</div>
				<span
					class="text-lg font-bold transition-transform duration-200 group-hover:translate-x-2 text-accent-foreground"
				>
					→
				</span>
			</div>
			<div class="card-shimmer"></div>
		</a>
	</div>
</section>
