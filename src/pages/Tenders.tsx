import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface Tender {
  id: string;
  slug: string;
  title: {
    sk: string;
    en: string;
    hu: string;
  };
  period: string;
  description: {
    sk: string;
    en: string;
    hu: string;
  };
}

const tenders: Tender[] = [
  {
    id: '1',
    slug: '2023-1-1-1-piaci-fokusz-2024-00035',
    title: {
      sk: '2023-1.1.1-PIACI_FÓKUSZ-2024-00035',
      en: '2023-1.1.1-PIACI_FÓKUSZ-2024-00035',
      hu: '2023-1.1.1-PIACI_FÓKUSZ-2024-00035',
    },
    period: '2023-2024',
    description: {
      sk: 'Kedvezményezett neve: CAPRIOVUS Élelmiszeripari és Kereskedelmi Korlátolt Felelősségű Társaság A projekt címe: Kor- és állapotspecifikus funkcionális élelmiszerek fejlesztése az „active ageing"-re fókuszálva. A szerződött támogatás összege: 636 337 920 Ft',
      en: 'Kedvezményezett neve: CAPRIOVUS Élelmiszeripari és Kereskedelmi Korlátolt Felelősségű Társaság A projekt címe: Kor- és állapotspecifikus funkcionális élelmiszerek fejlesztése az „active ageing"-re fókuszálva. A szerződött támogatás összege: 636 337 920 Ft',
      hu: 'Kedvezményezett neve: CAPRIOVUS Élelmiszeripari és Kereskedelmi Korlátolt Felelősségű Társaság A projekt címe: Kor- és állapotspecifikus funkcionális élelmiszerek fejlesztése az „active ageing"-re fókuszálva. A szerződött támogatás összege: 636 337 920 Ft',
    },
  },
  {
    id: '2',
    slug: 'ginop-plusz-3-2-1-21',
    title: {
      sk: 'GINOP Plusz-3.2.1-21',
      en: 'GINOP Plusz-3.2.1-21',
      hu: 'GINOP Plusz-3.2.1-21',
    },
    period: '2021',
    description: {
      sk: '„A munkavállalók és vállalatok alkalmazkodóképességének és termelékenységének javítása a munkaerő fejlesztésén keresztül" BP/0701/069836-6/2021 A CAPRIOVUS Kft. 12 287 808 Ft támogatást nyert',
      en: '„A munkavállalók és vállalatok alkalmazkodóképességének és termelékenységének javítása a munkaerő fejlesztésén keresztül" BP/0701/069836-6/2021 A CAPRIOVUS Kft. 12 287 808 Ft támogatást nyert',
      hu: '„A munkavállalók és vállalatok alkalmazkodóképességének és termelékenységének javítása a munkaerő fejlesztésén keresztül" BP/0701/069836-6/2021 A CAPRIOVUS Kft. 12 287 808 Ft támogatást nyert',
    },
  },
  {
    id: '3',
    slug: '2020-1-12-piaci-kfi-2020-00027',
    title: {
      sk: '2020-1.12-PIACI-KFI-2020-00027',
      en: '2020-1.12-PIACI-KFI-2020-00027',
      hu: '2020-1.12-PIACI-KFI-2020-00027',
    },
    period: '2020',
    description: {
      sk: 'Kedvezményezett neve: CAPRIOVUS Élelmiszeripari és Kereskedelmi Korlátolt Felelősségű Társaság A projekt címe: Funkcionális a táplálkozási trendeknek megfelelő tojáskészítmények kifejlesztése. A szerződött támogatás összege: 131,14 millió Ft',
      en: 'Kedvezményezett neve: CAPRIOVUS Élelmiszeripari és Kereskedelmi Korlátolt Felelősségű Társaság A projekt címe: Funkcionális a táplálkozási trendeknek megfelelő tojáskészítmények kifejlesztése. A szerződött támogatás összege: 131,14 millió Ft',
      hu: 'Kedvezményezett neve: CAPRIOVUS Élelmiszeripari és Kereskedelmi Korlátolt Felelősségű Társaság A projekt címe: Funkcionális a táplálkozási trendeknek megfelelő tojáskészítmények kifejlesztése. A szerződött támogatás összege: 131,14 millió Ft',
    },
  },
  {
    id: '4',
    slug: 'vekop-2-1-1-15-2016-00149',
    title: {
      sk: 'VEKOP-2.1.1-15-2016-00149',
      en: 'VEKOP-2.1.1-15-2016-00149',
      hu: 'VEKOP-2.1.1-15-2016-00149',
    },
    period: '2016',
    description: {
      sk: 'Kedvezményezett neve: CAPRIOVUS Élelmiszeripari és Kereskedelmi Korlátolt Felelősségű Társaság Projekt címe: Tojásfehérje alapú tejtermék analógok kifejlesztése és a szükséges technológiák kidolgozása. Szerződött támogatási összeg: 65 307 388 Ft',
      en: 'Kedvezményezett neve: CAPRIOVUS Élelmiszeripari és Kereskedelmi Korlátolt Felelősségű Társaság Projekt címe: Tojásfehérje alapú tejtermék analógok kifejlesztése és a szükséges technológiák kidolgozása. Szerződött támogatási összeg: 65 307 388 Ft',
      hu: 'Kedvezményezett neve: CAPRIOVUS Élelmiszeripari és Kereskedelmi Korlátolt Felelősségű Társaság Projekt címe: Tojásfehérje alapú tejtermék analógok kifejlesztése és a szükséges technológiák kidolgozása. Szerződött támogatási összeg: 65 307 388 Ft',
    },
  },
  {
    id: '5',
    slug: 'vallalati-kfi-16-1-2017-0551',
    title: {
      sk: 'VÁLLALATI KFI_16-1-2017-0551',
      en: 'VÁLLALATI KFI_16-1-2017-0551',
      hu: 'VÁLLALATI KFI_16-1-2017-0551',
    },
    period: '2017',
    description: {
      sk: 'Kedvezményezett neve: CAPRIOVUS Élelmiszeripari és Kereskedelmi Korlátolt Felelősségű Társaság A projekt címe: Tojásfehérje alapú probiotikus tejtermék-analógok kidolgozása a tej valamely összetevőjére érzékeny, ill. magas fehérjetartalmú, zsírban és szénhidrátban csökkentett étrendet követő fogyasztók számára',
      en: 'Kedvezményezett neve: CAPRIOVUS Élelmiszeripari és Kereskedelmi Korlátolt Felelősségű Társaság A projekt címe: Tojásfehérje alapú probiotikus tejtermék-analógok kidolgozása a tej valamely összetevőjére érzékeny, ill. magas fehérjetartalmú, zsírban és szénhidrátban csökkentett étrendet követő fogyasztók számára',
      hu: 'Kedvezményezett neve: CAPRIOVUS Élelmiszeripari és Kereskedelmi Korlátolt Felelősségű Társaság A projekt címe: Tojásfehérje alapú probiotikus tejtermék-analógok kidolgozása a tej valamely összetevőjére érzékeny, ill. magas fehérjetartalmú, zsírban és szénhidrátban csökkentett étrendet követő fogyasztók számára',
    },
  },
  {
    id: '6',
    slug: 'vekop-1-3-1-16-2016-00076',
    title: {
      sk: 'VEKOP-1.3.1-16-2016-00076',
      en: 'VEKOP-1.3.1-16-2016-00076',
      hu: 'VEKOP-1.3.1-16-2016-00076',
    },
    period: '2016',
    description: {
      sk: 'A Capriovus Kft. „A Capriovus Kft. külpiaci megjelenése" című, VEKOP-1.3.1-16-2016-00076 azonosítószámú pályázata során 2 028 750 Ft (azaz kétmillió-huszonnyolcezer-hétszázötven forint) vissza nem térítendő támogatást nyert a „Mikro-, Kis- és Középvállalkozások piaci megjelenésének támogatása" program keretében',
      en: 'A Capriovus Kft. „A Capriovus Kft. külpiaci megjelenése" című, VEKOP-1.3.1-16-2016-00076 azonosítószámú pályázata során 2 028 750 Ft (azaz kétmillió-huszonnyolcezer-hétszázötven forint) vissza nem térítendő támogatást nyert a „Mikro-, Kis- és Középvállalkozások piaci megjelenésének támogatása" program keretében',
      hu: 'A Capriovus Kft. „A Capriovus Kft. külpiaci megjelenése" című, VEKOP-1.3.1-16-2016-00076 azonosítószámú pályázata során 2 028 750 Ft (azaz kétmillió-huszonnyolcezer-hétszázötven forint) vissza nem térítendő támogatást nyert a „Mikro-, Kis- és Középvállalkozások piaci megjelenésének támogatása" program keretében',
    },
  },
  {
    id: '7',
    slug: 'kmr-12-1-2012-0181',
    title: {
      sk: 'KMR_12-1-2012-0181',
      en: 'KMR_12-1-2012-0181',
      hu: 'KMR_12-1-2012-0181',
    },
    period: '2012',
    description: {
      sk: 'Kutatás-fejlesztés a „Piacorientált kutatás-fejlesztési tevékenység támogatatása a közép-magyarországi régióban" című program keretében a CAPRIOVUS Kft-nél. A projekt címe Egészségvédő antioxidánsokkal dúsított trikolor száraztészta termékcsalád kifejlesztése',
      en: 'Kutatás-fejlesztés a „Piacorientált kutatás-fejlesztési tevékenység támogatatása a közép-magyarországi régióban" című program keretében a CAPRIOVUS Kft-nél. A projekt címe Egészségvédő antioxidánsokkal dúsított trikolor száraztészta termékcsalád kifejlesztése',
      hu: 'Kutatás-fejlesztés a „Piacorientált kutatás-fejlesztési tevékenység támogatatása a közép-magyarországi régióban" című program keretében a CAPRIOVUS Kft-nél. A projekt címe Egészségvédő antioxidánsokkal dúsított trikolor száraztészta termékcsalád kifejlesztése',
    },
  },
  {
    id: '8',
    slug: 'kmop-1-1-4-11-b-2012-0018',
    title: {
      sk: 'KMOP-1.1.4-11/B-2012-0018',
      en: 'KMOP-1.1.4-11/B-2012-0018',
      hu: 'KMOP-1.1.4-11/B-2012-0018',
    },
    period: '2012',
    description: {
      sk: 'Innovációs eredmények hasznosításának támogatása KKV-k részére (Közép-Magyarország). A projekt címe Termelés során keletkezett papírhulladék újrahasznosítására szolgáló újszerű fűtési eljárás alkalmazása a Capriovus Kft-nél',
      en: 'Innovációs eredmények hasznosításának támogatása KKV-k részére (Közép-Magyarország). A projekt címe Termelés során keletkezett papírhulladék újrahasznosítására szolgáló újszerű fűtési eljárás alkalmazása a Capriovus Kft-nél',
      hu: 'Innovációs eredmények hasznosításának támogatása KKV-k részére (Közép-Magyarország). A projekt címe Termelés során keletkezett papírhulladék újrahasznosítására szolgáló újszerű fűtési eljárás alkalmazása a Capriovus Kft-nél',
    },
  },
];

const Tenders: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="blob-pattern min-h-screen">
      {/* Hero */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('tenders.title')}
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </ScrollReveal>
        </div>
      </section>

      {/* Tenders Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
              {t('tenders.current.title')}
            </h2>
          </ScrollReveal>
          
          <div className="grid gap-6">
            {tenders.map((tender, index) => (
              <ScrollReveal key={tender.id} delay={index * 0.1}>
                <Link
                  to={`/tenders/${tender.slug}`}
                  className="block group"
                >
                  <div className="bg-card rounded-2xl p-6 md:p-8 border-2 border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                      <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {tender.title[language]}
                      </h3>
                      <span className="shrink-0 inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        <Calendar size={14} />
                        {tender.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {tender.description[language]}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                      {t('tenders.readMore')}
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              {t('tenders.contact.title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground mb-8">
              {t('tenders.contact.text')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1"
            >
              {t('tenders.contact.cta')}
              <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Tenders;
