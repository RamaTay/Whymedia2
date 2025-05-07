import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const team = [
  {
    id: 1,
    name: 'Alex Morgan',
    role: 'Creative Director',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=750',
    bio: 'With over 15 years of experience in design and brand strategy, Alex leads our creative team with vision and expertise.',
    social: {
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    id: 2,
    name: 'Jamie Chen',
    role: 'Lead Web Developer',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=750',
    bio: 'Jamie combines technical expertise with an eye for design to create beautiful, functional web experiences.',
    social: {
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    id: 3,
    name: 'Sasha Rodriguez',
    role: 'Social Media Strategist',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=750',
    bio: 'Sasha helps brands build meaningful connections with their audiences through strategic social media campaigns.',
    social: {
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    id: 4,
    name: 'Jordan Taylor',
    role: 'Brand Designer',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=750',
    bio: 'Jordan creates distinctive brand identities that communicate the unique value and personality of each client.',
    social: {
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
];

const Team = () => {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeading
          subtitle="Our Team"
          title="Meet the Creatives"
          description="We're a diverse team of talented professionals passionate about creating exceptional digital experiences."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="flex gap-3">
                      <a 
                        href={member.social.twitter} 
                        className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors" 
                        target="_blank" 
                        rel="noreferrer"
                      >
                        <Twitter className="w-4 h-4 text-white" />
                      </a>
                      <a 
                        href={member.social.linkedin} 
                        className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors" 
                        target="_blank" 
                        rel="noreferrer"
                      >
                        <Linkedin className="w-4 h-4 text-white" />
                      </a>
                      <a 
                        href={member.social.instagram} 
                        className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors" 
                        target="_blank" 
                        rel="noreferrer"
                      >
                        <Instagram className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-primary-600 font-medium mb-2">{member.role}</p>
              <p className="text-slate-600 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;