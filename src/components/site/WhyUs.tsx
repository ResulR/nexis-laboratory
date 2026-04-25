import {
  Cpu,
  Sparkles,
  Handshake,
  ShieldCheck,
  CalendarCheck2,
  Award,
} from "lucide-react";

const ITEMS = [
  {
    icon: Cpu,
    title: "Teknologji moderne",
    desc: "Pajisje dhe procese digitale për precizion në çdo restaurim.",
  },
  {
    icon: Sparkles,
    title: "Estetikë natyrale",
    desc: "Materiale premium që riprodhojnë natyralitetin e dhëmbëve.",
  },
  {
    icon: Handshake,
    title: "Akompanjim personal",
    desc: "Komunikim i drejtpërdrejtë me dentistët partnerë në çdo fazë.",
  },
  {
    icon: ShieldCheck,
    title: "Higjienë e rreptë",
    desc: "Protokolle të kontrolluara për siguri maksimale.",
  },
  {
    icon: CalendarCheck2,
    title: "Afate të respektuara",
    desc: "Planifikim i qartë dhe dorëzim brenda kohës së premtuar.",
  },
  {
    icon: Award,
    title: "Përvojë 15+ vite",
    desc: "Ekip me ekspertizë të thellë në teknologjinë dentare.",
  },
];

export function WhyUs() {
  return (
    <section id="pse" className="relative py-20 md:py-32">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-medium">
              — Pse NEXIS
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] text-balance">
              Përkushtim që ndihet në{" "}
              <span className="italic font-normal">çdo detaj</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-ink-soft leading-relaxed text-pretty">
              Punojmë krah për krah me dentistët për t'u dhënë pacientëve
              restaurime që ndërthurin shkencën, artin dhe besueshmërinë.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-line rounded-3xl overflow-hidden hairline">
            {ITEMS.map((it, i) => (
              <div
                key={it.title}
                className="group relative bg-background p-6 sm:p-7 transition-colors hover:bg-surface"
              >
                <span className="absolute top-4 right-5 font-display text-xs text-ink-soft/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-surface text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {it.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
