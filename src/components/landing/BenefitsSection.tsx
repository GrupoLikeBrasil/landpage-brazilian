import { motion } from "framer-motion";
import { Rocket, ShoppingCart, TrendingUp, DollarSign, Package, Store } from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    text: "Criar sua primeira marca do zero",
  },
  {
    icon: TrendingUp,
    text: "Escalar um e-commerce",
  },
  {
    icon: Store,
    text: "Entrar no mercado de beleza",
  },
  {
    icon: DollarSign,
    text: "Melhorar margens e profissionalizar sua linha",
  },
  {
    icon: Package,
    text: "Vender dropshipping com marca própria",
  },
  {
    icon: ShoppingCart,
    text: "Vender em marketplaces (Amazon, Shopee, Mercado Livre)",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4">
            Ideal para quem deseja
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.text}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-4 p-5 rounded-xl bg-charcoal-light/50 border border-gold/20 hover:border-gold/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0">
                <benefit.icon className="w-6 h-6 text-charcoal" />
              </div>
              <p className="text-cream font-medium">{benefit.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
