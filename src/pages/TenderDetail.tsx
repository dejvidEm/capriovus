import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface TenderDetail {
  id: string;
  slug: string;
  title: {
    sk: string;
    en: string;
    hu: string;
  };
  period: string;
  keywords: {
    sk: string[];
    en: string[];
    hu: string[];
  };
  content: {
    sk: string;
    en: string;
    hu: string;
  };
}

const tenderDetails: TenderDetail[] = [
  {
    id: '1',
    slug: '2023-1-1-1-piaci-fokusz-2024-00035',
    title: {
      sk: '2023-1.1.1-PIACI_FÓKUSZ-2024-00035',
      en: '2023-1.1.1-PIACI_FÓKUSZ-2024-00035',
      hu: '2023-1.1.1-PIACI_FÓKUSZ-2024-00035',
    },
    period: '2023-2024',
    keywords: {
      sk: ['Funkcionális élelmiszerek', 'Active ageing', 'Kor-specifikus', 'Támogatás'],
      en: ['Funkcionális élelmiszerek', 'Active ageing', 'Kor-specifikus', 'Támogatás'],
      hu: ['Funkcionális élelmiszerek', 'Active ageing', 'Kor-specifikus', 'Támogatás'],
    },
    content: {
      sk: 'Kedvezményezett neve: CAPRIOVUS Élelmiszeripari és Kereskedelmi Korlátolt Felelősségű Társaság\n\nA projekt címe: Kor- és állapotspecifikus funkcionális élelmiszerek fejlesztése az „active ageing"-re fókuszálva\n\nA szerződött támogatás összege: 636 337 920 Ft\n\nA projekt tartalmának részletei hamarosan hozzáadásra kerülnek.',
      en: 'Kedvezményezett neve: CAPRIOVUS Élelmiszeripari és Kereskedelmi Korlátolt Felelősségű Társaság\n\nA projekt címe: Kor- és állapotspecifikus funkcionális élelmiszerek fejlesztése az „active ageing"-re fókuszálva\n\nA szerződött támogatás összege: 636 337 920 Ft\n\nA projekt tartalmának részletei hamarosan hozzáadásra kerülnek.',
      hu: 'Kedvezményezett neve: CAPRIOVUS Élelmiszeripari és Kereskedelmi Korlátolt Felelősségű Társaság\n\nA projekt címe: Kor- és állapotspecifikus funkcionális élelmiszerek fejlesztése az „active ageing"-re fókuszálva\n\nA szerződött támogatás összege: 636 337 920 Ft\n\nA projekt tartalmának részletei hamarosan hozzáadásra kerülnek.',
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
    keywords: {
      sk: ['Munkaerő fejlesztés', 'Alkalmazkodóképesség', 'Termelékenység', 'Támogatás'],
      en: ['Munkaerő fejlesztés', 'Alkalmazkodóképesség', 'Termelékenység', 'Támogatás'],
      hu: ['Munkaerő fejlesztés', 'Alkalmazkodóképesség', 'Termelékenység', 'Támogatás'],
    },
    content: {
      sk: '„A munkavállalók és vállalatok alkalmazkodóképességének és termelékenységének javítása a munkaerő fejlesztésén keresztül"\n\nBP/0701/069836-6/2021\n\nA CAPRIOVUS Kft. 12 287 808 Ft támogatást nyert.\n\nA projekt tartalmának részletei hamarosan hozzáadásra kerülnek.',
      en: '„A munkavállalók és vállalatok alkalmazkodóképességének és termelékenységének javítása a munkaerő fejlesztésén keresztül"\n\nBP/0701/069836-6/2021\n\nA CAPRIOVUS Kft. 12 287 808 Ft támogatást nyert.\n\nA projekt tartalmának részletei hamarosan hozzáadásra kerülnek.',
      hu: '„A munkavállalók és vállalatok alkalmazkodóképességének és termelékenységének javítása a munkaerő fejlesztésén keresztül"\n\nBP/0701/069836-6/2021\n\nA CAPRIOVUS Kft. 12 287 808 Ft támogatást nyert.\n\nA projekt tartalmának részletei hamarosan hozzáadásra kerülnek.',
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
    keywords: {
      sk: ['Funkcionális tojáskészítmények', 'Táplálkozási trendek', 'Kifejlesztés', 'Támogatás'],
      en: ['Funkcionális tojáskészítmények', 'Táplálkozási trendek', 'Kifejlesztés', 'Támogatás'],
      hu: ['Funkcionális tojáskészítmények', 'Táplálkozási trendek', 'Kifejlesztés', 'Támogatás'],
    },
    content: {
      sk: 'Kedvezményezett neve: CAPRIOVUS Élelmiszeripari és Kereskedelmi Korlátolt Felelősségű Társaság\n\nA projekt címe: Funkcionális a táplálkozási trendeknek megfelelő tojáskészítmények kifejlesztése\n\nA szerződött támogatás összege: 131,14 millió Ft\n\nA projekt tartalmának részletei hamarosan hozzáadásra kerülnek.',
      en: 'Kedvezményezett neve: CAPRIOVUS Élelmiszeripari és Kereskedelmi Korlátolt Felelősségű Társaság\n\nA projekt címe: Funkcionális a táplálkozási trendeknek megfelelő tojáskészítmények kifejlesztése\n\nA szerződött támogatás összege: 131,14 millió Ft\n\nA projekt tartalmának részletei hamarosan hozzáadásra kerülnek.',
      hu: 'Kedvezményezett neve: CAPRIOVUS Élelmiszeripari és Kereskedelmi Korlátolt Felelősségű Társaság\n\nA projekt címe: Funkcionális a táplálkozási trendeknek megfelelő tojáskészítmények kifejlesztése\n\nA szerződött támogatás összege: 131,14 millió Ft\n\nA projekt tartalmának részletei hamarosan hozzáadásra kerülnek.',
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
    keywords: {
      sk: ['Tojásfehérje', 'Tejtermék analógok', 'Technológia', 'Kifejlesztés'],
      en: ['Tojásfehérje', 'Tejtermék analógok', 'Technológia', 'Kifejlesztés'],
      hu: ['Tojásfehérje', 'Tejtermék analógok', 'Technológia', 'Kifejlesztés'],
    },
    content: {
      sk: 'Kedvezményezett neve: CAPRIOVUS Élelmiszeripari és Kereskedelmi Korlátolt Felelősségű Társaság\n\nProjekt címe: Tojásfehérje alapú tejtermék analógok kifejlesztése és a szükséges technológiák kidolgozása\n\nSzerződött támogatási összeg: 65 307 388 Ft\n\nA projekt tartalmának részletei hamarosan hozzáadásra kerülnek.',
      en: 'Kedvezményezett neve: CAPRIOVUS Élelmiszeripari és Kereskedelmi Korlátolt Felelősségű Társaság\n\nProjekt címe: Tojásfehérje alapú tejtermék analógok kifejlesztése és a szükséges technológiák kidolgozása\n\nSzerződött támogatási összeg: 65 307 388 Ft\n\nA projekt tartalmának részletei hamarosan hozzáadásra kerülnek.',
      hu: 'Kedvezményezett neve: CAPRIOVUS Élelmiszeripari és Kereskedelmi Korlátolt Felelősségű Társaság\n\nProjekt címe: Tojásfehérje alapú tejtermék analógok kifejlesztése és a szükséges technológiák kidolgozása\n\nSzerződött támogatási összeg: 65 307 388 Ft\n\nA projekt tartalmának részletei hamarosan hozzáadásra kerülnek.',
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
    keywords: {
      sk: ['Probiotikus', 'Tejtermék-analógok', 'Tojásfehérje', 'Kifejlesztés'],
      en: ['Probiotikus', 'Tejtermék-analógok', 'Tojásfehérje', 'Kifejlesztés'],
      hu: ['Probiotikus', 'Tejtermék-analógok', 'Tojásfehérje', 'Kifejlesztés'],
    },
    content: {
      sk: 'Kedvezményezett neve: CAPRIOVUS Élelmiszeripari és Kereskedelmi Korlátolt Felelősségű Társaság\n\nA projekt címe: Tojásfehérje alapú probiotikus tejtermék-analógok kidolgozása a tej valamely összetevőjére érzékeny, ill. magas fehérjetartalmú, zsírban és szénhidrátban csökkentett étrendet követő fogyasztók számára\n\nA projekt tartalmának részletei hamarosan hozzáadásra kerülnek.',
      en: 'Kedvezményezett neve: CAPRIOVUS Élelmiszeripari és Kereskedelmi Korlátolt Felelősségű Társaság\n\nA projekt címe: Tojásfehérje alapú probiotikus tejtermék-analógok kidolgozása a tej valamely összetevőjére érzékeny, ill. magas fehérjetartalmú, zsírban és szénhidrátban csökkentett étrendet követő fogyasztók számára\n\nA projekt tartalmának részletei hamarosan hozzáadásra kerülnek.',
      hu: 'Kedvezményezett neve: CAPRIOVUS Élelmiszeripari és Kereskedelmi Korlátolt Felelősségű Társaság\n\nA projekt címe: Tojásfehérje alapú probiotikus tejtermék-analógok kidolgozása a tej valamely összetevőjére érzékeny, ill. magas fehérjetartalmú, zsírban és szénhidrátban csökkentett étrendet követő fogyasztók számára\n\nA projekt tartalmának részletei hamarosan hozzáadásra kerülnek.',
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
    keywords: {
      sk: ['Külpiaci megjelenés', 'Mikro-, Kis- és Középvállalkozások', 'Támogatás'],
      en: ['Külpiaci megjelenés', 'Mikro-, Kis- és Középvállalkozások', 'Támogatás'],
      hu: ['Külpiaci megjelenés', 'Mikro-, Kis- és Középvállalkozások', 'Támogatás'],
    },
    content: {
      sk: 'A Capriovus Kft. „A Capriovus Kft. külpiaci megjelenése" című, VEKOP-1.3.1-16-2016-00076 azonosítószámú pályázata során 2 028 750 Ft (azaz kétmillió-huszonnyolcezer-hétszázötven forint) vissza nem térítendő támogatást nyert a „Mikro-, Kis- és Középvállalkozások piaci megjelenésének támogatása" program keretében\n\nA projekt tartalmának részletei hamarosan hozzáadásra kerülnek.',
      en: 'A Capriovus Kft. „A Capriovus Kft. külpiaci megjelenése" című, VEKOP-1.3.1-16-2016-00076 azonosítószámú pályázata során 2 028 750 Ft (azaz kétmillió-huszonnyolcezer-hétszázötven forint) vissza nem térítendő támogatást nyert a „Mikro-, Kis- és Középvállalkozások piaci megjelenésének támogatása" program keretében\n\nA projekt tartalmának részletei hamarosan hozzáadásra kerülnek.',
      hu: 'A Capriovus Kft. „A Capriovus Kft. külpiaci megjelenése" című, VEKOP-1.3.1-16-2016-00076 azonosítószámú pályázata során 2 028 750 Ft (azaz kétmillió-huszonnyolcezer-hétszázötven forint) vissza nem térítendő támogatást nyert a „Mikro-, Kis- és Középvállalkozások piaci megjelenésének támogatása" program keretében\n\nA projekt tartalmának részletei hamarosan hozzáadásra kerülnek.',
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
    keywords: {
      sk: ['Kutatás-fejlesztés', 'Antioxidánsok', 'Száraztészta', 'Termékcsalád'],
      en: ['Kutatás-fejlesztés', 'Antioxidánsok', 'Száraztészta', 'Termékcsalád'],
      hu: ['Kutatás-fejlesztés', 'Antioxidánsok', 'Száraztészta', 'Termékcsalád'],
    },
    content: {
      sk: 'Kutatás-fejlesztés a „Piacorientált kutatás-fejlesztési tevékenység támogatatása a közép-magyarországi régióban" című program keretében a CAPRIOVUS Kft-nél\n\nA projekt címe: Egészségvédő antioxidánsokkal dúsított trikolor száraztészta termékcsalád kifejlesztése\n\nA projekt tartalmának részletei hamarosan hozzáadásra kerülnek.',
      en: 'Kutatás-fejlesztés a „Piacorientált kutatás-fejlesztési tevékenység támogatatása a közép-magyarországi régióban" című program keretében a CAPRIOVUS Kft-nél\n\nA projekt címe: Egészségvédő antioxidánsokkal dúsított trikolor száraztészta termékcsalád kifejlesztése\n\nA projekt tartalmának részletei hamarosan hozzáadásra kerülnek.',
      hu: 'Kutatás-fejlesztés a „Piacorientált kutatás-fejlesztési tevékenység támogatatása a közép-magyarországi régióban" című program keretében a CAPRIOVUS Kft-nél\n\nA projekt címe: Egészségvédő antioxidánsokkal dúsított trikolor száraztészta termékcsalád kifejlesztése\n\nA projekt tartalmának részletei hamarosan hozzáadásra kerülnek.',
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
    keywords: {
      sk: ['Innováció', 'Papírhulladék', 'Újrahasznosítás', 'Fűtési eljárás'],
      en: ['Innováció', 'Papírhulladék', 'Újrahasznosítás', 'Fűtési eljárás'],
      hu: ['Innováció', 'Papírhulladék', 'Újrahasznosítás', 'Fűtési eljárás'],
    },
    content: {
      sk: 'Innovációs eredmények hasznosításának támogatása KKV-k részére (Közép-Magyarország)\n\nA projekt címe: Termelés során keletkezett papírhulladék újrahasznosítására szolgáló újszerű fűtési eljárás alkalmazása a Capriovus Kft-nél\n\nA projekt tartalmának részletei hamarosan hozzáadásra kerülnek.',
      en: 'Innovációs eredmények hasznosításának támogatása KKV-k részére (Közép-Magyarország)\n\nA projekt címe: Termelés során keletkezett papírhulladék újrahasznosítására szolgáló újszerű fűtési eljárás alkalmazása a Capriovus Kft-nél\n\nA projekt tartalmának részletei hamarosan hozzáadásra kerülnek.',
      hu: 'Innovációs eredmények hasznosításának támogatása KKV-k részére (Közép-Magyarország)\n\nA projekt címe: Termelés során keletkezett papírhulladék újrahasznosítására szolgáló újszerű fűtési eljárás alkalmazása a Capriovus Kft-nél\n\nA projekt tartalmának részletei hamarosan hozzáadásra kerülnek.',
    },
  },
];

const TenderDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const tender = tenderDetails.find(t => t.slug === slug);

  if (!tender) {
    return (
      <div className="blob-pattern min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            {t('tenders.notFound')}
          </h1>
          <Link
            to="/tenders"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium"
          >
            <ArrowLeft size={18} />
            {t('tenders.back')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Hero */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <Link
              to="/tenders"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span>{t('tenders.back')}</span>
            </Link>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Calendar size={16} />
                {tender.period}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              {tender.title[language]}
            </h1>
          </ScrollReveal>

          {/* Keywords */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap gap-2 mb-4">
              {tender.keywords[language].map((keyword, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 bg-card border border-border px-4 py-2 rounded-full text-sm text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  <Tag size={14} className="text-primary" />
                  {keyword}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal delay={0.4}>
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-border shadow-sm">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-lg">
                  {tender.content[language]}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default TenderDetail;

