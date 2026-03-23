"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { CheckCircle2, TrendingUp, Cpu, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    tools: string[];
    metrics: string[];
    links?: { label: string; url: string }[];
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 border border-primary-50 dark:border-primary-900/30 transition-all duration-300 flex flex-col h-full"
    >
      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground mb-6 flex-grow">
        {project.description}
      </p>

      <div className="space-y-4">
        {/* Tools Section */}
        <div>
          <span className="flex items-center gap-2 text-sm font-semibold text-primary-600 uppercase mb-2">
            <Cpu className="w-4 h-4" /> {t.ui.toolsUsed}
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 bg-primary-50 dark:bg-primary-950/30 text-primary-700 dark:text-primary-300 text-sm rounded-full font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Metrics Section */}
        <div className="pt-4 border-t border-primary-100 dark:border-primary-900/30">
          <span className="flex items-center gap-2 text-sm font-semibold text-green-600 dark:text-green-400 uppercase mb-2">
            <TrendingUp className="w-4 h-4" /> {t.ui.metrics}
          </span>
          <ul className="space-y-2">
            {project.metrics.map((metric, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span className="text-foreground">{metric}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Links Section */}
        {project.links && project.links.length > 0 && (
          <div className="pt-4 border-t border-primary-100 dark:border-primary-900/30">
            <span className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase mb-2">
              <ExternalLink className="w-4 h-4" /> {t.ui.evidence}
            </span>
            <div className="flex flex-wrap gap-2">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-blue-50 dark:bg-blue-950/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm rounded-lg font-medium transition-colors flex items-center gap-1.5"
                >
                  {link.label}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
