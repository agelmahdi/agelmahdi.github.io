document.addEventListener('DOMContentLoaded', () => {
    // Current active tab state
    let activeTab = 'consultant'; // 'consultant' or 'portfolio'
    let isInitializing = true;
    let currentLang = document.documentElement.lang === 'ar' ? 'ar' : 'en'; // 'en' or 'ar'
    let isPremiumMode = false; // false = Standard, true = Enterprise

    // Apply document direction
    document.body.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

    // --- User Profile & Interaction Tracking ---
    let userProfile = {
        userId: '',
        firstVisit: '',
        lastVisit: '',
        language: currentLang,
        mode: 'standard',
        interactions: []
    };

    function initUserProfile() {
        const cached = localStorage.getItem('ahmed_twin_profile');
        if (cached) {
            try {
                userProfile = JSON.parse(cached);
                userProfile.lastVisit = new Date().toISOString();
                userProfile.language = currentLang;
                userProfile.mode = isPremiumMode ? 'enterprise' : 'standard';
            } catch (e) {
                createProfile();
            }
        } else {
            createProfile();
        }
        saveProfile();
        
        // Log initialization
        console.log(
            `%c[AI Twin Analytics]%c Profile Initialized. User ID: ${userProfile.userId}`,
            'color: #b45309; font-weight: bold; background: rgba(180, 83, 9, 0.08); padding: 2px 6px; border-radius: 4px;',
            'color: inherit;'
        );
    }

    function createProfile() {
        userProfile.userId = 'usr_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
        userProfile.firstVisit = new Date().toISOString();
        userProfile.lastVisit = new Date().toISOString();
        userProfile.language = currentLang;
        userProfile.mode = isPremiumMode ? 'enterprise' : 'standard';
        userProfile.interactions = [];
    }

    function saveProfile() {
        // Keep interactions array capped to prevent storage bloat
        if (userProfile.interactions.length > 100) {
            userProfile.interactions = userProfile.interactions.slice(-100);
        }
        localStorage.setItem('ahmed_twin_profile', JSON.stringify(userProfile));
    }

    function trackEvent(eventType, metadata = {}) {
        const event = {
            timestamp: new Date().toISOString(),
            type: eventType,
            ...metadata
        };
        userProfile.interactions.push(event);
        saveProfile();

        console.log(
            `%c[AI Twin Analytics]%c Event: %c${eventType}%c`,
            'color: #b45309; font-weight: bold; background: rgba(180, 83, 9, 0.08); padding: 2px 6px; border-radius: 4px;',
            'color: inherit;',
            'color: #b45309; font-weight: bold;',
            'color: inherit;',
            metadata
        );
    }

    // Expose inspect hook globally
    window.getAhmedTwinAnalytics = () => {
        return userProfile;
    };

    initUserProfile();

    // Track WhatsApp Redirect Click Events
    document.addEventListener('click', (e) => {
        const anchor = e.target.closest('a[href*="wa.me/201558333533"]');
        if (anchor) {
            trackEvent('whatsapp_redirect', { 
                href: anchor.href,
                text: anchor.textContent.trim(),
                currentTab: activeTab,
                carouselIndex: activeTab === 'portfolio' ? currentIndex : null
            });
        }
    });

    // --- Tab Switching Logic ---
    const appHeader = document.querySelector('.app-header');
    const tabConsultant = document.getElementById('tabConsultant');
    const tabPortfolio = document.getElementById('tabPortfolio');
    const tabMedia = document.getElementById('tabMedia');
    const contentConsultant = document.getElementById('contentConsultant');
    const contentPortfolio = document.getElementById('contentPortfolio');
    const contentMedia = document.getElementById('contentMedia');

    function pauseAllVideos() {
        document.querySelectorAll('#contentMedia video').forEach(v => {
            v.pause();
            const card = v.closest('.reel-card');
            if (card) {
                const indicator = card.querySelector('.reel-play-indicator');
                if (indicator) {
                    indicator.classList.add('paused');
                    indicator.style.opacity = '1';
                }
            }
        });
        document.querySelectorAll('#contentMedia iframe').forEach(f => {
            const src = f.src;
            f.src = '';
            f.src = src;
        });
    }

    function switchTab(targetTab) {
        activeTab = targetTab;
        trackEvent('tab_switch', { target: targetTab });

        pauseAllVideos();

        // Expand header on tab transition
        if (appHeader) appHeader.classList.remove('collapsed');

        tabConsultant.classList.toggle('active', targetTab === 'consultant');
        tabPortfolio.classList.toggle('active', targetTab === 'portfolio');
        if (tabMedia) tabMedia.classList.toggle('active', targetTab === 'media');

        contentConsultant.classList.toggle('active', targetTab === 'consultant');
        contentPortfolio.classList.toggle('active', targetTab === 'portfolio');
        if (contentMedia) contentMedia.classList.toggle('active', targetTab === 'media');

        if (targetTab === 'portfolio') {
            resetAutoPlay();
        } else {
            stopAutoPlay();
        }

        updateWhatsAppLinks();
        updateUrlHash();

        // Save active tab state to browser storage
        localStorage.setItem('ahmed_twin_active_tab', targetTab);
    }

    function updateUrlHash() {
        if (isInitializing) return;
        let hash = '';
        if (activeTab === 'consultant') {
            hash = '#chat';
        } else if (activeTab === 'media') {
            hash = '#media';
        } else if (activeTab === 'portfolio') {
            hash = `#portfolio-${currentIndex + 1}`;
        }
        if (window.location.hash !== hash) {
            window.history.replaceState(null, null, hash);
        }
    }

    tabConsultant.addEventListener('click', () => switchTab('consultant'));
    tabPortfolio.addEventListener('click', () => switchTab('portfolio'));
    if (tabMedia) tabMedia.addEventListener('click', () => switchTab('media'));

    function updateWhatsAppLinks() {
        let text = '';
        if (activeTab === 'portfolio') {
            if (currentIndex === 0) {
                text = currentLang === 'ar' 
                    ? 'مرحباً أحمد، قرأت بيان المعماري الخاص بك وأود مناقشة بناء أنظمة ذكاء اصطناعي قابلة للتوسع لشركتي.'
                    : "Hi Ahmed, I read your Manifesto and I'd like to discuss building scalable AI systems for my business.";
            } else if (currentIndex === 1) {
                text = currentLang === 'ar'
                    ? 'مرحباً أحمد، رأيت مقاييس الدقة الخاص بك وأود مناقشة بناء أنظمة RAG خالية من الهلوسة.'
                    : 'Hi Ahmed, I saw your Grounding & Accuracy metrics and would like to discuss building hallucination-free RAG systems.';
            } else if (currentIndex === 2) {
                text = currentLang === 'ar'
                    ? 'مرحباً أحمد، رأيت مقاييس تخصيص النماذج وأود مناقشة الضبط الدقيق لـ LLMs وتحسين خطوط البيانات.'
                    : 'Hi Ahmed, I saw your Model Specialization metrics and want to discuss custom LLM fine-tuning and pipeline optimization.';
            } else if (currentIndex === 3) {
                text = currentLang === 'ar'
                    ? 'مرحباً أحمد، أنا مهتم بإطار ركائز هندسة الذكاء الاصطناعي للمؤسسات وكيفية تطبيقه في منظمتي.'
                    : 'Hi Ahmed, I am interested in your Enterprise AI Engineering Pillars framework and how to implement it in my organization.';
            } else if (currentIndex === 4) {
                text = currentLang === 'ar'
                    ? 'مرحباً أحمد، رأيت اعتمادات أمان واعتمادية أنظمة الذكاء الاصطناعي وأود مناقشة بنى النشر الآمنة.'
                    : 'Hi Ahmed, I saw your AI Systems Reliability & Security credentials and want to discuss secure deployment structures.';
            }
        } else if (activeTab === 'media') {
            text = currentLang === 'ar'
                ? 'مرحباً أحمد، شاهدت فيديوهاتك القصيرة وأود مناقشة استشارات هندسة الذكاء الاصطناعي.'
                : 'Hi Ahmed, I saw your Reels and short insights, and would like to discuss your AI Architecture consulting.';
        } else {
            if (isPremiumMode) {
                text = currentLang === 'ar'
                    ? 'مرحباً أحمد، أود الاستفسار عن تفعيل الوصول إلى خطط إنتاج بنية المؤسسات المميزة.'
                    : 'Hi Ahmed, I would like to inquire about unlocking the premium Enterprise Architecture Blueprints.';
            } else {
                text = currentLang === 'ar'
                    ? 'مرحباً أحمد، أود مناقشة بعض الأفكار والاستشارات أو فرص الشراكة.'
                    : 'Hi Ahmed, I would like to discuss some ideas, business or partnership opportunities.';
            }
        }
        
        const newHref = `https://wa.me/201558333533?text=${encodeURIComponent(text)}`;
        document.querySelectorAll('a[href*="wa.me/201558333533"]').forEach(el => {
            el.href = newHref;
        });
    }


    // --- Portfolio Carousel Deck Logic ---
    const scenes = document.querySelectorAll('.scene');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('carouselDots');
    let currentIndex = 0;
    let autoPlayTimer = null;
    const autoPlayInterval = 10000; // 10 seconds per slide

    // Create pagination dots
    if (dotsContainer) {
        scenes.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                goToSlide(i);
                resetAutoPlay();
            });
            dotsContainer.appendChild(dot);
        });
    }

    const dots = document.querySelectorAll('.dot');

    function updateCarousel() {
        scenes.forEach((scene, index) => {
            scene.classList.remove('active', 'prev', 'next');
            if (index === currentIndex) {
                scene.classList.add('active');
            } else if (index < currentIndex) {
                scene.classList.add('prev');
            } else {
                scene.classList.add('next');
            }
        });

        // Update dots state
        if (dots.length > 0) {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
        trackEvent('slide_view', { index: currentIndex });
        updateWhatsAppLinks();
        updateUrlHash();

        // Save active slide index to browser storage
        localStorage.setItem('ahmed_twin_slide_index', currentIndex);
    }

    function goToSlide(index) {
        if (index < 0) {
            currentIndex = scenes.length - 1;
        } else if (index >= scenes.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        updateCarousel();
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function startAutoPlay() {
        if (activeTab === 'portfolio' && !autoPlayTimer) {
            autoPlayTimer = setInterval(nextSlide, autoPlayInterval);
        }
    }

    function stopAutoPlay() {
        if (autoPlayTimer) {
            clearInterval(autoPlayTimer);
            autoPlayTimer = null;
        }
    }

    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            goToSlide(currentIndex - 1);
            resetAutoPlay();
        });

        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoPlay();
        });
    }

    // Keyboard navigation (only if portfolio is active)
    document.addEventListener('keydown', (e) => {
        if (activeTab !== 'portfolio') return;
        if (e.key === 'ArrowLeft') {
            goToSlide(currentIndex - 1);
            resetAutoPlay();
        }
        if (e.key === 'ArrowRight') {
            nextSlide();
            resetAutoPlay();
        }
    });

    // Pause on hover
    const animContainer = document.querySelector('.animation-container');
    if (animContainer) {
        animContainer.addEventListener('mouseenter', stopAutoPlay);
        animContainer.addEventListener('mouseleave', startAutoPlay);
    }

    // Initialize first view
    updateCarousel();


    // --- AI Twin Consultant Chat Logic ---
    const chatMessages = document.getElementById('chatMessages');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatSuggestions = document.getElementById('chatSuggestions');



    // Dictionary of translations for all static texts in index.html
    const translations = {
        en: {
            tabConsultant: 'AI Consultant',
            tabPortfolio: 'Credentials Board',
            brandBadge: 'Principal AI ARCHITECT',
            greetingTitle: 'Welcome to the AI Architecture Lab',
            greetingDesc: "I am Mahdi's AI Twin, specialized in production-grade AI, RAG architectures, and agentic ecosystems.",
            greetingPrompt: 'How can I assist you with your AI strategy today?',
            chipRag: '🎯 Hallucination-Free RAG',
            chipAgent: '🤖 Agentic Workflows',
            chipCost: '💰 LLM Cost Reduction',
            chipTogaf: '🏗️ AI Pillars',
            chipReliability: '🛡️ AI SRE & Zero-Trust',
            chatPlaceholder: 'Ask about AI architecture, costs, pipelines...',
            modeStandard: 'Standard',
            modePremium: 'Enterprise',
            modeTooltip: 'For advanced content, please leave a message via WhatsApp; we will contact you as soon as possible.',
            titleBadge: 'Principal AI Architect',
            manifestoQuote: '"Building scalable, secure, governed, and autonomous AI ecosystems that unlock real-world business opportunities."',
            manifestoTitle: "The Architect's Manifesto",
            manifestoDesc1: "I bring over a decade of experience in software engineering, architecture, and agile leadership to the tech ecosystem.",
            manifestoDesc2: "I don't just write code; I architect intelligent realities.",
            manifestoDesc3: "Operating at the intersection of deep tech, distributed systems, and business strategy, I specialize in bridging the gap between complex AI capabilities and tangible business ROI.",
            metricsTitle: 'The Metrics',
            metricsRagTitle: 'Grounding & Accuracy',
            metricsRagDesc: 'Architected high-scale RAG systems that significantly reduced domain-specific hallucination rates.',
            metricsModelTitle: 'Model Specialization & Data',
            metricsModelDesc: 'Fine-tuned LLMs (PEFT/LoRA) and built scalable automated ELT pipelines to eliminate AI bottlenecks.',
            metricsCostTitle: 'Cost Efficiency & Agility',
            metricsCostDesc: 'Spearheaded Agentic AI and IaC strategies, slashing operational costs and enabling rapid deployments.',
            arsenalTitle: 'Technical Arsenal',
            arsenalCat1: 'Generative AI & Agentic Systems',
            arsenalCat2: 'Core AI & Data Engineering',
            arsenalCat3: 'Cloud & Architecture',
            credentialsTitle: 'AI Architecture Framework',
            credentialsSubtitle: 'Enterprise AI Engineering Pillars Lifecycle',
            ctaTitle: "Let's Connect & Build",
            headerWhatsapp: 'WhatsApp',
            phaseAName: 'A: Vision & Alignment',
            phaseBName: 'B: Business & HITL',
            phaseCName: 'C: Data & RAG Setup',
            phaseDName: 'D: Cloud & GPU Hosting',
            phaseEName: 'E: Build vs Buy Strategy',
            phaseFName: 'F: Rollout & Migration',
            phaseGName: 'G: Security Guardrails',
            phaseHName: 'H: Drift & Feedback',
            msgEnterpriseEnabled: '🛡️ <strong>Enterprise Mode Enabled:</strong> Future responses will feature highly detailed technical architectures. For advanced content, please leave a message via <a href="https://wa.me/201558333533" target="_blank" style="color: #000000ff; font-weight: bold; text-decoration: underline;">WhatsApp</a>; we will contact you as soon as possible.',
            msgStandardRestored: '💡 <strong>Standard Mode Restored:</strong> Future responses will be concise, high-level summaries.',
            msgBlueprintLocked: '🔒 <strong>Enterprise Architecture Blueprint Locked:</strong> Advanced production plans, GPU topologies, and custom cost optimizations are reserved for advanced content. Please leave a message via <a href="https://wa.me/201558333533" target="_blank" style="color: #000000ff; font-weight: bold; text-decoration: underline;">WhatsApp</a>, and we will contact you as soon as possible to grant access.',
            queryExplainPhase: 'Explain how you apply {title} in AI engineering?',
            queryPillarsOverview: 'How does your AI engineering methodology align with the AI Engineering Pillars?',
            tabMedia: 'Reels',
            reelsTitle: 'AI Architecture Reels',
            reelsDesc: 'Short-form insights, storyboards, and strategic execution walkthroughs.',
            viewScriptBtn: 'View Script',
            shareWhatsAppBtn: 'Discuss on WhatsApp',
            reel1Title: 'What is a Data Pipeline?',
            reel1Desc: 'A Data Pipeline is the engineered infrastructure that transforms chaotic, raw data into a reliable and actionable digital asset. Think of it as the "nervous system" of any enterprise AI architecture. It automates the process of extracting data from disparate sources, transforming and cleaning it, and securely delivering it to storage systems or AI models for consumption.',
            responses: {
                rag: `<strong>Hallucination-Free RAG:</strong><br>
        To build accurate and grounded retrieval systems, we use:
        <ul>
            <li><strong>Hybrid Retrieval:</strong> Combines vector search with keyword matching (BM25) for high precision.</li>
            <li><strong>Reranking Layer:</strong> Uses Cohere/BGE rerankers to select the most relevant document chunks.</li>
            <li><strong>Self-Correction Loops:</strong> Verifies that generated answers match retrieved facts before displaying them.</li>
            <li><strong>Guardrails:</strong> Blocks prompt injections and prevents sensitive data leaks.</li>
        </ul>`,
                agent: `<strong>Agentic Workflows:</strong><br>
        For autonomous task execution, we deploy:
        <ul>
            <li><strong>Supervisor Topology:</strong> A coordinator agent delegates work to specialized sub-agents.</li>
            <li><strong>State Management:</strong> Built using LangGraph to ensure trace recovery and flow control.</li>
            <li><strong>Human Approval (HITL):</strong> Enforces checkpoints for critical actions like database modifications.</li>
            <li><strong>Auto-Retry:</strong> Implements error recovery patterns when tool APIs fail.</li>
        </ul>`,
                cost: `<strong>LLM Cost Optimization:</strong><br>
        To reduce token and hosting overhead, we apply:
        <ul>
            <li><strong>Semantic Caching:</strong> Uses Redis to cache repeated queries and bypass model calls.</li>
            <li><strong>Intelligent Routing:</strong> Routes simple tasks to small models, reserving large models for complex logic.</li>
            <li><strong>PEFT/LoRA Fine-tuning:</strong> Achieves high accuracy on open-source models at a fraction of the cost.</li>
            <li><strong>Prompt Compaction:</strong> Compresses context windows to save token consumption.</li>
        </ul>`,
                togaf: `<strong>AI Engineering Pillars Lifecycle:</strong><br>
        We align AI systems with the 8 AI Engineering Pillars:
        <ul style="margin-top: 6px;">
            <li><strong>Pillar A (Vision):</strong> Formulating business cases and success KPIs.</li>
            <li><strong>Pillar B (Business):</strong> Designing human-in-the-loop (HITL) checkpoints.</li>
            <li><strong>Pillar C (Information):</strong> Setting up vector databases and caching layers.</li>
            <li><strong>Pillar D (Technology):</strong> Configuring GPU hosting and Kubernetes pod scaling.</li>
            <li><strong>Pillar E (Solutions):</strong> Weighing closed APIs against local models (vLLM).</li>
            <li><strong>Pillar F (Migration):</strong> Versioning model weights and migration failovers.</li>
            <li><strong>Pillar G (Governance):</strong> Zero-trust authentication and masking PII.</li>
            <li><strong>Pillar H (Change Management):</strong> Retraining model weights and continuous evaluation.</li>
        </ul>`,
                reliability: `<strong>Enterprise AI Systems Reliability & Security:</strong><br>
        Guided by trustworthy AI paradigms and SRE principles, our strategies include:
        <ul>
            <li><strong>AI SRE:</strong> Deploying robust microservices on Kubernetes using self-healing patterns.</li>
            <li><strong>Zero-Trust Security:</strong> Enforcing secure access controls and defending against prompt injections.</li>
            <li><strong>MLOps & CI/CD:</strong> Automating pipeline versioning and deployments to guarantee auditability.</li>
            <li><strong>Statistical Validation:</strong> Verifying ensemble outputs before routing requests.</li>
        </ul>`,
                greeting: `Hello! I am Ahmed's AI Twin. How can I assist you with your generative AI architectures, distributed systems, or cost reduction strategies today?`,
                about: `<strong>Ahmed El-Mahdi - Principal AI Architect:</strong><br>
        Ahmed is a distributed systems expert and AI architect with over 10 years of experience. He specializes in building scalable, secure, and governed AI applications.
        <br><br>
        You can explore his career metrics, technical skills, and verified certifications under the <strong>Credentials Board</strong> tab, or connect with him directly via <a href="https://www.linkedin.com/in/agelmahdi" target="_blank" style="color: #000000ff; font-weight: bold; text-decoration: underline;">Linkedin</a> or drop a message via <a href="https://wa.me/201558333533" target="_blank" style="color: #000000ff; font-weight: bold; text-decoration: underline;">WhatsApp</a>!`,
                fallback: `I would love to analyze your specific system constraints. Feel free to connect with Ahmed via <a href="https://www.linkedin.com/in/agelmahdi" target="_blank" style="color: #000000ff; font-weight: bold; text-decoration: underline;">Linkedin</a> or drop a message via <a href="https://wa.me/201558333533" target="_blank" style="color: #000000ff; font-weight: bold; text-decoration: underline;">WhatsApp</a> to discuss this architecture further!`,
                phase_a: `<strong>AI Pillar A: Architecture Vision & AI Alignment:</strong><br>
        Pillar A establishes the high-level roadmap and business vision. For enterprise AI deployments, I apply it to:
        <ul>
            <li><strong>Business Case Formulation:</strong> Defining the core problem and establishing LLM capabilities.</li>
            <li><strong>KPI Mapping:</strong> Designing evaluation guardrails and measuring expected business ROI.</li>
            <li><strong>Stakeholder Alignment:</strong> Structuring the initial AI Governance board.</li>
        </ul>`,
                phase_b: `<strong>AI Pillar B: Business Architecture & HITL Design:</strong><br>
        Pillar B defines human operations. I leverage this to build structured operator workflows:
        <ul>
            <li><strong>Human-in-the-Loop (HITL):</strong> Designing validation steps where humans approve sensitive agent outputs.</li>
            <li><strong>Agent Delegation Matrix:</strong> Mapping specific business tasks to autonomous micro-agents.</li>
        </ul>`,
                phase_c: `<strong>AI Pillar C: Information Systems & Data/Model Setup:</strong><br>
        Pillar C defines the Data & Application architectures. This is the heart of AI engineering:
        <ul>
            <li><strong>Data Architecture:</strong> Structuring ELT pipelines, vector databases, and hybrid RAG caching layers.</li>
            <li><strong>Application Architecture:</strong> Designing fine-tuned LLM execution parameters and token tracking systems.</li>
        </ul>`,
                phase_d: `<strong>AI Pillar D: Technology Architecture & Infrastructure:</strong><br>
        Pillar D maps physical hardware and cloud environments. My configurations cover:
        <ul>
            <li><strong>Scalability:</strong> Deploying model runtimes on Kubernetes with automatic pod scaling.</li>
            <li><strong>Hardware Allocation:</strong> Configuring GPU clusters and proxy routing to minimize latency.</li>
        </ul>`,
                phase_e: `<strong>AI Pillar E: Opportunities & Solutions:</strong><br>
        Pillar E evaluates implementation pathways. We assess strategic choices:
        <ul>
            <li><strong>Build vs. Buy:</strong> Analyzing costs between closed APIs vs. local open-source hosting (vLLM).</li>
            <li><strong>Phased Delivery:</strong> Laying out prompt prototypes before moving to RAG and PEFT models.</li>
        </ul>`,
                phase_f: `<strong>AI Pillar F: Migration Planning & Rollout:</strong><br>
        Pillar F coordinates project schedules. For AI:
        <ul>
            <li><strong>Risk Mitigation:</strong> Drafting rollback scripts and fallback models for API outages.</li>
            <li><strong>System Transition:</strong> Designing delta load configurations for vector databases to prevent downtime.</li>
        </ul>`,
                phase_g: `<strong>AI Pillar G: Implementation Governance & Security:</strong><br>
        Pillar G enforces active compliance. In production, I deploy security guardrails:
        <ul>
            <li><strong>Adversarial Defense:</strong> Scanning inputs for prompt injections and system manipulation.</li>
            <li><strong>PII Interception:</strong> Filtering out sensitive customer data before it leaves local infrastructure.</li>
        </ul>`,
                phase_h: `<strong>AI Pillar H: Architecture Change Management & Continuous Learning:</strong><br>
        Pillar H manages ongoing post-deployment changes. I establish feedback pipelines:
        <ul>
            <li><strong>Semantic Drift Auditing:</strong> Monitoring model responses over time to identify accuracy degradation.</li>
            <li><strong>Automated Retraining:</strong> Triggering pipeline updates automatically as new verified data accumulates.</li>
        </ul>`
            }
        },
        ar: {
            tabConsultant: 'إستشاري ذكاء اصطناعي',
            tabPortfolio: 'لوحة الاعتمادات والخبرات',
            brandBadge: 'إستشاري ذكاء اصطناعي',
            greetingTitle: 'مرحباً بك في معمل هندسة الذكاء الاصطناعي',
            greetingDesc: 'أنا التوأم الذكي للمهندس أحمد المهدي، متخصص في أنظمة الذكاء الاصطناعي الإنتاجية، وبنى الـ Architecture وبيئات الوكلاء الذاتية.',
            greetingPrompt: 'كيف يمكنني مساعدتك في استراتيجية الذكاء الاصطناعي الخاصة بك اليوم؟',
            chipRag: '🎯 RAG بدون تهييس',
            chipAgent: '🤖 مسارات عمل الوكلاء',
            chipCost: '💰 تقليل تكلفة الـ LLMs',
            chipTogaf: '🏗️ ركائز الـ AI',
            chipReliability: '🛡️ أمان واعتمادية الـ AI',
            chatPlaceholder: 'اسأل عن بنية الذكاء الاصطناعي، التكاليف، خطوط البيانات...',
            modeStandard: 'عادي',
            modePremium: 'متقدم',
            modeTooltip: 'المحتوى المتقدم مخصص للعملاء المميزين. من فضلك اترك رسالة عبر الواتساب وسنتواصل معك.',
            titleBadge: 'إستشاري ذكاء اصطناعي',
            manifestoQuote: '"بناء أنظمة ذكاء اصطناعي قابلة للتوسع، آمنة، خاضعة للحوكمة وذاتية العمل تفتح آفاقاً حقيقية للأعمال."',
            manifestoTitle: 'بيان المعماري (المانيفستو)',
            manifestoDesc1: 'أمتلك خبرة تمتد لأكثر من عقد في هندسة البرمجيات، النظم الموزعة، والقيادة التقنية المرنة.',
            manifestoDesc2: 'أنا لا أكتب الأكواد البرمجية فقط؛ بل أقوم بهندسة حلول ذكية ومتكاملة.',
            manifestoDesc3: 'أعمل في نقطة التلاقي بين التقنيات العميقة، الأنظمة الموزعة، واستراتيجيات الأعمال لربط قدرات الذكاء الاصطناعي بالعائد الاستثماري الملموس.',
            metricsTitle: 'المقاييس والأرقام',
            metricsRagTitle: 'الدقة ومكافحة التهييس',
            metricsRagDesc: 'هندسة نظم RAG ضخمة قللت بشكل كبير من معدلات الهلوسة في نطاقات الأعمال المتخصصة.',
            metricsModelTitle: 'تخصيص النماذج والبيانات',
            metricsModelDesc: 'ضبط النماذج بدقة (PEFT/LoRA) وبناء خطوط نقل بيانات مؤتمتة لإزالة معوقات تدفق الذكاء الاصطناعي.',
            metricsCostTitle: 'كفاءة التكلفة والمرونة',
            metricsCostDesc: 'قيادة استراتيجيات وكلاء الذكاء الاصطناعي والبنية التحتية كأكواد (IaC) لتقليص تكاليف التشغيل وتسريع النشر.',
            arsenalTitle: 'الترسانة التقنية',
            arsenalCat1: 'الذكاء الاصطناعي التوليدي وأنظمة الوكلاء',
            arsenalCat2: 'هندسة البيانات والذكاء الاصطناعي الأساسي',
            arsenalCat3: 'السحابة والبنية التحتية',
            credentialsTitle: 'إطار هندسة الذكاء الاصطناعي',
            credentialsSubtitle: 'دورة حياة ركائز هندسة الذكاء الاصطناعي للمؤسسات',
            ctaTitle: 'لنبدأ البناء معاً',
            headerWhatsapp: 'واتساب',
            phaseAName: 'A: الرؤية والمواءمة',
            phaseBName: 'B: تصميم الأعمال والعنصر البشري',
            phaseCName: 'C: البيانات وبنية الـ RAG',
            phaseDName: 'D: السحابة واستضافة الـ GPU',
            phaseEName: 'E: استراتيجية البناء أم الشراء',
            phaseFName: 'F: الترحيل والتكامل والنشر',
            phaseGName: 'G: حوكمة الحماية والأمان',
            phaseHName: 'H: إدارة التغيير والتعلم المستمر',
            msgEnterpriseEnabled: '🛡️ <strong>تم تفعيل الوضع المتقدم:</strong> الإجابات القادمة ستتضمن تفاصيل البنية التحتية الدقيقة. للمحتوى المتقدم، يرجى ترك رسالة عبر <a href="https://wa.me/201558333533" target="_blank" style="color: #000000ff; font-weight: bold; text-decoration: underline;">الواتساب</a> وسنتواصل معك في أقرب وقت.',
            msgStandardRestored: '💡 <strong>تم استعادة الوضع العادي:</strong> الإجابات القادمة ستكون ملخصات عالية المستوى.',
            msgBlueprintLocked: '🔒 <strong>مخطط البنية المؤسسية مقفل:</strong> خطط الإنتاج المتقدمة، وهيكليات وحدات معالجة الرسومات (GPU)، وتحسينات التكلفة المخصصة محجوزة للمحتوى المتقدم. يرجى ترك رسالة عبر <a href="https://wa.me/201558333533" target="_blank" style="color: #000000ff; font-weight: bold; text-decoration: underline;">واتساب</a>، وسنتواصل معك في أقرب وقت ممكن لمنحك صلاحية الوصول.',
            queryExplainPhase: 'اشرح لي إزاي بتطبق {title} في هندسة الذكاء الاصطناعي؟',
            queryPillarsOverview: 'إزاي منهجية هندسة الذكاء الاصطناعي بتاعتك بتتماشى مع ركائز هندسة الذكاء الاصطناعي للمؤسسات؟',
            tabMedia: 'الوسائط',
            reelsTitle: 'عروض توضيحية',
            reelsDesc: 'رؤى استراتيجية سريعة، تفاصيل التنفيذ والسيناريوهات المتقدمة لذكاء اصطناعي آمن وقابل للتوسع.',
            viewScriptBtn: 'عرض السيناريو',
            shareWhatsAppBtn: 'ناقش التفاصيل على واتساب',
            reel1Title: 'ما هو الـ Data Pipeline (مسار تدفق البيانات)؟',
            reel1Desc: 'الـ Data Pipeline هو البنية التحتية الهندسية التي تحول البيانات الخام والعشوائية إلى أصل رقمي منظّم ذي قيمة. يمكنك اعتباره "الجهاز العصبي" لأي نظام ذكاء اصطناعي مؤسسي، حيث يقوم آلياً باستخراج البيانات من مصادر متعددة، تنظيفها ومعالجتها، ثم توجيهها بشكل آمن لتغذية نماذج الـ AI أو أنظمة اتخاذ القرار.',
            responses: {
                rag: `<strong>دقة البيانات وRAG بدون تهييس:</strong><br>
        عشان نبني أنظمة استرجاع (RAG) دقيقة وموثوقة، بنعتمد على:
        <ul>
            <li><strong>الاسترجاع الهجين (Hybrid Retrieval):</strong> دمج البحث الدلالي (Vector) مع البحث النصي التقليدي (BM25) لضمان أعلى دقة.</li>
            <li><strong>طبقة إعادة الترتيب (Reranking):</strong> استخدام نماذج مثل Cohere/BGE إعادة ترتيب مستندات البحث وعرض الأنسب فوراً.</li>
            <li><strong>التحقق الذاتي (Self-Correction Loops):</strong> فحص الإجابات والتحقق من مطابقتها للحقائق المسترجعة قبل ما تظهر للمستخدم لمنع الهلوسة تماماً.</li>
            <li><strong>حواجز الأمان (Guardrails):</strong> منع هجمات حقن الأوامر (Prompt Injections) وتسريب البيانات الحساسة.</li>
        </ul>`,
                agent: `<strong>أنظمة الوكلاء التلقائية (Agentic Workflows):</strong><br>
        عشان ننفذ المهام المعقدة بشكل ذاتي، بنصمم وبننشر:
        <ul>
            <li><strong>بنية المشرف المنسق (Supervisor Topology):</strong> وكيل رئيسي بينظم الشغل ويوزعه على وكلاء فرعيين متخصصين.</li>
            <li><strong>إدارة الحالة والذاكرة (State Management):</strong> باستخدام LangGraph لضمان استرجاع خطوات العمل والتحكم الكامل في التدفق.</li>
            <li><strong>موافقة العنصر البشري (Human-in-the-Loop):</strong> وضع نقاط تدقيق وتحقق بشرية للعمليات الحرجة زي تعديل قواعد البيانات.</li>
            <li><strong>المحاولة التلقائية (Auto-Retry):</strong> معالجة الأخطاء ذاتياً لما تفشل خدمات الـ API الخارجية.</li>
        </ul>`,
                cost: `<strong>تقليل تكاليف نماذج اللغة (LLM Cost Optimization):</strong><br>
        عشان نوفر في استهلاك التوكنز وتكاليف الاستضافة، بنطبق:
        <ul>
            <li><strong>الكاش الدلالي (Semantic Caching):</strong> استخدام Redis لحفظ الإجابات السابقة وعرضها مباشرة للأسئلة المتشابهة لتفادي استدعاء النماذج مجدداً.</li>
            <li><strong>توجيه الأسئلة الذكي (Intelligent Routing):</strong> توجيه المهام البسيطة للنماذج الصغيرة المفتوحة، وتوفير النماذج الكبيرة للمهام المعقدة فقط.</li>
            <li><strong>الضبط الدقيق (PEFT/LoRA):</strong> تدريب نماذج مفتوحة المصدر لتحقيق أداء ممتاز بتكلفة استضافة بسيطة جداً مقارنة بالنماذج المغلقة.</li>
            <li><strong>ضغط السياق (Prompt Compaction):</strong> ضغط حجم الأوامر والمدخلات لتوفير استهلاك التوكنز.</li>
        </ul>`,
                togaf: `<strong>دورة حياة ركائز هندسة الذكاء الاصطناعي:</strong><br>
        بنصمم الأنظمة بناءً على الركائز الـ 8 الأساسية لهندسة الذكاء الاصطناعي للمؤسسات:
        <ul style="margin-top: 6px;">
            <li><strong>الركيزة A (الرؤية والمواءمة):</strong> صياغة حالات الاستخدام وتحديد مؤشرات الأداء للأعمال.</li>
            <li><strong>الركيزة B (العنصر البشري):</strong> تصميم مسارات العمل بنقاط موافقة بشرية (HITL).</li>
            <li><strong>الركيزة C (المعلومات والبيانات):</strong> إعداد قواعد بيانات الفيكتور وطبقات الكاش للـ RAG.</li>
            <li><strong>الركيزة D (التقنية والبنية التحتية):</strong> إعداد بيئات استضافة الـ GPU وتوسيع السيرفرات تلقائياً على Kubernetes.</li>
            <li><strong>الركيزة E (الحلول والاستراتيجية):</strong> تقييم استئجار النماذج المغلقة عبر الـ API مقابل استضافتها ذاتياً (vLLM).</li>
            <li><strong>الركيزة F (التكامل والترحيل):</strong> إعداد خطط النشر وتأمين بدائل للنماذج في حالة انقطاع الخدمة.</li>
            <li><strong>الركيزة G (الحوكمة والأمان):</strong> تشفير البيانات بالكامل، حجب البيانات الحساسة (PII)، وحماية الأنظمة.</li>
            <li><strong>الركيزة H (إدارة التغيير والتعلم):</strong> تدريب النماذج بشكل مستمر وتقييم دقتها دورياً لمنع الانحراف الدلالي.</li>
        </ul>`,
                reliability: `<strong>اعتمادية وأمان أنظمة الذكاء الاصطناعي للمؤسسات:</strong><br>
        بناءً على مبادئ هندسة موثوقية الأنظمة (SRE) والذكاء الاصطناعي الموثوق، بتشمل استراتيجياتنا:
        <ul>
            <li><strong>AI SRE:</strong> استضافة وتأمين خدمات الذكاء الاصطناعي على Kubernetes مع خاصية الإصلاح الذاتي.</li>
            <li><strong>أمان الـ Zero-Trust:</strong> حماية قوية للهوية والوصول وتأمين النماذج ضد التهديدات وحقن الأوامر.</li>
            <li><strong>MLOps و CI/CD:</strong> أتمتة اختبار ونشر خطوط البيانات والنماذج لضمان قابلية التدقيق والمراجعة.</li>
            <li><strong>التحقق الإحصائي:</strong> مراجعة مخرجات النماذج للتأكد من اتساقها الإحصائي قبل توجيهها للمستخدم النهائي.</li>
        </ul>`,
                greeting: `أهلاً بك يا فندم! أنا التوأم الذكي للبشمهندس المهدي. أقدر أساعدك إزاي النهاردة في استكشاف بنى الذكاء الاصطناعي، الأنظمة الموزعة، أو استراتيجيات تقليل التكاليف؟`,
                about: `<strong>البشمهندس أحمد المهدي - إستشاري ذكاء اصطناعي:</strong><br>
        أحمد هو خبير في الأنظمة الموزعة ومعماري ذكاء اصطناعي بخبرة تزيد عن 10 سنوات، متخصص في بناء وإدارة تطبيقات الذكاء الاصطناعي الآمنة والموفرة للمؤسسات.
        <br><br>
         أودّ تحليل قيود نظامك بالتحديد. تواصل مع المهدي عبر <a href="https://www.linkedin.com/in/agelmahdi" target="_blank" style="color: #000000ff; font-weight: bold; text-decoration: underline;">لينكدإن</a> أو أرسل رسالة عبر <a href="https://wa.me/201558333533" target="_blank" style="color: #000000ff; font-weight: bold; text-decoration: underline;">واتساب</a> لمناقشة هذه البنية بمزيد من التفصيل!`,
                fallback: `أودّ تحليل قيود نظامك بالتحديد. تواصل مع المهدي عبر <a href="https://www.linkedin.com/in/agelmahdi" target="_blank" style="color: #000000ff; font-weight: bold; text-decoration: underline;">لينكدإن</a> أو أرسل رسالة عبر <a href="https://wa.me/201558333533" target="_blank" style="color: #000000ff; font-weight: bold; text-decoration: underline;">واتساب</a> لمناقشة هذه البنية بمزيد من التفصيل!`,
                phase_a: `<strong>الركيزة A: رؤية البنية التحتية ومواءمة الذكاء الاصطناعي:</strong><br>
        الركيزة A بتحدد خارطة الطريق وأهداف العمل الأساسية. بنطبقها من خلال:
        <ul>
            <li><strong>تحديد حالات الاستخدام:</strong> صياغة المشاكل الحقيقية وتوضيح إمكانات الـ LLM المناسبة لحلها.</li>
            <li><strong>تحديد مؤشرات الأداء (KPIs):</strong> وضع مقاييس جودة المخرجات واحتساب العائد المالي والاستثماري للحل التقني.</li>
        </ul>`,
                phase_b: `<strong>الركيزة B: تصميم مسارات العمل وتكامل العنصر البشري (HITL):</strong><br>
        الركيزة B بتنظم طريقة عمل الموظفين مع الذكاء الاصطناعي:
        <ul>
            <li><strong>العنصر البشري في الحلقة (HITL):</strong> تصميم شاشات مراجعة بشرية للقرارات المهمة قبل اعتمادها.</li>
            <li><strong>مصفوفة المهام:</strong> توزيع المهام والعمليات التلقائية على وكلاء ذكاء اصطناعي متخصصين.</li>
        </ul>`,
                phase_c: `<strong>الركيزة C: بنية البيانات ونماذج الـ RAG:</strong><br>
        الركيزة C هي قلب هندسة الذكاء الاصطناعي للمؤسسات:
        <ul>
            <li><strong>بنية البيانات:</strong> تصميم وتدشين خطوط نقل البيانات (ELT)، قواعد بيانات الفيكتور، والكاش الدلالي للـ RAG.</li>
            <li><strong>إعداد النماذج:</strong> ضبط معايير تشغيل النماذج الكبيرة وتتبع استهلاك التوكنز في كل عملية.</li>
        </ul>`,
                phase_d: `<strong>الركيزة D: البنية التحتية والتقنيات السحابية:</strong><br>
        الركيزة D بتغطي الاستضافة السحابية وموارد الـ GPU:
        <ul>
            <li><strong>التوسع التلقائي:</strong> تشغيل النماذج على سيرفرات Kubernetes وتوسيعها ذاتياً حسب كثافة الطلبات.</li>
            <li><strong>توزيع الأحمال:</strong> تهيئة كلاسترز الـ GPU وتوجيه الطلبات لتقليل زمن الاستجابة (Latency) لأقل حد ممكن.</li>
        </ul>`,
                phase_e: `<strong>الركيزة E: دراسة البدائل والحلول المقترحة:</strong><br>
        الركيزة E بتقيم أفضل مسارات التطوير والاستثمار:
        <ul>
            <li><strong>البناء أم الشراء:</strong> المقارنة بين تكلفة الاعتماد على النماذج المغلقة (API) مقابل استضافة النماذج المفتوحة ذاتياً (vLLM).</li>
            <li><strong>التطوير المرحلي:</strong> بناء نماذج تجريبية سريعة قبل الدخول في استثمار بنى الـ RAG والضبط الدقيق (PEFT).</li>
        </ul>`,
                phase_f: `<strong>الركيزة F: خطط الترحيل والنشر للمنتج النهائي:</strong><br>
        الركيزة F بتنظم جدول النشر والتشغيل الفعلي:
        <ul>
            <li><strong>تخفيف المخاطر:</strong> إعداد خطط بديلة وسيرفرات احتياطية في حال تعطل خدمات النماذج الخارجية.</li>
            <li><strong>ترحيل البيانات:</strong> تحديث وتغذية قواعد بيانات الفيكتور دورياً بدون التسبب في توقف النظام.</li>
        </ul>`,
                phase_g: `<strong>الركيزة G: حوكمة الحماية، الأمان والامتثال:</strong><br>
        الركيزة G بتضمن سلامة وأمن الأنظمة في البيئة الإنتاجية:
        <ul>
            <li><strong>التصدي للثغرات:</strong> فحص المدخلات دورياً لمنع محاولات الاختراق وحقن الأوامر.</li>
            <li><strong>حظر تسريب البيانات (PII):</strong> تشفير وفلترة بيانات العملاء الحساسة تلقائياً قبل إرسالها خارج المؤسسة.</li>
        </ul>`,
                phase_h: `<strong>الركيزة H: إدارة التغيير والتعلم المستمر للنظام:</strong><br>
        الركيزة H بتنظم تحسين وتحديث النظام بعد النشر:
        <ul>
            <li><strong>تتبع الانحراف الدلالي (Drift):</strong> مراقبة دقة إجابات النموذج مع الوقت لرصد أي تراجع في الجودة.</li>
            <li><strong>التدريب التلقائي:</strong> برمجة خطوط تدريب وتحديث النماذج تلقائياً كلما توفرت بيانات صحيحة جديدة.</li>
        </ul>`
            }
        }
    };



    // Mode toggle event listener (Standard vs Enterprise)
    const modeBtn = document.getElementById('modeBtn');
    const modeText = document.getElementById('modeText');
    if (modeBtn) {
        modeBtn.addEventListener('click', () => {
            isPremiumMode = !isPremiumMode;
            trackEvent('mode_toggle', { newMode: isPremiumMode ? 'enterprise' : 'standard' });
            if (isPremiumMode) {
                modeBtn.classList.add('premium-active');
                modeBtn.setAttribute('data-mode', 'premium');
                if (modeText) {
                    modeText.setAttribute('data-translate', 'modePremium');
                    modeText.textContent = translations[currentLang].modePremium;
                }
                
                // Show standard/premium alert message to user in chat
                const welcomeMsg = translations[currentLang].msgEnterpriseEnabled;
                addMessage('bot', welcomeMsg, true);
            } else {
                modeBtn.classList.remove('premium-active');
                modeBtn.setAttribute('data-mode', 'standard');
                if (modeText) {
                    modeText.setAttribute('data-translate', 'modeStandard');
                    modeText.textContent = translations[currentLang].modeStandard;
                }
                
                const welcomeMsg = translations[currentLang].msgStandardRestored;
                addMessage('bot', welcomeMsg, true);
            }
            updateWhatsAppLinks();
        });
    }

    function setLanguage(lang) {
        currentLang = lang;
        
        // Update document dir and language tag
        if (lang === 'ar') {
            document.body.setAttribute('dir', 'rtl');
            if (langBtn) langBtn.textContent = 'English';
        } else {
            document.body.setAttribute('dir', 'ltr');
            if (langBtn) langBtn.textContent = 'العربية';
        }

        // Iterate through all nodes with data-translate attributes
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang][key]) {
                if (el.tagName === 'INPUT') {
                    el.placeholder = translations[lang][key];
                } else if (key === 'tabConsultant') {
                    el.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ` + translations[lang][key];
                } else if (key === 'tabPortfolio') {
                    el.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> ` + translations[lang][key];
                } else if (key === 'tabMedia') {
                    el.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg> ` + translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });
    }

    // Auto-scroll chat to the bottom
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Add a new message in the chat
    function addMessage(sender, text, isHTML = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', sender);

        const avatarDiv = document.createElement('div');
        avatarDiv.classList.add('message-avatar');
        avatarDiv.innerHTML = sender === 'bot' 
            ? `<img src="profile.jpg" alt="Ahmed El-Mahdi" class="avatar-img">`
            : `<div class="avatar-placeholder" style="background:#ffffff; border-radius:50%; font-size:0.75rem; font-weight:800; display:flex; align-items:center; justify-content:center; color:var(--gold); width:100%; height:100%">${currentLang === 'ar' ? 'م' : 'US'}</div>`;

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('message-content');
        if (isHTML) {
            contentDiv.innerHTML = text;
        } else {
            contentDiv.textContent = text;
        }

        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(contentDiv);
        chatMessages.appendChild(messageDiv);
        scrollToBottom();

        return messageDiv;
    }

    // Show typing status indicator
    function showTypingIndicator() {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', 'bot', 'typing-message');

        const avatarDiv = document.createElement('div');
        avatarDiv.classList.add('message-avatar');
        avatarDiv.innerHTML = `<img src="profile.jpg" alt="Ahmed El-Mahdi" class="avatar-img">`;

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('message-content');
        contentDiv.innerHTML = `
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;

        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(contentDiv);
        chatMessages.appendChild(messageDiv);
        scrollToBottom();

        return messageDiv;
    }

    // Simulated chatbot reply generator
    function handleBotReply(questionKey, customQuery = '') {
        const indicator = showTypingIndicator();

        // Calculate typing delay (between 800ms and 1500ms based on length)
        const delay = Math.min(1500, Math.max(800, customQuery.length * 15));

        setTimeout(() => {
            // Remove typing indicator
            indicator.remove();

            let responseText = '';
            
            if (isPremiumMode) {
                // If they are asking basic greeting/bio, let them read standard summaries
                const query = customQuery.toLowerCase();
                const isBasic = questionKey === 'about' || questionKey === 'greeting' ||
                                (customQuery && (query.includes('hello') || query.includes('hi') || query.includes('welcome') || query.includes('أهلا') || query.includes('سلام') || query.includes('مرحبا') || query.includes('who') || query.includes('about') || query.includes('ahmed') || query.includes('مين')));
                
                if (isBasic) {
                    const responses = translations[currentLang].responses;
                    responseText = questionKey ? responses[questionKey] : responses.about;
                } else {
                    // Lock premium technical content and show WhatsApp gate message
                    let topicName = '';
                    if (questionKey) {
                        if (questionKey.startsWith('phase_')) {
                            const phaseLetter = questionKey.split('_')[1].toUpperCase();
                            const keyName = `phase${phaseLetter}Name`;
                            topicName = translations[currentLang][keyName] || questionKey;
                        } else {
                            const chipKey = 'chip' + questionKey.charAt(0).toUpperCase() + questionKey.slice(1);
                            topicName = translations[currentLang][chipKey] || questionKey;
                        }
                    } else {
                        topicName = currentLang === 'ar' ? 'استشارة مخصصة لهندسة الذكاء الاصطناعي' : 'Custom AI Architecture Query';
                    }

                    const waText = currentLang === 'ar'
                        ? `مرحباً أحمد، أود تفعيل الوصول لمخطط بنية المؤسسات الخاص بـ: ${topicName}`
                        : `Hi Ahmed, I would like to unlock the Enterprise Architecture Blueprint for: ${topicName}`;

                    const waHref = `https://wa.me/201558333533?text=${encodeURIComponent(waText)}`;
                    
                    // Replace the wa.me link in the translations message dynamically
                    let lockedMsg = translations[currentLang].msgBlueprintLocked;
                    responseText = lockedMsg.replace('https://wa.me/201558333533', waHref);
                }
            } else {
                // Standard mode - show standard concise content
                const responses = translations[currentLang].responses;

                if (questionKey && responses[questionKey]) {
                    responseText = responses[questionKey];
                } else {
                    // Keyword matching for custom user entries (supports English & Arabic keywords)
                    const query = customQuery.toLowerCase();
                    
                    // RAG Keywords
                    if (query.includes('rag') || query.includes('hallucination') || query.includes('grounding') || query.includes('retrieval') || query.includes('تهييس') || query.includes('استرجاع') || query.includes('دقة')) {
                        responseText = responses.rag;
                    } 
                    // Agentic Keywords
                    else if (query.includes('agent') || query.includes('workflow') || query.includes('langchain') || query.includes('langgraph') || query.includes('crew') || query.includes('وكيل') || query.includes('مسار') || query.includes('مستقل')) {
                        responseText = responses.agent;
                    } 
                    // Cost Keywords
                    else if (query.includes('cost') || query.includes('price') || query.includes('token') || query.includes('efficient') || query.includes('reduce') || query.includes('saving') || query.includes('تكلفة') || query.includes('سعر') || query.includes('توكن') || query.includes('تقليل')) {
                        responseText = responses.cost;
                    } 
                    // Governance / AI Pillars Keywords
                    else if (query.includes('togaf') || query.includes('governance') || query.includes('framework') || query.includes('compliance') || query.includes('standard') || query.includes('adm') || query.includes('phase') || query.includes('enterprise') || query.includes('architecture') || query.includes('بنية المؤسسات') || query.includes('هندسة المؤسسات') || query.includes('حوكمة') || query.includes('إطار') || query.includes('معيار') || query.includes('مرحلة')) {
                        responseText = responses.togaf;
                    } 
                    // SRE/Security Keywords
                    else if (query.includes('reliability') || query.includes('secure') || query.includes('security') || query.includes('sre') || query.includes('zerotrust') || query.includes('zero-trust') || query.includes('coursera') || query.includes('أمان') || query.includes('اعتمادية') || query.includes('حماية')) {
                        responseText = responses.reliability;
                    } 
                    // Greeting Keywords
                    else if (query.includes('hello') || query.includes('hi') || query.includes('hey') || query.includes('welcome') || query.includes('أهلا') || query.includes('سلام') || query.includes('مرحبا') || query.includes('ازيك')) {
                        responseText = responses.greeting;
                    } 
                    // About Keywords
                    else if (query.includes('who') || query.includes('about') || query.includes('ahmed') || query.includes('experience') || query.includes('resume') || query.includes('work') || query.includes('cv') || query.includes('مين') || query.includes('خبرة') || query.includes('سيرة') || query.includes('عمل')) {
                        responseText = responses.about;
                    } 
                    // Fallback
                    else {
                        responseText = responses.fallback;
                    }
                }
            }

            addMessage('bot', responseText, true);
        }, delay);
    }

    // Submit custom chat forms
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const queryText = chatInput.value.trim();
        if (!queryText) return;

        trackEvent('custom_query', { query: queryText });

        // Add user bubble
        addMessage('user', queryText);
        chatInput.value = '';

        // Generate Bot reaction
        handleBotReply(null, queryText);
    });

    // Preset Chip Click Triggers
    chatSuggestions.addEventListener('click', (e) => {
        const chip = e.target.closest('.suggestion-chip');
        if (!chip) return;

        const questionKey = chip.getAttribute('data-question');
        const questionText = chip.textContent.trim();

        trackEvent('chip_click', { question: questionKey, text: questionText });

        // Add user bubble
        addMessage('user', questionText);

        // Generate Bot reaction
        handleBotReply(questionKey);
    });

    // --- AI Pillars Neural Network Interactive Sync ---
    document.querySelectorAll('.network-node').forEach(node => {
        const phase = node.getAttribute('data-phase').toLowerCase();
        
        // Click Event (Cross-Tab Escalation)
        node.addEventListener('click', () => {
            const phaseLetter = node.getAttribute('data-phase');
            const phaseTitle = node.getAttribute('data-title') || `Phase ${phaseLetter}`;
            
            trackEvent('pillar_click', { phase: phaseLetter, title: phaseTitle });

            // Switch to Chat Tab
            switchTab('consultant');

            // Generate query text
            const queryText = translations[currentLang].queryExplainPhase.replace('{title}', phaseTitle);

            // Add user bubble
            addMessage('user', queryText);

            // Generate bot reply
            handleBotReply(`phase_${phase.toLowerCase()}`);
        });
    });

    // Center node click triggers overall AI Pillars overview response
    const centerTogafNode = document.getElementById('centerTogafNode');
    if (centerTogafNode) {
        centerTogafNode.addEventListener('click', () => {
            trackEvent('center_node_click', { title: 'AI Pillars Lifecycle Core' });
            switchTab('consultant');
            const queryText = translations[currentLang].queryPillarsOverview;
            addMessage('user', queryText);
            handleBotReply('togaf');
        });
    }

    // --- Media Reels Hub Subsystem & Interactive Controls ---
    const reelScripts = {
        en: {
            data_pipeline: {
                title: 'What is a Data Pipeline?',
                content: `
                    <p style="margin-bottom: 12px; line-height: 1.6;">A Data Pipeline is the engineered infrastructure that transforms chaotic, raw data into a reliable and actionable digital asset. Think of it as the "nervous system" of any enterprise AI architecture. It automates the process of extracting data from disparate sources, transforming and cleaning it, and securely delivering it to storage systems or AI models for consumption.</p>
                    <p style="margin-bottom: 12px; line-height: 1.6; font-weight: 600;">From a business perspective, the robustness of a Data Pipeline is the deciding factor in the success of any AI initiative. It guarantees three core operational pillars:</p>
                    <ul style="margin-top: 10px; padding-left: 20px; list-style-type: disc; display: flex; flex-direction: column; gap: 8px;">
                        <li style="line-height: 1.5;"><strong>Reliability:</strong> Ensuring a continuous, fault-tolerant flow of high-quality data.</li>
                        <li style="line-height: 1.5;"><strong>Security & Integrity:</strong> Filtering and safeguarding data against corruption or poisoning before it reaches the production model.</li>
                        <li style="line-height: 1.5;"><strong>Scalability:</strong> The architectural flexibility to process massive data volumes as the business grows, maintaining an optimized ROI.</li>
                    </ul>
                `
            }
        },
        ar: {
            data_pipeline: {
                title: 'ما هو الـ Data Pipeline (مسار تدفق البيانات)؟',
                content: `
                    <p style="margin-bottom: 12px; line-height: 1.6;">الـ Data Pipeline هو البنية التحتية الهندسية التي تحول البيانات الخام والعشوائية إلى أصل رقمي منظّم ذي قيمة. يمكنك اعتباره "الجهاز العصبي" لأي نظام ذكاء اصطناعي مؤسسي، حيث يقوم آلياً باستخراج البيانات من مصادر متعددة، تنظيفها ومعالجتها، ثم توجيهها بشكل آمن لتغذية نماذج الـ AI أو أنظمة اتخاذ القرار.</p>
                    <p style="margin-bottom: 12px; line-height: 1.6; font-weight: 600;">في عالم الأعمال، قوة الـ Data Pipeline هي ما تحدد نجاح أو فشل مشاريع الذكاء الاصطناعي، لأنه يضمن ثلاثة عناصر أساسية:</p>
                    <ul style="margin-top: 10px; padding-right: 20px; list-style-type: disc; display: flex; flex-direction: column; gap: 8px;">
                        <li style="line-height: 1.5;"><strong>الموثوقية (Reliability):</strong> تدفق مستمر للبيانات بدون انقطاع أو أخطاء.</li>
                        <li style="line-height: 1.5;"><strong>الأمان (Security & Integrity):</strong> فلترة البيانات وحمايتها من التلوث (Data Poisoning) قبل وصولها للموديل.</li>
                        <li style="line-height: 1.5;"><strong>قابلية التوسع (Scalability):</strong> القدرة على استيعاب ومعالجة أحجام ضخمة من البيانات مع نمو حجم البيزنس بتكلفة تشغيلية محسوبة.</li>
                    </ul>
                `
            }
        }
    };

    // Wire custom card clicks for Play/Pause and progress logs
    document.querySelectorAll('.reel-card').forEach(card => {
        const video = card.querySelector('video');
        const playIndicator = card.querySelector('.reel-play-indicator');
        const muteBtn = card.querySelector('.reel-mute-btn');
        const progressBar = card.querySelector('.reel-progress-bar');
        const reelId = card.getAttribute('data-reel-id');

        if (!video) return;

        // Toggle Play/Pause on video block click
        const videoWrapper = card.querySelector('.reel-video-wrapper');
        const overlay = card.querySelector('.reel-overlay');

        function togglePlay(e) {
            // Ignore click if it was on action buttons
            if (e.target.closest('.reel-btn') || e.target.closest('.reel-mute-btn')) {
                return;
            }

            if (video.paused) {
                // Pause all other videos first to prevent overlapping playbacks
                pauseAllVideos();
                
                video.play().then(() => {
                    playIndicator.classList.remove('paused');
                    playIndicator.style.opacity = '0';
                    trackEvent('reel_play', { reelId: reelId });
                }).catch(() => {});
            } else {
                video.pause();
                playIndicator.classList.add('paused');
                playIndicator.style.opacity = '1';
                trackEvent('reel_pause', { reelId: reelId });
            }
        }

        if (videoWrapper) videoWrapper.addEventListener('click', togglePlay);
        // Bind overlay background click but bypass buttons
        if (overlay) overlay.addEventListener('click', togglePlay);

        // Mute / Unmute
        if (muteBtn) {
            muteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                video.muted = !video.muted;
                const isMuted = video.muted;
                
                trackEvent('reel_mute', { reelId: reelId, muted: isMuted });

                // Update icon
                if (isMuted) {
                    muteBtn.innerHTML = `<svg class="muted-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
                } else {
                    muteBtn.innerHTML = `<svg class="unmuted-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;
                }
            });
        }

        // Live progress bar update
        video.addEventListener('timeupdate', () => {
            if (progressBar && video.duration) {
                const percent = (video.currentTime / video.duration) * 100;
                progressBar.style.width = `${percent}%`;
            }
        });

        // Reset progress on end
        video.addEventListener('ended', () => {
            if (progressBar) progressBar.style.width = '0%';
            playIndicator.classList.add('paused');
            playIndicator.style.opacity = '1';
        });
    });

    // --- Script Modals / Storyboard Drawers ---
    const scriptModal = document.getElementById('scriptModal');
    const modalReelTitle = document.getElementById('modalReelTitle');
    const modalBody = document.getElementById('modalBody');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalShareBtn = document.getElementById('modalShareBtn');

    if (scriptModal) {
        // Open Modal click handler
        document.querySelectorAll('.view-script-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const reelId = btn.getAttribute('data-reel-id') || (btn.closest('.reel-card') && btn.closest('.reel-card').getAttribute('data-reel-id'));
                if (!reelId) return;

                const scriptData = reelScripts[currentLang][reelId];
                if (!scriptData) return;

                trackEvent('view_script', { reelId: reelId });

                // Set Title
                if (modalReelTitle) modalReelTitle.textContent = scriptData.title;

                // Build Body Content HTML
                let bodyHtml = '';
                if (scriptData.content) {
                    bodyHtml = `<div class="script-detailed-desc">${scriptData.content}</div>`;
                } else if (scriptData.scenes) {
                    scriptData.scenes.forEach(scene => {
                        bodyHtml += `
                            <div class="script-section">
                                <h4 class="script-section-title">⏱️ ${scene.time} - ${scene.name}</h4>
                                <div class="script-section-body">
                                    <strong>${currentLang === 'ar' ? 'الوصف البصري:' : 'Visual:'}</strong> ${scene.visual}
                                    <br><br>
                                    <strong>${currentLang === 'ar' ? 'الصوت والكلام:' : 'Audio:'}</strong> ${scene.audio}
                                </div>
                            </div>
                        `;
                    });
                }
                if (modalBody) modalBody.innerHTML = bodyHtml;

                // Pre-fill WhatsApp CTA link
                if (modalShareBtn) {
                    const waText = currentLang === 'ar'
                        ? `مرحباً أحمد، شاهدت الفيديو القصير الخاص بك حول: "${scriptData.title}" وأود الاستفسار ومناقشته معك!`
                        : `Hi Ahmed, I watched your Reel regarding: "${scriptData.title}" and would like to discuss it!`;
                    modalShareBtn.href = `https://wa.me/201558333533?text=${encodeURIComponent(waText)}`;
                }

                // Show Modal
                scriptModal.classList.add('active');
            });
        });

        // Close button click
        if (modalCloseBtn) {
            modalCloseBtn.addEventListener('click', () => {
                scriptModal.classList.remove('active');
            });
        }

        // Close on clicking backdrop
        scriptModal.addEventListener('click', (e) => {
            if (e.target === scriptModal) {
                scriptModal.classList.remove('active');
            }
        });

        // Track share button click
        if (modalShareBtn) {
            modalShareBtn.addEventListener('click', () => {
                const titleText = modalReelTitle ? modalReelTitle.textContent : '';
                trackEvent('whatsapp_share_click', { topic: titleText });
            });
        }
    }

    // --- Restore Page & Tab State on Reload via URL Hash & localStorage ---
    function restoreState() {
        const hash = window.location.hash;
        if (hash) {
            if (hash === '#chat') {
                switchTab('consultant');
                return;
            } else if (hash === '#media') {
                switchTab('media');
                return;
            } else if (hash.startsWith('#portfolio')) {
                switchTab('portfolio');
                const parts = hash.split('-');
                if (parts.length > 1) {
                    const slideNum = parseInt(parts[1], 10);
                    if (!isNaN(slideNum) && slideNum >= 1 && slideNum <= scenes.length) {
                        goToSlide(slideNum - 1);
                    }
                }
                return;
            }
        }

        // Fallback to localStorage if no hash is present in the URL
        const savedTab = localStorage.getItem('ahmed_twin_active_tab');
        if (savedTab) {
            switchTab(savedTab);
            if (savedTab === 'portfolio') {
                const savedSlide = localStorage.getItem('ahmed_twin_slide_index');
                if (savedSlide !== null) {
                    const slideIndex = parseInt(savedSlide, 10);
                    if (!isNaN(slideIndex) && slideIndex >= 0 && slideIndex < scenes.length) {
                        goToSlide(slideIndex);
                    }
                }
            }
        }
    }

    // --- Scroll Collapse/Expand Header Logic ---
    let lastScrollChat = 0;
    let lastScrollReels = 0;

    // Chat messages scroll listener
    if (chatMessages) {
        chatMessages.addEventListener('scroll', () => {
            const scrollTop = chatMessages.scrollTop;
            if (scrollTop > lastScrollChat && scrollTop > 20) {
                if (appHeader) appHeader.classList.add('collapsed');
            } else if (scrollTop < lastScrollChat || scrollTop <= 5) {
                if (appHeader) appHeader.classList.remove('collapsed');
            }
            lastScrollChat = scrollTop;
        });
    }

    // Reels container scroll listener
    const reelsGrid = document.getElementById('reelsGrid');
    if (reelsGrid) {
        reelsGrid.addEventListener('scroll', () => {
            const scrollTop = reelsGrid.scrollTop;
            if (scrollTop > lastScrollReels && scrollTop > 20) {
                if (appHeader) appHeader.classList.add('collapsed');
            } else if (scrollTop < lastScrollReels || scrollTop <= 5) {
                if (appHeader) appHeader.classList.remove('collapsed');
            }
            lastScrollReels = scrollTop;
        });
    }

    // Bind hashchange listener and execute on initial boot
    window.addEventListener('hashchange', restoreState);
    restoreState();
    isInitializing = false;
    updateUrlHash();
});
