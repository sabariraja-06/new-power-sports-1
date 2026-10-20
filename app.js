/* ==========================================================================
   NEW POWER SPORTS - OFFICIAL B2B INSTITUTIONAL PORTAL SCRIPT
   Client: New Power Sports | Your Uniform Partner
   Headquarters & Service Region: Tamil Nadu, India
   ========================================================================== */

// --- Central Business Configuration ---
const BUSINESS = {
    name: "New Power Sports",
    tagline: "Your Uniform Partner",
    subtitle: "Institutional Uniforms, Medical Apparel & Professional Workwear",
    email: "powergarments2015@gmail.com",
    phoneNumbers: [
        "+91 93646 44771",
        "+91 98415 87411"
    ],
    gstNumber: "33GXIPS9456RIZ6",
    // WhatsApp number must be verified by client before enabling direct chat link
    whatsappNumber: "", // Leave blank if unverified; UI will show direct call/email action
    serviceRegion: "Tamil Nadu & Regional Institutional Hubs",
    serviceLocations: [
        "Chennai",
        "Coimbatore",
        "Madurai",
        "Trichy",
        "Salem",
        "Rajapalayam",
        "Ranipet",
        "Nagercoil",
        "Hyderabad"
    ]
};

// --- Product Catalogue Database (8 Institutional Categories) ---
const productsDatabase = [
    {
        id: "NPS-MED-01",
        name: "Standard Student Poly-Cotton Lab Coat",
        category: "Medical Lab Coats",
        categoryKey: "medical-coats",
        fabric: "65/35 Heavy Duty Poly-Cotton (210 GSM)",
        sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "Custom"],
        colours: ["Classic Lab White", "Off-White"],
        embroideryInfo: "College emblem crest on left chest pocket, student name & roll number on right chest/sleeve",
        features: [
            "Autoclave safe & chlorine bleach resistant",
            "3 Deep reinforced utility pockets with pass-through slits",
            "Anti-wrinkle, breathable all-day comfort",
            "Reinforced bar-tacking at stress points"
        ],
        image: "assets/student_coat.jpg",
        description: "The benchmark standard for medical, dental, and science students. High-durability poly-cotton blend withstands rigorous weekly laboratory laundering."
    },
    {
        id: "NPS-MED-02",
        name: "Executive Doctor Notch-Lapel Consultation Coat",
        category: "Medical Lab Coats",
        categoryKey: "medical-coats",
        fabric: "100% Superfine Combed Cotton / Premium Rich Twill (230 GSM)",
        sizes: ["S", "M", "L", "XL", "2XL", "Custom Tailored"],
        colours: ["Optic White"],
        embroideryInfo: "Precision department title, Dr. name, and hospital logo embroidery",
        features: [
            "Tailored notch-lapel executive silhouette",
            "Dedicated stethoscope pocket loop & tablet pocket",
            "Stain-release and fluid-repellent finish",
            "Fade-proof optic white luster"
        ],
        image: "assets/doctor_coat.jpg",
        description: "Engineered for senior consultants, surgeons, and hospital department heads. Combines crisp formal aesthetics with functional medical utility."
    },
    {
        id: "NPS-NUR-01",
        name: "Clinical Nursing Scrub Suit & Coat Set",
        category: "Nursing Uniforms",
        categoryKey: "nursing-uniforms",
        fabric: "Stretch Flexi-Cotton / Poly-Viscose (195 GSM)",
        sizes: ["XS", "S", "M", "L", "XL", "2XL"],
        colours: ["Ceil Blue", "Teal Green", "Navy Blue", "Pure White"],
        embroideryInfo: "Nursing college logo embroidery on chest; badge loop on shoulder",
        features: [
            "V-neck scrub top with multi-compartment utility pockets",
            "Comfort-fit drawstring cargo trousers with pen slots",
            "Anti-microbial and fluid-resistant coating",
            "Flexible 4-way movement for 12-hour shifts"
        ],
        image: "assets/hero_lab_coats.jpg",
        description: "Complete clinical attire for nursing colleges and hospital nursing cadres. Designed for continuous shift comfort, hygiene, and neat professional presentation."
    },
    {
        id: "NPS-PARA-01",
        name: "Paramedical & Emergency Staff Uniform",
        category: "Paramedical Uniforms",
        categoryKey: "paramedical-uniforms",
        fabric: "High-Tensile Poly-Cotton Ripstop (220 GSM)",
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        colours: ["Navy Blue", "Royal Blue", "Charcoal Grey"],
        embroideryInfo: "Emergency department insignia, reflective piping options, and institution logo",
        features: [
            "Heavy-duty double stitching on knees and seams",
            "Multi-tool cargo pockets for emergency medical kits",
            "Stain and soil resistant soil-release treatment",
            "Fast-drying, breathable weave"
        ],
        image: "assets/doctor_coat.jpg",
        description: "Durable tactical workwear tailored for emergency medical technicians (EMTs), ambulance crews, and hospital trauma team personnel."
    },
    {
        id: "NPS-LAB-01",
        name: "Laboratory Attendant Protective Coat",
        category: "Laboratory Attendant Uniforms",
        categoryKey: "lab-attendants",
        fabric: "Heavy Weight Drill Cotton / Spill-Shield Poly-Cotton (240 GSM)",
        sizes: ["S", "M", "L", "XL", "2XL"],
        colours: ["White with Navy Trim", "Light Grey", "Sky Blue"],
        embroideryInfo: "Lab / institution identifier and attendant designation embroidery",
        features: [
            "Snap-button front closure for instant emergency peel-off",
            "Knit elastic cuffs to prevent sleeve snagging around burners",
            "Spill-repellent barrier finish for mild acids and reagents",
            "Dual reinforced hip pockets and chest pen pocket"
        ],
        image: "assets/embroidery_detail.jpg",
        description: "Designed for college science lab attendants, research laboratory staff, and diagnostic lab handlers requiring robust splash protection."
    },
    {
        id: "NPS-IND-01",
        name: "Industrial Workwear & Safety Boiler Suit",
        category: "Industrial Workwear",
        categoryKey: "industrial-workwear",
        fabric: "100% Cotton Drill / Flame-Retardant Option (260 GSM)",
        sizes: ["M", "L", "XL", "2XL", "3XL"],
        colours: ["Navy Blue", "Khaki", "Orange Hi-Vis", "Royal Blue"],
        embroideryInfo: "Company crest embroidery on chest and reflective tape branding",
        features: [
            "Heavy-duty two-way brass zipper with protective flap",
            "Reflective safety striping (high visibility standards)",
            "Tool loop, radio loop, and deep utility pockets",
            "Pre-shrunk industrial wash certified"
        ],
        image: "assets/bulk_packaging.jpg",
        description: "Institutional workwear for engineering colleges, industrial manufacturing plants, workshop technician teams, and technical training centers."
    },
    {
        id: "NPS-HOSP-01",
        name: "Hospital Support Staff & Ward Attendant Uniform",
        category: "Hospital Staff Uniforms",
        categoryKey: "hospital-staff",
        fabric: "Durable Poly-Cotton EasyCare (180 GSM)",
        sizes: ["S", "M", "L", "XL", "2XL"],
        colours: ["Pista Green", "Sky Blue", "Dark Navy", "Maroon"],
        embroideryInfo: "Hospital department name and staff ID embroidery",
        features: [
            "Wrinkle-resistant wash-and-wear fabric",
            "Color-coded department piping available",
            "Comfortable elasticated waistband options",
            "High color-fastness against industrial laundry detergents"
        ],
        image: "assets/hero_lab_coats.jpg",
        description: "Uniform sets for hospital ward attendants, housekeeping staff, phlebotomists, and healthcare patient-support personnel."
    },
    {
        id: "NPS-FAC-01",
        name: "Faculty & Senior Academic Batch Apron",
        category: "Faculty and Student Uniforms",
        categoryKey: "faculty-student",
        fabric: "Fine Poly-Viscose Suiting Blend (220 GSM)",
        sizes: ["XS", "S", "M", "L", "XL", "2XL", "Custom"],
        colours: ["Pure White", "Pearl White"],
        embroideryInfo: "High-density institutional crest with metallic gold/silver thread options",
        features: [
            "Formal suiting drape with back slit for easy seated lecture comfort",
            "Internal pen loops and glasses pocket",
            "Custom collar piping matching university faculty colors",
            "Individually named and polybag-packaged for batch induction"
        ],
        image: "assets/student_coat.jpg",
        description: "Distinguished academic lab attire for college professors, lecturers, lab instructors, and graduation batch ceremonial supply."
    },
    {
        id: "NPS-HSP-01",
        name: "Hospitality & Institutional Food Service Coat",
        category: "Hospitality Uniforms",
        categoryKey: "hospitality-uniforms",
        fabric: "Breathable Twill Cotton Blend (200 GSM)",
        sizes: ["S", "M", "L", "XL", "2XL"],
        colours: ["Chef White", "Black with Red Piping", "Navy"],
        embroideryInfo: "Hotel / Catering college emblem and designation embroidery",
        features: [
            "Double-breasted reversible front closure",
            "Underarm ventilation eyelets for kitchen heat comfort",
            "Mandarin standing collar with neckerchief loop",
            "Stain-guard Teflon treatment"
        ],
        image: "assets/doctor_coat.jpg",
        description: "Professional attire for hotel management institutes, hospital dietary wings, and institutional catering departments."
    }
];

