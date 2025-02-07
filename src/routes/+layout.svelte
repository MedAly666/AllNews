<script lang="ts">
    import SearchContainer from '$lib/components/SearchContainer.svelte';
    import { Github } from 'svelte-bootstrap-icons';
    import logoWord from '$lib/assets/AllNewsWord.png';

	let { children } = $props();
</script>

<svelte:head>
    <title>The All News</title>
    <meta name="description" content="The All News is a news website that provides the latest news from around the world.">
    <meta name="keywords" content="news, latest news, world news, news website, news portal">
    <meta name="author" content="medaly666">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="index, follow">
    <meta name="googlebot" content="index, follow">
    <meta name="bingbot" content="index, follow">
    <meta name="yandex" content="index, follow">
    <meta name="referrer" content="no-referrer-when-downgrade">
    <meta name="format-detection" content="telephone=no">

    <link rel="icon" type="image/png" href="/favicon.png">

    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4658166576330515"
    crossorigin="anonymous"></script>

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-PBW4EY84E6"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-PBW4EY84E6');
    </script>

</svelte:head>
<main>
    <header>
        <img src="{logoWord}" alt="The All News Logo">
        <span></span>
        <SearchContainer></SearchContainer>
    </header>

	{@render children()}
    
    <footer>
        <div>
            <h4>About us :</h4>
            <p>
                The All News is a news website that provides the latest news from around the world.
            <h4>Powerd by </h4>
            <div class="newsapi-logo-container">
                <p>
                    <a target="_blank" href="https://newsapi.org/">NewsAPI</a>
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
            <h4>Contact us :</h4>
            <ul>
                <li>
                    <Github /> <a target="_blank" href="https://github.com/MedAly666/">Med Aly</a>
                </li>
            </ul>
        </div>
        <div>
            &copy; 2025 The All News <br />
            All rights reserved
        </div>
    </footer>
</main>

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

            padding: 0.5rem;

            *:nth-child(2){
                margin-left: auto;
            }

            img {
                height: 100%;
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