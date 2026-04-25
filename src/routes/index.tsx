import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Commitment } from "@/components/site/Commitment";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NEXIS Laboratory — Laboratori dentar premium në Kosovë" },
      {
        name: "description",
        content:
          "NEXIS Laboratory: kurora Zirkon, E-MAX, faseta, ura dhe restaurime mbi implante. Precizion digital dhe materiale premium për dentistët partnerë.",
      },
      {
        property: "og:title",
        content: "NEXIS Laboratory — Laboratori dentar premium në Kosovë",
      },
      {
        property: "og:description",
        content:
          "Restaurime dentare precize dhe estetike — me teknologji moderne dhe përkushtim ndaj çdo detaji.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Commitment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
