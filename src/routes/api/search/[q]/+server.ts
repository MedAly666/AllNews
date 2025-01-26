import { API_KEY } from '$env/static/private'

interface NewsApiParams {
    language ?: string;
    country  ?: string;
    category ?: string;
    sources  ?: string;
    q        ?: string;
    pageSize ?: number;
    page     ?: number;
}

export const GET = async ({url}) => {
    const params: NewsApiParams = {
        language : 'en',
        q : url.toString().split('/')[ url.toString().split('/').length - 1 ]
    };
        

    let paramsProcessed = `apiKey=${API_KEY}`;

    for (const param of Object.keys(params) as (keyof NewsApiParams)[]) {
        paramsProcessed += `&${param}=${params[param]}`;
    }  


    const res = await fetch(`https://newsapi.org/v2/everything?${paramsProcessed}`);
    const data = res.ok ? await res.json() : { message : 'ERROR : Unable to connect with the API.'}
    
    //console.log( data);
    

    return new Response(
        JSON.stringify({ data }),
        { status: 405 }
    );
}