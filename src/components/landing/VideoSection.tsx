import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const VideoSection = () => {
  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-elegant border border-gold/20 bg-charcoal-light max-w-[350px] mx-auto" style={{ aspectRatio: '9/16' }}>
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
              >
                <source src="/videos/MarcaPropria2.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-gold rounded-full blur-3xl opacity-30" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-2">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm text-gold font-medium">Realize seu sonho</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight">
              Ter sua marca própria{" "}
              <span className="text-gradient-gold">não precisa ser um sonho distante!</span>
            </h2>
            
            <p className="text-lg text-cream/80 leading-relaxed">
              Você sonha em ter uma marca própria de cosméticos, mas a caminhada até lá 
              parece muito longa, difícil e você não sabe por onde começar?
            </p>
            
            <p className="text-xl text-gold font-semibold">
              ▫️ Vem comigo que te auxilio passo a passo ▫️
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-cream/80">
                <span className="w-2 h-2 rounded-full bg-gold" />
                Acompanhamento personalizado
              </li>
              <li className="flex items-center gap-3 text-cream/80">
                <span className="w-2 h-2 rounded-full bg-gold" />
                Do zero ao lançamento da sua marca
              </li>
              <li className="flex items-center gap-3 text-cream/80">
                <span className="w-2 h-2 rounded-full bg-gold" />
                Suporte em cada etapa do processo
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
