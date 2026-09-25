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

export const COMPANY_INFO: CompanyInfo = {
  name: 'RyuisLabs',
  legalName: '(주)류이즈랩스',
  email: 'content@ryuislabs.com',
  established: '2026',
  slogan: '모든 성취의 이면에는,\n치열한 과정이 존재합니다.',
  subcopy:
    'RyuisLabs는 감성이나 우연에 기대지 않고, 인과와 논리로 인간의 노력과 과정을 정밀하게 기록합니다. 결과가 아닌 과정을, 증명 가능한 데이터로.',
};

export const BOOT_LINES = [
  'INITIALIZING RYUISLABS...',
  'LOADING CAUSALITY ENGINE... [OK]',
  'VERIFYING TRUST LAYER... [OK]',
  'ALL SYSTEMS NOMINAL',
];

export const STATUS_MODULES: StatusModule[] = [
  {
    ref: 'MODULE_01 / FOCUS_VISION',
    title: '시선 추적 몰입 검증',
    description:
      '전면 카메라로 시선과 이탈 여부를 감지해 순수 몰입 시간(Pure Focus Time)을 산출합니다. 영상은 기기 밖으로 나가지 않습니다.',
  },
  {
    ref: 'MODULE_02 / PHYSICAL_VISION',
    title: '관절 각도 동작 카운팅',
    description:
      'Pose Estimation으로 운동 동작의 유효 각도를 분석해, 자가 신고가 아닌 검증된 수행 횟수를 기록합니다.',
  },
  {
    ref: 'MODULE_03 / ZERO_KNOWLEDGE_LOG',
    title: '즉시 폐기, 스탯만 보존',
    description:
      '원본 데이터는 연산 직후 파기되고, 암호화된 통계 벡터만 남아 제3자에게 조작 불가능한 리포트로 전달됩니다.',
  },
];

export const TARGET_AUDIENCE: TargetAudience[] = [
  {
    label: 'FOR_USER',
    role: '수행 주체 — 수험생, 자기계발/홈트레이닝 유저',
    description:
      '얼굴과 방을 노출하지 않고도 자신의 몰입과 수행을 스스로에게, 그리고 필요한 사람에게 증명할 수 있습니다.',
  },
  {
    label: 'FOR_THIRD_PARTY',
    role: '신뢰 주체 — 학부모, PT 코치, 관리형 시설',
    description:
      '실시간 감시 없이도 조작 불가능한 결과 리포트를 받아, 관계의 신뢰를 데이터로 확인할 수 있습니다.',
  },
];

export const BUSINESS_TIERS: BusinessTier[] = [
  {
    tag: 'B2C',
    title: '프리미엄 검증 구독',
    description:
      '기본 상태창은 무료, AI 비전 검증 세션과 인증 프로필은 구독형으로 제공합니다.',
  },
  {
    tag: 'B2B2C',
    title: '제3자 증명 리포트',
    description:
      '원본 영상 없이 검증된 결과만 학부모·코치에게 알림으로 전달합니다.',
  },
  {
    tag: 'B2B',
    title: 'SDK / API 라이선스',
    description:
      '스터디카페, 관리형 학원, 피트니스 시설이 자체 서비스에 검증 엔진을 연동합니다.',
  },
];

export const FOUNDER_PROFILE: FounderProfile = {
  role: 'FOUNDER / ENGINEER',
  location: 'SEOUL, KR',
  name: '류윤종',
  bio: '웹 소프트웨어 개발자 출신으로, AI 하네스 엔지니어링을 활용해 기획부터 구현까지 단독으로 처리합니다. 명상, 철학, 심리학, 경제학을 오래 파온 개인적 탐구가 제품의 사고 방식에 그대로 스며 있고, 현재는 법공부를 병행하며 제도권 결합에 필요한 소양을 쌓고 있습니다.',
  systems: [
    {
      name: 'PORTFOLIO / ISA_ARCHIVE',
      desc: '전체 프로젝트 아카이브 — 지금까지의 실행 기록',
      url: 'https://yoonjonglyu.github.io',
    },
    {
      name: 'ABILITY_SERIES',
      desc: '모든 형태의 숙련을 다루는 Android 앱 포트폴리오',
      url: 'https://play.google.com/store/apps/dev?id=7405269184068017564',
    },
    {
      name: 'ASHARYU_DESIGN_SYSTEM',
      desc: '음양오행 철학을 UI/UX 토큰과 인터랙션으로 번역하는 디자인 시스템',
      url: 'https://asharyu-design-docs.vercel.app/',
    },
  ],
};
