<script lang="ts">
    import { InfoCircle, Search, XCircle } from "svelte-bootstrap-icons";
    import Card from "./NewsCard.svelte";
    import Dialog from "./Dialog/Dialog.svelte";
    
    let { isOpen = $bindable(), query = $bindable() } = $props()

    let searchResultContainer: HTMLDivElement;
    
    let searchResults = $derived( search( query ));

    async function search( keywords: string ) {        
        if(keywords.length >= 3) {
            const res = await fetch(`/api/search/${keywords}`);
            let result = await res.json();  
                      
            return result.data;
        }
    }
    
</script>

<Dialog bind:isOpen={isOpen} >
    
    {#snippet dialogHeader()}
        <div class="header-container">
            <input
                type="text"
                placeholder="Search..."
                bind:value={query}
            >
            
        </div>
    {/snippet}

    {#snippet dialogBody()}
    <div 
        class="body-container"
        bind:this={searchResultContainer}
        >

        {#if query.length < 3}
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
            <h4>Search result for "{query}" : </h4>
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

<style lang="scss">
    @use '$lib/scss/main.scss' as * ;

    .header-container {
            width: 100%;
            height: $default-height-m;

            @include flex-row;

            input {
                height: $default-height-s;

                padding: 0.2rem 0.5rem;

                flex-grow: 1;

                border: $default-border;
                border-radius: 0.5rem;
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

            h4 {
                height: 2rem;
                grid-column: 1/-1;
            }
        } 
</style>


