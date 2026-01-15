import { motion } from 'framer-motion';
import { ArrowDown, Linkedin, Phone, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-automation.jpg';
import profilePhoto from '@/assets/profile-photo.jpeg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Automation workflow background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 z-0" />

      {/* Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-r from-primary/20 to-blue-500/20 blur-3xl rounded-full animate-pulse-glow z-0" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-primary to-blue-500 p-1.5 mx-auto shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Saqib Ali - Software Engineer"
                  className="w-full h-full rounded-full object-cover object-top"
                />
              </div>
              <div className="absolute inset-0 rounded-full animate-pulse-glow bg-primary/20 blur-xl -z-10" />
              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary to-blue-500 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg"
              >
                <Briefcase className="w-3.5 h-3.5 text-white" />
                <span className="text-xs font-semibold text-white">2+ Years</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4"
          >
            <span className="gradient-text">Saqib Ali</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto"
          >
            Software Engineer | CMS Developer | GoHighLevel Expert | Automation Specialist | Funnel Builder | Webflow Expert
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base md:text-lg text-foreground/80 mb-8 max-w-xl mx-auto"
          >
            Building scalable automation systems that help businesses save time, increase conversions, and streamline workflows.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Let's Automate Your Business
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="https://www.linkedin.com/in/saqib-ali-88965031a" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 flex items-center justify-center gap-2 text-muted-foreground"
          >
            <Phone className="w-4 h-4" />
            <a href="tel:03000351581" className="hover:text-primary transition-colors">
              03000351581
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                <ArrowDown className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;