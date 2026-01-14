import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { getCategoryBySlug, getProductsByCategory } from '@/data/products';
import CategoryCircle from '@/components/ui/CategoryCircle';
import ScrollReveal from '@/components/ui/ScrollReveal';
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

      {/* Products list - now as clickable links */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-4">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  to={`/product/${product.id}`}
                  className="group flex items-center justify-between p-6 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-5">
                    {/* Egg-shaped circle like main categories */}
                    <div 
                      className="w-14 h-14 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: 'hsl(45, 93%, 58%)' }}
                    >
                      <svg 
                        viewBox="0 0 24 32" 
                        className="w-6 h-8 text-white"
                        fill="currentColor"
                      >
                        <ellipse cx="12" cy="18" rx="10" ry="13" />
                        <ellipse cx="12" cy="12" rx="8" ry="10" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {product.name[language]}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {product.description[language]}
                      </p>
                    </div>
                  </div>
                  <ArrowRight 
                    size={20} 
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" 
                  />
                </Link>
              </motion.div>
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
