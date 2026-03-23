"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background blobs */}
      <div className="bg-blob bg-primary-200/50 w-[500px] h-[500px] -top-32 -left-20"></div>
      <div className="bg-blob bg-purple-200/40 w-[400px] h-[400px] top-1/2 -right-32 animation-delay-2000"></div>

      <div className="container px-6 max-w-4xl mx-auto text-center z-10 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white dark:border-card shadow-xl shadow-primary-500/20 relative"
          >
            <Image
              src="/avatar.jpg"
              alt={t.personalInfo.name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <h2 className="text-primary-600 font-medium tracking-wider uppercase mb-4 text-sm md:text-base">
            {t.personalInfo.title}
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight flex flex-col items-center">
            <span>{lang === "vi" ? "Xin chào, tôi là" : "Hi, I'm"}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 mt-2">
              {t.personalInfo.name}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.personalInfo.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-primary-500/30 w-full sm:w-auto text-center justify-center"
            >
              {t.ui.viewProjectsBtn}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group flex items-center gap-2 bg-white dark:bg-card text-foreground hover:text-primary-600 px-8 py-4 rounded-full font-medium transition-all shadow-md hover:shadow-lg border border-primary-100 dark:border-primary-900 w-full sm:w-auto justify-center"
            >
              <Mail className="w-4 h-4" />
              {t.ui.contactBtn}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
