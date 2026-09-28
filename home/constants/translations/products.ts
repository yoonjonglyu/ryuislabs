import { Locale } from '../i18n';
import { CatalogEntry, StandaloneProduct, AbilityApp } from '../products';

export interface ProductsTranslationData {
  catalogEntries: CatalogEntry[];
  standaloneProducts: Record<string, StandaloneProduct>;
  abilityApps: Record<string, AbilityApp>;
}

export const PRODUCTS_TRANSLATIONS: Record<Locale, ProductsTranslationData> = {
  ko: {
    catalogEntries: [
      {
        key: 'ability',
        kind: 'series',
        name: 'ABILITY',
        tagline: '모든 형태의 숙련을 위한 도구',
        desc: '중력을 다루는 SF적 몰입 도구부터, 도가 수행을 담은 동양적 습관 도구까지 — 서로 다른 세계관 위에서 같은 원리로 작동하는 제품 라인.',
        ref: 'PRODUCT_LINE',
        accent: '#7B6CFF',
        status: 'live',
        href: '/ko/landing/ability',
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
        href: '/ko/landing/memoflow',
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
        href: '/ko/landing/seedvault',
      },
    ],
    standaloneProducts: {
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
    },
    abilityApps: {
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
          'https://play-lh.googleusercontent.com/OB6XQygro900xg37i_Rt58EeIdfIW67yYhrHIOImDWd8SQre1pHupbXZqJZsMidR4mOPWVMSjvLAjoSqxFj=w526-h296',
        ],
        playUrl: 'https://play.google.com/store/apps/details?id=com.yoonjongryu.daoxin',
        otherSlug: 'gravity-time',
        otherName: 'ABILITY: Gravity & Time',
      },
    },
  },
  en: {
    catalogEntries: [
      {
        key: 'ability',
        kind: 'series',
        name: 'ABILITY',
        tagline: 'Instruments for Every Form of Mastery',
        desc: 'From sci-fi focus tools bending gravity to Eastern habit tools embodying Taoist practice—distinct universes operating on identical core principles.',
        ref: 'PRODUCT_LINE',
        accent: '#7B6CFF',
        status: 'live',
        href: '/en/landing/ability',
      },
      {
        key: 'memoflow',
        kind: 'single',
        name: 'MemoFlow',
        tagline: 'Frictionless Drafting & Instant Export',
        desc: 'Capture thoughts instantly, organize into checklists, and export to any desired format. A lean, purpose-built utility.',
        ref: 'STANDALONE_TOOL',
        accent: '#4FA8E0',
        status: 'live',
        rating: '5.0★',
        href: '/en/landing/memoflow',
      },
      {
        key: 'seedvault',
        kind: 'single',
        name: 'SeedVault',
        tagline: 'One Vault, Military-Grade Encryption',
        desc: 'Re-locks all secrets in a single vault via Argon2id + AES-256-GCM. Auto-locking viewer and ephemeral QR sharing on zero-knowledge architecture.',
        ref: 'STANDALONE_TOOL',
        accent: '#22D3C4',
        status: 'soon',
        href: '/en/landing/seedvault',
      },
    ],
    standaloneProducts: {
      memoflow: {
        slug: 'memoflow',
        name: 'MemoFlow: Simple Draft & Notes',
        tagline: 'Frictionless Drafting & Instant Export',
        ref: 'STANDALONE_TOOL',
        accent: '#4FA8E0',
        status: 'live',
        rating: '5.0★',
        reviews: '17 REVIEWS',
        downloads: '100+ DOWNLOADS',
        intro:
          'A lightweight writing instrument engineered never to lose ephemeral thoughts. Swift notes, checklists, and long-form drafts—adapt your workflow dynamically. Stored strictly on-device, never transmitted.',
        features: [
          {
            title: 'VERSATILE NOTE TYPES',
            desc: 'Seamlessly transition between quick notes, structured checklists, and deep drafting in one unified interface.',
          },
          {
            title: 'DRAFT MODE',
            desc: 'Distraction-free canvas designed specifically for extended, uninterrupted long-form drafting.',
          },
          {
            title: 'FLEXIBLE EXPORT',
            desc: 'Export immediately to HTML, Markdown, or JSON to connect seamlessly with your secondary knowledge pipelines.',
          },
          {
            title: 'PRIVACY FIRST',
            desc: 'All notes reside strictly within device storage. Zero external server telemetry.',
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
        tagline: 'One Vault, Military-Grade Encryption',
        ref: 'STANDALONE_TOOL',
        accent: '#22D3C4',
        status: 'soon',
        intro:
          'Re-locks all secrets in a single vault via Argon2id + AES-256-GCM. Seed phrases, private keys, and sensitive credentials remain strictly encrypted on-device on uncompromising zero-knowledge architecture.',
        features: [
          {
            title: 'ONE VAULT FOR EVERY SECRET',
            desc: 'Consolidate and govern fragmented seed phrases, cryptographic keys, and critical tokens in a single secure vault.',
          },
          {
            title: 'MILITARY-GRADE ENCRYPTION',
            desc: 'Dual-layer protection using Argon2id key derivation and authenticated AES-256-GCM encryption.',
          },
          {
            title: 'AUTO-LOCKING VIEWER',
            desc: 'Automated timeout seals the vault when inactive, eliminating residual exposure vulnerabilities.',
          },
          {
            title: 'SHARE VIA QR',
            desc: 'Transmit confidential records ephemerally via secure QR codes while maintaining complete system isolation.',
          },
        ],
        screenshots: [],
      },
    },
    abilityApps: {
      'gravity-time': {
        slug: 'gravity-time',
        name: 'ABILITY: Gravity & Time',
        tagline: 'Command Time Through Gravitational Force',
        desc: 'Transform focus sessions into astrophysical events. Three temporal modes—Classic, Pomodoro, and Interval—with robust background execution that persists even when the display sleeps.',
        lineage: 'WESTERN / SF LINEAGE',
        ref: 'ABILITY_01',
        accent: '#7B6CFF',
        status: 'live',
        rating: '4.8★',
        reviews: '22 REVIEWS',
        downloads: '100+ DOWNLOADS',
        intro:
          'Conventional timers lack weight. Set against a deep cosmic canvas, time does not merely elapse—it exerts gravitational pull. Choose your structure with Classic, Pomodoro, and Interval modes.',
        features: [
          {
            title: 'THREE TEMPORAL MODES',
            desc: 'Classic (singular immersion), Pomodoro (focus/rest cycles), and Interval (high-intensity discipline) adapted to your task.',
          },
          {
            title: 'BACKGROUND STABILITY',
            desc: 'Engineered native persistence guarantees precise alerts even when the device is locked or minimized.',
          },
          {
            title: 'GRAVITY STATISTICS',
            desc: 'Every controlled duration is logged to visualize long-term shifts in your cognitive immersion patterns.',
          },
          {
            title: 'ENERGY RECHARGE',
            desc: 'Recharge temporal energy swiftly to resume commanding time with unyielding momentum.',
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
        altName: 'DaoXin',
        tagline: 'Cultivate the Mind, Inscribe Growth',
        desc: 'Reframe daily routines into Taoist mental cultivation. Minimalist ink-wash aesthetics where accumulated practice yields inner mastery and elevates realm tiers. Organize daily rhythm across Main, Stats, and Management.',
        lineage: 'EASTERN / CULTIVATION LINEAGE',
        ref: 'ABILITY_02',
        accent: '#3E8F6E',
        status: 'live',
        rating: '5.0★',
        reviews: '8 REVIEWS',
        downloads: '10+ DOWNLOADS',
        intro:
          '"Cultivate the heart-mind to ascend realms." A productivity tool reframing habit tracking into Taoist spiritual discipline. Minimal ink-wash textures reflect growing inner power with each recorded day.',
        features: [
          {
            title: 'CULTIVATION LOG',
            desc: 'Record daily pursuits as meditative cultivation; watch inner strength accumulate with rigorous consistency.',
          },
          {
            title: 'RANK SYSTEM',
            desc: 'Ascend cultivation realms from Mortal to Transcendent Immortal based on unwavering discipline.',
          },
          {
            title: 'INSIGHTS (NOTES)',
            desc: 'Archive spontaneous epiphanies during practice to compile your personal canon of wisdom.',
          },
          {
            title: 'CONSTELLATION STATS',
            desc: 'Visualize progressive growth mapped as celestial constellations across the nocturnal sky.',
          },
        ],
        screenshots: [
          'https://play-lh.googleusercontent.com/T8kBoNBDstKoF_4CX7XK15lTGLxSJ3zfPEFJcxOWGxB9Ed3QYifnNacq32FBEQY7vgDtn6tBn7ZJJnzS-85snzM=w526-h296',
          'https://play-lh.googleusercontent.com/CLfnd5If-sU1GKFt_tJQN4N77CPIrX1XuHacEYRfsxDbc5xCvJzndO2pBNgfhZfKUgCM1OWgH1vr8QT0YxS4Dw=w526-h296',
          'https://play-lh.googleusercontent.com/OB6XQygro900xg37i_Rt58EeIdfIW67yYhrHIOImDWd8SQre1pHupbXZqJZsMidR4mOPWVMSjvLAjoSqxFj=w526-h296',
        ],
        playUrl: 'https://play.google.com/store/apps/details?id=com.yoonjongryu.daoxin',
        otherSlug: 'gravity-time',
        otherName: 'ABILITY: Gravity & Time',
      },
    },
  },
  ja: {
    catalogEntries: [
      {
        key: 'ability',
        kind: 'series',
        name: 'ABILITY',
        tagline: 'あらゆる習練のための道具',
        desc: '重力を操るSF的没入ツールから、道家の修行を宿した東洋的習慣ツールまで — 異なる世界観の上で同一の原理により駆動する製品群。',
        ref: 'PRODUCT_LINE',
        accent: '#7B6CFF',
        status: 'live',
        href: '/ja/landing/ability',
      },
      {
        key: 'memoflow',
        kind: 'single',
        name: 'MemoFlow',
        tagline: '軽快に記録し、即座に出力するメモ',
        desc: '閃いた着想を即座に記録し、チェックリストで整理。好みの形式へ迅速に出力する洗練されたユーティリティ。',
        ref: 'STANDALONE_TOOL',
        accent: '#4FA8E0',
        status: 'live',
        rating: '5.0★',
        href: '/ja/landing/memoflow',
      },
      {
        key: 'seedvault',
        kind: 'single',
        name: 'SeedVault',
        tagline: '単一の保管庫、軍用グレード暗号化',
        desc: 'Argon2id + AES-256-GCMによりあらゆる機密を一つの金庫へ厳封。自動ロックとQR共有を備えたゼロ知識セキュリティ。',
        ref: 'STANDALONE_TOOL',
        accent: '#22D3C4',
        status: 'soon',
        href: '/ja/landing/seedvault',
      },
    ],
    standaloneProducts: {
      memoflow: {
        slug: 'memoflow',
        name: 'MemoFlow: Simple Draft & Notes',
        tagline: '軽快に記録し、即座に出力するメモ',
        ref: 'STANDALONE_TOOL',
        accent: '#4FA8E0',
        status: 'live',
        rating: '5.0★',
        reviews: '17 REVIEWS',
        downloads: '100+ DOWNLOADS',
        intro:
          '閃いた思考を決して逃さないために設計された軽量メモアプリです。短いメモ、チェックリスト、長文ドラフトまで — 形式に合わせて記述スタイルを自在に変更できます。データはサーバーではなく端末内にのみ保持されます。',
        features: [
          {
            title: 'VERSATILE NOTE TYPES',
            desc: '通常メモ、チェックリスト型タスク、長文ドラフトモードを一つのアプリ内で自在に切り替え可能です。',
          },
          {
            title: 'DRAFT MODE',
            desc: '無駄を削ぎ落とした集中キャンバスで、思考を深めて長文を執筆できる専用モード。',
          },
          {
            title: 'FLEXIBLE EXPORT',
            desc: 'HTML、Markdown、JSONなど多彩なフォーマットへ即時出力し、外部ツールとスムーズに連携。',
          },
          {
            title: 'PRIVACY FIRST',
            desc: '記録は端末ストレージ内のみに保存され、外部サーバーへ一切送信されません。',
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
        tagline: '単一の保管庫、軍用グレード暗号化',
        ref: 'STANDALONE_TOOL',
        accent: '#22D3C4',
        status: 'soon',
        intro:
          'Argon2id + AES-256-GCMにより、あらゆる機密情報を単一の金庫へ再施錠。シードフレーズ、プライベートキー、機微なテキストを端末内のみで暗号化し、サーバーには何も残さないゼロ知識アーキテクチャを採用しています。',
        features: [
          {
            title: 'ONE VAULT FOR EVERY SECRET',
            desc: 'シードフレーズや秘密鍵、認証トークンなどの重要機密を一つの堅牢な金庫に統合管理。',
          },
          {
            title: 'MILITARY-GRADE ENCRYPTION',
            desc: 'Argon2idによる鍵導出とAES-256-GCM暗号化により、全データを二重に防御。',
          },
          {
            title: 'AUTO-LOCKING VIEWER',
            desc: '一定時間操作がない場合は自動で画面を施錠し、放置による機密漏洩を未然に防止。',
          },
          {
            title: 'SHARE VIA QR',
            desc: '必要な瞬間のみ安全なQRコードで秘密を共有し、通常時は完全な隔離状態を維持。',
          },
        ],
        screenshots: [],
      },
    },
    abilityApps: {
      'gravity-time': {
        slug: 'gravity-time',
        name: 'ABILITY: Gravity & Time',
        tagline: '重力の力で時間を統制する',
        desc: 'フォーカスセッションを一つの宇宙的出来事へと昇華させるタイマー。クラシック／ポモドーロ／インターバルの3モードと、画面消灯時も確実に届くバックグラウンド通知で没入を保護。',
        lineage: 'WESTERN / SF LINEAGE',
        ref: 'ABILITY_01',
        accent: '#7B6CFF',
        status: 'live',
        rating: '4.8★',
        reviews: '22 REVIEWS',
        downloads: '100+ DOWNLOADS',
        intro:
          '平凡なタイマーは退屈です。宇宙的な深層UIの上で、時間はただ流れるのではなく重力として引き寄せられます。クラシック・ポモドーロ・インターバルの3形態から、最適な時間構造を選択できます。',
        features: [
          {
            title: 'THREE TEMPORAL MODES',
            desc: 'クラシック（単一没入）・ポモドーロ（集中／休息循環）・インターバル（高強度セッション）を用途に応じて選択。',
          },
          {
            title: 'BACKGROUND STABILITY',
            desc: 'ネイティブエンジン最適化により、画面消灯やバックグラウンド移行時も通知が正確に作動。',
          },
          {
            title: 'GRAVITY STATISTICS',
            desc: '統制したすべての瞬間が蓄積され、自身の没入パターンの変化を精緻な統計で把握。',
          },
          {
            title: 'ENERGY RECHARGE',
            desc: 'エネルギーが枯渇した際は短時間のチャージを行い、再び時間を操る推進力を獲得。',
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
        altName: '道心',
        tagline: '心を修練し、成長を刻む',
        desc: '日々の習慣を「精神修行」として再定義する道家風アプリ。水墨画の質感を持つミニマルUIの上で、記録が積み重なるほど内功が満ち、境界が高まります。メイン／統計／管理タブで1日のリズムを調律。',
        lineage: 'EASTERN / CULTIVATION LINEAGE',
        ref: 'ABILITY_02',
        accent: '#3E8F6E',
        status: 'live',
        rating: '5.0★',
        reviews: '8 REVIEWS',
        downloads: '10+ DOWNLOADS',
        intro:
          '「心を修め、高き境地へと昇る。」日々の習慣と記録を精神修行へと昇華する道家風プロダクティビティツール。水墨と書道の質感を纏ったUIの上で、毎日の歩みが内功となり境地を高めます。',
        features: [
          {
            title: 'CULTIVATION LOG',
            desc: '日々の実践を「精神修行」として記録。継続するほど内功が育まれます。',
          },
          {
            title: 'RANK SYSTEM',
            desc: '持続の積み重ねによって、凡人から神仙へと至る修練の境地を上昇。',
          },
          {
            title: 'INSIGHTS (NOTES)',
            desc: '修練の最中に得た直観や気付きを書き留め、自分だけの知恵の書を編纂。',
          },
          {
            title: 'CONSTELLATION STATS',
            desc: '進捗を夜空の星座のように可視化し、成長の軌跡を直感的に俯瞰。',
          },
        ],
        screenshots: [
          'https://play-lh.googleusercontent.com/T8kBoNBDstKoF_4CX7XK15lTGLxSJ3zfPEFJcxOWGxB9Ed3QYifnNacq32FBEQY7vgDtn6tBn7ZJJnzS-85snzM=w526-h296',
          'https://play-lh.googleusercontent.com/CLfnd5If-sU1GKFt_tJQN4N77CPIrX1XuHacEYRfsxDbc5xCvJzndO2pBNgfhZfKUgCM1OWgH1vr8QT0YxS4Dw=w526-h296',
          'https://play-lh.googleusercontent.com/OB6XQygro900xg37i_Rt58EeIdfIW67yYhrHIOImDWd8SQre1pHupbXZqJZsMidR4mOPWVMSjvLAjoSqxFj=w526-h296',
        ],
        playUrl: 'https://play.google.com/store/apps/details?id=com.yoonjongryu.daoxin',
        otherSlug: 'gravity-time',
        otherName: 'ABILITY: Gravity & Time',
      },
    },
  },
  'zh-TW': {
    catalogEntries: [
      {
        key: 'ability',
        kind: 'series',
        name: 'ABILITY',
        tagline: '淬煉各類專注與修煉的精準器具',
        desc: '從操控重力的科幻沉浸器具，到融合道家修行的東方習慣工具 — 於相異的世界觀之上，依循同一物理邏輯運作之產品系列。',
        ref: 'PRODUCT_LINE',
        accent: '#7B6CFF',
        status: 'live',
        href: '/zh-TW/landing/ability',
      },
      {
        key: 'memoflow',
        kind: 'single',
        name: 'MemoFlow',
        tagline: '輕量草擬，即刻匯出的極簡筆記',
        desc: '即時捕捉靈感思緒並整理為檢查清單，隨心匯出所需格式。純粹無冗餘的專門效能工具。',
        ref: 'STANDALONE_TOOL',
        accent: '#4FA8E0',
        status: 'live',
        rating: '5.0★',
        href: '/zh-TW/landing/memoflow',
      },
      {
        key: 'seedvault',
        kind: 'single',
        name: 'SeedVault',
        tagline: '單一保險庫，軍規級高強度加密',
        desc: '採用 Argon2id + AES-256-GCM 將所有機密資訊重密封裝。具備自動上鎖與 QR Code 傳遞之零知識架構安全工具。',
        ref: 'STANDALONE_TOOL',
        accent: '#22D3C4',
        status: 'soon',
        href: '/zh-TW/landing/seedvault',
      },
    ],
    standaloneProducts: {
      memoflow: {
        slug: 'memoflow',
        name: 'MemoFlow: Simple Draft & Notes',
        tagline: '輕量草擬，即刻匯出的極簡筆記',
        ref: 'STANDALONE_TOOL',
        accent: '#4FA8E0',
        status: 'live',
        rating: '5.0★',
        reviews: '17 REVIEWS',
        downloads: '100+ DOWNLOADS',
        intro:
          '專為即時捕捉浮現思緒而打造之輕量化筆記工具。靈活適配簡短紀錄、待辦清單至長文草稿等多種模式。數據完全留存於設備本機，絕不上傳伺服器。',
        features: [
          {
            title: 'VERSATILE NOTE TYPES',
            desc: '支援一般便簽、清單項目與專注長文草稿模式，單一介面流暢切換。',
          },
          {
            title: 'DRAFT MODE',
            desc: '無任何視覺干擾的極簡工作區，助您深度沉浸於長篇寫作。',
          },
          {
            title: 'FLEXIBLE EXPORT',
            desc: '支援直接匯出 HTML、Markdown 與 JSON 等多元格式，靈活鏈接外部工作流。',
          },
          {
            title: 'PRIVACY FIRST',
            desc: '所有筆記僅儲存於設備本機，絕不上傳任何外部伺服器。',
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
        tagline: '單一保險庫，軍規級高強度加密',
        ref: 'STANDALONE_TOOL',
        accent: '#22D3C4',
        status: 'soon',
        intro:
          '運用 Argon2id + AES-256-GCM 將所有機密資訊重新加密鎖入單一金庫。助記詞、私鑰及敏感情資皆於設備本機離線加密，伺服器不留存任何痕跡，奠基於不妥協的零知識架構。',
        features: [
          {
            title: 'ONE VAULT FOR EVERY SECRET',
            desc: '將散落各處的助記詞、金鑰憑證與重要代幣集中收納於單一安全金庫。',
          },
          {
            title: 'MILITARY-GRADE ENCRYPTION',
            desc: '結合 Argon2id 密鑰衍生機制與 AES-256-GCM 雙重保護，實現軍規級防護。',
          },
          {
            title: 'AUTO-LOCKING VIEWER',
            desc: '閒置達預設時間後自動鎖定檢視器，杜絕因未關閉畫面引發的資安風險。',
          },
          {
            title: 'SHARE VIA QR',
            desc: '僅在必要時透過加密 QR Code 進行點對點傳遞，其餘時刻維持徹底實體隔離。',
          },
        ],
        screenshots: [],
      },
    },
    abilityApps: {
      'gravity-time': {
        slug: 'gravity-time',
        name: 'ABILITY: Gravity & Time',
        tagline: '以重力之能，掌控時間洪流',
        desc: '將專注工作階段轉化為一場天體事件的專用計時器。提供經典／番茄鐘／間歇三大時間模組，並具備即便螢幕休眠亦能精準觸發的背景通知能力。',
        lineage: 'WESTERN / SF LINEAGE',
        ref: 'ABILITY_01',
        accent: '#7B6CFF',
        status: 'live',
        rating: '4.8★',
        reviews: '22 REVIEWS',
        downloads: '100+ DOWNLOADS',
        intro:
          '平庸的計時器令人乏味。在深沉的宇宙 UI 介面中，時間不再是消極流逝，而是產生強烈重力牽引。透過經典、番茄鐘、間歇三種結構，自由構築沉浸型態。',
        features: [
          {
            title: 'THREE TEMPORAL MODES',
            desc: '經典（單點沉浸）、番茄鐘（專注／休息循環）及間歇（高強度訓練）自由選用。',
          },
          {
            title: 'BACKGROUND STABILITY',
            desc: '原生底層架構確保即便在螢幕休眠或應用轉入後台時，提醒通知依舊精準抵達。',
          },
          {
            title: 'GRAVITY STATISTICS',
            desc: '忠實記錄每一次掌控的時刻，透過清晰數據洞悉個人專注模式的長期演變。',
          },
          {
            title: 'ENERGY RECHARGE',
            desc: '能量耗盡時可進行快速充能，重獲掌控時間洪流的充沛動力。',
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
        altName: '道心',
        tagline: '修養身心，銘刻成長軌跡',
        desc: '將日常習慣昇華為「精神修為」的道家風應用。於水墨書畫質感的極簡介面中，隨著每日記錄沉澱，內力日漸充盈、境界步步攀升。透過首頁／統計／管理三大模組梳理日常作息。',
        lineage: 'EASTERN / CULTIVATION LINEAGE',
        ref: 'ABILITY_02',
        accent: '#3E8F6E',
        status: 'live',
        rating: '5.0★',
        reviews: '8 REVIEWS',
        downloads: '10+ DOWNLOADS',
        intro:
          '「修煉道心，登臨高境。」將生活習慣與行事歷程重塑為心靈修為的道家風格效能工具。在筆墨清幽的介面中，日積月累的實踐化為充沛內力與超然境界。',
        features: [
          {
            title: 'CULTIVATION LOG',
            desc: '將每日功課視為「精神修煉」登錄，持之以恆蓄積深厚內力。',
          },
          {
            title: 'RANK SYSTEM',
            desc: '依據精進堅持度，從凡人歷經淬煉一路晉升至神仙境界。',
          },
          {
            title: 'INSIGHTS (NOTES)',
            desc: '隨時記錄修煉歷程中的頓悟與心得，撰寫專屬於己的智慧寶典。',
          },
          {
            title: 'CONSTELLATION STATS',
            desc: '將成長進度如星辰點綴夜空般可視化呈現，一覽心智蛻變軌跡。',
          },
        ],
        screenshots: [
          'https://play-lh.googleusercontent.com/T8kBoNBDstKoF_4CX7XK15lTGLxSJ3zfPEFJcxOWGxB9Ed3QYifnNacq32FBEQY7vgDtn6tBn7ZJJnzS-85snzM=w526-h296',
          'https://play-lh.googleusercontent.com/CLfnd5If-sU1GKFt_tJQN4N77CPIrX1XuHacEYRfsxDbc5xCvJzndO2pBNgfhZfKUgCM1OWgH1vr8QT0YxS4Dw=w526-h296',
          'https://play-lh.googleusercontent.com/OB6XQygro900xg37i_Rt58EeIdfIW67yYhrHIOImDWd8SQre1pHupbXZqJZsMidR4mOPWVMSjvLAjoSqxFj=w526-h296',
        ],
        playUrl: 'https://play.google.com/store/apps/details?id=com.yoonjongryu.daoxin',
        otherSlug: 'gravity-time',
        otherName: 'ABILITY: Gravity & Time',
      },
    },
  },
};

export function getProductsTranslation(locale: Locale): ProductsTranslationData {
  return PRODUCTS_TRANSLATIONS[locale] || PRODUCTS_TRANSLATIONS.ko;
}
