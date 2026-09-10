import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Navbar from "../components/Navbar";
import ContactFooter from "../components/ContactFooter";
import WorkCard from "../components/WorkCard";
import { getRelatedWorks, getWork } from "../data/works";

function DetailStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
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
    <div ref={ref} className="flex flex-col">
      <span className="font-display text-4xl tabular-nums text-text-primary md:text-5xl">
        {display}
        {suffix}
      </span>
      <span className="mt-2 text-xs uppercase tracking-[0.25em] text-muted">
        {label}
      </span>
    </div>
  );
}

export default function WorkDetail() {
  const { slug } = useParams();
  const work = getWork(slug ?? "");

  useEffect(() => {
    if (work) {
      document.title = `${work.titleLead} ${work.titleAccent} — Aditya M Zain`;
    }
  }, [work]);

  if (!work) {
    return <Navigate to="/" replace />;
  }

  const related = getRelatedWorks(work.slug);
  const meta = [
    { label: "Client", value: work.client },
    { label: "Role", value: work.role },
    { label: "Year", value: work.year },
    { label: "Timeline", value: work.timeline },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-bg font-body text-text-primary"
    >
      <Navbar />

      <main>
        {/* Split hero */}
        <section className="bg-bg pb-12 pt-28 md:pb-16 md:pt-36">
          <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-10 flex items-center justify-between gap-4"
            >
              <Link
                to="/"
                state={{ scrollTo: "work" }}
                className="group relative inline-flex shrink-0 rounded-full transition-transform duration-300 hover:scale-105"
              >
                <span
                  className="accent-gradient absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <span className="relative flex items-center gap-2 rounded-full border border-stroke bg-bg px-5 py-2 text-sm text-text-primary transition-colors duration-300 group-hover:border-transparent">
                  <span aria-hidden>←</span> All Works
                </span>
              </Link>
              <span className="truncate text-xs uppercase tracking-[0.3em] text-muted">
                {work.category} • {work.year}
              </span>
            </motion.div>

            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              >
                <h1 className="mb-5 text-5xl leading-[1.02] text-text-primary md:text-6xl lg:text-7xl">
                  {work.titleLead}{" "}
                  <em className="font-display italic">{work.titleAccent}</em>
                </h1>
                <p className="mb-8 max-w-lg text-sm text-muted md:text-base">
                  {work.tagline}
                </p>
                <dl className="mb-8 grid grid-cols-2 gap-x-6 gap-y-5">
                  {meta.map((item) => (
                    <div key={item.label}>
                      <dt className="mb-1.5 text-xs uppercase tracking-[0.2em] text-muted">
                        {item.label}
                      </dt>
                      <dd className="text-sm text-text-primary md:text-base">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="flex flex-wrap gap-2">
                  {work.deliverables.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-stroke px-4 py-1.5 text-xs text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={work.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative mt-8 inline-flex rounded-full transition-transform duration-300 hover:scale-105"
                >
                  <span
                    className="accent-gradient absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />
                  <span className="relative flex items-center gap-2 rounded-full border-2 border-stroke bg-bg px-7 py-3.5 text-sm font-medium text-text-primary transition-colors duration-300 group-hover:border-transparent">
                    Visit Live Site <span aria-hidden>↗</span>
                  </span>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                className="relative overflow-hidden rounded-3xl border border-stroke bg-surface"
              >
                <img
                  src={work.image}
                  alt={`${work.titleLead} ${work.titleAccent}`}
                  className="aspect-[4/3] w-full object-cover"
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-bg py-12 md:py-16">
          <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
            <div className="grid gap-10 lg:grid-cols-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:col-span-4"
              >
                <div className="lg:sticky lg:top-28">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-stroke" aria-hidden />
                    <span className="text-xs uppercase tracking-[0.3em] text-muted">
                      Overview
                    </span>
                  </div>
                  <h2 className="text-4xl text-text-primary md:text-5xl">
                    The <em className="font-display italic">story</em>
                  </h2>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.1,
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:col-span-8"
              >
                {work.description.map((paragraph, i) => (
                  <p
                    key={i}
                    className={`max-w-2xl text-sm leading-relaxed text-muted md:text-base ${
                      i > 0 ? "mt-5" : ""
                    } ${i === 0 ? "text-lg text-text-primary/90 md:text-xl" : ""}`}
                  >
                    {paragraph}
                  </p>
                ))}
                <div className="mt-10 grid grid-cols-1 gap-8 border-t border-stroke pt-10 sm:grid-cols-3">
                  {work.stats.map((stat) => (
                    <DetailStat
                      key={stat.label}
                      value={stat.value}
                      suffix={stat.suffix}
                      label={stat.label}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-bg py-12 md:py-16">
          <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-10 md:mb-14"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-stroke" aria-hidden />
                <span className="text-xs uppercase tracking-[0.3em] text-muted">
                  Gallery
                </span>
              </div>
              <h2 className="mb-3 text-4xl text-text-primary md:text-5xl">
                Selected <em className="font-display italic">frames</em>
              </h2>
              <p className="max-w-md text-sm text-muted md:text-base">
                Key moments from the project, from early explorations to final
                delivery.
              </p>
            </motion.div>

            <div className="flex flex-col gap-10 md:gap-14">
              {work.gallery.map((item, i) => (
                <motion.figure
                  key={item.src}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className="group overflow-hidden rounded-3xl border border-stroke bg-surface">
                    <img
                      src={item.src}
                      alt={item.caption}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                  <figcaption className="mt-4 flex items-center justify-between gap-4 text-xs text-muted">
                    <span className="min-w-0 truncate">
                      <span className="font-display text-sm italic text-text-primary">
                        0{i + 1}
                      </span>{" "}
                      — {item.caption}
                    </span>
                    <span className="hidden shrink-0 uppercase tracking-[0.2em] sm:block">
                      {work.category}
                    </span>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-bg py-12 md:py-16">
          <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-10 md:mb-14"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-stroke" aria-hidden />
                <span className="text-xs uppercase tracking-[0.3em] text-muted">
                  Process
                </span>
              </div>
              <h2 className="mb-3 text-4xl text-text-primary md:text-5xl">
                How it <em className="font-display italic">came together</em>
              </h2>
              <p className="max-w-md text-sm text-muted md:text-base">
                A focused process, one goal — building work that performs as
                good as it looks.
              </p>
            </motion.div>

            <div className="flex flex-col gap-4">
              {work.steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: i * 0.06,
                  }}
                  className="flex items-center gap-4 rounded-[40px] border border-stroke bg-surface/30 p-3 sm:gap-6 sm:rounded-full sm:p-4 sm:pr-8"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-stroke font-display text-lg italic text-text-primary sm:h-16 sm:w-16">
                    0{i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base text-text-primary sm:text-lg">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted sm:text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="bg-bg py-12 md:py-16">
          <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
            <motion.figure
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="rounded-3xl border border-stroke bg-surface/30 px-8 py-12 text-center md:px-16 md:py-16"
            >
              <span
                className="font-display text-7xl italic leading-none text-muted/40"
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote className="mx-auto -mt-4 max-w-3xl font-display text-2xl italic leading-snug text-text-primary/90 md:text-4xl">
                {work.testimonial.quote}
              </blockquote>
              <figcaption className="mt-8">
                <p className="text-sm text-text-primary">
                  {work.testimonial.author}
                </p>
                <p className="mt-1 text-xs text-muted">
                  {work.testimonial.position}
                </p>
              </figcaption>
            </motion.figure>
          </div>
        </section>

        {/* Related */}
        <section className="bg-bg py-12 md:py-16">
          <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-10 md:mb-14"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-stroke" aria-hidden />
                <span className="text-xs uppercase tracking-[0.3em] text-muted">
                  Keep exploring
                </span>
              </div>
              <h2 className="mb-3 text-4xl text-text-primary md:text-5xl">
                More <em className="font-display italic">work</em>
              </h2>
              <p className="max-w-md text-sm text-muted md:text-base">
                Continue browsing — every project has its own story.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
              {related.map((item, i) => (
                <WorkCard
                  key={item.slug}
                  work={item}
                  delay={i * 0.08}
                  sizingClass="aspect-[4/3] md:aspect-auto md:h-[360px]"
                />
              ))}
            </div>
          </div>
        </section>

        <ContactFooter showMarquee={false} />
      </main>
    </motion.div>
  );
}
