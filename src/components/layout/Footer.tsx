import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const companyInfo = {
    name: 'DAUMA s.r.o.',
    ico: '44169922',
    dic: '2022627717',
    icDph: 'SK2022627717',
    headquarters: 'Novomeského 24, 902 01 Pezinok, Slovensko',
    operations: 'Za dráhou 21, 902 01 Pezinok',
    phone: '+421 948 056 962',
  };

  return (
    <footer className="bg-foreground text-card mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-semibold mb-4">CAPRIOVUS</h3>
            <p className="text-card/70 mb-4 text-sm leading-relaxed">
              {companyInfo.name}
            </p>
            <div className="text-card/60 text-sm space-y-1">
              <p>IČO: {companyInfo.ico}</p>
              <p>DIČ: {companyInfo.dic}</p>
              <p>IČ DPH: {companyInfo.icDph}</p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4 text-card/90">{t('footer.quicklinks')}</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-card/70 hover:text-primary transition-colors text-sm">
                {t('nav.home')}
              </Link>
              <Link to="/about" className="text-card/70 hover:text-primary transition-colors text-sm">
                {t('nav.about')}
              </Link>
              <Link to="/products" className="text-card/70 hover:text-primary transition-colors text-sm">
                {t('nav.products')}
              </Link>
              <Link to="/tenders" className="text-card/70 hover:text-primary transition-colors text-sm">
                {t('nav.tenders')}
              </Link>
              <Link to="/contact" className="text-card/70 hover:text-primary transition-colors text-sm">
                {t('nav.contact')}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-card/90">{t('footer.contact')}</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-card/70">{companyInfo.operations}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="text-card/70 hover:text-primary transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-3 pt-2">
                <MapPin size={16} className="text-primary/60 mt-0.5 shrink-0" />
                <span className="text-card/50 text-xs">{companyInfo.headquarters}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-card/10 mt-8 pt-6 text-center text-card/50 text-sm">
          <p>© {new Date().getFullYear()} {companyInfo.name} {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
