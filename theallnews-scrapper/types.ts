
export interface RssSchema {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    author: string;
    content: string;
};

export interface NewsSource {
    name: string;
    url: string;
    favicon: string;
    language: string;
    category: string;
    rss_url: string;
    rss_selector: string;
    rss_schema: RssSchema;
}

export interface NewsArticle {
    source: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    author: string;
    content: string;
};