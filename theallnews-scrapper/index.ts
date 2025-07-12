import axios from "axios";
import { db } from "./firebase";
import { DOMParser as XmldomParser } from 'xmldom';
import * as xpath from 'xpath';
import type { NewsSource, NewsArticle } from "./types";


async function getSources(): Promise<NewsSource[]> {
    // With the Admin SDK, you get a reference to the collection and then get the documents
    const sourcesRef = db.collection("sources");
    const snapshot = await sourcesRef.get();
    const sources = snapshot.docs.map((doc) => {
        return doc.data();
    });
    return sources as NewsSource[];
}

async function addSource() {
    console.log('Adding a new source to Firestore...');
    try {
        // 1. Define the data for the new document
        const newSource: NewsSource = {
            name: 'BBC News',
            url: 'https://www.bbc.com/news',
            favicon: 'https://www.bbc.com/favicon.ico',
            language: 'en',
            category: 'general',
            rss_url: 'https://feeds.bbci.co.uk/news/rss.xml',
            rss_selector: 'channel/item',
            rss_schema: {
                title: 'title',
                description: 'description',
                url: 'link',
                urlToImage: 'media:thumbnail/@url',
                publishedAt: 'pubDate',
                author: '',
                content: ''
            }

        };

        // 2. Add the document to the 'sources' collection
        const docRef = await db.collection('sources').add(newSource);

        // 3. Log the ID of the newly created document for confirmation
        console.log('Successfully added document with ID:', docRef.id);
    } catch (error) {
        console.error('Error adding document: ', error);
    }
}

async function parseRss(source: NewsSource) {
    try {
        const response = await axios.get(source.rss_url, {
            headers: {
                'User-Agent': 'RSS Parser Bot',
                'Accept': 'application/rss+xml, application/xml;q=0.9, */*;q=0.8',
            },
        });

        const articles: NewsArticle[] = [];
        const doc = new XmldomParser().parseFromString(response.data, 'application/xml');


        // If needed, register namespaces (e.g., for media:thumbnail)
        const select = xpath.useNamespaces({
            media: 'http://search.yahoo.com/mrss/' // You may need to adjust this namespace based on the RSS XML
        });

        const nodes = xpath.select(source.rss_selector, doc) as Node[];


        for (const node of nodes) {
            const get = (expr: string) =>
                expr
                    ? (select(`string(${expr})`, node) as string).trim()
                    : '';

            const article: NewsArticle = {
                source: source.name,
                title: get(source.rss_schema.title),
                description: get(source.rss_schema.description),
                url: get(source.rss_schema.url),
                urlToImage: get(source.rss_schema.urlToImage),
                publishedAt: get(source.rss_schema.publishedAt),
                author: get(source.rss_schema.author),
                content: get(source.rss_schema.content),
            };

            articles.push(article);
        }


        return articles;
    } catch (error) {
        console.error('Failed to fetch or parse RSS:', error);
    }


}


(async () => {
    const sources = await getSources();

    for (const source of sources) {
        const articles = await parseRss(source);

        if (!articles) {
            continue;
        }

        for (const article of articles) {
            // 1. Check if article already exists (by URL)
            const existing = await db
                .collection('articles')
                .where('url', '==', article.url)
                .limit(1)
                .get();

            if (existing.empty) {
                // 2. If not found, add to DB
                await db.collection('articles').add(article);
                console.log('Inserted:', article.title);
            } else {
                console.log('Skipped (duplicate):', article.title);
            }
        }
    }
})();




