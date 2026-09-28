import { redirect } from 'next/navigation';
import { DEFAULT_LOCALE } from '@/constants/i18n';

export default function LegacyLandingPage() {
  redirect(`/${DEFAULT_LOCALE}/landing`);
}