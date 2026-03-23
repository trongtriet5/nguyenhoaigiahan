"use client";

import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { Heart, Users, Palette } from "lucide-react";

export default function Skills() {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="skills" className="py-24 bg-primary-50/50 dark:bg-background/80">
      <div className="container px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.ui.skillsTitle}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.ui.skillsDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-card p-8 rounded-3xl shadow-sm border border-primary-100 dark:border-primary-900/50"
          >
            <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-6 h-6 fill-pink-500 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold mb-6">{t.ui.employerBranding}</h3>
            <ul className="space-y-3">
              {t.skills.branding.map((skill, index) => (
                <motion.li variants={itemVariants} key={index} className="flex items-center gap-3 text-foreground font-medium">
                  <div className="w-2 h-2 rounded-full bg-pink-400" /> {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Marketing */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-card p-8 rounded-3xl shadow-sm border border-primary-100 dark:border-primary-900/50"
          >
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-6 h-6 fill-purple-200" />
            </div>
            <h3 className="text-xl font-bold mb-6">{t.ui.digitalMarketing}</h3>
            <ul className="space-y-3">
              {t.skills.marketing.map((skill, index) => (
                <motion.li variants={itemVariants} key={index} className="flex items-center gap-3 text-foreground font-medium">
                  <div className="w-2 h-2 rounded-full bg-purple-400" /> {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Data */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-card p-8 rounded-3xl shadow-sm border border-primary-100 dark:border-primary-900/50"
          >
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Palette className="w-6 h-6 fill-blue-200" />
            </div>
            <h3 className="text-xl font-bold mb-6">{t.ui.dataAnalytics}</h3>
            <ul className="space-y-3">
              {t.skills.data.map((skill, index) => (
                <motion.li variants={itemVariants} key={index} className="flex items-center gap-3 text-foreground font-medium">
                  <div className="w-2 h-2 rounded-full bg-blue-400" /> {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
