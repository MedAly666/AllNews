<script lang="ts">
    import { Search } from 'svelte-bootstrap-icons';
</script>

<div class="search-container">
    <input type="text" placeholder="Search for News...">
    <button>
        <Search width={20} height={20} fill="#0001be" />
    </button>
</div>

<style lang="scss">
    @use '$lib/scss/main.scss' as *;

    .search-container {
        width: 30%;
        height: 40px;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;

        padding: 0 5px;

        border: solid 2px $secondary-background-color;
        border-radius: 0.6cm;

        input {
            width: 100%;
            height: 30px;
            padding: 5px;
            border-radius: 5px;
            border: none;
        }

        button {
            width: 40px;
            height: 30px;
            border-radius: 5px;
            
        }
    }
   
</style>

