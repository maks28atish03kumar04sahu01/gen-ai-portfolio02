import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export const SectionHeading = ({ label, title, description, center = false }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`space-y-4 ${center ? "text-center" : ""}`}
    >
      {label && (
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
          {label}
        </span>
      )}
      <h2 className="font-display text-display-sm md:text-display-md lg:text-display-lg text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary text-lg max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
};
