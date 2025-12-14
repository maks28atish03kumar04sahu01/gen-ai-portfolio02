import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectCard, Project } from "@/components/ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const categories = ["All", "Web App", "Mobile", "E-commerce", "Branding"];

const projects: Project[] = [
  {
    id: "1",
    title: "Neon Mobile App",
    subtitle: "A stunning mobile experience with fluid animations and intuitive UX design for the modern user.",
    category: "live",
    image: project1,
    techStack: ["React Native", "TypeScript", "Reanimated", "Expo"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "2",
    title: "Analytics Dashboard",
    subtitle: "Real-time data visualization platform providing enterprise clients with actionable insights.",
    category: "live",
    image: project2,
    techStack: ["React", "D3.js", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "3",
    title: "EcoStore Platform",
    subtitle: "Sustainable e-commerce solution featuring AI-powered product recommendations and eco-metrics.",
    category: "case-study",
    image: project3,
    techStack: ["Next.js", "Stripe", "PostgreSQL", "Vercel"],
    liveUrl: "#",
  },
  {
    id: "4",
    title: "SEFANG Brand Identity",
    subtitle: "Complete brand identity system for an innovative tech startup entering the market.",
    category: "case-study",
    image: project4,
    techStack: ["Figma", "Illustrator", "After Effects"],
  },
  {
    id: "5",
    title: "FinTech Dashboard",
    subtitle: "Secure financial management platform with real-time portfolio tracking and analytics.",
    category: "live",
    image: project2,
    techStack: ["React", "TypeScript", "GraphQL", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "6",
    title: "Travel Booking App",
    subtitle: "Mobile-first travel booking experience with personalized recommendations and trip planning.",
    category: "case-study",
    image: project1,
    techStack: ["React Native", "Firebase", "Maps API"],
    liveUrl: "#",
  },
];

const projectCategories: Record<string, string[]> = {
  "Web App": ["2", "5"],
  "Mobile": ["1", "6"],
  "E-commerce": ["3"],
  "Branding": ["4"],
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"newest" | "oldest">("newest");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => projectCategories[activeCategory]?.includes(project.id));

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "newest") {
      return parseInt(b.id) - parseInt(a.id);
    }
    return parseInt(a.id) - parseInt(b.id);
  });

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 section-dark noise-texture">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="container relative mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent-purple/10 text-accent-purple border border-accent-purple/20 mb-6">
              Portfolio
            </span>
            <h1 className="font-display text-display-sm md:text-display-md lg:text-display-lg text-foreground mb-4">
              Featured
              <span className="gradient-text"> Projects</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              A showcase of my best work, from web applications to mobile experiences and brand identities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-30 bg-bg-900/95 backdrop-blur-xl border-b border-border/30 py-4">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-accent-purple text-foreground shadow-glow-purple"
                      : "bg-bg-700 text-text-secondary hover:bg-bg-600 hover:text-foreground border border-border/30"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Sort Control */}
            <div className="flex items-center gap-2">
              <span className="text-text-secondary text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "newest" | "oldest")}
                className="px-4 py-2 rounded-xl bg-bg-700 border border-border/30 text-foreground text-sm focus:outline-none focus:border-accent-purple transition-colors"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-20 lg:py-28 section-light">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + sortBy}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {sortedProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {sortedProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-text-secondary text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
