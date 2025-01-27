<script lang="ts">
    import { InfoCircle, Search } from "svelte-bootstrap-icons";

    let searchResultContainer: HTMLElement|undefined = $state(undefined);
    let searchKeyword = $state('');

    async function search( keywords: string ) {
        console.log(keywords);
        
        if(keywords.length >= 3) {
            const res = await fetch(`/api/search/${keywords}`);
            let result = await res.json();  
                      
            return result.data.articles;
        }
    }

    let searchResults = $derived(search(searchKeyword));
    
</script>

<div class="search-container">
    <input
        type="text"
        placeholder="Search..."
        bind:value={searchKeyword}
        onfocus={()=>{
            if(searchResultContainer) searchResultContainer.style.display = 'block';
        }}
        onblur={()=>{
            if(searchResultContainer) searchResultContainer.style.display = 'none';
        }}
        >
    <button>
        <Search />
    </button>
    <div
        class="search-result-container"
        bind:this={searchResultContainer}
        >
        {#await searchResults}
            <div class="search-result-placeholder">
                
            </div>
        {:then searchResults}
            <!--{#if searchResults.length === 0}
                <div class="search-result">
                    <InfoCircle />
                    <h4>No results found</h4>
                </div>

            {:else}-->
                <h3>Search result for '{searchKeyword}' : </h3>
                {#each searchResults as article}
                    <div class="search-result">
                        <img loading="lazy" src={article.urlToImage} alt="">
                        <h4>{article.title}</h4>
                        <p>
                            {article.description}
                            <a target="_blank" href="{ article.url }">
                                Read More...
                            </a>

                        </p>
                    </div>
                {/each}
            <!--{/if}-->
            

        {:catch error}
            <div class="search-result">
                <InfoCircle />
                <h4>Error</h4>
                <p>{error.message}</p>
            </div>
        {/await}

    </div>
</div>

<style lang="scss">
    @use '$lib/scss/main.scss' as * ;
    .search-container {
        width: 40%;
        max-height: 25rem;

        display: grid;
        grid-template-columns: 1fr 2rem;
        grid-template-rows: 2rem 1fr;


        border: $default-border;
        border-radius: 1.5rem;

        margin: 0 0.5rem;
        padding: 0 1rem;


        background-color: $background-color;

        align-self: baseline;
        input {
            width: 100%;

            border: none;

            &:focus {
                border-bottom: $default-border;
            }

        }

        button {

            @include btn;

            border-radius: 1.5rem;

        }

        @media (max-width: 800px) {
            width: 2rem;

            @include flex-center;

            input {
                display: none;
            }
        }

        .search-result-container {
            width: 100%;

            background-color: $background-color;

            grid-column: 1/-1;

            overflow-y: scroll;
            z-index: 100;

            display: none;
            .search-result {
                width: 100%;
                min-height: 6rem;
                
                display: grid;
                grid-template-columns: 6rem 1fr;
                grid-template-rows: 1fr auto;
                gap: 0.2rem;

                padding: 0.2rem 0;

                border-bottom: $default-border;

                background-color: $background-color;

                img {
                    width: 100%;

                    border-radius: 0.5rem;

                    grid-row: 1/-1;

                    background-color: $secondary-background-color;

                    object-fit: contain;

                    place-self: center;
                }

                h4 {
                    font-size: 1rem;
                }

                p {
                    font-size: 0.8rem;
                }

                
            }

            .search-result-placeholder {
                width: 100%;
                height: 6rem;

                @include shimmer;

                margin: 0.2rem 0;
                border-radius: 0.5rem;
            }

            
        }
    }

    

    
</style>
