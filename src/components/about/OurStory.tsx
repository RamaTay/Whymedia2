import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const OurStory = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              subtitle="Our Story"
              title="From Passion to Purpose"
              description="Founded in 2018 with a vision to bridge the gap between art and technology, Y Media has grown from a small creative studio to a comprehensive digital partner for brands seeking excellence."
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-6 text-slate-600"
            >
              <p>
                What began as a collaboration between two designers with complementary skills has evolved into a diverse team of specialists unified by a shared commitment to creative excellence and client success.
              </p>
              <p>
                Our journey has been defined by continuous learning, innovation, and a relentless pursuit of quality. With each project, we've refined our approach, expanded our capabilities, and deepened our understanding of what makes brands resonate in an increasingly complex digital landscape.
              </p>
              <p>
                Today, Y Media stands as a trusted creative partner for businesses of all sizes, from ambitious startups to established enterprises. While our services and team have grown, our founding principles remain unchanged: thoughtful design, strategic thinking, and meaningful results.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Y Media team collaborating"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-5 w-44">
              <p className="font-heading font-bold text-4xl text-primary-600">5+</p>
              <p className="text-slate-600">Years of creative excellence</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-xl p-5 w-44">
              <p className="font-heading font-bold text-4xl text-primary-600">200+</p>
              <p className="text-slate-600">Successful projects</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;