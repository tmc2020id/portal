export type NavItem = { href: string; label: string };

export type ContentPageData = {
  title: string;
  eyebrow: string;
  summary: string;
  intro: string;
  metrics: Array<{ value: string; label: string }>;
  highlights: Array<{ title: string; body: string }>;
  spotlightTitle: string;
  spotlightBody: string;
  checklistTitle: string;
  checklist: string[];
  ctaLabel: string;
  ctaHref: string;
};

export type PageKey =
  | "about"
  | "products"
  | "services"
  | "specialOrders"
  | "contact"
  | "faq"
  | "terms"
  | "privacy";

export const en = {
  meta: {
    title: "TMC SMART",
    description: "Elevate execution with the next-generation workspace",
  },
  nav: {
    homeLabel: "TMC SMART home",
    logoAlt: "TMC SMART Logo",
    primaryLabel: "Primary",
    mobileLabel: "Mobile",
    toggleLabel: "Toggle navigation",
    aiLabel: "Open TMC AI",
    aiBadge: "Beta",
    switchLabel: "العربية",
    switchAriaLabel: "اعرض الموقع بالعربية",
    primary: [
      { href: "/", label: "Home" },
      { href: "/about-us", label: "About us" },
      { href: "/products", label: "Products" },
      { href: "/services", label: "Services" },
      { href: "/special-orders", label: "Special Orders" },
      { href: "/contact", label: "Contact" },
      { href: "/faq", label: "FAQ" },
    ] as NavItem[],
    footer: [
      { href: "/terms-of-use", label: "Terms of Use" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/return-policy", label: "Return Policy" },
      { href: "/contact", label: "Get in touch" },
    ] as NavItem[],
  },
  home: {
    heroLead: "Take performance to the next-generation with ",
    heroBrand: "TMC",
    heroSlogan: "Your Keys for Business",
    login: "Login",
    exploreProducts: "Explore Products",
    previousFeature: "Previous feature",
    nextFeature: "Next feature",
    featureSlides: [
      {
        title: "An orchestration core",
        body:
          "Coordinate delivery, approvals, and project signals from one premium control layer built for modern teams.",
        eyebrow: "TMC SMART",
      },
      {
        title: "Higher-level workflows",
        body:
          "Move from isolated tasks to reusable execution paths with structured states, predictable ownership, and clear results.",
        eyebrow: "Structured Delivery",
      },
      {
        title: "Cross-surface visibility",
        body:
          "Unify browser activity, project updates, and operational context so teams can act faster with less switching.",
        eyebrow: "Unified Context",
      },
      {
        title: "Feedback with traceability",
        body:
          "Capture review notes, QA signals, and decision history in a system that keeps every release accountable.",
        eyebrow: "Built for Trust",
      },
    ],
    statementTitle: "Built for modern teams in the delivery-first era",
    statementBody:
      "TMC SMART is designed to keep execution visible, premium, and trustworthy whether you are shipping a focused product update or coordinating a complex enterprise program.",
    routesEyebrow: "Site map",
    routesTitle: "Actual pages now replace internal-only navigation",
    routeOpen: "Open page",
    useCasesEyebrow: "Watch the flow",
    useCasesTitle: "Use cases shaped for different delivery modes",
    useCases: [
      {
        title: "Frontend teams",
        summary:
          "Streamline UX delivery with clearer handoff states, reusable patterns, and a review loop that stays visible.",
        cta: "View case",
      },
      {
        title: "Full-stack delivery",
        summary:
          "Ship production work with artifact tracking, verifiable checkpoints, and one shared timeline across disciplines.",
        cta: "View case",
      },
      {
        title: "Enterprise programs",
        summary:
          "Reduce coordination overhead by managing workspaces, dependencies, and approvals from one command layer.",
        cta: "View case",
      },
    ],
    plans: [
      {
        badge: "Available now",
        label: "For teams",
        title: "Launch with clarity",
      },
      {
        badge: "Coming soon",
        label: "For organizations",
        title: "Scale with governance",
      },
    ],
    blogEyebrow: "Latest notes",
    blogTitle: "Fresh thinking from the TMC SMART system",
    blogPosts: [
      {
        title: "Designing a premium TMC SMART system for cross-team delivery",
        category: "Product",
        date: "Mar 21, 2026",
      },
      {
        title: "Making approval flows feel instant without losing traceability",
        category: "Engineering",
        date: "Mar 12, 2026",
      },
      {
        title: "How motion supports clarity in enterprise-facing interfaces",
        category: "Design",
        date: "Feb 27, 2026",
      },
      {
        title: "Building scalable component states for TMC operations",
        category: "System",
        date: "Feb 11, 2026",
      },
    ],
    cookieBody:
      "TMC SMART uses cookies to improve performance, understand traffic patterns, and support a more polished experience.",
    cookieHide: "Hide",
  },
  contentPage: {
    overviewEyebrow: "Overview",
    overviewTitle: "Built from the current ERP presence",
    focusEyebrow: "Focus",
    nextStepEyebrow: "Next step",
    nextStepTitle: "Continue deeper into the TMC SMART experience",
  },
  returnPolicy: {
    metaTitle: "Return Policy | TMC SMART",
    metaDescription:
      "Review the TMC SMART return policy, including final-sale conditions, defective item handling, and support contact details.",
    eyebrow: "Return Policy",
    title: "Return policy written for clarity, trust, and crawler-friendly indexing",
    lead:
      "This page presents TMC's return policy in a stable, readable format designed to fit the TMC SMART experience while staying easy for search engines and policy crawlers to parse.",
    summary: [
      {
        title: "All sales are final",
        body: "Orders are not eligible for return or exchange after completion and delivery.",
      },
      {
        title: "24-hour defect notice",
        body: "Defective or damaged items must be reported within 24 hours of receipt.",
      },
      {
        title: "Original packaging required",
        body: "Approved defect-based exchanges require original packaging and all included accessories.",
      },
    ],
    statementTitle: "Policy statement",
    statementBody:
      "At TMC (Technology Metro Company), we strive to provide high-quality technical solutions and products. To keep expectations clear for customers, partners, and procurement teams, the return policy below applies to orders placed through our channels.",
    conditionsTitle: "Return conditions",
    conditions: [
      "All sales are final. TMC does not accept returns or exchanges once an order has been completed and delivered.",
      "Returns or exchanges are only considered when an item arrives defective or damaged.",
      "Customers must notify TMC within 24 hours of receiving a defective or damaged item.",
      "To qualify for an exchange because of a defect, the product must remain in its original packaging and include all accessories.",
    ],
    noteTitle: "Operational note",
    noteBody:
      "This policy page is intentionally delivered as stable, semantic content with clear headings and list structure so the legal content remains easy to read for both visitors and indexing systems. It complements the more interactive areas of the site without depending on motion-heavy presentation.",
    supportTitle: "Need support about an order?",
    supportBody:
      "For questions related to defects, damaged deliveries, or policy clarification, contact the TMC support team through the official sales inbox.",
    contactPage: "Contact page",
  },
  pages: {
    about: {
      eyebrow: "About TMC",
      title: "A strategic technical partner built for long-term growth",
      summary:
        "TMC combines supply capability, operational reliability, and tailored digital execution to support companies, technicians, and resellers.",
      intro:
        "Our current ERP presence presents TMC as both a trusted technology supplier and a digital solutions partner. This experience unifies that positioning into one premium operational layer.",
      metrics: [
        { value: "6", label: "core capability pillars" },
        { value: "24/7", label: "business continuity mindset" },
        { value: "B2B", label: "partner-first orientation" },
      ],
      highlights: [
        {
          title: "Tailored digital solutions",
          body: "We shape strategy, systems, and execution around the actual needs of each business instead of offering one generic delivery path.",
        },
        {
          title: "Security with innovation",
          body: "TMC balances practical protection, operational trust, and modern implementation standards across infrastructure and product journeys.",
        },
        {
          title: "Reliable sourcing and support",
          body: "From core equipment to special requests, the company is positioned as an ongoing partner rather than a one-time store.",
        },
      ],
      spotlightTitle: "Why companies choose TMC",
      spotlightBody:
        "The current site emphasizes competitive pricing, dependable sourcing, special order handling, and support for companies and technicians. This page translates those strengths into a clearer premium narrative.",
      checklistTitle: "Core advantages",
      checklist: [
        "Professional networking and technical equipment",
        "Competitive pricing and partner models",
        "Special order sourcing for unavailable products",
        "Support for companies, technicians, and resellers",
      ],
      ctaLabel: "Explore services",
      ctaHref: "/services",
    },
    products: {
      eyebrow: "Product Catalog",
      title: "A curated catalog for networking, security, servers, and smart systems",
      summary:
        "The ERP storefront already organizes a broad range of technical inventory. This page reframes the catalog into a more premium, decision-friendly experience.",
      intro:
        "The live store highlights categories such as wireless, cabling tools, switches, routers, servers, security, smart home, and rack cabinets, with visible pricing and promotional positioning.",
      metrics: [
        { value: "8+", label: "main product families" },
        { value: "100+", label: "visible catalog items" },
        { value: "B2B/B2C", label: "supported buying modes" },
      ],
      highlights: [
        {
          title: "Networking infrastructure",
          body: "Routers, switches, wireless links, accessories, and professional cabling cover a wide operational range.",
        },
        {
          title: "Security and surveillance",
          body: "Camera and security-oriented inventory supports practical deployment needs for facilities and businesses.",
        },
        {
          title: "Servers and smart systems",
          body: "The catalog extends into computing, power, and smart environment devices for broader technical programs.",
        },
      ],
      spotlightTitle: "How the catalog is organized",
      spotlightBody:
        "The current ERP structure suggests a strong category-led browsing model. This page makes that structure easier to scan, easier to trust, and better aligned with enterprise purchase behavior.",
      checklistTitle: "Primary categories",
      checklist: [
        "Wireless and point-to-point equipment",
        "Cabling tools and connectors",
        "Switches, routers, and access layers",
        "Servers, components, cameras, and smart home devices",
      ],
      ctaLabel: "Request special sourcing",
      ctaHref: "/special-orders",
    },
    services: {
      eyebrow: "Services",
      title: "Services that extend from consulting to implementation design",
      summary:
        "The About page on the current site presents a distinct service layer that includes consulting, application delivery, security, cloud, and UI/UX design.",
      intro:
        "Rather than treating services as secondary, this page gives them a dedicated structure that matches the broader premium direction of the site.",
      metrics: [
        { value: "6", label: "featured service lines" },
        { value: "UX + Infra", label: "cross-discipline scope" },
        { value: "Secure", label: "delivery posture" },
      ],
      highlights: [
        {
          title: "Technology consulting",
          body: "TMC helps businesses choose the right direction, architecture, and roadmap before implementation begins.",
        },
        {
          title: "Web and mobile delivery",
          body: "Responsive digital products and implementation guidance support organizations that need modern customer-facing systems.",
        },
        {
          title: "Cloud, IT management, and security",
          body: "The current positioning includes infrastructure management, database security, and cloud-oriented operational flexibility.",
        },
      ],
      spotlightTitle: "Service model",
      spotlightBody:
        "The most valuable refinement here is clarity: consulting, delivery, security, and operational support are shown as coordinated capabilities rather than disconnected cards.",
      checklistTitle: "Featured services",
      checklist: [
        "Technology consulting",
        "Website and mobile app development",
        "Database security",
        "Cloud solutions, IT management, and UI/UX design",
      ],
      ctaLabel: "Talk to TMC",
      ctaHref: "/contact",
    },
    specialOrders: {
      eyebrow: "Special Orders",
      title: "Request specialized products even when they are not in standard stock",
      summary:
        "The current ERP site clearly positions special orders as a core differentiator for TMC, especially for projects requiring precise technical specifications.",
      intro:
        "This page elevates that capability from a simple text page into a premium workflow-oriented destination focused on project confidence.",
      metrics: [
        { value: "Custom", label: "spec-driven sourcing" },
        { value: "Project", label: "fit for infrastructure needs" },
        { value: "Flexible", label: "beyond visible stock" },
      ],
      highlights: [
        {
          title: "Specialized sourcing",
          body: "Teams can request networking, server, surveillance, and technical products that are not immediately listed in the standard catalog.",
        },
        {
          title: "Specification-first handling",
          body: "Requests can be shaped around exact business or infrastructure requirements instead of generic product suggestions.",
        },
        {
          title: "Partner-grade support",
          body: "This capability is especially relevant for integrators, companies, and resellers managing technical procurement at scale.",
        },
      ],
      spotlightTitle: "What can be requested",
      spotlightBody:
        "The current site lists networking equipment, professional cabling, routing and switching hardware, servers, monitoring systems, and other specialized technical products as valid request types.",
      checklistTitle: "Typical request areas",
      checklist: [
        "Networking and communication equipment",
        "Professional cables and infrastructure components",
        "Advanced routing and switching hardware",
        "Servers, monitoring equipment, and specialized technology products",
      ],
      ctaLabel: "Contact the sourcing team",
      ctaHref: "/contact",
    },
    contact: {
      eyebrow: "Contact",
      title: "Reach TMC through one clear communication channel",
      summary:
        "The current ERP contact page provides address, phone, email, and an inquiry form. This page reframes that information with a clearer operational layout.",
      intro:
        "A premium experience should make outreach feel direct and reliable, especially when the next step may involve quoting, sourcing, or project support.",
      metrics: [
        { value: "+963", label: "phone channel" },
        { value: "Email", label: "sales inbox" },
        { value: "Fast", label: "response-oriented flow" },
      ],
      highlights: [
        {
          title: "Phone-first communication",
          body: "The ERP site prominently exposes a direct phone number for quick inquiry handling and ongoing business communication.",
        },
        {
          title: "Sales and inquiries",
          body: "The listed email supports pricing requests, support needs, and general coordination with the TMC team.",
        },
        {
          title: "Structured inquiry flow",
          body: "Name, company, contact details, subject, and question fields make it easier to capture practical request context.",
        },
      ],
      spotlightTitle: "Contact details surfaced from the current site",
      spotlightBody:
        "The live ERP content references the Sermada / Idlib location, the public phone number, and the sales email address. These details are translated here into a cleaner presentation model.",
      checklistTitle: "Available channels",
      checklist: [
        "Phone: +963965445580",
        "Email: sales@tmcsmart.shop",
        "Location: Idlib - Sarmada area",
        "Structured inquiry form for companies and individuals",
      ],
      ctaLabel: "Open FAQ",
      ctaHref: "/faq",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Answers that reduce friction before purchase or partnership",
      summary:
        "The current ERP experience includes a FAQ presence and a help-oriented forum area. This page consolidates that intent into a clearer support-oriented destination.",
      intro:
        "For a premium experience, FAQ content should not feel secondary. It should actively remove uncertainty around products, services, ordering, and support.",
      metrics: [
        { value: "Help", label: "self-service layer" },
        { value: "Clear", label: "pre-sales guidance" },
        { value: "Support", label: "post-inquiry readiness" },
      ],
      highlights: [
        {
          title: "Business questions",
          body: "Clarify what TMC supplies, how services relate to the catalog, and what types of clients the company supports.",
        },
        {
          title: "Ordering questions",
          body: "Explain standard purchases, special orders, pricing expectations, and what information should be included in a request.",
        },
        {
          title: "Trust questions",
          body: "Reinforce how sourcing reliability, support, and long-term partnership are handled across the business.",
        },
      ],
      spotlightTitle: "Support direction",
      spotlightBody:
        "The ERP structure suggests FAQ and help as supporting layers. In the new structure, they become part of a more deliberate trust-building experience.",
      checklistTitle: "Suggested FAQ themes",
      checklist: [
        "What industries and customers does TMC serve?",
        "How do special orders work?",
        "What product categories are available?",
        "How can businesses request support or pricing?",
      ],
      ctaLabel: "Get in touch",
      ctaHref: "/contact",
    },
    terms: {
      eyebrow: "Terms of Use",
      title: "Usage terms aligned with a clearer enterprise-facing experience",
      summary:
        "The current ERP site exposes terms pages in navigation and footer areas. This version presents them in the same visual system as the rest of the experience.",
      intro:
        "Legal and usage information should feel trustworthy, readable, and structurally consistent with the rest of the interface rather than feeling detached from the product experience.",
      metrics: [
        { value: "Clear", label: "readability focus" },
        { value: "Trusted", label: "brand consistency" },
        { value: "Aligned", label: "shared workspace system" },
      ],
      highlights: [
        {
          title: "Consistent presentation",
          body: "Terms should use the same spacing, hierarchy, and navigation structure used across the rest of the TMC SMART system.",
        },
        {
          title: "Business-facing clarity",
          body: "Enterprise users need legal references to be easy to scan during evaluation, quoting, and ongoing account activity.",
        },
        {
          title: "Operational confidence",
          body: "A premium interface strengthens trust when legal and policy content feels properly integrated into the product environment.",
        },
      ],
      spotlightTitle: "What this page represents",
      spotlightBody:
        "This route acts as a structured placeholder for the terms content already referenced from the current ERP experience, ready for formal legal copy when finalized.",
      checklistTitle: "Recommended legal sections",
      checklist: [
        "Use of the website and workspace",
        "Order and pricing conditions",
        "Account and access responsibilities",
        "Limitation, compliance, and contact references",
      ],
      ctaLabel: "Review privacy policy",
      ctaHref: "/privacy-policy",
    },
    privacy: {
      eyebrow: "Privacy Policy",
      title: "A privacy surface that matches the quality of the workspace experience",
      summary:
        "The live ERP site already links to privacy information. This page carries that requirement into a cleaner, more coherent experience.",
      intro:
        "Privacy content becomes easier to trust when it is presented inside the same calm, structured system used everywhere else in the site.",
      metrics: [
        { value: "Policy", label: "data handling layer" },
        { value: "Readable", label: "customer-friendly format" },
        { value: "Consistent", label: "shared UI treatment" },
      ],
      highlights: [
        {
          title: "Data transparency",
          body: "Visitors should quickly understand what details may be collected through forms, inquiries, orders, or account activity.",
        },
        {
          title: "Operational relevance",
          body: "Policy language should align with practical business actions such as contact requests, catalog browsing, and sourcing workflows.",
        },
        {
          title: "Design consistency",
          body: "Even policy pages benefit from premium structure, restrained motion, and a reliable navigation model.",
        },
      ],
      spotlightTitle: "Privacy within TMC SMART",
      spotlightBody:
        "This route is prepared as a design-consistent privacy destination that can later receive approved legal text while preserving the site's visual quality.",
      checklistTitle: "Recommended privacy sections",
      checklist: [
        "Collected contact and business data",
        "Use of cookies and analytics signals",
        "Communication and support workflows",
        "Retention, rights, and policy updates",
      ],
      ctaLabel: "Contact TMC",
      ctaHref: "/contact",
    },
  } satisfies Record<PageKey, ContentPageData>,
};

export type Dictionary = typeof en;
