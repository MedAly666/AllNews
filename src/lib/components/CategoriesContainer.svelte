<script lang="ts">
    import Card from "./Card.svelte";

    let props = $props();
    let currentCategory = $state(props.currentCategory || 'General');
    
    const categories = ['General', 'Business', 'Sports', 'Health', 'Technology', 'Entertainment', 'Science'];

    async function fetchArticles(category:string):Promise<any[]> {
        const response = await fetch(`/api/category/${category}`);
        const result = await response.json();
        return result.data.articles;
    }

    let articles = $derived(fetchArticles(currentCategory));
    
    //fetchArticles(currentCategory);

    /*$effect( () => {
        (async () => {
            const response = await fetch(`/api/category/${currentCategory}`);

            const result = await response.json();
            console.log(result.data.articles);
            
            articles = result.data.articles;
        })();
    } );*/


    
</script>

<div class="categories-container">
    {#each categories as category}
        <button 
            onclick={() => { currentCategory = category; }} 
            class="category-element { currentCategory == category ? 'active' : '' }">
            {category}
        </button>
    {/each}
</div>
<div class="cards-container">
    {#await articles}
        <Card />
        <Card />
        <Card />
    {:then articles } 
        {#each articles as article}
            <Card article={article} />
        {/each}
    {:catch error}
        <p>{error.message}</p>
    {/await}
    
</div>

<style lang="scss">
    @use '$lib/scss/main.scss' as *;
    .categories-container {
        width: 100%;
        height: 3rem;
        
        @include flex-row;
        justify-content: center;
        gap: 1rem;

        overflow-x: auto;


        position: sticky;
        top: 0;

        background:linear-gradient(180deg, rgba(255,255,255,1) 0%,rgba(255,255,255,0.7) 60%, rgba(255,255,255,0) 100%);

        grid-column: 1/-1;

        .category-element {
            width: auto;
            height: 2rem;

            padding: 0 1rem;
            border: none;
            border-radius: 1rem;


            &.active {
                background-color:$primary-color;
                color: white;
            }
        }

        @media (max-width: 800px) {
            justify-content: flex-start;

        }
    }

    .cards-container {
        width: 100%;

        grid-column: 1 / -1;

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 1rem;
    }
</style>

