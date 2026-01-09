import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, ArrowRight, Send, Loader2 } from "lucide-react";
import { trackAndRedirect } from "@/lib/trackClick";

interface FormData {
  nome: string;
  email: string;
  whatsapp: string;
  interesse: string;
  investimento: string;
}

const TOTAL_STEPS = 5;

export const LeadFormSection = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    whatsapp: "",
    interesse: "",
    investimento: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        if (!formData.nome.trim()) {
          toast({
            title: "Campo obrigatório",
            description: "Por favor, preencha seu nome completo.",
            variant: "destructive",
          });
          return false;
        }
        return true;
      case 2:
        if (!formData.email.trim()) {
          toast({
            title: "Campo obrigatório",
            description: "Por favor, preencha seu email.",
            variant: "destructive",
          });
          return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          toast({
            title: "Email inválido",
            description: "Por favor, insira um email válido.",
            variant: "destructive",
          });
          return false;
        }
        return true;
      case 3:
        if (!formData.whatsapp.trim()) {
          toast({
            title: "Campo obrigatório",
            description: "Por favor, preencha seu WhatsApp.",
            variant: "destructive",
          });
          return false;
        }
        return true;
      case 4:
        if (!formData.interesse) {
          toast({
            title: "Campo obrigatório",
            description: "Por favor, selecione seu interesse principal.",
            variant: "destructive",
          });
          return false;
        }
        return true;
      case 5:
        if (!formData.investimento) {
          toast({
            title: "Campo obrigatório",
            description: "Por favor, selecione quanto está disposto a investir.",
            variant: "destructive",
          });
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < TOTAL_STEPS) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
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
          origem: "Formulário de Lead",
          tipo: "formulario",
          timestamp: new Date().toISOString(),
        }),
      });

      // Redirecionar para WhatsApp
      const whatsappMessage = encodeURIComponent("Olá, acabei de responder o formulário no site");
      const whatsappUrl = `https://wa.me/5527999048302?text=${whatsappMessage}`;
      
      trackAndRedirect(whatsappUrl, "Formulário Multi-etapas", "Formulário Completo");
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

  const formatWhatsApp = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, "");
    
    // Aplica a máscara (XX) XXXXX-XXXX
    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setFormData((prev) => ({ ...prev, whatsapp: formatted }));
  };

  const getStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="nome" className="text-sm font-medium text-foreground/80">
                Qual é o seu nome completo?
              </label>
              <Input
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Digite seu nome..."
                className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12 text-base"
                maxLength={100}
                autoFocus
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground/80">
                Qual é o seu email?
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite seu email..."
                className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12 text-base"
                maxLength={255}
                autoFocus
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="whatsapp" className="text-sm font-medium text-foreground/80">
                Qual é o seu WhatsApp?
              </label>
              <Input
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleWhatsAppChange}
                placeholder="(11) 99999-9999"
                className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12 text-base"
                maxLength={15}
                autoFocus
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="interesse" className="text-sm font-medium text-foreground/80">
                Qual é o seu interesse principal?
              </label>
              <Select
                value={formData.interesse}
                onValueChange={(value) => handleSelectChange("interesse", value)}
              >
                <SelectTrigger className="bg-background border-border text-foreground h-12 text-base">
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Cosméticos Capilares">Cosméticos Capilares</SelectItem>
                  <SelectItem value="Skincare">Skincare</SelectItem>
                  <SelectItem value="Perfumaria">Perfumaria</SelectItem>
                  <SelectItem value="Dermocosméticos">Dermocosméticos</SelectItem>
                  <SelectItem value="Linha Completa">Linha Completa</SelectItem>
                  <SelectItem value="Outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="investimento" className="text-sm font-medium text-foreground/80">
                Quanto está disposto a investir?
              </label>
              <Select
                value={formData.investimento}
                onValueChange={(value) => handleSelectChange("investimento", value)}
              >
                <SelectTrigger className="bg-background border-border text-foreground h-12 text-base">
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Até R$ 10.000">Até R$ 10.000</SelectItem>
                  <SelectItem value="R$ 10.000 - R$ 25.000">R$ 10.000 - R$ 25.000</SelectItem>
                  <SelectItem value="R$ 25.000 - R$ 50.000">R$ 25.000 - R$ 50.000</SelectItem>
                  <SelectItem value="R$ 50.000 - R$ 100.000">R$ 50.000 - R$ 100.000</SelectItem>
                  <SelectItem value="Acima de R$ 100.000">Acima de R$ 100.000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      default:
        return null;
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
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
            {/* Progress indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">
                  Pergunta {currentStep} de {TOTAL_STEPS}
                </span>
                {currentStep > 1 && (
                  <button
                    onClick={handlePrevious}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Voltar
                  </button>
                )}
              </div>
              <div className="w-full bg-background/30 rounded-full h-2">
                <motion.div
                  className="bg-gradient-gold h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Form content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {getStepContent()}
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              {currentStep > 1 ? (
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handlePrevious}
                  className="text-foreground/70 hover:text-foreground"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Anterior
                </Button>
              ) : (
                <div />
              )}

              <Button
                type="button"
                variant="hero"
                onClick={handleNext}
                disabled={isLoading}
                className="ml-auto"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : currentStep === TOTAL_STEPS ? (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Finalizar
                  </>
                ) : (
                  <>
                    Avançar
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
