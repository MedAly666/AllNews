<script lang="ts">
    import { ChevronLeft, ChevronRight } from 'svelte-bootstrap-icons';

    let slideIndex = 1;
    let articles: any[] = [];

    function plusSlides(n:number) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n:number) {
        showSlides(slideIndex = n);
    }

    function showSlides(n:number) {
        let i;
        let slides: HTMLElement[] = Array.from(document.querySelectorAll('.mySlides'));
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        slides[slideIndex - 1].style.display = "block";
    } 


    

    async function getTopHeadlines() {
        const res = await fetch('/api',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                endpoint: 'top-headlines',
                params : {
                    country: 'us',
                    language : 'en',
                }
            })
            
        });
        let topHeadlines = await res.json();
        articles = topHeadlines.articles;

        
    };
    
</script>

<div class="slideshow-container">
    {#await getTopHeadlines() }
        Loading...
    {:then _} 
             
        {#each articles as article}
            <div class="mySlides fade">
                <img src={article.urlToImage} alt="">
                <div class="caption">
                    <div class="source">
                        <img src={new URL(article.url).protocol + '//' + new URL(article.url).host + '/favicon.ico'} alt="">
                        <h4> { article.source.name }</h4>
                        <span> { article.author } | { article.publishedAt}</span>
                    </div>
                    <h3>{ article.title }</h3>
                    <p>{ article.description } <a href="{ article.url }"> Read More ...</a></p>
                </div>
            </div>


        {/each}

        {showSlides(slideIndex)}
    {:catch error}
        {error.message}
    {/await}

    <button class="prev" onclick={() => plusSlides(-1)}>
        <ChevronLeft />
    </button>
    <button class="next" onclick={() => plusSlides(1)}>
        <ChevronRight />
    </button>
</div>

<style lang="scss">
    @use '$lib/scss/main.scss' as * ;

    .slideshow-container {
        width: 100%;
        height: 500px;

        position: relative;
        margin: auto;
        


        .mySlides {
            display: none;

            img{
                width: 100%;
                height: 500px;

                border: solid 2px $background-color;
                border-radius: 10px;
            }
        }

        .prev, .next {
            @include button;
            width: 40px;
            height: 40px;

            cursor: pointer;

            position: absolute;
            top: 50%;

            margin-top: -22px;
            padding: 10px;
            background-color: #00000000;
            color: $background-color;
            transition: 0.6s ease;
            border-radius: 0 10px 10px 0;
            user-select: none;

            /* On hover, add a black background color with a little bit see-through */
            &:hover {
                background-color: rgba( $background-color,0.2);
            }

        }
        
        .next {
            right: 0;
            border-radius: 10px 0 0 10px;
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

        

        /*.active {
            background-color: #717171;
        }*/
        
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

