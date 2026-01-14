import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Calendar, ChevronDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Tender {
  id: string;
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
  pdfUrl?: string;
  year: number;
  active: boolean;
}

const tenders: Tender[] = [
  {
    id: '1',
    title: {
      sk: 'Modernizácia výrobných liniek',
      en: 'Production Line Modernization',
      hu: 'Gyártósorok modernizálása',
    },
    period: '2024-2025',
    description: {
      sk: 'Projekt zameraný na modernizáciu a automatizáciu výrobných procesov s podporou EÚ fondov.',
      en: 'Project focused on modernization and automation of production processes with EU funds support.',
      hu: 'EU-s támogatással megvalósuló termelési folyamatok modernizálására és automatizálására irányuló projekt.',
    },
    year: 2024,
    active: true,
  },
  {
    id: '2',
    title: {
      sk: 'Energetická efektívnosť',
      en: 'Energy Efficiency',
      hu: 'Energiahatékonyság',
    },
    period: '2023-2024',
    description: {
      sk: 'Implementácia úsporných opatrení a obnoviteľných zdrojov energie.',
      en: 'Implementation of energy-saving measures and renewable energy sources.',
      hu: 'Energiatakarékossági intézkedések és megújuló energiaforrások bevezetése.',
    },
    year: 2023,
    active: false,
  },
];

const Tenders: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const activeTenders = tenders.filter(tender => tender.active);
  const archivedTenders = tenders.filter(tender => !tender.active);
  
  const years = [...new Set(archivedTenders.map(t => t.year))].sort((a, b) => b - a);
  
  const filteredArchive = selectedYear 
    ? archivedTenders.filter(t => t.year === selectedYear)
    : archivedTenders;

  return (
    <div className="blob-pattern min-h-screen">
      {/* Hero */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            {t('tenders.title')}
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>
      </section>

      {/* Active Tenders */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
            {t('tenders.current.title')}
          </h2>
          
          {activeTenders.length > 0 ? (
            <div className="grid gap-6">
              {activeTenders.map((tender, index) => (
                <div
                  key={tender.id}
                  className="bg-card rounded-2xl p-6 md:p-8 border-2 border-primary/20 shadow-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {tender.title[language]}
                    </h3>
                    <span className="shrink-0 inline-flex items-center gap-2 bg-primary/10 text-primary-dark px-3 py-1 rounded-full text-sm font-medium">
                      <Calendar size={14} />
                      {tender.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {tender.description[language]}
                  </p>
                  {tender.pdfUrl && (
                    <a
                      href={tender.pdfUrl}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium text-sm transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText size={16} />
                      Download PDF
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-secondary/30 rounded-2xl p-8 text-center">
              <p className="text-muted-foreground">{t('tenders.noactive')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Archive */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              {t('tenders.archive.title')}
            </h2>
            
            {years.length > 0 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedYear(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedYear === null
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {language === 'sk' ? 'Všetky' : language === 'en' ? 'All' : 'Összes'}
                </button>
                {years.map(year => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedYear === year
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
          </div>

          {filteredArchive.length > 0 ? (
            <div className="grid gap-4">
              {filteredArchive.map((tender, index) => (
                <div
                  key={tender.id}
                  className="bg-background rounded-xl p-5 border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {tender.title[language]}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {tender.period}
                      </p>
                    </div>
                    {tender.pdfUrl && (
                      <a
                        href={tender.pdfUrl}
                        className="text-primary hover:text-primary-dark"
                      >
                        <FileText size={20} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">
              {language === 'sk' ? 'Žiadne archivované tendre.' : language === 'en' ? 'No archived tenders.' : 'Nincsenek archivált pályázatok.'}
            </p>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            {t('tenders.contact.title')}
          </h2>
          <p className="text-muted-foreground mb-8">
            {t('tenders.contact.text')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground px-6 py-3 rounded-full font-semibold transition-all duration-300"
          >
            {t('tenders.contact.cta')}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Tenders;
