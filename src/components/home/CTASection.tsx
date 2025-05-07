import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const CTASection = () => {
  return (
    <section className="section py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/90" />
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
            backgroundBlendMode: 'overlay'
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Brand's Digital Presence?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-slate-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Let's collaborate to create exceptional digital experiences that elevate your brand and drive meaningful results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              as={Link} 
              to="/contact"
              variant="accent"
              size="lg"
              animated
              icon={<ArrowRight />}
              iconPosition="right"
            >
              Get in Touch
            </Button>
            <Button 
              as={Link} 
              to="/services"
              variant="outline"
              size="lg"
              animated
              className="text-white border-white hover:bg-white/10"
            >
              Explore Services
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-primary-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-500/20 blur-3xl rounded-full"></div>
    </section>
  );
};

export default CTASection;