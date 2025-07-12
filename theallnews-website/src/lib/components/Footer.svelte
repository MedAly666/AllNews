<script lang="ts">
    import {
        Footer,
        FooterCopyright,
        FooterLink,
        FooterLinkGroup,
    } from "flowbite-svelte";
</script>

<Footer>
    <FooterCopyright href="/" by="The All News" year={2025} />
    <FooterLinkGroup
        class="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400"
    >
        <FooterLink href="/about">About</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
        <FooterLink href="/license">Licensing</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
    </FooterLinkGroup>
</Footer>
