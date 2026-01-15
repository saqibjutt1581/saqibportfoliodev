import { Linkedin, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Role */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold gradient-text mb-1">Saqib Ali</h3>
            <p className="text-sm text-muted-foreground">
              Software Engineer | Automation Specialist
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-6">
            <a
              href="tel:03000351581"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>03000351581</span>
            </a>
            <a
              href="https://www.linkedin.com/in/saqib-ali-88965031a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors group"
          >
            <ArrowUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Saqib Ali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;