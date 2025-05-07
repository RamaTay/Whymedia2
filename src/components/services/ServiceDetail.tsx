import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ServiceDetailProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: ReactNode;
  reversed?: boolean;
}

const ServiceDetail = ({
  id,
  title,
  description,
  features,
  image,
  icon,
  reversed = false,
}: ServiceDetailProps) => {
  return (
    <section id={id} className="py-16 border-b border-slate-200 last:border-0">
      <div className="container">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:grid-flow-dense' : ''}`}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className={`rounded-lg overflow-hidden ${reversed ? 'lg:col-start-1' : 'lg:col-start-2'}`}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className={reversed ? 'lg:col-start-2' : 'lg:col-start-1'}
          >
            <div className="flex items-center gap-3 mb-4">
              {icon}
              <h2 className="text-3xl font-bold">{title}</h2>
            </div>
            
            <p className="text-slate-600 text-lg mb-6">{description}</p>
            
            <h3 className="text-xl font-semibold mb-4">What We Offer:</h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="bg-primary-100 text-primary-700 rounded-full p-1 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;