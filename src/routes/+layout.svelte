<script lang="ts">
    import SearchContainer from '$lib/components/SearchContainer.svelte';
    import { Github } from 'svelte-bootstrap-icons';
    import logoWord from '$lib/assets/AllNewsWord.png';
    import { page } from '$app/stores';

    let { children } = $props();
    
    // Get the current URL for canonical links
    let currentUrl = $derived( $page.url.href );
</script>

<svelte:head>
    <title>The All News - Latest Global News Coverage</title>
    <meta name="description" content="The All News provides comprehensive, unbiased news coverage from trusted sources around the world. Stay informed with the latest breaking news on politics, business, technology, and more.">
    <meta name="keywords" content="breaking news, world news, international news, latest headlines, news aggregator, daily news updates, global news coverage">
    <meta name="author" content="The All News">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO meta tags -->
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="googlebot" content="index, follow">
    <meta name="bingbot" content="index, follow">
    <meta name="yandex" content="index, follow">
    <meta name="referrer" content="no-referrer-when-downgrade">
    <meta name="format-detection" content="telephone=no">
    <meta name="theme-color" content="#4a5568">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    
    <!-- Canonical URL -->
    <link rel="canonical" href={currentUrl}>
    
    <!-- Favicon and app icons -->
    <link rel="icon" type="image/png" href="/favicon.png">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content={currentUrl}>
    <meta property="og:title" content="The All News - Latest Global News Coverage">
    <meta property="og:description" content="Comprehensive, unbiased news coverage from trusted sources around the world.">
    <meta property="og:image" content="https://theallnews.vercel.app/og-image.jpg">
    <meta property="og:site_name" content="The All News">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content={currentUrl}>
    <meta name="twitter:title" content="The All News - Latest Global News Coverage">
    <meta name="twitter:description" content="Comprehensive, unbiased news coverage from trusted sources around the world.">
    <meta name="twitter:image" content="https://theallnews.vercel.app/og-image.jpg">
    
    <!-- JSON-LD Structured Data for News Website -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "NewsMediaOrganization",
      "name": "The All News",
      "url": "https://theallnews.vercel.app/",
      "logo": "https://theallnews.vercel.app/favicon.png",
      "sameAs": [
        "https://github.com/MedAly666"
      ],
      "description": "The All News provides comprehensive, unbiased news coverage from trusted sources around the world."
    }
    </script>

    <!-- Google AdSense -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4658166576330515"
    crossorigin="anonymous"></script>

    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-PBW4EY84E6"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-PBW4EY84E6', {
      'anonymize_ip': true,
      'cookie_expires': 365 * 24 * 60 * 60
    });
    </script>

</svelte:head>

<!-- Add lang attribute to HTML for accessibility and SEO -->
<div lang="en">
<main>
    <header>
        <a href="/" aria-label="The All News Home">
            <img src="{logoWord}" alt="The All News Logo" width="150" height="40">
        </a>
        <span></span>
        <nav aria-label="Main navigation">
            <ul>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
        </nav>
        <SearchContainer></SearchContainer>
    </header>

    {@render children()}
    
    <footer>
        <div>
            <h4>About us:</h4>
            <p>
                The All News is a news website that provides the latest news from around the world.
            </p>
            <h4>Powered by:</h4>
            <div class="newsapi-logo-container">
                <p>
                    <a target="_blank" href="https://newsapi.org/" rel="noopener">NewsAPI</a>
                </p>
                <div class="newsapi-logo">
                    News
                    <span>
                        API
                    </span>
                </div>
            </div>
        </div>
        <div>
            <h4>Contact us:</h4>
            <ul>
                <li>
                    <Github /> <a target="_blank" href="https://github.com/MedAly666/" rel="noopener">Med Aly</a>
                </li>
            </ul>
        </div>
        <div>
            <p>&copy; 2025 The All News</p>
            <p>All rights reserved</p>
            <p><a href="/about#legal">Terms & Privacy</a></p>
        </div>
    </footer>
</main>
</div>

<style lang="scss">
    @use '$lib/scss/main.scss' as * ;

    main {
        width: 100%;

        header {
            width: 100%;
            height: $default-height-m ;
            @include flex-row;
            align-items: center;
            justify-content: flex-start;

            border-bottom: $default-border;

            padding: 0.2rem;

            *:nth-child(2){
                margin-left: auto;
            }

            img {
                height: 100%;
            }   
            
            nav {
                height: 100%;

                @include flex-row;
                align-items: center;

                margin: 0 0.5rem;
                padding: 0 0.5rem;

                ul {
                    @include flex-row;
                    align-items: center;
                    gap: 1rem;

                    li {
                        min-width: 3rem;
                        list-style: none;
                    }
                }
            }
            
    
        }

        footer {
            width: 100%;

            display: grid;
            grid-template-columns: repeat(3, 1fr);

            padding: 1rem;
            margin-top: 2rem;

            background-color: $primary-color;
            color: #ffffff;

            p {
                text-indent: 0.5rem;
            }

            a {
                color: #ffffff;
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }

            ul {
                @include flex-column;
                @include list;
                align-items: flex-start;

                li {
                    padding: 0.5rem;
                }

            }

            .newsapi-logo-container {
                @include flex-row;
                gap: 0.5rem;

                .newsapi-logo {
                    width: fit-content;
                    background-color: #ffffff;
                    color: $primary-color;

                    border: solid 2px #ffffff;
                    font-weight: bold;

                    padding: 2px 0;

                    span {
                        padding: 2px 4px;
                        background-color: $primary-color;
                        color: #ffffff;
                    }
                }
            }

            @media screen and (max-width: 800px) {
                @include flex-column;
                align-items: flex-start;
                
            }


        }

    }
</style>