import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Product } from '@/data/products';

interface ProductCircleProps {
  product: Product;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
}

const sizeClasses = {
  xs: 'w-16 h-16',
  sm: 'w-20 h-20',
  md: 'w-28 h-28',
  lg: 'w-36 h-36 md:w-48 md:h-48',
  xl: 'w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72',
};

const labelSizes = {
  xs: 'text-xs',
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base md:text-lg',
  xl: 'text-lg md:text-xl',
};

const ProductCircle: React.FC<ProductCircleProps> = ({ product, size = 'lg', onClick }) => {
  const { language } = useLanguage();
  
  // Use first image from product images or default
  const productImage = product.images && product.images.length > 0 
    ? product.images[0] 
    : '/img1.png';

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (onClick) onClick();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      onClick={handleClick}
      className="circle-category group flex flex-col items-center"
    >
      {/* Circle with image */}
      <div className={`circle-category-image ${sizeClasses[size]} relative overflow-hidden bg-white rounded-full flex items-center justify-center`}>
        <img
          src={productImage}
          alt={product.name[language]}
          className="w-3/5 h-3/5 object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <span className={`circle-category-label ${labelSizes[size]} mt-4 text-center max-w-[220px] leading-tight`}>
        {product.name[language].split('\n').map((line, i, arr) => (
          <React.Fragment key={i}>
            {line}
            {i < arr.length - 1 && <br />}
          </React.Fragment>
        ))}
      </span>
    </Link>
  );
};

export default ProductCircle;




