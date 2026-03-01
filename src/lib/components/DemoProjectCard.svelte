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

<article class="overflow-hidden border border-border bg-card">
	<div class="demo-project-grid gap-4 border-b p-5 border-border">
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
					class="h-14 w-14 rounded-full bg-muted text-muted-foreground border-border"
					aria-hidden="true"
				></div>
			{/if}
			<div>
				<h3 class="text-base font-semibold text-foreground">
					{demo.eventNumber ? `#${demo.eventNumber}` : 'Event'} {demo.name}
				</h3>
				<p class="text-sm text-accent">{demo.title}</p>
				<p class="mt-1 text-xs text-muted-foreground">{demo.description}</p>
				{#if hasSocials}
					<div class="mt-2 flex flex-wrap gap-3 text-xs">
						{#if linkedInUrl}
							<a
								href={linkedInUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="underline-offset-4 text-muted-foreground"
							>
								LinkedIn
							</a>
						{/if}
						{#if twitterUrl}
							<a
								href={twitterUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="underline-offset-4 text-muted-foreground"
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
						<div class="w-full demo-project-preview">
							<img src={preview.image} alt={preview.title} class="h-28 w-full object-cover" loading="lazy" />
						</div>
					{/if}
					<div class="min-w-0">
						<p class="text-xs text-muted-foreground">{preview.domain}</p>
						<p class="mt-1 text-sm text-foreground">{preview.title || demo.title}</p>
						{#if preview.description}
							<p class="mt-1 text-xs text-muted-foreground">{preview.description}</p>
						{/if}
					</div>
				</div>
			</a>
		{:else}
			<a
				href={projectUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="block p-4 text-xs transition-colors text-muted-foreground"
			>
				View project →
			</a>
		{/if}
	{:else}
		<div class="p-4 text-xs text-muted-foreground">No project URL provided.</div>
	{/if}
</article>

<style>
	.demo-project-grid {
		display: grid;
		grid-template-columns: 1fr;
	}

	.demo-project-preview {
		max-width: 220px;
	}

	@media (min-width: 768px) {
		.demo-project-grid {
			grid-template-columns: auto 1fr;
		}
	}
</style>
