<script lang="ts">
	import { onMount } from 'svelte';

	let glyphGrid = $state('');
	let mounted = $state(false);

	const glyphChars = '░▒▓█▀▄▐▌╔═╗║╚╝╬┼├┤┬┴─│●○◆◇■□▲△◀▶⟐⧫⬡⎔⏣⌬01>_';

	onMount(() => {
		mounted = true;
		const cols = 90;
		const rows = 28;
		let lines: string[] = [];
		for (let r = 0; r < rows; r++) {
			let line = '';
			for (let c = 0; c < cols; c++) {
				line += glyphChars[Math.floor(Math.random() * glyphChars.length)];
			}
			lines.push(line);
		}
		glyphGrid = lines.join('\n');
	});

	function scrollTo(id: string) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<!-- ============================================ -->
<!-- NAVIGATION                                    -->
<!-- ============================================ -->
<nav class="explore-nav">
	<button onclick={() => scrollTo('halftone')}>
		<span class="nav-num">01</span>
		<span class="nav-label">HALFTONE</span>
	</button>
	<button onclick={() => scrollTo('glyph')}>
		<span class="nav-num">02</span>
		<span class="nav-label">GLYPH</span>
	</button>
	<button onclick={() => scrollTo('grain')}>
		<span class="nav-num">03</span>
		<span class="nav-label">GRAIN</span>
	</button>
	<button onclick={() => scrollTo('moire')}>
		<span class="nav-num">04</span>
		<span class="nav-label">MOIRÉ</span>
	</button>
</nav>

<!-- ============================================ -->
<!-- DIRECTION 1: HALFTONE PRESS                   -->
<!-- ============================================ -->
<section id="halftone" class="dir-section">
	<div class="section-header">
		<span class="section-num">01</span>
		<div>
			<h2 class="section-title">HALFTONE PRESS</h2>
			<p class="section-tags">Ben-Day dots · Risograph · Screen print</p>
		</div>
	</div>

	<!-- Hero -->
	<div class="ht-hero">
		<div class="ht-hero-dots" aria-hidden="true"></div>
		<div class="ht-hero-dots-layer2" aria-hidden="true"></div>
		<h2 class="ht-hero-title">AI DEMO<br />NIGHTS</h2>
		<p class="ht-hero-sub">LONDON · MONTHLY · LIVE DEMOS ONLY</p>
	</div>

	<!-- Dot Variations -->
	<div class="ht-variations">
		<div class="ht-var">
			<div class="ht-swatch ht-dots-fine"></div>
			<span class="ht-var-label">FINE · 4px</span>
		</div>
		<div class="ht-var">
			<div class="ht-swatch ht-dots-medium"></div>
			<span class="ht-var-label">MEDIUM · 8px</span>
		</div>
		<div class="ht-var">
			<div class="ht-swatch ht-dots-staggered"></div>
			<span class="ht-var-label">STAGGERED HEX</span>
		</div>
		<div class="ht-var">
			<div class="ht-swatch ht-dots-cmyk"></div>
			<span class="ht-var-label">ROSETTE (CMYK)</span>
		</div>
	</div>

	<!-- Sample Card -->
	<div class="ht-card-area">
		<div class="ht-card">
			<div class="ht-card-stripe" aria-hidden="true"></div>
			<div class="ht-card-content">
				<span class="ht-card-eyebrow">NEXT EVENT</span>
				<h3 class="ht-card-title">AI Demo Night #10</h3>
				<p class="ht-card-meta">March 2026 · London</p>
				<p class="ht-card-body">4-min live demos. 4-min Q&A. No slides. Show what you've built.</p>
			</div>
		</div>
	</div>

	<!-- Dotted Typography -->
	<div class="ht-type-sample">
		<h3 class="ht-dotted-text">DEMO WHAT YOU'VE BUILT</h3>
		<p class="ht-type-note">Text filled with halftone dot pattern via background-clip</p>
	</div>

	<!-- Halftone Gradient Divider -->
	<div class="ht-divider" aria-hidden="true"></div>
</section>

