import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Commitment } from "@/components/site/Commitment";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export default function App() {
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
