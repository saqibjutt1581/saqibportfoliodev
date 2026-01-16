import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Linkedin, Briefcase, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-automation.jpg';
import profilePhoto from '@/assets/profile-photo.jpeg';

const Hero = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-0">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Automation workflow background"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-15 z-0" />

        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-primary/30 to-blue-500/20 blur-3xl rounded-full animate-pulse-glow z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-blue-500/20 to-primary/30 blur-3xl rounded-full animate-pulse-glow z-0" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 text-center lg:text-left"
            >
              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6"
              >
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">2+ Years Professional Experience</span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4"
              >
                <span className="gradient-text">Saqib Ali</span>
              </motion.h1>

              {/* Role */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground/90 mb-4"
              >
                Software Engineer | Automation & GHL Expert
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Building powerful automation systems, CRM solutions, and high-converting funnels 
                that help businesses save time, increase conversions, and scale operations efficiently.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button variant="hero" size="xl" asChild>
                  <a href="#contact">
                    Let's Automate Your Business
                  </a>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <a href="#automation">
                    <ChevronDown className="w-5 h-5 mr-2" />
                    View My Work
                  </a>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-8 flex items-center gap-4 justify-center lg:justify-start"
              >
                <a
                  href="https://www.linkedin.com/in/saqib-ali-88965031a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm">Connect on LinkedIn</span>
                </a>
                <span className="text-muted-foreground/50">|</span>
                <a
                  href="tel:03000351581"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  03000351581
                </a>
              </motion.div>
            </motion.div>

            {/* Right Side - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div 
                className="relative group cursor-pointer"
                onClick={() => setIsImageOpen(true)}
              >
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                
                {/* Main Image Container */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src={profilePhoto}
                    alt="Saqib Ali - Software Engineer & Automation Expert"
                    className="w-full h-full object-cover object-top"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-sm font-medium text-white bg-primary/80 px-4 py-2 rounded-full">
                      Click to enlarge
                    </span>
                  </div>
                </div>

                {/* Experience Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-gradient-to-r from-primary to-blue-500 px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg"
                >
                  <Briefcase className="w-4 h-4 text-white" />
                  <span className="text-sm font-semibold text-white whitespace-nowrap">Hatzs Dimension</span>
                </motion.div>

                {/* Skills Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-background border border-primary/30 px-4 py-2 rounded-xl shadow-lg"
                >
                  <span className="text-sm font-semibold gradient-text">GHL Expert</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
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
      </section>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {isImageOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
            onClick={() => setIsImageOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsImageOpen(false)}
                className="absolute -top-12 right-0 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
                <img
                  src={profilePhoto}
                  alt="Saqib Ali - Software Engineer & Automation Expert"
                  className="w-full h-auto"
                />
              </div>

              {/* Caption */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-display font-bold gradient-text">Saqib Ali</h3>
                <p className="text-muted-foreground">Software Engineer & Automation Expert</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;