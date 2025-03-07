<script lang="ts">
    import SearchDialog from './SearchDialog.svelte';

    import { Search } from "svelte-bootstrap-icons";
    
    let searchKeyword = $state('');

    let searchContainer: HTMLDivElement;
    let isOpenSearchDialog = $state(false);
</script>

<div class="search-container" bind:this={searchContainer}>
    <button onclick={ () => { isOpenSearchDialog = true } }>
        <Search />
    </button>
    <SearchDialog
        bind:isOpen={isOpenSearchDialog}
        bind:query={searchKeyword}
        />       
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
    }
</style>
