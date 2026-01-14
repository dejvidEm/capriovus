import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Category } from '@/data/products';
import EggCursor from './EggCursor';

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

const CategoryCircle: React.FC<CategoryCircleProps> = ({ category, size = 'lg', onClick }) => {
  const { language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <EggCursor isActive={isHovered} />
      <Link
        to={`/products/${category.slug}`}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="circle-category group"
      >
        <div className={`circle-category-image ${sizeClasses[size]}`}>
          <img
            src={categoryImages[category.image]}
            alt={category.name[language]}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <span className={`circle-category-label ${labelSizes[size]}`}>
          {category.name[language]}
        </span>
      </Link>
    </>
  );
};

export default CategoryCircle;
