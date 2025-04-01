import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile, isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const navItems = [
    { 
      title: 'Home', 
      href: '/' 
    },
    { 
      title: 'About', 
      href: '/about' 
    },
    {
      title: 'News',
      href: '/news'
    },
    { 
      title: 'Services', 
      href: '/#services',
      dropdown: [
        { title: 'Technology Development', href: '/#services-technology' },
        { title: 'Custom Solutions', href: '/#services-solutions' },
        { title: 'Consulting', href: '/#services-consulting' }
      ]
    },
    { 
      title: 'Focus Areas', 
      href: '/#focus-areas' 
    },
    { 
      title: 'Global Reach', 
      href: '/#global-reach' 
    },
  ];

  const handleDropdown = (title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const handleMobileMenuToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/90 backdrop-blur-md shadow-md py-2" 
        : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="relative z-10 text-2xl font-bold text-boswin-navy">
          <span className="group inline-flex items-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-boswin-navy via-red-500 to-red-400 group-hover:from-red-500 group-hover:to-boswin-navy transition-all duration-300">
              BOSWIN
            </span>
            <div className="w-2 h-2 bg-red-500 rounded-full ml-1 animate-pulse"></div>
          </span>
        </a>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              {item.dropdown ? (
                <>
                  <button 
                    className="text-boswin-navy hover:text-red-500 transition-colors font-medium px-4 py-2 rounded-md hover:bg-gray-100/50 flex items-center"
                    onClick={(e) => handleDropdown(item.title, e)}
                  >
                    {item.title}
                    <ChevronDown 
                      className={cn(
                        "ml-1 h-4 w-4 transition-transform duration-200",
                        activeDropdown === item.title ? "rotate-180" : ""
                      )} 
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === item.title && (
                      <motion.div 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-48 bg-white/95 backdrop-blur-sm shadow-lg rounded-md py-1 mt-1 z-50"
                      >
                        {item.dropdown.map((subItem, subIndex) => (
                          <a 
                            key={subIndex} 
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500"
                          >
                            {subItem.title}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <a 
                  key={index} 
                  href={item.href}
                  className="text-boswin-navy hover:text-red-500 transition-colors font-medium px-4 py-2 rounded-md hover:bg-gray-100/50"
                >
                  {item.title}
                </a>
              )}
            </div>
          ))}
          <a 
            href="#contact" 
            className="bg-red-500 text-white ml-2 px-5 py-2 rounded-md hover:bg-red-600 transition-colors shadow-sm hover:shadow-md"
          >
            Contact Us
          </a>
        </nav>

        <button 
          className="md:hidden text-boswin-navy p-2 z-50"
          onClick={handleMobileMenuToggle}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 w-full shadow-md z-40"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div 
              className="container mx-auto px-4 py-4 flex flex-col space-y-1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, staggerChildren: 0.1 }}
            >
              {navItems.map((item, index) => (
                <div key={index} className="w-full">
                  {item.dropdown ? (
                    <div className="w-full">
                      <button
                        className="flex justify-between items-center w-full text-boswin-navy py-3 px-2 hover:bg-gray-50 rounded-md"
                        onClick={(e) => handleDropdown(item.title, e)}
                      >
                        <span className="font-medium">{item.title}</span>
                        <ChevronDown 
                          className={cn(
                            "ml-1 h-4 w-4 transition-transform duration-200",
                            activeDropdown === item.title ? "rotate-180" : ""
                          )} 
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.title && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 mt-1 border-l-2 border-red-200 ml-2"
                          >
                            {item.dropdown.map((subItem, subIndex) => (
                              <motion.a
                                key={subIndex}
                                href={subItem.href}
                                className="block py-2 px-2 text-gray-600 hover:text-red-500"
                                onClick={() => setIsMobileMenuOpen(false)}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.05 * subIndex }}
                              >
                                {subItem.title}
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a 
                      href={item.href}
                      className="block w-full text-boswin-navy hover:bg-gray-50 hover:text-red-500 transition-colors py-3 px-2 rounded-md font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <a 
                  href="#contact" 
                  className="block w-full bg-red-500 text-center text-white px-5 py-3 rounded-md hover:bg-red-600 transition-colors shadow-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
