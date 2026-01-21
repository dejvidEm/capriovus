import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { categories } from '@/data/products';
import CategoryCircle from '@/components/ui/CategoryCircle';
import ScrollReveal from '@/components/ui/ScrollReveal';

const Index: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-[#F5F1EB] pt-8 md:pt-12 lg:pt-16 xl:pt-20">
        <div className="container mx-auto px-4 pt-8 md:pt-12 lg:pt-16 xl:pt-20 pb-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Hero Content - Left Side */}
            <div className="order-2 z-10 lg:order-1 flex items-center justify-center lg:justify-start lg:pl-8 xl:pl-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-center lg:text-left max-w-2xl"
              >
                {/* Quality Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-sm mt-6 mb-6 lg:mt-0 lg:mb-4 relative">
                  <img 
                    src="/quality.png" 
                    alt="Quality" 
                    className="h-20 w-20 object-contain absolute -left-5 -top-10 z-10"
                  />
                  <span className="text-xs font-medium text-slate-700 ml-12">
                    {(() => {
                      const badgeText = t('home.hero.badge');
                      const parts = badgeText.split('BUREAU VERITAS');
                      if (parts.length === 2) {
                        return (
                          <>
                            {parts[0]}
                            <span className="text-red-800 font-semibold">BUREAU VERITAS</span>
                            {parts[1]}
                          </>
                        );
                      }
                      return badgeText;
                    })()}
                  </span>
                </div>
                
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-2 leading-tight">
                  {(() => {
                    const title = t('home.hero.title');
                    // For Czech/Slovak: split after "z" and add underline to "všetkých"
                    if (title.includes(' z ')) {
                      const parts = title.split(' z ');
                      const secondPart = parts[1];
                      if (secondPart.includes('všetkých')) {
                        const words = secondPart.split(' ');
                        return (
                          <>
                            {parts[0]} z<br />
                            {words.map((word, index) => {
                              if (word === 'všetkých') {
                                return (
                                  <span key={index} className="relative inline-block">
                                    <svg
                                      className="absolute bottom-0 left-0 w-full h-2 -z-10"
                                      viewBox="0 0 200 20"
                                      preserveAspectRatio="none"
                                      style={{ height: '12px' }}
                                    >
                                      <path
                                        d="M 0 15 Q 50 5, 100 10 T 200 12"
                                        stroke="#FCD34D"
                                        strokeWidth="12"
                                        fill="none"
                                        strokeLinecap="round"
                                      />
                                    </svg>
                                    {word}
                                    {index < words.length - 1 ? ' ' : ''}
                                  </span>
                                );
                              }
                              return index < words.length - 1 ? word + ' ' : word;
                            })}
                          </>
                        );
                      }
                      return (
                        <>
                          {parts[0]} z<br />
                          {parts[1]}
                        </>
                      );
                    }
                    // For other languages, split roughly in the middle
                    const words = title.split(' ');
                    const midPoint = Math.ceil(words.length / 2);
                    return (
                      <>
                        {words.slice(0, midPoint).join(' ')}<br />
                        {words.slice(midPoint).join(' ')}
                      </>
                    );
                  })()}
                </h1>
                {/* Body text / Subtitle */}
                <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-4 leading-relaxed">
                  {t('home.hero.subtitle')}
                </p>
                {/* Tagline */}
                <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
                  {t('home.hero.tagline')}
                </p>
                {/* CTA Button */}
                <Link
                  to="/products"
                  className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  {t('home.hero.cta')}
                </Link>
              </motion.div>
            </div>

            {/* Hero Images - Right Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="order-1 lg:order-2 flex justify-center items-center relative"
            >
              {/* Cloud shape behind images */}
              <div className="absolute -right-[850px] top-2/3 -translate-y-1/2 z-0">
                <svg viewBox="0 0 400 300" className="w-full h-auto" style={{ width: '1600px', height: '1200px', maxWidth: 'none' }}>
                  <path d="M100,150 Q80,120 100,100 Q120,80 150,100 Q180,70 220,80 Q260,60 300,80 Q320,100 300,120 Q330,130 320,150 Q330,170 300,180 Q260,200 220,190 Q180,210 150,200 Q120,220 100,200 Q80,180 100,150 Z" fill="white" />
                </svg>
              </div>
              <div className="relative flex items-center z-20">
                {/* First Image - img2 on left, positioned lower */}
                <motion.img
                  src="/img2.png"
                  alt="Capriovus Products"
                  className="w-full max-w-[128px] sm:max-w-[144px] md:max-w-[160px] lg:max-w-[192px] mx-auto lg:mx-0 object-contain relative z-10"
                  style={{ transform: 'rotate(-5deg)', filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.15))', marginTop: '344px' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                {/* Second Image - img1 on right, overlapping */}
                <motion.img
                  src="/img1.png"
                  alt="Capriovus Products"
                  className="w-full max-w-[128px] sm:max-w-[144px] md:max-w-[160px] lg:max-w-[192px] mx-auto object-contain relative -ml-8 lg:-ml-10"
                  style={{ transform: 'rotate(15deg)', filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.15)) saturate(1.2) contrast(1.1) brightness(1.05)' }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Circles Section */}
      <section className="pt-16 md:pt-24 lg:pt-32 xl:pt-40 pb-12 md:pb-16 bg-secondary/30 blob-pattern">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-center text-foreground mb-10 md:mb-12">
              {t('home.categories.title')}
            </h2>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
            {categories.map((category, index) => (
              <ScrollReveal
                key={category.id}
                delay={index * 0.1}
                direction="up"
              >
                <CategoryCircle category={category} size="lg" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              {t('home.intro.title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t('home.intro.text')}
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;