import { NextRequest, NextResponse } from 'next/server';
import { LOCALES, DEFAULT_LOCALE, Locale } from '@/constants/i18n';

const PUBLIC_FILE = /\.(.*)$/;

function getPreferredLocale(request: NextRequest): Locale {
  const acceptLang = request.headers.get('accept-language');
  if (!acceptLang) return DEFAULT_LOCALE;

  const lower = acceptLang.toLowerCase();
  if (lower.includes('ja')) return 'ja';
  if (lower.includes('zh-tw') || lower.includes('zh-hk') || lower.includes('zh-hant')) return 'zh-TW';
  if (lower.includes('en')) return 'en';
  if (lower.includes('ko')) return 'ko';

  return DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 정적 파일 및 Next 내부 경로 제외
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // 이미 로케일이 포함되어 있는지 확인
  const pathnameHasLocale = LOCALES.some(
    (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // 로케일이 없는 경우 적절한 로케일로 리다이렉트
  const locale = getPreferredLocale(request);
  const targetUrl = new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url);
  return NextResponse.redirect(targetUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|logo.png).*)'],
};
