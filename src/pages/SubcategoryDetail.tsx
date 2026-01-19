import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  getCategoryBySlug, 
  getSubcategoryBySlug, 
  getProductsBySubcategory,
  categories 
} from '@/data/products';
import SubcategoryCircle from '@/components/ui/SubcategoryCircle';
import ScrollReveal from '@/components/ui/ScrollReveal';

const SubcategoryDetail: React.FC = () => {
  const { categorySlug, subcategorySlug } = useParams<{ 
    categorySlug: string; 
    subcategorySlug: string;
  }>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [categorySlug, subcategorySlug]);
  const { t, language } = useLanguage();
  
  const category = getCategoryBySlug(categorySlug || '');
  const subcategory = category 
    ? getSubcategoryBySlug(category.id, subcategorySlug || '')
    : undefined;
  const products = category && subcategory
    ? getProductsBySubcategory(category.id, subcategory.id)
    : [];

  if (!category || !subcategory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-foreground mb-4">
            Subcategory not found
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
      <div className="container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to={`/products/${category.slug}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={18} />
            {t('products.back')}
          </Link>
        </motion.div>
      </div>

      {/* Hero with subcategory circle */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex justify-center mb-10">
              <SubcategoryCircle 
                subcategory={subcategory} 
                categoryId={category.id}
                categorySlug={category.slug}
                size="xl" 
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              {subcategory.name[language]}
            </h1>
          </ScrollReveal>
          {subcategory.description && (
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {subcategory.description[language]}
              </p>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Products list */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          {products.length > 0 ? (
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
                      {/* Egg-shaped circle */}
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
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                {t('products.noProducts') || 'No products available in this subcategory yet.'}
              </p>
              <p className="text-sm text-muted-foreground/70">
                Products will be added soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Other subcategories from same category */}
      {category.subcategories && category.subcategories.length > 1 && (
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="font-display text-2xl font-semibold text-center text-foreground mb-12">
                {t('home.categories.title')}
              </h2>
            </ScrollReveal>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {category.subcategories
                .filter(sub => sub.id !== subcategory.id)
                .map((sub, index) => (
                  <ScrollReveal key={sub.id} delay={index * 0.1}>
                    <SubcategoryCircle 
                      subcategory={sub} 
                      categoryId={category.id}
                      categorySlug={category.slug}
                      size="lg" 
                    />
                  </ScrollReveal>
                ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SubcategoryDetail;

