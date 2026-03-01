import { demoMetadata } from './demoMetadata';

export type Demo = {
	name: string;
	title: string;
	description: string;
	projectUrl: string;
	date: string; // ISO 8601
	eventNumber?: number;
	linkedIn?: string;
	twitter?: string;
	profileImage?: string;
	displayProjectUrl?: string;
};

export type DemoNightEvent = {
	number: number;
	date: string;
	venue?: string;
	lumaUrl?: string;
	demos: Demo[];
};

const stripUrls = (value?: string): string => {
	return (value || '')
		.trim()
		.replace(/[‘’]/g, "'")
		.replace(/\s+/g, ' ')
		.trim();
};

const isLikelyProjectUrl = (value: string): boolean => {
	const normalized = stripUrls(value);
	if (!normalized) return false;

	return !/^(n\/a|no website|not set|local|tbc|coming soon)/i.test(normalized);
};

export const encodeProfilePath = (rawPath: string): string => {
	try {
		return encodeURIComponent(decodeURIComponent(rawPath || ''));
	} catch {
		return encodeURIComponent(rawPath || '');
	}
};

export const normalizeProjectUrl = (value: string): string => {
	const normalized = stripUrls(value);
	if (!isLikelyProjectUrl(normalized)) return '';

	const firstUrlMatch = normalized.match(/https?:\/\/[^\s\)\]]+/i);
	if (firstUrlMatch) {
		return firstUrlMatch[0];
	}

	if (/^[a-z][a-z0-9+.-]*:\/\//i.test(normalized)) {
		return normalized;
	}

	if (normalized.startsWith('//')) {
		return `https:${normalized}`;
	}

	if (/\.[a-z]{2,}\/?/i.test(normalized)) {
		return `https://${normalized}`;
	}

	return '';
};

const normalizeText = (value: string): string => {
	return stripUrls(value).toLowerCase().replace(/\s+/g, ' ');
};

const metadataByDateAndTitle = new Map<string, typeof demoMetadata[number]>();
const metadataByDateNameFallback = new Map<string, typeof demoMetadata[number][]>();

for (const metadata of demoMetadata) {
	const dateKey = metadata.date;
	const titleKey = `${dateKey}|${normalizeText(metadata.name)}|${normalizeText(metadata.title)}`;
	const nameKey = `${dateKey}|${normalizeText(metadata.name)}`;

	metadataByDateAndTitle.set(titleKey, metadata);
	const nameBucket = metadataByDateNameFallback.get(nameKey);
	if (nameBucket) {
		nameBucket.push(metadata);
	} else {
		metadataByDateNameFallback.set(nameKey, [metadata]);
	}
}

const getDemoMetadata = (demo: Demo): typeof demoMetadata[number] | undefined => {
	const dateKey = demo.date;
	const fullMatchKey = `${dateKey}|${normalizeText(demo.name)}|${normalizeText(demo.title)}`;
	const exactMatch = metadataByDateAndTitle.get(fullMatchKey);

	if (exactMatch) return exactMatch;

	const nameMatchKey = `${dateKey}|${normalizeText(demo.name)}`;
	const nameMatches = metadataByDateNameFallback.get(nameMatchKey) || [];
	const exactTitleMatch = nameMatches.find((item) => normalizeText(item.title) === normalizeText(demo.title));
	if (exactTitleMatch) return exactTitleMatch;

	const fuzzyMatch = nameMatches.find((item) =>
		normalizeText(item.title).includes(normalizeText(demo.title)) ||
		normalizeText(demo.title).includes(normalizeText(item.title))
	);
	if (fuzzyMatch) return fuzzyMatch;

	return demoMetadata.find((item) => item.date === dateKey && normalizeText(item.name) === normalizeText(demo.name));
};

export const nextEvent = {
	number: 9,
	date: '2026-02-17',
	lumaUrl: 'https://luma.com/ejtr9u92'
};

