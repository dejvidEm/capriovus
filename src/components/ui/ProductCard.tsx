import React from 'react';
import { FileDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
  index: number;
  categoryColor?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index, categoryColor = 'hsl(var(--primary))' }) => {
  const { t, language } = useLanguage();
  const isEven = index % 2 === 0;

  const handleDownloadPDF = () => {
    // In a real app, this would download the actual PDF
    // For now, we'll show an alert or trigger a download
    console.log(`Downloading PDF for product: ${product.id}`);
    // You can replace this with actual PDF download logic
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow duration-300`}
    >
      {/* Content side - white background */}
      <div className="flex-1 bg-background p-8 lg:p-10 flex flex-col justify-center">
        <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
          {product.name[language]}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {product.description[language]}
        </p>

        <div className="space-y-4 mb-8">
          <div>
            <span className="font-semibold text-foreground text-sm uppercase tracking-wider">
              {t('products.usage')}
            </span>
            <p className="text-muted-foreground mt-1">
              {product.usage[language]}
            </p>
          </div>
          <div>
            <span className="font-semibold text-foreground text-sm uppercase tracking-wider">
              {t('products.packaging')}
            </span>
            <p className="text-muted-foreground mt-1">
              {product.packaging[language]}
            </p>
          </div>
        </div>

        <Button
          onClick={handleDownloadPDF}
          variant="outline"
          className="w-fit gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <FileDown size={18} />
          {t('products.downloadPdf')}
        </Button>
      </div>

      {/* Visual side - colored background */}
      <div 
        className="flex-1 min-h-[200px] lg:min-h-[350px] flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: categoryColor }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Abstract egg shapes */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-40 lg:w-48 lg:h-60 bg-white/20 rounded-full"
              style={{
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              }}
            />
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-24 lg:w-28 lg:h-36 bg-white/30 rounded-full"
              style={{
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              }}
            />
          </div>
        </div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id={`pattern-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="currentColor" className="text-white" />
            </pattern>
            <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
