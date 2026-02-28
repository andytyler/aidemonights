import { communityCompanies } from '$lib/data/community-companies';
import { attendeeCompanies } from '$lib/data/attendee-companies';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		communityCompanies,
		attendeeCompanies
	};
};
