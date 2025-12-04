import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Droplets, Sparkles, Heart, Wind, Leaf, Star } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá, gostaria de ver o catálogo completo de produtos.";

const products = [
  {
    icon: Droplets,
    title: "Cosméticos Capilares Profissionais",
    items: ["Shampoos", "Condicionadores", "Máscaras", "Finalizadores"],
  },
  {
    icon: Sparkles,
    title: "Séruns e Tratamentos",
    items: ["Séruns capilares", "Óleos nutritivos", "Leave-ins", "Ampolas"],
  },
  {
    icon: Heart,
    title: "Skincare Completo",
    items: ["Gel de limpeza", "Hidratante", "Vitamina C", "Ozonizados"],
  },
  {
    icon: Wind,
    title: "Perfumaria",
    items: ["Body mist", "Perfumes", "Águas perfumadas", "Colônias"],
  },
  {
    icon: Star,
    title: "Dermocosméticos",
    items: ["Anti-idade", "Clareadores", "Firmadores", "Despigmentantes"],
  },
  {
    icon: Leaf,
    title: "Linha Natural",
    items: ["Ativos naturais", "Veganos", "Orgânicos", "Sustentáveis"],
  },
];

export const ProductCatalog = () => {
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
            O que podemos produzir para{" "}
            <span className="text-gradient-gold">sua marca</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Linhas completas personalizadas com sua identidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border overflow-hidden hover:border-gold/50 transition-all duration-300"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <product.icon className="w-7 h-7 text-charcoal" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {product.title}
                </h3>
                <ul className="space-y-2">
                  {product.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
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
          <Button variant="gold" size="lg" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Ver catálogo completo
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
