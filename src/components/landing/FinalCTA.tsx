import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá, tenho interesse na terceirização de cosméticos.";

export const FinalCTA = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pronto para lançar sua própria marca com{" "}
            <span className="text-gradient-gold">qualidade premium</span>?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10">
            Nós cuidamos de tudo — você foca em vender.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button variant="hero" size="xl" asChild className="group">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                FAZER ORÇAMENTO AGORA
              </a>
            </Button>
          </motion.div>

          <p className="text-sm text-muted-foreground mt-6">
            WhatsApp com atendimento rápido e personalizado
          </p>
        </motion.div>
      </div>
    </section>
  );
};
