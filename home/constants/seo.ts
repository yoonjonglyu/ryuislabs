import { Locale, LOCALES } from './i18n';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ryuislabs.com';

export interface FaqItem {
  question: string;
  answer: string;
}

export const SEO_DATA: Record<
  Locale,
  {
    title: string;
    description: string;
    keywords: string[];
    faq: FaqItem[];
  }
> = {
  ko: {
    title: 'RyuisLabs (류이즈랩스) — 온디바이스 AI 비전 & 프라이버시 보존 상태 검증 엔진',
    description:
      'RyuisLabs는 감성이나 우연에 기대지 않고, 온디바이스 AI 비전과 제로 지식(Zero-Knowledge) 원칙으로 인간의 노력과 몰입 과정을 검증 가능한 데이터로 기록하는 시스템 엔지니어링 스튜디오입니다.',
    keywords: [
      'RyuisLabs',
      '류이즈랩스',
      'RYUis : STATUS',
      '온디바이스 AI',
      '제로지식',
      'Zero-Knowledge',
      '프라이버시 보존',
      '몰입 검증',
      '시선 추적',
      'Pose Estimation',
      'SeedVault',
      '시드볼트',
      'MemoFlow',
      '메모플로우',
      'Gravity Time',
      '그래비티 타임',
      'Daoxin',
      '도심',
      '인디 스튜디오',
      '1인 시스템 엔지니어링',
    ],
    faq: [
      {
        question: 'RyuisLabs(류이즈랩스)는 어떤 기업인가요?',
        answer:
          'RyuisLabs는 2026년 창립된 시스템 엔지니어링 스튜디오로, 온디바이스 AI 비전 기술과 제로 지식(Zero-Knowledge) 원칙을 결합하여 개인의 몰입과 훈련 과정을 프라이버시 침해 없이 정밀하게 검증하고 데이터화하는 고성능 소프트웨어를 개발합니다.',
      },
      {
        question: '플래그십 시스템 RYUis : STATUS의 동작 원리와 프라이버시 보호 방식은 무엇인가요?',
        answer:
          'RYUis : STATUS는 기기 내 온디바이스 AI 비전(시선 추적 및 관절 각도 포즈 추정)을 활용해 순수 몰입 시간과 동작 횟수를 객관적으로 산출합니다. 모든 영상은 기기 밖으로 전송되지 않고 연산 즉시 폐기되며, 암호화된 통계 벡터 데이터만 보존되어 완전한 프라이버시를 보장합니다.',
      },
      {
        question: 'RyuisLabs의 주요 출시 및 개발 제품군에는 무엇이 있나요?',
        answer:
          '대표 제품군으로는 군사급 암호화(Argon2id + AES-256-GCM) 기반 로컬 오프라인 볼트인 SeedVault, 단일 목적의 초경량 메모 캡처 도구 MemoFlow, SF 중력 세계관 시간 통제 타이머 Gravity Time, 그리고 도가 수행 철학을 담은 내면 단련 앱 DaoXin(도심)이 있습니다.',
      },
      {
        question: 'RyuisLabs의 비즈니스 모델 및 제휴 형태는 어떻게 되나요?',
        answer:
          '개인 유저를 위한 B2C 상태창 및 AI 비전 세션 구독, 학부모 및 코치를 위한 제3자 신뢰 검증 리포트(B2B2C), 그리고 스터디카페·관리형 학원·피트니스 센터를 위한 온디바이스 검증 엔진 SDK/API 라이선스(B2B) 모델을 운영합니다.',
      },
    ],
  },
  en: {
    title: 'RyuisLabs — On-Device AI Vision & Privacy-Preserving State Verification Engine',
    description:
      'RyuisLabs is a systems engineering studio developing on-device AI vision and zero-knowledge solutions to objectively verify and record human effort, focus, and discipline without privacy compromise.',
    keywords: [
      'RyuisLabs',
      'RYUis : STATUS',
      'On-device AI',
      'Zero-Knowledge',
      'Privacy-Preserving Verification',
      'Pure Focus Time',
      'Eye Tracking',
      'Pose Estimation',
      'SeedVault',
      'MemoFlow',
      'Gravity Time',
      'DaoXin',
      'Systems Engineering Studio',
      'Solo Founder Software',
    ],
    faq: [
      {
        question: 'What is RyuisLabs?',
        answer:
          'RyuisLabs is a systems engineering studio founded in 2026. It develops deterministic, privacy-preserving software that objectively measures and verifies human focus and athletic execution using on-device AI vision and zero-knowledge cryptographic architectures.',
      },
      {
        question: 'How does RYUis : STATUS preserve user privacy while verifying effort?',
        answer:
          'RYUis : STATUS computes Pure Focus Time and movement counts entirely on-device via camera-based gaze tracking and pose estimation. Raw video streams are never transmitted to external servers and are discarded immediately after inference, leaving only tamper-proof encrypted stat vectors.',
      },
      {
        question: 'What applications are included in the RyuisLabs product portfolio?',
        answer:
          'The portfolio includes SeedVault (military-grade local password & seed vault with Argon2id + AES-256-GCM), MemoFlow (lightweight draft & markdown capture utility), Gravity & Time (sci-fi pomodoro & focus controller), and DaoXin (Taoist mental discipline and habit mastery companion).',
      },
      {
        question: 'What are the commercial tiers and integration options for RyuisLabs?',
        answer:
          'RyuisLabs operates a multi-tier model: B2C premium verification subscriptions for individuals, B2B2C third-party verifiable proof reports for coaches and guardians, and B2B SDK/API licensing for study cafes, managed academies, and athletic facilities.',
      },
    ],
  },
  ja: {
    title: 'RyuisLabs (リュイズラボ) — オンデバイスAIビジョン＆プライバシー保護状態検証エンジン',
    description:
      'RyuisLabsは、オンデバイスAIビジョンとゼロ知識(Zero-Knowledge)原則を基盤に、個人の没入や訓練のプロセスをプライバシー侵害なく検証可能なデータとして精密に記録するエンジニアリングスタジオです。',
    keywords: [
      'RyuisLabs',
      'リュイズラボ',
      'RYUis : STATUS',
      'オンデバイスAI',
      'ゼロ知識証明',
      'プライバシー保護',
      '集中力検証',
      '視線追跡',
      '姿勢推定',
      'SeedVault',
      'MemoFlow',
      'Gravity Time',
      'DaoXin',
      'インディ開発スタジオ',
    ],
    faq: [
      {
        question: 'RyuisLabsとはどのようなスタジオですか？',
        answer:
          'RyuisLabsは2026年に設立されたシステムエンジニアリングスタジオです。オンデバイスAIビジョンとゼロ知識アーキテクチャを活用し、個人の集中度やトレーニングの遂行を客観的かつ安全に記録する高信頼性ソフトウェアを開発しています。',
      },
      {
        question: 'RYUis : STATUSの技術原理とプライバシー保護の仕組みは？',
        answer:
          'オンデバイスAIビジョンにより視線と骨格の動きを端末内でのみ解析し、純粋な集中時間や運動回数を測定します。映像は外部サーバーへ送信されず解析直後に完全破棄され、改ざん不能な暗号化統計データのみが保持されます。',
      },
      {
        question: 'RyuisLabsが提供する主な製品ラインナップは何ですか？',
        answer:
          '軍事級暗号化(Argon2id + AES-256-GCM)のローカル金庫アプリ「SeedVault」、軽量メモ・ドラフトツール「MemoFlow」、SF的時間管理タイマー「Gravity Time」、道教の精神修練に基づく習慣形成アプリ「DaoXin(道心)」などを展開しています。',
      },
    ],
  },
  'zh-TW': {
    title: 'RyuisLabs (柳氏實驗室) — 端側AI視覺與隱私保護狀態驗證引擎',
    description:
      'RyuisLabs是一所系統工程工作室，基於端側AI視覺與零知識(Zero-Knowledge)原則，精確記錄與客觀驗證人類的專注與訓練過程，無需承擔隱私洩露風險。',
    keywords: [
      'RyuisLabs',
      'RYUis : STATUS',
      '端側AI',
      '零知識證明',
      '隱私保護',
      '專注力驗證',
      '視線追蹤',
      '姿態估計',
      'SeedVault',
      'MemoFlow',
      'Gravity Time',
      'DaoXin',
      '獨立工程工作室',
    ],
    faq: [
      {
        question: 'RyuisLabs 是一家什麼樣的企業？',
        answer:
          'RyuisLabs 成立於 2026 年，是一家專注於決定論與因果律的系統工程工作室，透過端側 AI 視覺技術與零知識密碼架構，提供客觀驗證人類努力與專注過程的高性能解決方案。',
      },
      {
        question: '旗艦系統 RYUis : STATUS 如何在保護隱私的前提下進行驗證？',
        answer:
          '系統透過設備本機的相機進行視線追蹤與骨骼關節姿態分析，原始影像計算完畢後立即就地銷毀，絕不上傳雲端，僅保留不可篡改的加密統計向量報告。',
      },
      {
        question: 'RyuisLabs 旗下有哪些核心產品？',
        answer:
          '包括採用軍規加密(Argon2id + AES-256-GCM)的本機金庫 SeedVault、輕量化草稿記錄工具 MemoFlow、科幻重力風格專注計時器 Gravity Time，以及融合東方道家修養的習慣精進工具 DaoXin（道心）。',
      },
    ],
  },
};

