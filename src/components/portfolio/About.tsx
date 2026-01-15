import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Briefcase } from 'lucide-react';

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
              I am a dedicated <span className="text-primary font-semibold">Software Engineering graduate</span> with over <span className="text-primary font-semibold">2+ years of hands-on experience</span> working at <span className="text-primary font-semibold">Hatzs Dimension</span>, a professional software house. My expertise spans CMS development, GoHighLevel (GHL) automation, funnel building, CRM setup, Zapier integrations, and Webflow development.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-8">
              I specialize in creating <span className="text-primary font-semibold">scalable automation solutions</span> that help businesses automate operations, improve lead management, and increase conversions through smart systems. From designing complex CRM pipelines to building high-converting sales funnels, I deliver solutions that drive measurable results.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-8">
              Working in a professional software house environment has honed my ability to deliver <span className="text-primary font-semibold">client-focused solutions</span> with efficiency and precision. I collaborate with diverse teams and clients, ensuring every project meets the highest standards of quality and performance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Degree</p>
                  <p className="font-medium">BS Software Engineering</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">University</p>
                  <p className="font-medium">University of Sindh</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Graduated</p>
                  <p className="font-medium">2024</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Experience</p>
                  <p className="font-medium">2+ Years</p>
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
