import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = {
    operations: 'Za dráhou 21, 902 01 Pezinok',
    headquarters: 'Novomeského 24, 902 01 Pezinok, Slovensko',
    phone: '+421 948 056 962',
    email: 'info@capriovus.eu',
  };

  return (
    <div className="blob-pattern min-h-screen">
      {/* Hero */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            {t('contact.title')}
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border animate-fade-in">
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
                    <span className="flex items-center gap-2">
                      <span className="animate-spin">⏳</span>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={18} />
                      {t('contact.form.submit')}
                    </span>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {/* Contact Info */}
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  {t('contact.info.title')}
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-foreground mb-1">
                        {t('contact.info.address')}
                      </span>
                      <span className="text-muted-foreground">
                        {contactInfo.operations}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-foreground mb-1">
                        {t('contact.info.phone')}
                      </span>
                      <a 
                        href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                        className="text-primary hover:text-primary-dark transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <span className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.info.headquarters')}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      DAUMA s.r.o.<br />
                      {contactInfo.headquarters}
                    </span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-card rounded-2xl overflow-hidden border border-border h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.1234567890123!2d17.2667!3d48.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8a0000000001%3A0x1234567890abcdef!2sZa%20dr%C3%A1hou%2021%2C%20902%2001%20Pezinok!5e0!3m2!1ssk!2ssk!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
