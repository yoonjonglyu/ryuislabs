import { redirect } from 'next/navigation';
import { DEFAULT_LOCALE } from '@/constants/i18n';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function LegacyAbilityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  redirect(`/${DEFAULT_LOCALE}/landing/ability/${slug}`);
}