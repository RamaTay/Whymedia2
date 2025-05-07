import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-primary-900/90" />
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/7191096/pexels-photo-7191096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
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
            Get in <span className="text-gradient">Touch</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-lg md:text-xl max-w-2xl"
          >
            Have a project in mind or want to learn more about our services? We'd love to hear from you. Reach out and let's start a conversation about your creative needs.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;