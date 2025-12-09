import { motion } from "framer-motion";

// Import brand logos
import marca01 from "@/assets/brands/marca01.jpg";
import marca02 from "@/assets/brands/marca02.jpg";
import marca03 from "@/assets/brands/marca03.jpg";
import marca04 from "@/assets/brands/marca04.jpg";
import marca05 from "@/assets/brands/marca05.jpg";
import marca06 from "@/assets/brands/marca06.jpg";
import marca07 from "@/assets/brands/marca07.jpg";
import marca08 from "@/assets/brands/marca08.jpg";
import marca09 from "@/assets/brands/marca09.jpg";
import marca10 from "@/assets/brands/marca10.jpg";
import marca11 from "@/assets/brands/marca11.jpg";
import marca12 from "@/assets/brands/marca12.jpg";
import marca13 from "@/assets/brands/marca13.jpg";
import marca14 from "@/assets/brands/marca14.jpg";
import marca15 from "@/assets/brands/marca15.jpg";

const brands = [
  { src: marca01, alt: "MDS Professional" },
  { src: marca02, alt: "DIVEX Professional" },
  { src: marca03, alt: "HOKA Professional" },
  { src: marca04, alt: "Marca Parceira" },
  { src: marca05, alt: "KALI Cosmetics" },
  { src: marca06, alt: "Ki Pancada" },
  { src: marca07, alt: "New Life" },
  { src: marca08, alt: "Subliz" },
  { src: marca09, alt: "Innover Cosméticos" },
  { src: marca10, alt: "Ozono Tech" },
  { src: marca11, alt: "Elieti Vacari" },
  { src: marca12, alt: "Agora Sou" },
  { src: marca13, alt: "Like Brasil" },
  { src: marca14, alt: "K Brand" },
  { src: marca15, alt: "M Brand" },
];

export const BrandCarousel = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-dark overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold text-sm font-medium rounded-full mb-4">
            Prova Social
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4">
            Marcas que <span className="text-gradient-gold">Já Produzimos</span>
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto text-lg">
            Empresas que confiaram na Brazilian Dubai para criar seus cosméticos de sucesso
          </p>
        </motion.div>
      </div>

      {/* Infinite Carousel */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-charcoal to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-charcoal to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {brands.map((brand, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-6 md:mx-10"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-cream/5 border border-gold/20 p-4 flex items-center justify-center hover:border-gold/50 hover:bg-cream/10 transition-all duration-300 group">
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-6 md:mx-10"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-cream/5 border border-gold/20 p-4 flex items-center justify-center hover:border-gold/50 hover:bg-cream/10 transition-all duration-300 group">
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
