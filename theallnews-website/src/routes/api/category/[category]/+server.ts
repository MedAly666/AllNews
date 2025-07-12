import { getNewsByCategory } from "$lib/utils";

export const GET = async ({url}) => {
    const category = url.toString().split('/')[ url.toString().split('/').length - 1 ]
    
    const data = getNewsByCategory(category)
    

    return new Response(
        JSON.stringify({ data }),
        { status: 405 }
    );
}