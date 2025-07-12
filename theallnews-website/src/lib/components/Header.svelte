<script lang="ts">
    import {
        A,
        Avatar,
        Dropdown,
        DropdownGroup,
        DropdownHeader,
        DropdownItem,
        Modal,
        Navbar,
        NavBrand,
        Search,
    } from "flowbite-svelte";
    import logo from "$lib/assets/AllNewsF.png";
    import { GoogleSolid } from "flowbite-svelte-icons";
    import { app } from "$lib/firebase";
    import {
        getAuth,
        GoogleAuthProvider,
        signInWithPopup,
    } from "firebase/auth";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    let openModal = $state(false);

    const auth = getAuth(app);

    let user = $state(auth.currentUser);

    $effect(() => {
        if (!user) {
            goto("/");
        } else {
            goto("/account");
        }
    });
    const provider = new GoogleAuthProvider();

    onMount(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                goto("/account");
            } else {
                goto("/");
            }
        });
    });
</script>

<Navbar
    class="fixed start-0 top-0 z-50 w-screen flex text-2xl text-gray-900 dark:text-white bg-primary-800 px-2 py-2 sm:px-4"
>
    <NavBrand href="/">
        <img src={logo} alt="The All News Logo" class="w-10 h-10 mx-2" />
        <span class="font-poppins font-extrabold">The </span>&nbsp;
        <span class="font-poppins font-semibold"> All News</span>
    </NavBrand>
    {#if user}
        <Avatar id="user-drop" src={user.photoURL || ""} />
        <Dropdown triggeredBy="#user-drop" class="w-3xs p-2">
            <DropdownHeader class="flex flex-col items-center gap-2">
                <Avatar size="md" src={user.photoURL || ""} />
                <span class="block text-md font-bold">{user.displayName}</span>
            </DropdownHeader>
            <DropdownGroup>
                <DropdownItem
                    onclick={() => {
                        auth.signOut();
                    }}>Sign out</DropdownItem
                >
            </DropdownGroup>
        </Dropdown>
    {:else}
        <button
            class="border rounded-lg p-1 px-2 text-xl font-bold hover:bg-white hover:text-primary-800"
            onclick={() => (openModal = true)}
        >
            Join us!
        </button>
    {/if}
</Navbar>

<Modal
    bind:open={openModal}
    size="md"
    class="flex flex-col items-center gap-2 p-6"
>
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white">
        Join Our Community!
    </h1>
    <button
        class="w-full flex items-center justify-center border rounded-lg p-2 font-bold hover:bg-white hover:text-gray-800"
        onclick={() => signInWithPopup(auth, provider)}
    >
        <GoogleSolid class="w-6 h-6 mr-2 font-bold" />
        Sign Up with Google
    </button>
    <p>*Other methods will be added soon.</p>
</Modal>
