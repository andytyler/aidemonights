<script lang="ts">
	import { onMount } from 'svelte';
	import { normalizeProjectUrl } from '$lib/data/demos';
	import type { Demo } from '$lib/data/demos';

	let {
		demos,
		columnMode = 'date',
		showAvatar = false
	}: { demos: Demo[]; columnMode?: 'date' | 'night'; showAvatar?: boolean } = $props();

	const hasDisplayUrl = (rawUrl: string): boolean => rawUrl.trim().length > 0;
	const normalizeSocialUrl = (rawUrl: string): string => normalizeProjectUrl(rawUrl);

	let profileImages: Record<string, string> = $state({});
	let profileImageStatus: Record<string, 'loading' | 'ready' | 'empty'> = $state({});

	function formatDate(dateStr: string): string {
		return new Date(dateStr).toLocaleDateString('en-GB', {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		});
	}

	const avatarKey = (demo: Demo): string => `${demo.eventNumber ?? 'unknown'}:${demo.name}:${demo.title}`;

	onMount(() => {
		for (const demo of demos) {
			const linkedInUrl = normalizeSocialUrl(demo.linkedIn || '');
			if (!linkedInUrl) {
				profileImageStatus[avatarKey(demo)] = 'empty';
				continue;
			}

			void (async () => {
				try {
					const response = await fetch(`/api/link-preview?url=${encodeURIComponent(linkedInUrl)}`);
					if (!response.ok) {
						profileImageStatus[avatarKey(demo)] = 'empty';
						return;
					}

					const data = await response.json();
					if (data.image) {
						profileImages[avatarKey(demo)] = data.image;
						profileImageStatus[avatarKey(demo)] = 'ready';
						return;
					}
					profileImageStatus[avatarKey(demo)] = 'empty';
				} catch {
					profileImageStatus[avatarKey(demo)] = 'empty';
				}
			})();
		}
	});
</script>

<div class="overflow-x-auto">
	<table class="w-full text-left text-sm border-collapse">
		<thead>
			<tr class="border-b border-border">
				{#if showAvatar}
					<th class="px-4 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
						Person
					</th>
				{/if}
				<th class="px-4 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
					{columnMode === 'night' ? 'Night' : 'Date'}
				</th>
				<th class="px-4 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Name</th>
				<th class="px-4 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Demo</th>
				<th class="px-4 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Link</th>
			</tr>
		</thead>
		<tbody>
			{#each demos as demo}
				<tr class="border-b border-border">
					{#if showAvatar}
						<td class="px-4 py-3">
							{#if profileImageStatus[avatarKey(demo)] === 'ready' && profileImages[avatarKey(demo)]}
								<img
									src={profileImages[avatarKey(demo)]}
									alt={demo.name}
									class="h-10 w-10 rounded-full object-cover grayscale"
									loading="lazy"
								/>
							{:else}
								<div class="h-10 w-10 rounded-full border border-border bg-card"></div>
							{/if}
						</td>
					{/if}
					<td class="px-4 py-3 text-nowrap text-muted-foreground">
						{columnMode === 'night' ? `#${demo.eventNumber ?? '-'}` : formatDate(demo.date)}
					</td>
					<td class="px-4 py-3 text-foreground">{demo.name}</td>
					<td class="px-4 py-3">
						<div class="text-foreground">{demo.title}</div>
						<div class="mt-1 text-xs text-muted-foreground">{demo.description}</div>
					</td>
					<td class="px-4 py-3">
						{#if hasDisplayUrl(demo.displayProjectUrl || '')}
							<a
								href={demo.displayProjectUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="text-xs underline transition-colors text-accent"
							>
								View →
							</a>
						{:else}
							<span class="text-xs text-muted-foreground">Not published</span>
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
