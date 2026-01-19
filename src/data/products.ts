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
    subcategories: [
      {
        id: 'totu-product-clumps',
        slug: 'totu-product-clumps',
        name: {
          sk: 'ToTu výrobok z vaječných\nbielkov s hrudkami',
          en: 'ToTu product from egg\nwhites with clumps',
          hu: 'ToTu termék tojásfehérjéből\ngombóccsal',
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
    subcategories: [
      {
        id: 'boiled-peeled-brine',
        slug: 'boiled-peeled-brine',
        name: {
          sk: 'Varené lúpané vajcia\nna tvrdo v slanom náleve',
          en: 'Hard-boiled peeled eggs\nin salt brine',
          hu: 'Keményre főtt hámozott tojás\nsós lében',
        },
        image: 'boiled',
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
    subcategories: [
      {
        id: 'dried-whole-100',
        slug: 'dried-whole-100',
        name: {
          sk: 'Sušené vajcia\nzo 100% vajec',
          en: 'Dried eggs\nfrom 100% eggs',
          hu: 'Szárított tojás\n100% tojásból',
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
  },
  {
    id: 'liquid-whole',
    categoryId: 'liquid',
    name: {
      sk: 'Tekuté celé vajce',
      en: 'Liquid Whole Egg',
      hu: 'Folyékony egész tojás',
    },
    description: {
      sk: 'Pasterizované tekuté celé vajce, ideálne pre pekárne a cukrárne.',
      en: 'Pasteurized liquid whole egg, ideal for bakeries and confectioneries.',
      hu: 'Pasztőrözött folyékony egész tojás, ideális pékségek és cukrászdák számára.',
    },
    usage: {
      sk: 'Pekárenské a cukrárenské výrobky, omáčky, cestoviny',
      en: 'Bakery and confectionery products, sauces, pasta',
      hu: 'Pékáru és cukrászati termékek, szószok, tészta',
    },
    packaging: {
      sk: '1L, 5L, 10L, 1000L',
      en: '1L, 5L, 10L, 1000L',
      hu: '1L, 5L, 10L, 1000L',
    },
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
      sk: '1 kg výrobku obsahuje vaječné žĺtky z 63 kusov vajec priemernej hmotnosti. Tento výrobok ponúkame v dvoch verziách: ošetrenej konzervačnými látkami, resp. bez konzervačných látok. Výrobok ošetrený konzervačnými látkami sa plní do plastových fliaš s polyetylénovou fóliou s hmotnosťou náplne 20 kg a s trvanlivosťou 12 dní, resp. do krabíc s hmotnosťou náplne 1 kg a s trvanlivosťou 21 dní. Výrobok bez konzervačných látok sa plní do plastových fliaš s polyetylénovou fóliou s hmotnosťou náplne 20 kg a s trvanlivosťou 4 dní.\n\nNÁVOD NA KONZUMÁCIU, VÝHODY:\n\nObe verzie pasterizovaných tekutých vajec z vaječných žĺtok (s konzervačnými látkami alebo bez konzervačných látok) sú vhodné pre prípravu cukrárenských výrobkov, zákuskov, zmrzliny a dezertov. Skladujte v chladnom prostredí pri teplote 0 až +4°C; môžete skladovať aj v bežnej chladničke v domácnosti. Spotrebujte do 24 hodín od otvorenia. Ponúkame vám konečný výrobok zo zaručene čerstvých surovín, vyrábaný procesmi zodpovedajúcim systémom manažérstva kvality ISO a HAACP. Zabudnite na vaječné bielky, pokiaľ ich nepotrebujete. Zabudnite na plytvanie pri oddeľovaní žĺtok, resp. na uskladňovanie a spracovanie nebezpečných odpadov (vaječných škrupín a podnosu).',
      en: '1 kg of product contains egg yolks from 63 eggs of average weight. We offer this product in two versions: treated with preservatives, or without preservatives. The product treated with preservatives is filled into plastic bottles with polyethylene film with filling weight of 20 kg and shelf life of 12 days, or into boxes with filling weight of 1 kg and shelf life of 21 days. The product without preservatives is filled into plastic bottles with polyethylene film with filling weight of 20 kg and shelf life of 4 days.\n\nCONSUMPTION INSTRUCTIONS, ADVANTAGES:\n\nBoth versions of pasteurized liquid eggs from egg yolks (with preservatives or without preservatives) are suitable for preparing confectionery products, pastries, ice cream and desserts. Store in a cool environment at temperature 0 to +4°C; you can also store it in a regular household refrigerator. Consume within 24 hours of opening. We offer you a final product made from guaranteed fresh raw materials, manufactured using processes corresponding to ISO and HACCP quality management systems. Forget about egg whites if you don\'t need them. Forget about waste when separating yolks, or storing and processing hazardous waste (egg shells and trays).',
      hu: '1 kg termék 63 átlagos tömegű tojás tojássárgáját tartalmazza. Ezt a terméket két verzióban kínáljuk: tartósítószerrel kezelt, illetve tartósítószer nélküli változatban. A tartósítószerrel kezelt termék polietilén fóliával ellátott műanyag palackokba kerül 20 kg töltelék tömeggel és 12 napos eltarthatósággal, illetve dobozokba 1 kg töltelék tömeggel és 21 napos eltarthatósággal. A tartósítószer nélküli termék polietilén fóliával ellátott műanyag palackokba kerül 20 kg töltelék tömeggel és 4 napos eltarthatósággal.\n\nFOGYASZTÁSI ÚTMUTATÓ, ELŐNYÖK:\n\nA tojássárgájából készült pasztőrözött folyékony tojás mindkét verziója (tartósítószerrel vagy tartósítószer nélkül) alkalmas cukrászati termékek, sütemények, fagylalt és desszertek elkészítéséhez. Hűvös környezetben, 0 és +4°C közötti hőmérsékleten tárolandó; hétköznapi háztartási hűtőszekrényben is tárolható. Nyitás után 24 órán belül fogyassza el. Garantáltan friss alapanyagokból készült végterméket kínálunk, amelyet ISO és HACCP minőségirányítási rendszereknek megfelelő folyamatokkal gyártunk. Felejtsen el a tojásfehérjéről, ha nincs rá szüksége. Felejtsen el a pazarlásról a sárgáják szétválasztásánál, illetve a veszélyes hulladékok (tojáshéjak és tálcák) tárolásáról és feldolgozásáról.',
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
      sk: '1 kg výrobku obsahuje vaječné bielky z 33 kusov vajec priemernej hmotnosti. Tento výrobok ponúkame v dvoch verziách: ošetrenej konzervačnými látkami, resp. bez konzervačných látok. Výrobok ošetrený konzervačnými látkami sa plní do plastových fliaš s polyetylénovou fóliou s hmotnosťou náplne 20 kg a s trvanlivosťou 12 dní, resp. do krabíc s hmotnosťou náplne 1 kg a s trvanlivosťou 21 dní. Výrobok bez konzervačných látok sa plní do plastových fliaš s polyetylénovou fóliou s hmotnosťou náplne 20 kg a s trvanlivosťou 4 dní.\n\nNÁVOD NA KONZUMÁCIU, VÝHODY:\n\nVhodný pre kuchyne, cukrárne a výrobcov sladkých a slaných pekárenských výrobkov, ktorí používajú vyšľahané vaječné bielky pre výrobu plniek, pudingov a šľahaných výrobkov. Po otvorení môžete okamžite použiť, nevyžaduje si žiadnu prípravu. Zabudnite na zbytočný vaječný žĺtok. Vyšľahané vaječné bielky dokážu výborne zachovať konzistenciu. Ďalšou výhodou je eliminácia plytvania pri oddeľovaní vaječných bielkov; nemusíte sa starať ani o uskladňovanie a spracovanie nebezpečných odpadov (vaječných škrupín a podnosu). Skladujte v chladnom prostredí pri teplote 0 až +4°C; môžete skladovať aj v bežnej chladničke v domácnosti. Spotrebujte do 24 hodín od otvorenia.',
      en: '1 kg of product contains egg whites from 33 eggs of average weight. We offer this product in two versions: treated with preservatives, or without preservatives. The product treated with preservatives is filled into plastic bottles with polyethylene film with filling weight of 20 kg and shelf life of 12 days, or into boxes with filling weight of 1 kg and shelf life of 21 days. The product without preservatives is filled into plastic bottles with polyethylene film with filling weight of 20 kg and shelf life of 4 days.\n\nCONSUMPTION INSTRUCTIONS, ADVANTAGES:\n\nSuitable for kitchens, confectioneries and manufacturers of sweet and savory baked goods who use whipped egg whites for making fillings, puddings and whipped products. After opening you can use it immediately, it requires no preparation. Forget about unnecessary egg yolk. Whipped egg whites can excellently maintain consistency. Another advantage is the elimination of waste when separating egg whites; you don\'t have to worry about storing and processing hazardous waste (egg shells and trays). Store in a cool environment at temperature 0 to +4°C; you can also store it in a regular household refrigerator. Consume within 24 hours of opening.',
      hu: '1 kg termék 33 átlagos tömegű tojás tojásfehérjét tartalmazza. Ezt a terméket két verzióban kínáljuk: tartósítószerrel kezelt, illetve tartósítószer nélküli változatban. A tartósítószerrel kezelt termék polietilén fóliával ellátott műanyag palackokba kerül 20 kg töltelék tömeggel és 12 napos eltarthatósággal, illetve dobozokba 1 kg töltelék tömeggel és 21 napos eltarthatósággal. A tartósítószer nélküli termék polietilén fóliával ellátott műanyag palackokba kerül 20 kg töltelék tömeggel és 4 napos eltarthatósággal.\n\nFOGYASZTÁSI ÚTMUTATÓ, ELŐNYÖK:\n\nAlkalmas konyhák, cukrászdák és édes-sós pékáruk gyártói számára, akik felvert tojásfehérjét használnak töltelékek, pudingok és habosított termékek készítéséhez. Nyitás után azonnal felhasználható, nem igényel előkészítést. Felejtsen el a felesleges tojássárgáját. A felvert tojásfehérje kiválóan képes megtartani a konzisztenciát. További előny a pazarlás megszüntetése a tojásfehérjék szétválasztásánál; nem kell foglalkoznia a veszélyes hulladékok (tojáshéjak és tálcák) tárolásával és feldolgozásával sem. Hűvös környezetben, 0 és +4°C közötti hőmérsékleten tárolandó; hétköznapi háztartási hűtőszekrényben is tárolható. Nyitás után 24 órán belül fogyassza el.',
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
      sk: 'Špeciálny výrobok určený najmä pre reštaurácie, veľkokapacitné kuchyne a hotely. Príjemne ochutený, bez potreby ďalšieho solenia. Praženica z tohto výrobku pri vhodnom skladovaní zachová pôvodnú farbu a konzistenciu po dobu niekoľkých hodín. Plnený do krabice s hmotnosťou náplne 1 kg a s trvanlivosťou 10 dní. Bez konzervačných látok.\n\nNÁVOD NA KONZUMÁCIU, VÝHODY:\n\nTekuté vajcia Spec\'11 zo 100% vajec je výbornou voľbou pre prípravu praženice, omelety, vyprážaných jedál, cestovín, majonézy, palaciniek, polievok a omáčok. Hotový výrobok je modernou prísadou gastronómie, ktorý môžete okamžite po otvorení použiť. Špeciálna technológia pri procese výroby Spec\'11 zabezpečí, že sa omeleta po príprave nerozpadne, a zachová si tvar, konzistenciu a farbu v ohrievacej nádobe po dobu niekoľkých hodín. Príjemne ochutený, bez potreby ďalšieho solenia. Skladujte v chladnom prostredí pri teplote 0 až +4°C; môžete skladovať aj v bežnej chladničke v domácnosti. Spotrebujte do 24 hodín od otvorenia.',
      en: 'Special product intended especially for restaurants, large-capacity kitchens and hotels. Pleasantly flavored, without the need for additional salting. Scrambled eggs from this product, when stored properly, will maintain their original color and consistency for several hours. Filled into boxes with filling weight of 1 kg and shelf life of 10 days. Without preservatives.\n\nCONSUMPTION INSTRUCTIONS, ADVANTAGES:\n\nLiquid eggs Spec\'11 from 100% eggs is an excellent choice for preparing scrambled eggs, omelets, fried dishes, pasta, mayonnaise, pancakes, soups and sauces. The finished product is a modern gastronomy ingredient that you can use immediately after opening. Special technology in the Spec\'11 manufacturing process ensures that the omelet will not fall apart after preparation, and will maintain its shape, consistency and color in a warming container for several hours. Pleasantly flavored, without the need for additional salting. Store in a cool environment at temperature 0 to +4°C; you can also store it in a regular household refrigerator. Consume within 24 hours of opening.',
      hu: 'Speciális termék, amelyet elsősorban éttermek, nagy kapacitású konyhák és szállodák számára szánunk. Kellemesen fűszerezett, további sózás nélkül. A termékből készült rántotta megfelelő tárolás mellett több órán át megőrzi eredeti színét és konzisztenciáját. 1 kg töltelék tömegű dobozokba kerül 10 napos eltarthatósággal. Tartósítószer nélkül.\n\nFOGYASZTÁSI ÚTMUTATÓ, ELŐNYÖK:\n\nA 100% tojásból készült Spec\'11 folyékony tojás kiváló választás rántotta, omlett, sült ételek, tészta, majonéz, palacsinta, levesek és szószok elkészítéséhez. A késztermék a gasztronómia modern összetevője, amelyet nyitás után azonnal felhasználhat. A Spec\'11 gyártási folyamatának speciális technológiája biztosítja, hogy az omlett elkészítése után nem esik szét, és több órán át megőrzi alakját, konzisztenciáját és színét a melegítő edényben. Kellemesen fűszerezett, további sózás nélkül. Hűvös környezetben, 0 és +4°C közötti hőmérsékleten tárolandó; hétköznapi háztartási hűtőszekrényben is tárolható. Nyitás után 24 órán belül fogyassza el.',
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
  },
  // Boiled eggs
  {
    id: 'boiled-whole',
    categoryId: 'boiled',
    name: {
      sk: 'Varené vajcia ošúpané',
      en: 'Peeled Boiled Eggs',
      hu: 'Hámozott főtt tojás',
    },
    description: {
      sk: 'Čerstvo varené a ošúpané vajcia v ochrannom náleve.',
      en: 'Freshly boiled and peeled eggs in protective brine.',
      hu: 'Frissen főtt és hámozott tojások védőlében.',
    },
    usage: {
      sk: 'Šaláty, sendviče, prílohy, predjedlá',
      en: 'Salads, sandwiches, side dishes, appetizers',
      hu: 'Saláták, szendvicsek, köretek, előételek',
    },
    packaging: {
      sk: '6 ks, 12 ks, 50 ks',
      en: '6 pcs, 12 pcs, 50 pcs',
      hu: '6 db, 12 db, 50 db',
    },
  },
  {
    id: 'boiled-halves',
    categoryId: 'boiled',
    name: {
      sk: 'Varené vajcia polovice',
      en: 'Boiled Egg Halves',
      hu: 'Főtt tojás felek',
    },
    description: {
      sk: 'Presne nakrájané polovice varených vajec.',
      en: 'Precisely cut boiled egg halves.',
      hu: 'Pontosan vágott főtt tojás felek.',
    },
    usage: {
      sk: 'Predjedlá, plnené vajcia, dekorácie',
      en: 'Appetizers, deviled eggs, decorations',
      hu: 'Előételek, töltött tojások, dekorációk',
    },
    packaging: {
      sk: '20 ks, 50 ks',
      en: '20 pcs, 50 pcs',
      hu: '20 db, 50 db',
    },
  },
  // Dried eggs
  {
    id: 'dried-whole',
    categoryId: 'dried',
    name: {
      sk: 'Sušené celé vajce',
      en: 'Dried Whole Egg',
      hu: 'Szárított egész tojás',
    },
    description: {
      sk: 'Jemný vaječný prášok z celých vajec.',
      en: 'Fine egg powder from whole eggs.',
      hu: 'Finom tojáspor egész tojásból.',
    },
    usage: {
      sk: 'Pekárenstvo, cukrárenstvo, polotovary',
      en: 'Bakery, confectionery, semi-finished products',
      hu: 'Pékség, cukrászat, félkész termékek',
    },
    packaging: {
      sk: '1 kg, 5 kg, 25 kg',
      en: '1 kg, 5 kg, 25 kg',
      hu: '1 kg, 5 kg, 25 kg',
    },
  },
  {
    id: 'dried-yolk',
    categoryId: 'dried',
    name: {
      sk: 'Sušený žĺtok',
      en: 'Dried Egg Yolk',
      hu: 'Szárított tojássárgája',
    },
    description: {
      sk: 'Koncentrovaný sušený vaječný žĺtok.',
      en: 'Concentrated dried egg yolk.',
      hu: 'Koncentrált szárított tojássárgája.',
    },
    usage: {
      sk: 'Majonézy, omáčky, cestoviny, zmrzliny',
      en: 'Mayonnaise, sauces, pasta, ice cream',
      hu: 'Majonéz, szószok, tészta, fagylalt',
    },
    packaging: {
      sk: '1 kg, 5 kg, 25 kg',
      en: '1 kg, 5 kg, 25 kg',
      hu: '1 kg, 5 kg, 25 kg',
    },
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
  // ToTu brand
  {
    id: 'totu-premium',
    categoryId: 'totu',
    name: {
      sk: 'ToTu Premium vajcia',
      en: 'ToTu Premium Eggs',
      hu: 'ToTu Prémium tojás',
    },
    description: {
      sk: 'Prémiové vajcia značky ToTu z voľného výbehu.',
      en: 'Premium ToTu brand free-range eggs.',
      hu: 'Prémium ToTu márkájú szabadtartású tojás.',
    },
    usage: {
      sk: 'Priama konzumácia, varenie, pečenie',
      en: 'Direct consumption, cooking, baking',
      hu: 'Közvetlen fogyasztás, főzés, sütés',
    },
    packaging: {
      sk: '6 ks, 10 ks, 30 ks',
      en: '6 pcs, 10 pcs, 30 pcs',
      hu: '6 db, 10 db, 30 db',
    },
  },
  {
    id: 'totu-organic',
    categoryId: 'totu',
    name: {
      sk: 'ToTu Bio vajcia',
      en: 'ToTu Organic Eggs',
      hu: 'ToTu Bio tojás',
    },
    description: {
      sk: 'Certifikované bio vajcia od sliepok z ekologického chovu.',
      en: 'Certified organic eggs from ecologically raised hens.',
      hu: 'Tanúsított bio tojás ökológiai tartásból származó tyúkoktól.',
    },
    usage: {
      sk: 'Zdravá strava, priama konzumácia',
      en: 'Healthy diet, direct consumption',
      hu: 'Egészséges táplálkozás, közvetlen fogyasztás',
    },
    packaging: {
      sk: '6 ks, 10 ks',
      en: '6 pcs, 10 pcs',
      hu: '6 db, 10 db',
    },
  },
];

// Helper function to convert subcategories to products
const createProductsFromSubcategories = (): Product[] => {
  const subcategoryProducts: Product[] = [];
  
  categories.forEach(category => {
    if (category.subcategories) {
      category.subcategories.forEach(subcategory => {
        subcategoryProducts.push({
          id: subcategory.id,
          categoryId: category.id,
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
          images: subcategory.imagePath ? [subcategory.imagePath] : ['/img1.png'],
        });
      });
    }
  });
  
  return subcategoryProducts;
};

// Merge existing products with subcategory products
const allProducts: Product[] = [
  ...products,
  ...createProductsFromSubcategories(),
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
