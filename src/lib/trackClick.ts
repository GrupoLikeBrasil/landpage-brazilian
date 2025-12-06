const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbycuPgVmsW16LEFV_hIcBxhaos0-CE0GvSs5nnYUfF587Qj-pyr8dKvwE_kFwKswr6a/exec";

export interface ClickTrackData {
  origem: string;
  modelo?: string;
  tipo: "whatsapp" | "formulario";
}

export const trackClick = async (data: ClickTrackData): Promise<void> => {
  try {
    await fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (error) {
    console.error("Erro ao rastrear clique:", error);
  }
};

export const trackAndRedirect = (url: string, origem: string, modelo?: string): void => {
  trackClick({
    origem,
    modelo,
    tipo: "whatsapp",
  });
  
  window.open(url, "_blank", "noopener,noreferrer");
};
