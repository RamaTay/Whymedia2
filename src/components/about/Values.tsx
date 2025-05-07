import { Lightbulb, Users, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const values = [
  {
    id: 1,
    title: 'Creative Excellence',
    description: 'We pursue innovation and excellence in every aspect of our work, challenging conventions and pushing boundaries to deliver exceptional results.',
    icon: <Lightbulb className="w-6 h-6 text-primary-600" />,
  },
  {
    id: 2,
    title: 'Collaborative Spirit',
    description: 'We believe in the power of collaboration, both within our team and with our clients, fostering open communication and shared ownership of outcomes.',
    icon: <Users className="w-6 h-6 text-primary-600" />,
  },
  {
    id: 3,
    title: 'Strategic Focus',
    description: 'We approach each project with strategic intentionality, ensuring that our creative solutions are aligned with business objectives and user needs.',
    icon: <Target className="w-6 h-6 text-primary-600" />,
  },
  {
    id: 4,
    title: 'Continuous Growth',
    description: 'We embrace a mindset of continuous learning and improvement, staying at the forefront of industry trends and evolving our skills to better serve our clients.',
    icon: <Zap className="w-6 h-6 text-primary-600" />,
  },
];

const Values = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container">
        <SectionHeading
          subtitle="Our Values"
          title="What Drives Us Forward"
          description="Our core values shape our approach to work, guide our decisions, and define our company culture."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="bg-primary-50 w-12 h-12 rounded-full flex items-center justify-center mb-5">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-slate-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;