<script lang="ts">
    import type { PageData } from './$types';

    import SlideShow from "$lib/components/SlideShow.svelte";
    import CategoriesContainer from '$lib/components/CategoriesContainer.svelte';


    let { data }: { data: PageData } = $props();
    
</script>


<article>
    <div class="topheadlines-container">
        <SlideShow articles={data.topHeadlines}/>
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
    <CategoriesContainer articles={ data.categories } />
</article>


<style lang="scss">
    @use '$lib/scss/main.scss' as * ;

    article {
        width: 100%;

        padding: 0.2rem 0.5rem;

        display: grid;
        grid-template-columns: 1fr 1fr;
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