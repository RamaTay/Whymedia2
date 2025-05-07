import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const projects = [
  {
    id: 1,
    title: 'Eco Warrior Brand Identity',
    category: 'Branding & Logo',
    image: 'https://images.pexels.com/photos/1535162/pexels-photo-1535162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/portfolio/eco-warrior',
  },
  {
    id: 2,
    title: 'Lunar App Redesign',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/portfolio/lunar-app',
  },
  {
    id: 3,
    title: 'Bloom Social Campaign',
    category: 'Social Media',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/portfolio/bloom-campaign',
  },
];

const PortfolioSection = () => {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          subtitle="Our Work"
          title="Featured Projects"
          description="Explore our selected projects that showcase our creative approach and technical expertise."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="relative group"
            >
              <Link to={project.link} className="block">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                </div>
                <div className="absolute bottom-0 left-0 p-6 z-10">
                  <span className="text-primary-300 text-sm font-medium mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl md:text-2xl font-bold">{project.title}</h3>
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <span className="inline-flex items-center text-white font-medium">
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            as={Link}
            to="/portfolio"
            variant="secondary"
            animated
            icon={<ArrowRight />}
            iconPosition="right"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;