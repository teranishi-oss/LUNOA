export type StoreSlug = 'shibuya';

export interface StoreInfo {
  slug: StoreSlug;
  name: string;
  nameEn: string;
  region: string;
  address: string[];
  postalCode: string;
  phone: string | null;
  email: string | null;
  hours: string;
  closedDay: string;
  access: string;
  bookingUrl: string;
  instagramUrl: string;
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
    address: ['東京都渋谷区道玄坂1-19-13', 'トップヒル並木5階'],
    postalCode: '〒150-0043',
    phone: '03-6455-3271',
    email: 'seitai.lunoa@gmail.com',
    hours: '10:00〜21:00',
    closedDay: 'なし',
    access: '渋谷駅から徒歩7分',
    bookingUrl: 'https://l.salons.jp/reservations/create/menu?shopId=9fdb405d-5b6c-4411-9f75-50db6b3aa7c3&menuId=RSV0090',
    instagramUrl: 'https://www.instagram.com/lunoa_biyouseitai/',
    meta: {
      title: '卒業型美容整体LUNOA 渋谷院 | 通わなくていい身体をつくる',
      description: '渋谷で根本から。卒業型美容整体LUNOA渋谷院。25歳から60歳まで、本気で変わりたいすべての女性のための美容整体。渋谷駅から徒歩7分。',
    },
  },
};

export const storeList: StoreInfo[] = Object.values(stores);
export const shibuyaStore: StoreInfo = stores.shibuya;

export function getStoreBySlug(slug: string): StoreInfo | undefined {
  return stores[slug as StoreSlug];
}
