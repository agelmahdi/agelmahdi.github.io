document.addEventListener('DOMContentLoaded', () => {
    // Current active tab state
    let activeTab = 'consultant'; // 'consultant' or 'portfolio'
    let currentLang = 'en'; // 'en' or 'ar'
    let isPremiumMode = false; // false = Standard, true = Enterprise

    // --- Tab Switching Logic ---
    const tabConsultant = document.getElementById('tabConsultant');
    const tabPortfolio = document.getElementById('tabPortfolio');
    const contentConsultant = document.getElementById('contentConsultant');
    const contentPortfolio = document.getElementById('contentPortfolio');

    function switchTab(targetTab) {
        activeTab = targetTab;

        if (targetTab === 'consultant') {
            tabConsultant.classList.add('active');
            tabPortfolio.classList.remove('active');
            contentConsultant.classList.add('active');
            contentPortfolio.classList.remove('active');
            stopAutoPlay(); // Pause carousel autoplay to save CPU when chatting
        } else {
            tabConsultant.classList.remove('active');
            tabPortfolio.classList.add('active');
            contentConsultant.classList.remove('active');
            contentPortfolio.classList.add('active');
            resetAutoPlay(); // Resume autoplay when looking at portfolio
        }
    }

    tabConsultant.addEventListener('click', () => switchTab('consultant'));
    tabPortfolio.addEventListener('click', () => switchTab('portfolio'));


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

    // Predefined structured responses matching Ahmed's expertise (Standard English)
    const botResponses = {
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
        You can explore his career metrics, technical skills, and verified certifications under the <strong>Credentials Board</strong> tab, or connect with him directly via LinkedIn, Email, or WhatsApp (+201558333533) using the contact buttons at the end of the board!`,
        fallback: `I would love to analyze your specific system constraints. Feel free to connect with Ahmed via <a href="https://www.linkedin.com/in/agelmahdi" target="_blank" style="color: #000000ff; font-weight: bold; text-decoration: underline;">Linkedin</a> or drop a message via <a href="https://wa.me/201558333533" target="_blank" style="color: #000000ff; font-weight: bold; text-decoration: underline;">WhatsApp</a> to discuss this architecture further!`,
        
        // AI Engineering Pillars Tailored Responses (English)
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
    };

    // Predefined structured responses matching Ahmed's expertise (Arabic)
    const botResponsesAR = {
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
        greeting: `أهلاً بك يا فندم! أنا التوأم الرقمي للبشمهندس أحمد. أقدر أساعدك إزاي النهاردة في استكشاف بنى الذكاء الاصطناعي، الأنظمة الموزعة، أو استراتيجيات تقليل التكاليف؟`,
        about: `<strong>البشمهندس أحمد المهدي - كبير مهندسي الذكاء الاصطناعي:</strong><br>
        أحمد هو خبير في الأنظمة الموزعة ومعماري ذكاء اصطناعي بخبرة تزيد عن 10 سنوات، متخصص في بناء وإدارة تطبيقات الذكاء الاصطناعي الآمنة والموفرة للمؤسسات.
        <br><br>
        تقدر تشوف أرقام الإنجازات، المهارات التقنية، والشهادات المعتمدة في تبويب <strong>لوحة الاعتمادات والخبرات</strong>، أو تتواصل معاه مباشرة عبر LinkedIn، الإيميل، أو الواتساب (+201558333533) من خلال أزرار الاتصال في آخر اللوحة!`,
        fallback: `ده سؤال ممتاز جداً في هندسة الذكاء الاصطناعي! عشان نعمل ده بشكل احترافي، بنحتاج نفصل مسارات العمل:
        <ul>
            <li>عمل طابور مهام غير متزامن (Asynchronous API Queue) للعمليات الطويلة لتفادي بطء الاستجابة.</li>
            <li>إعداد بيئة تقييم واختبار (Evaluation Benchmarks) زي Ragas لمراقبة زمن الاستجابة وجودة المخرجات.</li>
        </ul>
        يسعدني جداً نناقش تفاصيل حالتك الخاصة. تقدر تتواصل مع البشمهندس أحمد عبر LinkedIn أو تبعتله رسالة مباشرة لمناقشة التفاصيل!`,
        
        // AI Engineering Pillars Tailored Responses (Arabic)
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
    };

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
            phaseHName: 'H: Drift & Feedback'
        },
        ar: {
            tabConsultant: 'مستشار الذكاء الاصطناعي',
            tabPortfolio: 'لوحة الاعتمادات والخبرات',
            brandBadge: 'كبير مهندسي الذكاء الاصطناعي',
            greetingTitle: 'مرحباً بك في معمل هندسة الذكاء الاصطناعي',
            greetingDesc: 'أنا التوأم الرقمي للمهندس أحمد، متخصص في أنظمة الذكاء الاصطناعي الإنتاجية، وبنى الـ RAG، وبيئات الوكلاء الذاتية.',
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
            titleBadge: 'كبير مهندسي الذكاء الاصطناعي',
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
            phaseHName: 'H: إدارة التغيير والتعلم المستمر'
        }
    };

    // Lang toggle event listener
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const nextLang = currentLang === 'en' ? 'ar' : 'en';
            setLanguage(nextLang);
        });
    }

    // Mode toggle event listener (Standard vs Enterprise)
    const modeBtn = document.getElementById('modeBtn');
    const modeText = document.getElementById('modeText');
    if (modeBtn) {
        modeBtn.addEventListener('click', () => {
            isPremiumMode = !isPremiumMode;
            if (isPremiumMode) {
                modeBtn.classList.add('premium-active');
                modeBtn.setAttribute('data-mode', 'premium');
                if (modeText) {
                    modeText.setAttribute('data-translate', 'modePremium');
                    modeText.textContent = translations[currentLang].modePremium;
                }
                
                // Show standard/premium alert message to user in chat
                const welcomeMsg = 
                   `🛡️ <strong>Enterprise Mode Enabled:</strong> Future responses will feature highly detailed technical architectures. For advanced content, please leave a message via <a href="https://wa.me/201558333533" target="_blank" style="color: #000000ff; font-weight: bold; text-decoration: underline;">WhatsApp</a>; we will contact you as soon as possible.`;
                addMessage('bot', welcomeMsg, true);
            } else {
                modeBtn.classList.remove('premium-active');
                modeBtn.setAttribute('data-mode', 'standard');
                if (modeText) {
                    modeText.setAttribute('data-translate', 'modeStandard');
                    modeText.textContent = translations[currentLang].modeStandard;
                }
                
                const welcomeMsg =
                    `💡 <strong>Standard Mode Restored:</strong> Future responses will be concise, high-level summaries.`;
                addMessage('bot', welcomeMsg, true);
            }
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
            : `<div class="avatar-placeholder" style="background:#ffffff; border-radius:50%; font-size:0.75rem; font-weight:800; display:flex; align-items:center; justify-content:center; color:var(--gold); width:100%; height:100%">US</div>`;

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
                    const responses = currentLang === 'ar' ? botResponsesAR : botResponses;
                    responseText = questionKey ? responses[questionKey] : responses.about;
                } else {
                    // Lock premium technical content and show WhatsApp gate message
                    responseText = 
                        `🔒 <strong>Enterprise Architecture Blueprint Locked:</strong> Advanced production plans, GPU topologies, and custom cost optimizations are reserved for advanced content. Please leave a message via <a href="https://wa.me/201558333533" target="_blank" style="color: #000000ff; font-weight: bold; text-decoration: underline;">WhatsApp</a>, and we will contact you as soon as possible to grant access.`;
                }
            } else {
                // Standard mode - show standard concise content
                const responses = currentLang === 'ar' ? botResponsesAR : botResponses;

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
            
            // Switch to Chat Tab
            switchTab('consultant');

            // Generate query text
            const queryText =  `Explain how you apply ${phaseTitle} in AI engineering?`;

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
            switchTab('consultant');
            const queryText =  'How does your AI engineering methodology align with the AI Engineering Pillars?';
            addMessage('user', queryText);
            handleBotReply('togaf');
        });
    }
});
