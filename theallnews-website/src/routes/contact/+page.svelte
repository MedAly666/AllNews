<script lang="ts">
    import { Card } from "flowbite-svelte";
    import { GithubSolid, GlobeOutline } from "flowbite-svelte-icons";

    let formData = $state({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    let isSubmitting = $state(false);
    let submitStatus = $state<"success" | "error" | null>(null);

    async function handleSubmit() {
        isSubmitting = true;
        submitStatus = null;

        try {
            // Replace with your actual form submission logic
            await new Promise((resolve) => setTimeout(resolve, 1000));
            submitStatus = "success";
            formData = { name: "", email: "", subject: "", message: "" };
        } catch (error) {
            submitStatus = "error";
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
                    <GlobeOutline />
                    <h3>Visit Our Website</h3>
                    <p>theallnews.vercel.app</p>
                </Card>

                <Card>
                    <GithubSolid class="icon" />
                    <h3>Follow on GitHub</h3>
                    <a href="https://github.com/MedAly666/" target="_blank"
                        >@MedAly666</a
                    >
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
