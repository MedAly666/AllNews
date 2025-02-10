<script lang="ts">
    import Card from './Card/Card.svelte';
    import CardDialog from './CardDialog.svelte';

    let { article = {} } = $props();
    
    let isOpenCardDialog = $state(false);
</script>
{#if Object.keys(article).length === 0 }
    <div class="card-placeholder">

    </div>
{:else}
    <Card>
        {#snippet cardHeader()}
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

        {#snippet cardBody()}
            <div class="body-container">
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
        {/snippet}
        
        {#snippet cardFooter()}
            <div class="footer-container">
                <button>
                    <a target="_blank" href="{ article.url }">
                        Read More...
                    </a>
                    
                </button>
            </div>
        {/snippet}
        
    
    </Card>
    <CardDialog
        isOpen={isOpenCardDialog}
        article={article}
        />
{/if}

<style lang="scss">
    @use '$lib/scss/main.scss' as *;

    .header-container {
        width: 100%;
        height: $default-height-l;

        display: grid;
        grid-template-columns: 2.5rem 1fr;
        gap: 0.2rem;


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

    .body-container {
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

    .footer-container {
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
    
</style>

