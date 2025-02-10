<script lang="ts">
    let { children } = $props()
</script>

<div class="slide">
    {@render children()}
</div>

<style lang="scss">
    .slide {
        width: 100%;
    }
</style>