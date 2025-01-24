<script lang="ts">
    import SlideShow from './SlideShow.svelte';
</script>

<div class="topheadlines-container">
    <SlideShow />
</div>

<style lang="scss">
    @use '$lib/scss/main.scss' as *;

    .topheadlines-container {
        width: 100%;
        
        grid-column: 1 / 2;
        grid-row: 1 / 2
    }
</style>

