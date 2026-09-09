import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  {
    title: "Chrome Dreams",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    rotation: "rotate-3",
  },
  {
    title: "Soft Machines",
    image:
      "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=800&auto=format&fit=crop",
    rotation: "-rotate-2",
  },
  {
    title: "Gradient Study",
    image:
      "https://images.unsplash.com/photo-1618556450994-a6a128ef0d99?q=80&w=800&auto=format&fit=crop",
    rotation: "rotate-2",
  },
  {
    title: "Liquid Form",
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
    rotation: "-rotate-3",
  },
  {
    title: "Prism Play",
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
    rotation: "rotate-1",
  },
  {
    title: "Dark Matter",
    image:
      "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=800&auto=format&fit=crop",
    rotation: "-rotate-1",
  },
];

export default function Explorations() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const rightColRef = useRef<HTMLDivElement | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });
      gsap.fromTo(
        leftColRef.current,
        { y: 120 },
        {
          y: -120,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        rightColRef.current,
        { y: -80 },
        {
          y: 80,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const leftItems = [ITEMS[0], ITEMS[2], ITEMS[4]];
  const rightItems = [ITEMS[1], ITEMS[3], ITEMS[5]];
  const leftIndex = [0, 2, 4];
  const rightIndex = [1, 3, 5];

  return (
    <section
      ref={sectionRef}
      id="explorations"
      className="relative min-h-[300vh] bg-bg"
    >
      <div
        ref={contentRef}
        className="relative z-10 flex h-screen flex-col items-center justify-center px-6 text-center"
      >
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted">
          Explorations
        </p>
        <h2 className="mb-6 text-5xl leading-tight text-text-primary md:text-7xl">
          Visual <em className="font-display italic">playground</em>
        </h2>
        <p className="mb-10 max-w-md text-sm text-muted md:text-base">
          A running archive of visual experiments — gradients, textures, and
          happy accidents. Click any piece to view it up close.
        </p>
        <a
          href="https://dribbble.com"
          target="_blank"
          rel="noreferrer"
          className="group relative inline-flex rounded-full transition-transform duration-300 hover:scale-105"
        >
          <span
            className="accent-gradient absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden
          />
          <span className="relative flex items-center gap-2 rounded-full border border-stroke bg-bg px-7 py-3 text-sm text-text-primary transition-colors duration-300 group-hover:border-transparent">
            Dribbble <span aria-hidden>↗</span>
          </span>
        </a>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 flex justify-center">
        <div className="grid w-full max-w-[1400px] grid-cols-2 gap-8 px-6 sm:gap-12 md:gap-40 md:px-16">
          <div
            ref={leftColRef}
            className="flex flex-col items-center gap-[24vh] pb-[24vh] pt-[108vh]"
          >
            {leftItems.map((item, i) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setLightbox(leftIndex[i])}
                className={`group pointer-events-auto relative aspect-square w-full max-w-[320px] overflow-hidden rounded-3xl border border-stroke bg-surface shadow-2xl shadow-black/40 ${item.rotation}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-bg/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-1.5 text-xs font-medium text-black opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {item.title}
                </span>
              </button>
            ))}
          </div>
          <div
            ref={rightColRef}
            className="flex flex-col items-center gap-[24vh] pb-[24vh] pt-[140vh]"
          >
            {rightItems.map((item, i) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setLightbox(rightIndex[i])}
                className={`group pointer-events-auto relative aspect-square w-full max-w-[320px] overflow-hidden rounded-3xl border border-stroke bg-surface shadow-2xl shadow-black/40 ${item.rotation}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-bg/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-1.5 text-xs font-medium text-black opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {item.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 backdrop-blur-md"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              src={ITEMS[lightbox].image}
              alt={ITEMS[lightbox].title}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] max-w-full rounded-3xl border border-stroke object-contain"
            />
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-stroke bg-bg text-text-primary transition-colors hover:bg-surface"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
