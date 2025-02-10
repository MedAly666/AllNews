<script lang="ts">
    import { XCircle } from "svelte-bootstrap-icons";

    let { isOpen = $bindable(), dialogHeader , dialogBody, dialogFooter = null } = $props();

    let dialog:HTMLDialogElement;

    $effect(() => {
        if(isOpen) dialog.showModal();
        else dialog.close();
    });
</script>

<dialog
    bind:this={dialog}>
    {#if dialogHeader}
        <div class="dialog-header">
            {@render dialogHeader()}
            <button
                class="btn-close"
                onclick={() => { isOpen = false }}
                >
                <XCircle />
            </button>
        </div>
    {/if}

    {#if dialogBody}
        <div class="dialog-body">
            {@render dialogBody()}
        </div>
    {/if}

    {#if dialogFooter}
        <div class="dialog-footer">
            {@render dialogFooter()}
        </div>
    {/if}
    
</dialog>

<style lang="scss">
    @use '$lib/scss/main.scss' as * ;

    dialog {
            width: 60%;
            height: 90vh;

            background-color: $background-color;

            position: fixed;

            
            place-self: center;

            border-radius: 0.5rem;

            @include flex-column;
            display: none;

            &[open] {
                display: flex;
            }   
            
            @media (max-width: 800px) {
                min-width: 100% ;
                min-height: 100% ;

                border-radius: 0;

                
            }

            & > * {
                padding: 0.2rem 0.5rem;
            }

            .dialog-header {
                width: 100%;
                height: $default-height-m;

                @include flex-row;

                border-bottom: $default-border;

                

                .btn-close {
                    @include btn;

                    width: $default-height-m;

                    border-top-right-radius: 0.5rem;
                    
                }
            }

            .dialog-body {
                width: 100%;

                @include flex-column;
                gap: 0.5rem;

                overflow-y: scroll;

                padding: 0.5rem 0.2rem;

                
            }

            .dialog-footer {
                width: 100%;
                height: $default-height-m;

                @include flex-row;

                border-top: $default-border;

                margin-top: auto;
            }

            
        }
</style>