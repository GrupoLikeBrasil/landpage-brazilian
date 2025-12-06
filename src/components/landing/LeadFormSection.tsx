import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";

interface FormData {
  nome: string;
  email: string;
  whatsapp: string;
  interesse: string;
  mensagem: string;
}

export const LeadFormSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    whatsapp: "",
    interesse: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!formData.nome.trim() || !formData.email.trim() || !formData.whatsapp.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, email e WhatsApp.",
        variant: "destructive",
      });
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // URL do Google Sheets Webhook (Apps Script)
      const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbycuPgVmsW16LEFV_hIcBxhaos0-CE0GvSs5nnYUfF587Qj-pyr8dKvwE_kFwKswr6a/exec";

      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      toast({
        title: "Enviado com sucesso!",
        description: "Entraremos em contato em breve.",
      });

      setFormData({
        nome: "",
        email: "",
        whatsapp: "",
        interesse: "",
        mensagem: "",
      });
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="formulario" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4">
            Crie sua <span className="text-gradient-gold">linha de produtos</span>
          </h2>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">
            Preencha o formulário e nossa equipe entrará em contato para criar sua marca
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="nome" className="text-sm font-medium text-cream">
                  Nome completo *
                </label>
                <Input
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground"
                  maxLength={100}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-cream">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground"
                  maxLength={255}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="whatsapp" className="text-sm font-medium text-cream">
                  WhatsApp *
                </label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="(11) 99999-9999"
                  className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground"
                  maxLength={20}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="interesse" className="text-sm font-medium text-cream">
                  Interesse principal
                </label>
                <select
                  id="interesse"
                  name="interesse"
                  value={formData.interesse}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-md bg-background/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="Cosméticos Capilares">Cosméticos Capilares</option>
                  <option value="Skincare">Skincare</option>
                  <option value="Perfumaria">Perfumaria</option>
                  <option value="Dermocosméticos">Dermocosméticos</option>
                  <option value="Linha Completa">Linha Completa</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="mensagem" className="text-sm font-medium text-cream">
                Conte mais sobre seu projeto
              </label>
              <Textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                placeholder="Descreva seu projeto, quantidade desejada, etc..."
                className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground min-h-[120px]"
                maxLength={1000}
              />
            </div>

            <Button
              type="submit"
              variant="hero"
              size="xl"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  QUERO CRIAR MINHA LINHA
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
