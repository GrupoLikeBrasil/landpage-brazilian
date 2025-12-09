import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, FlaskConical, Shield, Palette, Package, Users, Sparkles, Award } from "lucide-react";
import { trackAndRedirect } from "@/lib/trackClick";

const WHATSAPP_URL = "https://wa.me/5527998806772?text=Olá, gostaria de solicitar um orçamento para terceirização de cosméticos.";

const features = [
  {
    icon: Rocket,
    title: "Entrega mais rápida do mercado",
    description: "Produção + liberação em tempo recorde",
  },
  {
    icon: FlaskConical,
    title: "Formulações de alta performance",
    description: "Feitas por especialistas renomados",
  },
  {
    icon: Shield,
    title: "Certificação Anvisa garantida",
    description: "100% em conformidade legal",
  },
  {
    icon: Palette,
    title: "Identidade visual completa",
    description: "Criação de rótulo + embalagem",
  },
  {
    icon: Package,
    title: "Produção e logística",
    description: "Armazenagem e envio ao cliente final",
  },
  {
    icon: Users,
    title: "+100 clientes satisfeitos",
    description: "Marcas de sucesso lançadas",
  },
  {
    icon: Sparkles,
    title: "Qualidade premium",
    description: "Capilares, perfumaria e dermocosméticos",
  },
  {
    icon: Award,
    title: "Atendimento humanizado",
    description: "Suporte dedicado em cada etapa",
  },
];

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
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Por que empreendedores e marcas escolhem a{" "}
            <span className="text-gradient-gold">Brazilian Dubai</span>?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-charcoal/80 to-charcoal border border-gold/20 hover:border-gold/60 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.25)] overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-gold/20">
                  <feature.icon className="w-7 h-7 text-charcoal" />
                </div>
                <h3 className="font-display text-xl font-bold text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-cream/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button variant="gold" size="lg" onClick={handleWhatsAppClick}>
            Solicitar Orçamento
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
