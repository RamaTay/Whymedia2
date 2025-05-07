import { motion } from 'framer-motion';

const ServiceHero = () => {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-slate-900/90" />
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/3182744/pexels-photo-3182744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
            backgroundBlendMode: 'overlay'
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white mb-6"
          >
            Our Digital <span className="text-gradient">Services</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-lg md:text-xl max-w-2xl"
          >
            We offer comprehensive creative solutions designed to elevate your brand and drive meaningful results in today's competitive digital landscape.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;