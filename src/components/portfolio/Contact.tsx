import { motion } from 'framer-motion';
import { Phone, Linkedin, ArrowRight, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-3xl rounded-full" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center"
          >
            <Rocket className="w-10 h-10 text-primary" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Let's <span className="gradient-text">Automate & Scale</span> Your Business
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Ready to automate your business processes and scale efficiently? Let's discuss how I can help transform your operations with smart systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" asChild>
              <a href="tel:03000351581">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 03000351581
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="https://www.linkedin.com/in/saqib-ali-88965031a" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.a
              href="tel:03000351581"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="gradient-border p-6 flex items-center gap-4 card-hover group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-semibold text-lg">03000351581</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/saqib-ali-88965031a"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="gradient-border p-6 flex items-center gap-4 card-hover group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Linkedin className="w-7 h-7 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="font-semibold text-lg">Saqib Ali</p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
