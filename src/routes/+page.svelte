<script lang="ts">
    import SearchContainer from '$lib/components/SearchContainer.svelte';
    import SlideShow from "$lib/components/SlideShow.svelte";

    import logoWord from '$lib/assets/AllNewsWord.png';
    import { Download, Github } from 'svelte-bootstrap-icons';
    import CategoriesContainer from '$lib/components/CategoriesContainer.svelte';
</script>

<header>
    <img src="{logoWord}" alt="The All News Logo">
    <span></span>
    <!--button>
        <Download />
        <span>Download Our App</span>
    </button-->
    <SearchContainer></SearchContainer>
</header>
<article>
    <div class="topheadlines-container">
        <SlideShow />
    </div>
    <div class="ads-container">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4658166576330515"
            crossorigin="anonymous"></script>
        <!-- general purpos ads -->
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-4658166576330515"
            data-ad-slot="4725135102"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
    </div>
    <CategoriesContainer />
</article>
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

<style lang="scss">
    @use '$lib/scss/main.scss' as * ;

    header {
        width: 100%;
        height: 3rem ;
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

        /*button {
            height: 2rem;
            @include primary-btn;

            border-radius: $default-border-radius;

            @media (max-width: 800px) {
                width: 2rem;

                span {
                    display: none;
                }
            }
        }*/

        
        

        
    }

    article {
        width: 100%;

        padding: 0.2rem 0.5rem;

        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-gap: 1rem;

        @media (max-width: 800px) {
            @include flex-column;
        }

        .topheadlines-container {
            width: 100%;
            
            padding: 0.2rem ;

        }

        .ads-container {
            width: 100%;
            height: 100%;

            grid-column: 2 / -1;
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
</style>