import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const testimonials = [
  {
    id: 1,
    content: "Y Media transformed our brand identity with their exceptional creativity and strategic thinking. The team's attention to detail and commitment to understanding our vision resulted in a rebrand that perfectly captures our essence.",
    author: "Sarah Johnson",
    role: "CEO, Elevate Fitness",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: 2,
    content: "Working with Y Media on our website redesign exceeded all expectations. Their ability to combine stunning aesthetics with seamless functionality has significantly improved our user engagement and conversion rates.",
    author: "Michael Chen",
    role: "Marketing Director, Horizon Tech",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: 3,
    content: "The social media strategy developed by Y Media revolutionized our online presence. Their content creation and community management have helped us build a loyal following and meaningfully connect with our audience.",
    author: "Emma Rodriguez",
    role: "Founder, Bloom Boutique",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section bg-gradient py-24">
      <div className="container">
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it — hear from some of our satisfied clients who have experienced the Y Media difference."
          centered
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/20"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-slate-100 mb-6 flex-grow italic">"{testimonial.content}"</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="rounded-full w-12 h-12 object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-white font-medium">{testimonial.author}</h4>
                    <p className="text-primary-200 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;