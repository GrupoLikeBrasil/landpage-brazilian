import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, FlaskConical, Shield, Palette, Package, Users, Sparkles } from "lucide-react";
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-elegant"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
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
