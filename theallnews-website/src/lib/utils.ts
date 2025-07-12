import { NEWS_API_KEY, GEMINI_API_KEY } from "$env/static/private";
import { GoogleGenAI } from "@google/genai";
import * as testData from "./data.test.json";

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
    language?: string;
    country?: string;
    category?: string;
    sources?: string;
    q?: string;
    pageSize?: number;
    page?: number;
}

export interface NewsApiResponse {
    status?: string;
    totalResults?: number;
    articles?: NewsArticle[];
}

export interface NewsArticle {
    source: NewsSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    aiSummary?: string;
}

export interface NewsSource {
    id: string;
    name: string;
}

export interface NewsApiError {
    message?: string;
    code?: string;
}

export const newsCategories = ['General', 'Business', 'Sports', 'Health', 'Technology', 'Entertainment', 'Science'];


export const getNews = async (
    params: NewsApiParams = {
        country: 'us',
        language: 'en'
    },
    endpoint: 'top-headlines' | 'everything' | 'top-headlines/sources' = 'top-headlines'
) => {
    /*let paramsProcessed = `apiKey=${NEWS_API_KEY}`;

    for (const param of Object.keys(params) as (keyof NewsApiParams)[]) {
        paramsProcessed += `&${param}=${params[param]}`;
    }

    const res = await fetch(`https://newsapi.org/v2/${endpoint}?${paramsProcessed}`);
    const data = await res.json()

    if (data.status === 'error') {
        if (data.code == 'rateLimited') {
            console.error('ERROR : Too many requests.');

            return [] as NewsArticle[];
        }
        else {
            console.log(data);
            throw new Error('ERROR : Unable to connect with the API.');
        }
    }

    for (const article of data.articles as NewsArticle[]) {
        article.publishedAt = timeSince(article.publishedAt);
        //article.aiSummary = await generateArticleSummary(article);
    }

    //return data.articles as NewsArticle[];*/
    return testData.articles as NewsArticle[];
}

export async function generateArticleSummary(article: NewsArticle): Promise<string | undefined> {
    const ai = new GoogleGenAI({
        apiKey: GEMINI_API_KEY,
    });

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `
You are a professional news summarization assistant.

Your task is to read and understand the full article at the provided URL and summarize it in 3–5 sentences. The summary should:
- Use neutral and objective language.
- Focus on the key facts, events, or developments.
- Avoid editorializing, assumptions, or personal opinions.
- Be concise, readable, and informative.

### Article Information:
- Title: ${article.title}
- Author: ${article.author || 'Unknown'}
- Source: ${article.source?.name || 'Unknown'}
- Publish Date: ${new Date(article.publishedAt).toLocaleDateString()}
- URL: ${article.url}

### Instructions:
Please access the article at the URL and generate a summary based on its full content.
If the article discusses events, mention the main what/when/where/why.
If it’s opinion or analysis, capture the core argument and key supporting points.
Keep it brief and informative.

Do not make up information not found in the article.
`.trim(),
            config: {
                thinkingConfig: {
                    thinkingBudget: 0, // Disables thinking
                },
            }
        });

        return response.text;
    } catch (e) {
        console.log(e);
        return;
    }

}

export const getTopHeadlines = async () => getNews();

export const getNewsByCategory = async (category: string) => getNews({ category }, 'top-headlines');

export const getNewsSources = async () => getNews({}, 'top-headlines/sources');

export const getNewsBySource = async (sources: string) => getNews({ sources }, 'top-headlines');

export const getNewsByQuery = async (q: string) => getNews({ q }, 'everything');