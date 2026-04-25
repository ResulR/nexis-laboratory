import { ArrowRight, Phone, ShieldCheck, Sparkles } from "lucide-react";
import heroTooth from "@/assets/hero-tooth.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg grid-bg-fade pointer-events-none" />
      <div
        className="absolute inset-x-0 top-0 h-[420px] -z-10"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.985 0.012 235) 0%, transparent 100%)",
        }}
      />

      <div className="container-page relative pt-12 md:pt-20 pb-16 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full hairline bg-background/70 px-3.5 py-1.5 text-xs font-medium text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              Laboratori dentar · Kosovë
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] font-semibold text-balance">
              Mjeshtëria pas <br className="hidden sm:block" />
              <span className="italic font-normal">buzëqeshjes</span> suaj.
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-ink-soft text-pretty leading-relaxed">
              Në NEXIS Laboratory krijojmë restaurime dentare precize dhe
              estetike — kurora, ura, faseta dhe proteza — me teknologji moderne
              dhe përkushtim ndaj çdo detaji.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#sherbimet"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft hover:shadow-elev transition"
              >
                Zbulo shërbimet tona
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="tel:+38344379656"
                className="inline-flex items-center gap-2 rounded-full hairline bg-background px-6 py-3.5 text-sm font-medium text-ink hover:bg-surface transition"
              >
                <Phone className="h-4 w-4" />
                +383 44 379 656
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { v: "15+", l: "vite përvojë" },
                { v: "Lab", l: "kontroll i brendshëm" },
                { v: "B2B", l: "për klinika partnere" },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-line pl-4">
                  <dt className="font-display text-2xl sm:text-3xl font-semibold text-ink">
                    {s.v}
                  </dt>
                  <dd className="mt-1 text-xs sm:text-sm text-ink-soft leading-snug">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface-2 shadow-elev">
              <img
                src={heroTooth}
                alt="Restaurim dentar premium nga NEXIS Laboratory"
                className="h-full w-full object-cover"
                width={1024}
                height={1280}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, oklch(0.20 0.06 255 / 0.10) 100%)",
                }}
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -left-4 sm:-left-8 bottom-6 sm:bottom-10 max-w-[260px] rounded-2xl bg-background hairline shadow-elev p-4 flex items-start gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-surface text-primary shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink leading-tight">
                  Cilësi e kontrolluar
                </p>
                <p className="mt-1 text-xs text-ink-soft leading-snug">
                  Kontroll i kujdesshëm në çdo fazë të prodhimit.
                </p>
              </div>
            </div>

            <div className="absolute -right-2 top-6 hidden sm:flex items-center gap-2 rounded-full bg-background hairline px-3 py-1.5 shadow-soft">
              <Sparkles className="h-3.5 w-3.5 text-teal" />
              <span className="text-xs font-medium text-ink">CAD/CAM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
