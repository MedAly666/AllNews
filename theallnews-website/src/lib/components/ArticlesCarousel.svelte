<script lang="ts">
    import ArticleCard from "./ArticleCard.svelte";

    import type { PageData } from "../../routes/$types";
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

    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";

    import type { HTMLImgAttributes } from "svelte/elements";
    import {
        BookOpenOutline,
        CommandOutline,
        MessagesOutline,
        ShareNodesSolid,
    } from "flowbite-svelte-icons";
    import type { NewsArticle } from "$lib/utils";

    let { articles }: { articles: NewsArticle[] } = $props();
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

<Carousel
    onchange={(detail) => (image = detail)}
    images={articles.map((article) => {
        return {
            src: `/api/image?url=${ article.urlToImage }`,
            alt: article.title,
            "data-article": JSON.stringify(article),
            loading: "lazy",
        };
    })}
>
    <Controls />
</Carousel>
<div class="flex flex-col gap-2 items-center p-2 text-gray-900 dark:text-white">
    <p class="text-xl lg:text-2xl tracking-tight font-bold">
        {JSON.parse(image?.["data-article"]).title}
    </p>
    <p class="text-gray-600 dark:text-gray-400">
        {JSON.parse(image?.["data-article"]).description}
    </p>
    <button
        class="w-fit flex justify-center font-bold self-end border-2 border-primary-600 hover:bg-primary-600 p-2 px-5 rounded-lg"
    >
        <BookOpenOutline class="w-6 h-6 mr-2 font-bold" />
        Read More...
    </button>
</div>
