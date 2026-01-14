import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, Language } from '@/contexts/LanguageContext';
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
  size?: 'xs' | 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const sizeClasses = {
  xs: 'w-16 h-16',
  sm: 'w-20 h-20',
  md: 'w-28 h-28 md:w-32 md:h-32',
  lg: 'w-32 h-32 md:w-40 md:h-40',
};

const labelSizes = {
  xs: 'text-xs',
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

const CategoryCircle: React.FC<CategoryCircleProps> = ({ category, size = 'md', onClick }) => {
  const { language } = useLanguage();

  return (
    <Link
      to={`/products/${category.slug}`}
      onClick={onClick}
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
  );
};

export default CategoryCircle;
