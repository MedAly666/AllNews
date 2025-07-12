import { getTopHeadlines } from '$lib/utils';


export const GET = async () => {    
    let topHeadlines = getTopHeadlines();

    return new Response(
        JSON.stringify({ data : topHeadlines }),
        { status: 405 }
    );
}