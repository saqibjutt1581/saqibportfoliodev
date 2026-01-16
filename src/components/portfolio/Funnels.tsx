import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import funnelLead from '@/assets/funnel-lead.jpg';
import funnelAppointment from '@/assets/funnel-appointment.jpg';
import funnelSales from '@/assets/funnel-sales.jpg';
import funnelEmailSms from '@/assets/funnel-email-sms.jpg';

const funnels = [
  {
    title: 'Lead Generation Demo Funnel',
    description: 'High-converting opt-in pages designed to capture leads with compelling offers and seamless form integration.',
    image: funnelLead,
    tags: ['Opt-in Forms', 'Lead Magnets', 'A/B Testing'],
    url: 'https://preview.gohighlevel.com/template-library',
  },
  {
    title: 'Appointment Booking Demo Funnel',
    description: 'Streamlined scheduling funnels that integrate with calendars and automate confirmation sequences.',
    image: funnelAppointment,
    tags: ['Calendar Integration', 'Reminders', 'No-show Recovery'],
    url: 'https://www.gohighlevel.com/funnel-builder',
  },
  {
    title: 'Sales Conversion Demo Funnel',
    description: 'Multi-step funnels optimized for conversions with upsells, downsells, and order bump functionality.',
    image: funnelSales,
    tags: ['Checkout Pages', 'Upsells', 'Payment Integration'],
    url: 'https://www.gohighlevel.com/sales-funnels',
  },
  {
    title: 'Email & SMS Follow-up Demo Funnel',
    description: 'Automated nurture sequences that engage leads across multiple channels for maximum conversion.',
    image: funnelEmailSms,
    tags: ['Drip Campaigns', 'Segmentation', 'Behavioral Triggers'],
    url: 'https://www.gohighlevel.com/email-marketing',
  },
  {
    title: 'Webinar Registration Demo Funnel',
    description: 'Complete webinar registration system with countdown timers, reminder sequences, and replay access.',
    image: funnelLead,
    tags: ['Webinar Pages', 'Countdown Timer', 'Email Reminders'],
    url: 'https://www.gohighlevel.com/landing-page-builder',
  },
  {
    title: 'CRM Onboarding Demo Funnel',
    description: 'Automated client onboarding workflow with intake forms, welcome sequences, and task assignments.',
    image: funnelAppointment,
    tags: ['Intake Forms', 'Automation', 'Client Portal'],
    url: 'https://www.gohighlevel.com/crm',
  },
];

const Funnels = () => {
  return (
    <section id="funnels" className="section-padding bg-secondary/20 relative">
      <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-primary/5 blur-3xl rounded-full" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Funnel <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            High-converting sales funnels designed to capture, nurture, and convert leads
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {funnels.map((funnel, index) => (
            <motion.a
              key={funnel.title}
              href={funnel.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group gradient-border overflow-hidden card-hover block cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={funnel.image}
                  alt={funnel.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-display font-bold">{funnel.title}</h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
                <p className="text-muted-foreground text-sm mb-4">{funnel.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {funnel.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:underline">
                  View Funnel <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Funnels;