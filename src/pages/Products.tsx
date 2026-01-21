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
      <section className="pt-36 pb-24 text-center">
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
    </div>
  );
};

export default Products;
