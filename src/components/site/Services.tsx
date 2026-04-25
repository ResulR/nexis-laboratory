import zirkon from "@/assets/nexis-zirkon.jpg";
import emax from "@/assets/nexis-emax.jpg";
import faseta from "@/assets/nexis-faseta.jpg";
import pfm from "@/assets/nexis-metal-porcelan.jpg";
import ibar from "@/assets/nexis-ibar.jpg";
import implant from "@/assets/nexis-implant.jpg";

const SERVICES = [
  {
    img: zirkon,
    label: "Zirkon",
    title: "Kurora Zirkon",
    desc: "I fortë dhe rezistent për dhëmbët e pasëm, me estetikë natyrale.",
  },
  {
    img: emax,
    label: "E-MAX",
    title: "Restaurime E-MAX",
    desc: "Elegancë dhe transparencë maksimale për një pamje krejtësisht natyrale.",
  },
  {
    img: faseta,
    label: "Faseta",
    title: "Faseta dentare",
    desc: "Të holla dhe elegante për transformim të plotë të buzëqeshjes.",
  },
  {
    img: pfm,
    label: "PFM",
    title: "Kurora Metal-Porcelan",
    desc: "Kombinim i bazës metalike me mbulesë qeramike — qëndrueshmëri dhe estetikë.",
  },
  {
    img: ibar,
    label: "IBAR",
    title: "Strukturë IBAR",
    desc: "Strukturë metalike që ofron forcë dhe stabilitet në ura protetike komplekse.",
  },
  {
    img: implant,
    label: "Implant",
    title: "Implante dentare",
    desc: "Restaurime precize, estetike dhe të personalizuara mbi implante.",
  },
];

export function Services() {
  return (
    <section id="sherbimet" className="relative py-20 md:py-32 bg-surface">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.22em] text-teal font-medium">
            — Shërbimet
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] text-balance">
            Zgjidhje teknike <span className="italic font-normal">premium</span>{" "}
            për stomatologjinë moderne
          </h2>
          <p className="mt-5 text-base sm:text-lg text-ink-soft leading-relaxed text-pretty">
            Materiale të përzgjedhura, prodhim me precizion dhe kontroll i
            kujdesshëm cilësie për çdo restaurim.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="group relative flex flex-col rounded-3xl bg-background hairline overflow-hidden shadow-soft hover:shadow-elev transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[5/4] overflow-hidden bg-surface-2">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={900}
                  height={720}
                />
                <span className="absolute top-3 left-3 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-[11px] font-medium tracking-wide text-ink hairline">
                  {s.label}
                </span>
                <span className="absolute top-3 right-3 font-display text-xs text-ink-soft bg-background/90 backdrop-blur rounded-full px-2.5 py-1 hairline">
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(SERVICES.length).padStart(2, "0")}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed flex-1">
                  {s.desc}
                </p>
                <div className="mt-5 pt-4 border-t border-line flex items-center justify-between text-xs">
                  <span className="text-ink-soft">
                    Materiale të përzgjedhura
                  </span>
                  <span className="text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
