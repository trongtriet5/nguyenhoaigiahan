"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Send } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-primary-900 dark:bg-primary-950 text-white relative overflow-hidden">
      <div className="bg-blob bg-primary-700 w-[600px] h-[600px] -left-64 -bottom-64"></div>
      
      <div className="container px-6 max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.ui.contactTitle}</h2>
            <p className="text-primary-200 text-lg mb-10 leading-relaxed">
              {t.ui.contactDesc}
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${t.personalInfo.email}`} className="flex items-center gap-4 hover:text-primary-300 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xl font-medium">{t.personalInfo.email}</span>
              </a>
              
              <a href={t.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-primary-300 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-xl font-medium">{t.ui.linkedinBtn}</span>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white text-foreground p-8 md:p-10 rounded-3xl shadow-xl space-y-6 relative dark:bg-card"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">{t.ui.nameLabel}</label>
              <input type="text" id="name" className="w-full bg-primary-50 dark:bg-primary-950/20 border border-primary-100 dark:border-primary-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-shadow" placeholder={t.ui.namePlaceholder} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">{t.ui.emailLabel}</label>
              <input type="email" id="email" className="w-full bg-primary-50 dark:bg-primary-950/20 border border-primary-100 dark:border-primary-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-shadow" placeholder={t.ui.emailPlaceholder} />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">{t.ui.messageLabel}</label>
              <textarea id="message" rows={4} className="w-full bg-primary-50 dark:bg-primary-950/20 border border-primary-100 dark:border-primary-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-shadow resize-none" placeholder={t.ui.messagePlaceholder}></textarea>
            </div>
            <button type="submit" className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-primary-500/25">
              {t.ui.sendBtn} <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
