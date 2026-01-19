import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const companyInfo = {
    name: 'CAPRIOVUS',
    ico: '44169922',
    dic: '2022627717',
    icDph: 'SK2022627717',
  };

  const orderPhones = ['+36 24 418 296', '+36 24 418 297', '+36 24 418 298'];
  const headquartersAddress = 'HU 2317 Szigetcsép,\nDunasor 073/72 hrsz.';
  const headquartersPhones = ['+36 24 513 660', '+36 24 513 661'];
  const storeAddress = 'HU 1147 Budapest,\nTelepes utca 51.';

  return (
    <footer className="text-white mt-auto" style={{ backgroundColor: 'hsl(210, 70%, 28%)' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="mb-4">
              <div className="bg-white rounded-full p-3 inline-flex items-center justify-center">
                <img
                  src="/capriovus.webp"
                  alt="CAPRIOVUS"
                  className="h-8 w-auto"
                />
              </div>
            </div>
            <p className="text-white/80 mb-4 text-sm leading-relaxed">
              {companyInfo.name}
            </p>
            <div className="text-white/70 text-sm space-y-1">
              <p>IČO: {companyInfo.ico}</p>
              <p>DIČ: {companyInfo.dic}</p>
              <p>IČ DPH: {companyInfo.icDph}</p>
            </div>
          </div>

          {/* Orders, Terms, Information */}
          <div>
            <h4 className="font-semibold mb-4 text-white">{t('footer.orders')}</h4>
            <div className="space-y-2 text-sm">
              {orderPhones.map((phone, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Phone size={16} className="text-white/80 shrink-0" />
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-white/80 hover:text-white transition-colors">
                    {phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Headquarters */}
          <div>
            <h4 className="font-semibold mb-4 text-white">{t('footer.headquarters')}</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-white/80 mt-0.5 shrink-0" />
                <span className="text-white/80 whitespace-pre-line">{headquartersAddress}</span>
              </div>
              {headquartersPhones.map((phone, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Phone size={16} className="text-white/80 shrink-0" />
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-white/80 hover:text-white transition-colors">
                    {phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Store */}
          <div>
            <h4 className="font-semibold mb-4 text-white">{t('footer.store')}</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-white/80 mt-0.5 shrink-0" />
                <span className="text-white/80 whitespace-pre-line">{storeAddress}</span>
              </div>
              <div>
                <p className="text-white/80 font-semibold mb-2">{t('footer.openingHours')}:</p>
                <div className="text-white/80 space-y-1">
                  <p>{t('footer.monThu')}: 8.00 – 15.30</p>
                  <p>{t('footer.friday')}: 8.00 – 14.00</p>
                  <p>{t('footer.satSun')}: {t('footer.closed')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} {companyInfo.name} {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