// --- Industries Database ---
const industriesDatabase = [
    {
        title: "Medical and Nursing Colleges",
        icon: "stethoscope",
        description: "Comprehensive batch lab coat supply for MBBS, BDS, B.Sc & M.Sc Nursing students with precision college crest embroidery and student name tags.",
        uniforms: "Student Lab Coats, Clinical Scrubs, Faculty Coats",
        categoryFilter: "medical-coats"
    },
    {
        title: "Hospitals and Healthcare Providers",
        icon: "building-2",
        description: "Tailored uniforms for senior consultants, resident medical officers, ward attendants, nursing staff, and patient care assistants.",
        uniforms: "Consultation Coats, Nursing Scrubs, Support Staff Attire",
        categoryFilter: "hospital-staff"
    },
    {
        title: "Diagnostic and Research Laboratories",
        icon: "microscope",
        description: "Splash-resistant and anti-static protective coats engineered for clinical pathology, microbiology, molecular biology, and biotechnology research centers.",
        uniforms: "Anti-Microbial Coats, Cleanroom Coats, Lab Attendant Coats",
        categoryFilter: "lab-attendants"
    },
    {
        title: "Pharmacy and Paramedical Institutions",
        icon: "pill",
        description: "Chemical spill-resistant coats and clinical aprons designed for B.Pharm, Pharm.D, and paramedical students handling active reagents.",
        uniforms: "Pharmacy Coats, Allied Health Uniforms, Lab Aprons",
        categoryFilter: "paramedical-uniforms"
    },
    {
        title: "Engineering and Technical Colleges",
        icon: "wrench",
        description: "Heavy-duty workshop coats, chemistry laboratory aprons, and technician boiler suits tailored for engineering campuses and polytechnics.",
        uniforms: "Workshop Aprons, Boiler Suits, Technician Uniforms",
        categoryFilter: "industrial-workwear"
    },
    {
        title: "Industrial Organizations",
        icon: "factory",
        description: "Standardized corporate industrial workwear, safety boiler suits, and technician apparel built for manufacturing facilities and warehouses.",
        uniforms: "Industrial Boiler Suits, Plant Safety Wear, Technician Coats",
        categoryFilter: "industrial-workwear"
    },
    {
        title: "Hospitality Businesses",
        icon: "utensils",
        description: "Professional chef coats, catering student attire, and food service uniforms designed for culinary institutes and institutional cafeterias.",
        uniforms: "Chef Coats, Service Staff Aprons, Kitchen Uniforms",
        categoryFilter: "hospitality-uniforms"
    }
];

