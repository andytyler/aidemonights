import { sponsors, pastSponsors, sponsorLinkedIn } from '$lib/data/sponsors';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		sponsors,
		pastSponsors,
		sponsorLinkedIn
	};
};
