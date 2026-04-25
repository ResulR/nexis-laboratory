export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page py-14 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-display font-semibold">
              N
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold tracking-tight text-ink">
                NEXIS
              </span>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                Laboratory
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm text-ink-soft leading-relaxed">
            Laboratori dentar në Kosovë i specializuar në restaurime precize dhe
            estetike për dentistët dhe klinikat partnere.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-wider text-ink-soft">
            Navigimi
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-ink">
            <li>
              <a href="#rreth" className="hover:text-primary">
                Rreth nesh
              </a>
            </li>
            <li>
              <a href="#sherbimet" className="hover:text-primary">
                Shërbimet
              </a>
            </li>
            <li>
              <a href="#pse" className="hover:text-primary">
                Pse ne
              </a>
            </li>
            <li>
              <a href="#angazhimi" className="hover:text-primary">
                Angazhimi
              </a>
            </li>
            <li>
              <a href="#kontakt" className="hover:text-primary">
                Kontakt
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-wider text-ink-soft">
            Kontakt
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-ink">
            <li>
              <a href="tel:+38344379656" className="hover:text-primary">
                +383 44 379 656
              </a>
            </li>
            <li>
              <a
                href="mailto:nexis.laboratory@gmail.com"
                className="hover:text-primary"
              >
                nexis.laboratory@gmail.com
              </a>
            </li>
            <li>Prishtinë, Kosovë</li>
            <li>E hënë – E premte · 09:00 – 18:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ink-soft">
          <p>
            © {new Date().getFullYear()} NEXIS Laboratory. Të gjitha të drejtat
            e rezervuara.
          </p>
          <p>Laboratori dentar · Kosovë</p>
        </div>
      </div>
    </footer>
  );
}
