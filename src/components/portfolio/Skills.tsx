import { motion } from 'framer-motion';
import { 
  Settings, 
  Workflow, 
  Target, 
  Zap, 
  Code, 
  Globe, 
  Cpu, 
  Users 
} from 'lucide-react';

const skills = [
  {
    icon: Settings,
    title: 'GoHighLevel CRM',
    description: 'Complete CRM setup, customization, and optimization for agencies and businesses.',
  },
  {
    icon: Workflow,
    title: 'GHL Automation',
    description: 'Advanced workflow automation, triggers, and conditional logic implementation.',
  },
  {
    icon: Target,
    title: 'Sales Funnels',
    description: 'Lead funnels, appointment funnels, email & SMS funnels that convert.',
  },
  {
    icon: Zap,
    title: 'Zapier Integration',
    description: 'Connect GHL with third-party tools like Google Sheets, Calendly, and Stripe.',
  },
  {
    icon: Code,
    title: 'CMS Development',
    description: 'Custom content management solutions tailored to business needs.',
  },
  {
    icon: Globe,
    title: 'Webflow Design',
    description: 'Responsive, pixel-perfect websites with CMS integration and animations.',
  },
  {
    icon: Cpu,
    title: 'API & Automation',
    description: 'Custom API integrations and automation logic for complex workflows.',
  },
  {
    icon: Users,
    title: 'Lead Management',
    description: 'CRM optimization for better lead tracking, nurturing, and conversion.',
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="section-padding bg-secondary/20 relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-3xl rounded-full" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set focused on automation, CRM, and web development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              className="group gradient-border p-6 card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <skill.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;