import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';

const responsibilities = [
  'CRM & automation development using GoHighLevel',
  'GHL workflow & pipeline setup for client projects',
  'Funnel creation & conversion optimization',
  'CMS-based solutions and dynamic content systems',
  'Zapier & third-party platform integrations',
  'Client-based automation systems for agencies',
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] bg-primary/5 blur-3xl rounded-full" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional journey in automation and software development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-500 to-primary/20 hidden md:block" />
            
            {/* Experience Card */}
            <div className="gradient-border p-8 md:p-10 md:ml-16 relative">
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute -left-[4.5rem] top-10 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-blue-500 items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-background" />
              </div>

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    Software Engineer
                  </h3>
                  <div className="flex items-center gap-2 text-primary">
                    <Building2 className="w-5 h-5" />
                    <span className="font-semibold text-lg">Hatzs Dimension</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">Software House</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">2+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Currently Working</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Working as a dedicated Software Engineer at Hatzs Dimension, specializing in building robust automation systems, CRM solutions, and conversion-focused funnels for diverse clients ranging from startups to established agencies.
              </p>

              {/* Responsibilities */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground mb-4">Key Responsibilities:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {responsibilities.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/90">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <h4 className="font-semibold text-foreground mb-4">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {['GoHighLevel', 'Zapier', 'Webflow', 'CRM Systems', 'API Integration', 'Automation', 'Funnels'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
