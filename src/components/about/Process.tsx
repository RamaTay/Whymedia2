import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const steps = [
  {
    id: 1,
    title: 'Discovery',
    description: 'We begin by understanding your business, goals, audience, and challenges through in-depth research and collaborative discussions.',
  },
  {
    id: 2,
    title: 'Strategy',
    description: 'Based on our findings, we develop a tailored strategy that aligns creative solutions with your business objectives and audience needs.',
  },
  {
    id: 3,
    title: 'Creation',
    description: 'Our team of specialists brings the strategy to life, crafting compelling visuals, content, and experiences with meticulous attention to detail.',
  },
  {
    id: 4,
    title: 'Refinement',
    description: 'Through collaborative feedback and iteration, we refine and perfect our work to ensure it meets the highest standards of quality and effectiveness.',
  },
  {
    id: 5,
    title: 'Launch',
    description: 'We carefully implement and launch your project, ensuring everything works seamlessly and achieves maximum impact from day one.',
  },
  {
    id: 6,
    title: 'Growth',
    description: 'Our relationship continues as we monitor performance, gather insights, and identify opportunities for ongoing optimization and evolution.',
  },
];

const Process = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <SectionHeading
          subtitle="Our Process"
          title="How We Work"
          description="Our proven approach combines strategic thinking with creative expertise to deliver exceptional results for our clients."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="relative"
            >
              <div className="bg-primary-50 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                <span className="text-primary-700 font-heading font-bold text-xl">{step.id}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;