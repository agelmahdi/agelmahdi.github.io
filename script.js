document.addEventListener('DOMContentLoaded', () => {
    const reelsData = [
        {
            id: "reel_1",
            iframeSrc: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1043026118474268%2F&show_text=false&width=267&t=0",
            script: {
                en: {
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
                },
                ar: {
                    title: 'ما هو مسار تدفق البيانات؟',
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
        },
        {
            id: "reel_2",
            iframeSrc: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1011685518110353%2F&show_text=false&width=267&t=0",
            script: {
                en: {
                    title: 'Techno-Business Integration: The Fusion of AI and Strategy',
                    content: `
                        <p style="margin-bottom: 12px; line-height: 1.6;">"Techno-Business Integration" is the architectural philosophy that bridges the gap between deep-tech engineering and executive business objectives. It represents the crucial shift of Artificial Intelligence from an operational cost center (a mere IT tool) to a core strategic driver that maximizes ROI and builds sustainable competitive advantage.</p>
                        <p style="margin-bottom: 12px; line-height: 1.6; font-weight: 600;">This fusion doesn't happen organically; it is engineered through three foundational pillars:</p>
                        <ul style="margin-top: 10px; padding-left: 20px; list-style-type: disc; display: flex; flex-direction: column; gap: 8px;">
                            <li style="line-height: 1.5;"><strong>Strategic Alignment:</strong> Every technical and architectural decision must be inherently tied to a business outcome. We do not build AI models to chase technological hype; we design architectures to solve specific market pain points, optimize operational costs, or unlock new revenue streams.</li>
                            <li style="line-height: 1.5;"><strong>Asset Generation (The Competitive Edge):</strong> Moving beyond the "Business Tech Paradox" of relying solely on rented intelligence (off-the-shelf AI). This integration focuses on designing Custom AI Architectures and robust Data Pipelines that transform proprietary enterprise data into a heavily guarded digital asset, significantly increasing corporate valuation.</li>
                            <li style="line-height: 1.5;"><strong>Engineered Execution:</strong> A business strategy without solid infrastructure is just a concept. True fusion is realized by deploying MLOps and scalable, secure, and highly reliable AI systems that can handle enterprise-level demands without compromising data integrity.</li>
                        </ul>
                    `
                },
                ar: {
                    title: 'التكامل التقني-التجاري: دمج الذكاء الاصطناعي والاستراتيجية',
                    content: `
                        <p style="margin-bottom: 12px; line-height: 1.6;">مفهوم "التكامل التقني-التجاري" (Techno-Business Integration) هو الفلسفة التي تسد الفجوة بين "هندسة التكنولوجيا العميقة" وبين "أهداف البيزنس الاستراتيجية". باختصار، هو الانتقال بالذكاء الاصطناعي من كونه مجرد "أداة تقنية" (IT Tool) تستهلك الميزانية، إلى "محرك استراتيجي" (Strategic Driver) يضاعف العائد على الاستثمار (ROI) ويخلق ميزة تنافسية مستدامة.</p>
                        <p style="margin-bottom: 12px; line-height: 1.6; font-weight: 600;">هذا الدمج لا يحدث بالصدفة، بل يعتمد على ثلاثة أعمدة رئيسية:</p>
                        <ul style="margin-top: 10px; padding-right: 20px; list-style-type: disc; display: flex; flex-direction: column; gap: 8px;">
                            <li style="line-height: 1.5;"><strong>التوافق الاستراتيجي (Strategic Alignment):</strong> كل قرار هندسي في بناء الـ AI يجب أن يحل مشكلة تجارية حقيقية. نحن لا نبني نماذج ذكاء اصطناعي لمجرد مواكبة الـ Trend، بل نبني أنظمة تزيد المبيعات، تقلل تكلفة التشغيل، أو تفتح أسواقاً جديدة.</li>
                            <li style="line-height: 1.5;"><strong>بناء الأصول (Asset Generation):</strong> بدلاً من الاعتماد على "الذكاء المستأجر" (النماذج الجاهزة للمهام اليومية)، يركز هذا التكامل على بناء Custom AI Architecture و Data Pipelines تحول بيانات الشركة إلى أصل رقمي حصري (Digital Asset) يرفع من التقييم المالي للشركة.</li>
                            <li style="line-height: 1.5;"><strong>التنفيذ الهندسي (Engineered Execution):</strong> الاستراتيجية بدون بنية تحتية هي مجرد فكرة. الدمج الحقيقي يظهر في بناء أنظمة قابلة للتوسع (Scalable)، آمنة (Secure)، وموثوقة (Reliable) لضمان استمرارية البيزنس تحت أي ضغط.</li>
                        </ul>
                        <p style="margin-top: 12px; line-height: 1.6; font-weight: 600;">الخلاصة: الـ Techno-Business Integration هو فن تحويل "الكود والبيانات" إلى "قرارات وأرباح".</p>
                    `
                }
            }
        }
    ];



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
    const appFooter = document.querySelector('.app-footer');
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

        // Expand header and footer on tab transition
        if (appHeader) appHeader.classList.remove('collapsed');
        if (appFooter) appFooter.classList.remove('collapsed');

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

    const sceneSlugs = ['intro', 'credentials', 'techno-business', 'architecture', 'metrics', 'faqs'];

    function updateUrlHash() {
        if (isInitializing) return;
        let hash = '';
        if (activeTab === 'consultant') {
            hash = '#chat';
        } else if (activeTab === 'media') {
            hash = '#media';
        } else if (activeTab === 'portfolio') {
            hash = `#${sceneSlugs[currentIndex] || 'portfolio-' + (currentIndex + 1)}`;
        }
        if (window.location.hash !== hash) {
            window.history.replaceState(null, null, hash);
        }
    }

    tabConsultant.addEventListener('click', () => switchTab('consultant'));
    tabPortfolio.addEventListener('click', () => switchTab('portfolio'));
    if (tabMedia) tabMedia.addEventListener('click', () => switchTab('media'));

    // ── Side Drawer (hamburger menu) ─────────────────────────────────
    const navHamburger = document.getElementById('navHamburger');
    const sideDrawer = document.getElementById('sideDrawer');
    const sideDrawerOverlay = document.getElementById('sideDrawerOverlay');
    const sideDrawerClose = document.getElementById('sideDrawerClose');

    function openDrawer() {
        if (!sideDrawer) return;
        sideDrawer.classList.add('open');
        sideDrawerOverlay.classList.add('visible');
        if (navHamburger) navHamburger.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        if (!sideDrawer) return;
        sideDrawer.classList.remove('open');
        sideDrawerOverlay.classList.remove('visible');
        if (navHamburger) navHamburger.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (navHamburger) navHamburger.addEventListener('click', openDrawer);
    if (sideDrawerClose) sideDrawerClose.addEventListener('click', closeDrawer);
    if (sideDrawerOverlay) sideDrawerOverlay.addEventListener('click', closeDrawer);

    // Drawer tab buttons trigger switchTab and close drawer
    document.querySelectorAll('.side-drawer-tab[data-tab]').forEach(btn => {
        btn.addEventListener('click', () => {
            switchTab(btn.dataset.tab);
            closeDrawer();
            // Sync active state in drawer
            document.querySelectorAll('.side-drawer-tab').forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Drawer link buttons trigger switchTab to portfolio, change slide, and close drawer
    document.querySelectorAll('.side-drawer-link').forEach(link => {
        link.addEventListener('click', () => {
            const sceneIndex = parseInt(link.getAttribute('data-scene'));
            
            // Switch to Portfolio Tab
            switchTab('portfolio');
            
            // Sync active state in drawer (make Portfolio active if it was in the drawer)
            document.querySelectorAll('.side-drawer-tab').forEach(t => t.classList.remove('active'));
            
            // Go to specific scene
            if (!isNaN(sceneIndex)) {
                if (typeof goToSlide === 'function') {
                    goToSlide(sceneIndex);
                    if (typeof resetAutoPlay === 'function') resetAutoPlay();
                } else {
                    // Fallback if goToSlide is scoped differently or not initialized yet
                    setTimeout(() => {
                        if (typeof goToSlide === 'function') goToSlide(sceneIndex);
                        if (typeof resetAutoPlay === 'function') resetAutoPlay();
                    }, 50);
                }
            }
            
            closeDrawer();
        });
    });

    // Keep drawer tab active state in sync with main nav
    function syncDrawerActive() {
        document.querySelectorAll('.side-drawer-tab[data-tab]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === activeTab);
        });
    }

    // Close drawer on Escape key
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeDrawer();
    });
    // ─────────────────────────────────────────────────────────────────

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
            chipRag: 'Hallucination-Free RAG',
            chipAgent: 'Agentic Workflows',
            chipCost: 'LLM Cost Reduction',
            chipTogaf: 'AI Pillars',
            chipReliability: 'AI SRE & Zero-Trust',
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
            integrationTitle: 'Techno-Business Integration',
            integrationSubtitle: 'The architectural philosophy that bridges the gap between deep-tech engineering and executive business objectives.',
            integrationPillar1Title: '1. Strategic Alignment',
            integrationPillar1Desc: 'Every technical decision is tied to a business outcome—solving pain points, optimizing costs, or unlocking revenue.',
            integrationPillar2Title: '2. Asset Generation',
            integrationPillar2Desc: 'Designing Custom AI and Data Pipelines to transform enterprise data into a heavily guarded digital asset.',
            integrationPillar3Title: '3. Engineered Execution',
            integrationPillar3Desc: 'Deploying MLOps and scalable, secure AI systems capable of handling enterprise demands reliably.',
            integrationPeakTitle: 'High ROI & Competitive Edge',
            faqTitle: 'Frequently Asked Questions',
            faqSubtitle: 'Click any question for a detailed architectural illustration.',
            navTechno: 'Business-Tech Synergy',
            navArchitecture: 'Enterprise AI Architecture',
            navMetrics: 'Proven ROI & Metrics',
            navFAQ: 'Executive FAQs',
            navDevelopers: 'Developers (Soon)',
            faqQ1: '1. Should I build custom AI or buy SaaS APIs?',
            faqQ2: '2. How do you align AI engineering with Business ROI?',
            faqQ3: '3. How do you guarantee AI security & reliability?',
            faqQ4: "4. Agentic AI vs. Basic RAG: What's the difference?",
            faqQ5: "5. How do we start an enterprise AI integration?",
            faqQ6: "6. How do you handle data privacy and compliance?",
            faqQ7: "7. What is the typical timeline for an AI integration project?",
            faqQ8: "8. Can we train models on our own local servers?",
            faqQ9: "9. What is AI Governance and why is it critical?",
            faqQ10: "10. How do you prevent model drift and hallucination over time?",
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
            viewScriptBtn: 'Show Content',
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
                alignment: `<strong>Strategic Alignment:</strong><br>
        Every technical decision in AI engineering must solve a specific business problem. We prioritize:
        <ul>
            <li><strong>ROI Tracking:</strong> Defining clear KPIs before writing any code.</li>
            <li><strong>Use Case Prioritization:</strong> Selecting high-impact, low-complexity models to ensure quick wins.</li>
        </ul>`,
                asset: `<strong>Asset Generation:</strong><br>
        AI is not just software; it's a digital asset. This involves:
        <ul>
            <li><strong>Data Moats:</strong> Building proprietary datasets that competitors cannot easily replicate.</li>
            <li><strong>Custom Models:</strong> Fine-tuning models on domain-specific data to create intellectual property (IP).</li>
        </ul>`,
                execution: `<strong>Engineered Execution:</strong><br>
        Moving from notebooks to production seamlessly. Our execution includes:
        <ul>
            <li><strong>MLOps Pipelines:</strong> CI/CD for machine learning models ensuring zero downtime.</li>
            <li><strong>Scalability:</strong> Utilizing Kubernetes and cloud-native services for elastic inference.</li>
        </ul>`,
                roi: `<strong>High ROI & Competitive Edge:</strong><br>
        The ultimate goal of Techno-Business Integration. By aligning strategy with engineered execution, enterprises achieve:
        <ul>
            <li><strong>Exponential Growth:</strong> Unlocking new revenue streams via AI-driven products.</li>
            <li><strong>Market Dominance:</strong> Outpacing competitors through data leverage and operational agility.</li>
        </ul>`,
                rag_metric: `<strong>Metrics: Grounding & Accuracy:</strong><br>
        By architecting high-scale Retrieval-Augmented Generation (RAG) systems, we focus on:
        <ul>
            <li><strong>Reduced Hallucinations:</strong> Grounding AI responses exclusively in verified enterprise data.</li>
            <li><strong>Contextual Accuracy:</strong> Employing hybrid search and reranking layers for precise document retrieval.</li>
            <li><strong>Domain Specialization:</strong> Customizing vector embedding models to understand complex industry jargon.</li>
        </ul>`,
                model_metric: `<strong>Metrics: Model Specialization & Data:</strong><br>
        Data is the fuel, and models are the engines. Our metric focus includes:
        <ul>
            <li><strong>PEFT/LoRA Fine-tuning:</strong> Specializing open-source models (like Llama/Mistral) on enterprise datasets without the massive costs of full training.</li>
            <li><strong>Automated ELT Pipelines:</strong> Building scalable pipelines that clean, structure, and stream data seamlessly to AI endpoints.</li>
            <li><strong>Data Moats:</strong> Transforming raw operational data into secure, proprietary assets.</li>
        </ul>`,
                cost_metric: `<strong>Metrics: Cost Efficiency & Agility:</strong><br>
        AI should drive revenue, not drain IT budgets. Our optimization metrics:
        <ul>
            <li><strong>Agentic AI Automation:</strong> Replacing costly manual workflows with specialized AI agents.</li>
            <li><strong>Infrastructure as Code (IaC):</strong> Rapidly deploying and scaling AI infrastructure using Terraform/Kubernetes to slash operational overhead.</li>
            <li><strong>Token Optimization:</strong> Implementing semantic caching and prompt compression to drastically reduce LLM API bills.</li>
        </ul>`,
                greeting: `Hello! I am Ahmed's AI Twin. How can I assist you with your generative AI architectures, distributed systems, or cost reduction strategies today?`,
                about: `<strong>Ahmed El-Mahdi - Principal AI Architect:</strong><br>
        Ahmed is a distributed systems expert and AI architect with over 10 years of experience. He specializes in building scalable, secure, and governed AI applications.
        <br><br>
        I'd love to analyze your specific system constraints. Connect with him on <a href="https://www.linkedin.com/in/agelmahdi" target="_blank" style="color: #000000ff; font-weight: bold; text-decoration: underline;">LinkedIn</a> or drop a message on <a href="https://wa.me/201558333533" target="_blank" style="color: #000000ff; font-weight: bold; text-decoration: underline;">WhatsApp</a> to discuss this architecture in deeper detail!`,
                fallback: `I'd love to analyze your specific system constraints. Connect with him on <a href="https://www.linkedin.com/in/agelmahdi" target="_blank" style="color: #000000ff; font-weight: bold; text-decoration: underline;">LinkedIn</a> or drop a message on <a href="https://wa.me/201558333533" target="_blank" style="color: #000000ff; font-weight: bold; text-decoration: underline;">WhatsApp</a> to discuss this architecture in deeper detail!`,
                faq_build: `<strong>Build vs. Buy AI: The Strategic Choice</strong><br>
        Renting AI APIs is good for prototyping, but engineering your own AI infrastructure is critical for enterprise dominance.<br>
        <div class="build-vs-buy-grid" style="margin-top: 15px;">
            <div class="buy-card" style="width: 100%;">
                <h3 style="text-align: center;">Renting (APIs/SaaS)</h3>
                <ul>
                    <li>❌ Per-token recurring costs</li>
                    <li>❌ Data privacy & leakage risks</li>
                    <li>❌ Generic capabilities (No Moat)</li>
                </ul>
            </div>
            <div class="vs-badge">VS</div>
            <div class="build-card glowing-border" style="width: 100%;">
                <h3 style="text-align: center;">Building Custom AI</h3>
                <ul>
                    <li>✅ Absolute Data Sovereignty</li>
                    <li>✅ Zero-Trust Security & Compliance</li>
                    <li>✅ Proprietary IP & Domain Specificity</li>
                </ul>
                <div class="build-peak-icon">👑</div>
            </div>
        </div>`,
                faq_roi: `<strong>Techno-Business Integration</strong><br>
        We bridge the gap between deep tech engineering and business goals to ensure high ROI.<br>
        <div class="value-pipeline" style="margin-top: 15px; padding: 1rem; border-radius: 8px;">
            <div class="pipeline-node" style="padding: 10px; margin-bottom: 10px;">
                <div class="node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg></div>
                <div class="node-content">
                    <h3 style="font-size: 1rem;">1. AI Alignment</h3>
                </div>
            </div>
            <div class="pipeline-node" style="padding: 10px; margin-bottom: 10px;">
                <div class="node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><path d="M6 3h12l4 6-10 13L2 9z"></path><path d="M11 3 8 9l4 13 4-13-3-6"></path><path d="M2 9h20"></path></svg></div>
                <div class="node-content">
                    <h3 style="font-size: 1rem;">2. Asset Generation</h3>
                </div>
            </div>
            <div class="pipeline-node" style="padding: 10px; margin-bottom: 10px;">
                <div class="node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></div>
                <div class="node-content">
                    <h3 style="font-size: 1rem;">3. Engineered Execution</h3>
                </div>
            </div>
            <div class="pipeline-peak" style="padding: 10px;">
                <h3 style="font-size: 1.1rem; text-align: center; color: var(--gold); margin: 0;">High ROI & Competitive Edge</h3>
            </div>
        </div>`,
                faq_security: `<strong>Enterprise AI Security & Reliability</strong><br>
        Guided by trustworthy AI paradigms and SRE principles, our systems are built to withstand enterprise demands.<br>
        <div style="background: rgba(15, 23, 42, 0.4); border: 1px solid rgba(234, 88, 12, 0.3); border-radius: 12px; padding: 1.2rem; margin-top: 15px; text-align: center;">
            <div style="font-size: 2.5rem; margin-bottom: 10px;">🔒</div>
            <ul style="text-align: left; list-style: none; padding: 0;">
                <li style="margin-bottom: 8px; color: var(--text-main);">🛡️ <strong>Zero-Trust Architecture</strong></li>
                <li style="margin-bottom: 8px; color: var(--text-main);">🔄 <strong>Self-Healing Microservices</strong></li>
                <li style="margin-bottom: 8px; color: var(--text-main);">🚫 <strong>Prompt Injection Guardrails</strong></li>
                <li style="color: var(--text-main);">⚙️ <strong>Automated CI/CD MLOps</strong></li>
            </ul>
        </div>`,
                faq_agents: `<strong>Agentic Workflows vs. Basic RAG</strong><br>
        Basic RAG simply retrieves documents and summarizes them. It's passive.<br>
        <strong>Agentic AI</strong> is proactive. We build supervisors that break down complex tasks, route them to specialized sub-agents, execute multi-step logic (like querying SQL, calling APIs, and generating reports), and verify the output before responding.`,
                faq_start: `<strong>Getting Started: The Architecture Assessment</strong><br>
        We begin with a zero-cost architecture assessment to map your current data infrastructure and identify high-ROI use cases. From there, we design a proof-of-concept (PoC) architecture using the AI Engineering Pillars to demonstrate tangible value within weeks.`,
                faq_privacy: `<strong>Data Privacy & Compliance Architecture</strong><br>
        We adopt a <strong>Zero-Trust</strong> approach. All enterprise data remains within your sovereign cloud environment. We deploy data-masking pipelines for PII before it ever hits an LLM, ensuring strict compliance with corporate security policies.`,
                faq_timeline: `<strong>Strategic Delivery Timeline</strong><br>
        Our delivery is phased for rapid value realization:<br>
        • <strong>Weeks 1-2:</strong> Architecture Assessment & ROI Mapping.<br>
        • <strong>Weeks 3-6:</strong> Secure PoC and baseline workflows.<br>
        • <strong>Weeks 7-12:</strong> Enterprise-grade scaling and full deployment.`,
                faq_onprem: `<strong>On-Premise vs. Sovereign Cloud AI</strong><br>
        Absolutely. For clients with maximum security requirements, we build and deploy highly optimized models locally on your own GPU clusters using <strong>vLLM</strong> or <strong>TGI</strong>, guaranteeing that not a single token leaves your network.`,
                faq_governance: `<strong>AI Governance Framework</strong><br>
        Governance isn't just compliance—it's control. We implement robust frameworks to monitor model behavior, audit decision-making processes, and enforce strict role-based access control (RBAC). This ensures your AI operates ethically, transparently, and aligned with enterprise policies.`,
                faq_drift: `<strong>Preventing Model Drift & Hallucinations</strong><br>
        AI models degrade over time as real-world data changes. We establish continuous evaluation pipelines (MLOps) that detect semantic drift, alert engineers, and trigger automated retraining loops. Additionally, we use statistical verification to ground outputs and strictly suppress hallucinations.`,
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
            chipRag: 'RAG بدون تهييس',
            chipAgent: 'مسارات عمل الوكلاء',
            chipCost: 'تقليل تكلفة الـ LLMs',
            chipTogaf: 'ركائز الـ AI',
            chipReliability: 'أمان واعتمادية الـ AI',
            chatPlaceholder: 'اسأل عن بنية الذكاء الاصطناعي، التكاليف، خطوط البيانات...',
            modeStandard: 'الوضع القياسي',
            modePremium: 'الوضع المتقدم',
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
            integrationTitle: 'التكامل التقني-التجاري',
            integrationSubtitle: 'الفلسفة المعمارية التي تسد الفجوة بين هندسة التكنولوجيا العميقة وأهداف البيزنس الاستراتيجية.',
            integrationPillar1Title: '1. التوافق الاستراتيجي',
            integrationPillar1Desc: 'كل قرار تقني مرتبط بنتيجة تجارية—حل المشكلات، تحسين التكاليف، أو خلق إيرادات جديدة.',
            integrationPillar2Title: '2. بناء الأصول الرقمية',
            integrationPillar2Desc: 'تصميم أنظمة ذكاء اصطناعي وخطوط بيانات مخصصة لتحويل بيانات الشركة إلى أصل رقمي محمي ومربح.',
            integrationPillar3Title: '3. التنفيذ الهندسي المتكامل',
            integrationPillar3Desc: 'نشر أنظمة ذكاء اصطناعي قابلة للتوسع وآمنة عبر عمليات الـ MLOps لتلبية متطلبات الشركات بموثوقية عالية.',
            integrationPeakTitle: 'عائد استثماري ضخم وميزة تنافسية',
            faqTitle: 'الأسئلة الشائعة (FAQs)',
            faqSubtitle: 'انقر على أي سؤال لعرض رسم توضيحي معماري مفصل.',
            navTechno: 'التآزر بين التقنية والأعمال',
            navArchitecture: 'بنية الذكاء الاصطناعي للمؤسسات',
            navMetrics: 'مؤشرات الأداء والعائد المتوقع',
            navFAQ: 'الأسئلة الاستراتيجية',
            navDevelopers: 'المطورين (قريباً)',
            faqQ1: '1. هل يجب أن أبني ذكاء اصطناعي مخصص أم أستأجر (SaaS)؟',
            faqQ2: '2. كيف يتم مواءمة الهندسة التقنية مع العائد على الاستثمار؟',
            faqQ3: '3. كيف تضمن أمان وموثوقية الذكاء الاصطناعي للمؤسسات؟',
            faqQ4: '4. ما الفرق بين وكلاء الذكاء الاصطناعي وأنظمة RAG العادية؟',
            faqQ5: '5. كيف نبدأ في دمج الذكاء الاصطناعي في مؤسستنا؟',
            faqQ6: '6. كيف تتعامل مع خصوصية البيانات والامتثال؟',
            faqQ7: '7. ما هو الإطار الزمني المعتاد لمشاريع الذكاء الاصطناعي؟',
            faqQ8: '8. هل يمكننا تدريب النماذج على خوادمنا المحلية؟',
            faqQ9: '9. ما هي حوكمة الذكاء الاصطناعي ولماذا هي مهمة جداً؟',
            faqQ10: '10. كيف تمنع انحراف النماذج والهلوسة بمرور الوقت؟',
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
                alignment: `<strong>التوافق الاستراتيجي (Strategic Alignment):</strong><br>
        يجب أن يحل كل قرار تقني في هندسة الذكاء الاصطناعي مشكلة تجارية محددة. نحن نركز على:
        <ul>
            <li><strong>تتبع العائد على الاستثمار:</strong> تحديد مؤشرات الأداء الرئيسية (KPIs) بوضوح قبل كتابة أي كود.</li>
            <li><strong>تحديد أولويات حالات الاستخدام:</strong> اختيار النماذج ذات التأثير العالي والتعقيد المنخفض لضمان نجاح سريع.</li>
        </ul>`,
                asset: `<strong>بناء الأصول (Asset Generation):</strong><br>
        الذكاء الاصطناعي ليس مجرد برمجيات؛ بل هو أصل رقمي. وهذا يشمل:
        <ul>
            <li><strong>خنادق البيانات (Data Moats):</strong> بناء مجموعات بيانات حصرية يصعب على المنافسين تكرارها.</li>
            <li><strong>نماذج مخصصة:</strong> ضبط النماذج الدقيق على بيانات متخصصة لخلق ملكية فكرية (IP) للشركة.</li>
        </ul>`,
                execution: `<strong>التنفيذ الهندسي المتكامل (Engineered Execution):</strong><br>
        الانتقال من بيئة التطوير إلى بيئة الإنتاج بسلاسة. يشمل تنفيذنا:
        <ul>
            <li><strong>عمليات MLOps:</strong> تكامل ونشر مستمر (CI/CD) لنماذج التعلم الآلي لضمان عدم توقف العمل.</li>
            <li><strong>قابلية التوسع:</strong> استخدام Kubernetes والخدمات السحابية لمعالجة أحمال العمل المتغيرة.</li>
        </ul>`,
                roi: `<strong>عائد استثماري ضخم وميزة تنافسية (High ROI & Competitive Edge):</strong><br>
        الهدف النهائي للتكامل التقني-التجاري. من خلال مواءمة الاستراتيجية مع التنفيذ الهندسي، تحقق المؤسسات:
        <ul>
            <li><strong>نمو متسارع:</strong> فتح مصادر دخل جديدة عبر منتجات مدعومة بالذكاء الاصطناعي.</li>
            <li><strong>هيمنة على السوق:</strong> التفوق على المنافسين من خلال استغلال البيانات ومرونة العمليات.</li>
        </ul>`,
                rag_metric: `<strong>المقاييس: الدقة ومكافحة التهييس:</strong><br>
        من خلال هندسة أنظمة RAG ضخمة، نركز على:
        <ul>
            <li><strong>تقليل الهلوسة:</strong> ربط إجابات الذكاء الاصطناعي حصرياً ببيانات المؤسسة الموثوقة.</li>
            <li><strong>دقة السياق:</strong> استخدام البحث الهجين وطبقات إعادة الترتيب (Reranking) لاسترجاع أدق المستندات.</li>
            <li><strong>التخصص في المجال:</strong> تخصيص نماذج الـ Embedding لفهم المصطلحات الصناعية المعقدة.</li>
        </ul>`,
                model_metric: `<strong>المقاييس: تخصيص النماذج والبيانات:</strong><br>
        البيانات هي الوقود، والنماذج هي المحركات. تركيزنا يشمل:
        <ul>
            <li><strong>الضبط الدقيق (PEFT/LoRA):</strong> تخصيص النماذج مفتوحة المصدر لبيانات الشركة دون التكاليف الباهظة للتدريب الكامل.</li>
            <li><strong>خطوط نقل بيانات (ELT) مؤتمتة:</strong> بناء مسارات تنظف وتهيكل وتدفق البيانات بسلاسة للذكاء الاصطناعي.</li>
            <li><strong>خنادق البيانات:</strong> تحويل البيانات التشغيلية الخام إلى أصول حصرية وآمنة.</li>
        </ul>`,
                cost_metric: `<strong>المقاييس: كفاءة التكلفة والمرونة:</strong><br>
        يجب أن يضاعف الذكاء الاصطناعي أرباحك، لا ميزانيتك. استراتيجياتنا للتحسين:
        <ul>
            <li><strong>أتمتة الوكلاء المستقلين:</strong> استبدال مسارات العمل اليدوية المكلفة بوكلاء ذكاء اصطناعي متخصصين.</li>
            <li><strong>البنية التحتية كأكواد (IaC):</strong> نشر وتوسيع بنية الذكاء الاصطناعي بسرعة لتقليل التكاليف التشغيلية.</li>
            <li><strong>تحسين استهلاك التوكنز:</strong> تطبيق الكاش الدلالي وضغط الـ Prompts لتقليل فواتير واجهات الـ LLM.</li>
        </ul>`,
                greeting: `أهلاً بك يا فندم! أنا التوأم الذكي للبشمهندس المهدي. أقدر أساعدك إزاي النهاردة في استكشاف بنى الذكاء الاصطناعي، الأنظمة الموزعة، أو استراتيجيات تقليل التكاليف؟`,
                about: `<strong>البشمهندس أحمد المهدي - إستشاري ذكاء اصطناعي:</strong><br>
        أحمد هو خبير في الأنظمة الموزعة ومعماري ذكاء اصطناعي بخبرة تزيد عن 10 سنوات، متخصص في بناء وإدارة تطبيقات الذكاء الاصطناعي الآمنة والموفرة للمؤسسات.
        <br><br>
         أودّ تحليل قيود نظامك بالتحديد. تواصل مع المهدي عبر <a href="https://www.linkedin.com/in/agelmahdi" target="_blank" style="color: #000000ff; font-weight: bold; text-decoration: underline;">لينكدإن</a> أو أرسل رسالة عبر <a href="https://wa.me/201558333533" target="_blank" style="color: #000000ff; font-weight: bold; text-decoration: underline;">واتساب</a> لمناقشة هذه البنية بمزيد من التفصيل!`,
                fallback: `أودّ تحليل قيود نظامك بالتحديد. تواصل مع المهدي عبر <a href="https://www.linkedin.com/in/agelmahdi" target="_blank" style="color: #000000ff; font-weight: bold; text-decoration: underline;">لينكدإن</a> أو أرسل رسالة عبر <a href="https://wa.me/201558333533" target="_blank" style="color: #000000ff; font-weight: bold; text-decoration: underline;">واتساب</a> لمناقشة هذه البنية بمزيد من التفصيل!`,
                faq_build: `<strong>بناء الذكاء الاصطناعي أم شراؤه: الخيار الاستراتيجي</strong><br>
        استئجار واجهات الذكاء الاصطناعي الجاهزة (APIs) مفيد للنماذج الأولية، لكن بناء بنيتك التحتية الخاصة هو ما يميز الشركات الرائدة.<br>
        <div class="build-vs-buy-grid" style="margin-top: 15px;" dir="rtl">
            <div class="buy-card" style="width: 100%;">
                <h3 style="text-align: center;">الاستئجار (APIs/SaaS)</h3>
                <ul>
                    <li>❌ تكاليف مستمرة لكل Token</li>
                    <li>❌ مخاطر تسريب خصوصية البيانات</li>
                    <li>❌ قدرات عامة (لا توفر ميزة تنافسية)</li>
                </ul>
            </div>
            <div class="vs-badge">ضـد</div>
            <div class="build-card glowing-border" style="width: 100%;">
                <h3 style="text-align: center;">بناء أنظمة ذكية مخصصة</h3>
                <ul>
                    <li>✅ سيادة مطلقة على البيانات</li>
                    <li>✅ أمان صارم (Zero-Trust) وتوافق</li>
                    <li>✅ ملكية فكرية وحلول مخصصة لمجالك</li>
                </ul>
                <div class="build-peak-icon">👑</div>
            </div>
        </div>`,
                faq_roi: `<strong>التكامل التقني والتجاري</strong><br>
        نحن نسد الفجوة بين التقنية العميقة وأهداف العمل لضمان أعلى عائد على الاستثمار (ROI).<br>
        <div class="value-pipeline" style="margin-top: 15px; padding: 1rem; border-radius: 8px;" dir="rtl">
            <div class="pipeline-node" style="padding: 10px; margin-bottom: 10px;">
                <div class="node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg></div>
                <div class="node-content">
                    <h3 style="font-size: 1rem;">1. المواءمة الاستراتيجية</h3>
                </div>
            </div>
            <div class="pipeline-node" style="padding: 10px; margin-bottom: 10px;">
                <div class="node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><path d="M6 3h12l4 6-10 13L2 9z"></path><path d="M11 3 8 9l4 13 4-13-3-6"></path><path d="M2 9h20"></path></svg></div>
                <div class="node-content">
                    <h3 style="font-size: 1rem;">2. بناء الأصول الرقمية</h3>
                </div>
            </div>
            <div class="pipeline-node" style="padding: 10px; margin-bottom: 10px;">
                <div class="node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></div>
                <div class="node-content">
                    <h3 style="font-size: 1rem;">3. التنفيذ الهندسي المتكامل</h3>
                </div>
            </div>
            <div class="pipeline-peak" style="padding: 10px;">
                <h3 style="font-size: 1.1rem; text-align: center; color: var(--gold); margin: 0;">عائد استثماري ضخم وميزة تنافسية</h3>
            </div>
        </div>`,
                faq_security: `<strong>أمان وموثوقية الذكاء الاصطناعي</strong><br>
        استناداً لمبادئ هندسة الموثوقية (SRE)، تُبنى أنظمتنا لتتحمل متطلبات المؤسسات الكبرى وتضمن حماية البيانات.<br>
        <div style="background: rgba(15, 23, 42, 0.4); border: 1px solid rgba(234, 88, 12, 0.3); border-radius: 12px; padding: 1.2rem; margin-top: 15px; text-align: center;" dir="rtl">
            <div style="font-size: 2.5rem; margin-bottom: 10px;">🔒</div>
            <ul style="text-align: right; list-style: none; padding: 0;">
                <li style="margin-bottom: 8px; color: var(--text-main);">🛡️ <strong>بنية خالية من الثقة (Zero-Trust)</strong></li>
                <li style="margin-bottom: 8px; color: var(--text-main);">🔄 <strong>خدمات مصغرة ذاتية التعافي</strong></li>
                <li style="margin-bottom: 8px; color: var(--text-main);">🚫 <strong>جدران حماية ضد الاختراق (Prompt Injection)</strong></li>
                <li style="color: var(--text-main);">⚙️ <strong>مسارات نشر وتشغيل مؤتمتة (MLOps)</strong></li>
            </ul>
        </div>`,
                faq_agents: `<strong>وكلاء الذكاء الاصطناعي مقابل الـ RAG العادي</strong><br>
        نظام الـ RAG الأساسي يقتصر على استرجاع المستندات وتلخيصها؛ وهو نظام سلبي.<br>
        أما <strong>وكلاء الذكاء الاصطناعي (Agentic AI)</strong> فهي أنظمة استباقية. نقوم ببناء أنظمة إشرافية تقسم المهام المعقدة وتوجهها لوكلاء فرعيين متخصصين لتنفيذ خطوات متعددة (مثل الاستعلام من قواعد البيانات، استدعاء واجهات برمجة التطبيقات APIs، وإنشاء التقارير) والتحقق من صحتها قبل الرد.`,
                faq_start: `<strong>نقطة البداية: التقييم المعماري</strong><br>
        نبدأ بتقييم البنية التحتية لبياناتك وتحديد حالات الاستخدام ذات العائد الاستثماري الأعلى (High-ROI). بناءً على ذلك، نصمم نموذج إثبات المفهوم (PoC) باستخدام ركائز هندسة الذكاء الاصطناعي لإثبات القيمة الفعلية خلال أسابيع معدودة.`,
                faq_privacy: `<strong>بنية الخصوصية والامتثال للبيانات</strong><br>
        نحن نعتمد نهج <strong>Zero-Trust</strong> (انعدام الثقة). تظل جميع بيانات المؤسسة داخل بيئتك السحابية. نقوم ببناء مسارات لحجب البيانات الحساسة (PII) قبل وصولها لأي نموذج ذكاء اصطناعي، مما يضمن التوافق التام مع سياسات الأمان.`,
                faq_timeline: `<strong>الإطار الزمني الاستراتيجي للتنفيذ</strong><br>
        يتم التسليم على مراحل لضمان تحقيق قيمة سريعة:<br>
        • <strong>الأسابيع 1-2:</strong> التقييم المعماري وتحديد العائد على الاستثمار.<br>
        • <strong>الأسابيع 3-6:</strong> إطلاق نموذج إثبات المفهوم (PoC) وبناء مسارات الوكلاء الأساسية.<br>
        • <strong>الأسابيع 7-12:</strong> التوسع المؤسسي والنشر النهائي للأنظمة.`,
                faq_onprem: `<strong>الاستضافة المحلية للذكاء الاصطناعي</strong><br>
        بالتأكيد. للعملاء ذوي المتطلبات الأمنية القصوى، نقوم ببناء ونشر نماذج محسّنة محلياً على خوادم الـ GPU الخاصة بك باستخدام <strong>vLLM</strong> أو <strong>TGI</strong>، مما يضمن عدم تسريب أي بيانات خارج شبكتك المغلقة.`,
                faq_governance: `<strong>إطار عمل حوكمة الذكاء الاصطناعي</strong><br>
        الحوكمة ليست مجرد امتثال للقوانين—إنها سيطرة تامة. نحن نطبق أطراً قوية لمراقبة سلوك النماذج، تدقيق عمليات اتخاذ القرار، وفرض ضوابط وصول صارمة (RBAC). هذا يضمن أن الذكاء الاصطناعي يعمل بشفافية وبما يتماشى تماماً مع سياسات مؤسستك.`,
                faq_drift: `<strong>منع الانحراف والهلوسة بمرور الوقت</strong><br>
        تتراجع دقة النماذج تدريجياً مع تغير البيانات في العالم الحقيقي. لمنع ذلك، نبني مسارات تقييم مستمرة (MLOps) تكتشف الانحراف الدلالي وتُفعّل دورات إعادة التدريب تلقائياً. كما نستخدم آليات تحقق إحصائية لضمان دقة المخرجات وقمع الهلوسة تماماً.`,
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
            closeDrawer();
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
        chatMessages.scrollTo({
            top: chatMessages.scrollHeight,
            behavior: 'smooth'
        });
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

    // --- Techno-Business Integration Pipeline Interactive Sync ---
    document.querySelectorAll('.pipeline-node, .pipeline-peak').forEach(node => {
        node.addEventListener('click', () => {
            const stepId = node.getAttribute('data-step'); // e.g. 'alignment', 'asset', 'execution', 'roi'
            const stepTitle = node.querySelector('h3').textContent;
            
            trackEvent('pipeline_click', { step: stepId, title: stepTitle });

            // Switch to Chat Tab
            switchTab('consultant');

            // Send simulated user query
            const query = currentLang === 'ar' ? `اشرح لي المزيد عن: ${stepTitle}` : `Expand on: ${stepTitle}`;
            addMessage('user', query);

            // Artificial delay before bot replies
            setTimeout(() => {
                handleBotReply(stepId);
            }, 600);
        });
    });

    // --- Metrics Interactive Sync ---
    document.querySelectorAll('.metric-card').forEach(node => {
        node.addEventListener('click', () => {
            const metricId = node.getAttribute('data-metric'); // e.g. 'rag_metric', 'model_metric', 'cost_metric'
            const metricTitle = node.querySelector('h3').textContent;
            
            trackEvent('metric_click', { metric: metricId, title: metricTitle });

            // Switch to Chat Tab
            switchTab('consultant');

            // Send simulated user query
            const query = currentLang === 'ar' ? `ما هي تفاصيل مقياس: ${metricTitle}؟` : `What are the details of the metric: ${metricTitle}?`;
            addMessage('user', query);

            // Artificial delay before bot replies
            setTimeout(() => {
                handleBotReply(metricId);
            }, 600);
        });
    });

    // --- FAQs Interactive Sync ---
    document.querySelectorAll('.faq-card').forEach(node => {
        node.addEventListener('click', () => {
            const faqId = node.getAttribute('data-faq'); // e.g. 'faq_build', 'faq_roi', 'faq_security'
            const faqTitle = node.querySelector('h3').textContent;
            
            trackEvent('faq_click', { faq: faqId, title: faqTitle });

            // Switch to Chat Tab
            switchTab('consultant');

            // Send simulated user query
            addMessage('user', faqTitle);

            // Artificial delay before bot replies
            setTimeout(() => {
                handleBotReply(faqId);
            }, 600);
        });
    });

    // --- Media Reels Hub Subsystem & Interactive Controls ---
    function renderReels() {
        const reelsGrid = document.getElementById('reelsGrid');
        if (!reelsGrid) return;
        
        reelsGrid.innerHTML = '';
        
        reelsData.forEach(reel => {
            const btnText = translations[currentLang]?.viewScriptBtn || 'View Content';
            const reelHTML = `
                <div class="reel-card-wrapper">
                    <div class="reel-outside-actions">
                         <button class="reel-btn view-script-btn" data-reel-id="${reel.id}">
                             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                             <span data-translate="viewScriptBtn">${btnText}</span>
                         </button>
                     </div>
                     <div class="reel-card has-iframe" data-reel-id="${reel.id}">
                        <div class="reel-video-wrapper">
                            <iframe src="${reel.iframeSrc}" width="267" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                        </div>
                     </div>  
                </div>
            `;
            reelsGrid.insertAdjacentHTML('beforeend', reelHTML);
        });
    }

    renderReels();

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

                const reelDef = reelsData.find(r => r.id === reelId);
                const scriptData = reelDef ? reelDef.script[currentLang] : null;
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
            } else {
                const slug = hash.substring(1);
                const slideIndex = sceneSlugs.indexOf(slug);
                if (slideIndex !== -1) {
                    switchTab('portfolio');
                    goToSlide(slideIndex);
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

    // --- Scroll Collapse Logic ---
    let lastScrollTopReels = 0;
    let isTransitioning = false;
    let transitionTimeout;

    function lockScrollEvents() {
        isTransitioning = true;
        if (transitionTimeout) clearTimeout(transitionTimeout);
        transitionTimeout = setTimeout(() => {
            isTransitioning = false;
            const rc = document.getElementById('reelsContainer');
            if (rc) lastScrollTopReels = rc.scrollTop;
        }, 450);
    }

    function toggleHeaderFooter(collapse) {
        if (!appHeader) return;
        const isCollapsed = appHeader.classList.contains('collapsed');
        
        if (collapse && !isCollapsed) {
            appHeader.classList.add('collapsed');
            if (appFooter) appFooter.classList.add('collapsed');
            lockScrollEvents();
        } else if (!collapse && isCollapsed) {
            appHeader.classList.remove('collapsed');
            if (appFooter) appFooter.classList.remove('collapsed');
            lockScrollEvents();
        }
    }
    
    // Simple logic for Chat (only check zero)
    function setupSimpleScrollCollapse(container) {
        if (!container) return;
        container.addEventListener('scroll', () => {
            if (window.innerWidth > 768) return; 
            if (isInitializing) return;
            
            if (container.scrollTop <= 2) {
                toggleHeaderFooter(false);
            } else {
                toggleHeaderFooter(true);
            }
        }, { passive: true });
    }

    // Directional logic for Reels
    function setupDirectionalScrollCollapse(container) {
        if (!container) return;
        container.addEventListener('scroll', () => {
            if (window.innerWidth > 768) return;
            if (isInitializing || isTransitioning) return;
            
            const currentScrollTop = container.scrollTop;
            
            if (currentScrollTop <= 10) {
                toggleHeaderFooter(false);
                lastScrollTopReels = currentScrollTop;
                return;
            }
            
            const deltaY = currentScrollTop - lastScrollTopReels;
            if (Math.abs(deltaY) > 15) {
                if (deltaY > 0 && currentScrollTop > 50) {
                    toggleHeaderFooter(true);
                } else if (deltaY < 0) {
                    toggleHeaderFooter(false);
                }
                lastScrollTopReels = currentScrollTop;
            }
        }, { passive: true });
    }

    // Chat Listeners
    if (chatMessages) {
        setupSimpleScrollCollapse(chatMessages);
    }

    // Reels Listeners
    const reelsContainer = document.getElementById('reelsContainer');
    if (reelsContainer) {
        setupDirectionalScrollCollapse(reelsContainer);
    }
    
    // Expand headers on desktop if resized
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            toggleHeaderFooter(false);
        }
    });
    
    // Bind hashchange listener and execute on initial boot
    window.addEventListener('hashchange', restoreState);
    restoreState();
    isInitializing = false;
    updateUrlHash();
});
