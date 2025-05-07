import { useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us | Y Media';
  }, []);

  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
};

export default Contact;