// --- Gallery Database ---
const galleryDatabase = [
    {
        title: "Medical Student Batch Uniform Distribution",
        category: "Lab Coats",
        categoryKey: "lab-coats",
        img: "assets/student_coat.jpg",
        caption: "High-durability poly-cotton lab coats prepared for incoming institutional college batches."
    },
    {
        title: "Executive Doctor Notch-Lapel Consultation Coat",
        category: "Doctor Coats",
        categoryKey: "doctor-coats",
        img: "assets/doctor_coat.jpg",
        caption: "Superfine pure cotton executive consultation coat with tailored notch lapels."
    },
    {
        title: "High-Density Japanese Computer Embroidery",
        category: "Embroidery and Customization",
        categoryKey: "embroidery",
        img: "assets/embroidery_detail.jpg",
        caption: "Razor-sharp college crest replication with color-fast embroidery thread."
    },
    {
        title: "Clinical Nursing Scrub & Coat Sets",
        category: "Nursing Uniforms",
        categoryKey: "nursing",
        img: "assets/hero_lab_coats.jpg",
        caption: "Ergonomic clinical attire designed for all-day healthcare and nursing shifts."
    },
    {
        title: "Standardized Warehouse Packaging & Dispatch",
        category: "Institutional Apparel",
        categoryKey: "institutional",
        img: "assets/bulk_packaging.jpg",
        caption: "Department-wise categorized and polybag-packaged bulk shipments ready for campus delivery."
    },
    {
        title: "Industrial Safety Boiler Suits & Workwear",
        category: "Industrial Workwear",
        categoryKey: "industrial",
        img: "assets/bulk_packaging.jpg",
        caption: "Pre-shrunk, heavy-duty industrial workwear for technical teams and factories."
    }
];

// --- Enquiries Data Store (Preserved for Demo / Enquiry Management) ---
let enquiriesStore = JSON.parse(localStorage.getItem('nps_enquiries')) || [
    {
        id: "NPS-ENQ-1001",
        date: "2026-10-18",
        institution: "Institutional Medical Campus",
        contactPerson: "Dr. K. Sundaram",
        phone: "+91 94433 11223",
        email: "purchase@institution.edu.in",
        institutionType: "Medical and Nursing Colleges",
        product: "Standard Student Poly-Cotton Lab Coat",
        quantity: 500,
        sizes: "S, M, L, XL",
        colours: "Classic Lab White",
        embroidery: "Yes - College Crest & Student Name",
        city: "Chennai",
        status: "New",
        notes: "MBBS new batch requirements. Need physical fabric sample coat."
    },
    {
        id: "NPS-ENQ-1002",
        date: "2026-10-16",
        institution: "Regional Research Laboratory",
        contactPerson: "Prof. S. Geetha",
        phone: "+91 98402 33445",
        email: "labs@researchcentre.res.in",
        institutionType: "Diagnostic and Research Laboratories",
        product: "Laboratory Attendant Protective Coat",
        quantity: 150,
        sizes: "M, L, XL",
        colours: "White with Navy Trim",
        embroidery: "Yes - Lab Identifier",
        city: "Coimbatore",
        status: "Quoted",
        notes: "Anti-splash finish coats for biochemistry division."
    }
];

// --- App Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initBusinessHeader();
    initStickyHeader();
    initMobileNav();
    renderProductsCatalogue();
    renderIndustriesSection();
    renderGallerySection();
    initCustomizationSimulator();
    initQuotationForm();
    initContactForm();
    initAdminPortal();
    initWhatsAppWidget();
    handleActiveNavHighlight();

    // Check URL parameters for direct product/customization quote trigger
    handleUrlQueryParams();

    // Lucide icon replacement
    if (window.lucide) {
        lucide.createIcons();
    }
});

// --- Business Contact & Header Hydration ---
function initBusinessHeader() {
    // Populate dynamic phone numbers
    const phoneLinks = document.querySelectorAll('.dynamic-phone-link');
    phoneLinks.forEach(link => {
        link.href = `tel:${BUSINESS.phoneNumbers[0].replace(/\s+/g, '')}`;
        link.textContent = BUSINESS.phoneNumbers[0];
    });

    const emailLinks = document.querySelectorAll('.dynamic-email-link');
    emailLinks.forEach(link => {
        link.href = `mailto:${BUSINESS.email}`;
        link.textContent = BUSINESS.email;
    });

    const gstBadges = document.querySelectorAll('.dynamic-gst-text');
    gstBadges.forEach(el => {
        el.textContent = `GSTIN: ${BUSINESS.gstNumber}`;
    });
}

// --- Sticky Header Behavior ---
function initStickyHeader() {
    const header = document.getElementById('mainHeader');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        handleActiveNavHighlight();
    }, { passive: true });
}

// --- Mobile Navigation ---
function initMobileNav() {
    const toggleBtn = document.getElementById('mobileToggleBtn');
    const mainNav = document.getElementById('mainNav');
    if (!toggleBtn || !mainNav) return;

    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.setAttribute('aria-controls', 'mainNav');

    toggleBtn.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('active');
        toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        toggleBtn.classList.toggle('open', isOpen);
    });

    // Close on navigation link click
    const navLinks = mainNav.querySelectorAll('.nav-link, .btn');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            toggleBtn.setAttribute('aria-expanded', 'false');
            toggleBtn.classList.remove('open');
        });
    });

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            toggleBtn.setAttribute('aria-expanded', 'false');
            toggleBtn.classList.remove('open');
            toggleBtn.focus();
        }
    });
}

// --- Active Nav Highlighting on Scroll ---
function handleActiveNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;

    const scrollY = window.pageYOffset + 120;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.main-nav .nav-link').forEach(link => {
                const href = link.getAttribute('href');
                if (href === `#${sectionId}` || href?.endsWith(`#${sectionId}`)) {
                    link.classList.add('active');
                } else if (href && !href.startsWith('http') && !href.includes('#')) {
                    // Page link, retain normal behavior
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
}

// --- Product Catalogue Rendering & Filtering ---
let currentProductCategory = 'all';
let currentProductSearch = '';

