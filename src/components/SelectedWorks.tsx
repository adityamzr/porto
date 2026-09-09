import { motion } from "framer-motion";
import WorkCard from "./WorkCard";
import { WORKS } from "../data/works";

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
          {WORKS.map((work, i) => (
            <WorkCard
              key={work.slug}
              work={work}
              delay={(i % 2) * 0.1}
              spanClass={work.span}
            />
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
