import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { ValueProposition } from "@/components/landing/ValueProposition";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { ProductCatalog } from "@/components/landing/ProductCatalog";
import { Testimonials } from "@/components/landing/Testimonials";
import { PackagesSection } from "@/components/landing/PackagesSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <div id="processo">
          <ProcessSection />
        </div>
        <div id="produtos">
          <ProductCatalog />
        </div>
        <div id="depoimentos">
          <Testimonials />
        </div>
        <PackagesSection />
        <BenefitsSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