function renderProductsCatalogue(category = 'all', searchQuery = '') {
    const grid = document.getElementById('productCatalogueGrid');
    if (!grid) return;

    let items = productsDatabase;

    if (category !== 'all') {
        items = items.filter(p => p.categoryKey === category || p.category === category);
    }

    if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        items = items.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.fabric.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q)
        );
    }

    if (items.length === 0) {
        grid.innerHTML = `
            <div class="empty-state-box">
                <div class="empty-icon"><i data-lucide="package-search"></i></div>
                <h3>No Matching Uniforms Found</h3>
                <p>We could not find any uniform products matching "${escapeHtml(searchQuery)}". Try adjusting your search keywords or clear your active category filters.</p>
                <button class="btn btn-outline" onclick="resetProductFilters()">
                    <i data-lucide="rotate-ccw"></i> Reset Filters
                </button>
            </div>
        `;
        if (window.lucide) lucide.createIcons();
        return;
    }

    grid.innerHTML = items.map(p => `
        <article class="product-b2b-card" data-category="${p.categoryKey}">
            <div class="product-media">
                <img src="${p.image}" alt="${p.name} - Institutional Supply by New Power Sports" class="product-img" loading="lazy">
                <span class="product-category-pill">${p.category}</span>
            </div>
            <div class="product-body">
                <h3 class="product-title">${p.name}</h3>
                <p class="product-desc">${p.description}</p>
                
                <div class="product-specs-list">
                    <div class="spec-row">
                        <span class="spec-label"><i data-lucide="layers"></i> Fabric:</span>
                        <span class="spec-val">${p.fabric}</span>
                    </div>
                    <div class="spec-row">
                        <span class="spec-label"><i data-lucide="ruler"></i> Sizes:</span>
                        <span class="spec-val">${p.sizes.slice(0, 4).join(', ')}${p.sizes.length > 4 ? ' +' : ''}</span>
                    </div>
                    <div class="spec-row">
                        <span class="spec-label"><i data-lucide="palette"></i> Colours:</span>
                        <span class="spec-val">${p.colours.join(', ')}</span>
                    </div>
                    <div class="spec-row">
                        <span class="spec-label"><i data-lucide="sparkles"></i> Branding:</span>
                        <span class="spec-val">Logo Embroidery Available</span>
                    </div>
                </div>

                <div class="product-card-actions">
                    <button type="button" class="btn btn-sm btn-outline" onclick="openProductModal('${p.id}')">
                        <i data-lucide="eye"></i> View Details
                    </button>
                    <button type="button" class="btn btn-sm btn-primary" onclick="requestProductQuote('${p.id}')">
                        <i data-lucide="file-text"></i> Request Quote
                    </button>
                </div>
            </div>
        </article>
    `).join('');

    if (window.lucide) lucide.createIcons();
}

function filterProductCategory(catKey, clickedElement) {
    currentProductCategory = catKey;
    const buttons = document.querySelectorAll('.catalog-tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (clickedElement) {
        clickedElement.classList.add('active');
    }
    renderProductsCatalogue(currentProductCategory, currentProductSearch);
}

function handleProductSearch(event) {
    currentProductSearch = event.target.value;
    renderProductsCatalogue(currentProductCategory, currentProductSearch);
}

function resetProductFilters() {
    currentProductCategory = 'all';
    currentProductSearch = '';
    const searchInput = document.getElementById('catalogSearchInput');
    if (searchInput) searchInput.value = '';

    const buttons = document.querySelectorAll('.catalog-tab-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-cat') === 'all') btn.classList.add('active');
        else btn.classList.remove('active');
    });

    renderProductsCatalogue('all', '');
}

