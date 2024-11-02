<script>
    import SlideShow from './SlideShow.svelte';

    export let topHeadlines;
</script>

<div class="topheadlines-container">
    <SlideShow {topHeadlines}></SlideShow>
</div>

<style lang="scss">
    @use '$lib/scss/main.scss' as *;

    .topheadlines-container {
        width: 100%;        
    }
</style>

