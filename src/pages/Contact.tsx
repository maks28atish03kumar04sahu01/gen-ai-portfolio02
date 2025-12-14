import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GlassCard } from "@/components/GlassCard";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
  CheckCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

const faqItems = [
  {
    question: "What's your typical project timeline?",
    answer: "Project timelines vary based on complexity. A simple website might take 2-4 weeks, while complex web applications can take 2-3 months. I'll provide a detailed timeline after our initial consultation.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely! I work with clients worldwide. I'm flexible with time zones and use various communication tools to ensure smooth collaboration regardless of location.",
  },
  {
    question: "What's included in your design process?",
    answer: "My process includes discovery, wireframing, visual design, prototyping, and development. I provide regular updates and revisions at each stage to ensure the final product exceeds expectations.",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // Spam protection
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      return;
    }

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message sent successfully!");

    // Reset form after delay
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
      setIsSubmitted(false);
    }, 3000);
  };

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
              Get in Touch
            </span>
            <h1 className="font-display text-display-sm md:text-display-md lg:text-display-lg text-foreground mb-4">
              Let's work
              <span className="gradient-text"> together</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 lg:py-28 section-light">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Send a message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot - hidden from users */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="input-floating">
                    <input
                      type="text"
                      id="name"
                      placeholder=" "
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <label htmlFor="name">Your Name *</label>
                  </div>

                  <div className="input-floating">
                    <input
                      type="email"
                      id="email"
                      placeholder=" "
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                    <label htmlFor="email">Email Address *</label>
                  </div>

                  <div className="input-floating">
                    <input
                      type="text"
                      id="subject"
                      placeholder=" "
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>

                  <div className="input-floating">
                    <textarea
                      id="message"
                      rows={5}
                      placeholder=" "
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                    <label htmlFor="message">Your Message *</label>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full btn-primary flex items-center justify-center gap-2 ${
                      isSubmitted ? "!bg-accent-green" : ""
                    }`}
                    whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle size={20} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </GlassCard>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <GlassCard key={index} delay={index * 0.1}>
                      <a
                        href={info.href}
                        className="flex items-center gap-4 group"
                        {...(info.href ? {} : { as: "div" })}
                      >
                        <div className="p-3 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 border border-accent-purple/20 group-hover:border-accent-purple/40 transition-colors">
                          <info.icon size={24} className="text-accent-purple" />
                        </div>
                        <div>
                          <p className="text-text-secondary text-sm">{info.label}</p>
                          <p className="text-foreground font-medium">{info.value}</p>
                        </div>
                      </a>
                    </GlassCard>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl bg-bg-700 hover:bg-accent-purple/20 border border-border/30 hover:border-accent-purple/50 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon
                        size={24}
                        className="text-text-secondary group-hover:text-accent-purple transition-colors"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Frequently Asked
                </h3>
                <div className="space-y-3">
                  {faqItems.map((item, index) => (
                    <GlassCard key={index} hover={false} className="overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full flex items-center justify-between gap-4 text-left"
                      >
                        <span className="font-medium text-foreground">{item.question}</span>
                        <ChevronDown
                          size={20}
                          className={`text-text-secondary transition-transform duration-300 ${
                            openFaq === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <motion.div
                        initial={false}
                        animate={{
                          height: openFaq === index ? "auto" : 0,
                          opacity: openFaq === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-text-secondary text-sm mt-4 pt-4 border-t border-border/30">
                          {item.answer}
                        </p>
                      </motion.div>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
