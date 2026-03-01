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
	const nextEventUrl = data.nextEvent.lumaUrl ?? 'https://lu.ma/london-ai';
	const nextEventTitle = data.nextEvent.title ?? 'AI Demo Nights';

	const aboutMarkdown = `
	AI Demo Nights is a community of **Engineers**, **Builders** & Super early **Founders**, a curated set of builders demo what they have been working on in AI & ML. We curate high signal attendees, attracting Founders & Operators from [YC](https://ycombinator.com) startups, VC backed Unicorns & frontier labs, [OpenAI](https://openai.com), [DeepMind](https://deepmind.com), [Anthropic](https://anthropic.com), xAI etc.

	LIVE Lightning demos. No slides.
`;
</script>

<!-- Hero -->
<section class="border-b border-border px-6 py-20">
	<div class="mx-auto max-w-4xl">
		<h1 class="text-4xl font-bold tracking-tight text-foreground md:text-6xl">AI DEMO NIGHTS</h1>
		<DevMarkdown markdown={aboutMarkdown} class="mt-4 text-lg" />
		<div class="mt-6 text-sm font-normal text-muted-foreground">
			<span class="inline-flex items-center text-muted-foreground">
				<span class="mr-2 inline-flex h-3 w-1.5 rounded-full bg-accent"></span>
				<span>NEXT EVENT:</span>
			</span>
			<a
				href={nextEventUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="ml-1 font-normal text-foreground"
			>
				{nextEventTitle}
			</a>
			<span class="mx-2 text-muted-foreground">/</span>
			<a
				href={nextEventUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="font-normal text-accent underline-offset-2 hover:underline"
			>
				Register now →
			</a>
		</div>
	</div>
</section>

<!-- Links -->
<section class="border-b border-border px-6 py-12">
	<div class="mx-auto grid max-w-4xl gap-px bg-border md:grid-cols-3">
		<a
			href={nextEventUrl}
			target="_blank"
			rel="noopener noreferrer"
			class="group flex flex-col gap-2 bg-card p-6 transition-colors"
		>
			<span class="text-xs font-medium tracking-wider text-accent uppercase">Events</span>
			<span class="text-sm text-foreground">Next event registration →</span>
			<span class="text-xs text-muted-foreground">lu.ma/london-ai</span>
		</a>
		<a
			href="https://andytyler.notion.site/29117e20aa648069acc1ea84671da1f8?pvs=105"
			target="_blank"
			rel="noopener noreferrer"
			class="group flex flex-col gap-2 bg-card p-6 transition-colors"
		>
			<span class="text-xs font-medium tracking-wider text-accent uppercase"
				>Co-Founder Matching</span
			>
			<span class="text-sm text-foreground">Let us know you are looking for a co-founder →</span>
			<span class="text-xs text-muted-foreground">Future Co-Founder Matching Events</span>
		</a>
		<a
			href="https://andytyler.notion.site/The-Starter-Guide-to-London-for-Startup-Founders-1c617e20aa648006a12ce401bbe04d99"
			target="_blank"
			rel="noopener noreferrer"
			class="group flex flex-col gap-2 bg-card p-6 transition-colors"
		>
			<span class="text-xs font-medium tracking-wider text-accent uppercase">Founder Guide</span>
			<span class="text-sm text-foreground">Start Up Founder Guide →</span>
			<span class="text-xs text-muted-foreground">For London startup founders</span>
		</a>
		<a
			href="https://andytyler.notion.site/17317e20aa6480ed9f5ce431837e88bf"
			target="_blank"
			rel="noopener noreferrer"
			class="group col-span-3 flex flex-col gap-2 bg-card p-6 transition-colors"
		>
			<span class="text-xs font-medium tracking-wider text-accent uppercase">Request to Demo</span>
			<span class="text-sm text-foreground">Submit a demo request →</span>
			<span class="text-xs text-muted-foreground">For the next demo night</span>
		</a>
	</div>
</section>

<!-- Photos -->
<section class="border-b border-border px-6 py-12">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-8 text-xs font-medium tracking-wider text-muted-foreground uppercase">Photos</h2>
		<PhotoGrid />
	</div>
</section>

<!-- Community Companies -->
<section class="border-b border-border px-6 py-12" id="community">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-8 text-xs font-medium tracking-wider text-muted-foreground uppercase">
			Community Companies
		</h2>
		<CommunityPreview companies={data.featuredCompanies} />
	</div>
</section>

<!-- Luma Embed -->
<section class="px-6 py-12" id="events">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-6 text-xs font-medium tracking-wider text-muted-foreground uppercase">
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
