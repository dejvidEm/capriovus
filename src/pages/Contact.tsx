import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Send, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

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
    headquarters: '123 Example Street, 12345 Example City, Country',
    email: 'adresa@gmail.com',
    centralOffice: {
      phone1: '+1 234 567 8901',
      phone2: '+1 234 567 8902',
    },
    orders: {
      phone1: '+1 234 567 8903',
      phone2: '+1 234 567 8904',
      phone3: '+1 234 567 8905',
    },
    mobile: '+1 234 567 8906',
    ordersEmail: 'adresa@gmail.com',
    store: '456 Main Avenue, 54321 Sample Town, Country',
  };

  // Factory locations
  const locations = {
    factory1: '123 Example Street, 12345 Example City, Country',
    factory2: '789 Industrial Road, 12345 Example City, Country',
    store: '456 Main Avenue, 54321 Sample Town, Country',
  };

  // Google Maps embed URLs
  // These URLs will display maps for the specified addresses
  const maps = {
    factory1: `https://www.google.com/maps?q=${encodeURIComponent('123 Example Street, 12345 Example City, Country')}&output=embed`,
    factory2: `https://www.google.com/maps?q=${encodeURIComponent('789 Industrial Road, 12345 Example City, Country')}&output=embed`,
    store: `https://www.google.com/maps?q=${encodeURIComponent('456 Main Avenue, 54321 Sample Town, Country')}&output=embed`,
  };

  return (
    <div className="blob-pattern min-h-screen">
      {/* Hero */}
      <section className="pt-36 pb-24 text-center">
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

                  {/* Contact Information */}
                  <div className="pt-6 mt-6 border-t border-border space-y-4">
                    <div>
                      <span className="block text-sm font-medium text-foreground mb-2">
                        {t('contact.info.orders')}
                      </span>
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

                    <div>
                      <span className="block text-sm font-medium text-foreground mb-1">
                        {t('contact.info.mobile')}
                      </span>
                      <a 
                        href={`tel:${contactInfo.mobile.replace(/\s/g, '')}`}
                        className="text-primary hover:text-primary-dark transition-colors font-medium text-sm"
                      >
                        {contactInfo.mobile}
                      </a>
                    </div>

                    <div>
                      <span className="block text-sm font-medium text-foreground mb-1">
                        {t('contact.info.ordersEmail')}
                      </span>
                      <a 
                        href={`mailto:${contactInfo.ordersEmail}`}
                        className="text-primary hover:text-primary-dark transition-colors font-medium text-sm"
                      >
                        {contactInfo.ordersEmail}
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </ScrollReveal>

              {/* Contact Info */}
              <ScrollReveal direction="right">
                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                  <Tabs defaultValue="contact" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="contact">{t('contact.info.title')}</TabsTrigger>
                      <TabsTrigger value="billing">{t('contact.info.billing')}</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="contact" className="space-y-6">
                      {/* DAUMA Address */}
                      <div className="pb-4 border-b border-border">
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="font-semibold text-foreground">DAUMA</div>
                          <div>100 Business Park Drive</div>
                          <div>12345 Example City</div>
                          <div>Country</div>
                        </div>
                      </div>

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
                    </TabsContent>

                    <TabsContent value="billing" className="space-y-6">
                      {/* Billing Information */}
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="font-semibold text-foreground">DAUMA s.r.o.</div>
                        <div>200 Corporate Boulevard</div>
                        <div>12345 Example City, Country</div>
                        <div className="pt-2">
                          <div>IČO 44169922</div>
                          <div>DIČ 2022627717</div>
                          <div>IČ DPH SK2022627717</div>
                        </div>
                      </div>


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
                    </TabsContent>
                  </Tabs>
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
                    title={`${t('contact.locations.factory1')} - Example City`}
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
                    title={`${t('contact.locations.factory2')} - Example City`}
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
                    title={`${t('contact.locations.store')} - Sample Town`}
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
