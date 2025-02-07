import { API_KEY } from "$env/static/private";

function timeSince(dateString: string | undefined): string {
    if (!dateString) return 'Unknown';
    const date = new Date(dateString);
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} day${days > 1 ? 's' : ''}`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''}`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''}`;
    return `${seconds} second${seconds > 1 ? 's' : ''}`;
}

export interface NewsApiParams {
    language ?: string ;
    country  ?: string ;
    category ?: string ;
    sources  ?: string ;
    q        ?: string ;
    pageSize ?: number ;
    page     ?: number ;
}

export interface NewsApiResponse {
    status       ?: string        ;
    totalResults ?: number        ;
    articles     ?: NewsArticle[] ;
}

export interface NewsArticle {
    source      ?: NewsSource ;
    author      ?: string     ;
    title       ?: string     ;
    description ?: string     ;
    url         ?: string     ;
    urlToImage  ?: string     ;
    publishedAt ?: string     ;
    content     ?: string     ;
}

export interface NewsSource {
    id   ?: string ;
    name ?: string ;
}

export interface NewsApiError {
    message ?: string ;
    code    ?: string ;
}

export const newsCategories = ['General', 'Business', 'Sports', 'Health', 'Technology', 'Entertainment', 'Science'];


export const getNews = async (
    params:NewsApiParams = {
        country  : 'us' ,
        language : 'en'
    },
    endpoint: 'top-headlines' | 'everything' | 'top-headlines/sources' = 'top-headlines'
) => {
    let paramsProcessed = `apiKey=${API_KEY}`;    

    for (const param of Object.keys(params) as (keyof NewsApiParams)[]) {
        paramsProcessed += `&${param}=${params[param]}`;
    }

    const res = await fetch(`https://newsapi.org/v2/${endpoint}?${paramsProcessed}`);
    const data = await res.json()
    
    if(data.status === 'error'){
        if( data.code == 'rateLimited' ){
            console.log('ERROR : Too many requests.');
            
            return [] as NewsArticle[];
        } 
        else{
            console.log(data);
            throw new Error('ERROR : Unable to connect with the API.');    
        }
    }

    for (const article of data.articles as NewsArticle[]) {
        article.publishedAt = timeSince(article.publishedAt);
    }

    return data.articles as NewsArticle[];
}

export const getTopHeadlines   = async () =>  getNews();

export const getNewsByCategory = async (category:string) => getNews({ category }, 'top-headlines');

export const getNewsSources    = async () => getNews({}, 'top-headlines/sources');

export const getNewsBySource   = async (sources:string) => getNews({ sources }, 'top-headlines');

export const getNewsByQuery    = async (q:string) => getNews({ q }, 'everything');