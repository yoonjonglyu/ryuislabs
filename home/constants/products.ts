export interface ProductFeature {
  title: string;
  desc: string;
}

export interface CatalogEntry {
  key: string;
  kind: 'series' | 'single';
  name: string;
  tagline: string;
  desc: string;
  ref: string;
  accent: string;
  status: 'live' | 'soon';
  rating?: string;
  href: string;
  external?: boolean;
}

export interface StandaloneProduct {
  slug: string;
  name: string;
  tagline: string;
  ref: string;
  accent: string;
  status: 'live' | 'soon';
  rating?: string;
  reviews?: string;
  downloads?: string;
  intro: string;
  features: ProductFeature[];
  screenshots: string[];
  playUrl?: string;
}

export interface AbilityApp {
  slug: string;
  name: string;
  altName?: string;
  tagline: string;
  desc: string;
  lineage: string;
  ref: string;
  accent: string;
  status: 'live' | 'beta';
  rating: string;
  reviews: string;
  downloads: string;
  intro: string;
  features: ProductFeature[];
  screenshots: string[];
  playUrl: string;
  otherSlug: string;
  otherName: string;
}

import { Locale, DEFAULT_LOCALE } from './i18n';
import { PRODUCTS_TRANSLATIONS, getProductsTranslation } from './translations/products';

export { getProductsTranslation };

export const CATALOG_ENTRIES = PRODUCTS_TRANSLATIONS[DEFAULT_LOCALE].catalogEntries;
export const STANDALONE_PRODUCTS = PRODUCTS_TRANSLATIONS[DEFAULT_LOCALE].standaloneProducts;
export const ABILITY_APPS = PRODUCTS_TRANSLATIONS[DEFAULT_LOCALE].abilityApps;
export const ABILITY_APP_LIST: AbilityApp[] = Object.values(ABILITY_APPS);

export function getProductsData(locale: Locale) {
  const data = getProductsTranslation(locale);
  return {
    ...data,
    abilityAppList: Object.values(data.abilityApps),
  };
}
