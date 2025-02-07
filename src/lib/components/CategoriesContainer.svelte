<script lang="ts">
    import Card from "./Card.svelte";

    let { articles } = $props();
    let currentCategory = $state('General')

    const newsCategories = ['General', 'Business', 'Sports', 'Health', 'Technology', 'Entertainment', 'Science'];
    
    
</script>

<div class="categories-container">
    {#each newsCategories as category}
        <button 
            onclick={() => { currentCategory = category; }} 
            class="category-element { currentCategory == category ? 'active' : '' }">
            {category}
        </button>
    {/each}
</div>
<div class="cards-container">
        {#each articles[currentCategory.toLowerCase()] as article}
            <Card article={article} />
        {/each}
    
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

        @media (max-width: 1000px) {
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

