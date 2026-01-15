import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import automationImage from '@/assets/automation-workflow.jpg';

const automationCapabilities = [
  {
    title: 'CRM Pipeline Automation',
    description: 'Design and implement automated lead progression through customized pipeline stages, ensuring no opportunity falls through the cracks.',
  },
  {
    title: 'Email & SMS Automation',
    description: 'Create sophisticated drip campaigns and instant response sequences that nurture leads 24/7 without manual intervention.',
  },
  {
    title: 'WhatsApp Business Integration',
    description: 'Set up automated WhatsApp messaging flows for instant customer engagement and support ticketing.',
  },
  {
    title: 'Lead Nurturing Sequences',
    description: 'Build intelligent follow-up sequences that adapt based on lead behavior, scoring, and engagement levels.',
  },
  {
    title: 'Appointment Booking Automation',
    description: 'Implement seamless scheduling systems with automated reminders, confirmations, and no-show follow-ups.',
  },
  {
    title: 'Zapier Multi-Platform Integration',
    description: 'Connect GoHighLevel with Google Sheets, Calendly, Stripe, webhooks, and 5,000+ applications for unified workflows.',
  },
];

const Automation = () => {
  return (
    <section id="automation" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-primary/5 blur-3xl rounded-full" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Automation <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Advanced automation solutions that streamline operations and drive business growth
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden gradient-border">
              <img
                src={automationImage}
                alt="Automation workflow diagram"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse-glow" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse-glow animation-delay-400" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-2xl font-display font-bold mb-6">
              Transforming Business Operations Through Intelligent Automation
            </h3>
            <p className="text-muted-foreground mb-8">
              I specialize in designing and implementing advanced automations in GoHighLevel that help agencies and service-based businesses scale efficiently. From initial lead capture to final conversion, every step is optimized for maximum efficiency.
            </p>

            <div className="space-y-4">
              {automationCapabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">{capability.title}</h4>
                    <p className="text-sm text-muted-foreground">{capability.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Automation;