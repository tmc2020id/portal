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
  // Link cards, used by the policies index.
  links?: Array<{ href: string; title: string; body: string }>;
  // Marks a legal document: shows the date and the company details card.
  updated?: string;
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
  | "privacy"
  | "legal"
  | "shipping"
  | "cookies"
  | "dataDeletion";

// Date shown on the legal pages; change it whenever a policy changes.
const policiesUpdated = "21 November 2026";

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
    tool: {
      label: "NetScan",
      badge: "Free",
      ariaLabel: "Download TMC NetScan, the free network scanner for Windows (opens in a new tab)",
      href: "https://netscan.tmcsmart.com",
    },
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
      { href: "/return-policy", label: "Returns & Refunds" },
      { href: "/shipping-policy", label: "Shipping" },
      { href: "/cookie-policy", label: "Cookies" },
      { href: "/data-deletion", label: "Data Deletion" },
      { href: "/legal", label: "All policies" },
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
    netscan: {
      eyebrow: "Free tool from TMC",
      title: "TMC NetScan: see every device on your network from your PC",
      body:
        "A free Windows app, like Fing or WiFiMan but on your computer. It finds every device on your network (cameras, NVRs, routers, printers, phones, computers and Mimosa or Ubiquiti radios) and names each device's manufacturer from its MAC address.",
      points: [
        "Finds devices that ignore ping, using an ARP scan",
        "Names the vendor from the full IEEE list of about 52,000 manufacturers",
        "Finds cameras over ONVIF, Hikvision SADP and Dahua, even on the wrong IP",
        "Ubiquiti discovery and a health check for Mimosa radios",
        "Scans in about 18 seconds, from one Windows file with nothing to install",
      ],
      cta: "Download TMC NetScan free",
      ctaNote: "Windows · Free",
      imageAlt: "TMC NetScan listing network devices with their manufacturers",
      href: "https://netscan.tmcsmart.com",
    },
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
        title: "Download TMC NetScan free: see every device on your network from your PC",
        category: "Tech Blog",
        date: "Nov 23, 2026",
        href: "https://erp.tmcsmart.com/en/blog/tech-blog-4/download-tmc-netscan-free-see-every-device-on-your-network-from-your-pc-121",
      },
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
    cookieBody: "tmcsmart.com doesn't use advertising or tracking cookies.",
    cookieLink: "Cookie policy",
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
  legal: {
    updatedLabel: "Last updated",
    companyEyebrow: "Company details",
    companyTitle: "TMC – Technology Metro Company",
    companyNote: "Trading as TMC SMART. These policies are issued by and apply to this company.",
    company: [
      {
        label: "Address",
        value: "Idlib – Sarmada, 100 m after the car roundabout towards Sarmada, Syria",
      },
      { label: "Email", value: "sales@tmcsmart.shop", href: "mailto:sales@tmcsmart.shop" },
      { label: "Phone and WhatsApp", value: "+963 965 445 580", href: "tel:+963965445580" },
      { label: "Website", value: "tmcsmart.com", href: "https://tmcsmart.com" },
    ] as Array<{ label: string; value: string; href?: string }>,
  },
  returnPolicy: {
    metaTitle: "Return and Refund Policy | TMC SMART",
    metaDescription:
      "TMC's return and refund policy: final-sale conditions, reporting defects within 24 hours, cancellations, refunds and supplier warranty.",
    eyebrow: "Return Policy",
    title: "Return and refund policy",
    updated: policiesUpdated,
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
    sections: [
      {
        title: "Cancelling an order",
        items: [
          "You can cancel an order free of charge before it is shipped or handed over. Contact us as soon as possible by phone, WhatsApp or email.",
          "Special orders cannot be cancelled once we have ordered the product from the supplier, unless it arrives defective.",
        ],
      },
      {
        title: "Refunds",
        items: [
          "If we approve a refund, for example for an order we cancelled or a defective product we cannot repair or replace, we refund the amount you paid for the product.",
          "Refunds are made by the same payment method you used, or in cash at the branch for cash payments, within 14 days of approval.",
          "Delivery costs are refunded when the return is caused by our error or by a defect.",
        ],
      },
      {
        title: "Warranty",
        items: [
          "Many products carry a supplier or manufacturer warranty. Its period is stated on the invoice or the product page.",
          "The warranty covers manufacturing defects. It does not cover misuse, physical or liquid damage, power surges, repairs by others, or normal wear.",
          "To claim warranty, bring or send the product with its invoice. We inspect it and follow up with the supplier to repair or replace it.",
        ],
      },
      {
        title: "How to report a problem",
        items: [
          "Contact us within 24 hours of receipt with your order number, a short description, and photos or a video of the problem.",
          "Keep the product, its packaging and accessories until we finish reviewing your request.",
        ],
      },
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
        "The rules for using TMC's website, online store, assistant and services. By using them, you agree to these terms.",
      updated: policiesUpdated,
      metrics: [],
      introTitle: "About these terms",
      intro:
        "These terms are an agreement between you and TMC – Technology Metro Company (TMC SMART), Sarmada, Idlib, Syria. They cover tmcsmart.com, our online store at erp.tmcsmart.com, our WhatsApp channels, the TMC assistant and our digital services. Our privacy, return, shipping and cookie policies are part of these terms.",
      highlights: [],
      sections: [
        {
          title: "Using the website and your account",
          items: [
            {
              title: "Acceptable use",
              body: "Use the website and services only for lawful purposes. Do not try to break into our systems, overload them, collect data automatically, or use them to send spam or harmful content.",
            },
            {
              title: "Customer accounts",
              body: "Give accurate information and keep your login details and one-time codes private. You are responsible for activity on your account, and we may suspend an account that is misused.",
            },
            {
              title: "Who can use our services",
              body: "You must be at least 18 years old, or use our services with the consent of a parent, guardian or your employer.",
            },
          ],
        },
        {
          title: "Products, prices and orders",
          items: [
            {
              title: "Product information",
              body: "We make every effort to keep product descriptions, prices and availability accurate. We reserve the right to correct any errors, inaccuracies or omissions at any time without prior notice.",
            },
            {
              title: "Prices",
              body: "Prices are shown in the online store or in the quotation we send you, and may change until your order is confirmed. Wholesale and partner prices apply only to approved partner accounts.",
            },
            {
              title: "Orders",
              body: "An order is binding once we confirm it. We may refuse or cancel an order, for example if a product is unavailable or a price was shown in error. If you have already paid, we refund you in full.",
            },
            {
              title: "Payment and invoices",
              body: "You pay using the methods we offer when you order. We issue an invoice for every order, and company invoices on request.",
            },
            {
              title: "Special orders",
              body: "We source special orders from our suppliers for you. We confirm the price and expected delivery time before you commit, and may ask for an advance payment. Once we have ordered from the supplier, a special order cannot be cancelled or returned, unless it arrives defective.",
            },
            {
              title: "Delivery, returns and warranty",
              body: "Delivery is covered by our shipping policy, and returns, refunds, cancellations and warranty by our return and refund policy.",
            },
          ],
        },
        {
          title: "Digital services",
          items: [
            {
              title: "Scope and payment",
              body: "Websites, apps, booking systems, hosting and payment integration are provided under a written quotation or agreement that sets the scope, price and timeline. If that agreement conflicts with these terms, the agreement applies.",
            },
            {
              title: "Your content",
              body: "You keep ownership of the content you give us and confirm you have the right to use it. You allow us to use it only to deliver the service you ordered.",
            },
            {
              title: "Hosting",
              body: "Hosted services may not be used for illegal content, spam, malware or attacks. We may suspend a service that puts our systems or other customers at risk.",
            },
          ],
        },
        {
          title: "The TMC assistant",
          items: [
            {
              title: "Automated answers",
              body: "The TMC assistant uses artificial intelligence and can make mistakes. Prices, availability and technical specifications are confirmed only by our team or the online store, and you can ask for a person at any time.",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              title: "Intellectual property",
              body: "All content on this website, including text, images, logos, graphics and design, belongs to TMC and may not be copied, reproduced or used without permission. TMC and TMC SMART are our trade names.",
            },
            {
              title: "External links and platforms",
              body: "This website may link to other websites, and we are not responsible for their content or policies. Your use of WhatsApp, Facebook, Google and other platforms is also subject to their own terms.",
            },
            {
              title: "Limitation of liability",
              body: "As far as the law allows, TMC is not liable for indirect or consequential losses, or for loss of data, profit or business, arising from the use of the website or our services. Our total liability for an order is limited to the amount you paid for it. Nothing in these terms limits rights you have by law.",
            },
            {
              title: "Governing law",
              body: "These terms are governed by the laws in force in Syria. We aim to settle any dispute amicably first; otherwise it is referred to the competent courts where TMC is located.",
            },
            {
              title: "Changes to these terms",
              body: "We may update these terms. The new version is posted on this page with a new date, and applies from the date it is posted.",
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
        "How TMC collects, uses, shares and protects your personal data across our website, online store, WhatsApp, social media pages and the TMC assistant.",
      updated: policiesUpdated,
      metrics: [],
      introTitle: "About this policy",
      intro:
        "This policy explains what personal data TMC – Technology Metro Company collects, why we collect it, who we share it with, how long we keep it and the choices you have. It applies to visitors, customers and partners.",
      highlights: [],
      sections: [
        {
          title: "Who we are and where this applies",
          items: [
            {
              title: "Who is responsible for your data",
              body: "TMC – Technology Metro Company (TMC SMART), Sarmada, Idlib, Syria. You can reach us at sales@tmcsmart.shop or on +963 965 445 580.",
            },
            {
              title: "Where this policy applies",
              body: "On tmcsmart.com, our online store at erp.tmcsmart.com, our WhatsApp numbers, our pages on social networks, the TMC assistant, and our digital services such as websites, apps, booking systems, hosting and payments.",
            },
          ],
        },
        {
          title: "Information we collect",
          items: [
            {
              title: "Information you give us",
              body: "Your name, phone number, email address, company name, delivery and billing address, order and special order details, and anything you send us in forms, emails or WhatsApp chats, including voice notes, photos and files.",
            },
            {
              title: "Information collected automatically",
              body: "Basic technical data such as your IP address, browser and device type, the pages you visit and the time of your visit, kept in server and security logs. On the online store, Google Analytics also measures visits, as our cookie policy explains.",
            },
            {
              title: "Information from other services",
              body: "When you message our pages on Facebook, Instagram or other networks, or connect one of your accounts to our tools, we receive the information that platform shares under the permissions you approve, such as your name, profile picture, page details and messages. Payment providers tell us whether a payment succeeded; we never receive or store full card numbers.",
            },
          ],
        },
        {
          title: "How we use your information",
          items: [
            {
              title: "To serve you",
              body: "To process, deliver and support orders and special orders, issue invoices, answer your questions, follow up on warranty and give technical help.",
            },
            {
              title: "Your account and verification",
              body: "To create your customer account, verify your phone number or email with a one-time code, and show you only your own orders, invoices and support requests.",
            },
            {
              title: "Improving our service",
              body: "To understand which products and questions come up most often, improve our website, store and answers, and keep our systems secure.",
            },
            {
              title: "Messages and offers",
              body: "We send order and service updates to customers. We send offers only to people who agreed to receive them or who already buy from us, and you can stop them at any time by replying STOP or contacting us.",
            },
            {
              title: "Legal basis",
              body: "We use your data to fulfil our agreement with you, for our legitimate interest in running and improving our business, to meet legal and accounting obligations, and with your consent where it is required. You can withdraw your consent at any time.",
            },
          ],
        },
        {
          title: "The TMC assistant",
          items: [
            {
              title: "How the assistant works",
              body: "Our website and WhatsApp assistant can answer questions automatically. To write a reply, your messages are processed by artificial intelligence providers such as OpenAI, Anthropic, Google or OpenRouter, and we send them only what the conversation needs.",
            },
            {
              title: "Your orders in the assistant",
              body: "Before the assistant discusses your orders or invoices, it verifies your phone number with a one-time code. You can ask for a person at any time. Please don't share passwords or card numbers in a chat.",
            },
          ],
        },
        {
          title: "Social networks and connected accounts",
          items: [
            {
              title: "How we use platform data",
              body: "When you connect a Facebook, Instagram, TikTok, LinkedIn, Google, YouTube or other account to a TMC tool, we use the permissions you approve only to provide the feature you asked for, such as publishing or scheduling posts, replying to messages and showing page statistics. We do not sell this data, use it for advertising, or share it with data brokers.",
            },
            {
              title: "Google user data",
              body: "TMC's use and transfer of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements.",
            },
            {
              title: "Removing our access",
              body: "You can remove our access at any time from your account settings on the platform, for example in Facebook under Settings › Apps and websites, and ask us to delete the data we received, as explained on our data deletion page.",
            },
          ],
        },
        {
          title: "Sharing, storage and security",
          items: [
            {
              title: "Who we share data with",
              body: "We do not sell or rent your personal data. We share only what is needed with delivery and shipping companies, payment providers, the hosting and cloud providers that run our servers, artificial intelligence providers for the assistant, and accountants or authorities when the law requires it.",
            },
            {
              title: "Where your data is stored",
              body: "Our servers and service providers may be outside Syria, for example in Europe. We choose providers that protect data with appropriate safeguards.",
            },
            {
              title: "How long we keep it",
              body: "We keep invoices and transaction records for as long as accounting and legal obligations require. We keep chats and account data while you are a customer, and delete or anonymize them on request or when they are no longer needed. Security logs are kept for a limited time.",
            },
            {
              title: "How we protect it",
              body: "We use encrypted connections (HTTPS), access controls, protected admin panels and regular backups. No system is perfectly secure, so please tell us right away if you suspect your data has been misused.",
            },
          ],
        },
        {
          title: "Your rights",
          items: [
            {
              title: "Your choices",
              body: "You can ask to access, correct, export or delete your data, object to how we use it, stop offers and withdraw your consent. Contact us at sales@tmcsmart.shop or on WhatsApp at +963 965 445 580, and we will reply within 30 days.",
            },
            {
              title: "Deleting your data",
              body: "Our data deletion page (tmcsmart.com/en/data-deletion) explains how to send a request and which records we must keep by law.",
            },
            {
              title: "Children",
              body: "Our services are meant for businesses and adults. We do not knowingly collect data from children under 13. If you believe a child has sent us personal data, contact us and we will delete it.",
            },
            {
              title: "Changes to this policy",
              body: "We may update this policy. The new version is posted on this page with a new date, and we tell customers about important changes.",
            },
          ],
        },
      ],
      ctaTitle: "Questions about your data?",
      ctaLabel: "Contact TMC",
      ctaHref: "/contact",
    },
    legal: {
      metaTitle: "Policies | TMC SMART",
      eyebrow: "Policies",
      title: "Policies and terms",
      summary:
        "All of TMC's policies in one place: terms of use, privacy, returns and refunds, shipping, cookies and data deletion.",
      updated: policiesUpdated,
      metrics: [],
      introTitle: "Who these policies apply to",
      intro:
        "These policies apply to everyone who uses tmcsmart.com, our online store at erp.tmcsmart.com, our WhatsApp channels, our social media pages, the TMC assistant and our digital services.",
      highlights: [],
      links: [
        {
          href: "/terms-of-use",
          title: "Terms of use",
          body: "The rules for using our website, store, assistant and services.",
        },
        {
          href: "/privacy-policy",
          title: "Privacy policy",
          body: "What data we collect, why, who we share it with and your rights.",
        },
        {
          href: "/return-policy",
          title: "Return and refund policy",
          body: "Returns, refunds, cancellations and warranty.",
        },
        {
          href: "/shipping-policy",
          title: "Shipping policy",
          body: "Delivery across Syria, costs, times and branch pickup.",
        },
        {
          href: "/cookie-policy",
          title: "Cookie policy",
          body: "Which cookies are used and how to control them.",
        },
        {
          href: "/data-deletion",
          title: "Data deletion",
          body: "How to ask us to delete your personal data.",
        },
      ],
      ctaTitle: "Questions about our policies?",
      ctaLabel: "Contact TMC",
      ctaHref: "/contact",
    },
    shipping: {
      metaTitle: "Shipping Policy | TMC SMART",
      eyebrow: "Shipping Policy",
      title: "Shipping and delivery policy",
      summary:
        "How TMC prepares and delivers orders across Syria, how delivery costs are set, and what to check when your order arrives.",
      updated: policiesUpdated,
      metrics: [],
      introTitle: "Where we deliver",
      intro:
        "We deliver to all Syrian governorates through shipping companies. You can also collect your order free of charge from our Sarmada or Maarat al-Numan branch.",
      highlights: [],
      sections: [
        {
          title: "Delivery",
          items: [
            {
              title: "Coverage",
              body: "All governorates of Syria. We do not currently ship outside Syria.",
            },
            {
              title: "Preparing your order",
              body: "We prepare in-stock orders once the order is confirmed and, where required, paid. Special orders are shipped once they arrive from the supplier.",
            },
            {
              title: "Delivery time",
              body: "It depends on the governorate and the shipping company. Our team tells you the expected time when confirming your order, and lets you know if anything changes.",
            },
            {
              title: "Delivery cost",
              body: "It depends on the destination and on the size and weight of the order. We tell you the cost before shipping. Pickup from our branches is free.",
            },
            {
              title: "Branch pickup",
              body: "Choose pickup when you order, and we will tell you when your order is ready at the Sarmada or Maarat al-Numan branch. Bring your order number or the phone number you ordered with.",
            },
          ],
        },
        {
          title: "When your order arrives",
          items: [
            {
              title: "Address and phone",
              body: "Give a complete address and a phone number we can reach. If delivery fails because of a wrong address or no answer, delivering again may cost extra.",
            },
            {
              title: "Inspect your order",
              body: "Check the package and the products when you receive them. Report any damage, missing item or defect within 24 hours with photos, as set out in our return and refund policy.",
            },
            {
              title: "Responsibility for the order",
              body: "Responsibility for the order passes to you when it is delivered to you or your representative, or handed to you at the branch.",
            },
            {
              title: "Delays",
              body: "Shipping companies, roads, weather or other events outside our control can cause delays. We keep you informed and follow up with the shipping company for you.",
            },
          ],
        },
      ],
      ctaTitle: "Questions about a delivery?",
      ctaLabel: "Contact TMC",
      ctaHref: "/contact",
    },
    cookies: {
      metaTitle: "Cookie Policy | TMC SMART",
      eyebrow: "Cookie Policy",
      title: "Cookie policy",
      summary:
        "What cookies are, which ones tmcsmart.com and our online store use, and how you can control them.",
      updated: policiesUpdated,
      metrics: [],
      introTitle: "Our approach",
      intro:
        "Cookies are small files a website saves in your browser. tmcsmart.com does not use advertising or tracking cookies. Our online store uses the cookies it needs to work, and analytics cookies only if you accept them.",
      highlights: [],
      sections: [
        {
          title: "Cookies we use",
          items: [
            {
              title: "On tmcsmart.com",
              body: "The website itself does not set advertising, analytics or tracking cookies.",
            },
            {
              title: "Security",
              body: "Our security and delivery provider, Cloudflare, may set strictly necessary cookies to protect the site from attacks and abuse. They are not used to identify you or for advertising.",
            },
            {
              title: "Online store",
              body: "The store at erp.tmcsmart.com uses necessary cookies to keep your session, cart and language, such as session_id and frontend_lang. The store cannot work without them.",
            },
            {
              title: "Store analytics",
              body: "The store uses Google Analytics to understand how it is used. It sets analytics cookies only if you accept them in the store's cookie bar; otherwise Google receives only anonymous measurements without cookies. Advertising cookies stay off.",
            },
            {
              title: "Other websites",
              body: "When you follow a link to WhatsApp, Facebook or another website, that website's own cookie policy applies.",
            },
          ],
        },
        {
          title: "Your choices",
          items: [
            {
              title: "Controlling cookies",
              body: "You can block or delete cookies in your browser settings. Blocking necessary cookies may stop the store or parts of the site from working.",
            },
            {
              title: "Changes",
              body: "If we add analytics or other optional cookies in the future, we will update this policy and ask for your consent first where required.",
            },
          ],
        },
      ],
      ctaTitle: "Questions about cookies?",
      ctaLabel: "Contact TMC",
      ctaHref: "/contact",
    },
    dataDeletion: {
      metaTitle: "Data Deletion | TMC SMART",
      eyebrow: "Data Deletion",
      title: "How to delete your data",
      summary:
        "How to ask TMC to delete your personal data, including data we received through Facebook, Instagram, WhatsApp, Google or other platforms you connected to our services.",
      updated: policiesUpdated,
      metrics: [],
      introTitle: "Your right to deletion",
      intro:
        "You can ask us to delete your personal data at any time. Requests are free, and we confirm when the deletion is done.",
      highlights: [],
      sections: [
        {
          title: "How to send a request",
          items: [
            {
              title: "1. Contact us",
              body: "Email sales@tmcsmart.shop with the subject “Data deletion request”, or send “Delete my data” on WhatsApp to +963 965 445 580.",
            },
            {
              title: "2. Tell us who you are",
              body: "Include your name and the phone number, email or social media account you used with us, so we can find your data.",
            },
            {
              title: "3. Verification",
              body: "We may send a one-time code to your phone or email to make sure the request comes from you.",
            },
            {
              title: "4. Confirmation",
              body: "We confirm receipt within 3 working days, complete the deletion within 30 days, and send you a confirmation.",
            },
          ],
        },
        {
          title: "Facebook, Instagram and other platforms",
          items: [
            {
              title: "Remove the app",
              body: "On Facebook, open Settings & privacy › Settings › Apps and websites, find the TMC SMART app and choose Remove. On other platforms, remove TMC SMART from your connected apps.",
            },
            {
              title: "Then ask us to delete",
              body: "Removing the app stops any new access. To delete the data we already received, send a request as described above and mention the platform.",
            },
          ],
        },
        {
          title: "What we delete and what we keep",
          items: [
            {
              title: "What we delete",
              body: "Your contact details, customer account, chat history, assistant conversations, and the access tokens and data we received from connected platforms.",
            },
            {
              title: "What we must keep",
              body: "Invoices and transaction records that accounting and legal obligations require us to keep. We keep only what is needed and delete it when that period ends.",
            },
          ],
        },
      ],
      ctaTitle: "Ready to send a request?",
      ctaLabel: "Contact TMC",
      ctaHref: "/contact",
    },
  } satisfies Record<PageKey, ContentPageData>,
};

export type Dictionary = typeof en;
