import React, { createContext, useContext, useState, useCallback } from 'react';

export type Language = 'sk' | 'en' | 'hu' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  sk: {
    // Navigation
    'nav.home': 'Hlavné menu',
    'nav.about': 'Údaje o spoločnosti',
    'nav.products': 'Výrobky',
    'nav.tenders': 'Dotácie',
    'nav.contact': 'Kontakt',
    
    // Product categories
    'category.liquid': 'Tekuté vajcia',
    'category.boiled': 'Varené vajcia',
    'category.dried': 'Sušené vajcia',
    'category.sticks': 'Vaječné tyčinky',
    'category.totu': 'Značka ToTu',
    
    // Home page
    'home.hero.badge': 'Značka kvality a certifikát BUREAU VERITAS',
    'home.hero.title': 'Výrobky z vajec všetkých druhov',
    'home.hero.subtitle': 'Ak je pre vás dôležité mať kvalitné vaječné produkty, ktoré spĺňajú najprísnejšie normy kvality a bezpečnosti, tak ste na tej správnej adrese.',
    'home.hero.tagline': 'Vitajte v Capriovus - váš dodávateľ vaječných produktov.',
    'home.hero.cta': 'Zistiť viac',
    'home.intro.title': 'Kvalita od roku 1993',
    'home.intro.text': 'Spoločnosť DAUMA s.r.o. je popredným slovenským výrobcom vaječných produktov. Naše výrobky spĺňajú najprísnejšie normy kvality a bezpečnosti.',
    'home.categories.title': 'Naše produkty',
    'category.otherCategories': 'Dalšie produkty',
    
    // About page
    'about.title': 'O spoločnosti',
    'about.intro': 'Naša spoločnosť vo výhradnom vlastníctve maďarských spoločníkov sa pýši viac ako štvrťstoročnou históriou; v roku 1991 spoločnosť zmenila právnu formu na s.r.o. (Kft.). Našou hlavnou činnosťou je spracovanie vajec, výroba vaječných výrobkov, balenie vajec, ako aj zhodnocovanie vedľajších produktov vznikajúcich počas procesu spracovania.\n\nV našich závodoch vyrábame rozličné tekuté pasterizované vaječné výrobky, sušené vaječné výrobky, výrobky z lúpaných varených vajec, varených vaječných tyčiniek a výrobky s dezinfikovanou vaječnou škrupinou.  V našich baliacich závodoch sa zaoberáme triedením a balením čerstvých vajec.\n\nZ vedľajších produktov vzniknutých pri spracovaní, z vaječnej škrupiny a z krmivových sušených vajec vyrábame krmivové produkty vyvinuté najmä pre domáce zvieratá.',
    'about.production.title': 'Výroba',
    'about.production.text': 'Sídlo a zároveň obchodné stredisko našej spoločnosti sa nachádza na adrese 123 Example Street, 12345 Example City, Country, kde vykonávame aj administratívne činnosti.\n\nNašu predajňu nájdete pod adresou 456 Main Avenue, 54321 Sample Town, Country.\n\nNa pobočke v Example City prevádzkujeme niekoľko oddelených závodov. V jednom z nich prebieha výroba tekutých vaječných výrobkov, a ich sušením produkcia sušených vaječných výrobkov; v druhom závode sa pripravujú lúpané varené vajcia, ako aj výrobky z vaječných tyčiniek; v treťom prebieha príprava výrobkov s dezinfikovanou vaječnou škrupinou ;vo štvrtom prebieha výroba potravín a potravinových prísad značky ToTu rozličným spracovaním vaječného bielka; a nakoniec v závode na zúžitkovanie vedľajších produktov prebieha výroba krmivových produktov.\n\nNaša spoločnosť počas uplynulých rokov prešla dynamickým vývojom, vďaka ktorému náš obrat, ako aj naše tržby niekoľkonásobne narástli; v súčasnosti pôsobíme už vo viacerých európskych štátoch.',
    'about.safety.title': 'Bezpečnosť',
    'about.safety.text': 'Náš vozový park pozostáva z moderných prístrojov značky Sanovo, Bergmeier, Sondex a Actini, ktorých technické vybavenie, ako aj technologická spoľahlivosť sú zárukou vysokej kvality výrobkov.\n\nKvalitu výrobkov okrem neustáleho vývoja technologického vybavenia garantujeme aj vhodnými systémami manažérstva kvality. V našich závodoch sme implementovali systém manažérstva kvality ISO 9002 v roku 1998, a ISO 9001 spolu s integrovaným systémom HAACP v roku 2002. Opätovnú autorizáciu systémov každé tri roky, ako aj pravidelnú každoročnú certifikačnú inšpekciu vykonávala (a vykonáva) certifikačná spoločnosť Bureau Veritas. Systémy sledujú zmeny štandardov s súlade s platnými predpismi; túto skutočnosť overuje a potvrdzuje certifikačná spoločnosť. EU kontrolné číslo závodu na výrobu vaječnej šťavy a vaječného prášku v Example City je HU 343, a závodu pre varené vajcia je HU 913. Registračné číslo závodu na dezinfekciu vaječnej škrupiny je HU-12-TCS-008, závodov na výrobu krmív HU 13 1 00135 a HU 13 1 00136.\n\nOkrem vynikajúcej kvality našich výrobkov považujeme za dôležité vytvorenie dobrých vzťahov s našimi zákazníkmi a udržanie získanej dôvery.\n\nNaše výrobky sú s maximálnym zreteľom na požiadavky zákazníkov distribuované po celej krajine, a na základe osobitných dohôd dodávané do zahraničia. Naši obchodní zástupcovia sú prítomní v každom domácom regióne. V susedných krajinách sme nadviazali významné partnerské vzťahy.\n\nVýsledkom nášho snaženia je, že medzi našimi partnermi máme takmer všetkých maďarských a viac významných zahraničných závodov na spracovanie potravín.',
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
    'tenders.readMore': 'Čítať viac',
    'tenders.back': 'Späť na tendre',
    'tenders.notFound': 'Tender sa nenašiel',
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
    'contact.form.sending': 'Odosielanie...',
    'contact.info.title': 'Kontaktné údaje',
    'contact.info.address': 'Adresa prevádzky',
    'contact.info.phone': 'Telefón',
    'contact.info.headquarters': 'Sídlo spoločnosti',
    'contact.info.headquartersLabel': 'Sídlo',
    'contact.info.email': 'E-mail',
    'contact.info.centralOffice': 'Ústredňa',
    'contact.info.telFax': 'Tel./Fax:',
    'contact.info.orders': 'Objednávky, obchodné informácie',
    'contact.info.mobile': 'Mobilný telefón',
    'contact.info.ordersEmail': 'E-mail',
    'contact.info.billing': 'Fakturačne údaje',
    'contact.locations.title': 'Lokalizácie',
    'contact.locations.factory1': 'Továreň 1',
    'contact.locations.factory2': 'Továreň 2',
    'contact.locations.store': 'Predajňa',
    'contact.toast.title': 'Správa odoslaná!',
    'contact.toast.description': 'Čoskoro sa vám ozveme.',
    
    // Products
    'products.title': 'Naše výrobky',
    'products.more': 'Viac informácií',
    'products.back': 'Späť na výrobky',
    'products.usage': 'Použitie',
    'products.downloadPdf': 'Stiahnuť PDF',
    'products.packaging': 'Balenie',
    'products.description': 'Popis',
    
    // Footer
    'footer.company': 'CAPRIOVUS',
    'footer.rights': 'Všetky práva vyhradené.',
    'footer.contact': 'Kontakt',
    'footer.quicklinks': 'Rýchle odkazy',
    'footer.orders': 'Objednávky, Obchodné podmienky, Informácie',
    'footer.headquarters': 'Sídlo',
    'footer.store': 'Predajňa',
    'footer.openingHours': 'Otváracie hodiny',
    'footer.monThu': 'Pondelok-štvrtok',
    'footer.friday': 'Piatok',
    'footer.satSun': 'Sobota a nedeľa',
    'footer.closed': 'Zatvorené',
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
    'home.hero.badge': 'Quality Mark and BUREAU VERITAS Certificate',
    'home.hero.title': 'Products from Fresh Eggs',
    'home.hero.subtitle': 'If it is important for you to have quality egg products that meet the strictest quality and safety standards, then you are at the right address.',
    'home.hero.tagline': 'Welcome to Capriovus - your egg products supplier.',
    'home.hero.cta': 'Find out more',
    'home.intro.title': 'Quality Since 1993',
    'home.intro.text': 'DAUMA s.r.o. is a leading Slovak manufacturer of egg products. Our products meet the strictest quality and safety standards.',
    'home.categories.title': 'Our Products',
    'category.otherCategories': 'Other Products',
    
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
    'tenders.readMore': 'Read More',
    'tenders.back': 'Back to Tenders',
    'tenders.notFound': 'Tender not found',
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
    'contact.form.sending': 'Sending...',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Business Address',
    'contact.info.phone': 'Phone',
    'contact.info.headquarters': 'Headquarters',
    'contact.info.headquartersLabel': 'Headquarters',
    'contact.info.email': 'Email',
    'contact.info.centralOffice': 'Central Office',
    'contact.info.telFax': 'Tel./Fax:',
    'contact.info.orders': 'Orders, Business Information',
    'contact.info.mobile': 'Mobile Phone',
    'contact.info.ordersEmail': 'Email',
    'contact.info.billing': 'Billing Information',
    'contact.locations.title': 'Locations',
    'contact.locations.factory1': 'Factory 1',
    'contact.locations.factory2': 'Factory 2',
    'contact.locations.store': 'Store',
    'contact.toast.title': 'Message sent!',
    'contact.toast.description': "We'll get back to you as soon as possible.",
    
    // Products
    'products.title': 'Our Products',
    'products.more': 'More Information',
    'products.back': 'Back to Products',
    'products.usage': 'Usage',
    'products.downloadPdf': 'Download PDF',
    'products.packaging': 'Packaging',
    'products.description': 'Description',
    
    // Footer
    'footer.company': 'CAPRIOVUS',
    'footer.rights': 'All rights reserved.',
    'footer.contact': 'Contact',
    'footer.quicklinks': 'Quick Links',
    'footer.orders': 'Orders, Terms & Conditions, Information',
    'footer.headquarters': 'Headquarters',
    'footer.store': 'Store',
    'footer.openingHours': 'Opening Hours',
    'footer.monThu': 'Monday-Thursday',
    'footer.friday': 'Friday',
    'footer.satSun': 'Saturday and Sunday',
    'footer.closed': 'Closed',
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
    'home.hero.badge': 'Minőségjel és BUREAU VERITAS tanúsítvány',
    'home.hero.title': 'Friss tojásból készült termékek',
    'home.hero.subtitle': 'Ha fontos Önnek a minőségi tojástermékek, amelyek megfelelnek a legszigorúbb minőségi és biztonsági előírásoknak, akkor jó helyen jár.',
    'home.hero.tagline': 'Üdvözöljük a Capriovus-ban - tojástermék beszállítójánál.',
    'home.hero.cta': 'Tudjon meg többet',
    'home.intro.title': 'Minőség 1993 óta',
    'home.intro.text': 'A DAUMA s.r.o. Szlovákia vezető tojástermék-gyártója. Termékeink megfelelnek a legszigorúbb minőségi és biztonsági előírásoknak.',
    'home.categories.title': 'Termékeink',
    'category.otherCategories': 'További termékek',
    
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
    'tenders.readMore': 'További információ',
    'tenders.back': 'Vissza a pályázatokhoz',
    'tenders.notFound': 'A pályázat nem található',
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
    'contact.form.sending': 'Küldés...',
    'contact.info.title': 'Elérhetőségek',
    'contact.info.address': 'Telephely címe',
    'contact.info.phone': 'Telefon',
    'contact.info.headquarters': 'Székhely',
    'contact.info.headquartersLabel': 'Székhely',
    'contact.info.email': 'E-mail',
    'contact.info.centralOffice': 'Központi iroda',
    'contact.info.telFax': 'Tel./Fax:',
    'contact.info.orders': 'Rendelések, üzleti információk',
    'contact.info.mobile': 'Mobiltelefon',
    'contact.info.ordersEmail': 'E-mail',
    'contact.info.billing': 'Számlázási adatok',
    'contact.locations.title': 'Helyszínek',
    'contact.locations.factory1': 'Gyár 1',
    'contact.locations.factory2': 'Gyár 2',
    'contact.locations.store': 'Üzlet',
    'contact.toast.title': 'Üzenet elküldve!',
    'contact.toast.description': 'Hamarosan felvesszük Önnel a kapcsolatot.',
    
    // Products
    'products.title': 'Termékeink',
    'products.more': 'További információ',
    'products.back': 'Vissza a termékekhez',
    'products.usage': 'Felhasználás',
    'products.downloadPdf': 'PDF letöltése',
    'products.packaging': 'Csomagolás',
    'products.description': 'Leírás',
    
    // Footer
    'footer.company': 'CAPRIOVUS',
    'footer.rights': 'Minden jog fenntartva.',
    'footer.contact': 'Kapcsolat',
    'footer.quicklinks': 'Gyorslinkek',
    'footer.orders': 'Rendelések, Általános Szerződési Feltételek, Információk',
    'footer.headquarters': 'Székhely',
    'footer.store': 'Üzlet',
    'footer.openingHours': 'Nyitvatartás',
    'footer.monThu': 'Hétfő-csütörtök',
    'footer.friday': 'Péntek',
    'footer.satSun': 'Szombat és vasárnap',
    'footer.closed': 'Zárva',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.products': 'Produkte',
    'nav.tenders': 'Ausschreibungen',
    'nav.contact': 'Kontakt',
    
    // Product categories
    'category.liquid': 'Flüssige Eier',
    'category.boiled': 'Gekochte Eier',
    'category.dried': 'Getrocknete Eier',
    'category.sticks': 'Eierstäbchen',
    'category.totu': 'ToTu Marke',
    
    // Home page
    'home.hero.badge': 'Qualitätszeichen und BUREAU VERITAS Zertifikat',
    'home.hero.title': 'Produkte aus frischen Eiern',
    'home.hero.subtitle': 'Wenn es für Sie wichtig ist, qualitativ hochwertige Eiprodukte zu haben, die die strengsten Qualitäts- und Sicherheitsstandards erfüllen, dann sind Sie hier richtig.',
    'home.hero.tagline': 'Willkommen bei Capriovus - Ihrem Eiprodukte-Lieferanten.',
    'home.hero.cta': 'Mehr erfahren',
    'home.intro.title': 'Qualität seit 1993',
    'home.intro.text': 'DAUMA s.r.o. ist ein führender slowakischer Hersteller von Eiprodukten. Unsere Produkte erfüllen die strengsten Qualitäts- und Sicherheitsstandards.',
    'home.categories.title': 'Unsere Produkte',
    'category.otherCategories': 'Weitere Produkte',
    
    // About page
    'about.title': 'Über uns',
    'about.history.title': 'Unsere Geschichte',
    'about.history.text': 'DAUMA s.r.o. ist seit 1993 auf dem Markt für Eiprodukte tätig. Seit über 30 Jahren sind wir ein zuverlässiger Partner für die Lebensmittelindustrie in der Slowakei und im Ausland.',
    'about.mission.title': 'Unsere Mission',
    'about.mission.text': 'Kunden qualitativ hochwertige Eiprodukte zu liefern, die die strengsten Sicherheits- und Qualitätsstandards erfüllen. Wir innovieren kontinuierlich und erweitern unser Portfolio.',
    'about.intro': 'Unser Unternehmen im ausschließlichen Besitz ungarischer Gesellschafter kann auf eine mehr als ein Vierteljahrhundert lange Geschichte zurückblicken; im Jahr 1991 wurde die Gesellschaft in eine GmbH (Kft.) umgewandelt. Unsere Haupttätigkeit ist die Verarbeitung von Eiern, die Herstellung von Eiprodukten, die Verpackung von Eiern sowie die Verwertung von Nebenprodukten, die während des Verarbeitungsprozesses entstehen.\n\nIn unseren Werken stellen wir verschiedene flüssige pasteurisierte Eiprodukte, getrocknete Eiprodukte, Produkte aus geschälten gekochten Eiern, gekochten Eierstäbchen und Produkte mit desinfizierter Eierschale her. In unseren Verpackungsbetrieben beschäftigen wir uns mit der Sortierung und Verpackung frischer Eier.\n\nAus den bei der Verarbeitung entstehenden Nebenprodukten, aus Eierschale und aus Futtermitteltrockeneiern stellen wir Futtermittelprodukte her, die insbesondere für Haustiere entwickelt wurden.',
    'about.production.title': 'Produktion',
    'about.production.text': 'Der Sitz und gleichzeitig das Handelszentrum unseres Unternehmens befindet sich unter der Adresse 123 Example Street, 12345 Example City, Country, wo wir auch administrative Tätigkeiten ausüben.\n\nUnseren Laden finden Sie unter der Adresse 456 Main Avenue, 54321 Sample Town, Country.\n\nIn der Niederlassung in Example City betreiben wir mehrere getrennte Werke. In einem davon erfolgt die Herstellung flüssiger Eiprodukte und durch deren Trocknung die Produktion getrockneter Eiprodukte; im zweiten Werk werden geschälte gekochte Eier sowie Produkte aus Eierstäbchen zubereitet; im dritten erfolgt die Zubereitung von Produkten mit desinfizierter Eierschale; im vierten erfolgt die Herstellung von Lebensmitteln und Lebensmittelzusatzstoffen der Marke ToTu durch verschiedene Verarbeitung von Eiklar; und schließlich erfolgt im Werk zur Verwertung von Nebenprodukten die Herstellung von Futtermittelprodukten.\n\nUnser Unternehmen hat in den vergangenen Jahren eine dynamische Entwicklung durchlaufen, wodurch unser Umsatz sowie unsere Einnahmen um ein Vielfaches gestiegen sind; derzeit sind wir bereits in mehreren europäischen Ländern tätig.',
    'about.safety.title': 'Sicherheit',
    'about.safety.text': 'Unser Fuhrpark besteht aus modernen Geräten der Marken Sanovo, Bergmeier, Sondex und Actini, deren technische Ausstattung sowie technologische Zuverlässigkeit eine Garantie für die hohe Qualität der Produkte sind.\n\nDie Qualität der Produkte garantieren wir neben der kontinuierlichen Entwicklung der technologischen Ausstattung auch durch geeignete Qualitätsmanagementsysteme. In unseren Werken haben wir das Qualitätsmanagementsystem ISO 9002 im Jahr 1998 und ISO 9001 zusammen mit dem integrierten HAACP-System im Jahr 2002 implementiert. Die Wiederautorisierung der Systeme alle drei Jahre sowie die regelmäßige jährliche Zertifizierungsinspektion wurde (und wird) von der Zertifizierungsgesellschaft Bureau Veritas durchgeführt. Die Systeme verfolgen Änderungen der Standards in Übereinstimmung mit den geltenden Vorschriften; diese Tatsache wird von der Zertifizierungsgesellschaft überprüft und bestätigt. Die EU-Kontrollnummer des Werks zur Herstellung von Eifluid und Eipulver in Szigetcsép ist HU 343, und des Werks für gekochte Eier ist HU 913. Die Registrierungsnummer des Werks zur Desinfektion von Eierschale ist HU-12-TCS-008, der Werke zur Futtermittelherstellung HU 13 1 00135 und HU 13 1 00136.\n\nNeben der hervorragenden Qualität unserer Produkte halten wir es für wichtig, gute Beziehungen zu unseren Kunden aufzubauen und das gewonnene Vertrauen zu erhalten.\n\nUnsere Produkte werden mit maximaler Rücksicht auf die Anforderungen der Kunden im ganzen Land verteilt und auf der Grundlage besonderer Vereinbarungen ins Ausland geliefert. Unsere Handelsvertreter sind in jeder inländischen Region präsent. In den Nachbarländern haben wir bedeutende Partnerschaftsbeziehungen aufgebaut.\n\nDas Ergebnis unseres Bemühens ist, dass wir unter unseren Partnern fast alle ungarischen und mehrere bedeutende ausländische Lebensmittelverarbeitungsbetriebe haben.',
    'about.values.title': 'Unsere Werte',
    'about.values.quality': 'Qualität',
    'about.values.quality.text': 'Strenge Qualitätskontrollen in jedem Schritt der Produktion',
    'about.values.innovation': 'Innovation',
    'about.values.innovation.text': 'Kontinuierliche Verbesserung von Prozessen und Produkten',
    'about.values.trust': 'Vertrauen',
    'about.values.trust.text': 'Langfristige Partnerschaften auf Zuverlässigkeit aufgebaut',
    
    // Tenders page
    'tenders.title': 'Ausschreibungen und Förderungen',
    'tenders.current.title': 'Aktuelle Ausschreibungen',
    'tenders.archive.title': 'Archiv',
    'tenders.noactive': 'Derzeit gibt es keine aktiven Ausschreibungen.',
    'tenders.readMore': 'Mehr lesen',
    'tenders.back': 'Zurück zu Ausschreibungen',
    'tenders.notFound': 'Ausschreibung nicht gefunden',
    'tenders.contact.title': 'Haben Sie Fragen?',
    'tenders.contact.text': 'Kontaktieren Sie uns für weitere Informationen zu Ausschreibungen und Förderungen.',
    'tenders.contact.cta': 'Kontaktieren Sie uns',
    
    // Contact page
    'contact.title': 'Kontakt',
    'contact.form.title': 'Schreiben Sie uns',
    'contact.form.name': 'Name',
    'contact.form.email': 'E-Mail',
    'contact.form.message': 'Nachricht',
    'contact.form.submit': 'Nachricht senden',
    'contact.form.sending': 'Wird gesendet...',
    'contact.info.title': 'Kontaktinformationen',
    'contact.info.address': 'Geschäftsadresse',
    'contact.info.phone': 'Telefon',
    'contact.info.headquarters': 'Hauptsitz',
    'contact.info.headquartersLabel': 'Hauptsitz',
    'contact.info.email': 'E-Mail',
    'contact.info.centralOffice': 'Zentrale',
    'contact.info.telFax': 'Tel./Fax:',
    'contact.info.orders': 'Bestellungen, Geschäftsinformationen',
    'contact.info.mobile': 'Mobiltelefon',
    'contact.info.ordersEmail': 'E-Mail',
    'contact.info.billing': 'Rechnungsdaten',
    'contact.locations.title': 'Standorte',
    'contact.locations.factory1': 'Fabrik 1',
    'contact.locations.factory2': 'Fabrik 2',
    'contact.locations.store': 'Geschäft',
    'contact.toast.title': 'Nachricht gesendet!',
    'contact.toast.description': 'Wir werden uns so bald wie möglich bei Ihnen melden.',
    
    // Products
    'products.title': 'Unsere Produkte',
    'products.more': 'Weitere Informationen',
    'products.back': 'Zurück zu Produkten',
    'products.usage': 'Verwendung',
    'products.downloadPdf': 'PDF herunterladen',
    'products.packaging': 'Verpackung',
    'products.description': 'Beschreibung',
    
    // Footer
    'footer.company': 'CAPRIOVUS',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.contact': 'Kontakt',
    'footer.quicklinks': 'Schnelllinks',
    'footer.orders': 'Bestellungen, Allgemeine Geschäftsbedingungen, Informationen',
    'footer.headquarters': 'Hauptsitz',
    'footer.store': 'Geschäft',
    'footer.openingHours': 'Öffnungszeiten',
    'footer.monThu': 'Montag-Donnerstag',
    'footer.friday': 'Freitag',
    'footer.satSun': 'Samstag und Sonntag',
    'footer.closed': 'Geschlossen',
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
