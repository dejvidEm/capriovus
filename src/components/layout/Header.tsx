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

  return (
    <>
      {/* Floating pill navbar */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
        <nav className={`flex items-center justify-between px-4 md:px-6 py-3 rounded-full transition-all duration-500 ${
          isScrolled 
            ? 'bg-card/95 backdrop-blur-md shadow-lg border border-border/50' 
            : 'bg-card/80 backdrop-blur-sm border border-border/30'
        }`}>
          {/* Logo - left */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display font-semibold tracking-wider text-foreground text-lg md:text-xl">
              CAPRIOVUS
            </span>
          </Link>

          {/* Desktop navigation - center */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-primary/10 text-primary-dark'
                    : 'text-foreground/80 hover:text-foreground hover:bg-secondary/50'
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
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive('/products')
                    ? 'bg-primary/10 text-primary-dark'
                    : 'text-foreground/80 hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                {t('nav.products')}
                <ChevronDown size={14} className={`transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </Link>
              
              {/* Products dropdown */}
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
                  >
                    <div className="bg-card border border-border rounded-2xl shadow-xl p-6 min-w-[600px]">
                      <div className="grid grid-cols-5 gap-6">
                        {categories.map((category) => (
                          <CategoryCircle
                            key={category.id}
                            category={category}
                            size="md"
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
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-primary/10 text-primary-dark'
                    : 'text-foreground/80 hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side: Language switch + mobile menu */}
          <div className="flex items-center gap-2">
            {/* Language switcher - desktop */}
            <div className="hidden md:flex items-center gap-1 bg-secondary/50 rounded-full p-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                    language === lang.code
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
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
      <div className="h-24" />

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
                              className={`w-full flex items-center justify-between px-4 py-4 rounded-xl transition-colors text-left ${
                                isActive(item.path)
                                  ? 'bg-primary/10 text-primary-dark'
                                  : 'text-foreground hover:bg-secondary'
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
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block px-4 py-4 rounded-xl transition-colors font-medium ${
                              isActive(item.path)
                                ? 'bg-primary/10 text-primary-dark'
                                : 'text-foreground hover:bg-secondary'
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
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                          language === lang.code
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary text-muted-foreground hover:text-foreground'
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
