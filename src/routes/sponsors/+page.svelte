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
<section class="border-b px-6 py-20" style="border-color: var(--dn-border);">
	<div class="mx-auto max-w-4xl">
		<a
			href="/aidemonights"
			class="mb-6 inline-flex items-center gap-2 text-xs transition-colors"
			style="color: var(--dn-muted);"
		>
			← Back to AI Demo Nights
		</a>
		<h1 class="text-3xl font-bold tracking-tight md:text-5xl" style="color: var(--dn-text);">
			Sponsor AI Demo Nights
		</h1>
		<p class="mt-4 text-sm leading-relaxed" style="color: var(--dn-muted);">
			We're not-for-profit and rely on sponsors to make the night happen. Your support
			puts you in front of London's most active AI builders — engineers from frontier labs,
			YC founders, and the people shipping real products.
		</p>
	</div>
</section>

<!-- Audience Stats -->
<section class="border-b px-6 py-12" style="border-color: var(--dn-border);">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-8 text-xs font-medium uppercase tracking-wider" style="color: var(--dn-muted);">
			The Audience
		</h2>
		<div class="grid grid-cols-2 gap-px md:grid-cols-4" style="background-color: var(--dn-border);">
			{#each audienceStats as stat, i}
				<div
					class="stat-enter p-6 text-center"
					style="background-color: var(--dn-surface); animation-delay: {i * 80}ms;"
				>
					<span class="block text-2xl font-bold md:text-3xl" style="color: var(--dn-accent);">
						{stat.value}
					</span>
					<span class="mt-1 block text-[10px] uppercase tracking-wider" style="color: var(--dn-muted);">
						{stat.label}
					</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Tiers -->
<section class="border-b px-6 py-12" style="border-color: var(--dn-border);">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-8 text-xs font-medium uppercase tracking-wider" style="color: var(--dn-muted);">
			Sponsorship Tiers
		</h2>
		<div class="grid gap-px md:grid-cols-3" style="background-color: var(--dn-border);">
			{#each tiers as tier, i}
				<div
					class="flex flex-col p-6 md:p-8"
					style="background-color: {i === 0 ? 'var(--dn-surface)' : 'var(--dn-bg)'};"
				>
					<div class="flex items-center gap-3">
						{#if i === 0}
							<span class="inline-block h-2 w-2" style="background-color: var(--dn-accent);"></span>
						{/if}
						<span
							class="text-sm font-semibold"
							style="color: {i === 0 ? 'var(--dn-accent)' : 'var(--dn-text)'};"
						>
							{tier.name}
						</span>
					</div>
					<ul class="mt-4 flex-1 space-y-2">
						{#each tier.includes as perk}
							<li class="flex items-start gap-2 text-xs leading-relaxed" style="color: var(--dn-muted);">
								<span class="mt-1 shrink-0" style="color: var(--dn-border);">—</span>
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
			class="cta-strip group relative block overflow-hidden p-6 transition-colors md:p-8"
			style="background-color: var(--dn-accent);"
		>
			<div class="relative flex items-center justify-between">
				<div>
					<span class="text-sm font-bold" style="color: var(--dn-bg);">
						Get in touch
					</span>
					<span class="ml-3 text-xs font-medium" style="color: rgba(10,10,10,0.6);">
						DM me on LinkedIn with your company, tier, and any questions
					</span>
				</div>
				<span
					class="text-lg font-bold transition-transform duration-200 group-hover:translate-x-2"
					style="color: var(--dn-bg);"
				>
					→
				</span>
			</div>
			<div class="shimmer"></div>
		</a>
	</div>
</section>

<style>
	.stat-enter {
		animation: fadeIn 0.4s ease-out both;
	}

	.shimmer {
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			90deg,
			transparent 0%,
			rgba(255, 255, 255, 0.08) 50%,
			transparent 100%
		);
		pointer-events: none;
	}

	.cta-strip:hover .shimmer {
		animation: shimmerSlide 0.6s ease-out forwards;
	}

	@keyframes shimmerSlide {
		from { left: -100%; }
		to { left: 100%; }
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