// Source: notion export (Demoer Requests ... .csv).
// Includes all people with a project name, regardless of status.
export const events: DemoNightEvent[] = [
	{
		number: 9,
		date: '2026-02-01',
		venue: 'London',
		lumaUrl: 'https://luma.com/ejtr9u92',
		demos: [
			{
				name: 'Alex Keyter',
				title: 'Generative Conversations',
				description: "A solution's focussed tool to unlock collective intelligence.",
				projectUrl: 'https://www.generativeconversations.co.uk/',
				date: '2026-02-01'
			},
			{
				name: 'Alex Keyter',
				title: 'Generative Connections',
				description: 'Make Networking Events More Valuable!',
				projectUrl: 'https://connections.genminds.co.uk/',
				date: '2026-02-01'
			},
			{
				name: 'Liberatus',
				title: 'Motion Coach',
				description: 'The future of coaching lives in your pocket',
				projectUrl:
					'https://www.linkedin.com/posts/liberatus_everyone-knows-the-feeling-youre-training-activity-7426535460841357312-1xs9?utm_source=share&utm_medium=member_desktop&rcm=ACoAABD1uwYB5YFY8TlNKaqbI8k17upRUQq9MM8',
				date: '2026-02-01'
			},
			{
				name: 'Maurice',
				title: 'Anatole.fyi',
				description: 'Hyper relevant business news',
				projectUrl: 'https://anatole.fyi (web demo will be up by next week!)',
				date: '2026-02-01'
			},
			{
				name: 'Mashood Ahmad',
				title: 'ParentLine',
				description: 'Parentline.ai: Calm answers for a complicated digital world.',
				projectUrl: 'https://parentline.ai',
				date: '2026-02-01'
			},
			{
				name: 'Temiloluwa Olushola',
				title: 'Input',
				description: 'Near-realtime semantic understanding of text input',
				projectUrl: '',
				date: '2026-02-01'
			},
			{
				name: 'Deni Darenberg',
				title: 'dogAdvisor',
				description: 'Making owning a dog as easy as loving one',
				projectUrl: 'https://dogadvisor.dog',
				date: '2026-02-01'
			},
			{
				name: 'Hector Campbell',
				title: 'FrameKit',
				description: 'AI generated product photos that actually work',
				projectUrl: 'staging-app.framekit.co.uk',
				date: '2026-02-01'
			},
			{
				name: 'Jacob Hampson',
				title: 'Pantheos',
				description: 'Your personalised self building sales platform',
				projectUrl: 'HTTPS://pantheos.ai',
				date: '2026-02-01'
			},
			{
				name: 'Duncan Lomax',
				title: 'Incandenza',
				description: 'A showrunner for your group chat',
				projectUrl: 'incandenza.studio',
				date: '2026-02-01'
			},
			{
				name: 'Salman Rahman',
				title: 'Intelligent Fastener Platform for Offshore Critical Joints',
				description: 'Per Bolt lifecycle intelligence platform fo Offshore Critical Joints',
				projectUrl: '',
				date: '2026-02-01'
			},
			{
				name: 'Antonio Vespoli',
				title: 'Smooth',
				description: 'SDK for AI browser automation',
				projectUrl: 'https://www.youtube.com/watch?v=fvf7oLcSxWg',
				date: '2026-02-01'
			},
			{
				name: 'Meir Kadosh',
				title: 'Bright Data',
				description: 'PeopleHub AI',
				projectUrl: '',
				date: '2026-02-01'
			},
			{
				name: 'Ashkan',
				title: 'Amara',
				description: 'Imagine, create and iterate 3D environments instantly',
				projectUrl: '',
				date: '2026-02-01'
			}
		]
	},
	{
		number: 6,
		date: '2025-09-01',
		venue: 'London',
		lumaUrl: 'https://lu.ma/7is6tfp1',
		demos: [
			{
				name: 'Alex Milanovic',
				title: 'Switchboard',
				description: 'A routing service that directs your prompts to the best possible LLM for the task',
				projectUrl: 'https://www.switchboard-ai.com/chat',
				date: '2025-09-01'
			},
			{
				name: 'Emilija',
				title: 'Ramonda',
				description: '',
				projectUrl:
					'No website yet but you can check out a demo video we filmed a while back here - https://youtu.be/PBkktv6a9gs',
				date: '2025-09-01'
			},
			{
				name: 'Emilija Tashevska',
				title: 'Ramonda AI',
				description: 'AI retail search that helps shoppers find and buy faster',
				projectUrl:
					'No website yet but you can check out a demo we did recently here - https://youtu.be/PBkktv6a9gs',
				date: '2025-09-01'
			},
			{
				name: 'kindred salway',
				title: 'sonura',
				description: 'effortless creativity for the artists of tomorrow',
				projectUrl: 'https://sonurastudio.com',
				date: '2025-09-01'
			},
			{
				name: 'Mert Deveci',
				title: 'Banker',
				description: 'The AI spreadsheet',
				projectUrl: 'banker.so',
				date: '2025-09-01'
			},
			{
				name: 'Max Church',
				title: 'Gravy',
				description: 'Your AI Financial analyst',
				projectUrl: 'Gravyme.com',
				date: '2025-09-01'
			},
			{
				name: 'Sam Kopelman',
				title: 'Givr',
				description: 'Build your lifetime of giving',
				projectUrl: 'www.givrpro.io',
				date: '2025-09-01'
			},
			{
				name: 'Hector Campbell',
				title: 'Framekit',
				description: 'Your AI-powered virtual studio for stunning product photos',
				projectUrl: 'https://framekit.co.uk/',
				date: '2025-09-01'
			},
			{
				name: 'Shahel',
				title: 'CodeWords',
				description: 'v0 for backend workflow automations',
				projectUrl: 'vhttps://www.agemo.ai/codewords',
				date: '2025-09-01'
			},
			{
				name: 'Josh Warwick',
				title: 'Wasssist',
				description: 'Publish Agents to WhatsApp in Minutes',
				projectUrl: 'https://wassist.app',
				date: '2025-09-01'
			},
			{
				name: 'William Lee',
				title: 'ACI MCP Hub',
				description: 'An open-source gateway to permission how AI tools interact with MCPs for teams',
				projectUrl: 'https://gateway.aci.dev/',
				date: '2025-09-01'
			},
			{
				name: 'Samer Ullah',
				title: 'OdjoAI',
				description: 'Find, contact and manage customers all in one with AI.',
				projectUrl: 'odjoai.com',
				date: '2025-09-01'
			},
			{
				name: 'Dominic Norton',
				title: 'Ptonomy',
				description: 'Personality Builder for AI Assistants',
				projectUrl: 'https://ptonomy.created.app/',
				date: '2025-09-01'
			}
		]
	},
	{
		number: 5,
		date: '2025-08-01',
		venue: 'London',
		lumaUrl: 'https://lu.ma/7is6tfp1',
		demos: [
			{
				name: 'Ben Clarke',
				title: 'A2A Net',
				description: 'AI agent marketplace for professionals built on the A2A protocol',
				projectUrl: 'https://a2anet.com/ (not ready yet but will be ready by the demo!)',
				date: '2025-08-01'
			},
			{
				name: 'Peter Farrell',
				title: 'Vessa',
				description: 'AI Restaurant Booking Assistant, operating in WhatsApp',
				projectUrl: 'https://youtu.be/wv8gqhHLsEA',
				date: '2025-08-01'
			},
			{
				name: 'Jugal Patel',
				title: 'The Discovery Engine',
				description: 'Systematically turn experimental data into novel discoveries',
				projectUrl: 'https://disco.leap-labs.com/demo',
				date: '2025-08-01'
			},
			{
				name: 'Noam Tenne',
				title: 'Differ',
				description: 'Code storage, ownership and collaboration platform for vibe coders',
				projectUrl: "It's a local app. No URL yet.",
				date: '2025-08-01'
			},
			{
				name: 'Tom Berman',
				title: 'MuDG',
				description: 'Explore ideas collaboratively',
				projectUrl: 'https://mudg.fly.dev',
				date: '2025-08-01'
			},
			{
				name: 'Henry Broomfield',
				title: 'Atla',
				description: 'Agentic evals and dynamic failure patterns',
				projectUrl: 'app.atla-ai.com',
				date: '2025-08-01'
			},
			{
				name: 'Jamie Ogundiran',
				title: 'ContextDB',
				description: 'ContextDB: Bring Bookmarked Webpages into your LLMs Convos Seamlessly',
				projectUrl:
					'https://near-may-dba.notion.site/Context-DB-Release-Log-25e8378d6a47803ab02acfa6e940870c',
				date: '2025-08-01'
			}
		]
	},
	{
		number: 4,
		date: '2025-07-01',
		venue: 'London',
		demos: [
			{
				name: 'Erica Hu',
				title: 'Glia',
				description: 'AI learning companion, from curiosity to meaningful learning journeys',
				projectUrl: 'www.gliahq.com',
				date: '2025-07-01'
			},
			{
				name: 'Sami Tahir',
				title: 'Lobsmash',
				description:
					'You. Your partner. Your AI coach. One space to talk, learn, and dominate in the Game of Padel.',
				projectUrl: 'Www.lobsmash.com',
				date: '2025-07-01'
			},
			{
				name: 'Chris Lloyd',
				title: 'Copixel',
				description: 'Scale your retail store with ads - without hiring a designer',
				projectUrl: 'https://copixel.co/',
				date: '2025-07-01'
			},
			{
				name: 'Antoine',
				title: 'Error Context Collector',
				description: 'AI Debugger',
				projectUrl: 'https://open-vsx.org/extension/dant2021/error-context-collector',
				date: '2025-07-01'
			},
			{
				name: 'Maulik Sailor',
				title: 'Notchup',
				description: 'AI Co-Pilot for Engineering Managers',
				projectUrl: 'www.notchup.com',
				date: '2025-07-01'
			},
			{
				name: 'Avi Bhattachan',
				title: 'TeraQuest',
				description: "Your AI Guide to Nature's Wonders, Collect & Connect.",
				projectUrl: '',
				date: '2025-07-01'
			},
			{
				name: 'Nishit Agrawal',
				title: 'Ads On Ai',
				description: 'Think google ads for the ai era',
				projectUrl: '',
				date: '2025-07-01'
			},
			{
				name: 'Peter Farrell',
				title: 'Vessa',
				description: 'AI Restaurant Booking Assistant',
				projectUrl: 'vessa.ai',
				date: '2025-07-01'
			},
			{
				name: 'Pavan Konanur',
				title: 'Hoja',
				description: 'Your personal AI study buddy',
				projectUrl: 'www.hoja.ai',
				date: '2025-07-01'
			},
			{
				name: 'Monty',
				title: 'Prodia',
				description: '',
				projectUrl: 'https://t.co/EM6or4hrzlprodia.com',
				date: '2025-07-01'
			},
			{
				name: 'kindred Salway',
				title: 'ventrue',
				description: 'helping engineers replace project managers',
				projectUrl: 'N/A (local)',
				date: '2025-07-01'
			},
			{
				name: 'Jack Bowen',
				title: 'CoLoop',
				description: 'AI Copilot for qualitative research',
				projectUrl: 'coloop.ai',
				date: '2025-07-01'
			},
			{
				name: 'Noah Salibo',
				title: 'Salibo',
				description: 'Salibo AI voice to text incident reporting and AI CCTV alert',
				projectUrl: 'https://salibo.co.uk/ai-cctv',
				date: '2025-07-01'
			},
			{
				name: 'Benjamin Arntzen',
				title: 'Riff.CC',
				description: "Free the world's culture - open source streaming for all",
				projectUrl: 'https://riff.cc',
				date: '2025-07-01'
			},
			{
				name: 'Bryan Plaza',
				title: 'WhisperKey',
				description: 'Accelerated Development with Claude Code - WhisperKey: Local Mac Voice Transcription',
				projectUrl: 'http://github.com/bsplaza/whisperkey/releases/tag/v1.0.0',
				date: '2025-07-01'
			}
		]
	},
	{
		number: 3,
		date: '2025-01-01',
		venue: 'London Founder House',
		lumaUrl: 'https://lu.ma/2yalskw2',
		demos: [
			{
				name: 'Monty',
				title: 'Prodia',
				description: '',
				projectUrl: 'https://t.co/EM6or4hrzlprodia.com',
				date: '2025-01-01'
			},
			{
				name: 'Moe Adham',
				title: 'Visibl',
				description: 'Visibl turns audiobooks into videobooks',
				projectUrl: 'https://youtu.be/eW10Srhi7bY',
				date: '2025-01-01'
			},
			{
				name: 'Andrea  Tortella',
				title: 'Thrads',
				description: 'Ads for LLMs',
				projectUrl: 'https://thrads.us',
				date: '2025-01-01'
			},
			{
				name: 'Erfan',
				title: 'Social Presence',
				description: 'Newsletter ad platform',
				projectUrl: 'Social presence.io',
				date: '2025-01-01'
			},
			{
				name: 'Tom Berman',
				title: 'TableAI (TBC)',
				description: 'Using LLM’s to generate accurate, computable steps from natural language',
				projectUrl: 'https://table-ai.fly.dev/',
				date: '2025-01-01'
			},
			{
				name: 'Martin Krupik',
				title: 'emersa',
				description: '3D AI Agents',
				projectUrl: 'HTTPS://Emersa.digital',
				date: '2025-01-01'
			},
			{
				name: 'Aniket Maurya',
				title: 'ArguAI',
				description: 'Save Time, Win Cases! AI Assistant for Lawyers.',
				projectUrl: 'https://arguai.co/',
				date: '2025-01-01'
			},
			{
				name: 'Yoeven',
				title: 'JigsawStack',
				description: 'Small models that power your tech stack',
				projectUrl: 'https://jigsawstack.com/',
				date: '2025-01-01'
			},
			{
				name: 'Wildcard',
				title: 'Wildcard Demo',
				description: '',
				projectUrl: '',
				date: '2025-01-01'
			}
		]
	},
	{
		number: 1,
		date: '2024-10-01',
		venue: 'Future House',
		lumaUrl: 'https://lu.ma/fh-demo-night-1',
		demos: [
			{
				name: 'Stephen Batifol',
				title: 'Voice RAG',
				description: "GPT Advanced Voice for people living in the old continent",
				projectUrl: '',
				date: '2024-10-01'
			}
		]
	},
	{
		number: 2,
		date: '2024-09-01',
		venue: 'Future House',
		lumaUrl: 'https://lu.ma/7is6tfp1',
		demos: [
			{
				name: 'Kindred',
				title: 'Loomina',
				description: 'Learn Anything, Anywhere',
				projectUrl: 'https://loomina.net/',
				date: '2024-09-01'
			},
			{
				name: 'Michal Karlubik',
				title: 'LifeCoach.ai',
				description: 'World class therapy - at your fingertips.',
				projectUrl: 'https://www.trylifecoach.ai/',
				date: '2024-09-01'
			},
			{
				name: 'Reed O\'Beirne',
				title: 'Batch AI Tool',
				description:
					"Our Batch AI Tool unlocks your data's value by applying the processing and analytical power of a Large Language Model (LLM) to each row of your large dataset, all guided by your custom instructions.",
				projectUrl: 'https://assistant.engineering/batch',
				date: '2024-09-01'
			},
			{
				name: 'Antoine Descamps',
				title: 'Inkdrop',
				description: 'Tinkering with AI et al.',
				projectUrl: 'https://inkdrop.ai',
				date: '2024-09-01'
			}
		]
	}
];

export const allDemos: Demo[] = events
	.flatMap((event) =>
		event.demos.map((demo) => {
			const metadata = getDemoMetadata(demo);
			const metadataProjectUrl = metadata?.projectUrl || demo.projectUrl || '';
			const normalizedProjectUrl = normalizeProjectUrl(metadataProjectUrl);

			return {
				...demo,
				eventNumber: event.number,
				linkedIn: metadata?.linkedIn,
				twitter: metadata?.twitter,
				profileImage: undefined,
				projectUrl: metadataProjectUrl,
				displayProjectUrl: normalizedProjectUrl
			};
		})
	)
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
