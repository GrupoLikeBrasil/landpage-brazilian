// Função para enviar eventos para Google Analytics via Google Tag Manager
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const trackEvent = (
  eventName: string,
  eventCategory: string,
  eventLabel?: string,
  eventValue?: number,
  additionalParams?: Record<string, any>
) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventValue: eventValue,
      ...additionalParams,
    });
  }
};

// Funções específicas para tracking de botões
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent("button_click", "Engagement", buttonName, undefined, {
    button_name: buttonName,
    location: location,
  });
};

// Função para tracking de formulário
export const trackFormSubmit = (formData: {
  nome: string;
  email: string;
  whatsapp: string;
  interesse: string;
  investimento: string;
}) => {
  trackEvent("form_submit", "Lead", "Formulário Multi-etapas", undefined, {
    form_name: "Formulário de Lead",
    form_type: "multi-step",
    interesse: formData.interesse,
    investimento: formData.investimento,
  });
};

// Função para tracking de progresso do formulário
export const trackFormStep = (step: number, totalSteps: number) => {
  trackEvent("form_step", "Engagement", `Step ${step}`, step, {
    step_number: step,
    total_steps: totalSteps,
  });
};

