"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { CheckCircle2, TrendingUp, Cpu, ExternalLink, FileText, X } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    tools: string[];
    metrics: string[];
    links?: { label: string; url: string }[];
    pdfUrl?: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useLanguage();
  const [showPdf, setShowPdf] = useState(false);

  // Lock scroll when PDF is open
  useEffect(() => {
    if (showPdf) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showPdf]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group bg-card rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 border border-primary-50 dark:border-primary-900/30 transition-all duration-300 flex flex-col h-full"
      >
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
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

          {/* PDF Link Section - Special Case */}
          {project.pdfUrl && (
            <div className="pt-4 border-t border-primary-100 dark:border-primary-900/30">
              <span className="flex items-center gap-2 text-sm font-semibold text-orange-600 dark:text-orange-400 uppercase mb-2">
                <FileText className="w-4 h-4" /> {t.ui.documentation}
              </span>
              <button
                onClick={() => setShowPdf(true)}
                className="group/btn flex items-center justify-between w-full px-4 py-3 bg-orange-50 dark:bg-orange-950/20 text-orange-700 dark:text-orange-300 rounded-xl hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-all border border-orange-100 dark:border-orange-900/20"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-orange-500 text-white p-2 rounded-lg">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="text-start">
                    <p className="font-bold text-sm">{t.ui.viewDocument}</p>
                    <p className="text-xs opacity-80">{t.ui.pdfNote}</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          )}

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

      {/* PDF Viewer Modal */}
      {showPdf && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowPdf(false)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-900 w-full max-w-5xl h-[90vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-orange-500" />
                <h3 className="font-bold truncate max-w-[200px] md:max-w-md">{project.title}</h3>
              </div>
              <button 
                onClick={() => setShowPdf(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-grow relative bg-gray-100 dark:bg-gray-800">
              <iframe 
                src={project.pdfUrl} 
                className="w-full h-full border-none"
                title={project.title}
              />
            </div>
          </motion.div>
        </div>,
        document.body
      )}
    </>
  );
}
