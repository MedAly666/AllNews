<script>
    import { Search } from "svelte-bootstrap-icons";
</script>

<div class="search-container">
    <input type="text" placeholder="Search...">
    <button>
        <Search />
    </button>
</div>

<style lang="scss">
    @use '$lib/scss/main.scss' as * ;
    .search-container {
        width: 30%;
        height: 2rem;

        @include flex-row;


        border: $default-border;
        border-radius: 1.5rem;

        padding: 0.5rem;


        input {
            width: 100%;
            border: none;

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
    }

    
</style>
