import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/30 bg-bg-900">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-900 to-bg-800/50 pointer-events-none" />

      <div className="container relative mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-display text-2xl font-bold gradient-text">
                Portfolio
              </span>
            </Link>
            <p className="text-text-secondary text-sm max-w-xs">
              Crafting digital experiences that inspire, engage, and deliver results. Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-accent-purple transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-bg-700 hover:bg-accent-purple/20 border border-border/30 hover:border-accent-purple/50 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon
                    size={20}
                    className="text-text-secondary group-hover:text-accent-purple transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <p className="text-text-muted text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-accent-purple fill-accent-purple" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};
