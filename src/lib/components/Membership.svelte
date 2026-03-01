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
	<div class="border-l-2 pl-6 dn-accent-border">
		<p class="text-lg font-semibold dn-text">
			Join London's most active AI builder community.
		</p>
		<p class="mt-2 text-sm dn-muted">
			Free to attend. Become a member to unlock everything.
		</p>
	</div>

	<!-- Benefits grid -->
	<div class="grid gap-px md:grid-cols-2 lg:grid-cols-3 dn-bg-border">
		{#each benefits as benefit, i}
			<div
				class="group relative overflow-hidden p-6 benefit-enter dn-bg-surface" style={`animation-delay: ${i * 80}ms;`}
			>
				<div class="flex items-start gap-3">
					<span
						class="mt-0.5 inline-block h-1.5 w-1.5 shrink-0 dn-bg-accent"
					></span>
					<div>
						<span class="text-sm font-medium dn-text">
							{benefit.label}
						</span>
						<p class="mt-1 text-xs leading-relaxed dn-muted">
							{benefit.detail}
						</p>
					</div>
				</div>
				<!-- Subtle hover glow -->
				<div
					class="absolute inset-0 dn-glow-surface-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				></div>
			</div>
		{/each}
	</div>

	<!-- CTA -->
	<a
		href={lumaUrl}
		target="_blank"
		rel="noopener noreferrer"
		class="group relative block overflow-hidden border p-6 transition-colors dn-accent-border dn-bg-surface"
	>
		<div class="flex items-center justify-between">
			<div>
				<span class="text-sm font-semibold dn-text">
					Become a Member
				</span>
				<span class="ml-3 text-xs dn-muted">
					Sign up on Luma to join
				</span>
			</div>
			<span
				class="text-sm transition-transform duration-200 group-hover:translate-x-1 dn-accent"
			>
				→
			</span>
		</div>
		<!-- Accent line animation -->
		<div
			class="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full dn-bg-accent"
		></div>
	</a>
</div>
