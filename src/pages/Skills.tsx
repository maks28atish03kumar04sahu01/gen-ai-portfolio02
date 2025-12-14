import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillCard } from "@/components/SkillCard";
import {
  Code2,
  Palette,
  Server,
  Database,
  Smartphone,
  Globe,
  Figma,
  GitBranch,
  Terminal,
  Layers,
  Cpu,
  Cloud,
} from "lucide-react";

const categories = ["All", "Frontend", "Backend", "Design", "Tools"];

const skills = [
  { name: "React / Next.js", level: 95, icon: Code2, category: "Frontend" },
  { name: "TypeScript", level: 90, icon: Code2, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, icon: Palette, category: "Frontend" },
  { name: "Framer Motion", level: 85, icon: Layers, category: "Frontend" },
  { name: "Vue.js", level: 75, icon: Code2, category: "Frontend" },
  { name: "Node.js", level: 88, icon: Server, category: "Backend" },
  { name: "PostgreSQL", level: 82, icon: Database, category: "Backend" },
  { name: "GraphQL", level: 80, icon: Globe, category: "Backend" },
  { name: "Docker", level: 75, icon: Cpu, category: "Backend" },
  { name: "AWS / Cloud", level: 70, icon: Cloud, category: "Backend" },
  { name: "Figma", level: 92, icon: Figma, category: "Design" },
  { name: "UI/UX Design", level: 88, icon: Palette, category: "Design" },
  { name: "Motion Design", level: 80, icon: Layers, category: "Design" },
  { name: "React Native", level: 78, icon: Smartphone, category: "Frontend" },
  { name: "Git / GitHub", level: 92, icon: GitBranch, category: "Tools" },
  { name: "Terminal / CLI", level: 85, icon: Terminal, category: "Tools" },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = activeCategory === "All"
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

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
              Expertise
            </span>
            <h1 className="font-display text-display-sm md:text-display-md lg:text-display-lg text-foreground mb-4">
              Skills &
              <span className="gradient-text"> Technologies</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              A comprehensive toolkit built over years of experience, constantly evolving with the industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-30 bg-bg-900/95 backdrop-blur-xl border-b border-border/30 py-4">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
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
        </div>
      </section>

      {/* Skills Grid */}
      <section className="relative py-20 lg:py-28 section-light">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  category={skill.category}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Tools Carousel */}
      <section className="relative py-20 lg:py-28 section-dark overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading
            label="Daily Drivers"
            title="Tools I Love"
            description="The essential tools and technologies I use every day."
            center
          />

          <div className="mt-12 overflow-hidden">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex gap-8"
            >
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-bg-700 border border-border/30 whitespace-nowrap"
                >
                  <skill.icon size={24} className="text-accent-purple" />
                  <span className="text-foreground font-medium">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Skills;
