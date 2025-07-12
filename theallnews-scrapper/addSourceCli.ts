import { db } from './firebase';
import type { NewsSource } from './types';

export async function addSourcePrompt() {
    console.log('\n📝 Enter new News Source info:\n');

    const name = prompt('Source Name:')?.trim() || '';
    const url = prompt('Homepage URL:')?.trim() || '';
    const favicon = prompt('Favicon URL:')?.trim() || '';
    const language = prompt('Language (e.g., en):')?.trim() || '';
    const category = prompt('Category (e.g., general, tech):')?.trim() || '';
    const rss_url = prompt('RSS Feed URL:')?.trim() || '';
    const rss_selector = prompt('RSS Item Selector (e.g., //channel/item):')?.trim() || '';

    console.log('\n🧠 Now define RSS schema (XPath for each field):\n');

    const title = prompt('→ Title XPath:')?.trim() || '';
    const description = prompt('→ Description XPath:')?.trim() || '';
    const articleUrl = prompt('→ Article URL XPath:')?.trim() || '';
    const urlToImage = prompt('→ Image URL XPath (e.g., media:thumbnail/@url):')?.trim() || '';
    const publishedAt = prompt('→ PublishedAt XPath:')?.trim() || '';
    const author = prompt('→ Author XPath (optional):')?.trim() || '';
    const content = prompt('→ Content XPath (optional):')?.trim() || '';

    const newSource: NewsSource = {
        name,
        url,
        favicon,
        language,
        category,
        rss_url,
        rss_selector,
        rss_schema: {
            title,
            description,
            url: articleUrl,
            urlToImage,
            publishedAt,
            author,
            content
        }
    };

    const docRef = await db.collection('sources').add(newSource);
    console.log(`\n✅ Successfully added source with ID: ${docRef.id}\n`);
}

await addSourcePrompt();

