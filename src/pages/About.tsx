import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Lightbulb, Users } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const About: React.FC = () => {
  const { t } = useLanguage();

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

      {/* History */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-semibold text-foreground mb-6 text-center">
              {t('about.history.title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              {t('about.history.text')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal direction="left">
            <h2 className="font-display text-3xl font-semibold text-foreground mb-6 text-center">
              {t('about.mission.title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              {t('about.mission.text')}
            </p>
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

      {/* Company Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <ScrollReveal>
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4 text-center">
                {t('contact.info.headquarters')}
              </h3>
              <div className="text-center text-muted-foreground space-y-2">
                <p className="font-semibold text-foreground">DAUMA s.r.o.</p>
                <p>IČO: 44169922</p>
                <p>DIČ: 2022627717</p>
                <p>IČ DPH: SK2022627717</p>
                <p className="pt-2">Novomeského 24, 902 01 Pezinok, Slovensko</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
