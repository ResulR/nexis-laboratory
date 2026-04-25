import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <section id="kontakt" className="relative py-20 md:py-32">
      <div className="container-page grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <span className="text-xs uppercase tracking-[0.22em] text-teal font-medium">
            — Kontakt
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] text-balance">
            Le të diskutojmë{" "}
            <span className="italic font-normal">rastin tuaj.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-ink-soft leading-relaxed text-pretty">
            Përgjigjemi brenda 24 orëve. Për raste urgjente, telefononi
            drejtpërdrejt.
          </p>

          <div className="mt-10 space-y-5">
            <Info
              icon={Phone}
              label="Telefon"
              value="+383 44 379 656"
              href="tel:+38344379656"
            />
            <Info
              icon={Mail}
              label="Email"
              value="nexis.laboratory@gmail.com"
              href="mailto:nexis.laboratory@gmail.com"
            />
            <Info icon={MapPin} label="Adresa" value="Prishtinë, Kosovë" />
            <Info
              icon={Clock}
              label="Orari"
              value="E hënë – E premte · 09:00 – 18:00"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            className="rounded-3xl bg-background hairline shadow-elev p-6 sm:p-10"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field name="name" label="Emri juaj" required />
              <Field name="email" type="email" label="Email" required />
            </div>
            <div className="mt-5">
              <Field name="clinic" label="Klinika / Praktika" />
            </div>
            <div className="mt-5">
              <label className="block text-xs font-medium text-ink-soft uppercase tracking-wider">
                Mesazhi <span className="text-teal">*</span>
              </label>
              <textarea
                required
                name="message"
                rows={5}
                className="mt-2 w-full rounded-xl bg-surface/60 hairline px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-ring/40 focus:bg-background transition"
                placeholder="Tregoni shkurtimisht për rastin tuaj..."
              />
            </div>

            <div className="mt-6 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs text-ink-soft">
                Të dhënat tuaja përdoren vetëm për t'ju kontaktuar.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft hover:shadow-elev transition"
              >
                <Send className="h-4 w-4" />
                {sent ? "Mesazhi u dërgua" : "Dërgo mesazhin"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Info({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-surface text-primary shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-ink-soft">
          {label}
        </p>
        <p className="mt-0.5 text-base font-medium text-ink">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-80 transition">
      {content}
    </a>
  ) : (
    content
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-ink-soft uppercase tracking-wider">
        {label} {required && <span className="text-teal">*</span>}
      </label>
      <input
        required={required}
        type={type}
        name={name}
        className="mt-2 w-full rounded-xl bg-surface/60 hairline px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-ring/40 focus:bg-background transition"
      />
    </div>
  );
}
