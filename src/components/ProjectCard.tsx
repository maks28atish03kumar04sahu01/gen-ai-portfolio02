import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "live" | "case-study";
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group card-glow rounded-2xl overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-900 via-bg-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className={project.category === "live" ? "tag-live" : "tag-case-study"}>
            {project.category === "live" ? "Live Project" : "Case Study"}
          </span>
        </div>

        {/* Quick Actions */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card hover:bg-accent-purple/20 transition-colors"
              aria-label="View live project"
            >
              <ExternalLink size={18} className="text-foreground" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card hover:bg-accent-purple/20 transition-colors"
              aria-label="View on GitHub"
            >
              <Github size={18} className="text-foreground" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-bg-700 text-text-secondary border border-border/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};
