import { useEffect } from 'react';
import PortfolioHero from '../components/portfolio/PortfolioHero';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import CTASection from '../components/home/CTASection';

const Portfolio = () => {
  useEffect(() => {
    document.title = 'Portfolio | Y Media';
  }, []);

  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <CTASection />
    </>
  );
};

export default Portfolio;