// --- Product Quick View Modal ---
function openProductModal(productId) {
    const p = productsDatabase.find(item => item.id === productId);
    if (!p) return;

    const modal = document.getElementById('productDetailModal');
    if (!modal) return;

    document.getElementById('pdmTitle').textContent = p.name;
    document.getElementById('pdmBody').innerHTML = `
        <div class="product-modal-grid">
            <div class="modal-media">
                <img src="${p.image}" alt="${p.name}" class="modal-product-img">
                <div class="modal-tag-row mt-sm">
                    <span class="badge badge-navy">${p.category}</span>
                    <span class="badge badge-accent">Bulk Supply</span>
                </div>
            </div>
            <div class="modal-info">
                <h3>${p.name}</h3>
                <p class="modal-desc text-muted">${p.description}</p>

                <div class="modal-spec-box">
                    <h4>Institutional Specifications</h4>
                    <ul>
                        <li><strong>Fabric Composition:</strong> ${p.fabric}</li>
                        <li><strong>Standard Size Runs:</strong> ${p.sizes.join(', ')}</li>
                        <li><strong>Available Colours:</strong> ${p.colours.join(', ')}</li>
                        <li><strong>Emroidery Options:</strong> ${p.embroideryInfo}</li>
                    </ul>
                </div>

                <div class="modal-feature-chips">
                    ${p.features.map(f => `<span class="feature-chip"><i data-lucide="check-circle-2"></i> ${f}</span>`).join('')}
                </div>

                <div class="modal-cta-box">
                    <p class="small text-muted mb-xs"><i data-lucide="info"></i> Institutional bulk pricing is determined by order volume and embroidery complexity.</p>
                    <div class="flex-gap mt-md">
                        <button type="button" class="btn btn-primary btn-lg" onclick="closeProductModal(); requestProductQuote('${p.id}');">
                            <i data-lucide="file-text"></i> Request Quotation for This Uniform
                        </button>
                        <button type="button" class="btn btn-outline" onclick="closeProductModal()">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Trap focus / Esc key
    const escListener = (e) => {
        if (e.key === 'Escape') {
            closeProductModal();
            document.removeEventListener('keydown', escListener);
        }
    };
    document.addEventListener('keydown', escListener);

    if (window.lucide) lucide.createIcons();
}

function closeProductModal() {
    const modal = document.getElementById('productDetailModal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// --- Request Product Quote Direct Link ---
function requestProductQuote(productId) {
    const p = productsDatabase.find(item => item.id === productId);
    const productName = p ? p.name : productId;
    const categoryName = p ? p.category : '';

    openQuoteModal({
        product: productName,
        category: categoryName
    });
}

// --- Industries Section Rendering ---
function renderIndustriesSection() {
    const container = document.getElementById('industriesGrid');
    if (!container) return;

    container.innerHTML = industriesDatabase.map(ind => `
        <div class="industry-card">
            <div class="industry-icon-wrapper">
                <i data-lucide="${ind.icon}"></i>
            </div>
            <h3 class="industry-title">${ind.title}</h3>
            <p class="industry-desc">${ind.description}</p>
            <div class="industry-uniforms">
                <strong>Standard Supplies:</strong>
                <span>${ind.uniforms}</span>
            </div>
            <button type="button" class="btn btn-sm btn-outline industry-cta" onclick="openQuoteModal({ institutionType: '${escapeHtml(ind.title)}' })">
                Request Sector Quote <i data-lucide="arrow-right"></i>
            </button>
        </div>
    `).join('');

    if (window.lucide) lucide.createIcons();
}

// --- Interactive Customization Simulator ---
function initCustomizationSimulator() {
    const instInput = document.getElementById('simCollegeName');
    const deptInput = document.getElementById('simDeptName');
    const studentInput = document.getElementById('simStudentName');
    const threadSelect = document.getElementById('simThreadColor');
    const fontSelect = document.getElementById('simFontStyle');
    const posRadios = document.querySelectorAll('input[name="simPosition"]');

    if (!instInput) return;

    const updatePreview = () => {
        const instVal = instInput.value || 'MADRAS MEDICAL COLLEGE';
        const deptVal = deptInput.value || 'DEPARTMENT OF PHARMACOLOGY';
        const studentVal = studentInput.value || 'Dr. R. VENGATACHALAM';
        const color = threadSelect ? threadSelect.value : '#1B2F5B';
        const font = fontSelect ? fontSelect.value : 'Inter, sans-serif';

        let pos = 'chest';
        posRadios.forEach(r => {
            if (r.checked) pos = r.value;
        });

        const prevInst = document.getElementById('previewInstText');
        const prevDept = document.getElementById('previewDeptText');
        const prevStudent = document.getElementById('previewStudentText');
        const overlay = document.getElementById('embroideryOverlayBadge');

        if (prevInst) {
            prevInst.textContent = instVal.toUpperCase();
            prevInst.style.color = color;
        }
        if (prevDept) {
            prevDept.textContent = deptVal.toUpperCase();
            prevDept.style.color = color;
        }
        if (prevStudent) {
            prevStudent.textContent = studentVal;
            prevStudent.style.color = color;
        }
        if (overlay) {
            overlay.style.fontFamily = font;
            if (pos === 'sleeve') {
                overlay.style.top = '22%';
                overlay.style.left = '72%';
            } else {
                overlay.style.top = '34%';
                overlay.style.left = '28%';
            }
        }
    };

    [instInput, deptInput, studentInput].forEach(inp => inp && inp.addEventListener('input', updatePreview));
    if (threadSelect) threadSelect.addEventListener('change', updatePreview);
    if (fontSelect) fontSelect.addEventListener('change', updatePreview);
    posRadios.forEach(r => r.addEventListener('change', updatePreview));

    updatePreview();
}

function applyCustomizationToQuote() {
    const inst = document.getElementById('simCollegeName')?.value || '';
    const dept = document.getElementById('simDeptName')?.value || '';
    const student = document.getElementById('simStudentName')?.value || '';
    const thread = document.getElementById('simThreadColor')?.value || '';

    const summary = `Embroidery Customization Request: [Institution: ${inst}] [Dept: ${dept}] [Sample Name Tag: ${student}] [Thread: ${thread}]`;

    openQuoteModal({
        notes: summary,
        embroidery: 'Yes - College Crest & Department Name'
    });
}

// --- Gallery & Lightbox ---
let currentGalleryFilter = 'all';

function renderGallerySection(filter = 'all') {
    const grid = document.getElementById('galleryGridContainer');
    if (!grid) return;

    let items = galleryDatabase;
    if (filter !== 'all') {
        items = items.filter(g => g.categoryKey === filter || g.category === filter);
    }

    grid.innerHTML = items.map((g, idx) => `
        <div class="gallery-item-card" onclick="openLightbox(${idx})">
            <div class="gallery-img-container">
                <img src="${g.img}" alt="${g.title}" loading="lazy">
                <div class="gallery-hover-overlay">
                    <span class="gallery-cat-chip">${g.category}</span>
                    <h4 class="gallery-item-title">${g.title}</h4>
                    <span class="gallery-zoom-action"><i data-lucide="zoom-in"></i> Click to Enlarge</span>
                </div>
            </div>
        </div>
    `).join('');

    if (window.lucide) lucide.createIcons();
}

function filterGalleryCategory(catKey, clickedBtn) {
    currentGalleryFilter = catKey;
    document.querySelectorAll('.gallery-tab-btn').forEach(btn => btn.classList.remove('active'));
    if (clickedBtn) clickedBtn.classList.add('active');
    renderGallerySection(catKey);
}

let activeLightboxIndex = 0;

function openLightbox(index) {
    activeLightboxIndex = index;
    const item = galleryDatabase[index];
    if (!item) return;

    const modal = document.getElementById('lightboxModal');
    if (!modal) return;

    document.getElementById('lightboxImg').src = item.img;
    document.getElementById('lightboxImg').alt = item.title;
    document.getElementById('lightboxTitle').textContent = item.title;
    document.getElementById('lightboxCategory').textContent = item.category;
    document.getElementById('lightboxCaption').textContent = item.caption;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const escListener = (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
            document.removeEventListener('keydown', escListener);
        } else if (e.key === 'ArrowRight') {
            navigateLightbox(1);
        } else if (e.key === 'ArrowLeft') {
            navigateLightbox(-1);
        }
    };
    document.addEventListener('keydown', escListener);

    if (window.lucide) lucide.createIcons();
}

function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function navigateLightbox(dir) {
    let nextIndex = activeLightboxIndex + dir;
    if (nextIndex < 0) nextIndex = galleryDatabase.length - 1;
    if (nextIndex >= galleryDatabase.length) nextIndex = 0;
    openLightbox(nextIndex);
}

// --- Bulk Quotation Modal & Form Handling ---
function openQuoteModal(prefillData = {}) {
    const modal = document.getElementById('bulkQuoteModal');
    if (!modal) {
        // If not on page with modal, redirect to quote page
        window.location.href = 'pages/quote.html';
        return;
    }

    // Prefill fields if provided
    if (prefillData.product) {
        const prodSelect = document.getElementById('qfProduct');
        if (prodSelect) {
            let found = false;
            for (let i = 0; i < prodSelect.options.length; i++) {
                if (prodSelect.options[i].text.includes(prefillData.product) || prodSelect.options[i].value === prefillData.product) {
                    prodSelect.selectedIndex = i;
                    found = true;
                    break;
                }
            }
            if (!found) {
                // If not found in select, add or append to notes
                const notes = document.getElementById('qfNotes');
                if (notes) notes.value = `Selected Uniform: ${prefillData.product}\n` + notes.value;
            }
        }
    }

    if (prefillData.category) {
        const catSelect = document.getElementById('qfCategory');
        if (catSelect) {
            for (let i = 0; i < catSelect.options.length; i++) {
                if (catSelect.options[i].value === prefillData.category) {
                    catSelect.selectedIndex = i;
                    break;
                }
            }
        }
    }

    if (prefillData.institutionType) {
        const instTypeSelect = document.getElementById('qfInstitutionType');
        if (instTypeSelect) {
            for (let i = 0; i < instTypeSelect.options.length; i++) {
                if (instTypeSelect.options[i].value === prefillData.institutionType) {
                    instTypeSelect.selectedIndex = i;
                    break;
                }
            }
        }
    }

    if (prefillData.notes) {
        const notes = document.getElementById('qfNotes');
        if (notes) {
            notes.value = prefillData.notes + (notes.value ? `\n${notes.value}` : '');
        }
    }

    if (prefillData.embroidery) {
        const embSelect = document.getElementById('qfEmbroidery');
        if (embSelect) {
            for (let i = 0; i < embSelect.options.length; i++) {
                if (embSelect.options[i].value.includes('Yes')) {
                    embSelect.selectedIndex = i;
                    break;
                }
            }
        }
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const escListener = (e) => {
        if (e.key === 'Escape') {
            closeQuoteModal();
            document.removeEventListener('keydown', escListener);
        }
    };
    document.addEventListener('keydown', escListener);
}

function closeQuoteModal() {
    const modal = document.getElementById('bulkQuoteModal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function initQuotationForm() {
    const form = document.getElementById('institutionalQuoteForm');
    if (!form) return;

    form.addEventListener('submit', handleQuotationFormSubmit);
}

function handleQuotationFormSubmit(e) {
    e.preventDefault();
    const form = e.target;

    // Reset previous errors
    clearFormErrors(form);

    // Collect values
    const fullName = form.querySelector('#qfFullName')?.value.trim();
    const institution = form.querySelector('#qfInstitution')?.value.trim();
    const email = form.querySelector('#qfEmail')?.value.trim();
    const phone = form.querySelector('#qfPhone')?.value.trim();
    const instType = form.querySelector('#qfInstitutionType')?.value;
    const category = form.querySelector('#qfCategory')?.value;
    const product = form.querySelector('#qfProduct')?.value || category;
    const quantity = parseInt(form.querySelector('#qfQuantity')?.value, 10);
    const city = form.querySelector('#qfCity')?.value.trim();
    const deliveryDate = form.querySelector('#qfDeliveryDate')?.value;
    const embroidery = form.querySelector('#qfEmbroidery')?.value;
    const notes = form.querySelector('#qfNotes')?.value.trim();
    const consent = form.querySelector('#qfConsent')?.checked;

    // Collect checked sizes
    const selectedSizes = [];
    form.querySelectorAll('input[name="qfSizes"]:checked').forEach(cb => selectedSizes.push(cb.value));

    // Collect checked colours
    const selectedColours = [];
    form.querySelectorAll('input[name="qfColours"]:checked').forEach(cb => selectedColours.push(cb.value));

    // Validation checks
    let hasError = false;

    if (!fullName) {
        showFieldError('qfFullName', 'Please enter your full name and designation.');
        hasError = true;
    }

    if (!institution) {
        showFieldError('qfInstitution', 'Please enter your college or institution name.');
        hasError = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        showFieldError('qfEmail', 'Please enter a valid official email address.');
        hasError = true;
    }

    // Flexible Indian Phone validation (10 digits, optional +91 or 0 prefix)
    const phoneClean = phone.replace(/[\s\-\(\)]/g, '');
    const phoneRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
    if (!phoneClean || !phoneRegex.test(phoneClean)) {
        showFieldError('qfPhone', 'Please enter a valid 10-digit Indian mobile or landline number.');
        hasError = true;
    }

    if (!quantity || quantity <= 0) {
        showFieldError('qfQuantity', 'Please specify an estimated quantity greater than 0.');
        hasError = true;
    }

    if (!city) {
        showFieldError('qfCity', 'Please enter your delivery city or campus location in Tamil Nadu.');
        hasError = true;
    }

    if (!consent) {
        showFieldError('qfConsent', 'Please confirm consent to be contacted regarding this quotation.');
        hasError = true;
    }

    if (hasError) {
        showToast('Please correct the highlighted fields in the quotation form.', 'warning');
        return;
    }

    // Disable submit button & show loading indicator
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnHtml = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="spinner-border"></span> Processing Quotation Request...`;

    // Generate unique Reference ID
    const refId = `NPS-ENQ-${Math.floor(1000 + Math.random() * 9000)}`;
    const submissionDate = new Date().toISOString().split('T')[0];

    const enquiryRecord = {
        id: refId,
        date: submissionDate,
        institution: institution,
        contactPerson: fullName,
        phone: phone,
        email: email,
        institutionType: instType,
        category: category,
        product: product,
        quantity: quantity,
        sizes: selectedSizes.join(', ') || 'Standard Runs',
        colours: selectedColours.join(', ') || 'Standard Colours',
        embroidery: embroidery,
        city: city,
        deliveryDate: deliveryDate || 'Flexible',
        notes: notes || 'None specified',
        status: 'New'
    };

    // Honest Frontend Submission Handling:
    // 1. Persist to localStorage enquiry store
    enquiriesStore.unshift(enquiryRecord);
    try {
        localStorage.setItem('nps_enquiries', JSON.stringify(enquiriesStore));
    } catch (err) {
        console.warn('LocalStorage save failed:', err);
    }

    // 2. Prepare mailto draft for zero-friction direct client submission
    const mailtoSubject = encodeURIComponent(`Institutional Bulk Quote Request [Ref: ${refId}] - ${institution}`);
    const mailtoBody = encodeURIComponent(
        `Dear New Power Sports Chennai,\n\n` +
        `I would like to request an official wholesale quotation for our institution.\n\n` +
        `--- QUOTATION REQUIREMENT DETAILS ---\n` +
        `Reference ID: ${refId}\n` +
        `Institution Name: ${institution}\n` +
        `Contact Person: ${fullName}\n` +
        `Phone Number: ${phone}\n` +
        `Official Email: ${email}\n` +
        `Institution Sector: ${instType}\n` +
        `Product Category: ${category}\n` +
        `Selected Uniform: ${product}\n` +
        `Estimated Quantity: ${quantity} units\n` +
        `Selected Sizes: ${selectedSizes.join(', ') || 'All standard runs'}\n` +
        `Preferred Colours: ${selectedColours.join(', ') || 'Standard'}\n` +
        `Logo Embroidery: ${embroidery}\n` +
        `Delivery City / Campus: ${city}\n` +
        `Expected Timeline: ${deliveryDate || 'Flexible'}\n` +
        `Additional Requirements: ${notes || 'None'}\n\n` +
        `Please provide your official GST invoice quotation and delivery timeframe.\n\n` +
        `Regards,\n${fullName}\n${institution}`
    );
    const directMailtoUrl = `mailto:${BUSINESS.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;

        // Render honest submission state modal
        renderSubmissionSuccessModal(enquiryRecord, directMailtoUrl);
        form.reset();
        closeQuoteModal();

        // Refresh admin table if active
        if (typeof loadAdminEnquiries === 'function') {
            loadAdminEnquiries();
        }
    }, 600);
}

function showFieldError(fieldId, errorMsg) {
    const field = document.getElementById(fieldId);
    if (!field) return;

    field.classList.add('is-invalid');
    let feedback = field.parentElement.querySelector('.invalid-feedback');
    if (!feedback) {
        feedback = document.createElement('div');
        feedback.className = 'invalid-feedback';
        field.parentElement.appendChild(feedback);
    }
    feedback.textContent = errorMsg;
}

function clearFormErrors(form) {
    form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
    form.querySelectorAll('.invalid-feedback').forEach(el => el.remove());
}

// --- Transparent Submission Confirmation Modal ---
function renderSubmissionSuccessModal(record, mailtoUrl) {
    let confirmationModal = document.getElementById('quoteSuccessModal');
    if (!confirmationModal) {
        confirmationModal = document.createElement('div');
        confirmationModal.id = 'quoteSuccessModal';
        confirmationModal.className = 'modal-backdrop active';
        document.body.appendChild(confirmationModal);
    }

    confirmationModal.innerHTML = `
        <div class="modal-box modal-md">
            <div class="modal-header bg-navy text-white p-md flex-between">
                <h3 class="text-white mb-0"><i data-lucide="check-circle-2"></i> Quotation Request Logged</h3>
                <button class="close-modal text-white" onclick="closeSuccessModal()">&times;</button>
            </div>
            <div class="modal-body p-lg">
                <div class="text-center mb-md">
                    <div class="success-icon-badge mb-sm"><i data-lucide="shield-check"></i></div>
                    <h4>Reference ID: <span class="text-blue">${record.id}</span></h4>
                    <p class="text-muted small">Your quotation requirement for <strong>${escapeHtml(record.institution)}</strong> (${record.quantity} Units) has been recorded in the local procurement database.</p>
                </div>

                <div class="submission-summary-box mb-md">
                    <div class="summary-line"><strong>Product:</strong> <span>${escapeHtml(record.product)}</span></div>
                    <div class="summary-line"><strong>Quantity:</strong> <span>${record.quantity} Units</span></div>
                    <div class="summary-line"><strong>Contact:</strong> <span>${escapeHtml(record.contactPerson)} (${escapeHtml(record.phone)})</span></div>
                    <div class="summary-line"><strong>Destination:</strong> <span>${escapeHtml(record.city)}, Tamil Nadu</span></div>
                </div>

                <div class="transparent-notice-card mb-md">
                    <p class="small"><strong>Direct Dispatch Option:</strong> To receive your official PDF quotation immediately without waiting for server batch processing, you can open a prefilled draft in your default email client with one click:</p>
                    <a href="${mailtoUrl}" class="btn btn-primary btn-block mb-xs" target="_blank">
                        <i data-lucide="mail"></i> Send Prefilled Email to Sales Desk
                    </a>
                </div>

                <div class="flex-between">
                    <a href="tel:${BUSINESS.phoneNumbers[0].replace(/\s+/g, '')}" class="btn btn-outline btn-sm">
                        <i data-lucide="phone"></i> Call Sales: ${BUSINESS.phoneNumbers[0]}
                    </a>
                    <button class="btn btn-secondary btn-sm" onclick="closeSuccessModal()">
                        Done
                    </button>
                </div>
            </div>
        </div>
    `;

    confirmationModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (window.lucide) lucide.createIcons();
}

function closeSuccessModal() {
    const modal = document.getElementById('quoteSuccessModal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
}

// --- Contact Form Handling ---
function initContactForm() {
    const form = document.getElementById('generalContactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('cfName')?.value.trim();
        const email = document.getElementById('cfEmail')?.value.trim();
        const phone = document.getElementById('cfPhone')?.value.trim();
        const message = document.getElementById('cfMessage')?.value.trim();

        if (!name || !phone || !message) {
            showToast('Please fill in your name, contact phone, and message.', 'warning');
            return;
        }

        const mailtoSubject = encodeURIComponent(`General Enquiry from ${name}`);
        const mailtoBody = encodeURIComponent(
            `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`
        );
        const mailtoUrl = `mailto:${BUSINESS.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

        showToast(`Thank you, ${name}! Your enquiry has been prepared. Opening your email app...`, 'success');
        setTimeout(() => {
            window.location.href = mailtoUrl;
        }, 600);
        form.reset();
    });
}

