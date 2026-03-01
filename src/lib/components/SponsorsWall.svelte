<script lang="ts">
	import type { Sponsor } from '$lib/data/sponsors';

	let {
		sponsors,
		pastSponsors
	}: { sponsors: Sponsor[]; pastSponsors: Sponsor[] } = $props();

	const headline = sponsors.filter((s) => s.tier === 'headline');
	const partners = sponsors.filter((s) => s.tier === 'partner');
	const community = sponsors.filter((s) => s.tier === 'community');
</script>

<div class="sponsors-root">

	<!-- ▌ HEADLINE SPONSOR — cinematic logo showcase ▌ -->
	{#each headline as sponsor}
		<a
			href={sponsor.url}
			target="_blank"
			rel="noopener noreferrer"
			class="headline-block group relative block overflow-hidden bg-card"
		>
			<div class="noise-overlay"></div>

			<div
				class="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
				style="background: linear-gradient(135deg, var(--accent-soft-8) 0%, transparent 40%, transparent 60%, var(--accent-soft-4) 100%);"
			></div>

			<div class="relative flex min-h-[220px] flex-col justify-between p-8 md:p-12">
				<div class="flex items-center justify-between">
					<span
						class="text-[10px] font-medium uppercase tracking-[0.3em] text-accent"
					>
						Headline Sponsor
					</span>
					<span
						class="text-xs text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
					>
						Visit →
					</span>
				</div>

				<div class="mt-8">
					{#if sponsor.logo}
						<img
							src={sponsor.logo}
							alt={sponsor.name}
							class="headline-logo h-12 w-auto md:h-16 lg:h-20"
						/>
					{:else}
						<span
							class="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl text-foreground"
						>
							{sponsor.name}
						</span>
					{/if}
					{#if sponsor.tagline}
						<p class="mt-3 text-sm text-muted-foreground">{sponsor.tagline}</p>
					{/if}
				</div>
			</div>

			<div
				class="h-[3px] w-0 transition-all duration-700 ease-out group-hover:w-full"
				style="background: linear-gradient(to right, var(--accent), transparent);"
			></div>
		</a>
	{/each}

	<!-- ▌ PARTNERS — logo grid ▌ -->
	{#if partners.length > 0}
		<div
			class="grid gap-px bg-border"
			style={`grid-template-columns: repeat(${partners.length}, 1fr);`}
		>
			{#each partners as sponsor}
				<a
					href={sponsor.url}
					target="_blank"
					rel="noopener noreferrer"
					class="group relative flex flex-col items-start justify-between overflow-hidden bg-card p-6 transition-colors md:p-8"
				>
					<span class="text-[10px] uppercase tracking-wider text-muted-foreground">Partner</span>
					<div class="mt-6">
						{#if sponsor.logo}
							<img
								src={sponsor.logo}
								alt={sponsor.name}
								class="partner-logo h-7 w-auto opacity-80 transition-opacity group-hover:opacity-100 md:h-8"
							/>
						{:else}
							<span class="text-lg font-semibold md:text-xl text-foreground">
								{sponsor.name}
							</span>
						{/if}
						{#if sponsor.tagline}
							<p class="mt-2 text-xs text-muted-foreground">{sponsor.tagline}</p>
						{/if}
					</div>
					<div
						class="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full"
					></div>
				</a>
			{/each}
		</div>
	{/if}

	<!-- ▌ COMMUNITY — logo strip ▌ -->
	{#if community.length > 0}
		<div class="flex flex-wrap items-center gap-px bg-border">
			<span
				class="px-5 py-4 text-[10px] uppercase tracking-wider bg-card text-muted-foreground"
			>
				Community
			</span>
			{#each community as sponsor}
				<a
					href={sponsor.url}
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center gap-3 bg-card px-5 py-4 transition-colors"
				>
					{#if sponsor.logo}
						<img
							src={sponsor.logo}
							alt={sponsor.name}
							class="community-logo h-5 w-auto opacity-60 transition-opacity group-hover:opacity-100"
						/>
					{:else}
						<span class="text-xs text-foreground">{sponsor.name}</span>
					{/if}
				</a>
			{/each}
		</div>
	{/if}

	<!-- ▌ BECOME A SPONSOR — small CTA ▌ -->
	<div class="mt-8 flex items-center gap-4">
		<div class="h-px flex-1 bg-border"></div>
		<a
			href="/aidemonights/sponsors"
			class="group inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors"
		>
			Become a sponsor
			<span class="transition-transform duration-200 group-hover:translate-x-1 text-accent">→</span>
		</a>
		<div class="h-px flex-1 bg-border"></div>
	</div>

	<!-- ▌ PAST SPONSORS — inline with logos ▌ -->
	{#if pastSponsors.length > 0}
		<div class="mt-8 flex items-center gap-6">
			<span class="shrink-0 text-[10px] uppercase tracking-wider text-muted-foreground">
				Previously sponsored by
			</span>
			<div class="h-px flex-1 bg-border"></div>
			{#each pastSponsors as sponsor}
				{#if sponsor.logo}
					{#if sponsor.url}
						<a href={sponsor.url} target="_blank" rel="noopener noreferrer">
							<img
								src={sponsor.logo}
								alt={sponsor.name}
								class="past-logo h-4 w-auto opacity-40 transition-opacity hover:opacity-70"
							/>
						</a>
					{:else}
						<img
							src={sponsor.logo}
							alt={sponsor.name}
							class="past-logo h-4 w-auto opacity-40"
						/>
					{/if}
				{:else if sponsor.url}
					<a
						href={sponsor.url}
						target="_blank"
						rel="noopener noreferrer"
						class="text-xs text-muted-foreground transition-colors hover:underline"
					>
						{sponsor.name}
					</a>
				{:else}
					<span class="text-xs text-muted-foreground">{sponsor.name}</span>
				{/if}
			{/each}
		</div>
	{/if}
</div>

<style>
	.headline-block {
		animation: revealUp 0.6s ease-out both;
	}

	.noise-overlay {
		position: absolute;
		inset: 0;
		opacity: 0.03;
		background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
		background-size: 128px 128px;
		pointer-events: none;
	}

	.headline-logo {
		filter: brightness(1);
		transition: filter 0.3s;
	}

	.headline-block:hover .headline-logo {
		filter: brightness(1.15);
	}

	@keyframes revealUp {
		from {
			opacity: 0;
			transform: translateY(16px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

</style>
