<script lang="ts">
  import Card from './Card.svelte';


</script>

<div class="cards-container">
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card><Card></Card><Card></Card><Card></Card><Card></Card><Card></Card><Card></Card><Card></Card>
    <Card></Card>
</div>

<style lang="scss">
    @use '$lib/scss/main.scss' as *;

    .cards-container {
        width: 100%;

        grid-column: 1 / -1;

        display: grid;
        grid-template-columns: repeat(4,1fr);
        gap: 5px;
    }
</style>

