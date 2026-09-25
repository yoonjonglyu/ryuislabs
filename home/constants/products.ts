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

export const CATALOG_ENTRIES: CatalogEntry[] = [
  {
    key: 'ability',
    kind: 'series',
    name: 'ABILITY',
    tagline: '모든 형태의 숙련을 위한 도구',
    desc: '중력을 다루는 SF적 몰입 도구부터, 도가 수행을 담은 동양적 습관 도구까지 — 서로 다른 세계관 위에서 같은 원리로 작동하는 제품 라인.',
    ref: 'PRODUCT_LINE',
    accent: '#7B6CFF',
    status: 'live',
    href: '/landing/ability',
  },
  {
    key: 'memoflow',
    kind: 'single',
    name: 'MemoFlow',
    tagline: '가볍게 쓰고, 바로 내보내는 메모',
    desc: '떠오른 생각을 즉시 캡처하고 체크리스트로 정리해, 원하는 형식으로 바로 내보냅니다. 군더더기 없는 단일 목적 유틸리티.',
    ref: 'STANDALONE_TOOL',
    accent: '#4FA8E0',
    status: 'live',
    rating: '5.0★',
    href: '/landing/memoflow',
  },
  {
    key: 'seedvault',
    kind: 'single',
    name: 'SeedVault',
    tagline: '단 하나의 볼트, 군사급 암호화',
    desc: 'Argon2id + AES-256-GCM으로 모든 비밀을 하나의 금고에 재잠금합니다. 자동 잠금 뷰어와 QR 공유까지 — 제로 지식 원칙 위에서 설계된 보안 유틸리티.',
    ref: 'STANDALONE_TOOL',
    accent: '#22D3C4',
    status: 'soon',
    href: '/landing/seedvault',
  },
];

export const STANDALONE_PRODUCTS: Record<string, StandaloneProduct> = {
  memoflow: {
    slug: 'memoflow',
    name: 'MemoFlow: Simple Draft & Notes',
    tagline: '가볍게 쓰고, 바로 내보내는 메모',
    ref: 'STANDALONE_TOOL',
    accent: '#4FA8E0',
    status: 'live',
    rating: '5.0★',
    reviews: '17 REVIEWS',
    downloads: '100+ DOWNLOADS',
    intro:
      '떠오른 생각을 놓치지 않도록 설계된 가벼운 메모 앱입니다. 짧은 메모, 체크리스트, 긴 초안까지 — 형식에 맞춰 쓰는 방식을 바꿀 수 있습니다. 데이터는 서버가 아닌 기기 안에만 남습니다.',
    features: [
      {
        title: 'VERSATILE NOTE TYPES',
        desc: '일반 메모, 체크리스트형 할 일, 긴 글을 위한 드래프트 모드까지 하나의 앱에서 전환할 수 있습니다.',
      },
      {
        title: 'DRAFT MODE',
        desc: '군더더기 없는 화면에서 몰입해서 긴 글을 쓸 수 있는 전용 작성 모드입니다.',
      },
      {
        title: 'FLEXIBLE EXPORT',
        desc: 'HTML, Markdown, JSON 등 원하는 포맷으로 바로 내보내 다른 도구와 자유롭게 연결됩니다.',
      },
      {
        title: 'PRIVACY FIRST',
        desc: '기록은 기기 안에만 저장되고, 서버로 전송되지 않습니다.',
      },
    ],
    screenshots: [
      'https://play-lh.googleusercontent.com/jrcR_jY9AQaFVbs2iLIFwj-mLl4bdc4jZbGSnL0cxEUUj4LJlDF4TdRL0mxzdjbBjg0WzL5ngR9SjxSBRMyQJg=w526-h296',
      'https://play-lh.googleusercontent.com/syasY42uMcMrfrlcO0i3z5iBVOHzLPysE64h-u6Y6USiMDGNTWhqi-ZCn7Yt4ir-q1ue6PMUb_Um6vp0Js14ZJE=w526-h296',
      'https://play-lh.googleusercontent.com/rQu_0iyyI6kuw4kFrq9Fa2CfielRUVyQxWvjA1bFsdN_3n4s62PIVNOCg06_5pXUiTVMgksVwMnUYHDxB1nzVA=w526-h296',
      'https://play-lh.googleusercontent.com/L0KvPUk5NbAAoqyKhVsZoo_gCBOv8myER6RyKSS-M9nX8_50gukf34zWdxdylFU5sevlwYrzzWhMt7dpnr1b6A=w526-h296',
    ],
    playUrl: 'https://play.google.com/store/apps/details?id=com.yoonjongryu.memo',
  },
  seedvault: {
    slug: 'seedvault',
    name: 'SeedVault: Encrypted Vault',
    tagline: '단 하나의 볼트, 군사급 암호화',
    ref: 'STANDALONE_TOOL',
    accent: '#22D3C4',
    status: 'soon',
    intro:
      'Argon2id + AES-256-GCM으로 모든 비밀을 하나의 금고에 재잠금합니다. 시드 문구, 개인 키, 민감한 텍스트를 기기 안에서만 암호화하고, 서버에는 아무것도 남기지 않는 제로 지식 원칙 위에서 설계됐습니다.',
    features: [
      {
        title: 'ONE VAULT FOR EVERY SECRET',
        desc: '시드 문구, 개인 키, 토큰 등 흩어진 비밀 정보를 하나의 금고에 정리해 보관합니다.',
      },
      {
        title: 'MILITARY-GRADE ENCRYPTION',
        desc: 'Argon2id 키 유도와 AES-256-GCM 암호화로 모든 항목을 이중으로 재잠금합니다.',
      },
      {
        title: 'AUTO-LOCKING VIEWER',
        desc: '일정 시간이 지나면 뷰어가 자동으로 잠겨, 열어둔 채 방치되는 상황을 막습니다.',
      },
      {
        title: 'SHARE VIA QR',
        desc: '필요할 때만 QR 코드로 비밀을 안전하게 공유하고, 그 외에는 완전히 격리된 상태로 유지합니다.',
      },
    ],
    screenshots: [],
  },
};

