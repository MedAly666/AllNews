<script lang="ts">
    import { InfoCircle, Search, XCircle } from "svelte-bootstrap-icons";
    import Card from "./Card.svelte";
    import Dialog from "./Dialog.svelte";
    
    let searchKeyword = $state('');

    let searchContainer: HTMLDivElement;
    let searchResultContainer: HTMLDivElement;
    let isOpenSearchDialog = $state(false);

    let searchResults = $derived(search(searchKeyword));

    async function search( keywords: string ) {        
        if(keywords.length >= 3) {
            const res = await fetch(`/api/search/${keywords}`);
            let result = await res.json();  
                      
            return result.data;
        }
    }
    
</script>

<div class="search-container" bind:this={searchContainer}>
    <button onclick={ () => { isOpenSearchDialog = true } }>
        <Search />
    </button>
    <Dialog bind:isOpen={isOpenSearchDialog} >

        {#snippet header()}
            <div class="header-container">
                <input
                    type="text"
                    placeholder="Search..."
                    bind:value={searchKeyword}
                >
                <button class="btn-search">
                    <Search />
                </button>
                
            </div>
        {/snippet}

        {#snippet body()}
        <div 
            class="body-container"
            bind:this={searchResultContainer}
            >

            {#if searchKeyword.length < 3}
                <div class="ads-container">
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4658166576330515"
                        crossorigin="anonymous"></script>
                    <!-- general purpos ads -->
                    <ins class="adsbygoogle"
                        style="display:block"
                        data-ad-client="ca-pub-4658166576330515"
                        data-ad-slot="4725135102"
                        data-ad-format="auto"
                        data-full-width-responsive="true"></ins>
                    <script>
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    </script>
                </div>
            {:else}
                <h3>Search result for "{searchKeyword}" : </h3>
                {#await searchResults}
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                {:then searchResults}
                    {#each searchResults as article}
                        <Card article={article} />
                    {/each}
                {:catch error}
                    <div class="search-result">
                        <InfoCircle />
                        <h4>Error</h4>
                        <p>{error.message}</p>
                    </div>
                {/await}
            {/if}
            
        </div>            
        {/snippet}
    </Dialog>
        
</div>

<style lang="scss">
    @use '$lib/scss/main.scss' as * ;

    .search-container {
        width: $default-height-s;
        height: $default-height-s;

        display: grid;
        place-content: center;
        
        button {
            @include btn;
            
        }

        .header-container {
            width: 100%;
            height: $default-height-m;

            @include flex-row;

            button {
                @include btn;

                width: $default-height-s;
                height: $default-height-s;
            }

            input {
                height: $default-height-s;

                padding: 0.2rem 0.5rem;

                flex-grow: 1;

            }
        }

        .body-container{
            width: 100%;


            grid-column: 1/-1;

            display: grid;
            grid-auto-rows: 2rem repeat(auto-fill, 1fr);
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 1rem;

            padding: 0.5rem 0;


            overflow-y: scroll;

            h3 {
                height: 2rem;
                grid-column: 1/-1;
            }
        } 
    }
</style>
