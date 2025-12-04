import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Carolina Silva",
    role: "Fundadora da Beauty Line",
    content: "A Brazilian Dubai transformou minha ideia em uma linha completa de cosméticos. A qualidade é impressionante e o suporte foi excepcional do início ao fim.",
    rating: 5,
  },
  {
    name: "Ricardo Mendes",
    role: "CEO da Naturalis",
    content: "Procurei diversas empresas e nenhuma chegou perto da agilidade e qualidade da Brazilian Dubai. Minha marca cresceu 300% após o lançamento.",
    rating: 5,
  },
  {
    name: "Juliana Costa",
    role: "Proprietária da JC Beauty",
    content: "O processo foi transparente e profissional. Eles cuidaram de tudo, desde a formulação até a aprovação na Anvisa. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "Marcos Oliveira",
    role: "Empreendedor Digital",
    content: "Comecei do zero e hoje tenho uma marca de sucesso vendendo em marketplaces. A Brazilian Dubai foi fundamental nessa jornada.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4">
            Mais de{" "}
            <span className="text-gradient-gold">100 marcas</span>{" "}
            lançadas
          </h2>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre a Brazilian Dubai
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-charcoal-light/50 border border-gold/20 backdrop-blur-sm"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gold/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-cream/90 text-base leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                  <span className="text-charcoal font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-display font-semibold text-cream">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-cream/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
