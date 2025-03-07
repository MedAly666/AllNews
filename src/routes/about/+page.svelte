<script lang="ts">
    import { Github } from 'svelte-bootstrap-icons';
    import logoWord from '$lib/assets/AllNewsWord.png';
    import Card from '$lib/components/Card/Card.svelte';
</script>

<div class="about-container">
    <section class="hero">
        <img src={logoWord} alt="The All News Logo">
        <h1>About The All News</h1>
        <p class="tagline">Your Gateway to Global News Coverage</p>
    </section>

    <section class="mission">
        <h2>Our Mission</h2>
        <p>The All News is dedicated to providing comprehensive, unbiased news coverage from around the world. 
        We aggregate news from various trusted sources to give our readers a broader perspective on global events.</p>
    </section>

    <section class="features">
        <h2>What We Offer</h2>


        
        <div class="features-grid">
            <Card>
                {#snippet cardHeader()}
                    <h3>Global Coverage</h3>
                {/snippet}
                {#snippet cardBody()}
                    <p>Access news from multiple international sources in one place</p>
                {/snippet}
    
            </Card>

            <Card>
                {#snippet cardHeader()}
                    <h3>Real-Time Updates</h3>
                {/snippet}
                {#snippet cardBody()}
                    <p>Stay informed with the latest breaking news and updates</p>
                {/snippet}
    
            </Card>

            <Card>
                {#snippet cardHeader()}
                    <h3>Category Focus</h3>
                {/snippet}
                {#snippet cardBody()}
                <p>Easy navigation through different news categories</p>
                {/snippet}
    
            </Card>

            <Card>
                {#snippet cardHeader()}
                    <h3>Search Capability</h3>
                {/snippet}
                {#snippet cardBody()}
                    <p>Find specific news articles with our powerful search feature</p>
                {/snippet}
    
            </Card>
        </div>
    </section>

    <section class="technology">
        <h2>Powered By</h2>
        <div class="tech-stack">
            <Card>
                {#snippet cardBody()}
                    <div class="newsapi-logo">
                        News<span>API</span>
                    </div>
                    <p>Reliable news data provider</p>
                {/snippet}
            </Card>

            <Card>
                {#snippet cardHeader()}
                    <h4>Built with modern technology:</h4>
                {/snippet}
                {#snippet cardBody()}
                    <ul>
                        <li>SvelteKit</li>
                        <li>TypeScript</li>
                        <li>SCSS</li>
                    </ul>
                {/snippet}
            </Card>
        </div>
    </section>

    

    <section class="legal">
        <h2>Legal Information</h2>
        <div class="legal-grid">
            <Card>
                {#snippet cardHeader()}
                    <h3>Terms of Service</h3>
                {/snippet}
                {#snippet cardBody()}
                    <div class="legal-content">
                        <p>By using The All News, you agree to the following terms:</p>
                        <ul>
                            <li>All content is aggregated from third-party sources and we do not guarantee its accuracy or reliability.</li>
                            <li>We are not responsible for any decisions made based on information found on this site.</li>
                            <li>You agree to use this service legally and not misuse or scrape content.</li>
                            <li>We reserve the right to modify or discontinue service without notice.</li>
                            <!-- Add these new items -->
                            <li>All intellectual property rights for aggregated content remain with original publishers.</li>
                            <li>Our liability is limited to the maximum extent permitted by applicable law.</li>
                            <li>This agreement is governed by the laws of [your jurisdiction].</li>
                            <li>You must be at least 13 years of age to use this service.</li>
                        </ul>
                    </div>
                {/snippet}
            </Card>

            <Card>
                {#snippet cardHeader()}
                    <h3>Privacy Policy</h3>
                {/snippet}
                {#snippet cardBody()}
                    <div class="legal-content">
                        <p>How we handle your data:</p>
                        <ul>
                            <li>We collect minimal data (language and country) to provide a better experience.</li>
                            <li>This data is stored locally on your device and not shared with third parties.</li>
                            <li>We use cookies for essential website functionality only.</li>
                            <li>We do not track your browsing habits or build user profiles.</li>
                            <li>Any third-party embeds or news sources may have their own privacy policies.</li>
                            <!-- Add these new items -->
                            <li>You can request deletion of any stored data by contacting us.</li>
                            <li>We do not knowingly collect information from children under 13.</li>
                            <li>Our service is not intended for users in jurisdictions where our operations would be illegal.</li>
                        </ul>
                    </div>
                {/snippet}
            </Card>
        </div>
        <p class="disclaimer">
            The All News is an aggregation service that displays content from various sources. 
            We do not create, modify, or take responsibility for the content displayed. 
            All rights belong to their respective owners. The All News makes no warranties, express or implied, 
            regarding accuracy, timeliness, or completeness of any information accessed through this service. 
            Use of this service is at your own risk.
        </p>
    </section>

    <section class="contact">
        <h2>Connect With Us</h2>
        <button>
            <a href="https://github.com/MedAly666/" target="_blank" class="github-link">
                <Github />
                <span>Follow on GitHub</span>
            </a>
        </button>
    </section>

</div>

<style lang="scss">
    @use '$lib/scss/main.scss' as *;

    .about-container {
        margin: 0 auto;
        padding: 1rem 2rem;

        ul {
            list-style: none;
            padding: 0;

            li {
                margin: 1rem 0;
                padding-left: 1.5rem;
                position: relative;
                color: #555;

                &:before {
                    content: "→";
                    color: $primary-color;
                    position: absolute;
                    left: 0;
                    font-weight: bold;
                }
            }
        }

        section {
            margin-bottom: 5rem;
            opacity: 0;
            animation: fadeUp 0.6s ease forwards;

            @for $i from 1 through 5 {
                &:nth-child(#{$i}) {
                    animation-delay: #{$i * 0.2}s;
                }
            }
        }

        .hero {
            text-align: center;
            margin-bottom: 3rem;
            position: relative;

            &::after {
                content: '';
                position: absolute;
                bottom: -2rem;
                left: 50%;
                transform: translateX(-50%);
                width: 100px;
                height: 4px;
                background: linear-gradient(90deg, transparent, $primary-color, transparent);
            }

            img {
                max-width: 300px;
                margin-bottom: 2rem;
                filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1));
            }

            .tagline {
                color: $primary-color;
                font-size: 1.4rem;
                font-weight: 300;
                letter-spacing: 0.5px;
            }
        }

        h2 {
            color: $primary-color;
            margin-bottom: 2rem;
            font-size: 2rem;
            font-weight: 600;
            position: relative;
            display: inline-block;

            &::after {
                content: '';
                position: absolute;
                bottom: -0.5rem;
                left: 0;
                width: 60%;
                height: 3px;
                background: $primary-color;
                border-radius: 2px;
            }
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;

            * {
                padding: 0.2rem;
                transition: all 0.3s ease;

                &:hover {
                    transform: translateY(-10px);
                }

                h3 {
                    color: $primary-color;
                    font-size: 1.3rem;
                    font-weight: 600;
                }

                p {
                    color: #666;
                    line-height: 1.6;
                }
            }
        }

        .technology {
            .tech-stack {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 2rem;
                align-items: start;

                > * {

                    @include flex-column;
                    
                    .newsapi-logo {
                        display: inline-flex;
                        align-items: center;
                        align-self: center;
                        background:  $primary-color;
                        color: white;
                        padding: 0.2rem 0.2rem;
                        font-weight: 600;
                        margin-bottom: 1.5rem;

                        span {
                            background: white;
                            color: $primary-color;
                            padding: 0.3rem 0.6rem;
                            margin-left: 0.5rem;
                        }
                    }

                    
                }
            }
        }

        .contact {
            @include flex-column;

            button {
                @include primary-btn;

                border-radius: $default-border-radius ;

                a {
                    color: $background-color;
                }
                
            }
        }

        .legal {
            .legal-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 2rem;

                
            }

            .disclaimer {
                margin-top: 2rem;
                color: #666;
                font-size: 0.9rem;
                line-height: 1.6;
            }
        }
    }

    @keyframes fadeUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        .about-container {
            padding: 2rem 1rem;

            section {
                margin-bottom: 3rem;
            }

            .hero {
                margin-bottom: 4rem;

                img {
                    max-width: 250px;
                }

                .tagline {
                    font-size: 1.2rem;
                }
            }
        }
    }
</style>