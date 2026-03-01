export type SponsorTier = 'headline' | 'partner' | 'community';

export type Sponsor = {
	name: string;
	url: string;
	tier: SponsorTier;
	logo?: string;
	tagline?: string;
};

export const sponsors: Sponsor[] = [
	{
		name: 'Bright Data',
		url: 'https://brightdata.com',
		tier: 'headline',
		tagline: 'Real-time web data infrastructure for AI'
	},
	{
		name: 'CoLoop',
		url: 'https://coloop.ai',
		tier: 'partner',
		logo: '/sponsors/coloop.png',
		tagline: 'Partner'
	},
	{
		name: 'Prodia',
		url: 'https://prodia.com',
		tier: 'partner',
		tagline: 'Partner'
	},
	{
		name: 'MMC',
		url: '',
		tier: 'partner',
		tagline: 'VC partner'
	},
	{
		name: 'Slush',
		url: 'https://www.slush.org',
		tier: 'partner',
		tagline: 'Partner'
	},
	{
		name: 'Encode Hub',
		url: '',
		tier: 'community',
		tagline: 'Community partner'
	},
	{
		name: 'Idea London',
		url: '',
		tier: 'community',
		tagline: 'Community partner'
	},
	{
		name: 'Side Projects',
		url: '',
		tier: 'community',
		tagline: 'Sister community'
	}
];

export const pastSponsors: Sponsor[] = [
	{
		name: 'Future House',
		url: '',
		tier: 'partner',
		logo: '/sponsors/future-house.svg',
		tagline: 'Venue partner'
	},
	{
		name: 'London Founder House',
		url: '',
		tier: 'partner',
		logo: '/sponsors/london-founder-house.svg',
		tagline: 'Venue partner'
	}
];

export const sponsorLinkedIn = 'https://linkedin.com/in/ajt.dev';
