import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  name: string;
  level: number;
  icon: LucideIcon;
  category: string;
  index: number;
}

export const SkillCard = ({ name, level, icon: Icon, category, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group card-glow p-6 rounded-2xl"
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="p-3 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 border border-accent-purple/20 group-hover:border-accent-purple/40 transition-colors">
          <Icon size={24} className="text-accent-purple" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-display font-semibold text-foreground">{name}</h3>
            <span className="text-xs text-text-muted">{level}%</span>
          </div>
          <p className="text-xs text-text-secondary mb-3">{category}</p>

          {/* Progress Bar */}
          <div className="skill-bar">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: [0.2, 0.9, 0.3, 1] }}
              className="skill-bar-fill"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
