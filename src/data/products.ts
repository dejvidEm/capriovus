export interface Product {
  id: string;
  categoryId: string;
  subcategoryId?: string; // Optional: for products that belong to a subcategory
  name: {
    sk: string;
    en: string;
    hu: string;
  };
  description: {
    sk: string;
    en: string;
    hu: string;
  };
  usage: {
    sk: string;
    en: string;
    hu: string;
  };
  packaging: {
    sk: string;
    en: string;
    hu: string;
  };
  images?: string[]; // Optional: array of image paths from public folder
  pdfPath?: string; // Optional: path to PDF file in public folder
}

export interface Subcategory {
  id: string;
  slug: string;
  name: {
    sk: string;
    en: string;
    hu: string;
  };
  description?: {
    sk: string;
    en: string;
    hu: string;
  };
  image?: string;
  imagePath?: string;
}

export interface Category {
  id: string;
  slug: string;
  name: {
    sk: string;
    en: string;
    hu: string;
  };
  description: {
    sk: string;
    en: string;
    hu: string;
  };
  image: string;
  imagePath?: string;
  subcategories?: Subcategory[];
}

export const categories: Category[] = [
  {
    id: 'liquid',
    slug: 'liquid-eggs',
    name: {
      sk: 'Tekuté vajcia',
      en: 'Liquid Eggs',
      hu: 'Folyékony tojás',
    },
    description: {
      sk: 'Vysoko kvalitné tekuté vaječné produkty pre potravinársky priemysel.',
      en: 'High-quality liquid egg products for the food industry.',
      hu: 'Kiváló minőségű folyékony tojástermékek az élelmiszeripar számára.',
    },
    image: 'liquid',
    imagePath: '/1.png',
    subcategories: [
      {
        id: 'liquid-whole-100',
        slug: 'liquid-whole-100',
        name: {
          sk: 'Pasterizované tekuté\nvajcia zo 100% vajec',
          en: 'Pasteurized liquid eggs\nfrom 100% eggs',
          hu: 'Pasztőrözött folyékony tojás\n100% tojásból',
        },
        image: 'liquid',
      },
      {
        id: 'liquid-yolk',
        slug: 'liquid-yolk',
        name: {
          sk: 'Pasterizované tekuté\nvajcia z vaječných žĺtok',
          en: 'Pasteurized liquid eggs\nfrom egg yolks',
          hu: 'Pasztőrözött folyékony tojás\ntojássárgájából',
        },
        image: 'liquid',
      },
      {
        id: 'liquid-white',
        slug: 'liquid-white',
        name: {
          sk: 'Pasterizované tekuté\nvajcia z vaječných bielkov',
          en: 'Pasteurized liquid eggs\nfrom egg whites',
          hu: 'Pasztőrözött folyékony tojás\ntojásfehérjéből',
        },
        image: 'liquid',
      },
      {
        id: 'liquid-spec11',
        slug: 'liquid-spec11',
        name: {
          sk: 'Pasterizované tekuté\nvajcia zo 100% vajec Spec\'11',
          en: 'Pasteurized liquid eggs\nfrom 100% eggs Spec\'11',
          hu: 'Pasztőrözött folyékony tojás\n100% tojásból Spec\'11',
        },
        image: 'liquid',
      },
    ],
  },
  {
    id: 'totu',
    slug: 'totu-brand',
    name: {
      sk: 'Výrobky značky TOTU',
      en: 'ToTu Brand',
      hu: 'ToTu márka',
    },
    description: {
      sk: 'Prémiové produkty značky ToTu pre náročných spotrebiteľov.',
      en: 'Premium ToTu brand products for discerning consumers.',
      hu: 'Prémium ToTu márkás termékek az igényes fogyasztók számára.',
    },
    image: 'totu',
    imagePath: '/3.png',
    subcategories: [
      {
        id: 'totu-product-clumps',
        slug: 'totu-product-clumps',
        name: {
          sk: 'ToTu výrobok z vaječných\nbielkov s hrudkami',
          en: 'ToTu product from egg\nwhites with clumps',
          hu: 'ToTu termék tojásfehérjéből\ngombóccsal',
        },
        description: {
          sk: '1 kg výrobku obsahuje vaječné bielky z 60-70 kusov vajec priemernej hmotnosti. Vyrábaný z vaječných bielkov, jedlej soli a konzumného octu, s 0,4% obsahom sacharidov a 0,4% obsahom soli. Balenie s ochranným štítkom zabezpečuje trvanlivosť do 30 dní. Vyrábaný v baleniach s hmotnosťou 100, 250 a 600 g.\n\n\n\nNÁVOD NA KONZUMÁCIU, VÝHODY:\n\n\n\nNaše heslo: „ToTu – dokonalosť prírody".\n\nVaječné bielky sú jedným z najdokonalejších zdrojov bielkovín; sú prírodným produktom bohatým na esenciálne aminokyseliny. Obsah bielkovín v sušine je 95%. Výrobok neobsahuje mliečne deriváty, napriek tomu však disponuje príjemnou chuťou podobnou tvarohu z kravského mlieka. Mnohostranný výrobok vhodný pre prípravu jedál vo všetkých oblastiach zdravého stravovania. Vhodný pre kulturistov pre zvýšenie príjmu bielkovín, ako aj pre osoby s laktózovou intoleranciou a paleolitickou diétou ako náhrada tvarohu z kravského mlieka. Energetická hodnota 330 kJ (78 kcal)/100 g výrobku, s 0% obsahom tuku.',
          en: '1 kg of product contains egg whites from 60-70 eggs of average weight. Made from egg whites, table salt and vinegar, with 0.4% carbohydrate content and 0.4% salt content. Packaging with protective shield ensures shelf life of up to 30 days. Manufactured in packages with weight of 100, 250 and 600 g.\n\n\n\nCONSUMPTION INSTRUCTIONS, ADVANTAGES:\n\n\n\nOur motto: "ToTu – perfection of nature".\n\nEgg whites are one of the most perfect sources of protein; they are a natural product rich in essential amino acids. Protein content in dry matter is 95%. The product does not contain dairy derivatives, yet it has a pleasant taste similar to cottage cheese from cow\'s milk. Versatile product suitable for preparing meals in all areas of healthy eating. Suitable for bodybuilders to increase protein intake, as well as for people with lactose intolerance and paleolithic diet as a replacement for cottage cheese from cow\'s milk. Energy value 330 kJ (78 kcal)/100 g of product, with 0% fat content.',
          hu: '1 kg termék 60-70 átlagos tömegű tojás tojásfehérjét tartalmazza. Tojásfehérjéből, étkezési sóból és ecetből készül, 0,4% szénhidráttartalommal és 0,4% sótartalommal. Védőpajzzsal ellátott csomagolás 30 napos eltarthatóságot biztosít. 100, 250 és 600 g tömegű csomagolásokban gyártják.\n\n\n\nFOGYASZTÁSI ÚTMUTATÓ, ELŐNYÖK:\n\n\n\nMottónk: „ToTu – a természet tökéletessége".\n\nA tojásfehérje az egyik legtökéletesebb fehérjeforrás; esszenciális aminósavakban gazdag természetes termék. A szárazanyagban lévő fehérjetartalom 95%. A termék nem tartalmaz tejtermékeket, mégis kellemes íze van, hasonló a tehéntejből készült túróhoz. Sokoldalú termék, amely alkalmas egészséges táplálkozás minden területén történő ételek elkészítésére. Alkalmas testépítők számára a fehérjebevitel növelésére, valamint laktóz intoleranciával és paleolitikus diétával rendelkező személyek számára a tehéntejből készült túró helyettesítésére. Energiaérték 330 kJ (78 kcal)/100 g termék, 0% zsírtartalommal.',
        },
        image: 'totu',
      },
      {
        id: 'totu-cream',
        slug: 'totu-cream',
        name: {
          sk: 'ToTu krém\nz vaječných bielkov',
          en: 'ToTu cream\nfrom egg whites',
          hu: 'ToTu krém\ntojásfehérjéből',
        },
        description: {
          sk: 'ToTu krém je vyrábaný z vaječných bielkov, jedlej soli, konzumného octu a proteázy. 1 kg výrobku obsahuje vaječné bielky z 45-55 kusov vajec priemernej hmotnosti. ToTu krém je roztierateľný výrobok, ktorý má zároveň masívnu konzistenciu.\n\n\n\nNÁVOD NA KONZUMÁCIU, VÝHODY:\n\n\n\nKonzistencia ToTu krému pripomína maslovú nátierku; môžete ľubovoľne ochucovať. Je výbornou voľbou pre športovcov a kulturistov vďaka vysokému obsahu prírodných bielkovín, ako aj ľahkej stráviteľnosti. Obsah bielkovín vo výrobku je 15%. Odporúčame pre osoby s laktózovou intoleranciou. Je neodmysliteľnou prísadou pre prípravu paleolitických výrobkov, najmä zákuskov.',
          en: 'ToTu cream is made from egg whites, table salt, vinegar and protease. 1 kg of product contains egg whites from 45-55 eggs of average weight. ToTu cream is a spreadable product that also has a massive consistency.\n\n\n\nCONSUMPTION INSTRUCTIONS, ADVANTAGES:\n\n\n\nThe consistency of ToTu cream resembles butter spread; you can flavor it as you like. It is an excellent choice for athletes and bodybuilders thanks to its high content of natural proteins, as well as easy digestibility. Protein content in the product is 15%. Recommended for people with lactose intolerance. It is an indispensable ingredient for preparing paleolithic products, especially pastries.',
          hu: 'A ToTu krém tojásfehérjéből, étkezési sóból, ecetből és proteázból készül. 1 kg termék 45-55 átlagos tömegű tojás tojásfehérjét tartalmazza. A ToTu krém kenhető termék, amelynek egyben masszív konzisztenciája van.\n\n\n\nFOGYASZTÁSI ÚTMUTATÓ, ELŐNYÖK:\n\n\n\nA ToTu krém konzisztenciája a vajkrémre emlékeztet; tetszés szerint fűszerezhető. Kiváló választás sportolók és testépítők számára a magas természetes fehérjetartalomnak, valamint a könnyű emészthetőségnek köszönhetően. A termék fehérjetartalma 15%. Laktóz intoleranciával rendelkező személyek számára ajánlott. Elengedhetetlen összetevő paleolitikus termékek, különösen sütemények elkészítéséhez.',
        },
        image: 'totu',
      },
      {
        id: 'totu-extra-thick',
        slug: 'totu-extra-thick',
        name: {
          sk: 'ToTu extra hustý\nkrém z vaječných bielkov',
          en: 'ToTu extra thick\ncream from egg whites',
          hu: 'ToTu extra sűrű\nkrém tojásfehérjéből',
        },
        description: {
          sk: 'ToTu extra hustý krém je vyrábaný z vaječných bielkov, jedlej soli, konzumného octu a proteázy. 1 kg výrobku obsahuje vaječné bielky z 45-55 kusov vajec priemernej hmotnosti. Konzistencia výrobku pripomína kyslú smotanu.\n\n\n\nNÁVOD NA KONZUMÁCIU, VÝHODY:\n\n\n\nVďaka jemnému okysľovaniu pomocou citrónu pripomína kyslú smotanou aj chuťou; môžete ľubovoľne ochucovať. Je výbornou voľbou pre športovcov a kulturistov vďaka vysokému obsahu prírodných bielkovín, ako aj ľahkej stráviteľnosti. Obsah bielkovín vo výrobku je 15%. Odporúčame pre osoby s laktózovou intoleranciou. Je neodmysliteľnou náhradou kyslej smotany pri príprave paleolitických jedál.',
          en: 'ToTu extra thick cream is made from egg whites, table salt, vinegar and protease. 1 kg of product contains egg whites from 45-55 eggs of average weight. The consistency of the product resembles sour cream.\n\n\n\nCONSUMPTION INSTRUCTIONS, ADVANTAGES:\n\n\n\nThanks to gentle acidification with lemon, it also resembles sour cream in taste; you can flavor it as you like. It is an excellent choice for athletes and bodybuilders thanks to its high content of natural proteins, as well as easy digestibility. Protein content in the product is 15%. Recommended for people with lactose intolerance. It is an indispensable replacement for sour cream when preparing paleolithic meals.',
          hu: 'A ToTu extra sűrű krém tojásfehérjéből, étkezési sóból, ecetből és proteázból készül. 1 kg termék 45-55 átlagos tömegű tojás tojásfehérjét tartalmazza. A termék konzisztenciája a tejfölre emlékeztet.\n\n\n\nFOGYASZTÁSI ÚTMUTATÓ, ELŐNYÖK:\n\n\n\nA citrommal történő finom savanyításnak köszönhetően ízben is a tejfölre emlékeztet; tetszés szerint fűszerezhető. Kiváló választás sportolók és testépítők számára a magas természetes fehérjetartalomnak, valamint a könnyű emészthetőségnek köszönhetően. A termék fehérjetartalma 15%. Laktóz intoleranciával rendelkező személyek számára ajánlott. Elengedhetetlen helyettesítője a tejfölnek paleolitikus ételek elkészítésénél.',
        },
        image: 'totu',
      },
      {
        id: 'totu-drink',
        slug: 'totu-drink',
        name: {
          sk: 'ToTu nápoj\nz vaječných bielkov',
          en: 'ToTu drink\nfrom egg whites',
          hu: 'ToTu ital\ntojásfehérjéből',
        },
        description: {
          sk: 'ToTu nápoj je vyrábaný z vaječných bielkov, jedlej soli, konzumného octu a proteázy. Konzistencia, farba, a do určitej miery aj chuť výrobku pripomína najmä trvanlivé mlieko.\n\n\n\nNÁVOD NA KONZUMÁCIU, VÝHODY:\n\n\n\nMôžete ľubovoľne ochucovať. Je výbornou voľbou pre športovcov a kulturistov vďaka vysokému obsahu prírodných bielkovín, ako aj ľahkej stráviteľnosti. Obsah bielkovín vo výrobku je 5,6%.\n\nOdporúčame pre osoby s laktózovou intoleranciou. Vhodný pre prípravu nápojov bez mlieka, ako sladidlo do kávy alebo prísada do zakysaných prípravkov.',
          en: 'ToTu drink is made from egg whites, table salt, vinegar and protease. The consistency, color, and to some extent also the taste of the product resembles especially long-life milk.\n\n\n\nCONSUMPTION INSTRUCTIONS, ADVANTAGES:\n\n\n\nYou can flavor it as you like. It is an excellent choice for athletes and bodybuilders thanks to its high content of natural proteins, as well as easy digestibility. Protein content in the product is 5.6%.\n\nRecommended for people with lactose intolerance. Suitable for preparing milk-free drinks, as a sweetener for coffee or an additive to fermented preparations.',
          hu: 'A ToTu ital tojásfehérjéből, étkezési sóból, ecetből és proteázból készül. A termék konzisztenciája, színe és bizonyos mértékben íze is főleg a hosszú élettartamú tejet emlékezteti.\n\n\n\nFOGYASZTÁSI ÚTMUTATÓ, ELŐNYÖK:\n\n\n\nTetszés szerint fűszerezhető. Kiváló választás sportolók és testépítők számára a magas természetes fehérjetartalomnak, valamint a könnyű emészthetőségnek köszönhetően. A termék fehérjetartalma 5,6%.\n\nLaktóz intoleranciával rendelkező személyek számára ajánlott. Alkalmas tej nélküli italok elkészítésére, kávé édesítőként vagy erjesztett készítmények adalékanyagaként.',
        },
        image: 'totu',
      },
    ],
  },
  {
    id: 'boiled',
    slug: 'boiled-eggs',
    name: {
      sk: 'Varené vajcia',
      en: 'Boiled Eggs',
      hu: 'Főtt tojás',
    },
    description: {
      sk: 'Čerstvo varené a ošúpané vajcia pripravené na okamžité použitie.',
      en: 'Freshly boiled and peeled eggs ready for immediate use.',
      hu: 'Frissen főtt és hámozott tojások, azonnal felhasználhatók.',
    },
    image: 'boiled',
    imagePath: '/2.png',
    subcategories: [
      {
        id: 'boiled-peeled-brine',
        slug: 'boiled-peeled-brine',
        name: {
          sk: 'Varené lúpané vajcia\nna tvrdo v slanom náleve',
          en: 'Hard-boiled peeled eggs\nin salt brine',
          hu: 'Keményre főtt hámozott tojás\nsós lében',
        },
        description: {
          sk: 'Varené lúpané vajcia na tvrdo v jemne slanom a kyslom náleve. Kategórie hmotnosti: „S"-„M". Balené do plastových nádob po 60, 30 a 10 kusoch s trvanlivosťou 35 dní, resp. sáčkov po 4 kusoch s trvanlivosťou 90 dní.\n\n\n\nNÁVOD NA KONZUMÁCIU, VÝHODY:\n\n\n\nVarené vajcia bežne používané v gastronómii ponúkame v slanom náleve. Výrobok obsahuje vajcia vyberané a spracované za prísnych podmienok systému manažérstva kvality. Tepelné opracovanie a moderné balenie zaručuje maximálnu bezpečnosť, a skladovanie pri vhodnej teplote (0 až +4°C) aj dlhú trvanlivosť. Vhodný pre všetky tradičné oblasti použitia varených vajec: pri veľkokapacitnom stravovaní, výrobe studených jedál a v domácnostiach. Výrobok sa ľahko krája, plátky sa nerozpadnú, a žĺtok sa nezafarbí. Použitím varených vajec môžete zabudnúť na nákladnú dezinfekciu, ako aj na fyzicky a časovo náročné varenie a lúpanie.',
          en: 'Hard-boiled peeled eggs in lightly salted and acidic brine. Weight categories: "S"-"M". Packed in plastic containers of 60, 30 and 10 pieces with shelf life of 35 days, or bags of 4 pieces with shelf life of 90 days.\n\n\n\nCONSUMPTION INSTRUCTIONS, ADVANTAGES:\n\n\n\nBoiled eggs commonly used in gastronomy we offer in salt brine. The product contains eggs selected and processed under strict conditions of the quality management system. Heat treatment and modern packaging ensures maximum safety, and storage at appropriate temperature (0 to +4°C) also long shelf life. Suitable for all traditional areas of use of boiled eggs: in large-capacity catering, production of cold dishes and in households. The product cuts easily, slices do not fall apart, and the yolk does not discolor. By using boiled eggs you can forget about expensive disinfection, as well as physically and time-consuming cooking and peeling.',
          hu: 'Keményre főtt hámozott tojás enyhén sós és savas lében. Súlykategóriák: „S"-„M". Műanyag edényekben 60, 30 és 10 darab, 35 napos eltarthatósággal, illetve zacskókban 4 darab, 90 napos eltarthatósággal csomagolva.\n\n\n\nFOGYASZTÁSI ÚTMUTATÓ, ELŐNYÖK:\n\n\n\nA gasztronómiában általánosan használt főtt tojásokat sós lében kínáljuk. A termék szigorú minőségirányítási rendszer feltételei között kiválasztott és feldolgozott tojásokat tartalmaz. A hőkezelés és a modern csomagolás maximális biztonságot biztosít, és a megfelelő hőmérsékleten (0 és +4°C) történő tárolás hosszú eltarthatóságot is garantál. Alkalmas a főtt tojások minden hagyományos felhasználási területére: nagy kapacitású vendéglátásban, hideg ételek előállításában és háztartásokban. A termék könnyen vágható, a szeletek nem esnek szét, és a sárgája nem színeződik el. A főtt tojások használatával elfelejtheti a költséges fertőtlenítést, valamint a fizikailag és időben igényes főzést és hámozást.',
        },
        image: 'boiled',
        imagePath: '/varene/1.png',
      },
    ],
  },
  {
    id: 'dried',
    slug: 'dried-eggs',
    name: {
      sk: 'Sušené vajcia',
      en: 'Dried Eggs',
      hu: 'Szárított tojás',
    },
    description: {
      sk: 'Vaječný prášok s dlhou trvanlivosťou pre rôzne aplikácie.',
      en: 'Egg powder with long shelf life for various applications.',
      hu: 'Hosszú eltarthatósági idejű tojáspor különféle alkalmazásokhoz.',
    },
    image: 'dried',
    imagePath: '/6.png',
    subcategories: [
      {
        id: 'dried-whole-100',
        slug: 'dried-whole-100',
        name: {
          sk: 'Sušené vajcia\nzo 100% vajec',
          en: 'Dried eggs\nfrom 100% eggs',
          hu: 'Szárított tojás\n100% tojásból',
        },
        description: {
          sk: '1 kg sušených vajec zo 100% vajec obsahuje sušenú náplň 88-90 kusov vajec, vyrábanú procesom práškového sušenia. Návod na opätovné riedenie: 1 odmerku sušených vajec zo 100% vajec rozmiešajte s 3 odmerkami pitnej vody na jednotnú zmes bez hrudiek. Plnený do papierových sáčkov s polyetylénovou fóliou s hmotnosťou 20 kg, resp. 5 kg. S trvanlivosťou do 24 mesiacov.\n\n\n\nNÁVOD NA KONZUMÁCIU, VÝHODY:\n\n\n\nSušené vajcia z 100% vajec je výbornou voľbou pre prípravu suchých a iných cestovín, pečiva, majonézy, omelety, polevy, obaľovaných výrobkov, palaciniek, polievok, omáčok, sladkostí a konzerv. V dôsledku šetrného sušenia sa fyzické a chemické vlastnosti opätovne riedeného výrobku pri použití takmer zhodujú s vlastnosťami čerstvých vajec. Pri použití sušených vajec zo 100% vajec nepotrebujete veľkokapacitné vaječné sklady ani chladiace jednotky; postačuje miestnosť, v ktorej dokážete zabezpečiť skladovanie na chladnom a suchom mieste, mimo priameho slnečného žiarenia. Vďaka dlhej trvanlivosti objem potrebných surovín nemusíte presne a vopred naplánovať; môžete presne vyhovieť aj nečakaným objednávkam.',
          en: '1 kg of dried eggs from 100% eggs contains dried filling of 88-90 eggs, produced by powder drying process. Rehydration instructions: Mix 1 measure of dried eggs from 100% eggs with 3 measures of drinking water into a uniform mixture without lumps. Filled into paper bags with polyethylene film with weight of 20 kg, or 5 kg. With shelf life of up to 24 months.\n\n\n\nCONSUMPTION INSTRUCTIONS, ADVANTAGES:\n\n\n\nDried eggs from 100% eggs is an excellent choice for preparing dry and other pasta, baked goods, mayonnaise, omelets, glazes, breaded products, pancakes, soups, sauces, sweets and preserves. Due to gentle drying, the physical and chemical properties of the rehydrated product when used almost match the properties of fresh eggs. When using dried eggs from 100% eggs you do not need large-capacity egg storage or cooling units; a room where you can ensure storage in a cool and dry place, away from direct sunlight, is sufficient. Thanks to long shelf life, you do not have to precisely plan the volume of needed raw materials in advance; you can precisely meet even unexpected orders.',
          hu: '1 kg 100% tojásból készült szárított tojás 88-90 tojás szárított töltelékét tartalmazza, porlasztó szárítási folyamattal előállítva. Újrahidratálási útmutató: 1 mérték 100% tojásból készült szárított tojást keverjen össze 3 mérték ivóvízzel egyenletes, csomómentes keverékké. Polietilén fóliával ellátott papírzacskókba töltve 20 kg, illetve 5 kg tömeggel. Legfeljebb 24 hónapos eltarthatósággal.\n\n\n\nFOGYASZTÁSI ÚTMUTATÓ, ELŐNYÖK:\n\n\n\nA 100% tojásból készült szárított tojás kiváló választás száraz és egyéb tészták, pékáruk, majonéz, omlett, mázak, panírozott termékek, palacsinta, levesek, szószok, édességek és konzervek elkészítéséhez. A finom szárításnak köszönhetően az újrahidratált termék fizikai és kémiai tulajdonságai használatkor szinte megegyeznek a friss tojások tulajdonságaival. A 100% tojásból készült szárított tojás használatakor nincs szükség nagy kapacitású tojásraktárakra vagy hűtőegységekre; elegendő egy helyiség, ahol biztosítható a tárolás hűvös és száraz helyen, közvetlen napfénytől távol. A hosszú eltarthatóságnak köszönhetően nem kell pontosan és előre megtervezni a szükséges nyersanyagok mennyiségét; pontosan megfelelhet még váratlan rendeléseknek is.',
        },
        image: 'dried',
      },
      {
        id: 'dried-yolk',
        slug: 'dried-yolk',
        name: {
          sk: 'Sušené vaječné žĺtky',
          en: 'Dried egg yolks',
          hu: 'Szárított tojássárgája',
        },
        description: {
          sk: '1 kg sušených vaječných žĺtkov obsahuje sušené vaječné žĺtky 120-140 kusov vajec, vyrábaných procesom práškového sušenia. Návod na opätovné riedenie: 1 odmerku sušených vaječných žĺtkov rozmiešajte s 1,3 odmerkami pitnej vody na jednotnú zmes bez hrudiek. Plnený do papierových sáčkov s polyetylénovou fóliou s hmotnosťou 10 kg. S trvanlivosťou do 24 mesiacov.\n\n\n\nNÁVOD NA KONZUMÁCIU, VÝHODY:\n\n\n\nSušené vaječné žĺtky sú výbornou voľbou pre výrobu sladkostí, pekárenských výrobkov, polevy, polievok, omáčok a konzerv. V dôsledku šetrného sušenia sa fyzické a chemické vlastnosti opätovne riedeného výrobku pri použití takmer zhodujú s vlastnosťami čerstvých vaječných žĺtkov. Pri použití sušených vaječných žĺtkov nepotrebujete veľkokapacitné vaječné sklady ani chladiace jednotky; postačuje miestnosť, v ktorej dokážete zabezpečiť skladovanie na chladnom a suchom mieste, mimo priameho slnečného žiarenia. Použitím výrobku môžete pomer bielkov a žĺtok ľubovoľne upraviť, keďže si môžete zvlášť objednať sušené vaječné bielka, ako aj žĺtky. Vďaka dlhej trvanlivosť objem potrebných surovín nemusíte presne a vopred naplánovať; môžete včas splniť aj nečakané objednávky.',
          en: '1 kg of dried egg yolks contains dried egg yolks from 120-140 eggs, produced by powder drying process. Rehydration instructions: Mix 1 measure of dried egg yolks with 1.3 measures of drinking water into a uniform mixture without lumps. Filled into paper bags with polyethylene film with weight of 10 kg. With shelf life of up to 24 months.\n\n\n\nCONSUMPTION INSTRUCTIONS, ADVANTAGES:\n\n\n\nDried egg yolks are an excellent choice for making sweets, baked goods, glazes, soups, sauces and preserves. Due to gentle drying, the physical and chemical properties of the rehydrated product when used almost match the properties of fresh egg yolks. When using dried egg yolks you do not need large-capacity egg storage or cooling units; a room where you can ensure storage in a cool and dry place, away from direct sunlight, is sufficient. By using the product you can adjust the ratio of whites and yolks as you like, since you can separately order dried egg whites as well as yolks. Thanks to long shelf life, you do not have to precisely plan the volume of needed raw materials in advance; you can meet unexpected orders in time.',
          hu: '1 kg szárított tojássárgája 120-140 tojás szárított tojássárgáját tartalmazza, porlasztó szárítási folyamattal előállítva. Újrahidratálási útmutató: 1 mérték szárított tojássárgáját keverjen össze 1,3 mérték ivóvízzel egyenletes, csomómentes keverékké. Polietilén fóliával ellátott papírzacskókba töltve 10 kg tömeggel. Legfeljebb 24 hónapos eltarthatósággal.\n\n\n\nFOGYASZTÁSI ÚTMUTATÓ, ELŐNYÖK:\n\n\n\nA szárított tojássárgája kiváló választás édességek, pékáruk, mázak, levesek, szószok és konzervek előállításához. A finom szárításnak köszönhetően az újrahidratált termék fizikai és kémiai tulajdonságai használatkor szinte megegyeznek a friss tojássárgája tulajdonságaival. A szárított tojássárgája használatakor nincs szükség nagy kapacitású tojásraktárakra vagy hűtőegységekre; elegendő egy helyiség, ahol biztosítható a tárolás hűvös és száraz helyen, közvetlen napfénytől távol. A termék használatával tetszés szerint módosíthatja a fehérjék és sárgáják arányát, mivel külön rendelhet szárított tojásfehérjét és sárgáját is. A hosszú eltarthatóságnak köszönhetően nem kell pontosan és előre megtervezni a szükséges nyersanyagok mennyiségét; időben megfelelhet még váratlan rendeléseknek is.',
        },
        image: 'dried',
      },
      {
        id: 'dried-white',
        slug: 'dried-white',
        name: {
          sk: 'Sušené vaječné bielky',
          en: 'Dried egg whites',
          hu: 'Szárított tojásfehérje',
        },
        description: {
          sk: '1 kg sušených vaječných bielkov obsahuje vaječné bielky 240-260 kusov vajec, vyrábaných procesom práškového sušenia. Návod na opätovné riedenie: 1 odmerku sušených vaječných bielkov rozmiešajte s 8 odmerkami pitnej vody na jednotnú zmes bez hrudiek. Plnený do papierových sáčkov s polyetylénovou fóliou s hmotnosťou 10 kg alebo 3 kg, resp. do plastových fliaš opatrených ochranným štítkom s hmotnosťou náplne 1 kg, 0,5 kg alebo 0,15 kg. S trvanlivosťou do 24 mesiacov.\n\n\n\nNÁVOD NA KONZUMÁCIU, VÝHODY:\n\n\n\nSušené vaječné bielky sú výbornou voľbou pre výrobu sladkostí, pekárenských výrobkov a mäsitých jedál. V dôsledku šetrného sušenia sa fyzické a chemické vlastnosti opätovne riedeného výrobku pri použití takmer zhodujú s vlastnosťami čerstvých vaječných bielkov. Pri použití sušených vaječných bielkov nepotrebujete veľkokapacitné vaječné sklady ani chladiace jednotky; postačuje miestnosť, v ktorej dokážete zabezpečiť skladovanie na chladnom a suchom mieste, mimo priameho slnečného žiarenia. Použitím výrobku môžete pomer bielkov a žĺtok ľubovoľne upraviť, keďže si môžete zvlášť objednať sušené vaječné bielka, ako aj žĺtky. Vďaka dlhej trvanlivosť objem potrebných surovín nemusíte presne a vopred naplánovať; môžete včas splniť aj nečakané objednávky.',
          en: '1 kg of dried egg whites contains egg whites from 240-260 eggs, produced by powder drying process. Rehydration instructions: Mix 1 measure of dried egg whites with 8 measures of drinking water into a uniform mixture without lumps. Filled into paper bags with polyethylene film with weight of 10 kg or 3 kg, or into plastic bottles equipped with protective shield with filling weight of 1 kg, 0.5 kg or 0.15 kg. With shelf life of up to 24 months.\n\n\n\nCONSUMPTION INSTRUCTIONS, ADVANTAGES:\n\n\n\nDried egg whites are an excellent choice for making sweets, baked goods and meat dishes. Due to gentle drying, the physical and chemical properties of the rehydrated product when used almost match the properties of fresh egg whites. When using dried egg whites you do not need large-capacity egg storage or cooling units; a room where you can ensure storage in a cool and dry place, away from direct sunlight, is sufficient. By using the product you can adjust the ratio of whites and yolks as you like, since you can separately order dried egg whites as well as yolks. Thanks to long shelf life, you do not have to precisely plan the volume of needed raw materials in advance; you can meet unexpected orders in time.',
          hu: '1 kg szárított tojásfehérje 240-260 tojás tojásfehérjét tartalmazza, porlasztó szárítási folyamattal előállítva. Újrahidratálási útmutató: 1 mérték szárított tojásfehérjét keverjen össze 8 mérték ivóvízzel egyenletes, csomómentes keverékké. Polietilén fóliával ellátott papírzacskókba töltve 10 kg vagy 3 kg tömeggel, illetve védőpajzzsal ellátott műanyag palackokba 1 kg, 0,5 kg vagy 0,15 kg töltelék tömeggel. Legfeljebb 24 hónapos eltarthatósággal.\n\n\n\nFOGYASZTÁSI ÚTMUTATÓ, ELŐNYÖK:\n\n\n\nA szárított tojásfehérje kiváló választás édességek, pékáruk és húsételek előállításához. A finom szárításnak köszönhetően az újrahidratált termék fizikai és kémiai tulajdonságai használatkor szinte megegyeznek a friss tojásfehérje tulajdonságaival. A szárított tojásfehérje használatakor nincs szükség nagy kapacitású tojásraktárakra vagy hűtőegységekre; elegendő egy helyiség, ahol biztosítható a tárolás hűvös és száraz helyen, közvetlen napfénytől távol. A termék használatával tetszés szerint módosíthatja a fehérjék és sárgáják arányát, mivel külön rendelhet szárított tojásfehérjét és sárgáját is. A hosszú eltarthatóságnak köszönhetően nem kell pontosan és előre megtervezni a szükséges nyersanyagok mennyiségét; időben megfelelhet még váratlan rendeléseknek is.',
        },
        image: 'dried',
      },
    ],
  },
  {
    id: 'sticks',
    slug: 'egg-sticks',
    name: {
      sk: 'Vaječné tyčinky',
      en: 'Egg Sticks',
      hu: 'Tojásrudak',
    },
    description: {
      sk: 'Inovatívne vaječné tyčinky ideálne pre catering a reštaurácie.',
      en: 'Innovative egg sticks ideal for catering and restaurants.',
      hu: 'Innovatív tojásrudak, ideálisak a vendéglátás és éttermek számára.',
    },
    image: 'sticks',
    imagePath: '/7.png',
    subcategories: [
      {
        id: 'sticks-whole-100',
        slug: 'sticks-whole-100',
        name: {
          sk: 'Vaječné tyčinky\nvarené zo 100% vajec',
          en: 'Egg sticks\nboiled from 100% eggs',
          hu: 'Tojásrudak\n100% tojásból főzve',
        },
        image: 'sticks',
        imagePath: '/tycinky/1.png',
      },
      {
        id: 'sticks-white',
        slug: 'sticks-white',
        name: {
          sk: 'Vaječné tyčinky\nz varených vaječných bielkov',
          en: 'Egg sticks\nfrom boiled egg whites',
          hu: 'Tojásrudak\nfőtt tojásfehérjéből',
        },
        image: 'sticks',
        imagePath: '/tycinky/2.png',
      },
      {
        id: 'sticks-yolk',
        slug: 'sticks-yolk',
        name: {
          sk: 'Vaječné tyčinky\nz varených vaječných žĺtkov',
          en: 'Egg sticks\nfrom boiled egg yolks',
          hu: 'Tojásrudak\nfőtt tojássárgájából',
        },
        image: 'sticks',
        imagePath: '/tycinky/3.png',
      },
      {
        id: 'sticks-body',
        slug: 'sticks-body',
        name: {
          sk: 'Vajcia Body',
          en: 'Egg Body',
          hu: 'Tojás Body',
        },
        image: 'sticks',
        imagePath: '/tycinky/4.png',
      },
    ],
  },
];

