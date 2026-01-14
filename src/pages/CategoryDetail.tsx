import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { getCategoryBySlug, getProductsByCategory } from '@/data/products';
import CategoryCircle from '@/components/ui/CategoryCircle';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ProductCard from '@/components/ui/ProductCard';
import { categories } from '@/data/products';

const CategoryDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();
  
  const category = getCategoryBySlug(slug || '');
  const products = category ? getProductsByCategory(category.id) : [];

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-foreground mb-4">
            Category not found
          </h1>
          <Link to="/products" className="text-primary hover:underline">
            {t('products.back')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blob-pattern min-h-screen">
      {/* Back button */}
      <div className="container mx-auto px-4 pt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={18} />
            {t('products.back')}
          </Link>
        </motion.div>
      </div>

      {/* Hero with large circle */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex justify-center mb-10">
              <CategoryCircle category={category} size="xl" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              {category.name[language]}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {category.description[language]}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Products list */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:gap-16">
            {products.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index}
                categoryColor="hsl(45, 93%, 58%)"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Other categories */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-semibold text-center text-foreground mb-12">
              {t('home.categories.title')}
            </h2>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {categories.filter(cat => cat.id !== category.id).map((cat, index) => (
              <ScrollReveal key={cat.id} delay={index * 0.1}>
                <CategoryCircle category={cat} size="lg" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryDetail;
