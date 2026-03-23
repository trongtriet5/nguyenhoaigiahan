"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { dictionary } from "@/data/portfolio";

export type Language = "en" | "vi";
export type Translation = typeof dictionary.en;

export type DictionaryContextType = {
  lang: Language;
  t: Translation;
  setLang: (lang: Language) => void;
};

const LanguageContext = createContext<DictionaryContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const saved = localStorage.getItem("appLang") as Language | null;
    if (saved && (saved === "en" || saved === "vi")) {
      setLang(saved);
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("appLang", newLang);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ lang: "en", t: dictionary.en, setLang: handleSetLang }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ lang, t: dictionary[lang], setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
