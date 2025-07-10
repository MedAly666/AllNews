<script lang="ts">
    import { 
        GithubSolid, 
        GlobeSolid, 
        ClockSolid, 
        ListOutline, 
        SearchSolid,
        ShieldCheckSolid,
        UsersSolid,
        UploadOutline,
        NewspaperSolid,
        ExclamationCircleSolid,
        MailBoxOutline,
        TwitterSolid,
        LinkedinSolid,
        ChevronRightOutline,
        StarSolid,
        MobilePhoneOutline,
        ComputerSpeakerOutline,
        BellSolid,
        BookmarkSolid
    } from 'flowbite-svelte-icons';
    import { 
        Card, 
        Button, 
        Badge, 
        Timeline, 
        TimelineItem, 
        Avatar,
        Alert,
        Accordion,
        AccordionItem,
        Breadcrumb,
        BreadcrumbItem,
        Modal,
        Tooltip
    } from 'flowbite-svelte';
    import logoWord from '$lib/assets/AllNewsWord.png';
    
    let showPrivacyModal = false;
    let showTermsModal = false;
    
    const features = [
        {
            icon: GlobeSolid,
            title: "Global Coverage",
            description: "Access news from 100+ international sources across 54 countries",
            color: "blue",
            stats: "100+ Sources"
        },
        {
            icon: ClockSolid,
            title: "Real-Time Updates",
            description: "Breaking news delivered instantly with push notifications",
            color: "green",
            stats: "< 30 seconds"
        },
        {
            icon: ListOutline,
            title: "Smart Categories",
            description: "AI-powered content categorization for better discovery",
            color: "purple",
            stats: "15+ Categories"
        },
        {
            icon: SearchSolid,
            title: "Advanced Search",
            description: "Powerful search with filters, keywords, and date ranges",
            color: "orange",
            stats: "Instant Results"
        },
        {
            icon: MobilePhoneOutline,
            title: "Mobile Optimized",
            description: "Seamless experience across all devices and platforms",
            color: "pink",
            stats: "100% Responsive"
        },
        {
            icon: BellSolid,
            title: "Smart Notifications",
            description: "Customizable alerts for topics that matter to you",
            color: "indigo",
            stats: "Personalized"
        }
    ];
    
    const techStack = [
        { name: "SvelteKit", version: "2.0+", description: "Modern web framework" },
        { name: "TypeScript", version: "5.0+", description: "Type-safe development" },
        { name: "Flowbite", version: "Latest", description: "UI component library" },
        { name: "NewsAPI", version: "2.0", description: "Real-time news data" }
    ];
    
    const timeline = [
        {
            title: "Project Launch",
            date: "2024",
            description: "Initial release with basic news aggregation",
            icon: UploadOutline
        },
        {
            title: "Global Expansion",
            date: "2024",
            description: "Added support for 50+ international sources",
            icon: GlobeSolid
        },
        {
            title: "Advanced Features",
            date: "2024",
            description: "Implemented AI categorization and smart search",
            icon: SearchSolid
        },
        {
            title: "Mobile First",
            date: "2024",
            description: "Redesigned for optimal mobile experience",
            icon: MobilePhoneOutline
        }
    ];
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
    <!-- Breadcrumb Navigation -->
    <div class="container mx-auto px-4 pt-6">
        <Breadcrumb aria-label="Navigation breadcrumb">
            <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
            <BreadcrumbItem>About</BreadcrumbItem>
        </Breadcrumb>
    </div>

    <!-- Hero Section -->
    <section class="container mx-auto px-4 py-16 text-center">
        <div class="max-w-4xl mx-auto">
            <div class="mb-8 relative">
                <img 
                    src={logoWord} 
                    alt="The All News Logo" 
                    class="h-16 mx-auto mb-6 drop-shadow-lg"
                >
                <Badge class="absolute -top-2 -right-2 animate-pulse" color="green">Live</Badge>
            </div>
            
            <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                About The All News
            </h1>
            
            <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Your Gateway to Global News Coverage
            </p>
            
            <div class="flex flex-wrap justify-center gap-4 mb-8">
                <Badge color="blue" class="px-4 py-2">
                    <StarSolid class="w-4 h-4 mr-2" />
                    Premium Quality
                </Badge>
                <Badge color="green" class="px-4 py-2">
                    <ShieldCheckSolid class="w-4 h-4 mr-2" />
                    Trusted Sources
                </Badge>
                <Badge color="purple" class="px-4 py-2">
                    <UsersSolid class="w-4 h-4 mr-2" />
                    Global Community
                </Badge>
            </div>
            
            <div class="flex flex-wrap justify-center gap-4">
                <Button size="lg" class="px-8 py-3" href="/">
                    <NewspaperSolid class="w-5 h-5 mr-2" />
                    Start Reading
                </Button>
                <Button size="lg" color="alternative" class="px-8 py-3" href="#features">
                    Learn More
                    <UploadOutline class="w-4 h-4 ml-2" />
                </Button>
            </div>
        </div>
    </section>

    <!-- Mission Section -->
    <section class="container mx-auto px-4 py-16">
        <div class="max-w-4xl mx-auto">
            <Card class="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
                    <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                            The All News is dedicated to providing comprehensive, unbiased news coverage from around the world. 
                            We aggregate news from various trusted sources to give our readers a broader perspective on global events.
                        </p>
                        
                        <div class="grid grid-cols-2 gap-4">
                            <div class="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">100+</div>
                                <div class="text-sm text-gray-600 dark:text-gray-400">News Sources</div>
                            </div>
                            <div class="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                <div class="text-2xl font-bold text-green-600 dark:text-green-400">54</div>
                                <div class="text-sm text-gray-600 dark:text-gray-400">Countries</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="relative">
                        <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur opacity-20"></div>
                        <img 
                            src="https://via.placeholder.com/400x300/1e40af/ffffff?text=Global+News+Network" 
                            alt="Global News Network" 
                            class="relative rounded-lg shadow-lg w-full"
                        >
                    </div>
                </div>
            </Card>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="container mx-auto px-4 py-16">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">What We Offer</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Discover the powerful features that make The All News your ultimate news destination
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each features as feature}
                <Card class="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                    <div class="p-6">
                        <div class="flex items-center justify-between mb-4">
                            <div class="p-3 bg-{feature.color}-100 dark:bg-{feature.color}-900/20 rounded-lg group-hover:scale-110 transition-transform">
                                <svelte:component this={feature.icon} class="w-6 h-6 text-{feature.color}-600 dark:text-{feature.color}-400" />
                            </div>
                            <Badge color="red" class="opacity-80">{feature.stats}</Badge>
                        </div>
                        
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            {feature.title}
                        </h3>
                        
                        <p class="text-gray-600 dark:text-gray-300 mb-4">
                            {feature.description}
                        </p>
                        
                        <Button size="sm" color="alternative" class="w-full group-hover:bg-{feature.color}-50 dark:group-hover:bg-{feature.color}-900/20">
                            Learn More
                            <UploadOutline class="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </Card>
            {/each}
        </div>
    </section>

    <!-- Technology Stack -->
    <section class="container mx-auto px-4 py-16">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Powered By Modern Technology</h2>
                <p class="text-lg text-gray-600 dark:text-gray-300">
                    Built with cutting-edge technologies for optimal performance and user experience
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
                {#each techStack as tech}
                    <Card class="p-6 hover:shadow-lg transition-shadow bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                        <div class="flex items-center justify-between mb-3">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{tech.name}</h3>
                            <Badge color="blue">{tech.version}</Badge>
                        </div>
                        <p class="text-gray-600 dark:text-gray-300">{tech.description}</p>
                    </Card>
                {/each}
            </div>
        </div>
    </section>

    <!-- Timeline Section -->
    <section class="container mx-auto px-4 py-16">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Journey</h2>
                <p class="text-lg text-gray-600 dark:text-gray-300">
                    Key milestones in our mission to deliver better news experiences
                </p>
            </div>
            
            <Timeline>
                {#each timeline as item}
                    <TimelineItem title={item.title} date={item.date}>
                        <p class="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </TimelineItem>
                {/each}
            </Timeline>
        </div>
    </section>

    <!-- Legal Section -->
    <section class="container mx-auto px-4 py-16">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Legal & Privacy</h2>
                <p class="text-lg text-gray-600 dark:text-gray-300">
                    Your privacy and trust are important to us
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6 mb-8">
                <Card class="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                    <div class="flex items-center mb-4">
                        <ShieldCheckSolid class="w-6 h-6 text-green-600 dark:text-green-400 mr-3" />
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Privacy First</h3>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">
                        We collect minimal data and store it locally on your device. No tracking, no profiles.
                    </p>
                    <Button color="alternative" onclick={() => showPrivacyModal = true}>
                        Read Privacy Policy
                    </Button>
                </Card>
                
                <Card class="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                    <div class="flex items-center mb-4">
                        <ExclamationCircleSolid class="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Terms of Use</h3>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">
                        Simple, clear terms for using our news aggregation service responsibly.
                    </p>
                    <Button color="alternative" onclick={() => showTermsModal = true}>
                        Read Terms
                    </Button>
                </Card>
            </div>
            
            <Alert color="blue" class="mb-8">
                <span class="font-medium">Disclaimer:</span> The All News is an aggregation service. 
                We display content from various sources but do not create or modify it. 
                All rights belong to their respective owners.
            </Alert>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="container mx-auto px-4 py-16">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Follow our journey and get in touch with our team
            </p>
            
            <div class="flex flex-wrap justify-center gap-4">
                <Button size="lg" href="https://github.com/MedAly666/" target="_blank" class="px-6 py-3">
                    <GithubSolid class="w-5 h-5 mr-2" />
                    GitHub
                </Button>
                <Button size="lg" color="alternative" href="mailto:contact@allnews.com" class="px-6 py-3">
                    <MailBoxOutline class="w-5 h-5 mr-2" />
                    Email Us
                </Button>
                <Button size="lg" color="alternative" href="#" class="px-6 py-3">
                    <TwitterSolid class="w-5 h-5 mr-2" />
                    Twitter
                </Button>
            </div>
        </div>
    </section>
</div>

<!-- Privacy Modal -->
<Modal title="Privacy Policy" bind:open={showPrivacyModal} size="lg">
    <div class="space-y-4">
        <h3 class="text-lg font-semibold">How We Handle Your Data</h3>
        <div class="space-y-2 text-sm">
            <p>• We collect minimal data (language and country) to provide a better experience</p>
            <p>• This data is stored locally on your device and not shared with third parties</p>
            <p>• We use cookies for essential website functionality only</p>
            <p>• We do not track your browsing habits or build user profiles</p>
            <p>• You can request deletion of any stored data by contacting us</p>
            <p>• We do not knowingly collect information from children under 13</p>
        </div>
    </div>
</Modal>

<!-- Terms Modal -->
<Modal title="Terms of Service" bind:open={showTermsModal} size="lg">
    <div class="space-y-4">
        <h3 class="text-lg font-semibold">By Using The All News, You Agree To:</h3>
        <div class="space-y-2 text-sm">
            <p>• All content is aggregated from third-party sources</p>
            <p>• We are not responsible for decisions made based on information found here</p>
            <p>• You agree to use this service legally and not misuse content</p>
            <p>• We reserve the right to modify or discontinue service without notice</p>
            <p>• All intellectual property rights remain with original publishers</p>
            <p>• You must be at least 13 years of age to use this service</p>
        </div>
    </div>
</Modal>

<style>
    .about-container {
        animation: fadeIn 0.6s ease-out;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .features-grid {
        display: grid;
        gap: 1.5rem;
    }
    
    @media (min-width: 768px) {
        .features-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    
    @media (min-width: 1024px) {
        .features-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>