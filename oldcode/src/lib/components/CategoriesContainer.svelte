<script lang="ts">
    import { onMount } from 'svelte';

    export let currentCategory ;

    const categories = ['General', 'Business', 'Sports', 'Health', 'Technology', 'Entertainment', 'Science'];
    let activeCategory: HTMLButtonElement | null = null;

    onMount(() => {
        activeCategory = document.querySelector('.active') as HTMLButtonElement;
    });

    function activateCategory(el: HTMLButtonElement) {
        if (activeCategory) {
            activeCategory.classList.remove('active');
        }

        el.classList.add('active');
        activeCategory = el;
        currentCategory = activeCategory.innerText ;
        console.log(currentCategory);
        
        activeCategory.parentElement?.scrollIntoView({ behavior: 'smooth' });
    }
</script>

<div class="categories-container">
    {#each categories as category, index}
        <button 
            on:click={() => activateCategory(event?.target as HTMLButtonElement)} 
            class="category-element {index === 0 ? 'active' : ''}">
            {category}
        </button>
    {/each}
</div>

<style lang="scss">
    @use '$lib/scss/main.scss' as *;
    .categories-container {
        width: 100%;
        height: 1.5cm;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20%;

        position: sticky;
        top: 0;

        background:linear-gradient(180deg, rgba(255,255,255,1) 0%,rgba(255,255,255,0.7) 60%, rgba(255,255,255,0) 100%);

        grid-column: 1 / -1;

        .category-element {
            width: auto;
            height: 1.2cm;

            padding: 0 20px;
            border: solid 2px $secondary-background-color;
            border-radius: 6cm;


            &.active {
                background-color:$primary-color;
                color: white;
                border: none;
            }
        }
    }
</style>

