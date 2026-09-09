import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Work } from "../data/works";

interface WorkCardProps {
  work: Work;
  delay?: number;
  spanClass?: string;
  sizingClass?: string;
}

export default function WorkCard({
  work,
  delay = 0,
  spanClass = "",
  sizingClass = "aspect-[4/3] md:aspect-auto md:h-[440px]",
}: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={spanClass}
    >
      <Link
        to={`/work/${work.slug}`}
        className={`group relative block w-full overflow-hidden rounded-3xl border border-stroke bg-surface ${sizingClass}`}
      >
        <img
          src={work.image}
          alt={work.titleLead + " " + work.titleAccent}
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
            {work.category}
          </p>
          <h3 className="text-xl text-white md:text-2xl">
            {work.titleLead} {work.titleAccent}
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
              <em className="font-display italic">
                {work.titleLead} {work.titleAccent}
              </em>
            </span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
