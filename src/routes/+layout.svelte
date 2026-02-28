<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import SEO from '$lib/utils/seo/SEO.svelte';

	let { children }: { children: any } = $props();

	onMount(() => {
		document.body.classList.add('dn-body');
		return () => {
			document.body.classList.remove('dn-body');
		};
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<SEO />

<div
	class="dn-root min-h-screen"
	style="
		--dn-bg: #0A0A0A;
		--dn-text: #E5E5E5;
		--dn-muted: #737373;
		--dn-accent: #FF4500;
		--dn-border: #2A2A2A;
		--dn-surface: #141414;
		font-family: 'JetBrains Mono', ui-monospace, monospace;
		background-color: var(--dn-bg);
		color: var(--dn-text);
	"
>
	<Header />
	{@render children()}
</div>

<style>
	:global(.dn-body) {
		background-color: #0a0a0a !important;
	}

	.dn-root :global(*) {
		border-radius: 0 !important;
	}
</style>
