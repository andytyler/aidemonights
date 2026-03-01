export type AffiliationTag = {
	label: string; // "YC W25", "Sequoia-backed"
	icon?: string; // optional path to small icon
};

export type CommunityCompany = {
	name: string;
	wordmark_url?: string; // clear logo/wordmark URL
	website_url?: string;
	one_liner: string; // max ~50 chars
	affiliation?: AffiliationTag;
	featured?: boolean; // true = shows on main page preview
};

export const communityCompanies: CommunityCompany[] = [
	{
		name: 'Atla (YC W25)',
		website_url: 'https://atla-ai.com/',
		wordmark_url:
			'https://cdn.prod.website-files.com/66598898fd13d51606c3215d/68c16e564505670f18b925c1_logo-updated.svg',
		one_liner: 'AI evaluation platform for LLM systems',
		affiliation: { label: 'YC W25' },
		featured: true
	},
	{
		name: 'Atla',
		website_url: 'https://atla-ai.com/',
		one_liner: 'AI evaluation platform for LLM systems',
		affiliation: { label: 'YC W25' },
		featured: true
	},
	{
		name: 'Atla',
		website_url: 'https://atla-ai.com/',
		wordmark_url:
			'https://cdn.prod.website-files.com/66598898fd13d51606c3215d/68c16e564505670f18b925c1_logo-updated.svg',
		one_liner: 'AI evaluation platform for LLM systems',
		affiliation: { label: 'YC W25' },
		featured: true
	},
	{
		name: 'Atla',
		website_url: 'https://atla-ai.com/',
		wordmark_url:
			'https://cdn.prod.website-files.com/66598898fd13d51606c3215d/68c16e564505670f18b925c1_logo-updated.svg',
		one_liner: 'AI evaluation platform for LLM systems',
		affiliation: { label: 'YC W25' },
		featured: true
	},
	{
		name: 'Atla',
		website_url: 'https://atla-ai.com/',
		wordmark_url:
			'https://cdn.prod.website-files.com/66598898fd13d51606c3215d/68c16e564505670f18b925c1_logo-updated.svg',
		one_liner: 'AI evaluation platform for LLM systems',
		affiliation: { label: 'YC W25' },
		featured: true
	},
	{
		name: 'Atla',
		website_url: 'https://atla-ai.com/',
		wordmark_url:
			'https://cdn.prod.website-files.com/66598898fd13d51606c3215d/68c16e564505670f18b925c1_logo-updated.svg',
		one_liner: 'AI evaluation platform for LLM systems',
		affiliation: { label: 'YC W25' },
		featured: true
	},
	{
		name: 'Prodia',
		website_url: 'https://prodia.com/',
		one_liner: 'worlds fastest AI media imferences',
		featured: true
	},
	{
		name: 'ventrue',
		one_liner: 'Helping engineers replace project managers',
		featured: true
	}
];

export const featuredCompanies = communityCompanies.filter((c) => c.featured);