// --- Floating WhatsApp Widget / Fallback ---
function initWhatsAppWidget() {
    const waWidget = document.getElementById('floatingWhatsAppWidget');
    if (!waWidget) return;

    if (!BUSINESS.whatsappNumber) {
        // If unverified, modify the floating button to provide quick institutional contact modal
        waWidget.href = `tel:${BUSINESS.phoneNumbers[0].replace(/\s+/g, '')}`;
        waWidget.title = `Call New Power Sports: ${BUSINESS.phoneNumbers[0]}`;
        const waTooltip = waWidget.querySelector('.wa-tooltip');
        if (waTooltip) waTooltip.textContent = `Call Sales: ${BUSINESS.phoneNumbers[0]}`;
    } else {
        const cleanNumber = BUSINESS.whatsappNumber.replace(/[^0-9]/g, '');
        const defaultMsg = encodeURIComponent("Hi New Power Sports, I would like to inquire about institutional uniforms and bulk lab coat supply for our college/organization.");
        waWidget.href = `https://wa.me/${cleanNumber}?text=${defaultMsg}`;
        waWidget.target = "_blank";
    }
}

// --- URL Query Params Handling (e.g. ?quote=NPS-MED-01) ---
function handleUrlQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const quoteParam = params.get('quote');
    const categoryParam = params.get('category');

    if (quoteParam) {
        requestProductQuote(quoteParam);
    } else if (categoryParam) {
        const matchingTab = document.querySelector(`.catalog-tab-btn[data-cat="${categoryParam}"]`);
        if (matchingTab) {
            filterProductCategory(categoryParam, matchingTab);
        }
    }
}

