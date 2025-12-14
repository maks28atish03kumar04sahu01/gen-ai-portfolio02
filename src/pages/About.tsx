import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { Calendar, MapPin, Sparkles } from "lucide-react";
import aboutImage from "@/assets/about-portrait.jpg";
import workspaceImage from "@/assets/workspace.jpg";

const timeline = [
  {
    year: "2023 - Present",
    title: "Senior Creative Developer",
    company: "Tech Innovations Inc.",
    description: "Leading frontend architecture and design systems for enterprise clients.",
  },
  {
    year: "2021 - 2023",
    title: "Full-Stack Developer",
    company: "Digital Agency Co.",
    description: "Built scalable web applications and mentored junior developers.",
  },
  {
    year: "2019 - 2021",
    title: "UI/UX Designer",
    company: "Creative Studio",
    description: "Designed user experiences for mobile and web applications.",
  },
  {
    year: "2015 - 2019",
    title: "Computer Science Degree",
    company: "University of Technology",
    description: "Bachelor's degree with focus on human-computer interaction.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden noise-texture">
        <div className="absolute inset-0">
          <img
            src={workspaceImage}
            alt="Creative workspace"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-900/80 via-bg-900/90 to-bg-900" />
        </div>

        <div className="container relative mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent-purple/10 text-accent-purple border border-accent-purple/20 mb-6">
              About Me
            </span>
            <h1 className="font-display text-display-sm md:text-display-md lg:text-display-lg text-foreground mb-4">
              The story behind
              <br />
              <span className="gradient-text">the pixels</span>
            </h1>
            <p className="text-text-secondary text-lg">
              A passionate creator at the intersection of design and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="relative py-20 lg:py-28 section-light">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                <img
                  src={aboutImage}
                  alt="Portrait"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-900/60 via-transparent to-transparent" />
                <div className="absolute inset-0 border-2 border-accent-purple/20 rounded-3xl" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4 shadow-elevated"
              >
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-accent-green" />
                  <div>
                    <p className="text-foreground font-medium">Based in</p>
                    <p className="text-text-secondary text-sm">San Francisco, CA</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="font-display text-display-xs md:text-display-sm text-foreground">
                Hello, I'm a creative developer
                <br />
                <span className="gradient-text">who loves to build</span>
              </h2>

              <div className="space-y-4 text-text-secondary">
                <p>
                  With over 5 years of experience in the digital realm, I've had the privilege of working 
                  with startups, agencies, and enterprise clients to bring their visions to life. My journey 
                  began with a curiosity about how beautiful interfaces could enhance user experiences.
                </p>
                <p>
                  I believe that great design is invisible — it should feel natural and intuitive. My approach 
                  combines technical expertise with creative thinking to solve complex problems elegantly. 
                  Whether it's crafting pixel-perfect interfaces or architecting scalable systems, I'm driven 
                  by the pursuit of excellence.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new design trends, contributing to open-source 
                  projects, or mentoring aspiring developers. I'm passionate about sharing knowledge and 
                  helping others grow in their creative journey.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="relative py-20 lg:py-28 section-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/5 via-transparent to-accent-blue/5 pointer-events-none" />

        <div className="container relative mx-auto px-6 lg:px-12">
          <GlassCard className="max-w-4xl mx-auto text-center py-12 glow-pulse">
            <Sparkles size={40} className="text-accent-purple mx-auto mb-6" />
            <blockquote className="font-display text-xl md:text-2xl lg:text-3xl text-foreground italic leading-relaxed">
              "Design is not just what it looks like and feels like.
              <br />
              Design is how it works."
            </blockquote>
            <p className="text-text-secondary mt-6">— My Creative Philosophy</p>
          </GlassCard>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20 lg:py-28 section-light">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading
            label="Experience"
            title="My Journey"
            description="A timeline of my professional growth and key milestones."
            center
          />

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-purple via-accent-blue to-accent-green transform md:-translate-x-1/2" />

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-accent-purple border-4 border-bg-800 transform -translate-x-1.5 md:-translate-x-1/2 shadow-glow-purple" />

                  {/* Content */}
                  <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <GlassCard hover={false}>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar size={16} className="text-accent-purple" />
                        <span className="text-sm text-accent-purple font-medium">{item.year}</span>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="text-accent-green text-sm mt-1">{item.company}</p>
                      <p className="text-text-secondary text-sm mt-2">{item.description}</p>
                    </GlassCard>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
