import { Locale } from '../i18n';
import { CompanyInfo, StatusModule, TargetAudience, BusinessTier, FounderProfile } from '../company';

export interface CompanyTranslationData {
  companyInfo: CompanyInfo;
  bootLines: string[];
  statusModules: StatusModule[];
  targetAudience: TargetAudience[];
  businessTiers: BusinessTier[];
  founderProfile: FounderProfile;
}

export const COMPANY_TRANSLATIONS: Record<Locale, CompanyTranslationData> = {
  ko: {
    companyInfo: {
      name: 'RyuisLabs',
      legalName: 'RyuisLabs',
      email: 'content@ryuislabs.com',
      established: '2026',
      slogan: '모든 성취의 이면에는,\n치열한 과정이 존재합니다.',
      subcopy:
        'RyuisLabs는 감성이나 우연에 기대지 않고, 인과와 논리로 인간의 노력과 과정을 정밀하게 기록합니다. 결과가 아닌 과정을, 증명 가능한 데이터로.',
    },
    bootLines: [
      'INITIALIZING RYUISLABS...',
      'LOADING CAUSALITY ENGINE... [OK]',
      'VERIFYING TRUST LAYER... [OK]',
      'ALL SYSTEMS NOMINAL',
    ],
    statusModules: [
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
    ],
    targetAudience: [
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
    ],
    businessTiers: [
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
    ],
    founderProfile: {
      role: 'FOUNDER / ENGINEER',
      location: 'SEOUL, KR',
      name: 'ryuis',
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
    },
  },
  en: {
    companyInfo: {
      name: 'RyuisLabs',
      legalName: 'RyuisLabs',
      email: 'content@ryuislabs.com',
      established: '2026',
      slogan: 'Behind every achievement,\nthere lies a rigorous process.',
      subcopy:
        'RyuisLabs does not rely on sentiment or chance. Through engineered causality and logic, we record human effort and process with precision—turning process into verifiable data.',
    },
    bootLines: [
      'INITIALIZING RYUISLABS...',
      'LOADING CAUSALITY ENGINE... [OK]',
      'VERIFYING TRUST LAYER... [OK]',
      'ALL SYSTEMS NOMINAL',
    ],
    statusModules: [
      {
        ref: 'MODULE_01 / FOCUS_VISION',
        title: 'Gaze Tracking Focus Verification',
        description:
          'Calculates Pure Focus Time by detecting gaze vector and deviation via on-device front camera. Video frames never leave the device.',
      },
      {
        ref: 'MODULE_02 / PHYSICAL_VISION',
        title: 'Kinematic Angle Repetition Counting',
        description:
          'Analyzes valid motion angles with Pose Estimation to log verified repetitions rather than self-reported assertions.',
      },
      {
        ref: 'MODULE_03 / ZERO_KNOWLEDGE_LOG',
        title: 'Immediate Purge, Stats Preserved',
        description:
          'Raw footage is destroyed immediately post-computation. Only encrypted statistical vectors remain to deliver tamper-proof third-party reports.',
      },
    ],
    targetAudience: [
      {
        label: 'FOR_USER',
        role: 'Performing Subject — Students, Self-learners & Home Trainees',
        description:
          'Prove your sustained focus and rigorous execution to yourself and stakeholders without ever exposing facial or domestic video.',
      },
      {
        label: 'FOR_THIRD_PARTY',
        role: 'Trust Stakeholder — Parents, PT Coaches & Supervised Academies',
        description:
          'Receive tamper-proof verification reports without invasive real-time surveillance, grounding relational trust in immutable data.',
      },
    ],
    businessTiers: [
      {
        tag: 'B2C',
        title: 'Premium Verification Subscription',
        description:
          'Core HUD is free. AI vision verification sessions and certified achievement profiles are provided via subscription.',
      },
      {
        tag: 'B2B2C',
        title: 'Third-Party Proof Reports',
        description:
          'Dispatches verified progress and milestone alerts to parents and coaches with zero raw media transmission.',
      },
      {
        tag: 'B2B',
        title: 'SDK / API Licensing',
        description:
          'Study lounges, prep institutes, and fitness studios embed our tamper-proof verification engine directly into native systems.',
      },
    ],
    founderProfile: {
      role: 'FOUNDER / ENGINEER',
      location: 'SEOUL, KR',
      name: 'ryuis',
      bio: 'Web software engineer who leverages AI harness engineering to independently drive product architecture from conceptual design to full production. Longstanding inquiries into meditation, philosophy, psychology, and economics deeply inform the core logic, complemented by ongoing legal studies bridging software with institutional frameworks.',
      systems: [
        {
          name: 'PORTFOLIO / ISA_ARCHIVE',
          desc: 'Comprehensive project archive — Execution log to date',
          url: 'https://yoonjonglyu.github.io',
        },
        {
          name: 'ABILITY_SERIES',
          desc: 'Android application portfolio covering all forms of mastery',
          url: 'https://play.google.com/store/apps/dev?id=7405269184068017564',
        },
        {
          name: 'ASHARYU_DESIGN_SYSTEM',
          desc: 'Design system translating Yin-Yang and Five Elements philosophy into UI/UX tokens',
          url: 'https://asharyu-design-docs.vercel.app/',
        },
      ],
    },
  },
  ja: {
    companyInfo: {
      name: 'RyuisLabs',
      legalName: 'RyuisLabs',
      email: 'content@ryuislabs.com',
      established: '2026',
      slogan: 'すべての成果の裏には、\n熾烈なプロセスが存在します。',
      subcopy:
        'RyuisLabsは感傷や偶然に頼らず、因果と論理によって人間の努力とプロセスを精密に記録します。結果ではなくプロセスを、検証可能な客観データへ。',
    },
    bootLines: [
      'INITIALIZING RYUISLABS...',
      'LOADING CAUSALITY ENGINE... [OK]',
      'VERIFYING TRUST LAYER... [OK]',
      'ALL SYSTEMS NOMINAL',
    ],
    statusModules: [
      {
        ref: 'MODULE_01 / FOCUS_VISION',
        title: '視線追跡による没入検証',
        description:
          'フロントカメラで視線と集中離脱を検知し、純粋な没入時間（Pure Focus Time）を算出。映像が端末外へ送信されることは一切ありません。',
      },
      {
        ref: 'MODULE_02 / PHYSICAL_VISION',
        title: '関節角度による動作カウント',
        description:
          'ポーズ推定（Pose Estimation）で運動の有効角度を解析し、自己申告ではなく客観的に検証された反復回数を記録します。',
      },
      {
        ref: 'MODULE_03 / ZERO_KNOWLEDGE_LOG',
        title: '即時破棄・統計値のみ保存',
        description:
          '元映像データは演算直後に破棄され、暗号化された統計ベクトルのみが改ざん不能なレポートとして第三者へ共有されます。',
      },
    ],
    targetAudience: [
      {
        label: 'FOR_USER',
        role: '実践主体 — 受験生、自己研鑽・ホームトレーニング層',
        description:
          '顔や室内の様子を晒すことなく、自らの没入と実践を自分自身、そして関係者へ客観的に証明できます。',
      },
      {
        label: 'FOR_THIRD_PARTY',
        role: '信頼主体 — 保護者、パーソナルトレーナー、管理型施設',
        description:
          '侵入的な監視を行うことなく改ざん不能なレポートを受け取り、データに裏打ちされた堅牢な信頼関係を構築できます。',
      },
    ],
    businessTiers: [
      {
        tag: 'B2C',
        title: 'プレミアム検証サブスクリプション',
        description:
          '基本ステータス機能は無料。AIビジョン検証セッションおよび公式認証プロファイルはサブスクリプションで提供します。',
      },
      {
        tag: 'B2B2C',
        title: '第三者証明レポート',
        description:
          '元映像を送ることなく、検証済みレポートと進捗通知のみを保護者やトレーナーへ安全に届けます。',
      },
      {
        tag: 'B2B',
        title: 'SDK / API ライセンス',
        description:
          '自習室、管理型学習塾、フィットネス施設が自社プラットフォームへ検証エンジンをシームレスに組み込めます。',
      },
    ],
    founderProfile: {
      role: 'FOUNDER / ENGINEER',
      location: 'SEOUL, KR',
      name: 'ryuis',
      bio: 'Webソフトウェアエンジニア出身。AIハーネスエンジニアリングを活用し、企画・設計から実装・運用までを単独で遂行。瞑想、哲学、心理学、経済学への長年の探求が製品思想の基盤となっており、現在は法学研究も並行して制度的連携に必要な素養を培っています。',
      systems: [
        {
          name: 'PORTFOLIO / ISA_ARCHIVE',
          desc: '全プロジェクトアーカイブ — これまでの実行記録',
          url: 'https://yoonjonglyu.github.io',
        },
        {
          name: 'ABILITY_SERIES',
          desc: 'あらゆる形態の習練を扱うAndroidアプリポートフォリオ',
          url: 'https://play.google.com/store/apps/dev?id=7405269184068017564',
        },
        {
          name: 'ASHARYU_DESIGN_SYSTEM',
          desc: '陰陽五行思想をUI/UXトークンとインタラクションへ翻訳するデザインシステム',
          url: 'https://asharyu-design-docs.vercel.app/',
        },
      ],
    },
  },
  'zh-TW': {
    companyInfo: {
      name: 'RyuisLabs',
      legalName: 'RyuisLabs',
      email: 'content@ryuislabs.com',
      established: '2026',
      slogan: '每項卓越成就的背後，\n皆存在嚴謹而熾熱的歷程。',
      subcopy:
        'RyuisLabs 不仰賴感性與僥倖，以嚴謹因果與邏輯，精準記錄人類的努力與歷程。將過程轉化為可驗證的客觀數據。',
    },
    bootLines: [
      'INITIALIZING RYUISLABS...',
      'LOADING CAUSALITY ENGINE... [OK]',
      'VERIFYING TRUST LAYER... [OK]',
      'ALL SYSTEMS NOMINAL',
    ],
    statusModules: [
      {
        ref: 'MODULE_01 / FOCUS_VISION',
        title: '視線追蹤專注驗證',
        description:
          '透過前置鏡頭偵測視線指向與注意力偏移，精算純專注時間（Pure Focus Time）。原始視訊絕不傳輸至設備之外。',
      },
      {
        ref: 'MODULE_02 / PHYSICAL_VISION',
        title: '關節角度動作計數',
        description:
          '運用姿態估計（Pose Estimation）分析人體動作有效幾何角度，記錄客觀驗證之鍛鍊次數，杜絕自欺式申報。',
      },
      {
        ref: 'MODULE_03 / ZERO_KNOWLEDGE_LOG',
        title: '即時銷毀，僅存特徵指標',
        description:
          '原始視訊運算後立即銷毀，僅保留加密特徵向量與統計摘要，向第三方提供不可篡改之客觀報告。',
      },
    ],
    targetAudience: [
      {
        label: 'FOR_USER',
        role: '實踐主體 — 考生、自我研習者與居家健身人士',
        description:
          '無需暴露面容或個人私密空間，即可向自己與監督者客觀證明深層專注與嚴謹實踐。',
      },
      {
        label: 'FOR_THIRD_PARTY',
        role: '信任主體 — 家長、私人教練、管理型研習機構',
        description:
          '無需進行侵入式即時監視，即可取得防篡改之客觀成果報告，以數據鞏固各方信任。',
      },
    ],
    businessTiers: [
      {
        tag: 'B2C',
        title: '進階驗證訂閱方案',
        description:
          '核心狀態面板基礎版免費提供，AI 視覺深度驗證工作階段與認證成就檔案採訂閱制服務。',
      },
      {
        tag: 'B2B2C',
        title: '第三方客觀證明報告',
        description:
          '在絕不傳輸原始影像的前提下，將經驗證之進度摘要與關鍵通知發送至家長或教練終端。',
      },
      {
        tag: 'B2B',
        title: 'SDK / API 授權整合',
        description:
          'K書中心、升學補習機構與健身場館可將本驗證引擎無縫整合至自有管理系統。',
      },
    ],
    founderProfile: {
      role: 'FOUNDER / ENGINEER',
      location: 'SEOUL, KR',
      name: 'ryuis',
      bio: '資深 Web 軟體工程師背景，擅長運用 AI Harness 工程技術獨立貫穿從架構規劃至系統落地。長期對冥想、哲學、心理學與經濟學的思索已深度內化為產品思維，現正進修法律，為科技結合制度化體系奠定堅實基礎。',
      systems: [
        {
          name: 'PORTFOLIO / ISA_ARCHIVE',
          desc: '完整專案成果庫 — 迄今為止的系統實現紀錄',
          url: 'https://yoonjonglyu.github.io',
        },
        {
          name: 'ABILITY_SERIES',
          desc: '涵蓋多元心智與專注訓練的 Android 應用系列',
          url: 'https://play.google.com/store/apps/dev?id=7405269184068017564',
        },
        {
          name: 'ASHARYU_DESIGN_SYSTEM',
          desc: '將陰陽五行哲學轉化為 UI/UX Token 與互動邏輯之設計系統',
          url: 'https://asharyu-design-docs.vercel.app/',
        },
      ],
    },
  },
};

export function getCompanyTranslation(locale: Locale): CompanyTranslationData {
  return COMPANY_TRANSLATIONS[locale] || COMPANY_TRANSLATIONS.ko;
}
