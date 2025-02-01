<script lang="ts">
    let { article = {} } = $props();
    function timeSince(dateString: string): string {
        const date = new Date(dateString);
        const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) return `${days} day${days > 1 ? 's' : ''}`;
        if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''}`;
        if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''}`;
        return `${seconds} second${seconds > 1 ? 's' : ''}`;
    }
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
                <small>{article.author} | { timeSince(article.publishedAt) }</small>
            </p>
        </div>
        <div class="card-body">
            <img loading="lazy" src={ article.urlToImage } alt="Image of {article.title}">
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
            
            display: grid;
            grid-template-columns: 3rem 1fr;
            gap: 0.2rem;

            padding: 0.2rem 0.5rem;


            img {
                width: 3rem;
                height: 3rem;

                border-radius: 50%;
                object-fit: cover;

                font-size: 0.8rem;


                grid-column: 1 / 2;

                background-color: $secondary-background-color;
            }

            p {
                word-wrap: break-word;
            }
        }

        .card-body {
            padding: 0.2rem 0.5rem;

            * {
                text-indent: 1rem;
            }
            img {
                width: 100%;
                height: 200px;
                object-fit: cover;
                display: block;

                font-size: 0.8rem;



                border-radius: $default-border-radius;

                background-color: $secondary-background-color;

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
    
</style>

