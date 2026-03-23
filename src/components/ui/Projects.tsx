"use client";

import { useLanguage } from "@/components/LanguageProvider";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      <div className="bg-blob bg-primary-300/20 w-[600px] h-[600px] -right-40 top-40"></div>
      
      <div className="container px-6 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.ui.projectsTitle}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.ui.projectsDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
