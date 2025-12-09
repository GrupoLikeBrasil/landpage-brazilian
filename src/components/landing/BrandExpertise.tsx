import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles, Rocket, Heart } from "lucide-react";
import { trackAndRedirect } from "@/lib/trackClick";
import terceirizacaoValor from "@/assets/terceirizacao-valor.jpg";
import qualidadeAnvisa from "@/assets/qualidade-anvisa.jpg";
import cosmeticsHeroWide from "@/assets/cosmetics-hero-wide.jpg";

const WHATSAPP_URL = "https://wa.me/5527998806772?text=Olá, quero começar minha marca própria de cosméticos em 2026!";

const scrollToForm = () => {
  document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
};

export const BrandExpertise = () => {
  const handleWhatsAppClick = () => {
    trackAndRedirect(WHATSAPP_URL, "Expertise - Vamos Juntos");
  };

  return (
    <section className="bg-background overflow-hidden">
      {/* Block 1: Image Left, Text Right */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={terceirizacaoValor}
                  alt="Terceirização - O verdadeiro valor"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-gold rounded-full blur-2xl opacity-50" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-sm text-gold font-medium">Investimento com Propósito</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                <span className="text-gradient-gold">Terceirização</span>{" "}
                não é sobre cortar custos
              </h2>
              
              <p className="text-xl md:text-2xl text-foreground font-medium mb-6 leading-relaxed">
                É sobre investir no que realmente{" "}
                <span className="text-gold">faz diferença.</span>
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                O verdadeiro valor está no que realmente importa. Não se trata de economizar, 
                mas de investir com propósito — na qualidade, na experiência e no que faz a diferença 
                para você e seu negócio.
              </p>
              
              <div className="flex items-center gap-3 p-4 bg-gold/10 border border-gold/30 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0" />
                <p className="text-foreground font-medium">
                  Priorize o essencial e construa algo que perdure!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Block 2: Fullscreen Image with Centered Text */}
      <div className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={cosmeticsHeroWide}
            alt="Produtos cosméticos premium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-cream mb-8 leading-tight">
            Comece 2026 com o{" "}
            <span className="text-gradient-gold">pé direito!</span>
          </h3>
          
          <p className="text-xl md:text-2xl text-cream/90 leading-relaxed mb-8">
            Chegou o momento de tirar do papel o sonho da sua marca própria de cosméticos — e fazer isso com quem entrega{" "}
            <span className="text-gold font-semibold">qualidade, agilidade e compromisso real</span> em cada etapa.
          </p>
          
          <Button variant="hero" size="xl" onClick={scrollToForm}>
            QUERO COMEÇAR AGORA
          </Button>
        </motion.div>
      </div>

      {/* Block 3: Text Left, Image Right */}
      <div className="py-20 bg-gradient-to-b from-charcoal to-charcoal/95">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-sm text-gold font-medium">Qualidade, Segurança e Inovação</span>
              </div>
              
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-cream mb-6 leading-tight">
                Qualidade, segurança e inovação no{" "}
                <span className="text-gradient-gold">desenvolvimento dos seus cosméticos!</span>
              </h3>
              
              <p className="text-lg md:text-xl text-cream/90 mb-8 leading-relaxed">
                Com um portfólio de mais de <span className="text-gold font-semibold">500 fórmulas já aprovadas pela ANVISA</span>, 
                garantimos a expertise que sua marca precisa para se destacar no mercado.
              </p>

              {/* Highlights */}
              <div className="flex flex-col gap-4 mb-10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex items-center gap-3 bg-gold/10 border border-gold/30 rounded-xl px-6 py-4"
                >
                  <Sparkles className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-cream font-medium">2026 é o ano de construir algo grande.</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex items-center gap-3 bg-gold/10 border border-gold/30 rounded-xl px-6 py-4"
                >
                  <Heart className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-cream font-medium">É o ano da sua marca nascer do jeito certo.</span>
                </motion.div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <p className="text-2xl md:text-3xl text-cream font-display font-semibold mb-6">
                  Vamos juntos? <Rocket className="inline-block w-7 h-7 text-gold ml-1" />
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" onClick={scrollToForm}>
                    QUERO COMEÇAR AGORA
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={handleWhatsAppClick} 
                    className="border-gold/50 text-gold hover:bg-gold/10 hover:text-gold"
                  >
                    FALAR COM ESPECIALISTA
                  </Button>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative order-1 lg:order-2"
            >
              <div className="rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={qualidadeAnvisa}
                  alt="Mais de 500 fórmulas aprovadas pela ANVISA"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-gold rounded-full blur-3xl opacity-40" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