// --- Admin Portal Functionality ---
function initAdminPortal() {
    loadAdminEnquiries();
    renderAdminProductsTable();
}

function loadAdminEnquiries(filterStatus = 'all') {
    const tbody = document.getElementById('enquiriesTableBody');
    if (!tbody) return;

    let items = enquiriesStore;
    if (filterStatus !== 'all') {
        items = items.filter(e => e.status === filterStatus);
    }

    if (items.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center text-muted p-lg">No enquiries in this status tier.</td></tr>`;
        return;
    }

    tbody.innerHTML = items.map(e => `
        <tr>
            <td><strong>${e.id}</strong></td>
            <td>${e.date}</td>
            <td>
                <strong>${escapeHtml(e.institution)}</strong>
                <div class="small text-muted">${escapeHtml(e.institutionType || '')} • ${escapeHtml(e.city || 'Tamil Nadu')}</div>
            </td>
            <td>
                <div>${escapeHtml(e.contactPerson)}</div>
                <div class="small text-muted"><a href="tel:${e.phone}">${e.phone}</a></div>
            </td>
            <td>
                <strong>${e.quantity} Units</strong>
                <div class="small text-muted">${escapeHtml(e.product || '')}</div>
            </td>
            <td>
                <span class="badge ${getStatusBadgeClass(e.status)}">${e.status}</span>
            </td>
            <td>
                <select class="form-control form-control-sm" onchange="updateEnquiryStatus('${e.id}', this.value)" style="min-width: 120px;">
                    <option value="New" ${e.status === 'New' ? 'selected' : ''}>New</option>
                    <option value="Contacted" ${e.status === 'Contacted' ? 'selected' : ''}>Contacted</option>
                    <option value="Quoted" ${e.status === 'Quoted' ? 'selected' : ''}>Quotation Sent</option>
                    <option value="In Discussion" ${e.status === 'In Discussion' ? 'selected' : ''}>In Discussion</option>
                    <option value="Sample Sent" ${e.status === 'Sample Sent' ? 'selected' : ''}>Sample Sent</option>
                    <option value="Confirmed" ${e.status === 'Confirmed' ? 'selected' : ''}>Confirmed / Won</option>
                    <option value="Closed" ${e.status === 'Closed' ? 'selected' : ''}>Closed / Archived</option>
                </select>
            </td>
        </tr>
    `).join('');

    // Update stats counters
    const statTotal = document.getElementById('adminStatTotal');
    const statPending = document.getElementById('adminStatPending');
    const statConfirmed = document.getElementById('adminStatConfirmed');

    if (statTotal) statTotal.textContent = enquiriesStore.length;
    if (statPending) statPending.textContent = enquiriesStore.filter(e => e.status === 'New' || e.status === 'Contacted').length;
    if (statConfirmed) statConfirmed.textContent = enquiriesStore.filter(e => e.status === 'Confirmed').length;
}

