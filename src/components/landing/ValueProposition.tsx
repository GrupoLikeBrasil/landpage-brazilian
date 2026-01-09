import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { trackAndRedirect } from "@/lib/trackClick";

const WHATSAPP_URL = "https://wa.me/5527999048302?text=Olá, gostaria de solicitar um orçamento para terceirização de cosméticos.";

export const ValueProposition = () => {
  const handleWhatsAppClick = () => {
    trackAndRedirect(WHATSAPP_URL, "Diferenciais - Solicitar Orçamento");
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Por que empreendedores e marcas escolhem a{" "}
            <span className="text-gradient-gold">Brazilian Dubai</span>?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            Oferecemos <span className="text-gold font-semibold">entrega rápida</span>, 
            formulações de <span className="text-gold font-semibold">alta performance</span> desenvolvidas por especialistas, 
            certificação <span className="text-gold font-semibold">ANVISA garantida</span> e 
            identidade visual completa para sua marca.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Com <span className="text-gold font-semibold">+100 clientes satisfeitos</span> e 
            atendimento humanizado em cada etapa, cuidamos de toda a produção e logística 
            para que você foque no crescimento do seu negócio.
          </p>

          <Button variant="gold" size="lg" onClick={handleWhatsAppClick}>
            Solicitar Orçamento
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
