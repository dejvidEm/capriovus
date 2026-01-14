export interface Product {
  id: string;
  categoryId: string;
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
  },
  {
    id: 'totu',
    slug: 'totu-brand',
    name: {
      sk: 'Značka ToTu',
      en: 'ToTu Brand',
      hu: 'ToTu márka',
    },
    description: {
      sk: 'Prémiové produkty značky ToTu pre náročných spotrebiteľov.',
      en: 'Premium ToTu brand products for discerning consumers.',
      hu: 'Prémium ToTu márkás termékek az igényes fogyasztók számára.',
    },
    image: 'totu',
  },
];

export const products: Product[] = [
  // Liquid eggs
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
    name: {
      sk: 'Tekutý žĺtok',
      en: 'Liquid Egg Yolk',
      hu: 'Folyékony tojássárgája',
    },
    description: {
      sk: 'Čistý tekutý žĺtok pre profesionálne kuchyne.',
      en: 'Pure liquid egg yolk for professional kitchens.',
      hu: 'Tiszta folyékony tojássárgája professzionális konyhák számára.',
    },
    usage: {
      sk: 'Majonézy, dresingy, krémy, zmrzliny',
      en: 'Mayonnaise, dressings, creams, ice cream',
      hu: 'Majonéz, öntet, krémek, fagylalt',
    },
    packaging: {
      sk: '1L, 5L, 10L',
      en: '1L, 5L, 10L',
      hu: '1L, 5L, 10L',
    },
  },
  {
    id: 'liquid-white',
    categoryId: 'liquid',
    name: {
      sk: 'Tekutý bielok',
      en: 'Liquid Egg White',
      hu: 'Folyékony tojásfehérje',
    },
    description: {
      sk: 'Pasterizovaný tekutý bielok s vysokým obsahom bielkovín.',
      en: 'Pasteurized liquid egg white with high protein content.',
      hu: 'Pasztőrözött folyékony tojásfehérje magas fehérjetartalommal.',
    },
    usage: {
      sk: 'Fitness produkty, pečivo, šľahané hmoty',
      en: 'Fitness products, pastries, whipped batters',
      hu: 'Fitness termékek, péksütemények, habosított masszák',
    },
    packaging: {
      sk: '1L, 5L, 10L',
      en: '1L, 5L, 10L',
      hu: '1L, 5L, 10L',
    },
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

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.categoryId === categoryId);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(cat => cat.slug === slug);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
