import { motion } from "framer-motion";
import { Play } from "lucide-react";

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
            <div className="rounded-2xl overflow-hidden shadow-elegant border border-gold/20 aspect-video bg-charcoal-light">
              {/* Replace the src with your video URL */}
              <video
                className="w-full h-full object-cover"
                controls
                poster=""
              >
                {/* Add your video source here */}
                {/* <source src="/your-video.mp4" type="video/mp4" /> */}
                Seu navegador não suporta vídeos.
              </video>
              
              {/* Placeholder overlay - remove when video is added */}
              <div className="absolute inset-0 flex items-center justify-center bg-charcoal-light">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-charcoal ml-1" />
                  </div>
                  <p className="text-cream/60 text-sm">Adicione seu vídeo aqui</p>
                </div>
              </div>
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
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight">
              Seu título aqui com{" "}
              <span className="text-gradient-gold">destaque em dourado</span>
            </h2>
            
            <p className="text-lg text-cream/80 leading-relaxed">
              Adicione aqui o texto que deseja exibir ao lado do vídeo. 
              Este espaço é perfeito para explicar os benefícios, 
              contar a história da sua marca ou destacar informações importantes.
            </p>
            
            <p className="text-cream/70 leading-relaxed">
              Você pode adicionar mais parágrafos, listas ou qualquer 
              outro conteúdo que faça sentido para sua mensagem.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-cream/80">
                <span className="w-2 h-2 rounded-full bg-gold" />
                Primeiro ponto importante
              </li>
              <li className="flex items-center gap-3 text-cream/80">
                <span className="w-2 h-2 rounded-full bg-gold" />
                Segundo ponto importante
              </li>
              <li className="flex items-center gap-3 text-cream/80">
                <span className="w-2 h-2 rounded-full bg-gold" />
                Terceiro ponto importante
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
