import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { categories } from '@/data/products';
import CategoryCircle from '@/components/ui/CategoryCircle';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

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
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      {/* Top bar with language switch */}
      <div className="border-b border-border/50 bg-secondary/30">
        <div className="container mx-auto px-4 py-2 flex justify-end items-center gap-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${
                language === lang.code
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation - left */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-primary-dark'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Logo - center */}
          <Link to="/" className="flex flex-col items-center">
            <span className="font-display text-2xl md:text-3xl font-semibold tracking-wider text-foreground">
              CAPRIOVUS
            </span>
            <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
              Since 1993
            </span>
          </Link>

          {/* Desktop navigation - right */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Products with dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <Link
                to="/products"
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${
                  isActive('/products')
                    ? 'text-primary-dark'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t('nav.products')}
                <ChevronDown size={14} className={`transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </Link>
              
              {/* Products dropdown */}
              {isProductsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
                  <div className="bg-card border border-border rounded-xl shadow-lg p-6 min-w-[500px] animate-fade-in">
                    <div className="grid grid-cols-5 gap-4">
                      {categories.map((category) => (
                        <CategoryCircle
                          key={category.id}
                          category={category}
                          size="sm"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navItems.slice(3).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-primary-dark'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Spacer for mobile */}
          <div className="lg:hidden w-10" />
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <React.Fragment key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => {
                    if (!item.hasDropdown) setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-primary/10 text-primary-dark'
                      : 'text-foreground hover:bg-secondary'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsProductsOpen(!isProductsOpen);
                      }}
                    />
                  )}
                </Link>
                
                {/* Mobile products submenu */}
                {item.hasDropdown && isProductsOpen && (
                  <div className="pl-4 py-2 grid grid-cols-3 gap-3">
                    {categories.map((category) => (
                      <CategoryCircle
                        key={category.id}
                        category={category}
                        size="xs"
                        onClick={() => setIsMobileMenuOpen(false)}
                      />
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
