<script lang="ts">
    import Dialog from "./Dialog/Dialog.svelte";

    let { isOpen = false, article = {} } = $props();
    
</script>

<Dialog bind:isOpen={isOpen} >

        {#snippet dialogHeader()}
        <div class="header-container">
            <img
                loading="lazy"
                referrerpolicy="no-referrer" 
                crossorigin="anonymous"
                src="/api/image?url={
                    new URL(article.url).protocol + '//' + new URL(article.url).host + '/favicon.ico'
                }"
                alt="The logo of {article.source.name}"
            />
            <p>
                <b>{article.source.name}</b>
                <br />
                <small>{article.author} | { article.publishedAt }</small>
            </p>
        </div>
        {/snippet}
            
        {#snippet dialogBody()}
            <div class="body-container">
                <img 
                    loading="lazy"
                    referrerpolicy="no-referrer" 
     crossorigin="anonymous"
                    src="/api/image?url={ article.urlToImage }"
                    alt="Image of {article.title}"
                    >
                <h3>
                    {article.title}
                </h3>
                <p><b>
                    {article.description}
                </b></p>
                <p>
                    {article.content}
                </p>
            </div>            
        {/snippet}
            
        {#snippet dialogFooter()}
            <div class="footer-container">
                <button>
                    <a href={article.url}>Read More ...</a>
                </button>
            </div>
            
        {/snippet}
    </Dialog>

<style lang="scss">
    @use '$lib/scss/main.scss' as *;

    Dialog {
        .header-container {
            width: 100%;
            height: 100%;

            display: grid;
            grid-template-columns: 2.5rem 1fr;
            gap: 0.2rem;

            flex-grow: 1;

            line-height: 1rem;

            

            img {
                width: $default-height-s;
                height: $default-height-s;

                border-radius: 50%;
                object-fit: cover;

                font-size: 0.8rem;

                grid-column: 1 / 2;

                @include shimmer;
            }

        }

        .body-container {
            @include flex-column;
            gap: 0.5rem;

            padding: 0.5rem 0;

            * {
                text-indent: 0.5rem;
            }

            img {
                width: 60%;

                aspect-ratio: 16/9;
  
                object-fit: cover;
                display: block;

                font-size: 0.8rem;

                border-radius: 0.5rem;

                @include shimmer;

                @media (max-width: 800px) {
                    width: 90%;
                }
            }
        }

        .footer-container {
            @include flex-row;
            flex-direction: row-reverse;
            width: 100%;

            button {
                @include primary-btn;

                width: 140px;
                height: 2rem;

                padding: 0.2rem 0.5rem;
                border-radius: $default-border-radius;

                a {
                    width: 100%;
                    height: 100%;
                    display: block;
                    text-align: center;
                    color: $background-color;
                    text-decoration: none ;

                }
            }
        }
    }
    
    
</style>

