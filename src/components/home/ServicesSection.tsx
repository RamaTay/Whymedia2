import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PenLine, Palette, Briefcase, Layout, MessageSquare, ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const services = [
  {
    id: 1,
    title: 'Logo Design',
    description: 'Custom branding solutions that capture your brand essence and create lasting impressions.',
    icon: <Palette className="text-primary-600 w-6 h-6" />,
    color: 'bg-primary-50',
    link: '/services#logo-design',
  },
  {
    id: 2,
    title: 'Social Media Management',
    description: 'Strategic platform management to grow your audience and drive meaningful engagement.',
    icon: <Briefcase className="text-primary-600 w-6 h-6" />,
    color: 'bg-secondary-50',
    link: '/services#social-media-management',
  },
  {
    id: 3,
    title: 'Web Development',
    description: 'Beautiful, functional websites and applications that deliver exceptional user experiences.',
    icon: <Layout className="text-primary-600 w-6 h-6" />,
    color: 'bg-primary-50',
    link: '/services#web-development',
  },
  {
    id: 4,
    title: 'Content Creation',
    description: 'Photography, video, and multimedia assets that tell your story and showcase your value.',
    icon: <ImageIcon className="text-primary-600 w-6 h-6" />,
    color: 'bg-secondary-50',
    link: '/services#content-creation',
  },
  {
    id: 5,
    title: 'Copywriting',
    description: 'Compelling brand messaging and storytelling that resonates with your target audience.',
    icon: <PenLine className="text-primary-600 w-6 h-6" />,
    color: 'bg-primary-50',
    link: '/services#copywriting',
  },
  {
    id: 6,
    title: 'Graphic Design',
    description: 'Print and digital design solutions that elevate your brand and captivate your audience.',
    icon: <MessageSquare className="text-primary-600 w-6 h-6" />,
    color: 'bg-secondary-50',
    link: '/services#graphic-design',
  },
];

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="section bg-slate-50">
      <div className="container">
        <SectionHeading
          subtitle="Our Services"
          title="Comprehensive Creative Solutions"
          description="We offer a full spectrum of digital services to help your brand stand out in today's competitive landscape."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className={`card hover:shadow-xl ${service.color} p-8 flex flex-col ${
                hoveredCard === service.id ? 'ring-2 ring-primary-400 transform -translate-y-1' : ''
              }`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>
              <Link
                to={service.link}
                className="group inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            as={Link}
            to="/services"
            variant="primary"
            animated
            icon={<ArrowRight />}
            iconPosition="right"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;