export const ABILITY_APPS: Record<string, AbilityApp> = {
  'gravity-time': {
    slug: 'gravity-time',
    name: 'ABILITY: Gravity & Time',
    tagline: '중력의 힘으로 시간을 통제한다',
    desc: '포커스 세션을 하나의 우주적 사건으로 바꾸는 타이머. 클래식 / 포모도로 / 인터벌 세 가지 시간 모드와, 화면이 꺼져도 유지되는 백그라운드 알림으로 몰입을 지켜줍니다.',
    lineage: 'WESTERN / SF LINEAGE',
    ref: 'ABILITY_01',
    accent: '#7B6CFF',
    status: 'live',
    rating: '4.8★',
    reviews: '22 REVIEWS',
    downloads: '100+ DOWNLOADS',
    intro:
      '평범한 타이머는 지겹습니다. 포커스 세션을 하나의 우주적 사건으로 바꾸는 딥 그레이 UI 위에서, 시간은 흐르는 게 아니라 당깁니다. 클래식·포모도로·인터벌 세 가지 모드로 몰입의 형태를 고를 수 있습니다.',
    features: [
      {
        title: 'THREE TEMPORAL MODES',
        desc: '클래식(단일 몰입) · 포모도로(집중/휴식 순환) · 인터벌(고강도 세션)까지, 상황에 맞는 시간 구조를 선택합니다.',
      },
      {
        title: 'BACKGROUND STABILITY',
        desc: '네이티브 엔진 기반으로 화면이 꺼지거나 앱이 백그라운드에 있어도 알림이 정확히 도달합니다.',
      },
      {
        title: 'GRAVITY STATISTICS',
        desc: '통제한 모든 순간이 기록되어, 몰입 패턴의 변화를 통계로 확인할 수 있습니다.',
      },
      {
        title: 'ENERGY RECHARGE',
        desc: '에너지가 소진되면 짧은 충전(광고)으로 다시 시간을 통제할 힘을 얻습니다.',
      },
    ],
    screenshots: [
      'https://play-lh.googleusercontent.com/86Fu083_e4Eo2wio9AdqoanK6tPfN2xBd9V5Y2hRVZsf82I2mcQQNc68Bp6zzY2TJ98Cu0v6_NUaQPKkLuyAmQ=w526-h296',
      'https://play-lh.googleusercontent.com/pjgMakvPJDNk__x7lrK8zSAr5L4bNhYl_s-UEIDgW4dbkZO8KFqQcbzAiNmTtD6HX6_t7km7tLSM_Dr6ljJwmw=w526-h296',
      'https://play-lh.googleusercontent.com/qZA6ZuU4CVWZhsSWKhyALmjSeRjEVM4INokQl2RD143VGsK1Ea-WktW3ZJAyNjt3vpDGAYeFn5pDgS2oVG4JAQ=w526-h296',
    ],
    playUrl: 'https://play.google.com/store/apps/details?id=com.yoonjongryu.timer',
    otherSlug: 'daoxin',
    otherName: 'ABILITY: DaoXin',
  },
  daoxin: {
    slug: 'daoxin',
    name: 'ABILITY: DaoXin',
    altName: '도심',
    tagline: '마음을 수행하고, 성장을 기록한다',
    desc: '일상의 습관을 "정신 수행"으로 재정의하는 도가풍 수행 앱. 수묵화 질감의 미니멀 UI 위에서 기록이 쌓일수록 내공이 차오르고, 경지가 오릅니다. 메인 / 통계 / 관리 탭으로 하루의 리듬을 정리합니다.',
    lineage: 'EASTERN / CULTIVATION LINEAGE',
    ref: 'ABILITY_02',
    accent: '#3E8F6E',
    status: 'live',
    rating: '5.0★',
    reviews: '8 REVIEWS',
    downloads: '10+ DOWNLOADS',
    intro:
      '"마음을 수행하여 높은 경지로 오른다." 일상의 습관과 기록을 정신 수행으로 재정의하는 도가풍 생산성 앱. 수묵화와 서예 질감의 미니멀 UI 위에서, 매일의 기록이 내공이 되고 경지가 됩니다.',
    features: [
      {
        title: 'CULTIVATION LOG',
        desc: '하루의 할 일을 "정신 수행"으로 기록하고, 수행이 쌓일수록 내공이 자랍니다.',
      },
      {
        title: 'RANK SYSTEM',
        desc: '꾸준함을 기준으로 범인(凡人)에서 신선(神仙)에 이르는 경지를 오릅니다.',
      },
      {
        title: 'INSIGHTS (NOTES)',
        desc: '수행 중 떠오른 깨달음을 기록해 자신만의 지혜서를 만들어갑니다.',
      },
      {
        title: 'CONSTELLATION STATS',
        desc: '진행 상황을 밤하늘의 별자리처럼 시각화해 성장의 궤적을 한눈에 봅니다.',
      },
    ],
    screenshots: [
      'https://play-lh.googleusercontent.com/T8kBoNBDstKoF_4CX7XK15lTGLxSJ3zfPEFJcxOWGxB9Ed3QYifnNacq32FBEQY7vgDtn6tBn7ZJJnzS-85snzM=w526-h296',
      'https://play-lh.googleusercontent.com/CLfnd5If-sU1GKFt_tJQN4N77CPIrX1XuHacEYRfsxDbc5xCvJzndO2pBNgfhZfKUgCM1OWgH1vr8QT0YxS4Dw=w526-h296',
      'https://play-lh.googleusercontent.com/OB6XQygro900xg37i_Rt58EeIdfIW67yYhrHIOImDWd8SQmre1pHupbXZqJZsMidR4mOPWVMSjvLAjoSqxFj=w526-h296',
    ],
    playUrl: 'https://play.google.com/store/apps/details?id=com.yoonjongryu.daoxin',
    otherSlug: 'gravity-time',
    otherName: 'ABILITY: Gravity & Time',
  },
};

export const ABILITY_APP_LIST: AbilityApp[] = Object.values(ABILITY_APPS);
