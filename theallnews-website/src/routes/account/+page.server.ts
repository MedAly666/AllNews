import { app } from '$lib/firebase';
import { getTopHeadlines, getNewsByCategory } from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, cookies }) => {

    return {
        articles: await getTopHeadlines(),
    };
};