import { create } from "zustand";

export type Language = "id" | "en";

interface LanguageState {
  currentLang: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

// Mengambil bahasa terakhir yang disimpan di browser (default: "id")
const savedLanguage = (localStorage.getItem("app_lang") as Language) || "id";

export const useLanguageStore = create<LanguageState>((set) => ({
  currentLang: savedLanguage,

  // Fungsi untuk memilih bahasa tertentu ("id" atau "en")
  setLanguage: (lang: Language) => {
    localStorage.setItem("app_lang", lang);
    set({ currentLang: lang });
  },

  // Fungsi praktis untuk switch langsung ID <-> EN
  toggleLanguage: () => {
    set((state) => {
      const nextLang: Language = state.currentLang === "id" ? "en" : "id";
      localStorage.setItem("app_lang", nextLang);
      return { currentLang: nextLang };
    });
  },
}));
