import { getNewsByQuery } from '$lib/utils';

export const GET = async ({url}) => {
    const q = url.toString().split('/')[ url.toString().split('/').length - 1 ]

    const data = await getNewsByQuery(q);
        
    return new Response(
        JSON.stringify({ data }),
        {
            status: 200
        }
    );
}