export async function GET({ url }) {
    const imageUrl = url.searchParams.get('url');
    
    if (!imageUrl) {
      return new Response('Image URL is required', { status: 400 });
    }
    
    try {
      const response = await fetch(imageUrl, {
        headers: {
          'User-Agent': 'AllNews Image Proxy',
          'Referer': 'https://theallnews.vercel.app/'
        }
      });
      
      const contentType = response.headers.get('content-type');
      const imageData = await response.arrayBuffer();
      
      return new Response(imageData, {
        headers: {
          'Content-Type': contentType || 'image/jpeg',
          'Cache-Control': 'public, max-age=86400',
          'Referrer-Policy': 'no-referrer'
        }
      });
    } catch (error) {
      return new Response('Failed to fetch image', { status: 500 });
    }
  }