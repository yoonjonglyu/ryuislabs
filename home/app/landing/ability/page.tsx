import { redirect } from 'next/navigation';
import { DEFAULT_LOCALE } from '@/constants/i18n';

export default function LegacyAbilityHubPage() {
  redirect(`/${DEFAULT_LOCALE}/landing/ability`);
}