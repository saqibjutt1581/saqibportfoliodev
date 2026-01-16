import { motion } from 'framer-motion';
import { ExternalLink, Monitor, Smartphone, Zap } from 'lucide-react';
import webflowCorporate from '@/assets/webflow-corporate.jpg';
import webflowSaas from '@/assets/webflow-saas.jpg';
import webflowAgency from '@/assets/webflow-agency.jpg';
import webflowPersonal from '@/assets/webflow-personal.jpg';

const projects = [
  {
    title: 'SaaS Demo Website',
    description: 'Modern SaaS product landing page with pricing tables, feature sections, and seamless integrations.',
    image: webflowSaas,
    features: ['Animations', 'Pricing Tables', 'Lead Capture'],
    url: 'https://webflow.com/made-in-webflow/website/saas-webflow-template',
  },
  {
    title: 'Corporate Business Demo Website',
    description: 'Professional corporate website with clean design, responsive layout, and optimized performance.',
    image: webflowCorporate,
    features: ['Responsive Design', 'CMS Integration', 'SEO Optimized'],
    url: 'https://webflow.com/made-in-webflow/website/developer-portfolio-webflow-template',
  },
  {
    title: 'Creative Agency Demo Website',
    description: 'Bold and creative portfolio website showcasing agency work with stunning visuals and smooth interactions.',
    image: webflowAgency,
    features: ['Image Gallery', 'Case Studies', 'Contact Forms'],
    url: 'https://webflow.com/made-in-webflow/website/developer-portfolio-template',
  },
  {
    title: 'Personal Brand Demo Website',
    description: 'Elegant personal brand website featuring testimonials, blog integration, and social proof elements.',
    image: webflowPersonal,
    features: ['Blog CMS', 'Testimonials', 'Social Integration'],
    url: 'https://webflow.com/made-in-webflow/website/developer-personal-portfolio',
  },
  {
    title: 'Landing Page Demo Website',
    description: 'High-converting landing page with compelling CTAs, social proof, and mobile-first responsive design.',
    image: webflowSaas,
    features: ['Mobile First', 'Fast Loading', 'Conversion Focused'],
    url: 'https://webflow.com/made-in-webflow/website/developer-portfolio-cv',
  },
  {
    title: 'Portfolio Demo Website',
    description: 'Clean portfolio website showcasing projects with filterable galleries and smooth page transitions.',
    image: webflowPersonal,
    features: ['Portfolio Grid', 'Smooth Animations', 'Contact Form'],
    url: 'https://webflow.com/made-in-webflow/website/developer-portfolio-free',
  },
];

const WebflowProjects = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-blue-500/5 blur-3xl rounded-full" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Webflow <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stunning, responsive websites built with Webflow for maximum performance and visual impact
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group gradient-border overflow-hidden card-hover block cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center">
                      <Monitor className="w-5 h-5 text-primary" />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-primary" />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-display font-bold">{project.title}</h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-foreground rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:underline">
                  View Website <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebflowProjects;