<script lang="ts">
    import { ChevronLeft, ChevronRight, InfoCircle } from 'svelte-bootstrap-icons';

    let slideIndex = 2;

    function plusSlides(n:number) {
        showSlides(slideIndex += n);
    }

    function showSlides(n:number) {
       
        let slides  =  Array.from( document.querySelectorAll(".slides") ) as HTMLElement[];
        
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        slides[slideIndex-1].style.display = "block";
    } 


    

    async function getTopHeadlines(): Promise<any[]> {
        const res = await fetch('/api/top-headlines');
        let topHeadlines = await res.json();
        return topHeadlines.data.articles;
    };

    let articles = getTopHeadlines();

    
    
</script>

<div class="slides-container">

    {#await articles}
        <div class="slides-placeholder">
            
        </div>
    {:then articles}
        {#each articles as article}
            <div class="slides fade">
                <img src={article.urlToImage} alt="">
                <div class="caption">
                    <div class="source">
                        <img src={new URL(article.url).protocol + '//' + new URL(article.url).host + '/favicon.ico'} alt="">
                        <h4> { article.source.name }</h4>
                        <span> { article.author } | { article.publishedAt}</span>
                    </div>
                    <h3>{ article.title }</h3>
                    <p>{ article.description } <b><a target="_blank" href="{ article.url }"> Read More ...</a></b></p>
                </div>
            </div>
        {/each}
        <button class="prev" onclick={() => plusSlides(-1)}>
            <ChevronLeft />
        </button>
        <button class="next" onclick={() => plusSlides(1)}>
            <ChevronRight />
        </button>
    {:catch}
        <div>
            <InfoCircle />
            <h2>Failed to load articles.</h2>
            <p>
                Wait, we have some problems in our servers.
            </p>
        </div>
    {/await}

    
</div>

<style lang="scss">
    @use '$lib/scss/main.scss' as * ;

    .slides-container {
        width: 100%;
        height: 450px;
        
        position: relative;
        display: block;


        
        @include flex-row;


        .slides {
            width: 100%;
            height: 100%;

            display: none;

            border: $default-border;
            border-radius: 0.5rem;

            background-color: $secondary-background-color;



            img{
                display: block;
                width: 100%;
                height: 100%;
                object-fit: contain; /* or cover */
                border-radius: 0.5rem; 

                top:-25%;
            }
        }

        .slides-placeholder {
            width: 100%;
            height: 100%;

            background-color: $secondary-background-color;
            border-radius: 0.5rem;

            @include flex-center;

            @include shimmer;

        }

        .slides:first-child {
            display: block;
        }

        .prev, .next {
            @include btn;
            
            width: 90px;
            height: 100%;

            cursor: pointer;

            position: absolute;
            top: 0;
            
            background-color: #00000000;
            color: $background-color;
            transition: 0.6s ease;
            border-radius: 0;
            user-select: none;

            /* On hover, add a black background color with a little bit see-through */
            &:hover {
                background-color: rgba( $background-color,0.2);
            }

        }
        
        .next {
            right: 0;
        }

        .caption {
            width: 100%;
            height: 55%;
            
            color: $background-color;
            background: linear-gradient(to top,rgba( 0, 0, 0, 0.8),rgba( 242, 242, 245, 0.0) );
            border-radius: 10px;

            position: absolute;
            bottom: 0px;
            
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            padding: 10px;

            a {
                color: $background-color;
                text-decoration: none ;
            }

            .source {
                width: 100%;
                height: 50px ;

                display: grid;
                grid-template-columns: 50px 1fr;
                column-gap: 5px;
                grid-template-rows: 1fr 1fr;

                img {
                    width: 40px;
                    height: 40px;

                    background-color: $background-color;

                    place-self: center;

                    grid-row: 1 / -1 ;

                    border-radius: 50%;
                }

                span {
                    grid-column: 2/3;
                    grid-row: 2 / 3;
                }

                
            }
        }

        
        .fade {
            animation-name: fade;
            animation-duration: 1s;
        }


    }

    @keyframes fade {
        from {
            opacity: .4
        }
        to {
            opacity: 1
        }
    }
</style>

