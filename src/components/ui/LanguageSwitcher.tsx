"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center bg-card shadow-lg rounded-full p-1 border border-primary-100 dark:border-primary-900/50">
      <button
        onClick={() => setLang("en")}
        aria-label="Switch to English"
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
          lang === "en" ? "bg-primary-500 text-white" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("vi")}
        aria-label="Switch to Vietnamese"
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
          lang === "vi" ? "bg-primary-500 text-white" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        VI
      </button>
    </div>
  );
}
