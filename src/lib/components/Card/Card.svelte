<script lang="ts">
    let { cardHeader , cardBody, cardFooter = null } = $props();
</script>

<div class="card">
    <div class="card-header">
        {@render cardHeader()}
    </div>
    <div class="card-body">
        {@render cardBody()}
    </div>
    <div class="card-footer">
        {@render cardFooter()}
    </div>
</div>

<style lang="scss">
    @use '$lib/scss/main.scss' as *;

    .card {
        width: 100%;

        border: $default-border;
        border-radius: 2*$default-border-radius;

        padding: 0.2rem 0.5rem;


        @include flex-column;
        gap: 0.5rem;
       

        * {
            width: 100%;
        }

        .card-header {
            width: 100%;
            height: $default-height-l;

            @include flex-row;

            padding: 0.2rem 0.5rem;
        }

        .card-body {
            padding: 0.2rem 0.5rem;
            
        }

        .card-footer {
            height: $default-height-l ;



            margin-top: auto;
            padding: 0.2rem 0.5rem;
        }
    }
    
    
</style>