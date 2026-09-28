export interface CompanyInfo {
  name: string;
  legalName: string;
  email: string;
  established: string;
  slogan: string;
  subcopy: string;
}

export interface StatusModule {
  ref: string;
  title: string;
  description: string;
}

export interface TargetAudience {
  label: string;
  role: string;
  description: string;
}

export interface BusinessTier {
  tag: string;
  title: string;
  description: string;
}

export interface ArchiveSystem {
  name: string;
  desc: string;
  url: string;
}

export interface FounderProfile {
  role: string;
  location: string;
  name: string;
  bio: string;
  systems: ArchiveSystem[];
}

import { Locale, DEFAULT_LOCALE } from './i18n';
import { COMPANY_TRANSLATIONS, getCompanyTranslation } from './translations/company';

export { getCompanyTranslation };

// 기본 로케일(ko) 기본값 re-export (기존 호환성 유지)
export const COMPANY_INFO = COMPANY_TRANSLATIONS[DEFAULT_LOCALE].companyInfo;
export const BOOT_LINES = COMPANY_TRANSLATIONS[DEFAULT_LOCALE].bootLines;
export const STATUS_MODULES = COMPANY_TRANSLATIONS[DEFAULT_LOCALE].statusModules;
export const TARGET_AUDIENCE = COMPANY_TRANSLATIONS[DEFAULT_LOCALE].targetAudience;
export const BUSINESS_TIERS = COMPANY_TRANSLATIONS[DEFAULT_LOCALE].businessTiers;
export const FOUNDER_PROFILE = COMPANY_TRANSLATIONS[DEFAULT_LOCALE].founderProfile;

export function getCompanyData(locale: Locale) {
  return getCompanyTranslation(locale);
}
