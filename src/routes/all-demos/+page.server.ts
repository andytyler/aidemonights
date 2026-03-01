import { allDemos } from '$lib/data/demos';
import type { Demo } from '$lib/data/demos';
import type { PageServerLoad } from './$types';

type DemoNight = {
	number: string;
	date: string;
	demos: Demo[];
};

export const load: PageServerLoad = async () => {
	const grouped: Record<string, DemoNight> = {};

	for (const demo of allDemos) {
		const dateKey = demo.date;
		const target = grouped[dateKey];
		if (target) {
			target.demos.push(demo);
			continue;
		}
		grouped[dateKey] = {
			number: `#${demo.eventNumber ?? '-'}`,
			date: demo.date,
			demos: [demo]
		};
	}

	const nights = Object.values(grouped).sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);

	return {
		nights
	};
};