<!-- ============================================ -->
<!-- DIRECTION 2: GLYPH MATRIX                     -->
<!-- ============================================ -->
<section id="glyph" class="dir-section">
	<div class="section-header">
		<span class="section-num">02</span>
		<div>
			<h2 class="section-title">GLYPH MATRIX</h2>
			<p class="section-tags">ASCII art · Unicode blocks · Character dither</p>
		</div>
	</div>

	<!-- Hero -->
	<div class="gm-hero">
		{#if mounted}
			<pre class="gm-hero-bg" aria-hidden="true">{glyphGrid}</pre>
		{/if}
		<div class="gm-hero-content">
			<h2 class="gm-hero-title">AI DEMO<br />NIGHTS</h2>
			<p class="gm-hero-sub">▸ LONDON ▸ MONTHLY ▸ LIVE DEMOS ONLY</p>
		</div>
		<div class="gm-scanline" aria-hidden="true"></div>
	</div>

	<!-- Unicode Gradient Strip -->
	<div class="gm-gradient-strip">
		<span class="gm-grad-label">DENSITY GRADIENT</span>
		<div class="gm-gradient-chars">
			<span style="opacity: 0.2">░░░░░░░░░░</span><span style="opacity: 0.4">▒▒▒▒▒▒▒▒▒▒</span><span
				style="opacity: 0.6">▓▓▓▓▓▓▓▓▓▓</span
			><span style="opacity: 0.8">██████████</span><span style="opacity: 1.0">██████████</span>
		</div>
	</div>

	<!-- Box-Drawing Card -->
	<div class="gm-card-area">
		<pre class="gm-card">╔══════════════════════════════════════╗
║                                      ║
║  <span class="gm-accent">NEXT EVENT</span>                         ║
║                                      ║
║  AI Demo Night #10                   ║
║  March 2026 · London                 ║
║                                      ║
║  4-min live demos. 4-min Q&amp;A.        ║
║  No slides. Show what you've built.  ║
║                                      ║
║  <span class="gm-accent">▸ REGISTER ON LUMA</span>                 ║
║                                      ║
╚══════════════════════════════════════╝</pre>
	</div>

	<!-- Character Texture Samples -->
	<div class="gm-textures">
		<div class="gm-tex">
			<pre class="gm-tex-content">░▒▓█▓▒░░▒▓█▓▒░
▒▓█▓▒░░▒▓█▓▒░░
▓█▓▒░░▒▓█▓▒░░▒
█▓▒░░▒▓█▓▒░░▒▓
▓▒░░▒▓█▓▒░░▒▓█
▒░░▒▓█▓▒░░▒▓█▓</pre>
			<span class="gm-tex-label">WAVE</span>
		</div>
		<div class="gm-tex">
			<pre class="gm-tex-content">┼─┼─┼─┼─┼─┼─┼─
│·│·│·│·│·│·│·│
┼─┼─┼─┼─┼─┼─┼─
│·│·│·│·│·│·│·│
┼─┼─┼─┼─┼─┼─┼─
│·│·│·│·│·│·│·│</pre>
			<span class="gm-tex-label">GRID</span>
		</div>
		<div class="gm-tex">
			<pre class="gm-tex-content">◆·◇·◆·◇·◆·◇·◆·
·◇·◆·◇·◆·◇·◆·◇
◆·◇·◆·◇·◆·◇·◆·
·◇·◆·◇·◆·◇·◆·◇
◆·◇·◆·◇·◆·◇·◆·
·◇·◆·◇·◆·◇·◆·◇</pre>
			<span class="gm-tex-label">DIAMOND</span>
		</div>
		<div class="gm-tex">
			<pre class="gm-tex-content">▀▄▀▄▀▄▀▄▀▄▀▄▀▄
▄▀▄▀▄▀▄▀▄▀▄▀▄▀
▀▄▀▄▀▄▀▄▀▄▀▄▀▄
▄▀▄▀▄▀▄▀▄▀▄▀▄▀
▀▄▀▄▀▄▀▄▀▄▀▄▀▄
▄▀▄▀▄▀▄▀▄▀▄▀▄▀</pre>
			<span class="gm-tex-label">CHECKER</span>
		</div>
	</div>

	<!-- Character Divider -->
	<div class="gm-divider" aria-hidden="true">
		═══════════════════════════════════════════════════════════════════════════════
	</div>
</section>

<!-- ============================================ -->
<!-- DIRECTION 3: SIGNAL GRAIN                     -->
<!-- ============================================ -->
<section id="grain" class="dir-section">
	<div class="section-header">
		<span class="section-num">03</span>
		<div>
			<h2 class="section-title">SIGNAL GRAIN</h2>
			<p class="section-tags">Film noise · Analog static · Dithered gradients</p>
		</div>
	</div>

	<!-- Hero -->
	<div class="sg-hero">
		<svg class="sg-noise" aria-hidden="true" width="100%" height="100%">
			<filter id="sg-noise-filter">
				<feTurbulence
					type="fractalNoise"
					baseFrequency="0.75"
					numOctaves="4"
					stitchTiles="stitch"
				/>
			</filter>
			<rect width="100%" height="100%" filter="url(#sg-noise-filter)" />
		</svg>
		<div class="sg-hero-vignette" aria-hidden="true"></div>
		<div class="sg-hero-content">
			<h2 class="sg-hero-title">AI DEMO<br />NIGHTS</h2>
			<p class="sg-hero-sub">LONDON · MONTHLY · LIVE DEMOS ONLY</p>
		</div>
	</div>

	<!-- Dithered Gradient Strips -->
	<div class="sg-gradients">
		<span class="sg-grad-label">DITHERED GRADIENTS</span>
		<div class="sg-grad-strip sg-grad-stepped"></div>
		<span class="sg-grad-sublabel">8-STEP QUANTIZED</span>
		<div class="sg-grad-strip sg-grad-fine"></div>
		<span class="sg-grad-sublabel">16-STEP QUANTIZED</span>
		<div class="sg-grad-strip sg-grad-smooth"></div>
		<span class="sg-grad-sublabel">SMOOTH REFERENCE</span>
	</div>

	<!-- Grain Card -->
	<div class="sg-card-area">
		<div class="sg-card">
			<svg class="sg-card-noise" aria-hidden="true" width="100%" height="100%">
				<filter id="sg-card-noise-filter">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.9"
						numOctaves="3"
						stitchTiles="stitch"
					/>
				</filter>
				<rect width="100%" height="100%" filter="url(#sg-card-noise-filter)" />
			</svg>
			<div class="sg-card-content">
				<span class="sg-card-eyebrow">NEXT EVENT</span>
				<h3 class="sg-card-title">AI Demo Night #10</h3>
				<p class="sg-card-meta">March 2026 · London</p>
				<p class="sg-card-body">4-min live demos. 4-min Q&A. No slides. Show what you've built.</p>
			</div>
		</div>
	</div>

	<!-- Grain Intensity Samples -->
	<div class="sg-intensities">
		<div class="sg-intensity">
			<svg class="sg-int-noise" aria-hidden="true" width="100%" height="100%">
				<filter id="sg-light">
					<feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" />
				</filter>
				<rect width="100%" height="100%" filter="url(#sg-light)" />
			</svg>
			<span class="sg-int-label">LIGHT</span>
		</div>
		<div class="sg-intensity">
			<svg class="sg-int-noise sg-int-medium" aria-hidden="true" width="100%" height="100%">
				<filter id="sg-med">
					<feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
				</filter>
				<rect width="100%" height="100%" filter="url(#sg-med)" />
			</svg>
			<span class="sg-int-label">MEDIUM</span>
		</div>
		<div class="sg-intensity sg-intensity-heavy">
			<svg class="sg-int-noise sg-int-heavy" aria-hidden="true" width="100%" height="100%">
				<filter id="sg-heavy">
					<feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="5" stitchTiles="stitch" />
				</filter>
				<rect width="100%" height="100%" filter="url(#sg-heavy)" />
			</svg>
			<span class="sg-int-label">HEAVY</span>
		</div>
	</div>

	<!-- Grain Divider -->
	<div class="sg-divider" aria-hidden="true">
		<svg width="100%" height="4" aria-hidden="true">
			<filter id="sg-div-noise">
				<feTurbulence type="fractalNoise" baseFrequency="2" numOctaves="4" stitchTiles="stitch" />
			</filter>
			<rect width="100%" height="4" filter="url(#sg-div-noise)" />
		</svg>
	</div>
</section>

<!-- ============================================ -->
<!-- DIRECTION 4: INTERFERENCE (WILDCARD)          -->
<!-- ============================================ -->
<section id="moire" class="dir-section">
	<div class="section-header">
		<span class="section-num">04</span>
		<div>
			<h2 class="section-title">INTERFERENCE</h2>
			<p class="section-tags">Moiré patterns · Line collision · Optical tension</p>
		</div>
	</div>

	<!-- Hero -->
	<div class="mi-hero">
		<div class="mi-hero-lines" aria-hidden="true"></div>
		<div class="mi-hero-lines-offset" aria-hidden="true"></div>
		<div class="mi-hero-content">
			<h2 class="mi-hero-title">AI DEMO<br />NIGHTS</h2>
			<p class="mi-hero-sub">LONDON · MONTHLY · LIVE DEMOS ONLY</p>
		</div>
	</div>

	<!-- Pattern Variations -->
	<div class="mi-variations">
		<div class="mi-var">
			<div class="mi-swatch mi-linear"></div>
			<span class="mi-var-label">LINEAR · 0° + 5°</span>
		</div>
		<div class="mi-var">
			<div class="mi-swatch mi-circular"></div>
			<span class="mi-var-label">CIRCULAR · OFFSET</span>
		</div>
		<div class="mi-var">
			<div class="mi-swatch mi-radial"></div>
			<span class="mi-var-label">RADIAL · 30 LINES</span>
		</div>
		<div class="mi-var">
			<div class="mi-swatch mi-combined"></div>
			<span class="mi-var-label">COMBINED</span>
		</div>
	</div>

	<!-- Animated Moiré Card -->
	<div class="mi-card-area">
		<div class="mi-card">
			<div class="mi-card-pattern" aria-hidden="true"></div>
			<div class="mi-card-pattern-offset" aria-hidden="true"></div>
			<div class="mi-card-content">
				<span class="mi-card-eyebrow">NEXT EVENT</span>
				<h3 class="mi-card-title">AI Demo Night #10</h3>
				<p class="mi-card-meta">March 2026 · London</p>
				<p class="mi-card-body">4-min live demos. 4-min Q&A. No slides. Show what you've built.</p>
			</div>
		</div>
	</div>

	<!-- Interactive Moiré -->
	<div class="mi-interactive">
		<p class="mi-interactive-note">HOVER TO SHIFT THE INTERFERENCE PATTERN</p>
		<div class="mi-interactive-zone">
			<div class="mi-interact-layer1" aria-hidden="true"></div>
			<div class="mi-interact-layer2" aria-hidden="true"></div>
		</div>
	</div>

	<!-- Moiré Divider -->
	<div class="mi-divider" aria-hidden="true"></div>
</section>

<!-- Footer -->
<div class="explore-footer">
	<p>DESIGN EXPLORATION · AI DEMO NIGHTS · {new Date().getFullYear()}</p>
	<p class="explore-footer-note">This page is temporary — delete after direction is chosen.</p>
</div>

<style>
	/* ========================================== */
	/* GLOBAL EXPLORATION STYLES                   */
	/* ========================================== */

	.explore-nav {
		position: sticky;
		top: 0;
		z-index: 50;
		display: flex;
		border-bottom: 1px solid var(--border);
		background-color: rgba(10, 10, 10, 0.9);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
	}

	.explore-nav button {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 1rem;
		font-family: inherit;
		font-size: 0.65rem;
		letter-spacing: 0.15em;
		color: var(--muted-foreground);
		background: transparent;
		border: none;
		border-right: 1px solid var(--border);
		cursor: pointer;
		transition: color 0.2s, background-color 0.2s;
	}

	.explore-nav button:last-child {
		border-right: none;
	}

	.explore-nav button:hover {
		color: var(--accent);
		background-color: rgba(255, 69, 0, 0.05);
	}

	.nav-num {
		font-weight: 700;
		color: var(--accent);
	}

	.nav-label {
		font-weight: 500;
	}

	.dir-section {
		border-bottom: 1px solid var(--border);
	}

	.section-header {
		display: flex;
		align-items: flex-start;
		gap: 1.5rem;
		padding: 3rem 2rem 2rem;
		border-bottom: 1px solid var(--border);
	}

	.section-num {
		font-size: 3rem;
		font-weight: 900;
		line-height: 1;
		color: var(--accent);
		opacity: 0.3;
	}

	.section-title {
		font-size: 1.5rem;
		font-weight: 700;
		letter-spacing: 0.05em;
		color: var(--foreground);
	}

	.section-tags {
		margin-top: 0.25rem;
		font-size: 0.7rem;
		letter-spacing: 0.1em;
		color: var(--muted-foreground);
	}

	.explore-footer {
		padding: 3rem 2rem;
		text-align: center;
		font-size: 0.65rem;
		letter-spacing: 0.15em;
		color: var(--muted-foreground);
	}

	.explore-footer-note {
		margin-top: 0.5rem;
		opacity: 0.5;
	}

	/* ========================================== */
	/* 01 — HALFTONE PRESS                         */
	/* ========================================== */

	.ht-hero {
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 70vh;
		padding: 6rem 2rem;
		background-color: var(--card);
	}

	.ht-hero-dots {
		position: absolute;
		inset: 0;
		background-image: radial-gradient(circle, #ff4500 1.8px, transparent 1.8px),
			radial-gradient(circle, #ff4500 1.8px, transparent 1.8px);
		background-size: 8px 8px;
		background-position:
			0 0,
			4px 4px;
		-webkit-mask-image: radial-gradient(ellipse at 50% 40%, black 10%, transparent 55%);
		mask-image: radial-gradient(ellipse at 50% 40%, black 10%, transparent 55%);
		opacity: 0.8;
	}

	.ht-hero-dots-layer2 {
		position: absolute;
		inset: 0;
		background-image: radial-gradient(circle, #ff6b3a 3px, transparent 3px),
			radial-gradient(circle, #ff6b3a 3px, transparent 3px);
		background-size: 14px 14px;
		background-position:
			0 0,
			7px 7px;
		-webkit-mask-image: radial-gradient(ellipse at 50% 60%, black 5%, transparent 40%);
		mask-image: radial-gradient(ellipse at 50% 60%, black 5%, transparent 40%);
		opacity: 0.25;
	}

	.ht-hero-title {
		position: relative;
		font-size: clamp(4rem, 15vw, 10rem);
		font-weight: 900;
		line-height: 0.85;
		text-align: center;
		color: var(--foreground);
		letter-spacing: -0.03em;
	}

	.ht-hero-sub {
		position: relative;
		margin-top: 2rem;
		font-size: 0.7rem;
		letter-spacing: 0.35em;
		color: var(--muted-foreground);
	}

	/* Dot Variations */
	.ht-variations {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1px;
		background-color: var(--border);
		border-top: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
	}

	.ht-var {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		padding: 2rem 1rem;
		background-color: var(--card);
	}

	.ht-swatch {
		width: 100%;
		aspect-ratio: 2/1;
		max-width: 200px;
	}

	.ht-dots-fine {
		background-image: radial-gradient(circle, #ff4500 0.8px, transparent 0.8px);
		background-size: 4px 4px;
	}

	.ht-dots-medium {
		background-image: radial-gradient(circle, #ff4500 2px, transparent 2px);
		background-size: 8px 8px;
	}

	.ht-dots-staggered {
		background-image: radial-gradient(circle, #ff4500 1.5px, transparent 1.5px),
			radial-gradient(circle, #ff4500 1.5px, transparent 1.5px);
		background-size: 7px 7px;
		background-position:
			0 0,
			3.5px 3.5px;
	}

	.ht-dots-cmyk {
		position: relative;
		overflow: hidden;
	}

	.ht-dots-cmyk::before {
		content: '';
		position: absolute;
		inset: -20%;
		width: 140%;
		height: 140%;
		background-image: radial-gradient(circle, #ff4500 1.2px, transparent 1.2px);
		background-size: 6px 6px;
		transform: rotate(15deg);
		opacity: 0.7;
	}

	.ht-dots-cmyk::after {
		content: '';
		position: absolute;
		inset: -20%;
		width: 140%;
		height: 140%;
		background-image: radial-gradient(circle, #ff6b3a 1.2px, transparent 1.2px);
		background-size: 6px 6px;
		transform: rotate(45deg);
		opacity: 0.5;
	}

	.ht-var-label {
		font-size: 0.6rem;
		letter-spacing: 0.15em;
		color: var(--muted-foreground);
	}

	/* Halftone Card */
	.ht-card-area {
		padding: 3rem 2rem;
		display: flex;
		justify-content: center;
	}

	.ht-card {
		display: flex;
		max-width: 500px;
		width: 100%;
		border: 1px solid var(--border);
		overflow: hidden;
	}

	.ht-card-stripe {
		width: 6px;
		flex-shrink: 0;
		background-image: radial-gradient(circle, #ff4500 1px, transparent 1px),
			radial-gradient(circle, #ff4500 1px, transparent 1px);
		background-size: 5px 5px;
		background-position:
			0 0,
			2.5px 2.5px;
	}

	.ht-card-content {
		padding: 1.5rem;
		flex: 1;
	}

	.ht-card-eyebrow {
		font-size: 0.6rem;
		letter-spacing: 0.2em;
		color: var(--accent);
		font-weight: 600;
	}

	.ht-card-title {
		margin-top: 0.5rem;
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--foreground);
	}

	.ht-card-meta {
		margin-top: 0.25rem;
		font-size: 0.75rem;
		color: var(--muted-foreground);
	}

	.ht-card-body {
		margin-top: 0.75rem;
		font-size: 0.8rem;
		line-height: 1.6;
		color: var(--muted-foreground);
	}

	/* Dotted Typography */
	.ht-type-sample {
		padding: 4rem 2rem;
		text-align: center;
	}

	.ht-dotted-text {
		font-size: clamp(2rem, 6vw, 4.5rem);
		font-weight: 900;
		letter-spacing: -0.02em;
		line-height: 1;
		background-image: radial-gradient(circle, #ff4500 35%, transparent 35%);
		background-size: 5px 5px;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		color: transparent;
	}

	.ht-type-note {
		margin-top: 1rem;
		font-size: 0.6rem;
		letter-spacing: 0.1em;
		color: var(--muted-foreground);
		opacity: 0.6;
	}

	/* Halftone Divider */
	.ht-divider {
		height: 40px;
		background-image: radial-gradient(circle, #ff4500 1.5px, transparent 1.5px),
			radial-gradient(circle, #ff4500 1.5px, transparent 1.5px);
		background-size: 7px 7px;
		background-position:
			0 0,
			3.5px 3.5px;
		-webkit-mask-image: linear-gradient(
			to bottom,
			black 0%,
			black 20%,
			transparent 100%
		);
		mask-image: linear-gradient(to bottom, black 0%, black 20%, transparent 100%);
		opacity: 0.5;
	}

	/* ========================================== */
	/* 02 — GLYPH MATRIX                           */
	/* ========================================== */

	.gm-hero {
		position: relative;
		overflow: hidden;
		min-height: 70vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--card);
	}

	.gm-hero-bg {
		position: absolute;
		inset: 0;
		margin: 0;
		padding: 1rem;
		font-size: 0.7rem;
		line-height: 1.4;
		color: var(--accent);
		opacity: 0.08;
		white-space: pre;
		overflow: hidden;
		pointer-events: none;
		user-select: none;
	}

	.gm-hero-content {
		position: relative;
		text-align: center;
		z-index: 1;
	}

	.gm-hero-title {
		font-size: clamp(4rem, 15vw, 10rem);
		font-weight: 900;
		line-height: 0.85;
		color: var(--foreground);
		letter-spacing: -0.03em;
		text-shadow:
			0 0 60px rgba(255, 69, 0, 0.15),
			0 0 120px rgba(255, 69, 0, 0.05);
	}

	.gm-hero-sub {
		margin-top: 2rem;
		font-size: 0.7rem;
		letter-spacing: 0.35em;
		color: var(--muted-foreground);
	}

	.gm-scanline {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: linear-gradient(
			to right,
			transparent,
			rgba(255, 69, 0, 0.3),
			transparent
		);
		animation: scanline 4s linear infinite;
		pointer-events: none;
		z-index: 2;
	}

	@keyframes scanline {
		0% {
			top: -2px;
		}
		100% {
			top: 100%;
		}
	}

	/* Unicode Gradient Strip */
	.gm-gradient-strip {
		padding: 2rem;
		border-top: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
	}

	.gm-grad-label {
		display: block;
		margin-bottom: 1rem;
		font-size: 0.6rem;
		letter-spacing: 0.2em;
		color: var(--muted-foreground);
	}

	.gm-gradient-chars {
		font-size: 1.2rem;
		line-height: 1;
		color: var(--accent);
		letter-spacing: 0.05em;
		overflow-x: auto;
		white-space: nowrap;
	}

	/* Box-Drawing Card */
	.gm-card-area {
		padding: 3rem 2rem;
		display: flex;
		justify-content: center;
	}

	.gm-card {
		font-size: 0.8rem;
		line-height: 1.5;
		color: var(--muted-foreground);
		margin: 0;
		white-space: pre;
		overflow-x: auto;
	}

	.gm-accent {
		color: var(--accent);
		font-weight: 600;
	}

	/* Character Textures */
	.gm-textures {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1px;
		background-color: var(--border);
		border-top: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
	}

	.gm-tex {
		padding: 1.5rem;
		background-color: var(--card);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.gm-tex-content {
		font-size: 0.65rem;
		line-height: 1.2;
		color: var(--accent);
		opacity: 0.4;
		margin: 0;
		white-space: pre;
	}

	.gm-tex-label {
		font-size: 0.55rem;
		letter-spacing: 0.2em;
		color: var(--muted-foreground);
	}

	/* Glyph Divider */
	.gm-divider {
		padding: 1rem 2rem;
		font-size: 0.6rem;
		color: var(--accent);
		opacity: 0.15;
		overflow: hidden;
		white-space: nowrap;
		line-height: 1;
	}

	/* ========================================== */
	/* 03 — SIGNAL GRAIN                           */
	/* ========================================== */

	.sg-hero {
		position: relative;
		overflow: hidden;
		min-height: 70vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #050505;
	}

	.sg-noise {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		opacity: 0.12;
		mix-blend-mode: screen;
		pointer-events: none;
	}

	.sg-hero-vignette {
		position: absolute;
		inset: 0;
		background: radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.7) 100%);
		pointer-events: none;
	}

	.sg-hero-content {
		position: relative;
		text-align: center;
		z-index: 1;
	}

	.sg-hero-title {
		font-size: clamp(4rem, 15vw, 10rem);
		font-weight: 900;
		line-height: 0.85;
		color: var(--accent);
		letter-spacing: -0.03em;
		text-shadow:
			0 0 80px rgba(255, 69, 0, 0.3),
			0 0 160px rgba(255, 69, 0, 0.1);
	}

	.sg-hero-sub {
		margin-top: 2rem;
		font-size: 0.7rem;
		letter-spacing: 0.35em;
		color: var(--muted-foreground);
		opacity: 0.7;
	}

	/* Dithered Gradients */
	.sg-gradients {
		padding: 2.5rem 2rem;
		border-top: 1px solid var(--border);
	}

	.sg-grad-label {
		display: block;
		margin-bottom: 1.5rem;
		font-size: 0.6rem;
		letter-spacing: 0.2em;
		color: var(--muted-foreground);
	}

	.sg-grad-strip {
		height: 32px;
		width: 100%;
		margin-bottom: 0.25rem;
	}

	.sg-grad-sublabel {
		display: block;
		margin-bottom: 1.5rem;
		font-size: 0.5rem;
		letter-spacing: 0.15em;
		color: var(--muted-foreground);
		opacity: 0.5;
	}

	.sg-grad-stepped {
		background: linear-gradient(
			to right,
			#0a0a0a 0%,
			#0a0a0a 12.5%,
			#1a1210 12.5%,
			#1a1210 25%,
			#2d1a12 25%,
			#2d1a12 37.5%,
			#4a2010 37.5%,
			#4a2010 50%,
			#7a2a08 50%,
			#7a2a08 62.5%,
			#aa3800 62.5%,
			#aa3800 75%,
			#d44200 75%,
			#d44200 87.5%,
			#ff4500 87.5%,
			#ff4500 100%
		);
	}

	.sg-grad-fine {
		background: linear-gradient(
			to right,
			#0a0a0a 0%,
			#0a0a0a 6.25%,
			#120e0a 6.25%,
			#120e0a 12.5%,
			#1a120c 12.5%,
			#1a120c 18.75%,
			#22160e 18.75%,
			#22160e 25%,
			#2d1a10 25%,
			#2d1a10 31.25%,
			#3a1e0c 31.25%,
			#3a1e0c 37.5%,
			#4a220a 37.5%,
			#4a220a 43.75%,
			#5c2808 43.75%,
			#5c2808 50%,
			#702e06 50%,
			#702e06 56.25%,
			#843404 56.25%,
			#843404 62.5%,
			#983a02 62.5%,
			#983a02 68.75%,
			#ac3e00 68.75%,
			#ac3e00 75%,
			#c04200 75%,
			#c04200 81.25%,
			#d44400 81.25%,
			#d44400 87.5%,
			#ea4600 87.5%,
			#ea4600 93.75%,
			#ff4500 93.75%,
			#ff4500 100%
		);
	}

	.sg-grad-smooth {
		background: linear-gradient(to right, #0a0a0a, #ff4500);
	}

	/* Grain Card */
	.sg-card-area {
		padding: 3rem 2rem;
		display: flex;
		justify-content: center;
		border-top: 1px solid var(--border);
	}

	.sg-card {
		position: relative;
		max-width: 500px;
		width: 100%;
		border: 1px solid var(--border);
		overflow: hidden;
		background-color: var(--card);
	}

	.sg-card-noise {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		opacity: 0.06;
		mix-blend-mode: screen;
		pointer-events: none;
	}

	.sg-card-content {
		position: relative;
		padding: 2rem;
	}

	.sg-card-eyebrow {
		font-size: 0.6rem;
		letter-spacing: 0.2em;
		color: var(--accent);
		font-weight: 600;
	}

	.sg-card-title {
		margin-top: 0.5rem;
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--foreground);
	}

	.sg-card-meta {
		margin-top: 0.25rem;
		font-size: 0.75rem;
		color: var(--muted-foreground);
	}

	.sg-card-body {
		margin-top: 0.75rem;
		font-size: 0.8rem;
		line-height: 1.6;
		color: var(--muted-foreground);
	}

	/* Grain Intensities */
	.sg-intensities {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1px;
		background-color: var(--border);
		border-top: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
	}

	.sg-intensity {
		position: relative;
		aspect-ratio: 1;
		background-color: #0a0a0a;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.sg-int-noise {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		opacity: 0.08;
		mix-blend-mode: screen;
		pointer-events: none;
	}

	.sg-int-medium {
		opacity: 0.18;
	}

	.sg-int-heavy {
		opacity: 0.35;
	}

	.sg-int-label {
		position: relative;
		font-size: 0.6rem;
		letter-spacing: 0.2em;
		color: var(--muted-foreground);
		z-index: 1;
	}

	/* Grain Divider */
	.sg-divider {
		opacity: 0.3;
	}

	/* ========================================== */
	/* 04 — INTERFERENCE                           */
	/* ========================================== */

	.mi-hero {
		position: relative;
		overflow: hidden;
		min-height: 70vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--card);
	}

	.mi-hero-lines {
		position: absolute;
		inset: -50%;
		width: 200%;
		height: 200%;
		background: repeating-linear-gradient(
			0deg,
			transparent,
			transparent 3px,
			rgba(255, 69, 0, 0.1) 3px,
			rgba(255, 69, 0, 0.1) 4px
		);
		animation: moire-drift 20s linear infinite;
	}

	.mi-hero-lines-offset {
		position: absolute;
		inset: -50%;
		width: 200%;
		height: 200%;
		background: repeating-linear-gradient(
			4deg,
			transparent,
			transparent 3px,
			rgba(255, 69, 0, 0.1) 3px,
			rgba(255, 69, 0, 0.1) 4px
		);
		animation: moire-drift-reverse 25s linear infinite;
	}

	@keyframes moire-drift {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(3deg);
		}
	}

	@keyframes moire-drift-reverse {
		0% {
			transform: rotate(4deg);
		}
		100% {
			transform: rotate(1deg);
		}
	}

	.mi-hero-content {
		position: relative;
		text-align: center;
		z-index: 1;
	}

	.mi-hero-title {
		font-size: clamp(4rem, 15vw, 10rem);
		font-weight: 900;
		line-height: 0.85;
		color: var(--foreground);
		letter-spacing: -0.03em;
	}

	.mi-hero-sub {
		margin-top: 2rem;
		font-size: 0.7rem;
		letter-spacing: 0.35em;
		color: var(--muted-foreground);
	}

	/* Pattern Variations */
	.mi-variations {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1px;
		background-color: var(--border);
		border-top: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
	}

	.mi-var {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		padding: 2rem 1rem;
		background-color: var(--card);
	}

	.mi-swatch {
		width: 100%;
		aspect-ratio: 1;
		max-width: 180px;
		overflow: hidden;
	}

	.mi-linear {
		background: repeating-linear-gradient(
				0deg,
				transparent,
				transparent 3px,
				rgba(255, 69, 0, 0.15) 3px,
				rgba(255, 69, 0, 0.15) 4px
			),
			repeating-linear-gradient(
				5deg,
				transparent,
				transparent 3px,
				rgba(255, 69, 0, 0.15) 3px,
				rgba(255, 69, 0, 0.15) 4px
			);
	}

	.mi-circular {
		background: repeating-radial-gradient(
				circle at 45% 50%,
				transparent,
				transparent 4px,
				rgba(255, 69, 0, 0.08) 4px,
				rgba(255, 69, 0, 0.08) 5px
			),
			repeating-radial-gradient(
				circle at 55% 50%,
				transparent,
				transparent 4px,
				rgba(255, 69, 0, 0.08) 4px,
				rgba(255, 69, 0, 0.08) 5px
			);
	}

	.mi-radial {
		background: repeating-conic-gradient(
			from 0deg,
			transparent 0deg,
			transparent 5.5deg,
			rgba(255, 69, 0, 0.1) 5.5deg,
			rgba(255, 69, 0, 0.1) 6deg
		);
	}

	.mi-combined {
		background: repeating-linear-gradient(
				0deg,
				transparent,
				transparent 4px,
				rgba(255, 69, 0, 0.08) 4px,
				rgba(255, 69, 0, 0.08) 5px
			),
			repeating-linear-gradient(
				3deg,
				transparent,
				transparent 4px,
				rgba(255, 69, 0, 0.08) 4px,
				rgba(255, 69, 0, 0.08) 5px
			),
			repeating-radial-gradient(
				circle at 50% 50%,
				transparent,
				transparent 5px,
				rgba(255, 69, 0, 0.06) 5px,
				rgba(255, 69, 0, 0.06) 6px
			);
	}

	.mi-var-label {
		font-size: 0.55rem;
		letter-spacing: 0.15em;
		color: var(--muted-foreground);
		text-align: center;
	}

	/* Moiré Card */
	.mi-card-area {
		padding: 3rem 2rem;
		display: flex;
		justify-content: center;
	}

	.mi-card {
		position: relative;
		max-width: 500px;
		width: 100%;
		border: 1px solid var(--border);
		overflow: hidden;
		background-color: var(--card);
	}

	.mi-card-pattern {
		position: absolute;
		inset: 0;
		background: repeating-linear-gradient(
			0deg,
			transparent,
			transparent 4px,
			rgba(255, 69, 0, 0.04) 4px,
			rgba(255, 69, 0, 0.04) 5px
		);
		pointer-events: none;
	}

	.mi-card-pattern-offset {
		position: absolute;
		inset: 0;
		background: repeating-linear-gradient(
			3deg,
			transparent,
			transparent 4px,
			rgba(255, 69, 0, 0.04) 4px,
			rgba(255, 69, 0, 0.04) 5px
		);
		pointer-events: none;
		transition: transform 0.6s ease;
	}

	.mi-card:hover .mi-card-pattern-offset {
		transform: rotate(1deg);
	}

	.mi-card-content {
		position: relative;
		padding: 2rem;
		z-index: 1;
	}

	.mi-card-eyebrow {
		font-size: 0.6rem;
		letter-spacing: 0.2em;
		color: var(--accent);
		font-weight: 600;
	}

	.mi-card-title {
		margin-top: 0.5rem;
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--foreground);
	}

	.mi-card-meta {
		margin-top: 0.25rem;
		font-size: 0.75rem;
		color: var(--muted-foreground);
	}

	.mi-card-body {
		margin-top: 0.75rem;
		font-size: 0.8rem;
		line-height: 1.6;
		color: var(--muted-foreground);
	}

	/* Interactive Moiré */
	.mi-interactive {
		padding: 2rem;
		border-top: 1px solid var(--border);
	}

	.mi-interactive-note {
		margin-bottom: 1rem;
		font-size: 0.6rem;
		letter-spacing: 0.2em;
		color: var(--muted-foreground);
		text-align: center;
	}

	.mi-interactive-zone {
		position: relative;
		width: 100%;
		height: 300px;
		overflow: hidden;
		border: 1px solid var(--border);
		cursor: crosshair;
	}

	.mi-interact-layer1 {
		position: absolute;
		inset: -25%;
		width: 150%;
		height: 150%;
		background: repeating-radial-gradient(
			circle at 50% 50%,
			transparent,
			transparent 5px,
			rgba(255, 69, 0, 0.1) 5px,
			rgba(255, 69, 0, 0.1) 6px
		);
	}

	.mi-interact-layer2 {
		position: absolute;
		inset: -25%;
		width: 150%;
		height: 150%;
		background: repeating-radial-gradient(
			circle at 50% 50%,
			transparent,
			transparent 5px,
			rgba(255, 69, 0, 0.1) 5px,
			rgba(255, 69, 0, 0.1) 6px
		);
		transition: transform 0.3s ease;
	}

	.mi-interactive-zone:hover .mi-interact-layer2 {
		transform: translate(15px, 10px) scale(1.02);
	}

	/* Moiré Divider */
	.mi-divider {
		height: 60px;
		background: repeating-linear-gradient(
				0deg,
				transparent,
				transparent 2px,
				rgba(255, 69, 0, 0.06) 2px,
				rgba(255, 69, 0, 0.06) 3px
			),
			repeating-linear-gradient(
				2.5deg,
				transparent,
				transparent 2px,
				rgba(255, 69, 0, 0.06) 2px,
				rgba(255, 69, 0, 0.06) 3px
			);
	}

	/* ========================================== */
	/* RESPONSIVE                                  */
	/* ========================================== */

	@media (max-width: 768px) {
		.ht-variations,
		.gm-textures,
		.mi-variations {
			grid-template-columns: repeat(2, 1fr);
		}

		.ht-hero-title,
		.gm-hero-title,
		.sg-hero-title,
		.mi-hero-title {
			font-size: clamp(3rem, 12vw, 6rem);
		}
	}
</style>
