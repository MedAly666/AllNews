<script lang="ts">
    import { auth } from "$lib/firebase";
    import type { NewsArticle } from "$lib/utils";
    import {
        Card,
        Avatar,
        Tooltip,
        Modal,
        Tabs,
        TabItem,
        Alert,
        Input,
        ButtonGroup,
        Button,
    } from "flowbite-svelte";

    import {
        AngleDownOutline,
        AngleUpOutline,
        ArrowUpRightFromSquareOutline,
        BookOpenOutline,
        BrainOutline,
        ExclamationCircleOutline,
        FileLinesOutline,
        MessagesOutline,
        NewspaperOutline,
        ShareNodesSolid,
    } from "flowbite-svelte-icons";

    let { article }: { article: NewsArticle } = $props();

    let articleOpen = $state(false);
    let commentOpen = $state(false);
    let shareOpen = $state(false);

    let user = $state(auth.currentUser);
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
        class="w-full flex items-center justify-around gap-2 mt-auto border-t-1 border-gray-500 py-2
               *:w-full *:rounded-lg *:hover:bg-primary-600 *:flex *:items-center *:justify-center"
    >
        {#if user}
            <ButtonGroup size="sm" class="border-primary-700 *:p-2">
                <Button color="primary">
                    <AngleUpOutline class="w-6 h-6 mr-2 font-bold" />
                    <Tooltip>Vote up</Tooltip>
                </Button>
                <Button>
                    <span class="py-0.5"> 1.2k </span>
                    <Tooltip>1.2k votes</Tooltip>
                </Button>
                <Button>
                    <AngleDownOutline class="w-6 h-6 mr-2 font-bold" />
                    <Tooltip>Vote down</Tooltip>
                </Button>
            </ButtonGroup>
            <div class="w-auto"></div>
        {/if}
        <Button
            color="dark"
            onclick={() => {
                articleOpen = true;
            }}
        >
            <BookOpenOutline class="w-6 h-6 mr-2 font-bold" />
            <Tooltip>Read More...</Tooltip>
        </Button>
        <Button
            color="dark"
            onclick={() => {
                commentOpen = true;
            }}
        >
            <MessagesOutline class="w-6 h-6 mr-2 font-bold" />
            <Tooltip>Comment</Tooltip>
        </Button>
        <Button
            color="dark"
            onclick={() => {
                shareOpen = true;
            }}
        >
            <ShareNodesSolid class="w-6 h-6 mr-2 font-bold" />
            <Tooltip>Share</Tooltip>
        </Button>
    </div>
</Card>
<Modal bind:open={articleOpen} size="lg">
    <Tabs tabStyle="full">
        <TabItem open>
            {#snippet titleSlot()}
                <FileLinesOutline class="w-6 h-6 mr-2 font-bold" />
                <Tooltip>Summary</Tooltip>
            {/snippet}
            <div class="flex flex-col gap-2">
                <h5 class="text-2xl font-bold text-gray-900 dark:text-white">
                    {article.title}
                </h5>
                <div class="grid grid-cols-[60px_1fr] grid-rows-2">
                    <Avatar
                        class="m-2 border-2 border-primary-600 row-span-2"
                        size="md"
                        src={`/api/image?url=${new URL(article.url).protocol}//${new URL(article.url).host}/favicon.ico`}
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
                    src="/api/image?url={article.urlToImage}"
                    alt={article.title}
                />
                <p class="text-xl">{article.description}</p>
                <h5 class="text-lg text-gray-900 dark:text-white shadow-2xl">
                    by <b>{article.author}</b>
                </h5>
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
            <div class="grid grid-cols-2 gap-2">
                <h5 class="text-3xl font-bold text-gray-900 dark:text-white">
                    Full Article
                </h5>
                <Button
                    class="w-fit flex justify-center font-bold self-end border-2 p-2 px-5 ml-auto hover:bg-white rounded-lg"
                >
                    <ArrowUpRightFromSquareOutline
                        class="w-6 h-6 mr-2 font-bold"
                    />
                    <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer">Open in new tab</a
                    >
                </Button>
                <iframe
                    class="w-full h-full min-h-300 col-start-1 col-span-2"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                    allowfullscreen={true}
                    referrerpolicy="no-referrer-when-downgrade"
                    loading="lazy"
                    src={article.url}
                    title="article"
                    frameborder="0"
                ></iframe>
            </div>
        </TabItem>
        <TabItem>
            {#snippet titleSlot()}
                <BrainOutline class="w-6 h-6 mr-2 font-bold" />
                <Tooltip>AI Summary</Tooltip>
            {/snippet}
            <div class="flex flex-col gap-2">
                <h5 class="text-3xl font-bold text-gray-900 dark:text-white">
                    AI Summary
                </h5>
                {#if article.aiSummary}
                    <p class="text-xl text-gray-900 dark:text-white">
                        {article.aiSummary}
                    </p>
                {:else}
                    <Alert class="flex" color="blue">
                        <ExclamationCircleOutline
                            class="w-6 h-6 mr-2 font-bold"
                        />
                        <p>This feater is comming soon!</p>
                    </Alert>
                {/if}
            </div>
        </TabItem>
    </Tabs>
</Modal>
<Modal bind:open={commentOpen} title="Comments">
    <Alert class="flex" color="blue">
        <ExclamationCircleOutline class="w-6 h-6 mr-2 font-bold" />
        <p>This feater is comming soon!</p>
    </Alert>
    {#if user}
        <ButtonGroup class="w-full *:ring-primary-700 *:p-2">
            <Input />
            <Button>Post</Button>
        </ButtonGroup>
    {/if}
</Modal>
<Modal bind:open={shareOpen} title="Share">
    <h1>Share</h1>
    <div class="flex flex-col gap-2">
        <Button
            class="w-fit flex justify-center font-bold self-end border-2 p-2 px-5 ml-auto hover:bg-white rounded-lg"
        >
            <FileLinesOutline class="w-6 h-6 mr-2 font-bold" />
        </Button>
    </div>
</Modal>
