"use client";

import Hero from "@/components/ui/Hero";
import About from "@/components/ui/About";
import Projects from "@/components/ui/Projects";
import Skills from "@/components/ui/Skills";
import Experience from "@/components/ui/Experience";
import Contact from "@/components/ui/Contact";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen relative">
      <LanguageSwitcher />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center text-sm text-muted-foreground bg-primary-900 dark:bg-primary-950 border-t border-white/10">
        <p>© {new Date().getFullYear()} {t.personalInfo.name}. {t.ui.footer}</p>
      </footer>
    </main>
  );
}
