export interface WorkStat {
  value: number;
  suffix: string;
  label: string;
}

export interface WorkStep {
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  caption: string;
}

export interface WorkTestimonial {
  quote: string;
  author: string;
  position: string;
}

export interface Work {
  slug: string;
  titleLead: string;
  titleAccent: string;
  tagline: string;
  category: string;
  year: string;
  client: string;
  role: string;
  timeline: string;
  liveUrl: string;
  deliverables: string[];
  description: string[];
  image: string;
  gallery: GalleryImage[];
  stats: WorkStat[];
  steps: WorkStep[];
  testimonial: WorkTestimonial;
  span: string;
}

export const WORKS: Work[] = [
  {
    slug: "onemission",
    titleLead: "Onemission",
    titleAccent: "Ecommerce",
    tagline: "Bring back the value, because muslim values matter.",
    category: "Ecommerce",
    year: "2026",
    client: "Onemission",
    role: "Fullstack Developer",
    timeline: "2.5 months",
    liveUrl: "https://onemissionclo.com",
    deliverables: [
      "Ecommerce Platform",
      "Payment Gateway Integration",
      "Guest Checkout",
      "Order Tracking",
      "Responsive Design",
      "Donation Feature",
      "Voting System",
    ],
    description: [
      "ONEMISSION needed more than a storefront — they needed a complete commerce experience for modest sportswear. I designed and built the platform around product discovery, size selection, cart management, checkout, order tracking, and a seamless customer journey.",

      "The platform brings together Midtrans payments, RajaOngkir and Biteship shipping, automated order workflows, inventory management, and an integrated admin system to support the entire operation behind the customer experience.",
    ],
    image:
      "https://ik.imagekit.io/fkoy34ckk/Porto%20Assets/image.png?updatedAt=1789009281565",
    gallery: [
      {
        src: "https://ik.imagekit.io/fkoy34ckk/Porto%20Assets/onemission-commerce/image2.png?updatedAt=1789009796671",
        caption: "Homepage with showroom hero",
      },
      {
        src: "https://ik.imagekit.io/fkoy34ckk/Porto%20Assets/onemission-commerce/image3.png?updatedAt=1789009856509",
        caption: "List of products with layout switcher",
      },
      {
        src: "https://ik.imagekit.io/fkoy34ckk/Porto%20Assets/onemission-commerce/image.png?updatedAt=1789009774465",
        caption: "Give customer a knowledge of the product",
      },
    ],
    stats: [
      { value: 100, suffix: "%", label: "Responsive Experience" },
      { value: 3, suffix: "", label: "Payment & Shipping Integrations" },
      { value: 1, suffix: "", label: "End-to-End Commerce Flow" },
    ],
    steps: [
      {
        title: "Define",
        description:
          "Mapped the ONEMISSION concept into a complete e-commerce experience, from customer journey to core product requirements.",
      },
      {
        title: "Architect",
        description:
          "Designed a cohesive architecture connecting the Nuxt storefront, Laravel backend, APIs, and admin system.",
      },
      {
        title: "Build",
        description:
          "Built the shopping experience across product discovery, cart, checkout, orders, and responsive customer interactions.",
      },
      {
        title: "Integrate",
        description:
          "Connected shipping, payment, and commerce workflows to create a seamless end-to-end purchasing experience.",
      },
      {
        title: "Ship",
        description:
          "Delivered a maintainable, scalable, and production-ready e-commerce platform built around ONEMISSION's needs.",
      },
    ],
    testimonial: {
      quote:
        "Working on ONEMISSION with this team turned our vision into a modern, seamless digital experience. The website feels fast, clean, and truly reflects who we are as a brand.",
      author: "Fachri Hasan",
      position: "Founder & CEO, Onemission",
    },
    span: "md:col-span-7",
  },
  {
    slug: "sudut-haramain",
    titleLead: "Sudut",
    titleAccent: "Haramain",
    tagline:
      "See Haramain up close through local culture, information directly from Makkah and Madinah, and practical guides.",
    category: "Media",
    year: "2026",
    client: "Sudut Haramain",
    role: "IT Consultant & Fullstack Developer",
    timeline: "2 weeks",
    liveUrl: "https://sudutharamain.id", // TODO: ganti dengan URL website asli Studio Meridian
    deliverables: [
      "Media Website",
      "Editorial CMS",
      "Responsive Design",
      "CTA & Lead Generation",
      "Searchable Content",
      "Downloadable Resources",
    ],
    description: [
      "Sudut Haramain needed more than a conventional travel website — it needed a digital platform that could make Makkah and Madinah feel closer, more accessible, and easier to navigate for Indonesian pilgrims. I designed and built the experience around practical information, local insights, and curated content from the Haramain.",

      "The platform brings together real-time observations, city guides, transportation, worship preparation, local culture, and practical pilgrim resources in one streamlined experience. The result is a content-driven platform designed to help visitors discover, understand, and navigate Makkah–Madinah with greater confidence.",
    ],
    image:
      "https://ik.imagekit.io/fkoy34ckk/Porto%20Assets/sudut-haramain/image.png",
    gallery: [
      {
        src: "https://ik.imagekit.io/fkoy34ckk/Porto%20Assets/sudut-haramain/image2.png",
        caption: "Welcome Page — Sudut Harmain",
      },
      {
        src: "https://ik.imagekit.io/fkoy34ckk/Porto%20Assets/sudut-haramain/image3.png",
        caption: "Gallery grid with lazy detail views",
      },
      {
        src: "https://ik.imagekit.io/fkoy34ckk/Porto%20Assets/sudut-haramain/image_78dhYykft.png",
        caption: "Description of what sudut haramain is about",
      },
    ],
    stats: [
      { value: 6, suffix: "", label: "Core Content Sections" },
      { value: 18, suffix: "+", label: "Practical Topics" },
      { value: 2, suffix: "", label: "Cities Covered" },
    ],

    steps: [
      {
        title: "Discover",
        description:
          "Structured the content around how Indonesian pilgrims actually explore Makkah and Madinah, from transportation and worship preparation to food, culture, and daily conditions.",
      },
      {
        title: "Design",
        description:
          "Designed an editorial-first experience with clear content categories, contextual discovery, and situation-based navigation to make practical information easier to find.",
      },
      {
        title: "Deliver",
        description:
          "Built a responsive digital media platform that brings together Haramain updates, city guides, practical resources, and curated local insights in one streamlined experience.",
      },
    ],

    testimonial: {
      quote:
        "The website gives Sudut Haramain a much stronger digital presence. It makes our information easier to explore while keeping the experience simple, informative, and true to our identity.",
      author: "Ustadz Zulfadli",
      position: "Founder, Sudut Haramain",
    },
    span: "md:col-span-5",
  },
  {
    slug: "human-perspective",
    titleLead: "Human",
    titleAccent: "Perspective",
    tagline:
      "An editorial storytelling platform documenting craftspeople across Asia.",
    category: "Editorial",
    year: "2025",
    client: "Fieldnotes Collective",
    role: "Founder & Fullstack Developer",
    timeline: "Ongoing",
    liveUrl: "#", // TODO: ganti dengan URL website asli Fieldnotes Collective
    deliverables: [
      "Editorial Platform",
      "Reading Experience",
      "Memberships",
      "Newsletter",
    ],
    description: [
      "Human Perspective started as a self-initiated project: long-form photo essays about craftspeople, designed to be read slowly. I built the entire platform — from the distraction-free reading experience to memberships and publishing tools.",
      "Typography does the heavy lifting: fluid serif scales, generous line-length control, and offline reading support. The result is a publication that feels like print but lives and breathes on the web.",
    ],
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1600&auto=format&fit=crop",
        caption: "Portrait series — the weavers",
      },
      {
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1600&auto=format&fit=crop",
        caption: "Reading view, distraction-free",
      },
      {
        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1600&auto=format&fit=crop",
        caption: "Behind the lens, on location",
      },
    ],
    stats: [
      { value: 32, suffix: "", label: "Stories Published" },
      { value: 180, suffix: "k", label: "Monthly Readers" },
      { value: 12, suffix: "", label: "Countries Reached" },
    ],
    steps: [
      {
        title: "Discover",
        description:
          "Reader interviews, print-magazine teardown, and defining what “slow reading” means digitally.",
      },
      {
        title: "Design",
        description:
          "Serif-first type system, essay templates, and a photo treatment guide.",
      },
      {
        title: "Deliver",
        description:
          "Full-stack platform with memberships, offline support, and an editor-friendly CMS.",
      },
    ],
    testimonial: {
      quote:
        "The most beautiful reading experience we've published on. Our stories finally get the stage they deserve.",
      author: "Amara Wijaya",
      position: "Editor-in-Chief, Fieldnotes Collective",
    },
    span: "md:col-span-5",
  },
  {
    slug: "brand-identity",
    titleLead: "Brand",
    titleAccent: "Identity",
    tagline: "A complete identity and design system for a rising fintech.",
    category: "Branding",
    year: "2024",
    client: "Kirana Finance",
    role: "Design Engineer & Branding Consultant",
    timeline: "2 months",
    liveUrl: "#", // TODO: ganti dengan URL website asli Kirana Finance
    deliverables: [
      "Logo System",
      "Design Tokens",
      "Component Library",
      "Marketing Site",
    ],
    description: [
      "Kirana Finance was growing fast but looked like five different companies. I created a unified identity — logo system, color tokens, typography — and engineered it into a living design system the whole team could build on.",
      "Every token ships as code: the same source of truth powers the marketing site, the mobile app, and investor decks. Rebrands of individual surfaces dropped from weeks to hours.",
    ],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1400&auto=format&fit=crop",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1600&auto=format&fit=crop",
        caption: "Primary lockups and clearspace",
      },
      {
        src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1600&auto=format&fit=crop",
        caption: "Token-driven component library",
      },
      {
        src: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=1600&auto=format&fit=crop",
        caption: "Marketing site color system",
      },
    ],
    stats: [
      { value: 48, suffix: "", label: "Components Shipped" },
      { value: 3, suffix: "x", label: "Faster Releases" },
      { value: 100, suffix: "%", label: "Team Adoption" },
    ],
    steps: [
      {
        title: "Discover",
        description:
          "Brand audit, stakeholder alignment, and mapping every surface the identity must live on.",
      },
      {
        title: "Design",
        description:
          "Logo exploration, token architecture, and a 48-component library.",
      },
      {
        title: "Deliver",
        description:
          "Coded design system, documentation site, and a relaunched marketing homepage.",
      },
    ],
    testimonial: {
      quote:
        "Aditya didn't just design a logo — he gave us a system our engineers actually enjoy using.",
      author: "Bagas Pratama",
      position: "CTO, Kirana Finance",
    },
    span: "md:col-span-7",
  },
];

export function getWork(slug: string): Work | undefined {
  return WORKS.find((work) => work.slug === slug);
}

export function getRelatedWorks(slug: string): Work[] {
  return WORKS.filter((work) => work.slug !== slug);
}
