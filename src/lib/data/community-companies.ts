export type AffiliationTag = {
	label: string; // "YC W25", "Sequoia-backed"
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
		name: 'Prodia',
		website_url: 'https://prodia.com/',
		one_liner: 'Worlds fastest AI media imferences',
		featured: true
	},
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
		name: 'CoLoop',
		website_url: 'https://www.coloop.ai',
		one_liner: 'Turn raw qualitative data into strategic insights faster',
		affiliation: { label: 'YC S21' },
		featured: true
	}
];

export const featuredCompanies = communityCompanies.filter((c) => c.featured);
