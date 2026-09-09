import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Automotive Motion",
    category: "Motion / 3D",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1400&auto=format&fit=crop",
    span: "md:col-span-7",
  },
  {
    title: "Urban Architecture",
    category: "Photography",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    span: "md:col-span-5",
  },
  {
    title: "Human Perspective",
    category: "Editorial",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
    span: "md:col-span-5",
  },
  {
    title: "Brand Identity",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1400&auto=format&fit=crop",
    span: "md:col-span-7",
  },
];

export default function SelectedWorks() {
  return (
    <section id="work" className="scroll-mt-24 bg-bg py-12 md:py-16">
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
                Selected Work
              </span>
            </div>
            <h2 className="mb-3 text-4xl text-text-primary md:text-5xl">
              Featured{" "}
              <em className="font-display italic">projects</em>
            </h2>
            <p className="max-w-md text-sm text-muted md:text-base">
              A selection of projects I&rsquo;ve worked on, from concept to
              launch.
            </p>
          </div>
          <a
            href="#work"
            onClick={(e) => e.preventDefault()}
            className="group relative hidden shrink-0 rounded-full transition-transform duration-300 hover:scale-105 md:inline-flex"
          >
            <span
              className="accent-gradient absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            />
            <span className="relative flex items-center gap-2 rounded-full border border-stroke bg-bg px-6 py-2.5 text-sm text-text-primary transition-colors duration-300 group-hover:border-transparent">
              View all work <span aria-hidden>→</span>
            </span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {PROJECTS.map((project, i) => (
            <motion.a
              key={project.title}
              href="#work"
              onClick={(e) => e.preventDefault()}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: (i % 2) * 0.1,
              }}
              className={`group relative aspect-[4/3] overflow-hidden rounded-3xl border border-stroke bg-surface md:aspect-auto md:h-[440px] ${project.span}`}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-20 mix-blend-multiply"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "4px 4px",
                }}
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-16">
                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-white/60">
                  {project.category}
                </p>
                <h3 className="text-xl text-white md:text-2xl">
                  {project.title}
                </h3>
              </div>
              <div
                className="absolute inset-0 bg-bg/70 opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="accent-gradient animate-gradient-shift rounded-full p-[2px]">
                  <span className="flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-6 py-3 text-sm font-medium text-black">
                    View —{" "}
                    <em className="font-display italic">{project.title}</em>
                  </span>
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <a
            href="#work"
            onClick={(e) => e.preventDefault()}
            className="group relative inline-flex rounded-full"
          >
            <span
              className="accent-gradient absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            />
            <span className="relative flex items-center gap-2 rounded-full border border-stroke bg-bg px-6 py-2.5 text-sm text-text-primary transition-colors duration-300 group-hover:border-transparent">
              View all work <span aria-hidden>→</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
