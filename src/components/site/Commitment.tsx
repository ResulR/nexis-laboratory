import {
  MessagesSquare,
  CalendarCheck2,
  ShieldCheck,
  LifeBuoy,
} from "lucide-react";

const ITEMS = [
  {
    icon: MessagesSquare,
    title: "Komunikimi i qartë",
    desc: "Përditësime të rregullta për çdo rast — nga marrja e gjurmës deri te dorëzimi final.",
  },
  {
    icon: CalendarCheck2,
    title: "Afate të respektuara",
    desc: "Planifikim i strukturuar dhe dorëzim brenda kohës së dakorduar, pa kompromise.",
  },
  {
    icon: ShieldCheck,
    title: "Cilësi e kontrolluar",
    desc: "Çdo punim kalon nëpër kontrollin tonë të brendshëm para se të largohet nga laboratori.",
  },
  {
    icon: LifeBuoy,
    title: "Akompanjim profesional",
    desc: "Mbështetje teknike dhe këshillim për dentistët partnerë në çdo rast kompleks.",
  },
];

export function Commitment() {
  return (
    <section
      id="angazhimi"
      className="relative py-20 md:py-32 bg-primary text-primary-foreground overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="container-page relative">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.22em] text-primary-foreground/70 font-medium">
            — Angazhimi ynë
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] text-balance text-primary-foreground">
            Çfarë mund të prisni nga{" "}
            <span className="italic font-normal">bashkëpunimi</span> me NEXIS
          </h2>
          <p className="mt-6 text-base sm:text-lg text-primary-foreground/75 leading-relaxed text-pretty">
            Punojmë me klinikat dentare si partnerë afatgjatë. Këto janë
            standardet që ndjekim në çdo rast — pa përjashtim.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ITEMS.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur p-6 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-foreground/10 text-primary-foreground">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">
                {it.title}
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/75 leading-relaxed">
                {it.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 px-6 py-5 text-sm text-primary-foreground/80 sm:flex sm:items-center sm:justify-between gap-4">
          <p className="text-pretty">
            Jeni klinikë partnere? Ndani përvojën tuaj me NEXIS — do të shfaqet
            këtu pas verifikimit.
          </p>
          <a
            href="#kontakt"
            className="mt-3 sm:mt-0 inline-flex items-center justify-center rounded-full bg-primary-foreground text-primary px-5 py-2.5 text-sm font-medium hover:opacity-90 transition shrink-0"
          >
            Bëhu partner
          </a>
        </div>
      </div>
    </section>
  );
}
