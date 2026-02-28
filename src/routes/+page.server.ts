import { events, allDemos, nextEvent } from '$lib/data/demos';
import { attendeeCompanies } from '$lib/data/attendee-companies';
import { featuredCompanies } from '$lib/data/community-companies';
import { partners } from '$lib/data/partners';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		events,
		allDemos,
		nextEvent,
		attendeeCompanies,
		featuredCompanies,
		partners
	};
};
