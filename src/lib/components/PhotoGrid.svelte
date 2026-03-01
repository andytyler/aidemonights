<script lang="ts">
	const photoModules = import.meta.glob('../assets/images/*.{avif,gif,jpeg,jpg,png,webp}', {
		eager: true,
		query: { enhanced: true }
	});

	type PhotoSource = {
		img?: {
			src?: string;
			w?: number;
			h?: number;
		};
		sources?: Record<string, string>;
	};

	type PhotoModule = {
		default: PhotoSource;
	};

	const photos = Object.entries(photoModules as Record<string, PhotoModule>)
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([path, module]) => ({
			src: module.default,
			alt:
				path
					.split('/')
					.pop()
					?.replace(/\.[^/.]+$/, '') ?? 'Photo'
		}));
</script>

<div class="grid grid-cols-2 gap-px bg-border md:grid-cols-3 lg:grid-cols-4">
	{#each photos as photo (photo.src)}
		<div class="aspect-square overflow-hidden bg-card">
			<enhanced:img
				src={photo.src}
				alt={photo.alt}
				class="block h-full w-full object-cover"
				loading="lazy"
			/>
		</div>
	{/each}
</div>
