import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FlaskConical, Palette, Factory, Truck } from "lucide-react";

const scrollToForm = () => {
  document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
};

const steps = [
  {
    number: "01",
    icon: FlaskConical,
    title: "Escolha da Fórmula",
    description: "Você escolhe entre fórmulas existentes ou criamos algo 100% exclusivo para sua marca.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Identidade Visual e Rótulo",
    description: "Criamos o design, embalagens e fragrâncias da sua linha com exclusividade.",
  },
  {
    number: "03",
    icon: Factory,
    title: "Produção + Registro",
    description: "Cuidamos de toda a produção e da regulamentação completa junto à Anvisa.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Armazenagem e Logística",
    description: "Se quiser, enviamos os produtos diretamente para o seu cliente final.",
  },
];

export const ProcessSection = () => {
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
            Seu produto pronto em{" "}
            <span className="text-gradient-gold">4 etapas</span>
          </h2>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">
            Processo simplificado para você focar no que importa: vender.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-gold/50 to-gold/20" />
              )}
              
              <div className="relative z-10 text-center">
                <div className="relative inline-block mb-6">
                  <span className="absolute -top-2 -left-2 text-6xl font-display font-bold text-gold/20">
                    {step.number}
                  </span>
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold">
                    <step.icon className="w-9 h-9 text-charcoal" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-cream mb-3">
                  {step.title}
                </h3>
                <p className="text-cream/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Button 
            variant="goldOutline" 
            size="lg" 
            onClick={scrollToForm}
            className="text-cream border-gold hover:bg-gold/10"
          >
            Quero saber como funciona
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
