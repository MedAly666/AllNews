<script lang="ts">
    import Card from '$lib/components/Card/Card.svelte';
    import { Github, Envelope, Globe } from 'svelte-bootstrap-icons';
    
    let formData = $state({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    let isSubmitting = $state(false);
    let submitStatus = $state<'success' | 'error' | null>(null);

    async function handleSubmit() {
        isSubmitting = true;
        submitStatus = null;
        
        try {
            // Replace with your actual form submission logic
            await new Promise(resolve => setTimeout(resolve, 1000));
            submitStatus = 'success';
            formData = { name: '', email: '', subject: '', message: '' };
        } catch (error) {
            submitStatus = 'error';
        } finally {
            isSubmitting = false;
        }
    }
</script>

<div class="contact-container">
    <section class="hero">
        <h1>Contact Us</h1>
        <p class="subtitle">Get in touch with our team</p>
    </section>

    <div class="content-wrapper">
        <section class="contact-info">
            <h2>Connect With Us</h2>
            <div class="info-cards">
                <Card>
                    {#snippet cardBody()}
                        <Globe class="icon" />
                        <h3>Visit Our Website</h3>
                        <p>theallnews.vercel.app</p>
                    {/snippet}
                </Card>
                
                <Card>
                    {#snippet cardBody()}
                        <Github class="icon" />
                        <h3>Follow on GitHub</h3>
                        <a href="https://github.com/MedAly666/" target="_blank">@MedAly666</a>
                    {/snippet}
                </Card>
                    
            </div>
        </section>

        <!--section class="contact-form">
            <h2>Send us a Message</h2>
            <form onsubmit={handleSubmit}>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        bind:value={formData.name} 
                        required 
                    />
                </div>
                
                <div class="form-group">
                    <label for="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        bind:value={formData.email} 
                        required 
                    />
                </div>

                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input 
                        type="text" 
                        id="subject" 
                        bind:value={formData.subject} 
                        required 
                    />
                </div>

                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea 
                        id="message" 
                        bind:value={formData.message} 
                        required 
                        rows="5"
                    ></textarea>
                </div>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {#if submitStatus === 'success'}
                    <p class="status-message success">Message sent successfully!</p>
                {/if}
                
                {#if submitStatus === 'error'}
                    <p class="status-message error">Failed to send message. Please try again.</p>
                {/if}
            </form>
        </section-->
    </div>
</div>

<style lang="scss">
    @use '$lib/scss/main.scss' as *;

    .contact-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem 1rem;
        animation: fadeIn 0.6s ease-out;

        .hero {
            text-align: center;
            margin-bottom: 3rem;

            h1 {
                color: $primary-color;
                font-size: 2.5rem;
                margin-bottom: 1rem;
            }

            .subtitle {
                color: #666;
                font-size: 1.2rem;
            }
        }

        .content-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;

            @media (max-width: 768px) {
                grid-template-columns: 1fr;
            }
        }

        .contact-info {
            .info-cards {
                display: grid;
                gap: 0.5rem;
                margin-top: 0.2rem;

                * {
                    transition: transform 0.3s ease;

                    &:hover {
                        transform: translateY(-5px);
                    }


                    h3 {
                        color: $primary-color;
                        margin-bottom: 0.5rem;
                    }

                    a {
                        color: $primary-color;
                        text-decoration: none;
                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }
        }

        /*.contact-form {
            form {
                margin-top: 2rem;
                display: grid;
                gap: 1.5rem;

                .form-group {
                    display: grid;
                    gap: 0.5rem;

                    label {
                        color: #555;
                        font-weight: 500;
                    }

                    input, textarea {
                        padding: 0.8rem;
                        border: 1px solid #ddd;
                        border-radius: 0.5rem;
                        background: #f8f8f8;
                        transition: all 0.3s ease;

                        &:focus {
                            outline: none;
                            border-color: $primary-color;
                            background: #fff;
                            box-shadow: 0 0 0 3px rgba($primary-color, 0.1);
                        }
                    }
                }

                button {
                    padding: 1rem 2rem;
                    background: linear-gradient(135deg, $primary-color, darken($primary-color, 15%));
                    color: white;
                    border: none;
                    border-radius: 2rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba($primary-color, 0.3);

                    &:hover:not(:disabled) {
                        transform: translateY(-2px);
                        box-shadow: 0 6px 20px rgba($primary-color, 0.4);
                    }

                    &:disabled {
                        opacity: 0.7;
                        cursor: not-allowed;
                    }
                }

                .status-message {
                    padding: 1rem;
                    border-radius: 0.5rem;
                    text-align: center;

                    &.success {
                        background-color: #d4edda;
                        color: #155724;
                    }

                    &.error {
                        background-color: #f8d7da;
                        color: #721c24;
                    }
                }
            }
        }*/
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>