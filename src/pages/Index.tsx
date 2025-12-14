import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Award, Briefcase, Mail, ChevronRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectCard, Project } from "@/components/ProjectCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { GlassCard } from "@/components/GlassCard";
import heroImage from "@/assets/hero-portrait.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const featuredProjects: Project[] = [
  {
    id: "1",
    title: "Neon Mobile App",
    subtitle: "A stunning mobile experience with fluid animations and intuitive UX design.",
    category: "live",
    image: project1,
    techStack: ["React Native", "TypeScript", "Reanimated"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "2",
    title: "Analytics Dashboard",
    subtitle: "Real-time data visualization platform for enterprise clients.",
    category: "live",
    image: project2,
    techStack: ["React", "D3.js", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "3",
    title: "EcoStore Platform",
    subtitle: "Sustainable e-commerce solution with AI-powered recommendations.",
    category: "case-study",
    image: project3,
    techStack: ["Next.js", "Stripe", "PostgreSQL"],
    liveUrl: "#",
  },
  {
    id: "4",
    title: "SEFANG Branding",
    subtitle: "Complete brand identity system for a tech startup.",
    category: "case-study",
    image: project4,
    techStack: ["Figma", "Illustrator", "Motion"],
  },
];

const highlights = [
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Awards Won",
    description: "Industry recognition for excellence",
  },
  {
    icon: Briefcase,
    value: 50,
    suffix: "+",
    label: "Projects Completed",
    description: "Successful client deliveries",
  },
  {
    icon: Mail,
    value: 99,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Happy clients worldwide",
  },
];

const Index = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-texture">
        {/* Background Image with Parallax */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt="Creative professional portrait"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-bg-900 via-bg-900/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-900 via-transparent to-bg-900/50" />
          <div className="vignette" />
        </motion.div>

        {/* Content */}
        <div className="container relative mx-auto px-6 lg:px-12 pt-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                Creative Developer & Designer
              </span>

              <h1 className="font-display text-display-sm md:text-display-lg lg:text-display-xl">
                <span className="text-foreground">Crafting </span>
                <span className="gradient-text">Digital</span>
                <br />
                <span className="text-foreground">Experiences</span>
              </h1>

              <p className="text-text-secondary text-lg md:text-xl max-w-xl">
                I transform ideas into immersive digital experiences. Specializing in modern web development, 
                UI/UX design, and creative storytelling that captivates and converts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
                Explore Work
                <ArrowRight size={18} />
              </Link>
              <a
                href="#"
                className="btn-outline inline-flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hidden lg:flex gap-4 mt-16"
            >
              <div className="glass-card rounded-2xl p-4 float-slow">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-accent-green animate-pulse" />
                  <span className="text-sm text-foreground">Available for work</span>
                </div>
              </div>
              <div className="glass-card rounded-2xl p-4 float-medium" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎨</span>
                  <span className="text-sm text-foreground">5+ Years Experience</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-text-muted">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-text-muted/30 flex justify-center pt-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative py-24 lg:py-32 section-light">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                Featured Work
              </span>
              <h2 className="font-display text-display-xs md:text-display-sm text-foreground">
                Selected Projects
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-accent-purple hover:text-accent-purple-glow transition-colors group"
              >
                View all projects
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="relative py-24 lg:py-32 section-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent pointer-events-none" />

        <div className="container relative mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <GlassCard key={index} delay={index * 0.1} className="text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 border border-accent-purple/20">
                    <item.icon size={28} className="text-accent-purple" />
                  </div>
                  <div>
                    <div className="font-display text-display-xs text-foreground">
                      <AnimatedCounter value={item.value} suffix={item.suffix} />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mt-1">
                      {item.label}
                    </h3>
                    <p className="text-text-secondary text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 section-light overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-accent-purple/30 to-accent-blue/20 blur-[120px]" />
        </div>

        <div className="container relative mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <h2 className="font-display text-display-xs md:text-display-sm lg:text-display-md text-foreground">
              Ready to bring your
              <br />
              <span className="gradient-text">vision to life?</span>
            </h2>
            <p className="text-text-secondary text-lg">
              Let's collaborate and create something extraordinary together. I'm always excited to work on new projects.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2 mt-4">
                Start a Conversation
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
