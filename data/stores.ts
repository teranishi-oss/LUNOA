import heroUmeda from '../assets/hero-umeda.jpg';

export type StoreSlug = 'shibuya' | 'umeda' | 'sannomiya';

export interface StoreInfo {
  slug: StoreSlug;
  name: string;
  nameEn: string;
  region: string;
  address: string[];
  phone: string | null;
  email: string | null;
  hours: string;
  closedDay: string;
  access: string;
  bookingUrl: string;
  instagramUrl: string;
  heroImage?: string;
  meta: {
    title: string;
    description: string;
  };
}

export const stores: Record<StoreSlug, StoreInfo> = {
  shibuya: {
    slug: 'shibuya',
    name: '渋谷院',
    nameEn: 'SHIBUYA',
    region: '東京',
    address: ['東京都渋谷区道玄坂1-19-13', 'トップヒル並木5F'],
    phone: '03-6455-3271',
    email: 'seitai.lunoa@gmail.com',
    hours: '10:00〜21:00',
    closedDay: '不定休',
    access: '渋谷駅ハチ公口から徒歩3分',
    bookingUrl: 'https://l.salons.jp/reservations/create/menu?shopId=9fdb405d-5b6c-4411-9f75-50db6b3aa7c3&menuId=RSV0090',
    instagramUrl: 'https://www.instagram.com/lunoa_biyouseitai/',
    meta: {
      title: '美容整体LUNOA 渋谷院 | 渋谷駅徒歩3分の深層部アプローチ整体',
      description: '渋谷で結果を出す美容整体LUNOA渋谷院。筋肉の深層部に直接アプローチし、初回から変化を実感。完全個室・渋谷駅徒歩3分。',
    },
  },
  umeda: {
    slug: 'umeda',
    name: '梅田院',
    nameEn: 'UMEDA',
    region: '大阪',
    address: ['大阪府大阪市北区太融寺町8-2', '梅田エーワンビル9階 902'],
    phone: '06-6450-5004',
    email: 'seitai.lunoa.umeda@gmail.com',
    hours: '10:00〜21:00',
    closedDay: '不定休',
    access: '梅田駅から徒歩圏内',
    bookingUrl: 'https://l.salons.jp/reservations/create/menu?shopId=a0a10946-c2ab-4fce-bf02-b4ff994a4a55&menuId=RSV0091',
    instagramUrl: 'https://www.instagram.com/lunoa_biyouseitai/',
    heroImage: heroUmeda,
    meta: {
      title: '美容整体LUNOA 梅田院 | 梅田駅徒歩圏内の深層部アプローチ整体',
      description: '大阪で結果を出す美容整体LUNOA梅田院。筋肉の深層部に直接アプローチし、初回から変化を実感。完全個室・梅田駅徒歩圏内。',
    },
  },
  sannomiya: {
    slug: 'sannomiya',
    name: '三宮院',
    nameEn: 'SANNOMIYA',
    region: '神戸',
    address: ['兵庫県神戸市中央区三宮町1-4-11', 'ラティス三宮 301'],
    phone: null,
    email: null,
    hours: '10:00〜21:00',
    closedDay: '不定休',
    access: '三宮駅から徒歩圏内',
    bookingUrl: 'https://duplicated-imdj.bolt.host/',
    instagramUrl: 'https://www.instagram.com/lunoa_biyouseitai/',
    meta: {
      title: '美容整体LUNOA 三宮院 | 神戸三宮の深層部アプローチ整体',
      description: '神戸で結果を出す美容整体LUNOA三宮院。筋肉の深層部に直接アプローチし、初回から変化を実感。完全個室。',
    },
  },
};

export const storeList: StoreInfo[] = Object.values(stores);

export function getStoreBySlug(slug: string): StoreInfo | undefined {
  return stores[slug as StoreSlug];
}
