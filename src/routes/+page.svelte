<script lang="ts">
    import SearchContainer from '$lib/components/SearchContainer.svelte';
    import SlideShow from "$lib/components/SlideShow.svelte";

    import logoWord from '$lib/assets/AllNewsWord.png';
    import { Download } from 'svelte-bootstrap-icons';
    import CategoriesContainer from '$lib/components/CategoriesContainer.svelte';
</script>
<svelte:head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4658166576330515"
     crossorigin="anonymous"></script>
</svelte:head>
<header>
    <img src="{logoWord}" alt="">
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

        button {
            height: 2rem;
            @include primary-btn;

            border-radius: $default-border-radius;

            @media (max-width: 800px) {
                width: 2rem;

                span {
                    display: none;
                }
            }
        }

        
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
</style>