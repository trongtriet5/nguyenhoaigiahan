"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { Sparkles } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-primary-50 dark:bg-background/50 relative">
      <div className="container px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-card shadow-xl shadow-primary-900/5 rounded-3xl p-8 md:p-12 border border-primary-100/50 dark:border-primary-900/20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">{t.ui.about}</h2>
          </div>
          
          <p className="text-lg leading-relaxed text-foreground md:text-xl">
            {t.personalInfo.about}
          </p>
          
        </motion.div>
      </div>
    </section>
  );
}