/**
 * Schema.org Organization 마크업 빌더
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'RyuisLabs',
    legalName: 'RyuisLabs',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    email: 'content@ryuislabs.com',
    foundingDate: '2026',
    founder: {
      '@type': 'Person',
      name: 'ryuis',
      jobTitle: 'Founder & Systems Engineer',
      url: 'https://yoonjonglyu.github.io',
      sameAs: [
        'https://github.com/yoonjonglyu',
        'https://play.google.com/store/apps/dev?id=7405269184068017564',
      ],
    },
    sameAs: [
      'https://yoonjonglyu.github.io',
      'https://play.google.com/store/apps/dev?id=7405269184068017564',
    ],
    description:
      'RyuisLabs is a systems engineering studio developing on-device AI vision and zero-knowledge state verification engines.',
    knowsAbout: [
      'On-Device AI Vision',
      'Zero-Knowledge Verification',
      'Pose Estimation',
      'Eye Tracking',
      'Cryptographic State Anchors',
      'Local-First Software',
      'Argon2id Cryptography',
      'AES-256-GCM',
    ],
  };
}

/**
 * Schema.org WebSite 마크업 빌더
 */
export function getWebsiteSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/${locale}`,
    name: 'RyuisLabs',
    description: SEO_DATA[locale].description,
    inLanguage: locale,
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
  };
}

/**
 * Schema.org FAQPage 마크업 빌더
 */
export function getFaqSchema(faqList: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/**
 * Schema.org SoftwareApplication 마크업 빌더
 */
export function getSoftwareApplicationSchema(
  app: {
    name: string;
    description: string;
    operatingSystem?: string;
    applicationCategory?: string;
    playUrl?: string;
    rating?: string;
    reviews?: string;
    features?: { title: string; desc: string }[];
  },
  url: string
) {
  const ratingValue = app.rating ? parseFloat(app.rating.replace(/[^\d.]/g, '')) : undefined;
  const reviewCount = app.reviews ? parseInt(app.reviews.replace(/[^\d]/g, ''), 10) : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: app.name,
    description: app.description,
    url,
    applicationCategory: app.applicationCategory || 'ProductivityApplication',
    operatingSystem: app.operatingSystem || 'Android',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    ...(app.playUrl && { downloadUrl: app.playUrl, installUrl: app.playUrl }),
    ...(ratingValue && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: ratingValue,
        bestRating: '5',
        worstRating: '1',
        ratingCount: reviewCount || 10,
      },
    }),
    ...(app.features && {
      featureList: app.features.map((f) => `${f.title}: ${f.desc}`).join(', '),
    }),
  };
}

/**
 * Schema.org BreadcrumbList 빌더
 */
export function getBreadcrumbSchema(items: { name: string; url?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}

/**
 * hreflang alternates 객체 생성 헬퍼
 */
export function getAlternateLanguages(pathWithoutLang: string) {
  const languages: Record<string, string> = {};
  for (const loc of LOCALES) {
    languages[loc] = `${SITE_URL}/${loc}${pathWithoutLang}`;
  }
  languages['x-default'] = `${SITE_URL}/ko${pathWithoutLang}`;
  return languages;
}
