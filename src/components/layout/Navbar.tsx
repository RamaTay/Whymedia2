import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Palette } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Close the mobile menu when the screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2"
          aria-label="Y Media Home"
        >
          <Palette 
            size={32} 
            className={`transition-colors duration-300 ${
              isScrolled ? 'text-primary-600' : 'text-white'
            }`} 
          />
          <span 
            className={`font-heading font-bold text-2xl transition-colors duration-300 ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}
          >
            Y Media
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `
                font-heading font-medium transition-colors duration-300 hover:text-primary-500
                ${isActive 
                  ? 'text-primary-500' 
                  : isScrolled 
                    ? 'text-slate-800' 
                    : 'text-white'
                }
              `}
            >
              {link.name}
            </NavLink>
          ))}
          <Link 
            to="/contact" 
            className={`btn ${
              isScrolled 
                ? 'bg-primary-600 text-white hover:bg-primary-700' 
                : 'bg-white text-primary-600 hover:bg-slate-100'
            } px-5 py-2`}
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu 
              size={24} 
              className={`${isScrolled ? 'text-slate-800' : 'text-white'}`} 
            />
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-primary-900 z-40 flex flex-col"
            >
              <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) => `
                      font-heading text-xl font-semibold transition-colors duration-300
                      ${isActive ? 'text-primary-300' : 'text-white hover:text-primary-300'}
                    `}
                  >
                    {link.name}
                  </NavLink>
                ))}
                <Link 
                  to="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="btn bg-white text-primary-900 hover:bg-slate-100 mt-4"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;