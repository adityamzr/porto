import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 95, suffix: "+", label: "Projects Done" },
  { value: 200, suffix: "%", label: "Satisfied Clients" },
];

function Stat({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const DURATION = 1600;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col items-center"
    >
      <span className="font-display text-5xl tabular-nums text-text-primary md:text-6xl lg:text-7xl">
        {display}
        {suffix}
      </span>
      <span className="mt-3 text-xs uppercase tracking-[0.25em] text-muted">
        {label}
      </span>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section id="resume" className="scroll-mt-24 bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 rounded-3xl border border-stroke bg-surface/30 px-6 py-12 sm:grid-cols-3 sm:gap-6 md:py-16">
          {STATS.map((stat, i) => (
            <Stat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
