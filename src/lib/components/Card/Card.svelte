<script lang="ts">
    let { cardHeader = null , cardBody, cardFooter = null } = $props();
</script>

<div class="card">
    {#if cardHeader}
        <div class="card-header">
            {@render cardHeader()}
        </div>
    {/if}
    
    <div class="card-body">
        {@render cardBody()}
    </div>
    
    {#if cardFooter }
        <div class="card-footer">
            {@render cardFooter()}
        </div>
    {/if}
</div>

<style lang="scss">
    @use '$lib/scss/main.scss' as *;

    .card {
        width: 100%;

        border: $default-border;
        border-radius: 2*$default-border-radius;

        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

        padding: 0.2rem 0.2rem;


        @include flex-column;
        gap: 0.5rem;
       

        * {
            width: 100%;
        }

        .card-header {
            width: 100%;
            height: $default-height-l;

            @include flex-row;

            padding: 0.2rem 0.2rem;
        }

        .card-body {
            padding: 0.2rem 0.2rem;
            
        }

        .card-footer {
            height: $default-height-l ;



            margin-top: auto;
            padding: 0.2rem 0.2rem;
        }
    }
    
    
</style>