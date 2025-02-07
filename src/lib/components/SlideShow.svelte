<script lang="ts">
    import { ChevronLeft, ChevronRight } from 'svelte-bootstrap-icons';

    let { articles } = $props();

    let currentSlide = $state(0);

    $effect(()=>{        
        let slides = Array.from(document.querySelectorAll('.slide')) as HTMLElement[];
        slides.forEach( (e) => { e.style.display = 'none'})
        if( currentSlide > slides.length - 1 ) currentSlide = 0 ;
        if( currentSlide < 0 ) currentSlide = slides.length - 1;
        slides[currentSlide].style.display = 'block';
    });
    
</script>

<div class="slides-container">
    {#each articles as article, index}
        <div class="slide">
            <img loading="lazy"
            fetchpriority={ index == 0 ? 'high' : 'auto'  }
            src={article.urlToImage} alt="">
            <div class="caption">
                <div class="source">
                    <img
                        loading="lazy" 
                        src={new URL(article.url).protocol + '//' + new URL(article.url).host + '/favicon.ico'} 
                        alt="">
                    <h5>{ article.source.name }</h5>
                    <span> { article.author } | { article.publishedAt }</span>
                </div>
                <h4>{ article.title }</h4>
                <p>{ article.description } <b><a target="_blank" href="{ article.url }"> Read More ...</a></b></p>
            </div>
        </div>
    {/each}
    <button 
        class="prev"
        onclick={ () => { currentSlide--} }
    >
        <ChevronLeft />
    </button>
    <button
        class="next"
        onclick={ () => { currentSlide++ } }
    >
        <ChevronRight />
    </button>

    
</div>

<style lang="scss">
    @use '$lib/scss/main.scss' as * ;

    .slides-container {
        width: 100%;
        
        position: relative;
        display: block;


        
        @include flex-column;


        .slide {
            width: 100%;
            height: 100%;

            display: none;

            border: $default-border;
            border-radius: 0.5rem;


            &:first-child {
                @include flex-column;
            }


            img{
                width: 100%;
                object-fit: cover; /* or cover */
                aspect-ratio: 16/9;
                border-radius: 0.5rem 0.5rem 0 0;

                @include shimmer;

            }
        }

        

        button {
            @include btn;
            
            width: $default-height-m;
            height: $default-height-m;

            cursor: pointer;

            border-radius: 50%;

            position: absolute;
            top: 25%;
            align-self: flex-start;

            margin: 0.5rem;
            
            background-color: $secondary-background-color;
            color: $primary-color;
            user-select: none;

            &:hover {
                background-color: $primary-color;
                color: $background-color;

            }

        }
        
        .next {
            
            align-self: flex-end;
        }

        .caption {
            width: 100%;
            
            border-radius: 10px;

            
            
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            padding: 10px;

            a {
                
                text-decoration: none ;
            }

            .source {
                width: 100%;
                height: 3rem ;

                display: grid;
                grid-template-columns: 50px 1fr;
                column-gap: 0.5rem;
                grid-template-rows: 1fr 1fr;

                img {
                    width: 3rem;
                    height: 3rem;

                    background-color: $background-color;

                    place-self: center;

                    grid-row: 1 / -1 ;

                    border-radius: 50%;

                    border: $default-border;
                }

                span {
                    grid-column: 2/3;
                    grid-row: 2 / 3;

                    font-size: 0.8rem;
                }

                
            }
        }

    }
</style>

