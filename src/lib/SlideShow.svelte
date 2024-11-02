<script lang="ts">
    import { browser } from '$app/environment';
    import testImage from '$lib/assets/image.png'
    let slideIndex = 1;

    if( browser ){
        
        showSlides(slideIndex);

        
    }

    function plusSlides(n:number) {
        showSlides(slideIndex += n);
    }

        // Thumbnail image controls
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
        
        slides[slideIndex-1].style.display = "block";
    } 


    export let topHeadlines;
    
</script>

<div class="slideshow-container">
            
    {#each topHeadlines.articles as article}
        <div class="mySlides fade">
            <img src={article.urlToImage} alt="width:100%">
            <div class="caption">
                <div class="source">
                    <img src={new URL(article.url).protocol + '//' + new URL(article.url).host + '/favicon.ico'} alt="{ article.source.name } icon">
                    <h3> { article.source.name }</h3>
                    <span> { article.author } * { article.publishedAt}</span>
                </div>
                <h2>{ article.title }</h2>
                <p>{ article.description } <a href="{ article.url }"> Read More ...</a></p>
            </div>
        </div>
    {/each}

    <button class="prev" onclick={() => plusSlides(-1)}>&#10094;</button>
    <button class="next" onclick={() => plusSlides(1)}>&#10095;</button>
</div>

<style lang="scss">
    @use '$lib/scss/main.scss' as * ;

    .slideshow-container {
        width: 1200px;
        height: 675px ;
        position: relative;
        margin: auto;


        .mySlides {
            display: none;

            img{
                width: 1200px;
                height: 675px ;
                border-radius: 10px;
            }
        }

        .prev, .next {
            cursor: pointer;
            position: absolute;
            top: 50%;
            width: auto;
            margin-top: -22px;
            padding: 16px;
            background-color: rgba( $background-color, 0.3);
            font-weight: bold;
            font-size: 18px;
            transition: 0.6s ease;
            border-radius: 0 3px 3px 0;
            user-select: none;

            /* On hover, add a black background color with a little bit see-through */
            &:hover {
                background-color: rgba( $background-color,0.8);
            }

        }
        
        .next {
            right: 0;
            border-radius: 3px 0 0 3px;
        }

        

        /* Caption text */
        .caption {
            width: 100%;
            height: 55%;
            
            color: $background-color;
            background: linear-gradient(to top,rgba( 0, 0, 0, 0.8),rgba( 0, 0, 0, 0.0) );
            border-radius: 10px;

            position: absolute;
            bottom: 0px;
            width: 100%;
            
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            padding: 20px;

            .source {
                width: 100%;
                height: 70px ;

                display: grid;
                grid-template-columns: 70px 1fr;
                column-gap: 5px;
                grid-template-rows: 1fr 1fr;

            

                img {
                    width: 60px;
                    height: 60px;

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

        

        .active {
            background-color: #717171;
        }
        
        .fade {
            animation-name: fade;
            animation-duration: 2.5s;
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

