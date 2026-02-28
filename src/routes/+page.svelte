<script lang="ts">
	import DemoTable from '$lib/components/DemoTable.svelte';
	import PhotoGrid from '$lib/components/PhotoGrid.svelte';
	import Membership from '$lib/components/Membership.svelte';
	import CofounderMatching from '$lib/components/CofounderMatching.svelte';
	import SponsorsWall from '$lib/components/SponsorsWall.svelte';
	import AttendeeStrip from '$lib/components/AttendeeStrip.svelte';
	import CommunityPreview from '$lib/components/CommunityPreview.svelte';
	import Partners from '$lib/components/Partners.svelte';
	import { sponsors, pastSponsors, sponsorLinkedIn } from '$lib/data/sponsors';
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();
</script>

<!-- Hero -->
<section class="border-b px-6 py-20" style="border-color: var(--dn-border);">
	<div class="mx-auto max-w-4xl">
		<h1 class="text-4xl font-bold tracking-tight md:text-6xl" style="color: var(--dn-text);">
			AI DEMO NIGHTS
		</h1>
		<p class="mt-4 text-lg" style="color: var(--dn-muted);">
			A monthly AI project showcase in London. Demo what you've built, see what others are building.
		</p>
		<p class="mt-2 text-sm" style="color: var(--dn-muted);">
			4-min live demos. 4-min Q&amp;A. No slides. Live demos only.
		</p>
		<div class="mt-6 flex items-center gap-3">
			<span class="inline-block h-2 w-2" style="background-color: var(--dn-accent);"></span>
			<span class="text-sm" style="color: var(--dn-muted);">Next event: TBC</span>
		</div>
	</div>
</section>

<!-- Links -->
<section class="border-b px-6 py-12" style="border-color: var(--dn-border);">
	<div
		class="mx-auto grid max-w-4xl gap-px md:grid-cols-3"
		style="background-color: var(--dn-border);"
	>
		<a
			href="https://lu.ma/london-ai"
			target="_blank"
			rel="noopener noreferrer"
			class="group flex flex-col gap-2 p-6 transition-colors"
			style="background-color: var(--dn-surface);"
		>
			<span class="text-xs font-medium tracking-wider uppercase" style="color: var(--dn-accent);"
				>Register</span
			>
			<span class="text-sm" style="color: var(--dn-text);">Sign up on Luma →</span>
			<span class="text-xs" style="color: var(--dn-muted);">lu.ma/london-ai</span>
		</a>
		<a
			href="https://andytyler.notion.site/AI-Demo-Nights-EVENT-SERIES-2719000e0d994de7adbbd988f3e465f7"
			target="_blank"
			rel="noopener noreferrer"
			class="group flex flex-col gap-2 p-6 transition-colors"
			style="background-color: var(--dn-surface);"
		>
			<span class="text-xs font-medium tracking-wider uppercase" style="color: var(--dn-accent);"
				>About</span
			>
			<span class="text-sm" style="color: var(--dn-text);">AI Demo Nights →</span>
			<span class="text-xs" style="color: var(--dn-muted);">Notion page</span>
		</a>
		<a
			href="https://andytyler.notion.site/The-Starter-Guide-to-London-for-Startup-Founders-1c617e20aa648006a12ce401bbe04d99"
			target="_blank"
			rel="noopener noreferrer"
			class="group flex flex-col gap-2 p-6 transition-colors"
			style="background-color: var(--dn-surface);"
		>
			<span class="text-xs font-medium tracking-wider uppercase" style="color: var(--dn-accent);"
				>Guide</span
			>
			<span class="text-sm" style="color: var(--dn-text);">London Starter Guide →</span>
			<span class="text-xs" style="color: var(--dn-muted);">For startup founders</span>
		</a>
	</div>
</section>

<!-- Attendees From -->
<section class="border-b px-6 py-12" style="border-color: var(--dn-border);">
	<div class="mx-auto max-w-4xl">
		<AttendeeStrip companies={data.attendeeCompanies} />
	</div>
</section>

<!-- Demo Catalog -->
<section class="border-b px-6 py-12" style="border-color: var(--dn-border);">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-8 text-xs font-medium tracking-wider uppercase" style="color: var(--dn-muted);">
			Past Demos
		</h2>
		<DemoTable demos={data.allDemos} />
	</div>
</section>

<!-- Photos -->
<section class="border-b px-6 py-12" style="border-color: var(--dn-border);">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-8 text-xs font-medium tracking-wider uppercase" style="color: var(--dn-muted);">
			Photos
		</h2>
		<PhotoGrid />
	</div>
</section>

<!-- Community Companies -->
<section class="border-b px-6 py-12" style="border-color: var(--dn-border);">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-8 text-xs font-medium tracking-wider uppercase" style="color: var(--dn-muted);">
			Community Companies
		</h2>
		<CommunityPreview companies={data.featuredCompanies} />
	</div>
</section>

<!-- Membership -->
<section class="border-b px-6 py-12" style="border-color: var(--dn-border);">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-8 text-xs font-medium tracking-wider uppercase" style="color: var(--dn-muted);">
			Become a Member
		</h2>
		<Membership lumaUrl="https://lu.ma/london-ai" />
	</div>
</section>

<!-- Cofounder Matching -->
<section class="border-b px-6 py-12" style="border-color: var(--dn-border);">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-8 text-xs font-medium tracking-wider uppercase" style="color: var(--dn-muted);">
			Cofounder Matching
		</h2>
		<CofounderMatching linkedIn={sponsorLinkedIn} />
	</div>
</section>

<!-- Partners -->
<section class="border-b px-6 py-12" style="border-color: var(--dn-border);">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-8 text-xs font-medium tracking-wider uppercase" style="color: var(--dn-muted);">
			Partners
		</h2>
		<Partners partners={data.partners} />
	</div>
</section>

<!-- Sponsors -->
<section class="border-b px-6 py-12" style="border-color: var(--dn-border);">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-8 text-xs font-medium tracking-wider uppercase" style="color: var(--dn-muted);">
			Sponsors
		</h2>
		<SponsorsWall {sponsors} {pastSponsors} />
	</div>
</section>

<!-- Luma Embed -->
<section class="px-6 py-12">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-6 text-xs font-medium tracking-wider uppercase" style="color: var(--dn-muted);">
			Upcoming Events
		</h2>
		<div class="overflow-hidden border" style="border-color: var(--dn-border);">
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