export const products: Product[] = [
  // Liquid eggs
  {
    id: 'liquid-whole-100-pasteurized',
    categoryId: 'liquid',
    subcategoryId: 'liquid-whole-100',
    name: {
      sk: 'Pasterizované tekuté vajcia zo 100% vajec',
      en: 'Pasteurized liquid eggs from 100% eggs',
      hu: 'Pasztőrözött folyékony tojás 100% tojásból',
    },
    description: {
      sk: '1 kg výrobku obsahuje homogenizovanú zmes náplne (žltky a bielky) 22 kusov vajec priemernej hmotnosti v prírodnom pomere. Tento výrobok ponúkame v dvoch verziách: ošetrenej konzervačnými látkami, resp. bez konzervačných látok. Výrobok ošetrený konzervačnými látkami sa plní do plastových fliaš s polyetylénovou fóliou s hmotnosťou náplne 20 kg a s trvanlivosťou 12 dní, resp. do krabíc s hmotnosťou náplne 1 kg a s trvanlivosťou 21 dní. Výrobok bez konzervačných látok sa plní do plastových fliaš s polyetylénovou fóliou s hmotnosťou náplne 20 kg a s trvanlivosťou 4 dní.\n\nNÁVOD NA KONZUMÁCIU, VÝHODY:\n\nPasterizované tekuté vajcia zo 100% vajec je vhodný pre úspornú prípravu suchých a iných cestovín, pečiva, majonézy, omelety, palaciniek, polievok, omáčok, cukrárenských výrobkov a sladkostí. Výrobok je homogenizovaný, pasterizovaný, môžete ho ľahko dávkovať, nevyžaduje si žiadnu prípravu, a po otvorení ho môžete okamžite použiť. Skladujte v chladnom prostredí pri teplote 0 až +4°C; môžete skladovať aj v bežnej chladničke v domácnosti. Spotrebujte do 24 hodín od otvorenia.',
      en: '1 kg of product contains homogenized filling mixture (yolks and whites) of 22 eggs of average weight in natural proportion. We offer this product in two versions: treated with preservatives, or without preservatives. The product treated with preservatives is filled into plastic bottles with polyethylene film with filling weight of 20 kg and shelf life of 12 days, or into boxes with filling weight of 1 kg and shelf life of 21 days. The product without preservatives is filled into plastic bottles with polyethylene film with filling weight of 20 kg and shelf life of 4 days.\n\nCONSUMPTION INSTRUCTIONS, ADVANTAGES:\n\nPasteurized liquid eggs from 100% eggs are suitable for economical preparation of dry and other pasta, baked goods, mayonnaise, omelets, pancakes, soups, sauces, confectionery products and sweets. The product is homogenized, pasteurized, you can easily dose it, it requires no preparation, and after opening you can use it immediately. Store in a cool environment at temperature 0 to +4°C; you can also store it in a regular household refrigerator. Consume within 24 hours of opening.',
      hu: '1 kg termék homogenizált töltelék keveréket (sárgáját és fehérjét) tartalmaz 22 átlagos tömegű tojásból természetes arányban. Ezt a terméket két verzióban kínáljuk: tartósítószerrel kezelt, illetve tartósítószer nélküli változatban. A tartósítószerrel kezelt termék polietilén fóliával ellátott műanyag palackokba kerül 20 kg töltelék tömeggel és 12 napos eltarthatósággal, illetve dobozokba 1 kg töltelék tömeggel és 21 napos eltarthatósággal. A tartósítószer nélküli termék polietilén fóliával ellátott műanyag palackokba kerül 20 kg töltelék tömeggel és 4 napos eltarthatósággal.\n\nFOGYASZTÁSI ÚTMUTATÓ, ELŐNYÖK:\n\nA 100% tojásból készült pasztőrözött folyékony tojás alkalmas száraz és egyéb tészták, pékáruk, majonéz, omlett, palacsinta, levesek, szószok, cukrászati termékek és édességek gazdaságos elkészítéséhez. A termék homogenizált, pasztőrözött, könnyen adagolható, nem igényel előkészítést, és kinyitás után azonnal felhasználható. Hűvös környezetben, 0 és +4°C közötti hőmérsékleten tárolandó; hétköznapi háztartási hűtőszekrényben is tárolható. Nyitás után 24 órán belül fogyassza el.',
    },
    usage: {
      sk: 'Suché a iné cestoviny, pečivo, majonéza, omeleta, palacinky, polievky, omáčky, cukrárenské výrobky a sladkosti',
      en: 'Dry and other pasta, baked goods, mayonnaise, omelets, pancakes, soups, sauces, confectionery products and sweets',
      hu: 'Száraz és egyéb tészták, pékáruk, majonéz, omlett, palacsinta, levesek, szószok, cukrászati termékek és édességek',
    },
    packaging: {
      sk: '20 kg (plastové flaše), 1 kg (krabice)',
      en: '20 kg (plastic bottles), 1 kg (boxes)',
      hu: '20 kg (műanyag palackok), 1 kg (dobozok)',
    },
    images: ['/kartony/1.png'],
    pdfPath: '/pdf/whole',
  },
  {
    id: 'liquid-yolk',
    categoryId: 'liquid',
    subcategoryId: 'liquid-yolk',
    name: {
      sk: 'Pasterizované tekuté vajcia z vaječných žĺtok',
      en: 'Pasteurized liquid eggs from egg yolks',
      hu: 'Pasztőrözött folyékony tojás tojássárgájából',
    },
    description: {
      sk: '1 kg výrobku obsahuje vaječné žĺtky z 63 kusov vajec priemernej hmotnosti. Tento výrobok ponúkame v dvoch verziách: ošetrenej konzervačnými látkami, resp. bez konzervačných látok. Výrobok ošetrený konzervačnými látkami sa plní do plastových fliaš s polyetylénovou fóliou s hmotnosťou náplne 20 kg a s trvanlivosťou 12 dní, resp. do krabíc s hmotnosťou náplne 1 kg a s trvanlivosťou 21 dní. Výrobok bez konzervačných látok sa plní do plastových fliaš s polyetylénovou fóliou s hmotnosťou náplne 20 kg a s trvanlivosťou 4 dní.\n\n\n\nNÁVOD NA KONZUMÁCIU, VÝHODY:\n\n\n\nObe verzie pasterizovaných tekutých vajec z vaječných žĺtok (s konzervačnými látkami alebo bez konzervačných látok) sú vhodné pre prípravu cukrárenských výrobkov, zákuskov, zmrzliny a dezertov. Skladujte v chladnom prostredí pri teplote 0 až +4°C; môžete skladovať aj v bežnej chladničke v domácnosti. Spotrebujte do 24 hodín od otvorenia. Ponúkame vám konečný výrobok zo zaručene čerstvých surovín, vyrábaný procesmi zodpovedajúcim systémom manažérstva kvality ISO a HAACP. Zabudnite na vaječné bielky, pokiaľ ich nepotrebujete. Zabudnite na plytvanie pri oddeľovaní žĺtok, resp. na uskladňovanie a spracovanie nebezpečných odpadov (vaječných škrupín a podnosu).',
      en: '1 kg of product contains egg yolks from 63 eggs of average weight. We offer this product in two versions: treated with preservatives, or without preservatives. The product treated with preservatives is filled into plastic bottles with polyethylene film with filling weight of 20 kg and shelf life of 12 days, or into boxes with filling weight of 1 kg and shelf life of 21 days. The product without preservatives is filled into plastic bottles with polyethylene film with filling weight of 20 kg and shelf life of 4 days.\n\n\n\nCONSUMPTION INSTRUCTIONS, ADVANTAGES:\n\n\n\nBoth versions of pasteurized liquid eggs from egg yolks (with preservatives or without preservatives) are suitable for preparing confectionery products, pastries, ice cream and desserts. Store in a cool environment at temperature 0 to +4°C; you can also store it in a regular household refrigerator. Consume within 24 hours of opening. We offer you a final product made from guaranteed fresh raw materials, manufactured using processes corresponding to ISO and HACCP quality management systems. Forget about egg whites if you don\'t need them. Forget about waste when separating yolks, or storing and processing hazardous waste (egg shells and trays).',
      hu: '1 kg termék 63 átlagos tömegű tojás tojássárgáját tartalmazza. Ezt a terméket két verzióban kínáljuk: tartósítószerrel kezelt, illetve tartósítószer nélküli változatban. A tartósítószerrel kezelt termék polietilén fóliával ellátott műanyag palackokba kerül 20 kg töltelék tömeggel és 12 napos eltarthatósággal, illetve dobozokba 1 kg töltelék tömeggel és 21 napos eltarthatósággal. A tartósítószer nélküli termék polietilén fóliával ellátott műanyag palackokba kerül 20 kg töltelék tömeggel és 4 napos eltarthatósággal.\n\n\n\nFOGYASZTÁSI ÚTMUTATÓ, ELŐNYÖK:\n\n\n\nA tojássárgájából készült pasztőrözött folyékony tojás mindkét verziója (tartósítószerrel vagy tartósítószer nélkül) alkalmas cukrászati termékek, sütemények, fagylalt és desszertek elkészítéséhez. Hűvös környezetben, 0 és +4°C közötti hőmérsékleten tárolandó; hétköznapi háztartási hűtőszekrényben is tárolható. Nyitás után 24 órán belül fogyassza el. Garantáltan friss alapanyagokból készült végterméket kínálunk, amelyet ISO és HACCP minőségirányítási rendszereknek megfelelő folyamatokkal gyártunk. Felejtsen el a tojásfehérjéről, ha nincs rá szüksége. Felejtsen el a pazarlásról a sárgáják szétválasztásánál, illetve a veszélyes hulladékok (tojáshéjak és tálcák) tárolásáról és feldolgozásáról.',
    },
    usage: {
      sk: 'Cukrárenské výrobky, zákusky, zmrzlina, dezerty',
      en: 'Confectionery products, pastries, ice cream, desserts',
      hu: 'Cukrászati termékek, sütemények, fagylalt, desszertek',
    },
    packaging: {
      sk: '20 kg (plastové flaše), 1 kg (krabice)',
      en: '20 kg (plastic bottles), 1 kg (boxes)',
      hu: '20 kg (műanyag palackok), 1 kg (dobozok)',
    },
    images: ['/kartony/2.png'],
    pdfPath: '/pdf/yolk',
  },
  {
    id: 'liquid-white',
    categoryId: 'liquid',
    subcategoryId: 'liquid-white',
    name: {
      sk: 'Pasterizované tekuté vajcia z vaječných bielkov',
      en: 'Pasteurized liquid eggs from egg whites',
      hu: 'Pasztőrözött folyékony tojás tojásfehérjéből',
    },
    description: {
      sk: '1 kg výrobku obsahuje vaječné bielky z 33 kusov vajec priemernej hmotnosti. Tento výrobok ponúkame v dvoch verziách: ošetrenej konzervačnými látkami, resp. bez konzervačných látok. Výrobok ošetrený konzervačnými látkami sa plní do plastových fliaš s polyetylénovou fóliou s hmotnosťou náplne 20 kg a s trvanlivosťou 12 dní, resp. do krabíc s hmotnosťou náplne 1 kg a s trvanlivosťou 21 dní. Výrobok bez konzervačných látok sa plní do plastových fliaš s polyetylénovou fóliou s hmotnosťou náplne 20 kg a s trvanlivosťou 4 dní.\n\n\n\nNÁVOD NA KONZUMÁCIU, VÝHODY:\n\n\n\nVhodný pre kuchyne, cukrárne a výrobcov sladkých a slaných pekárenských výrobkov, ktorí používajú vyšľahané vaječné bielky pre výrobu plniek, pudingov a šľahaných výrobkov. Po otvorení môžete okamžite použiť, nevyžaduje si žiadnu prípravu. Zabudnite na zbytočný vaječný žĺtok. Vyšľahané vaječné bielky dokážu výborne zachovať konzistenciu. Ďalšou výhodou je eliminácia plytvania pri oddeľovaní vaječných bielkov; nemusíte sa starať ani o uskladňovanie a spracovanie nebezpečných odpadov (vaječných škrupín a podnosu). Skladujte v chladnom prostredí pri teplote 0 až +4°C; môžete skladovať aj v bežnej chladničke v domácnosti. Spotrebujte do 24 hodín od otvorenia.',
      en: '1 kg of product contains egg whites from 33 eggs of average weight. We offer this product in two versions: treated with preservatives, or without preservatives. The product treated with preservatives is filled into plastic bottles with polyethylene film with filling weight of 20 kg and shelf life of 12 days, or into boxes with filling weight of 1 kg and shelf life of 21 days. The product without preservatives is filled into plastic bottles with polyethylene film with filling weight of 20 kg and shelf life of 4 days.\n\n\n\nCONSUMPTION INSTRUCTIONS, ADVANTAGES:\n\n\n\nSuitable for kitchens, confectioneries and manufacturers of sweet and savory baked goods who use whipped egg whites for making fillings, puddings and whipped products. After opening you can use it immediately, it requires no preparation. Forget about unnecessary egg yolk. Whipped egg whites can excellently maintain consistency. Another advantage is the elimination of waste when separating egg whites; you don\'t have to worry about storing and processing hazardous waste (egg shells and trays). Store in a cool environment at temperature 0 to +4°C; you can also store it in a regular household refrigerator. Consume within 24 hours of opening.',
      hu: '1 kg termék 33 átlagos tömegű tojás tojásfehérjét tartalmazza. Ezt a terméket két verzióban kínáljuk: tartósítószerrel kezelt, illetve tartósítószer nélküli változatban. A tartósítószerrel kezelt termék polietilén fóliával ellátott műanyag palackokba kerül 20 kg töltelék tömeggel és 12 napos eltarthatósággal, illetve dobozokba 1 kg töltelék tömeggel és 21 napos eltarthatósággal. A tartósítószer nélküli termék polietilén fóliával ellátott műanyag palackokba kerül 20 kg töltelék tömeggel és 4 napos eltarthatósággal.\n\n\n\nFOGYASZTÁSI ÚTMUTATÓ, ELŐNYÖK:\n\n\n\nAlkalmas konyhák, cukrászdák és édes-sós pékáruk gyártói számára, akik felvert tojásfehérjét használnak töltelékek, pudingok és habosított termékek készítéséhez. Nyitás után azonnal felhasználható, nem igényel előkészítést. Felejtsen el a felesleges tojássárgáját. A felvert tojásfehérje kiválóan képes megtartani a konzisztenciát. További előny a pazarlás megszüntetése a tojásfehérjék szétválasztásánál; nem kell foglalkoznia a veszélyes hulladékok (tojáshéjak és tálcák) tárolásával és feldolgozásával sem. Hűvös környezetben, 0 és +4°C közötti hőmérsékleten tárolandó; hétköznapi háztartási hűtőszekrényben is tárolható. Nyitás után 24 órán belül fogyassza el.',
    },
    usage: {
      sk: 'Kuchyne, cukrárne, pekárenské výrobky, plnky, pudingy, šľahané výrobky',
      en: 'Kitchens, confectioneries, baked goods, fillings, puddings, whipped products',
      hu: 'Konyhák, cukrászdák, pékáruk, töltelékek, pudingok, habosított termékek',
    },
    packaging: {
      sk: '20 kg (plastové flaše), 1 kg (krabice)',
      en: '20 kg (plastic bottles), 1 kg (boxes)',
      hu: '20 kg (műanyag palackok), 1 kg (dobozok)',
    },
    images: ['/kartony/3.png'],
    pdfPath: '/pdf/white',
    },
  {
    id: 'liquid-spec11',
    categoryId: 'liquid',
    subcategoryId: 'liquid-spec11',
    name: {
      sk: 'Pasterizované tekuté vajcia zo 100% vajec Spec\'11',
      en: 'Pasteurized liquid eggs from 100% eggs Spec\'11',
      hu: 'Pasztőrözött folyékony tojás 100% tojásból Spec\'11',
    },
    description: {
      sk: 'Špeciálny výrobok určený najmä pre reštaurácie, veľkokapacitné kuchyne a hotely. Príjemne ochutený, bez potreby ďalšieho solenia. Praženica z tohto výrobku pri vhodnom skladovaní zachová pôvodnú farbu a konzistenciu po dobu niekoľkých hodín. Plnený do krabice s hmotnosťou náplne 1 kg a s trvanlivosťou 10 dní. Bez konzervačných látok.\n\n\n\nNÁVOD NA KONZUMÁCIU, VÝHODY:\n\n\n\nTekuté vajcia Spec\'11 zo 100% vajec je výbornou voľbou pre prípravu praženice, omelety, vyprážaných jedál, cestovín, majonézy, palaciniek, polievok a omáčok. Hotový výrobok je modernou prísadou gastronómie, ktorý môžete okamžite po otvorení použiť. Špeciálna technológia pri procese výroby Spec\'11 zabezpečí, že sa omeleta po príprave nerozpadne, a zachová si tvar, konzistenciu a farbu v ohrievacej nádobe po dobu niekoľkých hodín. Príjemne ochutený, bez potreby ďalšieho solenia. Skladujte v chladnom prostredí pri teplote 0 až +4°C; môžete skladovať aj v bežnej chladničke v domácnosti. Spotrebujte do 24 hodín od otvorenia.',
      en: 'Special product intended especially for restaurants, large-capacity kitchens and hotels. Pleasantly flavored, without the need for additional salting. Scrambled eggs from this product, when stored properly, will maintain their original color and consistency for several hours. Filled into boxes with filling weight of 1 kg and shelf life of 10 days. Without preservatives.\n\n\n\nCONSUMPTION INSTRUCTIONS, ADVANTAGES:\n\n\n\nLiquid eggs Spec\'11 from 100% eggs is an excellent choice for preparing scrambled eggs, omelets, fried dishes, pasta, mayonnaise, pancakes, soups and sauces. The finished product is a modern gastronomy ingredient that you can use immediately after opening. Special technology in the Spec\'11 manufacturing process ensures that the omelet will not fall apart after preparation, and will maintain its shape, consistency and color in a warming container for several hours. Pleasantly flavored, without the need for additional salting. Store in a cool environment at temperature 0 to +4°C; you can also store it in a regular household refrigerator. Consume within 24 hours of opening.',
      hu: 'Speciális termék, amelyet elsősorban éttermek, nagy kapacitású konyhák és szállodák számára szánunk. Kellemesen fűszerezett, további sózás nélkül. A termékből készült rántotta megfelelő tárolás mellett több órán át megőrzi eredeti színét és konzisztenciáját. 1 kg töltelék tömegű dobozokba kerül 10 napos eltarthatósággal. Tartósítószer nélkül.\n\n\n\nFOGYASZTÁSI ÚTMUTATÓ, ELŐNYÖK:\n\n\n\nA 100% tojásból készült Spec\'11 folyékony tojás kiváló választás rántotta, omlett, sült ételek, tészta, majonéz, palacsinta, levesek és szószok elkészítéséhez. A késztermék a gasztronómia modern összetevője, amelyet nyitás után azonnal felhasználhat. A Spec\'11 gyártási folyamatának speciális technológiája biztosítja, hogy az omlett elkészítése után nem esik szét, és több órán át megőrzi alakját, konzisztenciáját és színét a melegítő edényben. Kellemesen fűszerezett, további sózás nélkül. Hűvös környezetben, 0 és +4°C közötti hőmérsékleten tárolandó; hétköznapi háztartási hűtőszekrényben is tárolható. Nyitás után 24 órán belül fogyassza el.',
    },
    usage: {
      sk: 'Reštaurácie, veľkokapacitné kuchyne, hotely, praženica, omeleta, vyprážané jedlá, cestoviny, majonéza, palacinky, polievky, omáčky',
      en: 'Restaurants, large-capacity kitchens, hotels, scrambled eggs, omelets, fried dishes, pasta, mayonnaise, pancakes, soups, sauces',
      hu: 'Éttermek, nagy kapacitású konyhák, szállodák, rántotta, omlett, sült ételek, tészta, majonéz, palacsinta, levesek, szószok',
    },
    packaging: {
      sk: '1 kg (krabice)',
      en: '1 kg (box)',
      hu: '1 kg (doboz)',
    },
    images: ['/kartony/4.png'],
    pdfPath: '/pdf/11',
  },
  // Egg sticks
  {
    id: 'sticks-classic',
    categoryId: 'sticks',
    name: {
      sk: 'Vaječné tyčinky klasické',
      en: 'Classic Egg Sticks',
      hu: 'Klasszikus tojásrudak',
    },
    description: {
      sk: 'Praktické vaječné tyčinky pre ľahké porciovanie.',
      en: 'Practical egg sticks for easy portioning.',
      hu: 'Praktikus tojásrudak a könnyű adagoláshoz.',
    },
    usage: {
      sk: 'Šaláty, sendviče, teplé jedlá',
      en: 'Salads, sandwiches, hot dishes',
      hu: 'Saláták, szendvicsek, meleg ételek',
    },
    packaging: {
      sk: '500 g, 1 kg',
      en: '500 g, 1 kg',
      hu: '500 g, 1 kg',
    },
  },
];

