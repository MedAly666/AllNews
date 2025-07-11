<script lang="ts">
    import ArticlesCarousel from "../lib/components/ArticlesCarousel.svelte";

    import ArticleCard from "../lib/components/ArticleCard.svelte";

    import type { PageData } from "./$types";
    import {
        Carousel,
        Controls,
        Indicators,
        Tabs,
        TabItem,
        Card,
        Avatar,
        Tooltip,
    } from "flowbite-svelte";

    import Footer from "../lib/components/Footer.svelte";
    import Header from "../lib/components/Header.svelte";

    import type { HTMLImgAttributes } from "svelte/elements";
    import {
        BookOpenOutline,
        CommandOutline,
        MessagesOutline,
        ShareNodesSolid,
    } from "flowbite-svelte-icons";

    let { data }: { data: PageData } = $props();
    const newsCategories = [
        "General",
        "Business",
        "Sports",
        "Health",
        "Technology",
        "Entertainment",
        "Science",
    ];

    let index = $state(0);
    let image: HTMLImgAttributes | undefined = $state();
</script>

<Header />
<article class="mt-15 p-2 w-screen">
    <div class="lg:w-2xl sm:w-full shadow-2xl rounded-2xl pb-2">
        <h5
            class="w-full h-12 border-l-6 border-primary-500 px-2 text-4xl my-4 text-gray-900 dark:text-white"
        >
            Top Headlines
        </h5>
        <ArticlesCarousel articles={data.topHeadlines} />
    </div>
    <h5
        class="w-full h-12 border-l-6 border-primary-500 px-2 text-4xl my-4 text-gray-900 dark:text-white"
    >
        Articles by category
    </h5>
    <Tabs tabStyle="full" contentClass="p-0 flex-wrap">
        {#each newsCategories as category}
            <TabItem class="w-full h-full" open={category == newsCategories[0]}>
                {#snippet titleSlot()}
                    <span>{category}</span>
                {/snippet}
                <div
                    class="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 bg-slate-900 w-full p-2"
                >
                    {#each data.categories[category.toLowerCase() as keyof typeof data.categories] as article}
                        <ArticleCard {article} />
                    {/each}
                </div>
            </TabItem>
        {/each}
    </Tabs>
</article>

<Footer />
