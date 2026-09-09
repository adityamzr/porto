import { motion } from "framer-motion";

const ENTRIES = [
  {
    title: "Designing for Emotion",
    readTime: "6 min read",
    date: "Aug 28, 2026",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Motion as Meaning",
    readTime: "4 min read",
    date: "Aug 14, 2026",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Systems Thinking for Interfaces",
    readTime: "8 min read",
    date: "Jul 30, 2026",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "The Quiet Craft of Micro-interactions",
    readTime: "5 min read",
    date: "Jul 11, 2026",
    image:
      "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=400&auto=format&fit=crop",
  },
];

export default function Journal() {
  return (
    <section id="journal" className="scroll-mt-24 bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 flex items-end justify-between gap-6 md:mb-14"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-stroke" aria-hidden />
              <span className="text-xs uppercase tracking-[0.3em] text-muted">
                Journal
              </span>
            </div>
            <h2 className="mb-3 text-4xl text-text-primary md:text-5xl">
              Recent <em className="font-display italic">thoughts</em>
            </h2>
            <p className="max-w-md text-sm text-muted md:text-base">
              Notes on design, motion, and the craft of building interfaces.
            </p>
          </div>
          <a
            href="#journal"
            onClick={(e) => e.preventDefault()}
            className="group relative hidden shrink-0 rounded-full transition-transform duration-300 hover:scale-105 md:inline-flex"
          >
            <span
              className="accent-gradient absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            />
            <span className="relative flex items-center gap-2 rounded-full border border-stroke bg-bg px-6 py-2.5 text-sm text-text-primary transition-colors duration-300 group-hover:border-transparent">
              View all <span aria-hidden>→</span>
            </span>
          </a>
        </motion.div>

        <div className="flex flex-col gap-4">
          {ENTRIES.map((entry, i) => (
            <motion.a
              key={entry.title}
              href="#journal"
              onClick={(e) => e.preventDefault()}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.06,
              }}
              className="group flex items-center gap-4 rounded-[40px] border border-stroke bg-surface/30 p-3 transition-colors duration-300 hover:bg-surface sm:gap-6 sm:rounded-full sm:p-4 sm:pr-6"
            >
              <img
                src={entry.image}
                alt={entry.title}
                loading="lazy"
                className="h-14 w-14 shrink-0 rounded-full object-cover sm:h-16 sm:w-16"
              />
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-base text-text-primary sm:text-lg">
                  {entry.title}
                </h3>
                <p className="mt-1 text-xs text-muted">
                  {entry.readTime} <span aria-hidden>•</span> {entry.date}
                </p>
              </div>
              <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-stroke text-muted transition-all duration-300 group-hover:border-transparent group-hover:bg-text-primary group-hover:text-bg sm:flex">
                <span aria-hidden>→</span>
              </span>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <a
            href="#journal"
            onClick={(e) => e.preventDefault()}
            className="group relative inline-flex rounded-full"
          >
            <span
              className="accent-gradient absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            />
            <span className="relative flex items-center gap-2 rounded-full border border-stroke bg-bg px-6 py-2.5 text-sm text-text-primary transition-colors duration-300 group-hover:border-transparent">
              View all <span aria-hidden>→</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
