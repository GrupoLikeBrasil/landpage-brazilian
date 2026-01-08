import { motion } from "framer-motion";
import { Droplets, Sparkles, Heart, Wind, Leaf, Star } from "lucide-react";

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
    items: ["Gel de limpeza", "Hidratante", "Serum facial DOM", "Ozonizados"],
  },
  {
    icon: Wind,
    title: "Perfumaria",
    items: ["Body splash", "Hidratante corporal", "Perfume capilar"],
  },
  {
    icon: Star,
    title: "Dermocosméticos",
    items: ["Anti-idade", "Clareadores", "Firmadores"],
  },
  {
    icon: Leaf,
    title: "Linha Natural",
    items: ["Ativos naturais", "Veganos", "Orgânicos", "Sustentáveis"],
  },
];

export const ProductCatalog = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-charcoal via-charcoal-light to-charcoal">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4">
            O que podemos produzir para{" "}
            <span className="text-gradient-gold">sua marca</span>
          </h2>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">
            Linhas completas personalizadas com sua identidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 h-full">
                {/* Glowing orb effect */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon with ring */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center border border-gold/30 group-hover:border-gold/60 transition-all duration-300">
                    <product.icon className="w-7 h-7 text-gold group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  {/* Ring animation */}
                  <div className="absolute inset-0 w-16 h-16 rounded-full border border-gold/20 animate-ping opacity-0 group-hover:opacity-30" style={{ animationDuration: '2s' }} />
                </div>
                
                <h3 className="font-display text-xl font-bold text-cream mb-4 group-hover:text-gold transition-colors duration-300">
                  {product.title}
                </h3>
                
                {/* Horizontal divider */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-transparent mb-4 group-hover:w-20 transition-all duration-300" />
                
                <ul className="space-y-3">
                  {product.items.map((item, i) => (
                    <li 
                      key={item} 
                      className="flex items-center gap-3 text-cream/70 text-sm group-hover:text-cream/90 transition-colors duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      <span className="w-1 h-1 rounded-full bg-gold/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
