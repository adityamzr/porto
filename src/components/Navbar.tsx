import { useEffect, useState } from "react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Resume", href: "#resume" },
];

const SECTION_TO_LABEL: Record<string, string> = {
  home: "Home",
  work: "Work",
  resume: "Resume",
};

function scrollToSection(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);

      let current = "home";
      for (const id of Object.keys(SECTION_TO_LABEL)) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          current = id;
        }
      }
      setActive(SECTION_TO_LABEL[current]);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <nav
        className={`inline-flex items-center rounded-full border border-white/10 bg-surface px-2 py-2 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-md shadow-black/10" : ""
        }`}
      >
        <a
          href="#home"
          aria-label="Home"
          onClick={(e) => {
            e.preventDefault();
            setActive("Home");
            scrollToSection("#home");
          }}
          className="accent-gradient block h-9 w-9 rounded-full p-[2px] transition-transform duration-300 hover:scale-110 hover:[background:linear-gradient(270deg,#89AACC_0%,#4E85BF_100%)]"
        >
          <span className="flex h-full w-full items-center justify-center rounded-full bg-bg font-display text-[13px] italic text-text-primary">
            JA
          </span>
        </a>

        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" aria-hidden />

        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              setActive(link.label);
              scrollToSection(link.href);
            }}
            className={`rounded-full px-3 py-1.5 text-xs transition-colors sm:px-4 sm:py-2 sm:text-sm ${
              active === link.label
                ? "bg-stroke/50 text-text-primary"
                : "text-muted hover:bg-stroke/50 hover:text-text-primary"
            }`}
          >
            {link.label}
          </a>
        ))}

        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" aria-hidden />

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#contact");
          }}
          className="group relative rounded-full text-xs sm:text-sm"
        >
          <span
            className="accent-gradient absolute -inset-0.5 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden
          />
          <span className="relative flex items-center gap-1 rounded-full bg-surface px-3 py-1.5 text-muted backdrop-blur-md transition-colors group-hover:text-text-primary sm:px-4 sm:py-2">
            Say hi <span aria-hidden>↗</span>
          </span>
        </a>
      </nav>
    </header>
  );
}
