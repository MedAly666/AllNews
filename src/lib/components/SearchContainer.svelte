<script lang="ts">
    import { ArrowLeft, InfoCircle, Search } from "svelte-bootstrap-icons";
    import Card from "./Card.svelte";

    let searchContainer: HTMLDivElement;    let searchResultContainer: HTMLDivElement;
    let searchKeyword = $state('');    let searchDialog: HTMLDialogElement;

    async function search( keywords: string ) {        
        if(keywords.length >= 3) {
            const res = await fetch(`/api/search/${keywords}`);
            let result = await res.json();  
                      
            return result.data.articles;
        }
    }

    let searchResults = $derived(search(searchKeyword));
    
</script>

<div class="search-container" bind:this={searchContainer}>
    <button onclick={ () => {searchDialog.showModal()} }>
        <Search />
    </button>

    <dialog
        bind:this={searchDialog}
        >
        <button class="btn-back" onclick={ () => {searchDialog.close()} }>
            <ArrowLeft />
        </button>
        <input
            type="text"
            placeholder="Search..."
            bind:value={searchKeyword}
            >
        <button class="btn-search">
            <Search />
        </button>
        <div class="search-result-container" bind:this={searchResultContainer}>
            <h3>Search result for "{searchKeyword}" : </h3>
            {#await searchResults}
                <Card />
                <Card />
                <Card />
            {:then searchResults}
                <!--{#if searchResults.length === 0}
                    <div class="search-result">
                        <InfoCircle />
                        <h4>No results found</h4>
                    </div>
                {:else}-->
                    {#each searchResults as article}
                        <Card article={article} />
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
    </dialog>
</div>

<style lang="scss">
    @use '$lib/scss/main.scss' as * ;

    .search-container {
        width: 2rem;
        height: 2rem;

        display: grid;
        place-content: center;
        
        button {
            @include btn;
            
        }

        dialog {
            width: 60%;
            height: 80%;

            background-color: $background-color;

            position: fixed;

            display: grid;
            grid-template-columns: 3rem 1fr 3rem;
            grid-template-rows: 3rem 1fr;

            place-self: center;

            padding: 0.2rem 0.5rem;

            border-radius: 0.5rem;

            display: none;

            overflow-y: hidden;

            &[open] {
                display: grid;
            }   
            
            @media (max-width: 800px) {
                min-width: 100vw;
                height: 100vh;

                border-radius: 0;


                place-self: stretch;
            }

            .search-result-container{
                width: 100%;


                grid-column: 1/-1;

                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                gap: 1rem;

                padding: 0.5rem 0;

                border-top: $default-border;

                overflow-y: scroll;

                h3 {
                    height: 2rem;
                    grid-column: 1/-1;
                }
            }
        }
    }
</style>
