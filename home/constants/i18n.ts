export const LOCALES = ['ko', 'en', 'ja', 'zh-TW'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'ko';

export interface LocaleMeta {
  code: Locale;
  label: string;
  shortLabel: string;
  htmlLang: string;
}

export const LOCALE_CONFIG: Record<Locale, LocaleMeta> = {
  ko: {
    code: 'ko',
    label: '한국어',
    shortLabel: 'KO',
    htmlLang: 'ko',
  },
  en: {
    code: 'en',
    label: 'English',
    shortLabel: 'EN',
    htmlLang: 'en',
  },
  ja: {
    code: 'ja',
    label: '日本語',
    shortLabel: 'JA',
    htmlLang: 'ja',
  },
  'zh-TW': {
    code: 'zh-TW',
    label: '繁體中文',
    shortLabel: '繁中',
    htmlLang: 'zh-TW',
  },
};

export function isValidLocale(lang: string | undefined): lang is Locale {
  return typeof lang === 'string' && (LOCALES as readonly string[]).includes(lang);
}

export function normalizeLocale(lang: string | undefined): Locale {
  if (isValidLocale(lang)) {
    return lang;
  }
  return DEFAULT_LOCALE;
}
