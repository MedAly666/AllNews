<script lang="ts">
    import { Navbar, NavBrand } from "flowbite-svelte";
    import logo from "$lib/assets/AllNewsF.png";
</script>

<Navbar
    class="fixed start-0 top-0 z-50 w-screen text-2xl text-gray-900 dark:text-white bg-primary-800 px-2 py-2 sm:px-4"
>
    <NavBrand href="/">
        <img src={logo} alt="The All News Logo" class="w-10 h-10 mx-2" />
        <span class="font-poppins font-extrabold">The </span>&nbsp;
        <span class="font-poppins font-semibold"> All News</span>
    </NavBrand>
    <button class="border rounded-xl p-2 text-xl hover:bg-white hover:text-primary-800">
        Join us!
    </button>
</Navbar>
