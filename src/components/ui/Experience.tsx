"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 bg-background relative">
      <div className="container px-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16 justify-center">
          <div className="p-3 bg-primary-100 text-primary-600 rounded-2xl">
            <Briefcase className="w-6 h-6" />
          </div>
          <h2 className="text-4xl font-bold">{t.ui.expTitle}</h2>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary-300 before:to-transparent">
          {t.experience.map((item, index) => (
            <div key={item.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group md:gap-8">
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary-400 shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10" />
              
              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-6 md:p-8 rounded-3xl shadow-sm border border-primary-50 dark:border-primary-900/30 hover:shadow-xl hover:shadow-primary-400/10 transition-shadow"
              >
                <div className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-bold rounded-full mb-4">
                  {item.period}
                </div>
                <h3 className="text-2xl font-bold mb-1">{item.role}</h3>
                <h4 className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-4">{item.company}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
