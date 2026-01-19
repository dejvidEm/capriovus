import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Lightbulb, Users } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const About: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const values = [
    {
      icon: Shield,
      title: t('about.values.quality'),
      text: t('about.values.quality.text'),
    },
    {
      icon: Lightbulb,
      title: t('about.values.innovation'),
      text: t('about.values.innovation.text'),
    },
    {
      icon: Users,
      title: t('about.values.trust'),
      text: t('about.values.trust.text'),
    },
  ];

  return (
    <div className="blob-pattern">
      {/* Hero */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('about.title')}
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-semibold text-foreground mb-16 text-center">
              {t('about.values.title')}
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.15}>
                <div className="bg-card rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {t('about.intro')}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Production */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
              {t('about.production.title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {t('about.production.text')}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Safety */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
              {t('about.safety.title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line mb-8">
                {t('about.safety.text')}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            {/* ISO 9001 Certificate */}
            <div className="mt-8">
              <img
                src="/certificate.png"
                alt="ISO 9001 Certificate"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default About;
