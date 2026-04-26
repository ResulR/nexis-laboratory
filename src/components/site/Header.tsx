import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import nexisLogoMark from "@/assets/nexis-logo-mark-white.png";

const NAV = [
  { href: "#rreth", label: "Rreth nesh" },
  { href: "#sherbimet", label: "Shërbimet" },
  { href: "#pse", label: "Pse ne" },
  { href: "#angazhimi", label: "Angazhimi" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-line"
          : "bg-background/40 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-16 md:h-20 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary p-1.5">
            <img
              src={nexisLogoMark}
              alt="NEXIS Laboratory"
              className="h-full w-full object-contain"
              width={36}
              height={36}
            />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold tracking-tight text-ink">
              NEXIS
            </span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-ink-soft">
              Laboratory
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-ink-soft hover:text-ink transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+38344379656"
            className="hidden lg:flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-ink"
          >
            <Phone className="h-4 w-4" />
            +383 44 379 656
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft hover:opacity-90 transition"
          >
            Na kontaktoni
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-10 w-10 place-items-center rounded-md hairline text-ink"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-background">
          <div className="container-page py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-ink border-b border-line/60 last:border-b-0"
              >
                {n.label}
              </a>
            ))}
            <a
              href="tel:+38344379656"
              className="mt-3 flex items-center gap-2 text-sm text-ink-soft"
            >
              <Phone className="h-4 w-4" /> +383 44 379 656
            </a>
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Na kontaktoni
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
