<script lang="ts">
	import { onMount } from 'svelte';
	import { normalizeProjectUrl } from '$lib/data/demos';
	import type { Demo } from '$lib/data/demos';

	type Preview = {
		title: string;
		description: string;
		image: string;
		domain: string;
	};

	let { demo }: { demo: Demo } = $props();

	let loadingState: 'loading' | 'ready' | 'empty' = $state('loading');
	let preview: Preview | null = $state(null);
	let profileLoadingState: 'loading' | 'ready' | 'empty' = $state('loading');
	let profileImage: string = $state('');

	const projectUrl = $derived(demo.displayProjectUrl || normalizeProjectUrl(demo.projectUrl || ''));
	const projectDomain = $derived(projectUrl ? new URL(projectUrl).hostname : '');
	const linkedInUrl = $derived(demo.linkedIn ? normalizeProjectUrl(demo.linkedIn) : '');
	const twitterUrl = $derived(demo.twitter ? normalizeProjectUrl(demo.twitter) : '');
	const hasSocials = $derived(Boolean(linkedInUrl || twitterUrl));

	onMount(async () => {
		if (!projectUrl) {
			loadingState = 'empty';
			return;
		}

		try {
			const response = await fetch(`/api/link-preview?url=${encodeURIComponent(projectUrl)}`);
			if (!response.ok) {
				loadingState = 'empty';
				return;
			}
			const data = await response.json();
			preview = {
				title: data.title || demo.title,
				description: data.description,
				image: data.image,
				domain: data.domain || projectDomain
			};
			loadingState = 'ready';
		} catch {
			loadingState = 'empty';
		}
	});

	onMount(async () => {
		if (!linkedInUrl) {
			profileLoadingState = 'empty';
			return;
		}

		try {
			const response = await fetch(`/api/link-preview?url=${encodeURIComponent(linkedInUrl)}`);
			if (!response.ok) {
				profileLoadingState = 'empty';
				return;
			}
			const data = await response.json();
			if (data.image) {
				profileImage = data.image;
				profileLoadingState = 'ready';
				return;
			}
			profileLoadingState = 'empty';
		} catch {
			profileLoadingState = 'empty';
		}
	});

</script>

<article class="overflow-hidden border dn-border dn-bg-surface">
	<div class="grid gap-4 border-b p-5 md:grid-cols-[auto,1fr] dn-border">
			<div class="flex items-start gap-4">
			{#if profileLoadingState === 'ready' && profileImage}
				<img
					src={profileImage}
					alt={demo.name}
					class="h-14 w-14 rounded-full object-cover grayscale"
					loading="lazy"
				/>
			{:else}
				<div
					class="h-14 w-14 rounded-full dn-color-bg dn-border"
					aria-hidden="true"
				></div>
			{/if}
			<div>
				<h3 class="text-base font-semibold dn-text">
					{demo.eventNumber ? `#${demo.eventNumber}` : 'Event'} {demo.name}
				</h3>
				<p class="text-sm dn-accent">{demo.title}</p>
				<p class="mt-1 text-xs dn-muted">{demo.description}</p>
				{#if hasSocials}
					<div class="mt-2 flex flex-wrap gap-3 text-xs">
						{#if linkedInUrl}
							<a
								href={linkedInUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="underline-offset-4 dn-muted"
							>
								LinkedIn
							</a>
						{/if}
						{#if twitterUrl}
							<a
								href={twitterUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="underline-offset-4 dn-muted"
							>
								Twitter
							</a>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	</div>

	{#if projectUrl}
		{#if loadingState === 'ready' && preview}
			<a href={projectUrl} target="_blank" rel="noopener noreferrer" class="block p-4 transition-colors">
				<div class="flex gap-4">
					{#if preview.image}
						<div class="w-full max-w-[220px] flex-none">
							<img src={preview.image} alt={preview.title} class="h-28 w-full object-cover" loading="lazy" />
						</div>
					{/if}
					<div class="min-w-0">
						<p class="text-xs dn-muted">{preview.domain}</p>
						<p class="mt-1 text-sm dn-text">{preview.title || demo.title}</p>
						{#if preview.description}
							<p class="mt-1 text-xs dn-muted">{preview.description}</p>
						{/if}
					</div>
				</div>
			</a>
		{:else}
			<a
				href={projectUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="block p-4 text-xs transition-colors dn-muted"
			>
				View project →
			</a>
		{/if}
	{:else}
		<div class="p-4 text-xs dn-muted">No project URL provided.</div>
	{/if}
</article>
