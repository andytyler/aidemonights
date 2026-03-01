import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	return {
		seo: {
			title: 'AI Demo Nights — London',
			description:
				'A monthly AI project showcase in London. Demo what you built, see what others are building.',
			url: 'https://github.com/andytyler/aidemonights',
			image: '/icon.png',
			siteName: 'AI Demo Nights',
			type: 'website'
		}
	};
};