// Helper function to convert subcategories to products
// Only creates products for subcategories that don't already have a product
const createProductsFromSubcategories = (existingProducts: Product[]): Product[] => {
  const subcategoryProducts: Product[] = [];
  
  categories.forEach(category => {
    if (category.subcategories) {
      category.subcategories.forEach(subcategory => {
        // Check if there's already a product with this subcategoryId
        const hasExistingProduct = existingProducts.some(
          product => product.categoryId === category.id && product.subcategoryId === subcategory.id
        );
        
        // Only create a product if one doesn't already exist
        if (!hasExistingProduct) {
          // For totu category, use images from /posledne directory
          // For boiled category, use images from /varene directory
          let productImages: string[] = ['/img1.png'];
          let pdfPath: string | undefined = undefined;
          
          if (category.id === 'totu') {
            // Use posledne images for totu products (1.png, 2.png, 3.png, 4.png)
            const totuImageIndex = category.subcategories?.findIndex(sub => sub.id === subcategory.id) ?? 0;
            productImages = [`/posledne/${Math.min(totuImageIndex + 1, 4)}.png`];
            
            // Map PDF paths for totu products
            const pdfPaths = ['/pdf2/prvy', '/pdf2/druhy', '/pdf2/treti', '/pdf2/stvrty'];
            pdfPath = pdfPaths[Math.min(totuImageIndex, 3)];
          } else if (category.id === 'boiled') {
            // Use varene images for boiled products
            productImages = subcategory.imagePath ? [subcategory.imagePath] : ['/varene/1.png'];
            // Set PDF path for boiled products
            pdfPath = '/pdf3/fott_tojas_spec_en_v2_1.pdf';
          } else if (category.id === 'dried') {
            // Use susene images for dried products (1.png, 2.png, 3.png)
            const driedImageIndex = category.subcategories?.findIndex(sub => sub.id === subcategory.id) ?? 0;
            productImages = [`/susene/${Math.min(driedImageIndex + 1, 3)}.png`];
            // Map PDF paths for dried products
            const pdfPaths = ['/pdf4/1.pdf', '/pdf4/2.pdf', '/pdf4/3.pdf'];
            pdfPath = pdfPaths[Math.min(driedImageIndex, 2)];
          } else {
            productImages = subcategory.imagePath ? [subcategory.imagePath] : ['/img1.png'];
          }
          
        subcategoryProducts.push({
          id: subcategory.id,
          categoryId: category.id,
            subcategoryId: subcategory.id,
          name: subcategory.name,
          description: subcategory.description || {
            sk: `${subcategory.name.sk} - kvalitný produkt`,
            en: `${subcategory.name.en} - quality product`,
            hu: `${subcategory.name.hu} - minőségi termék`,
          },
          usage: {
            sk: 'Rôzne potravinárske aplikácie',
            en: 'Various food industry applications',
            hu: 'Különféle élelmiszeripari alkalmazások',
          },
          packaging: {
            sk: 'Rôzne veľkosti',
            en: 'Various sizes',
            hu: 'Különféle méretek',
          },
            images: productImages,
            pdfPath: pdfPath,
        });
        }
      });
    }
  });
  
  return subcategoryProducts;
};

// Merge existing products with subcategory products
const allProducts: Product[] = [
  ...products,
  ...createProductsFromSubcategories(products),
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  // Get all products for this category, including those converted from subcategories
  return allProducts.filter(product => product.categoryId === categoryId);
};

export const getProductsBySubcategory = (
  categoryId: string, 
  subcategoryId: string
): Product[] => {
  return allProducts.filter(product => 
    product.categoryId === categoryId && product.subcategoryId === subcategoryId
  );
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(cat => cat.slug === slug);
};

export const getSubcategoryBySlug = (
  categoryId: string, 
  subcategorySlug: string
): Subcategory | undefined => {
  const category = categories.find(cat => cat.id === categoryId);
  if (!category || !category.subcategories) return undefined;
  return category.subcategories.find(sub => sub.slug === subcategorySlug);
};

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(product => product.id === id);
};
