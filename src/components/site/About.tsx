import { Gem, Clock3 } from "lucide-react";
import aboutLab from "@/assets/nexis-about.jpg";

const PILLARS = ["Precizion", "Estetikë", "Besueshmëri"];

export function About() {
  return (
    <section id="rreth" className="py-20 md:py-32">
      <div className="container-page grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[5/6] rounded-3xl overflow-hidden bg-surface-2 shadow-elev">
            <img
              src={aboutLab}
              alt="Teknik dentar duke punuar në laborator NEXIS"
              loading="lazy"
              className="h-full w-full object-cover"
              width={1280}
              height={960}
            />
          </div>
          <div className="absolute -right-4 sm:-right-8 -bottom-6 grid grid-cols-2 gap-3 max-w-[320px]">
            <div className="rounded-2xl bg-background hairline shadow-soft p-4">
              <Gem className="h-5 w-5 text-primary" />
              <p className="mt-3 text-sm font-semibold text-ink">
                Cilësi superiore
              </p>
              <p className="mt-1 text-xs text-ink-soft leading-snug">
                Materiale premium të kontrolluara.
              </p>
            </div>
            <div className="rounded-2xl bg-primary text-primary-foreground shadow-soft p-4">
              <Clock3 className="h-5 w-5" />
              <p className="mt-3 text-sm font-semibold">Afate të shpejta</p>
              <p className="mt-1 text-xs opacity-80 leading-snug">
                Dorëzim brenda kohës së dakorduar.
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-xs uppercase tracking-[0.22em] text-teal font-medium">
            — Rreth nesh
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] text-balance">
            Laboratori dentar <span className="italic font-normal">NEXIS</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-ink-soft leading-relaxed text-pretty">
            Laboratori NEXIS specializohet në restaurime dentare precize dhe
            estetike. Me teknologji moderne dhe përkushtim ndaj detajeve,
            ofrojmë zgjidhje të personalizuara si kurora, ura, faseta dhe
            proteza për klientët tanë.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {PILLARS.map((p) => (
              <span
                key={p}
                className="rounded-full hairline bg-surface px-4 py-2 text-sm font-medium text-ink"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
