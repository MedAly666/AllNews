<script lang="ts">
    import type { NewsArticle } from "$lib/utils";
    import {
        Card,
        Avatar,
        Tooltip,
        Modal,
        Tabs,
        TabItem,
    } from "flowbite-svelte";

    import {
        BookOpenOutline,
        BrainOutline,
        FileLinesOutline,
        MessagesOutline,
        NewspaperOutline,
        ShareNodesSolid,
    } from "flowbite-svelte-icons";

    let { article }: { article: NewsArticle } = $props();

    let articleOpen = $state(false);
    let commentOpen = $state(false);
    let shareOpen = $state(false);
</script>

<Card
    class="w-full max-w-screen h-full p-2 flex flex-col gap-2 text-gray-900 dark:text-white shadow-2xl"
>
    <!-- Card Header -->
    <div class="grid grid-cols-[60px_1fr] grid-rows-2">
        <Avatar
            class="border-2 border-primary-600 row-span-2"
            size="md"
            src={"http://" + new URL(article.url).hostname + "/favicon.ico"}
        />
        <h2 class="text-xl font-bold">
            {article.source.name}
        </h2>
        <p class="text-gray-600 dark:text-gray-400">
            {article.publishedAt}
        </p>
    </div>
    <!-- Card Body -->
    <img
        class="rounded-lg"
        loading="lazy"
        src={article.urlToImage}
        alt={article.title}
    />
    <p class="text-xl font-bold">
        {article.title}
    </p>
    <p class="text-lg text-gray-600 dark:text-gray-400">
        {article.description}
    </p>
    <!-- Card Footer -->
    <div
        class="w-full flex items-center justify-around gap-2 mt-auto border-t-1 border-gray-500 p-2
               *:w-full *:p-2 *:rounded-lg *:hover:bg-primary-600 *:flex *:items-center *:justify-center"
    >
        <button
            class="p-2"
            onclick={() => {
                articleOpen = true;
            }}
        >
            <BookOpenOutline class="w-6 h-6 mr-2 font-bold" />
            <Tooltip>Read More...</Tooltip>
        </button>
        <button
            class="p-2 rounded-lg hover:bg-primary-600"
            onclick={() => {
                commentOpen = true;
            }}
        >
            <MessagesOutline class="w-6 h-6 mr-2 font-bold" />
            <Tooltip>Comment</Tooltip>
        </button>
        <button
            class="p-2 rounded-lg hover:bg-primary-600"
            onclick={() => {
                shareOpen = true;
            }}
        >
            <ShareNodesSolid class="w-6 h-6 mr-2 font-bold" />
            <Tooltip>Share</Tooltip>
        </button>
    </div>
</Card>
<Modal bind:open={articleOpen} size="lg">
    <Tabs tabStyle="full">
        <TabItem open>
            {#snippet titleSlot()}
                <FileLinesOutline class="w-6 h-6 mr-2 font-bold" />
                <Tooltip>Resume</Tooltip>
            {/snippet}
            <div class="flex flex-col gap-2">
                <h5 class="text-2xl font-bold text-gray-900 dark:text-white">
                    {article.title}
                </h5>
                <div class="grid grid-cols-[60px_1fr] grid-rows-2">
                    <Avatar
                        class="m-2 border-2 border-primary-600 row-span-2"
                        size="md"
                        src={"http://" +
                            new URL(article.url).hostname +
                            "/favicon.ico"}
                    />
                    <h2 class="text-xl font-bold">
                        {article.source.name}
                    </h2>
                    <p class="text-gray-600 dark:text-gray-400">
                        {article.publishedAt}
                    </p>
                </div>
                <img
                    class="w-full rounded-2xl"
                    loading="lazy"
                    src={article.urlToImage}
                    alt={article.title}
                />
                <p class="text-xl">{article.description}</p>
                <h5 class="text-lg text-gray-900 dark:text-white shadow-2xl">by <b>{article.author}</b></h5>
                <h5 class="text-lg text-gray-900 dark:text-white shadow-2xl">
                    {article.content}
                </h5>
            </div>
        </TabItem>
        <TabItem>
            {#snippet titleSlot()}
                <NewspaperOutline class="w-6 h-6 mr-2 font-bold" />
                <Tooltip>Full Article</Tooltip>
            {/snippet}
            <iframe
                class="w-full h-full min-h-300"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                allowfullscreen={true}
                referrerpolicy="no-referrer-when-downgrade"
                loading="lazy"
                src={article.url}
                title="article"
                frameborder="0"
            ></iframe>
        </TabItem>
        <TabItem>
            {#snippet titleSlot()}
                <BrainOutline class="w-6 h-6 mr-2 font-bold" />
                <Tooltip>AI Resume</Tooltip>
            {/snippet}
            <p>add text here</p>
        </TabItem>
    </Tabs>
</Modal>
<Modal bind:open={commentOpen}></Modal>
<Modal bind:open={shareOpen}></Modal>
