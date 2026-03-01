<script lang="ts">
	import { markdownToHtml } from '$lib/utils/markdown';

	let { markdown, class: className = '' } = $props<{
		markdown: string;
		class?: string;
	}>();
</script>

<div class={`dev-markdown${className ? ` ${className}` : ''}`}>{@html markdownToHtml(markdown)}</div>
