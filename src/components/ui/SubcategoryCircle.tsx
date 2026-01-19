import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Subcategory } from '@/data/products';

interface SubcategoryCircleProps {
  subcategory: Subcategory;
  categoryId: string;
  categorySlug?: string; // Add category slug for proper routing
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

const SubcategoryCircle: React.FC<SubcategoryCircleProps> = ({ 
  subcategory, 
  categoryId, 
  categorySlug,
  size = 'lg', 
  onClick 
}) => {
  const { language } = useLanguage();
  
  // Use categorySlug if provided, otherwise fallback to categoryId
  const linkPath = categorySlug 
    ? `/products/${categorySlug}/${subcategory.slug}`
    : `/products/${categoryId}/${subcategory.slug}`;

  return (
    <Link
      to={linkPath}
      onClick={onClick}
      className="circle-category group flex flex-col items-center"
    >
      {/* Circle with image */}
      <div className={`circle-category-image ${sizeClasses[size]} relative overflow-hidden bg-white rounded-full flex items-center justify-center`}>
        <img
          src={subcategory.imagePath || '/img1.png'}
          alt={subcategory.name[language]}
          className="w-3/5 h-3/5 object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <span className={`circle-category-label ${labelSizes[size]} mt-4 text-center max-w-[220px] leading-tight`}>
        {subcategory.name[language].split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i < subcategory.name[language].split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </span>
    </Link>
  );
};

export default SubcategoryCircle;

