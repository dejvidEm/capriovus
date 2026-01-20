import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Send, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import ScrollReveal from '@/components/ui/ScrollReveal';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: t('contact.toast.title'),
      description: t('contact.toast.description'),
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = {
    headquarters: '2317 Szigetcsép, Dunasor 073/72 hrsz., Maďarsko',
    email: 'capriovus@capriovus.hu',
    centralOffice: {
      phone1: '+36 24 513 660',
      phone2: '+36 24 513 661',
    },
    orders: {
      phone1: '+36 24 418 296',
      phone2: '+36 24 418 297',
      phone3: '+36 24 418 298',
    },
    mobile: '+36 20 373 85 28',
    ordersEmail: 'szamlazas@capriovus.hu',
    store: '1147 Budapest, Telepes utca 51., Maďarsko',
  };

  // Factory locations
  const locations = {
    factory1: '2317 Szigetcsép, Dunasor 073/72 hrsz., Maďarsko',
    factory2: '2317 Szigetcsép, Dózsa György u. 0116/15 hrsz., Maďarsko',
    store: '1147 Budapest, Telepes utca 51., Maďarsko',
  };

  // Google Maps embed URLs
  // These URLs will display maps for the specified addresses
  const maps = {
    factory1: `https://www.google.com/maps?q=${encodeURIComponent('2317 Szigetcsép, Dunasor 073/72 hrsz., Maďarsko')}&output=embed`,
    factory2: `https://www.google.com/maps?q=${encodeURIComponent('2317 Szigetcsép, Dózsa György u. 0116/15 hrsz., Maďarsko')}&output=embed`,
    store: `https://www.google.com/maps?q=${encodeURIComponent('1147 Budapest, Telepes utca 51., Maďarsko')}&output=embed`,
  };

  return (
    <div className="blob-pattern min-h-screen">
      {/* Hero */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('contact.title')}
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <ScrollReveal direction="left">
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border h-full">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  {t('contact.form.title')}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.name')}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      className="w-full"
                      placeholder={t('contact.form.name')}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.email')}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.message')}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full resize-none"
                      placeholder={t('contact.form.message')}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
                  >
                    {isSubmitting ? (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2"
                      >
                        <span className="animate-spin">⏳</span>
                        {t('contact.form.sending')}
                      </motion.span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send size={18} />
                        {t('contact.form.submit')}
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </ScrollReveal>

              {/* Contact Info */}
              <ScrollReveal direction="right">
                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    {t('contact.info.title')}
                  </h2>
                  
                  <div className="space-y-6">
                  {/* Headquarters */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="block text-sm font-medium text-foreground mb-1">
                        {t('contact.info.headquartersLabel')}
                        </span>
                        <span className="text-muted-foreground">
                        {contactInfo.headquarters}
                      </span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-foreground mb-1">
                        {t('contact.info.email')}
                      </span>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="text-primary hover:text-primary-dark transition-colors font-medium"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Central Office */}
                  <div className="pt-4 border-t border-border">
                    <span className="block text-sm font-medium text-foreground mb-3">
                      {t('contact.info.centralOffice')}
                    </span>
                    <div className="space-y-2">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Phone className="w-4 h-4 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <span className="text-sm text-muted-foreground">{t('contact.info.telFax')}</span>
                          <div className="space-y-1">
                            <a 
                              href={`tel:${contactInfo.centralOffice.phone1.replace(/\s/g, '')}`}
                              className="block text-primary hover:text-primary-dark transition-colors font-medium text-sm"
                            >
                              {contactInfo.centralOffice.phone1}
                            </a>
                            <a 
                              href={`tel:${contactInfo.centralOffice.phone2.replace(/\s/g, '')}`}
                              className="block text-primary hover:text-primary-dark transition-colors font-medium text-sm"
                            >
                              {contactInfo.centralOffice.phone2}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Orders & Business Information */}
                  <div className="pt-4 border-t border-border">
                    <span className="block text-sm font-medium text-foreground mb-3">
                      {t('contact.info.orders')}
                        </span>
                    <div className="space-y-2">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Phone className="w-4 h-4 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <a 
                            href={`tel:${contactInfo.orders.phone1.replace(/\s/g, '')}`}
                            className="block text-primary hover:text-primary-dark transition-colors font-medium text-sm"
                          >
                            {contactInfo.orders.phone1}
                          </a>
                          <a 
                            href={`tel:${contactInfo.orders.phone2.replace(/\s/g, '')}`}
                            className="block text-primary hover:text-primary-dark transition-colors font-medium text-sm"
                          >
                            {contactInfo.orders.phone2}
                          </a>
                          <a 
                            href={`tel:${contactInfo.orders.phone3.replace(/\s/g, '')}`}
                            className="block text-primary hover:text-primary-dark transition-colors font-medium text-sm"
                          >
                            {contactInfo.orders.phone3}
                          </a>
                        </div>
                      </div>
                      </div>
                    </div>

                  {/* Mobile Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="block text-sm font-medium text-foreground mb-1">
                        {t('contact.info.mobile')}
                        </span>
                        <a 
                        href={`tel:${contactInfo.mobile.replace(/\s/g, '')}`}
                          className="text-primary hover:text-primary-dark transition-colors font-medium"
                        >
                        {contactInfo.mobile}
                        </a>
                      </div>
                    </div>

                  {/* Orders Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-foreground mb-1">
                        {t('contact.info.ordersEmail')}
                      </span>
                      <a 
                        href={`mailto:${contactInfo.ordersEmail}`}
                        className="text-primary hover:text-primary-dark transition-colors font-medium"
                      >
                        {contactInfo.ordersEmail}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-semibold text-foreground mb-12 text-center">
              {t('contact.locations.title')}
            </h2>
              </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Factory 1 Map */}
            <ScrollReveal direction="left">
              <div className="bg-card rounded-2xl overflow-hidden border border-border">
                <div className="h-[300px]">
                  <iframe
                    src={maps.factory1}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${t('contact.locations.factory1')} - Szigetcsép`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {t('contact.locations.factory1')}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    {locations.factory1}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Factory 2 Map */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="bg-card rounded-2xl overflow-hidden border border-border">
                <div className="h-[300px]">
                  <iframe
                    src={maps.factory2}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${t('contact.locations.factory2')} - Szigetcsép`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {t('contact.locations.factory2')}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    {locations.factory2}
                  </p>
                </div>
                </div>
              </ScrollReveal>

            {/* Store Map */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-card rounded-2xl overflow-hidden border border-border">
                <div className="h-[300px]">
                  <iframe
                    src={maps.store}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${t('contact.locations.store')} - Budapest`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {t('contact.locations.store')}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    {locations.store}
                  </p>
                </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
