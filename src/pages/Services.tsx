import { useEffect } from 'react';
import { Palette, Briefcase, Layout, ImageIcon, PenLine, MessageSquare } from 'lucide-react';
import ServiceHero from '../components/services/ServiceHero';
import ServiceDetail from '../components/services/ServiceDetail';
import CTASection from '../components/home/CTASection';

const Services = () => {
  useEffect(() => {
    document.title = 'Services | Y Media';
  }, []);

  return (
    <>
      <ServiceHero />
      
      <ServiceDetail
        id="logo-design"
        title="Logo Design"
        description="We create distinctive, memorable logos that encapsulate your brand's essence and values. Our design process is collaborative, iterative, and focused on creating a visual identity that resonates with your target audience."
        features={[
          "Custom logo creation tailored to your brand personality",
          "Multiple concept options with unlimited revisions",
          "Comprehensive brand identity systems",
          "Logo variations for different applications",
          "Style guide development for consistent brand usage",
          "File formats optimized for both print and digital use"
        ]}
        image="https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        icon={<Palette className="text-primary-600 w-8 h-8" />}
      />

      <ServiceDetail
        id="social-media-management"
        title="Social Media Management"
        description="Our strategic social media management services help you build a compelling online presence, engage with your audience, and drive meaningful business results across all major platforms."
        features={[
          "Platform-specific content strategy development",
          "Content creation and curation",
          "Community management and engagement",
          "Paid social media campaigns",
          "Performance analytics and reporting",
          "Social listening and competitor analysis"
        ]}
        image="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        icon={<Briefcase className="text-primary-600 w-8 h-8" />}
        reversed
      />

      <ServiceDetail
        id="web-development"
        title="Web Development"
        description="We design and develop beautiful, functional websites that provide exceptional user experiences, optimize for conversions, and reflect your brand's unique identity in the digital space."
        features={[
          "Responsive website design for all devices",
          "Custom web application development",
          "E-commerce solutions",
          "Content management systems",
          "Website maintenance and support",
          "Performance optimization and SEO integration"
        ]}
        image="https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        icon={<Layout className="text-primary-600 w-8 h-8" />}
      />

      <ServiceDetail
        id="content-creation"
        title="Content Creation"
        description="Our content creation services deliver high-quality visual and multimedia assets that tell your brand story, showcase your offerings, and create meaningful connections with your audience."
        features={[
          "Professional photography and video production",
          "Motion graphics and animation",
          "Infographics and data visualization",
          "Social media content packages",
          "Product photography and demonstrations",
          "Brand storytelling through visual media"
        ]}
        image="https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        icon={<ImageIcon className="text-primary-600 w-8 h-8" />}
        reversed
      />

      <ServiceDetail
        id="copywriting"
        title="Copywriting"
        description="Our expert copywriters craft compelling, strategic messaging that communicates your value proposition, engages your audience, and drives them to take action."
        features={[
          "Website copy and content development",
          "Blog posts and articles",
          "Email marketing campaigns",
          "Social media copy",
          "Brand messaging frameworks",
          "SEO-optimized content"
        ]}
        image="https://images.pexels.com/photos/6230957/pexels-photo-6230957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        icon={<PenLine className="text-primary-600 w-8 h-8" />}
      />

      <ServiceDetail
        id="graphic-design"
        title="Graphic Design"
        description="From print collateral to digital assets, our graphic design services create visually striking materials that strengthen your brand identity and effectively communicate your message."
        features={[
          "Print materials (brochures, business cards, packaging)",
          "Digital marketing assets",
          "Publication design",
          "Presentation design",
          "Event and environmental graphics",
          "Illustration and custom graphics"
        ]}
        image="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        icon={<MessageSquare className="text-primary-600 w-8 h-8" />}
        reversed
      />

      <CTASection />
    </>
  );
};

export default Services;