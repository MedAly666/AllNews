import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
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

export const POST: RequestHandler = async ({ request }) => {
    const { endpoint, params } = await request.json();
    let paramsProcessed = `apiKey=${API_KEY}`;
    for (const param in params) {
        paramsProcessed += `&${param}=${params[param]}`;
    }

	const res = await fetch(`http://newsapi.org/v2/${endpoint}?${paramsProcessed}`);
    const data = res.ok ? await res.json() : { message : 'ERROR : Unable to connect with the API.'}
    
    return new Response(JSON.stringify({ data }), {
        headers: { 'Content-Type': 'application/json' }
    });
};