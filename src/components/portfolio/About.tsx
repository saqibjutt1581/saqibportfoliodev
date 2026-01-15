import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="gradient-border p-8 md:p-12"
          >
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-8">
              I am a dedicated <span className="text-primary font-semibold">Software Engineering graduate</span> with a passion for building intelligent automation systems that transform how businesses operate. With hands-on experience in CMS development, GoHighLevel automation, funnel building, CRM setup, Zapier integrations, and Webflow website development, I bring a comprehensive skill set to every project.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-8">
              My expertise lies in creating <span className="text-primary font-semibold">scalable automation solutions</span> that help businesses save time, increase conversions, and automate their workflows. Whether it's setting up complex CRM pipelines, designing high-converting sales funnels, or integrating multiple platforms through Zapier, I deliver solutions that drive real results.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Degree</p>
                  <p className="font-medium">BS Software Engineering</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">University</p>
                  <p className="font-medium">University of Sindh</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Graduated</p>
                  <p className="font-medium">2024</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;