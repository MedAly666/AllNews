import { getTopHeadlines, getNewsByCategory } from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, cookies }) => {
	return {
		topHeadlines: await getTopHeadlines(),
        categories: {
            business      : await getNewsByCategory('business')     ,
            entertainment : await getNewsByCategory('entertainment'),
            general       : await getNewsByCategory('general')      ,
            health        : await getNewsByCategory('health')       ,
            science       : await getNewsByCategory('science')      ,
            sports        : await getNewsByCategory('sports')       ,
            technology    : await getNewsByCategory('technology')
        }
	};
};