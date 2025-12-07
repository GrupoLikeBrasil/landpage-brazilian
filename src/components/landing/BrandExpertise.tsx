import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles, Rocket, Heart } from "lucide-react";
import { trackAndRedirect } from "@/lib/trackClick";

const WHATSAPP_URL = "https://wa.me/5527998806772?text=Olá, quero começar minha marca própria de cosméticos em 2026!";

const scrollToForm = () => {
  document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
};

export const BrandExpertise = () => {
  const handleWhatsAppClick = () => {
    trackAndRedirect(WHATSAPP_URL, "Expertise - Vamos Juntos");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-charcoal to-charcoal/95 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* First Block - Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold font-medium">Qualidade, segurança e inovação</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6">
            Qualidade, segurança e inovação no{" "}
            <span className="text-gradient-gold">desenvolvimento dos seus cosméticos!</span>
          </h2>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <CheckCircle2 className="w-6 h-6 text-gold" />
            <p className="text-xl md:text-2xl text-cream/90 font-medium">
              +500 fórmulas aprovadas pela ANVISA
            </p>
          </div>
          
          <p className="text-lg text-cream/70 max-w-2xl mx-auto">
            Garantimos a expertise que sua marca precisa para se destacar no mercado.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-gold mx-auto mb-16 rounded-full" />

        {/* Second Block - 2026 Campaign */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-cream text-center mb-6">
            Comece 2026 com o pé direito!
          </h3>
          
          <p className="text-lg text-cream/80 text-center mb-8 leading-relaxed">
            Chegou o momento de tirar do papel o sonho da sua marca própria de cosméticos — e fazer isso com quem entrega{" "}
            <span className="text-gold font-semibold">qualidade, agilidade e compromisso real</span> em cada etapa.
          </p>
          
          <p className="text-lg text-cream/80 text-center mb-10 leading-relaxed">
            A Brazilian Dubai transforma ideias em produtos de alto padrão, com processos eficientes, 
            atendimento humanizado e a excelência que seu projeto merece.
          </p>

          {/* Highlights */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-center gap-3 bg-gold/10 border border-gold/30 rounded-xl px-6 py-4"
            >
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="text-cream font-medium">2026 é o ano de construir algo grande.</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-center gap-3 bg-gold/10 border border-gold/30 rounded-xl px-6 py-4"
            >
              <Heart className="w-5 h-5 text-gold" />
              <span className="text-cream font-medium">É o ano da sua marca nascer do jeito certo.</span>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl text-cream font-display font-semibold mb-6">
              Vamos juntos? <Rocket className="inline-block w-6 h-6 text-gold ml-1" />
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" onClick={scrollToForm}>
                QUERO COMEÇAR AGORA
              </Button>
              <Button variant="outline" size="lg" onClick={handleWhatsAppClick} className="border-gold/50 text-gold hover:bg-gold/10">
                FALAR COM ESPECIALISTA
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