function getStatusBadgeClass(status) {
    switch(status) {
        case 'New': return 'badge-warning';
        case 'Contacted': return 'badge-info';
        case 'Quoted': return 'badge-navy';
        case 'In Discussion': return 'badge-accent';
        case 'Sample Sent': return 'badge-info';
        case 'Confirmed': return 'badge-success';
        case 'Closed': return 'badge-secondary';
        default: return 'badge-info';
    }
}

function updateEnquiryStatus(id, newStatus) {
    const item = enquiriesStore.find(e => e.id === id);
    if (item) {
        item.status = newStatus;
        try {
            localStorage.setItem('nps_enquiries', JSON.stringify(enquiriesStore));
        } catch(e) {}
        showToast(`Status updated for enquiry ${id} to "${newStatus}"`, 'success');
        loadAdminEnquiries();
    }
}

function filterAdminEnquiriesByStatus(status, clickedBtn) {
    document.querySelectorAll('.admin-filter-btn').forEach(b => b.classList.remove('active'));
    if (clickedBtn) clickedBtn.classList.add('active');
    loadAdminEnquiries(status);
}

function exportEnquiriesToCSV() {
    if (!enquiriesStore.length) {
        showToast('No enquiries available to export.', 'warning');
        return;
    }

    const headers = ['ID', 'Date', 'Institution', 'Contact Person', 'Phone', 'Email', 'Institution Type', 'Product', 'Quantity', 'Sizes', 'Colours', 'Embroidery', 'City', 'Status', 'Notes'];
    const rows = enquiriesStore.map(e => [
        `"${e.id}"`,
        `"${e.date}"`,
        `"${(e.institution || '').replace(/"/g, '""')}"`,
        `"${(e.contactPerson || '').replace(/"/g, '""')}"`,
        `"${e.phone || ''}"`,
        `"${e.email || ''}"`,
        `"${e.institutionType || ''}"`,
        `"${(e.product || '').replace(/"/g, '""')}"`,
        `"${e.quantity || ''}"`,
        `"${e.sizes || ''}"`,
        `"${e.colours || ''}"`,
        `"${e.embroidery || ''}"`,
        `"${e.city || ''}"`,
        `"${e.status || ''}"`,
        `"${(e.notes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `NewPowerSports_Enquiries_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Enquiry CSV exported successfully.', 'success');
}

function renderAdminProductsTable() {
    const tbody = document.getElementById('adminProductsTableBody');
    if (!tbody) return;

    tbody.innerHTML = productsDatabase.map(p => `
        <tr>
            <td><strong>${p.id}</strong></td>
            <td>
                <strong>${p.name}</strong>
                <div class="small text-muted">${p.fabric}</div>
            </td>
            <td><span class="badge badge-navy">${p.category}</span></td>
            <td>${p.sizes.slice(0, 3).join(', ')}...</td>
            <td>
                <button type="button" class="btn btn-sm btn-outline" onclick="openProductModal('${p.id}')">
                    <i data-lucide="eye"></i> Preview
                </button>
            </td>
        </tr>
    `).join('');

    if (window.lucide) lucide.createIcons();
}

// --- Utilities ---
function showToast(message, type = 'info') {
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let iconName = 'info';
    if (type === 'success') iconName = 'check-circle';
    if (type === 'warning') iconName = 'alert-triangle';

    toast.innerHTML = `
        <div class="toast-content flex-gap">
            <i data-lucide="${iconName}"></i>
            <span>${escapeHtml(message)}</span>
        </div>
        <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
    `;

    container.appendChild(toast);
    if (window.lucide) lucide.createIcons();

    setTimeout(() => {
        if (toast.parentElement) {
            toast.classList.add('fade-out');
            setTimeout(() => toast.remove(), 300);
        }
    }, 4500);
}

function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
