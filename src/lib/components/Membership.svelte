<script lang="ts">
	let { lumaUrl }: { lumaUrl: string } = $props();

	const benefits = [
		{ label: 'Priority RSVP', detail: 'Guaranteed spot before public registration opens' },
		{ label: 'Demo Slots', detail: 'Members get first pick of demo slots each month' },
		{ label: 'Cofounder Matching', detail: 'Curated intros with other builders looking for cofounders' },
		{ label: 'Recordings', detail: 'Access to full demo recordings and post-event recaps' },
		{ label: 'Community', detail: 'Private group with London\'s most active AI builders' },
		{ label: 'Office Hours', detail: 'Monthly 1-on-1s with founders and investors in the network' }
	];
</script>

<div class="space-y-8">
	<!-- Membership pitch -->
	<div class="border-l-2 border-accent pl-6">
		<p class="text-lg font-semibold text-foreground">
			Join London's most active AI builder community.
		</p>
		<p class="mt-2 text-sm text-muted-foreground">
			Free to attend. Become a member to unlock everything.
		</p>
	</div>

	<!-- Benefits grid -->
	<div class="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
		{#each benefits as benefit, i}
			<div
				class="group relative overflow-hidden bg-card p-6 benefit-enter"
				style={`animation-delay: ${i * 80}ms;`}
			>
				<div class="flex items-start gap-3">
					<span class="mt-0.5 inline-block h-1.5 w-1.5 shrink-0 bg-accent"></span>
					<div>
						<span class="text-sm font-medium text-foreground">
							{benefit.label}
						</span>
						<p class="mt-1 text-xs leading-relaxed text-muted-foreground">
							{benefit.detail}
						</p>
					</div>
				</div>
				<!-- Subtle hover glow -->
				<div
					class="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					style="background: linear-gradient(135deg, var(--accent-soft-3) 0%, transparent 60%);"
				></div>
			</div>
		{/each}
	</div>

	<!-- CTA -->
	<a
		href={lumaUrl}
		target="_blank"
		rel="noopener noreferrer"
		class="group relative block overflow-hidden border border-accent bg-card p-6 transition-colors"
	>
		<div class="flex items-center justify-between">
			<div>
				<span class="text-sm font-semibold text-foreground">
					Become a Member
				</span>
				<span class="ml-3 text-xs text-muted-foreground">
					Sign up on Luma to join
				</span>
			</div>
			<span
				class="text-sm text-accent transition-transform duration-200 group-hover:translate-x-1"
			>
				→
			</span>
		</div>
		<!-- Accent line animation -->
		<div
			class="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full"
		></div>
	</a>
</div>
