import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Category } from '@/data/products';

// Import category images
import liquidImg from '@/assets/category-liquid.jpg';
import boiledImg from '@/assets/category-boiled.jpg';
import driedImg from '@/assets/category-dried.jpg';
import sticksImg from '@/assets/category-sticks.jpg';
import totuImg from '@/assets/category-totu.jpg';

const categoryImages: Record<string, string> = {
  liquid: liquidImg,
  boiled: boiledImg,
  dried: driedImg,
  sticks: sticksImg,
  totu: totuImg,
};

interface CategoryCircleProps {
  category: Category;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  showLogo?: boolean;
}

const sizeClasses = {
  xs: 'w-16 h-16',
  sm: 'w-20 h-20',
  md: 'w-28 h-28',
  lg: 'w-36 h-36 md:w-48 md:h-48',
  xl: 'w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72',
};

const labelSizes = {
  xs: 'text-xs',
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base md:text-lg',
  xl: 'text-lg md:text-xl',
};

const logoSizes = {
  xs: 'h-4',
  sm: 'h-5',
  md: 'h-6',
  lg: 'h-8 md:h-10',
  xl: 'h-10 md:h-12 lg:h-14',
};

const badgeSizes = {
  xs: 'w-6 h-6',
  sm: 'w-7 h-7',
  md: 'w-8 h-8',
  lg: 'w-10 h-10 md:w-12 md:h-12',
  xl: 'w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20',
};

const CategoryCircle: React.FC<CategoryCircleProps> = ({ category, size = 'lg', onClick, showLogo = true }) => {
  const { language } = useLanguage();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (onClick) onClick();
  };

  return (
    <Link
      to={`/products/${category.slug}`}
      onClick={handleClick}
      className="circle-category group flex flex-col items-center"
    >
      {/* Logo above circle */}
      {showLogo && (
        <div className="mb-3">
          <img 
            src="/capriovus.webp" 
            alt="Capriovus" 
            className={`${logoSizes[size]} w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity`}
          />
        </div>
      )}
      
      {/* Circle with image and quality badge */}
      <div className={`circle-category-image ${sizeClasses[size]} relative overflow-visible`}>
        <img
          src={categoryImages[category.image]}
          alt={category.name[language]}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-full"
        />
        {/* Quality badge in top right corner - overlapping */}
        <div className={`absolute -top-2 -right-2 ${badgeSizes[size]} flex items-center justify-center z-50`}>
          <img 
            src="/quality.png" 
            alt="Quality" 
            className="w-full h-full object-contain drop-shadow-lg"
            onError={(e) => {
              console.error('Failed to load quality.png');
            }}
          />
        </div>
      </div>
      
      <span className={`circle-category-label ${labelSizes[size]} mt-4`}>
        {category.name[language]}
      </span>
    </Link>
  );
};

export default CategoryCircle;
