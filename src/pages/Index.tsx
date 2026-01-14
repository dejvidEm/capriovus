import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { categories } from '@/data/products';
import CategoryCircle from '@/components/ui/CategoryCircle';
import ScrollReveal from '@/components/ui/ScrollReveal';
import heroImage from '@/assets/hero-products.jpg';

const Index: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight"
              >
                {t('home.hero.title')}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="font-display text-2xl md:text-3xl text-amber-600 italic mb-8"
              >
                {t('home.hero.subtitle')}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  {t('home.hero.cta')}
                </Link>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="order-1 lg:order-2"
            >
              <img
                src={heroImage}
                alt="Capriovus Products"
                className="w-full max-w-xl mx-auto rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Circles Section */}
      <section className="py-20 bg-secondary/30 blob-pattern">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-center text-foreground mb-16">
              {t('home.categories.title')}
            </h2>
          </ScrollReveal>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
            {categories.map((category, index) => (
              <ScrollReveal
                key={category.id}
                delay={index * 0.1}
                direction="up"
              >
                <CategoryCircle category={category} size="xl" />
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

      {/* Nutrition Bubbles Section - inspired by screenshot */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-10">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">ENERGY VALUE</h3>
                <p className="text-4xl md:text-5xl font-display font-bold text-primary mt-4">
                  632 <span className="text-lg md:text-xl">kJ</span> • 151 <span className="text-lg md:text-xl">kcal</span>
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex justify-center mb-10">
                <div className="text-right text-sm md:text-base text-muted-foreground border-l-2 border-primary/30 pl-6 py-2 space-y-2">
                  <p>FAT — 11.3 G</p>
                  <p>CARBOHYDRATES — 1.1 G</p>
                  <p>PROTEINS — 11.5 G</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {['POTASSIUM', 'COPPER', 'MAGNESIUM', 'CALCIUM', 'ZINC', 'IRON', 'SELENIUM', 'SULFUR', 'CHOLINE', 'IODINE'].map((mineral, index) => (
                  <motion.span
                    key={mineral}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    className={`nutrition-bubble ${index === 0 ? 'highlighted' : ''}`}
                  >
                    {mineral}
                  </motion.span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
