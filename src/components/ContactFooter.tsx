import { useEffect, useRef } from "react";
import gsap from "gsap";
import HlsVideo from "./HlsVideo";
import { VIDEO_SRC } from "../constants";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/adityamzr" },
  { label: "LinkedIn", href: "https://linkedin.com/adityamuhammadzr" },
  { label: "GitHub", href: "https://github.com/adityamzr" },
  { label: "Email", href: "mailto:adityamzainir@gmail.com" },
];

const MARQUEE_ROW = "BUILD ON TRUST • ".repeat(10);

export default function ContactFooter() {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <footer
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-bg pb-8 pt-16 md:pb-12 md:pt-20"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <HlsVideo
          src={VIDEO_SRC}
          className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-y-[-1] object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/60" aria-hidden />

      <div className="relative z-10">
        <div className="overflow-hidden">
          <div ref={marqueeRef} className="flex w-max whitespace-nowrap">
            <span className="font-display text-5xl italic text-text-primary/90 md:text-7xl">
              {MARQUEE_ROW}
            </span>
            <span
              className="font-display text-5xl italic text-text-primary/90 md:text-7xl"
              aria-hidden
            >
              {MARQUEE_ROW}
            </span>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-[1200px] flex-col items-center px-6 text-center md:mt-24">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted">
            Got a project in mind?
          </p>
          <h2 className="mb-10 text-4xl leading-tight text-text-primary md:text-6xl">
            Let&rsquo;s build something{" "}
            <em className="font-display italic">great</em>
          </h2>
          <a
            href="https://wa.me/6285724033354?text=Assalamu%27alaikum%2C%20saya%20menemukan%20portfolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut.%20Apakah%20kita%20bisa%20ngobrol%20mengenai%20peluang%20kerja%20sama%3F"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex rounded-full transition-transform duration-300 hover:scale-105"
          >
            <span
              className="accent-gradient absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            />
            <span className="relative flex items-center gap-2 rounded-full border border-stroke bg-bg/80 px-8 py-4 text-sm text-text-primary backdrop-blur-md transition-colors duration-300 group-hover:border-transparent md:text-base">
              Chat on WhatsApp <span aria-hidden>↗</span>
            </span>
          </a>
        </div>

        <div className="mx-auto mt-16 max-w-[1200px] px-6 md:mt-24 md:px-10 lg:px-16">
          <div className="flex flex-col items-center justify-between gap-6 border-t border-stroke pt-8 md:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted transition-colors hover:text-text-primary"
                >
                  {social.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for projects
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-muted/60">
            © 2026 Aditya M Zain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
