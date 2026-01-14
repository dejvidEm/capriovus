import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getCategoryBySlug, getProductsByCategory } from '@/data/products';
import CategoryCircle from '@/components/ui/CategoryCircle';
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
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={18} />
          {t('products.back')}
        </Link>
      </div>

      {/* Hero with large circle */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <CategoryCircle category={category} size="lg" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            {category.name[language]}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {category.description[language]}
          </p>
        </div>
      </section>

      {/* Products list */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {product.name[language]}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {product.description[language]}
                </p>

                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <span className="font-semibold text-foreground block mb-1">
                      {t('products.usage')}
                    </span>
                    <span className="text-muted-foreground">
                      {product.usage[language]}
                    </span>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <span className="font-semibold text-foreground block mb-1">
                      {t('products.packaging')}
                    </span>
                    <span className="text-muted-foreground">
                      {product.packaging[language]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other categories */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-semibold text-center text-foreground mb-8">
            {t('home.categories.title')}
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {categories.filter(cat => cat.id !== category.id).map((cat) => (
              <CategoryCircle key={cat.id} category={cat} size="md" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryDetail;
