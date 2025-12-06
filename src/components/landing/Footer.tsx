import { Instagram, MessageCircle, MapPin, Phone, Mail, Shield } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-bold text-gold mb-4">
              Brazilian Dubai
            </h3>
            <p className="text-cream/70 mb-6 max-w-md">
              Terceirização completa de cosméticos com qualidade premium. Da formulação ao envio ao cliente final.
            </p>
            <div className="flex items-center gap-2 text-sm text-cream/60">
              <Shield className="w-4 h-4 text-gold" />
              <span>Empresa em conformidade com a ANVISA</span>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5527998806772"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-cream/70 hover:text-gold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: (27) 99880-6772</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+5527998806772"
                  className="flex items-center gap-3 text-cream/70 hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(27) 99880-6772</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@braziliandubai.com.br"
                  className="flex items-center gap-3 text-cream/70 hover:text-gold transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>contato@braziliandubai.com.br</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/braziliandubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-cream/70 hover:text-gold transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@braziliandubai</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Endereço */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream mb-4">
              Endereço
            </h4>
            <div className="flex items-start gap-3 text-cream/70">
              <MapPin className="w-4 h-4 mt-1 shrink-0" />
              <div>
                <p>Rua Exemplo, 123</p>
                <p>Bairro Centro</p>
                <p>São Paulo - SP</p>
                <p>CEP: 00000-000</p>
              </div>
            </div>
            <p className="text-sm text-cream/50 mt-4">
              CNPJ: 00.000.000/0001-00
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-cream/50">
              © {new Date().getFullYear()} Brazilian Dubai. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-cream/50 hover:text-gold transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-sm text-cream/50 hover:text-gold transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
