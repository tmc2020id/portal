export type NavItem = { href: string; label: string };

export type ContentPageData = {
  metaTitle: string;
  eyebrow: string;
  title: string;
  summary: string;
  metrics: Array<{ value: string; label: string }>;
  introTitle: string;
  intro: string;
  highlights: Array<{ title: string; body: string }>;
  spotlight?: {
    title: string;
    body: string;
    listTitle: string;
    list: string[];
  };
  // Long-form content: FAQ groups or legal clauses.
  sections?: Array<{
    title: string;
    items: Array<{ title: string; body: string }>;
  }>;
  ctaTitle: string;
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
    description:
      "TMC – Technology Metro Company supplies networking equipment, security systems, servers and smart home devices to companies, technicians and resellers, with special orders for anything not in stock.",
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
    heroLead: "Reliable network and security equipment with ",
    heroBrand: "TMC",
    heroSlogan: "Your Keys for Business",
    login: "Login",
    exploreProducts: "Explore Products",
    previousFeature: "Previous category",
    nextFeature: "Next category",
    featureSlides: [
      {
        title: "Wired and wireless networks",
        body:
          "Switches, routers, access points and long-range wireless links, plus the cabling, tools and rack cabinets to install them.",
        eyebrow: "Networking",
      },
      {
        title: "Security and surveillance",
        body:
          "Surveillance cameras and access control systems for offices, shops and facilities.",
        eyebrow: "Security",
      },
      {
        title: "Servers and computing",
        body:
          "Servers, components, laptops and desktop computers for businesses and server rooms.",
        eyebrow: "Computing",
      },
      {
        title: "Smart home",
        body: "Sensors and controllers to automate homes and offices.",
        eyebrow: "Smart Home",
      },
    ],
    statementTitle: "A technology supply partner for your business",
    statementBody:
      "TMC is a store specializing in networking equipment, security systems, servers and smart home solutions. We work with companies, technicians, system integrators and resellers to supply reliable equipment at competitive prices, and we source what is not in stock through special orders.",
    routesEyebrow: "Explore",
    routesTitle: "Everything you need from TMC in one place",
    routeOpen: "Open page",
    useCasesEyebrow: "Who we work with",
    useCasesTitle: "Supply that fits the way you work",
    useCases: [
      {
        title: "Companies",
        summary:
          "Network and surveillance equipment for offices and branches, with company invoices on request.",
        cta: "Contact us",
        href: "/contact",
      },
      {
        title: "Technicians and integrators",
        summary:
          "Original equipment from trusted suppliers, and help choosing the right parts for each project.",
        cta: "Browse products",
        href: "/products",
      },
      {
        title: "Resellers",
        summary:
          "Wholesale and partner pricing for resellers and technical partners through a partner account.",
        cta: "Ask for a partner account",
        href: "/contact",
      },
    ],
    plans: [
      {
        badge: "Available now",
        label: "Special Orders",
        title: "Request any product we don't stock",
      },
      {
        badge: "Companies and resellers",
        label: "Wholesale pricing",
        title: "Special prices for partner accounts",
      },
    ],
    blogEyebrow: "From the blog",
    blogTitle: "Technical articles from the TMC team",
    // Latest posts from the Odoo blog; phase 4 loads these live.
    blogPosts: [
      {
        title: "The best network structure for an office with cameras, printers, computers and WiFi",
        category: "Tech Blog",
        date: "Jun 7, 2026",
        href: "https://erp.tmcsmart.com/en/blog/tech-blog-4/the-best-network-structure-for-an-office-with-cameras-printers-computers-and-wifi-120",
      },
      {
        title: "Expanding the network without chaos: when to add a switch and when you need a redesign",
        category: "Tech Blog",
        date: "Jun 7, 2026",
        href: "https://erp.tmcsmart.com/en/blog/tech-blog-4/expanding-the-network-without-chaos-when-to-add-a-switch-and-when-you-need-a-redesign-119",
      },
      {
        title: "How do you know your switch can't handle the number of devices on your network?",
        category: "Tech Blog",
        date: "Jun 7, 2026",
        href: "https://erp.tmcsmart.com/en/blog/tech-blog-4/how-do-you-know-that-the-switch-cannot-handle-the-number-of-devices-on-your-network-118",
      },
      {
        title: "Internet speed vs. network speed: why your speed isn't what you expect",
        category: "Tech Blog",
        date: "Jun 7, 2026",
        href: "https://erp.tmcsmart.com/en/blog/tech-blog-4/the-difference-between-internet-speed-and-network-speed-why-is-your-speed-not-what-you-expect-117",
      },
    ],
    cookieBody: "TMC SMART uses cookies to improve the site and understand how it is used.",
    cookieHide: "Hide",
  },
  contentPage: {
    overviewEyebrow: "Overview",
    focusEyebrow: "In detail",
    nextStepEyebrow: "Next step",
  },
  store: {
    eyebrow: "From the store",
    title: "Latest products in the store",
    body: "Recently added to the TMC SMART online store. Open a product to see its price and availability.",
    viewAll: "Browse the full store",
    href: "https://erp.tmcsmart.com/en/shop",
  },
  returnPolicy: {
    metaTitle: "Return Policy | TMC SMART",
    metaDescription:
      "TMC's return policy: final-sale conditions, how to report defective or damaged items within 24 hours, and how to contact us.",
    eyebrow: "Return Policy",
    title: "Return policy",
    lead: "These conditions apply to all orders placed with TMC, through the store or by contacting our team.",
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
      "At TMC (Technology Metro Company), we strive to provide high-quality technical products. To keep expectations clear, the return policy below applies to all orders placed through our channels.",
    conditionsTitle: "Return conditions",
    conditions: [
      "All sales are final. TMC does not accept returns or exchanges once an order has been completed and delivered.",
      "Returns or exchanges are only considered when an item arrives defective or damaged.",
      "Customers must notify TMC within 24 hours of receiving a defective or damaged item.",
      "To qualify for an exchange because of a defect, the product must remain in its original packaging and include all accessories.",
    ],
    noteTitle: "Check your order on arrival",
    noteBody:
      "Inspect your order as soon as it arrives. If something is damaged or not working, keep the item with its packaging and accessories and contact us right away, so we can review it within the 24-hour window.",
    supportTitle: "Need support about an order?",
    supportBody: "For questions about defects, damaged deliveries or this policy, contact our sales team.",
    contactPage: "Contact page",
  },
  pages: {
    about: {
      metaTitle: "About us | TMC SMART",
      eyebrow: "About TMC",
      title: "A technology equipment supplier for your success",
      summary:
        "TMC – Technology Metro Company specializes in networking equipment, security systems, servers, smart home solutions and technical infrastructure products.",
      metrics: [
        { value: "2", label: "branches, in Sarmada and Maarat al-Numan" },
        { value: "B2B + B2C", label: "we sell to companies and individuals" },
        { value: "Wholesale", label: "partner pricing for resellers" },
      ],
      introTitle: "Who we are",
      intro:
        "We work with companies, technicians, system integrators and resellers to provide reliable equipment, competitive pricing and sourcing for technical projects of all sizes. Our goal is not only to sell products, but to be a supply partner that businesses and technical professionals can rely on.",
      highlights: [
        {
          title: "Our mission",
          body: "To provide high-quality technical equipment and reliable sourcing for companies, technicians and technical projects, with competitive pricing and professional support.",
        },
        {
          title: "Our vision",
          body: "To become a trusted technology supply partner for businesses and technical professionals in the region, supporting infrastructure, networking and security projects.",
        },
        {
          title: "Special orders",
          body: "When a product is not in our store, we source it from our suppliers to the specifications you need.",
        },
      ],
      spotlight: {
        title: "Why TMC",
        body: "We supply what technical projects need, from a single access point to a full server room, and we stay available after the sale for the next order.",
        listTitle: "What you get",
        list: [
          "Professional networking and technical equipment",
          "Competitive pricing",
          "Special order service",
          "Support for companies and technicians",
          "Reliable sourcing and supply",
          "Wholesale and partner pricing",
        ],
      },
      ctaTitle: "See what we can supply for your next project",
      ctaLabel: "Browse products",
      ctaHref: "/products",
    },
    products: {
      metaTitle: "Products | TMC SMART",
      eyebrow: "Products",
      title: "Networking, security, servers and smart home equipment",
      summary:
        "Our store covers the equipment technical projects need, from cabling and switches to cameras and servers. Prices and availability are in the online store.",
      metrics: [
        { value: "Networking", label: "wireless, switches, routers and racks" },
        { value: "Security", label: "cameras and access control" },
        { value: "Computing", label: "servers, components and PCs" },
      ],
      introTitle: "Original products from trusted suppliers",
      intro:
        "We supply original, quality products from trusted suppliers and manufacturers. If you are not sure which device fits your network, our team can share product information and help you choose.",
      highlights: [
        {
          title: "Networking",
          body: "Wireless equipment, switches, routers, cabling and tools, and rack cabinets.",
        },
        {
          title: "Security",
          body: "Surveillance cameras and access control systems.",
        },
        {
          title: "Servers, computing and smart home",
          body: "Servers, components, laptops and PCs, plus smart home sensors and controllers.",
        },
      ],
      spotlight: {
        title: "Can't find a product?",
        body: "Some projects need a specific model. Send us the product name or link and we will source it through a special order.",
        listTitle: "Store categories",
        list: [
          "Wireless, cabling and tools, rack cabinets",
          "Switches and routers",
          "Servers, components, laptops and PCs",
          "Cameras and access control",
          "Smart home sensors and controllers",
        ],
      },
      ctaTitle: "Need something that isn't in the store?",
      ctaLabel: "Request a special order",
      ctaHref: "/special-orders",
    },
    services: {
      metaTitle: "Services | TMC SMART",
      eyebrow: "Services",
      title: "Digital services alongside the equipment",
      summary:
        "Beyond supplying equipment, TMC builds digital systems for businesses: apps and websites, booking systems, hosting and electronic payments.",
      metrics: [
        { value: "Apps", label: "web and mobile development" },
        { value: "Hosting", label: "for sites and systems" },
        { value: "Payments", label: "electronic payment integration" },
      ],
      introTitle: "One partner for equipment and software",
      intro:
        "Many businesses that buy networks and devices from us also need software that runs on them. We take care of both, so you deal with one team from the first cable to the finished system.",
      highlights: [
        {
          title: "App and website development",
          body: "Websites and mobile apps built around how your business works.",
        },
        {
          title: "Booking systems",
          body: "Online booking and scheduling for businesses that work by appointment.",
        },
        {
          title: "Hosting and electronic payments",
          body: "Hosting for your site and systems, and electronic payment integration so customers can pay online.",
        },
      ],
      spotlight: {
        title: "Tell us what you need",
        body: "Every project starts with a conversation about your business, your customers and your budget. We then suggest the scope and timeline that fit.",
        listTitle: "Our services",
        list: [
          "Website and mobile app development",
          "Booking systems",
          "Hosting",
          "Electronic payment integration",
        ],
      },
      ctaTitle: "Planning a website, app or booking system?",
      ctaLabel: "Talk to TMC",
      ctaHref: "/contact",
    },
    specialOrders: {
      metaTitle: "Special Orders | TMC SMART",
      eyebrow: "Special Orders",
      title: "Request what you need, and we will source it for you",
      summary:
        "Some projects need specialized equipment that is not in our regular inventory. With special orders, you can order products and technical equipment to the exact specifications you need.",
      metrics: [
        { value: "Any product", label: "even if it isn't in the store" },
        { value: "Your specs", label: "model, quantity and details" },
        { value: "Confirmed", label: "price and time before you commit" },
      ],
      introTitle: "How it works",
      intro:
        "Send us the product name, a link or a photo, with the quantity and any details. Our team checks it with our suppliers and gets back to you with availability, price and the expected delivery time.",
      highlights: [
        {
          title: "1. Send your request",
          body: "Tell us what you need: product name, link or photo, and the quantity.",
        },
        {
          title: "2. We source it",
          body: "We check availability and price with our suppliers.",
        },
        {
          title: "3. Confirm and receive",
          body: "We confirm the price and delivery time with you, then deliver the order.",
        },
      ],
      spotlight: {
        title: "What can I order?",
        body: "Any technical product that is not available in the store. Delivery time depends on the product and the supplier, and our team tells you the expected time before you confirm.",
        listTitle: "Common requests",
        list: [
          "Networking and telecommunications equipment",
          "Professional cables and network infrastructure components",
          "Advanced routers, switches and networking devices",
          "Server and data center equipment",
          "Monitoring equipment and specialized technology",
        ],
      },
      ctaTitle: "Send us your request",
      ctaLabel: "Contact us",
      ctaHref: "/contact",
    },
    contact: {
      metaTitle: "Contact | TMC SMART",
      eyebrow: "Contact",
      title: "Talk to the TMC team",
      summary:
        "For orders, prices, special orders or partner accounts, call us, email us or visit one of our branches.",
      metrics: [
        { value: "+963 965 445 580", label: "Sarmada branch" },
        { value: "+963 992 130 005", label: "Maarat al-Numan branch" },
        { value: "sales@tmcsmart.shop", label: "sales and inquiries" },
      ],
      introTitle: "How can we help?",
      intro:
        "Tell us what you are looking for, and if you can, include the product name or link, the quantity and your company name. That helps us reply with price and availability faster.",
      highlights: [
        {
          title: "Sarmada branch",
          body: "Idlib – Sarmada, 100 m after the car roundabout towards Sarmada, Syria. Phone: +963 965 445 580.",
        },
        {
          title: "Maarat al-Numan branch",
          body: "Maarat al-Numan, Idlib, Syria. Phone: +963 992 130 005.",
        },
        {
          title: "Email",
          body: "sales@tmcsmart.shop for prices, orders, invoices and partner accounts.",
        },
      ],
      ctaTitle: "Have a question first?",
      ctaLabel: "Read the FAQ",
      ctaHref: "/faq",
    },
    faq: {
      metaTitle: "FAQ | TMC SMART",
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      summary: "Answers about what we sell, how to order, delivery, our products and special orders.",
      metrics: [],
      introTitle: "Didn't find your answer?",
      intro: "Call or email us and our team will help you.",
      highlights: [],
      sections: [
        {
          title: "General",
          items: [
            {
              title: "What does TMC sell?",
              body: "Networking equipment, security systems, servers, smart home devices, cabling products and technical equipment for companies, technicians and technical projects.",
            },
            {
              title: "Do you sell to individuals or companies?",
              body: "Both. We also offer special pricing for companies, resellers and technical partners.",
            },
            {
              title: "Do you offer wholesale pricing?",
              body: "Yes, for companies, resellers and technical partners. Contact us to open a partner account.",
            },
            {
              title: "Can I request products that are not in the store?",
              body: "Yes, through our special order service. Send us the product and we will source it for you.",
            },
          ],
        },
        {
          title: "Orders",
          items: [
            {
              title: "How can I place an order?",
              body: "Order directly through the online store, or contact us by phone or email.",
            },
            {
              title: "Can I modify or cancel my order?",
              body: "Contact us as soon as possible. Orders can be modified or cancelled before shipping.",
            },
            {
              title: "Do you provide invoices for companies?",
              body: "Yes, we provide company invoices on request.",
            },
          ],
        },
        {
          title: "Shipping and delivery",
          items: [
            {
              title: "Do you deliver?",
              body: "Yes. Delivery time depends on product availability and your location, and our team tells you the time after the order is confirmed.",
            },
          ],
        },
        {
          title: "Products",
          items: [
            {
              title: "Are the products original?",
              body: "Yes. We supply original, quality products from trusted suppliers and manufacturers.",
            },
            {
              title: "Do you provide technical support?",
              body: "We provide basic guidance and product information, and help you choose the right equipment for your needs.",
            },
          ],
        },
        {
          title: "Special orders",
          items: [
            {
              title: "What is a special order?",
              body: "A service for requesting products that are not available in the store. We source them from our suppliers.",
            },
            {
              title: "How long do special orders take?",
              body: "It depends on the product and the supplier. Our team tells you the expected delivery time before you confirm.",
            },
          ],
        },
      ],
      ctaTitle: "Still have a question?",
      ctaLabel: "Get in touch",
      ctaHref: "/contact",
    },
    terms: {
      metaTitle: "Terms of Use | TMC SMART",
      eyebrow: "Terms of Use",
      title: "Terms of use",
      summary:
        "By accessing and using this website, you agree to the following terms. Please read them carefully before using the website.",
      metrics: [],
      introTitle: "About these terms",
      intro:
        "This website is operated by TMC and provides information, products and services related to technical equipment and our online store.",
      highlights: [],
      sections: [
        {
          title: "Terms",
          items: [
            {
              title: "Website use",
              body: "You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the website.",
            },
            {
              title: "Product information",
              body: "We make every effort to keep product descriptions, prices and availability accurate. We reserve the right to correct any errors, inaccuracies or omissions at any time without prior notice.",
            },
            {
              title: "Orders and payments",
              body: "By placing an order, you agree that the information you provide is accurate and complete, that orders are subject to availability, that we may cancel or refuse an order if necessary, and that prices and availability may change without prior notice.",
            },
            {
              title: "Intellectual property",
              body: "All content on this website, including text, images, logos, graphics and design, is the property of TMC and may not be copied, reproduced or used without permission.",
            },
            {
              title: "Limitation of liability",
              body: "TMC is not liable for any direct or indirect damages resulting from the use of, or inability to use, this website or any products purchased through it.",
            },
            {
              title: "External links",
              body: "This website may link to external websites. We are not responsible for their content or policies.",
            },
            {
              title: "Changes to these terms",
              body: "We may modify these terms at any time. Changes take effect as soon as they are posted on the website.",
            },
          ],
        },
      ],
      ctaTitle: "Questions about these terms?",
      ctaLabel: "Contact TMC",
      ctaHref: "/contact",
    },
    privacy: {
      metaTitle: "Privacy Policy | TMC SMART",
      eyebrow: "Privacy Policy",
      title: "Privacy policy",
      summary:
        "TMC is committed to protecting your privacy. This policy explains how we collect, use and protect your information when you use our website.",
      metrics: [],
      introTitle: "Your consent",
      intro: "By using our website, you consent to this privacy policy.",
      highlights: [],
      sections: [
        {
          title: "Policy",
          items: [
            {
              title: "Information we collect",
              body: "When you use our website or place an order, we may collect your name, phone number, email address, shipping address, billing information, order details and anything you send through contact forms.",
            },
            {
              title: "How we use it",
              body: "To process and deliver orders, contact you about your order, provide customer support, improve our website and services, send updates related to your order, and respond to inquiries and special order requests.",
            },
            {
              title: "Protecting your information",
              body: "We take appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure or destruction.",
            },
            {
              title: "Sharing information",
              body: "We do not sell, trade or rent your personal information. We share only what is needed with shipping companies or service providers to complete your order or provide our services.",
            },
            {
              title: "Cookies",
              body: "Our website may use cookies to improve your experience, analyze traffic and improve our services.",
            },
          ],
        },
      ],
      ctaTitle: "Questions about your data?",
      ctaLabel: "Contact TMC",
      ctaHref: "/contact",
    },
  } satisfies Record<PageKey, ContentPageData>,
};

export type Dictionary = typeof en;
