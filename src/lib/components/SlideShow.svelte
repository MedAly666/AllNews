<script lang="ts">
    import { ChevronLeft, ChevronRight } from 'svelte-bootstrap-icons';
    import Carousel from './Carousel/Carousel.svelte';
    import Slide from './Carousel/Slide.svelte';

    let { articles } = $props();

    
</script>

<Carousel>
    {#each articles as article, index}
        <Slide>
            <div class="slide-content">
                <img
                loading="lazy"
                fetchpriority={ index == 0 ? 'high' : 'auto'  }
                referrerpolicy="no-referrer" 
                crossorigin="anonymous"
                src="/api/image?url={article.urlToImage}"
                alt="">
                <div class="caption">
                    <div class="source">
                        <img
                            loading="lazy" 
                            referrerpolicy="no-referrer" 
                            crossorigin="anonymous"
                            src="/api/image?url={
                                new URL(article.url).protocol + '//' + new URL(article.url).host + '/favicon.ico'
                            }"
                            alt="Icon of { article.source.name }">
                        <p>
                            <b>{ article.source.name }</b> <br />
                            <small> { article.author } | { article.publishedAt } </small>
                        </p>
                    </div>
                    <h3>{ article.title }</h3>
                    <p>
                        { article.description } 
                        <b>
                            <a target="_blank" href="{ article.url }"> Read More ...</a>
                        </b>
                    </p>
                </div>
            </div>
        </Slide>
    {/each}
</Carousel>

<style lang="scss">
    @use '$lib/scss/main.scss' as * ;

    .slide-content{
        width: 100%;

        display: none;

        border: $default-border;
        border-radius: 0.5rem;

        @include flex-column;
        gap: 0.2rem;

        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);



        img{
            width: 100%;
            object-fit: cover; /* or cover */
            aspect-ratio: 16/9;
            border-radius: 0.5rem 0.5rem 0 0;

            @include shimmer;

        }

        .caption{
            padding: 0.2rem 0.5rem;

            @include flex-column;
            gap: 0.5rem;

            text-indent: 0.5rem;

            

            .source{
                width: 100%;
                height: $default-height-l;
                display: flex;
                align-items: center;

                img{
                    width: $default-height-m;
                    height: $default-height-m;
                    border-radius: 50%;
                    margin-right: 0.5rem;
                }
            }
        }
    }
</style>

