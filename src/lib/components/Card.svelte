<script lang="ts">
    let { article = {} } = $props()
</script>
{#if Object.keys(article).length === 0 }
    <div class="card-placeholder"></div>
{:else}
    <div class="card">
        <div class="card-header">
            <img src={new URL(article.url).protocol + '//' + new URL(article.url).host + '/favicon.ico'} alt="">
            <p><b>{article.source.name}</b><br />
            <small>{article.author} | { article.publishedAt }</small></p>
        </div>
        <div class="card-body">
            <img src="{ article.urlToImage }" alt="">
            <h3> {article.title}</h3>
            <p> {article.description}</p>
        </div>
        <div class="card-footer">
            <button>
                <a href="{ article.url }">
                    Read More...
                </a>
                
            </button>
        </div>
    
    </div>
{/if}

<style lang="scss">
    @use '$lib/scss/main.scss' as *;

    .card-placeholder {
        width: 100%;
        height: 300px;

        background-color: $secondary-background-color;
        border-radius: 2*$default-border-radius;

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
            
            display: grid;
            grid-template-columns: 3rem 1fr;
            gap: 0.2rem;

            img {
                width: 3rem;
                height: 3rem;

                border-radius: 50%;
                object-fit: contain;

                grid-column: 1 / 2;

                background-color: $secondary-background-color;
            }

            p {
                word-wrap: break-word;
            }
        }

        .card-body {
            * {
                text-indent: 1rem;
            }
            img {
                width: 100%;
                height: 200px;
                object-fit: cover;

                border-radius: $default-border-radius;

                background-color: $secondary-background-color;
            }


            
        }

        .card-footer {
            margin-top: auto;

            button {
                width: 140px;
                @include primary-btn;

                padding: 0.2rem 0.5rem;
                border-radius: $default-border-radius;
            }
        }
    }
    
</style>

