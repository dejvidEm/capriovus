import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { categories } from '@/data/products';
import CategoryCircle from '@/components/ui/CategoryCircle';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const languages: { code: Language; label: string }[] = [
    { code: 'sk', label: 'SK' },
    { code: 'en', label: 'EN' },
    { code: 'hu', label: 'HU' },
  ];

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/products', label: t('nav.products'), hasDropdown: true },
    { path: '/tenders', label: t('nav.tenders') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating pill navbar */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
        <nav className={`flex items-center justify-between px-8 md:px-10 py-5 rounded-full transition-all duration-500 ${
          isScrolled 
            ? 'bg-white shadow-lg border border-border/50 shadow-blue/5' 
            : 'bg-white border border-border/30'
        }`}>
          {/* Logo - left */}
          <Link to="/" onClick={handleNavClick} className="flex items-center gap-2 group">
            <img 
              src="/capriovus.webp" 
              alt="Capriovus" 
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop navigation - center */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 border ${
                  isActive(item.path)
                    ? 'bg-primary/10 text-primary-dark border-blue/20'
                    : 'text-foreground/80 hover:text-foreground hover:bg-secondary/50 border-transparent hover:border-blue/30'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Products with dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <Link
                to="/products"
                onClick={handleNavClick}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 border ${
                  isActive('/products')
                    ? 'bg-primary/10 text-primary-dark border-blue/20'
                    : 'text-foreground/80 hover:text-foreground hover:bg-secondary/50 border-transparent hover:border-blue/30'
                }`}
              >
                {t('nav.products')}
                <ChevronDown size={14} className={`transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </Link>
              
              {/* Products dropdown */}
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, x: '-50%' }}
                    animate={{ opacity: 1, y: 0, x: '-50%' }}
                    exit={{ opacity: 0, y: 10, x: '-50%' }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 pt-4 z-50"
                  >
                    <div className="bg-card border border-border rounded-2xl shadow-xl shadow-blue/5 p-6 min-w-[600px]">
                      <div className="grid grid-cols-5 gap-6">
                        {categories.map((category) => (
                          <CategoryCircle
                            key={category.id}
                            category={category}
                            size="md"
                            showLogo={false}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navItems.slice(3).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 border ${
                  isActive(item.path)
                    ? 'bg-primary/10 text-primary-dark border-blue/20'
                    : 'text-foreground/80 hover:text-foreground hover:bg-secondary/50 border-transparent hover:border-blue/30'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side: Language switch + mobile menu */}
          <div className="flex items-center gap-2">
            {/* Language switcher - desktop */}
            <div className="hidden md:flex items-center gap-1 bg-secondary/50 rounded-full p-1 border border-blue/10">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                    language === lang.code
                      ? 'bg-primary text-primary-foreground ring-2 ring-blue/30'
                      : 'text-muted-foreground hover:text-foreground hover:text-blue-dark'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-foreground hover:bg-secondary/50 rounded-full transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* Header spacer */}
      <div className="h-8" />

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Slide-in panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-card z-50 shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <span className="font-display text-xl font-semibold text-foreground">Menu</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto p-6">
                  <div className="flex flex-col gap-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {item.hasDropdown ? (
                          <>
                            <button
                              onClick={() => setIsProductsOpen(!isProductsOpen)}
                              className={`w-full flex items-center justify-between px-4 py-4 rounded-xl transition-colors text-left border ${
                                isActive(item.path)
                                  ? 'bg-primary/10 text-primary-dark border-blue/20'
                                  : 'text-foreground hover:bg-secondary border-transparent hover:border-blue/20'
                              }`}
                            >
                              <span className="font-medium">{item.label}</span>
                              <ChevronDown
                                size={18}
                                className={`transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`}
                              />
                            </button>
                            
                            <AnimatePresence>
                              {isProductsOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="grid grid-cols-3 gap-4 p-4 bg-secondary/30 rounded-xl mt-2">
                                    {categories.map((category) => (
                                      <CategoryCircle
                                        key={category.id}
                                        category={category}
                                        size="sm"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      />
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            to={item.path}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              handleNavClick();
                            }}
                            className={`block px-4 py-4 rounded-xl transition-colors font-medium border ${
                              isActive(item.path)
                                ? 'bg-primary/10 text-primary-dark border-blue/20'
                                : 'text-foreground hover:bg-secondary border-transparent hover:border-blue/20'
                            }`}
                          >
                            {item.label}
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Language switcher */}
                <div className="p-6 border-t border-border">
                  <div className="flex items-center justify-center gap-3">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 border ${
                          language === lang.code
                            ? 'bg-primary text-primary-foreground border-blue/30 ring-2 ring-blue/20'
                            : 'bg-secondary text-muted-foreground hover:text-foreground border-transparent hover:border-blue/20 hover:text-blue-dark'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
