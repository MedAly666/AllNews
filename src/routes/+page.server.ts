import type { PageServerLoad } from './$types';

import { API_KEY } from '$env/static/private'

export const load: PageServerLoad = async () => {
	const resTopHeadlines = await fetch(`http://newsapi.org/v2/top-headlines?language=en&apiKey=${API_KEY}`);
    
    const topHeadlines = resTopHeadlines.ok ? await resTopHeadlines.json() : { message : 'error : unable to connect with the API'}
    
    return {
        props: {
            topHeadlines
        }
    }
};