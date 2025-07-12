<script lang="ts">
    import ArticleCard from "$lib/components/ArticleCard.svelte";
    import Header from "$lib/components/Header.svelte";
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
</script>

<Header />
<article class="mt-15 p-2 w-screen grid grid-cols-[2fr_3fr_2fr] gap-2">
    <aside></aside>
    <div class="flex flex-col  gap-2">
        {#each data.articles as article}
            <ArticleCard {article} />
        {/each}
    </div>
</article>
