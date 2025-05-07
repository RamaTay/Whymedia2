import { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import OurStory from '../components/about/OurStory';
import Values from '../components/about/Values';
import Team from '../components/about/Team';
import Process from '../components/about/Process';
import CTASection from '../components/home/CTASection';

const About = () => {
  useEffect(() => {
    document.title = 'About Us | Y Media';
  }, []);

  return (
    <>
      <AboutHero />
      <OurStory />
      <Values />
      <Team />
      <Process />
      <CTASection />
    </>
  );
};

export default About;