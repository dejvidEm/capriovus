import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, FileDown, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProductById, getCategoryBySlug, categories } from '@/data/products';
import { Button } from '@/components/ui/button';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  
  const product = getProductById(productId || '');
  const category = product ? categories.find(c => c.id === product.categoryId) : null;

  const handleDownloadPDF = () => {
    console.log(`Downloading PDF for product: ${product?.id}`);
  };

  const handleClose = () => {
    if (category) {
      navigate(`/products/${category.slug}`);
    } else {
      navigate('/products');
    }
  };

  if (!product || !category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-foreground mb-4">
            Product not found
          </h1>
          <Link to="/products" className="text-primary hover:underline">
            {t('products.back')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Content side - white background */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 bg-background p-8 lg:p-16 xl:p-24 flex flex-col justify-center relative"
      >
        {/* Back button */}
        <Link
          to={`/products/${category.slug}`}
          className="absolute top-8 left-8 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={18} />
          {t('products.back')}
        </Link>

        <div className="max-w-xl mt-16 lg:mt-0">
          {/* Category label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block"
          >
            {category.name[language]}
          </motion.span>

          {/* Product name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight"
          >
            {product.name[language]}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-muted-foreground mb-10 leading-relaxed"
          >
            {product.description[language]}
          </motion.p>

          {/* Product details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-6 mb-10"
          >
            <div className="border-l-4 border-primary pl-4">
              <span className="font-semibold text-foreground text-sm uppercase tracking-wider block mb-1">
                {t('products.usage')}
              </span>
              <p className="text-muted-foreground">
                {product.usage[language]}
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <span className="font-semibold text-foreground text-sm uppercase tracking-wider block mb-1">
                {t('products.packaging')}
              </span>
              <p className="text-muted-foreground">
                {product.packaging[language]}
              </p>
            </div>
          </motion.div>

          {/* Download button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              onClick={handleDownloadPDF}
              size="lg"
              className="gap-3 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <FileDown size={20} />
              {t('products.downloadPdf')}
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Visual side - colored background */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 min-h-[40vh] lg:min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: 'hsl(45, 93%, 58%)' }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors z-10"
        >
          <X size={24} className="text-white" />
        </button>

        {/* Decorative elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Abstract egg shapes */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-48 h-64 lg:w-72 lg:h-96 bg-white/20 rounded-full"
              style={{
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              }}
            />
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-44 lg:w-48 lg:h-64 bg-white/30 rounded-full"
              style={{
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              }}
            />
          </div>
        </div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="product-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="currentColor" className="text-white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#product-pattern)" />
          </svg>
        </div>

        {/* Social links could go here */}
        <div className="absolute bottom-8 right-8 flex flex-col gap-4">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-white text-xs font-bold">f</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-white text-xs font-bold">in</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetail;
