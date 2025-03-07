<script lang="ts">
    import { ChevronLeft, ChevronRight } from 'svelte-bootstrap-icons';

    let { children } = $props();
    

    let currentSlide = $state(0);

    $effect(()=>{        
        let slides = Array.from(document.querySelectorAll('.slide')) as HTMLElement[];
        slides.forEach( (e) => { e.style.display = 'none'})
        if( currentSlide > slides.length - 1 ) currentSlide = 0 ;
        if( currentSlide < 0 ) currentSlide = slides.length - 1;
        slides[currentSlide].style.display = 'block';
    });
</script>

<div class="slides-container">
        {@render children() }
    <button 
        class="prev"
        onclick={ () => { currentSlide--} }
    >
        <ChevronLeft />
    </button>
    <button
        class="next"
        onclick={ () => { currentSlide++ } }
    >
        <ChevronRight />
    </button>
</div>

<style lang="scss">
    @use '$lib/scss/main.scss' as * ;

    .slides-container {
        width: 100%;
        height: 100%;
        
        display: block;

        @include flex-column;  
        
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);


        .next, .prev {
            @include btn;
            
            width: $default-height-m;
            height: $default-height-m;

            cursor: pointer;

            border-radius: 50%;

            position: absolute;
            top: 25%;
            align-self: flex-start;

            margin: 0.5rem;
            
            background-color: $secondary-background-color;
            color: $primary-color;
            user-select: none;

            &:hover {
                background-color: $primary-color;
                color: $background-color;

            }

        }
        
        .next {
            align-self: flex-end;
        }

    }
</style>