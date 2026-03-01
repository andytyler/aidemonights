import { events, allDemos, nextEvent } from '$lib/data/demos';
import { attendeeCompanies } from '$lib/data/attendee-companies';
import { featuredCompanies } from '$lib/data/community-companies';
import { partners } from '$lib/data/partners';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const latestEvent = [...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
	const latestNightDemos = allDemos.filter((demo) => demo.eventNumber === latestEvent?.number);

	return {
		events,
		allDemos,
		latestNightDemos,
		nextEvent,
		attendeeCompanies,
		featuredCompanies,
		partners
	};
};
