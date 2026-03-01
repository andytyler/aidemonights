<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import SEO from '$lib/utils/seo/SEO.svelte';
	import wordmark from '$lib/assets/brand/wordmark.png';
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

<div class="theme-root flex min-h-screen flex-col">
	<Header />
	<div class="flex-1">
		{@render children()}
	</div>
	<footer class="border-t border-border px-6 py-8">
		<div class="mx-auto flex max-w-4xl flex-col items-center gap-3">
			<img src={wordmark} alt="AI Demo Nights" class="h-10 w-auto" />
			<p class="text-xs text-muted-foreground">
				Built by <a href="https://ajt.dev" class="text-muted-foreground underline">ajt.dev</a> ✨ in
				London ·
				<a
					href="https://github.com/andytyler/aidemonights"
					class="text-muted-foreground/80 underline">repo</a
				>
			</p>
		</div>
	</footer>
</div>
