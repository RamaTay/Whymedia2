import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Project data
const allProjects = [
  {
    id: 1,
    title: 'Eco Warrior Brand Identity',
    category: 'Branding',
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
  {
    id: 4,
    title: 'Horizon Annual Report',
    category: 'Graphic Design',
    image: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/portfolio/horizon-report',
  },
  {
    id: 5,
    title: 'Aria Package Design',
    category: 'Branding',
    image: 'https://images.pexels.com/photos/4041279/pexels-photo-4041279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/portfolio/aria-package',
  },
  {
    id: 6,
    title: 'Summit E-commerce Website',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/portfolio/summit-ecommerce',
  },
  {
    id: 7,
    title: 'Pulse Health App',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/portfolio/pulse-health',
  },
  {
    id: 8,
    title: 'Elevate Product Launch',
    category: 'Social Media',
    image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/portfolio/elevate-launch',
  },
  {
    id: 9,
    title: 'Vertex Corporate Branding',
    category: 'Branding',
    image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/portfolio/vertex-branding',
  },
];

const categories = ['All', 'Branding', 'Web Development', 'Social Media', 'Graphic Design'];

const PortfolioGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <section className="py-16">
      <div className="container">
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredItem(project.id)}
              onMouseLeave={() => setHoveredItem(null)}
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
                  <div className={`mt-3 transform translate-y-4 transition-all duration-300 ${
                    hoveredItem === project.id ? 'opacity-100 translate-y-0' : 'opacity-0'
                  }`}>
                    <span className="inline-flex items-center text-white font-medium">
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;