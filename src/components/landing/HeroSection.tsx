import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-cosmetics.jpg";
import { trackButtonClick } from "@/lib/analytics";

const scrollToForm = () => {
  trackButtonClick("QUERO CRIAR MINHA LINHA", "Hero Section");
  document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Produtos cosméticos premium Brazilian Dubai"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 min-h-screen flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 backdrop-blur-sm">
                <Shield className="w-4 h-4 text-gold" />
                <span className="text-sm text-gold font-medium">Certificação Anvisa</span>
              </div>
              <div className="flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 backdrop-blur-sm">
                <Zap className="w-4 h-4 text-gold" />
                <span className="text-sm text-gold font-medium">Entrega Mais Rápida do Mercado</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
              Criamos Seu Cosmético do Zero, Com{" "}
              <span className="text-gradient-gold">Entrega Rápida</span>,{" "}
              Registro Anvisa e{" "}
              <span className="text-gradient-gold">Qualidade Premium</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-cream/80 mb-10 leading-relaxed">
              Transforme sua marca em realidade com a terceirização completa da Brazilian Dubai — da formulação ao envio ao cliente final.
            </p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                variant="hero"
                size="xl"
                onClick={scrollToForm}
              >
                QUERO CRIAR MINHA LINHA
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
