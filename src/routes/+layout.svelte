<script lang="ts">

	let { children } = $props();
</script>

<svelte:head>
    <title>The All News</title>
    <meta name="description" content="The All News is a news website that provides the latest news from around the world.">
    <meta name="keywords" content="news, latest news, world news, news website, news portal">
    <meta name="author" content="medaly666">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="index, follow">
    <meta name="googlebot" content="index, follow">
    <meta name="bingbot" content="index, follow">
    <meta name="yandex" content="index, follow">
    <meta name="referrer" content="no-referrer-when-downgrade">
    <meta name="format-detection" content="telephone=no">

    <link rel="icon" type="image/png" href="/favicon.png">

    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4658166576330515"
    crossorigin="anonymous"></script>

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-PBW4EY84E6"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-PBW4EY84E6');
    </script>

</svelte:head>

<main>
	{@render children()}
</main>