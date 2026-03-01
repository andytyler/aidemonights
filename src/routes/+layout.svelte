<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import SEO from '$lib/utils/seo/SEO.svelte';
	import './layout.css';

	let { children }: { children: any } = $props();
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

<div class="theme-root min-h-screen">
	<Header />
	{@render children()}
</div>
