import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { trackAndRedirect } from "@/lib/trackClick";

const packages = [
  {
    title: "Lotes Mínimos Acessíveis",
    description: "Ideal para quem está começando",
    features: [
      "Produção a partir de pequenas quantidades",
      "Perfeito para teste de mercado",
      "Sem necessidade de alto investimento inicial",
      "Suporte completo para iniciantes",
    ],
  },
  {
    title: "Linhas Completas Personalizadas",
    description: "Para marcas em crescimento",
    features: [
      "Desenvolvimento de múltiplos produtos",
      "Identidade visual unificada",
      "Fragrância exclusiva da sua marca",
      "Embalagens premium personalizadas",
    ],
    featured: true,
  },
  {
    title: "Desenvolvimento Exclusivo",
    description: "Fórmulas 100% únicas",
    features: [
      "Criação de fórmula do zero",
      "Ativos exclusivos selecionados",
      "Proteção de fórmula",
      "Consultoria técnica especializada",
    ],
  },
];

export const PackagesSection = () => {
  const handleWhatsAppClick = (modeloTitle: string) => {
    const whatsappMessage = encodeURIComponent(
      `Olá, tenho interesse no modelo "${modeloTitle}" para terceirização de cosméticos.`
    );
    const whatsappUrl = `https://wa.me/5527999048302?text=${whatsappMessage}`;
    
    trackAndRedirect(whatsappUrl, "Modelos de Terceirização", modeloTitle);
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
            Modelos de{" "}
            <span className="text-gradient-gold">Terceirização</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha o modelo que melhor se adapta ao seu momento
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-6 rounded-2xl border ${
                pkg.featured
                  ? "bg-gradient-to-b from-gold/10 to-transparent border-gold shadow-gold"
                  : "bg-card border-border hover:border-gold/50"
              } transition-all duration-300 flex flex-col`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-gold text-charcoal text-xs font-bold px-3 py-1 rounded-full">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {pkg.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {pkg.description}
              </p>

              <ul className="space-y-3 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={pkg.featured ? "gold" : "goldOutline"} 
                size="sm" 
                className="mt-6 w-full"
                onClick={() => handleWhatsAppClick(pkg.title)}
              >
                Receber proposta
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
