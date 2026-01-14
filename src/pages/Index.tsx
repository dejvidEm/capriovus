import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { categories } from '@/data/products';
import CategoryCircle from '@/components/ui/CategoryCircle';
import heroImage from '@/assets/hero-products.jpg';

const Index: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="blob-pattern">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Hero Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight animate-fade-in">
                {t('home.hero.title')}
              </h1>
              <p className="font-display text-2xl md:text-3xl text-primary-dark italic mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                {t('home.hero.subtitle')}
              </p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 animate-fade-in"
                style={{ animationDelay: '0.2s' }}
              >
                {t('home.hero.cta')}
              </Link>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img
                src={heroImage}
                alt="Capriovus Products"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Circles Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-center text-foreground mb-12">
            {t('home.categories.title')}
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CategoryCircle category={category} size="lg" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            {t('home.intro.title')}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('home.intro.text')}
          </p>
        </div>
      </section>

      {/* Nutrition Bubbles Section - inspired by screenshot */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl font-bold text-foreground">ENERGY VALUE</h3>
              <p className="text-4xl font-display font-bold text-primary mt-2">
                632 <span className="text-lg">kJ</span> • 151 <span className="text-lg">kcal</span>
              </p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              <div className="text-right text-sm text-muted-foreground border-l-2 border-border pl-4 py-2">
                <p>FAT — 11.3 G</p>
                <p className="mt-1">CARBOHYDRATES — 1.1 G</p>
                <p className="mt-1">PROTEINS — 11.5 G</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {['POTASSIUM', 'COPPER', 'MAGNESIUM', 'CALCIUM', 'ZINC', 'IRON', 'SELENIUM', 'SULFUR', 'CHOLINE', 'IODINE'].map((mineral, index) => (
                <span
                  key={mineral}
                  className={`nutrition-bubble ${index === 0 ? 'highlighted' : ''}`}
                >
                  {mineral}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
