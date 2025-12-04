import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá, tenho interesse na terceirização de cosméticos.";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="font-display text-2xl font-bold text-gold">
            Brazilian Dubai
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#processo" className="text-cream/80 hover:text-gold transition-colors text-sm font-medium">
              Como Funciona
            </a>
            <a href="#produtos" className="text-cream/80 hover:text-gold transition-colors text-sm font-medium">
              Produtos
            </a>
            <a href="#depoimentos" className="text-cream/80 hover:text-gold transition-colors text-sm font-medium">
              Depoimentos
            </a>
            <Button variant="gold" size="sm" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Falar com Especialista
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-cream p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-4 pb-6">
                <a
                  href="#processo"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-cream/80 hover:text-gold transition-colors text-sm font-medium py-2"
                >
                  Como Funciona
                </a>
                <a
                  href="#produtos"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-cream/80 hover:text-gold transition-colors text-sm font-medium py-2"
                >
                  Produtos
                </a>
                <a
                  href="#depoimentos"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-cream/80 hover:text-gold transition-colors text-sm font-medium py-2"
                >
                  Depoimentos
                </a>
                <Button variant="gold" size="sm" asChild className="w-full">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Falar com Especialista
                  </a>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
