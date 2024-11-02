<script lang="ts">
    import TopHeadlinesContainer from '$lib/TopHeadlinesContainer.svelte';

    import { Bookmark, Search } from 'svelte-bootstrap-icons';
    import logoWord from '$lib/assets/AllNewsWord.png';

    import type { PageData } from './$types';

    const { data }: { data: PageData } = $props();
    const topHeadlines = data.props.topHeadlines
    

</script>
<main>
    <header>
        
        <img src="{logoWord}" alt="">
        <button>
            <Bookmark width={32} height={32} fill="#0001be"/>
        </button>
        <button>
            <Search width={32} height={32} fill="#0001be" />
        </button>
    </header>
    <article>
        {#if !topHeadlines}
            <div>
                Error
            </div>
        {/if}
        <TopHeadlinesContainer {topHeadlines}></TopHeadlinesContainer>
    </article>
</main>

<style lang="scss">
    @use '$lib/scss/main.scss' as *;

    main {
        header{
            width: 100%;
            height: 70px;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: start;
            gap: 5px;

            background-color: $background-color;
            //border-bottom: solid 1px ;
        
            padding: 5px;

            box-shadow: 3px 4px 5px rgba(0,0,0,0.5);

            * {
                height: 60px;
            }

            button {
                width: 60px;

                &:first-of-type {
                    margin-left: auto;
                }
            }
        }

        article {
            width: 100%;

            padding: 5px;


        }
    }
</style>