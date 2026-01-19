import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { categories } from '@/data/products';
import CategoryCircle from '@/components/ui/CategoryCircle';
import ScrollReveal from '@/components/ui/ScrollReveal';

const Products: React.FC = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="blob-pattern min-h-screen">
      {/* Hero */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('products.title')}
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </ScrollReveal>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-10 md:gap-14 lg:gap-20">
            {categories.map((category, index) => (
              <ScrollReveal
                key={category.id}
                delay={index * 0.1}
              >
                <CategoryCircle category={category} size="xl" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <ScrollReveal key={category.id} delay={index * 0.1}>
                <Link
                  to={`/products/${category.slug}`}
                  className="group bg-background rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 block h-full"
                >
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary-dark transition-colors">
                    {category.name[language]}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.description[language]}
                  </p>
                  <span className="inline-block mt-4 text-primary font-medium text-sm group-hover:translate-x-2 transition-transform">
                    {t('products.more')} →
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
