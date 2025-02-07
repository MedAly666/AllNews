<script lang="ts">
    import { XCircle } from "svelte-bootstrap-icons";
    import Dialog from "./Dialog.svelte";

    let { article = {} } = $props();
    
    let isOpenCardDialog = $state(false);
</script>
{#if Object.keys(article).length === 0 }
    <div class="card-placeholder"></div>
{:else}
    <div class="card">
        <div class="card-header">
            <img
                loading="lazy"
                src={
                    new URL(article.url).protocol + '//' + new URL(article.url).host + '/favicon.ico'
                }
                alt="The logo of {article.source.name}"
            />
            <p>
                <b>{article.source.name}</b>
                <br />
                <small>{article.author} | { article.publishedAt }</small>
            </p>
        </div>
        <div class="card-body">
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
            <img 
                loading="lazy"
                src={ article.urlToImage }
                alt="Image of {article.title}"
                onclick={() => { isOpenCardDialog = true }}
                >
            <h3> {article.title}</h3>
            <p> {article.description}</p>
        </div>
        <div class="card-footer">
            <button>
                <a target="_blank" href="{ article.url }">
                    Read More...
                </a>
                
            </button>
        </div>
    
    </div>
    <Dialog bind:isOpen={isOpenCardDialog} >

        {#snippet header()}
        <div class="header-container">
            <img
                loading="lazy"
                src={
                    new URL(article.url).protocol + '//' + new URL(article.url).host + '/favicon.ico'
                }
                alt="The logo of {article.source.name}"
            />
            <p>
                <b>{article.source.name}</b>
                <br />
                <small>{article.author} | { article.publishedAt }</small>
            </p>
        </div>
            
        {/snippet}
            
        {#snippet body()}
            <div class="body-container">
                <img loading="lazy" src={ article.urlToImage } alt="Image of {article.title}">
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
            
        {#snippet footer()}
            <div class="footer-container">
                <button>
                    <a href={article.url}>Read More ...</a>
                </button>
            </div>
            
        {/snippet}
    </Dialog>
{/if}

<style lang="scss">
    @use '$lib/scss/main.scss' as *;

    .card-placeholder {
        width: 100%;
        height: 300px;

        background-color: $secondary-background-color;
        border-radius: 2*$default-border-radius;

        @include shimmer;

    }

    .card {
        width: 100%;

        border: $default-border;
        border-radius: 2*$default-border-radius;

        padding: 0.2rem 0.5rem;


        @include flex-column;
        gap: 0.5rem;
       

        * {
            width: 100%;
        }

        .card-header {
            width: 100%;
            height: $default-height-l;

            display: grid;
            grid-template-columns: 2.5rem 1fr;
            gap: 0.2rem;

            padding: 0.2rem 0.5rem;


            img {
                width: $default-height-m;
                height: $default-height-m;

                border-radius: 50%;
                object-fit: cover;

                font-size: 0.8rem;


                grid-column: 1 / 2;

                @include shimmer;

            }

            p {
                word-wrap: break-word;
            }
        }

        .card-body {
            padding: 0.2rem 0.5rem;

            * {
                text-indent: 0.5rem;
            }

            img {
                width: 100%;
                height: 200px;
                object-fit: cover;
                display: block;

                font-size: 0.8rem;



                border-radius: $default-border-radius;

                @include shimmer;


                &:hover {
                    cursor: pointer;
                    background-color: $primary-color;
                }
            }


            
        }

        .card-footer {
            height: 3rem ;



            margin-top: auto;
            padding: 0.2rem 0.5rem;

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

