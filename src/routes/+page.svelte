<script lang="ts">
	import PhotoGrid from '$lib/components/PhotoGrid.svelte';
	import Membership from '$lib/components/Membership.svelte';
	import CofounderMatching from '$lib/components/CofounderMatching.svelte';
	import SponsorsWall from '$lib/components/SponsorsWall.svelte';
	import CommunityPreview from '$lib/components/CommunityPreview.svelte';
	import Partners from '$lib/components/Partners.svelte';
	import DevMarkdown from '$lib/components/DevMarkdown.svelte';
	import { sponsors, pastSponsors, sponsorLinkedIn } from '$lib/data/sponsors';
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();

	const aboutMarkdown = `
	AI Demo Nights is a community of **Engineers**, Builders & Super early founders, we run nights where people a curated set of builders show off what they have been working on in the AI and ML space. We keep signal high with attendees, attracting employees from many YC startups in London and all the frontier labs, [OpenAI](https://openai.com), [DeepMind](https://deepmind.com), [Anthropic](https://anthropic.com), xAI etc.

4-min live demos. 4-min Q&A. No slides. Live demos only. [Register now](https://lu.ma/london-ai "icon-lg")
`;
</script>

<!-- Hero -->
<section class="border-b border-border px-6 py-20">
	<div class="mx-auto max-w-4xl">
		<h1 class="text-4xl font-bold tracking-tight md:text-6xl text-foreground">
			AI DEMO NIGHTS
		</h1>
		<DevMarkdown markdown={aboutMarkdown} class="mt-4 text-lg" />
		<div class="mt-6 flex items-center gap-3">
			<span class="inline-block h-2 w-2 bg-accent"></span>
			<span class="text-sm text-muted-foreground">Next event: TBC</span>
		</div>
	</div>
</section>

<!-- Links -->
<section class="border-b border-border px-6 py-12">
	<div class="mx-auto grid max-w-4xl gap-px bg-border md:grid-cols-3">
		<a
			href="https://lu.ma/london-ai"
			target="_blank"
			rel="noopener noreferrer"
			class="group flex flex-col gap-2 bg-card p-6 transition-colors"
		>
			<span class="text-xs font-medium tracking-wider uppercase text-accent">Register</span>
			<span class="text-sm text-foreground">Sign up on Luma →</span>
			<span class="text-xs text-muted-foreground">lu.ma/london-ai</span>
		</a>
		<a
			href="https://andytyler.notion.site/AI-Demo-Nights-EVENT-SERIES-2719000e0d994de7adbbd988f3e465f7"
			target="_blank"
			rel="noopener noreferrer"
			class="group flex flex-col gap-2 bg-card p-6 transition-colors"
		>
			<span class="text-xs font-medium tracking-wider uppercase text-accent">About</span>
			<span class="text-sm text-foreground">AI Demo Nights →</span>
			<span class="text-xs text-muted-foreground">Notion page</span>
		</a>
		<a
			href="https://andytyler.notion.site/The-Starter-Guide-to-London-for-Startup-Founders-1c617e20aa648006a12ce401bbe04d99"
			target="_blank"
			rel="noopener noreferrer"
			class="group flex flex-col gap-2 bg-card p-6 transition-colors"
		>
			<span class="text-xs font-medium tracking-wider uppercase text-accent">Guide</span>
			<span class="text-sm text-foreground">London Starter Guide →</span>
			<span class="text-xs text-muted-foreground">For startup founders</span>
		</a>
	</div>
</section>

<!-- Photos -->
<section class="border-b border-border px-6 py-12">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-8 text-xs font-medium tracking-wider uppercase text-muted-foreground">Photos</h2>
		<PhotoGrid />
	</div>
</section>

<!-- Community Companies -->
<section class="border-b border-border px-6 py-12">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-8 text-xs font-medium tracking-wider uppercase text-muted-foreground">
			Community Companies
		</h2>
		<CommunityPreview companies={data.featuredCompanies} />
	</div>
</section>

<!-- Membership -->
<section class="border-b border-border px-6 py-12">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-8 text-xs font-medium tracking-wider uppercase text-muted-foreground">
			Become a Member
		</h2>
		<Membership lumaUrl="https://lu.ma/london-ai" />
	</div>
</section>

<!-- Cofounder Matching -->
<section class="border-b border-border px-6 py-12">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-8 text-xs font-medium tracking-wider uppercase text-muted-foreground">
			Cofounder Matching
		</h2>
		<CofounderMatching linkedIn={sponsorLinkedIn} />
	</div>
</section>

<!-- Partners -->
<section class="border-b border-border px-6 py-12">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-8 text-xs font-medium tracking-wider uppercase text-muted-foreground">
			Partners
		</h2>
		<Partners partners={data.partners} />
	</div>
</section>

<!-- Sponsors -->
<section class="border-b border-border px-6 py-12">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-8 text-xs font-medium tracking-wider uppercase text-muted-foreground">
			Sponsors
		</h2>
		<SponsorsWall {sponsors} {pastSponsors} />
	</div>
</section>

<!-- Luma Embed -->
<section class="px-6 py-12">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-6 text-xs font-medium tracking-wider uppercase text-muted-foreground">
			Upcoming Events
		</h2>
		<div class="overflow-hidden border border-border">
			<iframe
				src="https://luma.com/embed/calendar/cal-BwhGlJaFM1pBN79/events"
				style="width: 100%; height: 450px; border: none;"
				allowfullscreen
				aria-hidden="false"
				title="AI Demo Nights events on Luma"
			></iframe>
		</div>
	</div>
</section>
