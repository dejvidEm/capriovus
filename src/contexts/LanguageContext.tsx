import React, { createContext, useContext, useState, useCallback } from 'react';

export type Language = 'sk' | 'en' | 'hu';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  sk: {
    // Navigation
    'nav.home': 'Domov',
    'nav.about': 'O spoločnosti',
    'nav.products': 'Výrobky',
    'nav.tenders': 'Tendre / Dotácie',
    'nav.contact': 'Kontakt',
    
    // Product categories
    'category.liquid': 'Tekuté vajcia',
    'category.boiled': 'Varené vajcia',
    'category.dried': 'Sušené vajcia',
    'category.sticks': 'Vaječné tyčinky',
    'category.totu': 'Značka ToTu',
    
    // Home page
    'home.hero.title': 'Nový pohľad na známy produkt',
    'home.hero.subtitle': 'Tekuté vajce vo fľaši',
    'home.hero.cta': 'Objavte naše produkty',
    'home.intro.title': 'Kvalita od roku 1993',
    'home.intro.text': 'Spoločnosť DAUMA s.r.o. je popredným slovenským výrobcom vaječných produktov. Naše výrobky spĺňajú najprísnejšie normy kvality a bezpečnosti.',
    'home.categories.title': 'Naše produkty',
    
    // About page
    'about.title': 'O spoločnosti',
    'about.history.title': 'Naša história',
    'about.history.text': 'Spoločnosť DAUMA s.r.o. pôsobí na trhu s vaječnými výrobkami od roku 1993. Za viac ako 30 rokov sme sa stali spoľahlivým partnerom pre potravinársky priemysel na Slovensku aj v zahraničí.',
    'about.mission.title': 'Naše poslanie',
    'about.mission.text': 'Prinášať zákazníkom vysoko kvalitné vaječné produkty, ktoré spĺňajú najprísnejšie štandardy bezpečnosti a kvality. Neustále inovujeme a rozširujeme naše portfólio.',
    'about.values.title': 'Naše hodnoty',
    'about.values.quality': 'Kvalita',
    'about.values.quality.text': 'Prísne kontroly kvality na každom kroku výroby',
    'about.values.innovation': 'Inovácia',
    'about.values.innovation.text': 'Neustále zdokonaľovanie procesov a produktov',
    'about.values.trust': 'Dôvera',
    'about.values.trust.text': 'Dlhodobé partnerstvá postavené na spoľahlivosti',
    
    // Tenders page
    'tenders.title': 'Tendre a Dotácie',
    'tenders.current.title': 'Aktuálne tendre',
    'tenders.archive.title': 'Archív',
    'tenders.noactive': 'Momentálne nie sú aktívne žiadne tendre.',
    'tenders.contact.title': 'Máte otázky?',
    'tenders.contact.text': 'Kontaktujte nás pre viac informácií o tendroch a dotáciách.',
    'tenders.contact.cta': 'Kontaktovať nás',
    
    // Contact page
    'contact.title': 'Kontakt',
    'contact.form.title': 'Napíšte nám',
    'contact.form.name': 'Meno',
    'contact.form.email': 'E-mail',
    'contact.form.message': 'Správa',
    'contact.form.submit': 'Odoslať správu',
    'contact.info.title': 'Kontaktné údaje',
    'contact.info.address': 'Adresa prevádzky',
    'contact.info.phone': 'Telefón',
    'contact.info.headquarters': 'Sídlo spoločnosti',
    
    // Products
    'products.title': 'Naše výrobky',
    'products.more': 'Viac informácií',
    'products.back': 'Späť na výrobky',
    'products.usage': 'Použitie',
    'products.downloadPdf': 'Stiahnuť PDF',
    'products.packaging': 'Balenie',
    'products.description': 'Popis',
    
    // Footer
    'footer.company': 'DAUMA s.r.o.',
    'footer.rights': 'Všetky práva vyhradené.',
    'footer.contact': 'Kontakt',
    'footer.quicklinks': 'Rýchle odkazy',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.products': 'Products',
    'nav.tenders': 'Tenders / Grants',
    'nav.contact': 'Contact',
    
    // Product categories
    'category.liquid': 'Liquid Eggs',
    'category.boiled': 'Boiled Eggs',
    'category.dried': 'Dried Eggs',
    'category.sticks': 'Egg Sticks',
    'category.totu': 'ToTu Brand',
    
    // Home page
    'home.hero.title': 'A New Look at a Familiar Product',
    'home.hero.subtitle': 'Liquid Egg in a Bottle',
    'home.hero.cta': 'Discover Our Products',
    'home.intro.title': 'Quality Since 1993',
    'home.intro.text': 'DAUMA s.r.o. is a leading Slovak manufacturer of egg products. Our products meet the strictest quality and safety standards.',
    'home.categories.title': 'Our Products',
    
    // About page
    'about.title': 'About Us',
    'about.history.title': 'Our History',
    'about.history.text': 'DAUMA s.r.o. has been operating in the egg products market since 1993. For over 30 years, we have become a reliable partner for the food industry in Slovakia and abroad.',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'To bring customers high-quality egg products that meet the strictest safety and quality standards. We continuously innovate and expand our portfolio.',
    'about.values.title': 'Our Values',
    'about.values.quality': 'Quality',
    'about.values.quality.text': 'Strict quality controls at every step of production',
    'about.values.innovation': 'Innovation',
    'about.values.innovation.text': 'Continuous improvement of processes and products',
    'about.values.trust': 'Trust',
    'about.values.trust.text': 'Long-term partnerships built on reliability',
    
    // Tenders page
    'tenders.title': 'Tenders and Grants',
    'tenders.current.title': 'Current Tenders',
    'tenders.archive.title': 'Archive',
    'tenders.noactive': 'There are currently no active tenders.',
    'tenders.contact.title': 'Have Questions?',
    'tenders.contact.text': 'Contact us for more information about tenders and grants.',
    'tenders.contact.cta': 'Contact Us',
    
    // Contact page
    'contact.title': 'Contact',
    'contact.form.title': 'Write to Us',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Business Address',
    'contact.info.phone': 'Phone',
    'contact.info.headquarters': 'Headquarters',
    
    // Products
    'products.title': 'Our Products',
    'products.more': 'More Information',
    'products.back': 'Back to Products',
    'products.usage': 'Usage',
    'products.downloadPdf': 'Download PDF',
    'products.packaging': 'Packaging',
    'products.description': 'Description',
    
    // Footer
    'footer.company': 'DAUMA s.r.o.',
    'footer.rights': 'All rights reserved.',
    'footer.contact': 'Contact',
    'footer.quicklinks': 'Quick Links',
  },
  hu: {
    // Navigation
    'nav.home': 'Főoldal',
    'nav.about': 'Rólunk',
    'nav.products': 'Termékek',
    'nav.tenders': 'Pályázatok / Támogatások',
    'nav.contact': 'Kapcsolat',
    
    // Product categories
    'category.liquid': 'Folyékony tojás',
    'category.boiled': 'Főtt tojás',
    'category.dried': 'Szárított tojás',
    'category.sticks': 'Tojásrudak',
    'category.totu': 'ToTu márka',
    
    // Home page
    'home.hero.title': 'Új nézőpont egy ismerős termékre',
    'home.hero.subtitle': 'Folyékony tojás palackban',
    'home.hero.cta': 'Fedezze fel termékeinket',
    'home.intro.title': 'Minőség 1993 óta',
    'home.intro.text': 'A DAUMA s.r.o. Szlovákia vezető tojástermék-gyártója. Termékeink megfelelnek a legszigorúbb minőségi és biztonsági előírásoknak.',
    'home.categories.title': 'Termékeink',
    
    // About page
    'about.title': 'Rólunk',
    'about.history.title': 'Történetünk',
    'about.history.text': 'A DAUMA s.r.o. 1993 óta működik a tojástermékek piacán. Több mint 30 év alatt megbízható partnerré váltunk az élelmiszeripar számára Szlovákiában és külföldön egyaránt.',
    'about.mission.title': 'Küldetésünk',
    'about.mission.text': 'Kiváló minőségű tojástermékeket kínálni ügyfeleinknek, amelyek megfelelnek a legszigorúbb biztonsági és minőségi előírásoknak. Folyamatosan fejlesztjük és bővítjük portfóliónkat.',
    'about.values.title': 'Értékeink',
    'about.values.quality': 'Minőség',
    'about.values.quality.text': 'Szigorú minőség-ellenőrzés a gyártás minden lépésénél',
    'about.values.innovation': 'Innováció',
    'about.values.innovation.text': 'Folyamatos folyamat- és termékfejlesztés',
    'about.values.trust': 'Bizalom',
    'about.values.trust.text': 'Megbízhatóságra épülő hosszú távú partnerségek',
    
    // Tenders page
    'tenders.title': 'Pályázatok és Támogatások',
    'tenders.current.title': 'Aktuális pályázatok',
    'tenders.archive.title': 'Archívum',
    'tenders.noactive': 'Jelenleg nincsenek aktív pályázatok.',
    'tenders.contact.title': 'Kérdései vannak?',
    'tenders.contact.text': 'Lépjen velünk kapcsolatba a pályázatokkal és támogatásokkal kapcsolatos további információkért.',
    'tenders.contact.cta': 'Kapcsolatfelvétel',
    
    // Contact page
    'contact.title': 'Kapcsolat',
    'contact.form.title': 'Írjon nekünk',
    'contact.form.name': 'Név',
    'contact.form.email': 'E-mail',
    'contact.form.message': 'Üzenet',
    'contact.form.submit': 'Üzenet küldése',
    'contact.info.title': 'Elérhetőségek',
    'contact.info.address': 'Telephely címe',
    'contact.info.phone': 'Telefon',
    'contact.info.headquarters': 'Székhely',
    
    // Products
    'products.title': 'Termékeink',
    'products.more': 'További információ',
    'products.back': 'Vissza a termékekhez',
    'products.usage': 'Felhasználás',
    'products.downloadPdf': 'PDF letöltése',
    'products.packaging': 'Csomagolás',
    'products.description': 'Leírás',
    
    // Footer
    'footer.company': 'DAUMA s.r.o.',
    'footer.rights': 'Minden jog fenntartva.',
    'footer.contact': 'Kapcsolat',
    'footer.quicklinks': 'Gyorslinkek',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('sk');

  const t = useCallback((key: string): string => {
    return translations[language][key] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
