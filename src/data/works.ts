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
    slug: "automotive-motion",
    titleLead: "Automotive",
    titleAccent: "Motion",
    tagline:
      "A real-time 3D vehicle configurator that turns browsing into an experience.",
    category: "Motion / 3D",
    year: "2025",
    client: "Volt Automotive",
    role: "Fullstack Developer & Motion Designer",
    timeline: "4 months",
    deliverables: [
      "3D Configurator",
      "WebGL Experience",
      "Design System",
      "Headless CMS",
    ],
    description: [
      "Volt Automotive needed more than a product page — they needed a showroom that lives in the browser. I designed and built a real-time 3D configurator where visitors can rotate, recolor, and customize their vehicle with physically accurate lighting and motion.",
      "The experience runs at a locked 60fps on mid-range devices thanks to aggressive asset optimization and GPU-friendly shaders, while a headless CMS lets the marketing team publish new colorways and trims without touching code.",
    ],
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1400&auto=format&fit=crop",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1600&auto=format&fit=crop",
        caption: "Exterior studio lighting pass",
      },
      {
        src: "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1600&auto=format&fit=crop",
        caption: "Interior trim configurator",
      },
      {
        src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
        caption: "Real-time colorway switching",
      },
    ],
    stats: [
      { value: 60, suffix: "fps", label: "Render Performance" },
      { value: 38, suffix: "%", label: "Conversion Uplift" },
      { value: 12, suffix: "", label: "Colorways Shipped" },
    ],
    steps: [
      {
        title: "Discover",
        description:
          "Stakeholder workshops, a competitive teardown of configurators, and performance budgets defined up front.",
      },
      {
        title: "Design",
        description:
          "Motion studies, lighting direction, and a component system bridging the marketing site and 3D UI.",
      },
      {
        title: "Deliver",
        description:
          "React Three Fiber build, CMS integration, and device testing across 20+ phones and laptops.",
      },
    ],
    testimonial: {
      quote:
        "Aditya turned our configurator into the highest-converting page on the site. The motion work alone doubled time-on-page.",
      author: "Sarah Chen",
      position: "Chief Product Officer, Volt Automotive",
    },
    span: "md:col-span-7",
  },
  {
    slug: "urban-architecture",
    titleLead: "Urban",
    titleAccent: "Architecture",
    tagline:
      "A digital archive and portfolio platform for a decade of built work.",
    category: "Photography",
    year: "2024",
    client: "Studio Meridian",
    role: "Project Lead & Frontend Developer",
    timeline: "3 months",
    deliverables: [
      "Portfolio Platform",
      "Image Pipeline",
      "Booking Flow",
      "CMS",
    ],
    description: [
      "Studio Meridian had ten years of award-winning projects scattered across PDFs and social posts. I led the project end-to-end: discovery, sitemap, and a full rebuild of their portfolio into a fast, searchable archive.",
      "A custom image pipeline delivers responsive, art-directed photography at a fraction of the original file sizes, and an integrated booking flow turned the portfolio from a gallery into a lead engine.",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1600&auto=format&fit=crop",
        caption: "Facade study — Meridian Tower",
      },
      {
        src: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=1600&auto=format&fit=crop",
        caption: "Gallery grid with lazy detail views",
      },
      {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
        caption: "Studio interior, natural light",
      },
    ],
    stats: [
      { value: 120, suffix: "+", label: "Projects Archived" },
      { value: 65, suffix: "%", label: "More Inquiries" },
      { value: 70, suffix: "%", label: "Lighter Page Weight" },
    ],
    steps: [
      {
        title: "Discover",
        description:
          "Content audit of 120+ projects, stakeholder interviews, and analytics review.",
      },
      {
        title: "Design",
        description:
          "Editorial grid system, typography-first layouts, and art direction for photography.",
      },
      {
        title: "Deliver",
        description:
          "Performant build, automated image optimization, and a booking flow wired to the studio's CRM.",
      },
    ],
    testimonial: {
      quote:
        "Our portfolio finally matches the quality of our buildings. Inquiries doubled within a quarter.",
      author: "Daniel Reyes",
      position: "Principal Architect, Studio Meridian",
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
