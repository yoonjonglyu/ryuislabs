import { Locale } from '../i18n';

export interface UiTranslations {
  nav: {
    products: string;
    status: string;
    founder: string;
    contact: string;
    language: string;
  };
  hero: {
    terminalTitle: string;
    badge: string;
    ctaExplore: string;
    ctaInquire: string;
  };
  status: {
    badge: string;
    title: string;
    titleSub: string;
    desc: string;
  };
  founder: {
    badge: string;
    title: string;
    desc: string;
  };
  contact: {
    title: string;
    titleSub: string;
    desc: string;
  };
  footer: {
    allRightsReserved: string;
    statusTicker: string;
    backToHome: string;
  };
  landing: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    desc: string;
    viewSeries: string;
    viewStore: string;
    viewDetail: string;
    soonBadge: string;
    comingSoon: string;
  };
  abilityHub: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    desc: string;
    closedBeta: string;
    btnDetail: string;
    btnStore: string;
    btnSoon: string;
  };
  detail: {
    soonTag: string;
    installPlayStore: string;
    comingSoonNotice: string;
    backToProducts: string;
    backToSeries: string;
    screenshots: string;
    moreFromAbility: string;
    inspect: string;
  };
}

export const UI_TRANSLATIONS: Record<Locale, UiTranslations> = {
  ko: {
    nav: {
      products: 'PRODUCTS',
      status: 'STATUS',
      founder: 'FOUNDER',
      contact: 'CONTACT',
      language: '언어',
    },
    hero: {
      terminalTitle: 'TERMINAL // SYSTEM_INIT',
      badge: 'ESTABLISHED 2026 · SYSTEM ARCHITECTURE',
      ctaExplore: '제품 살펴보기 — RYUis : STATUS',
      ctaInquire: '비즈니스 문의',
    },
    status: {
      badge: 'FLAGSHIP MODULE / RYUis : STATUS',
      title: '감시 없이 증명하는,',
      titleSub: '프라이버시 보존형 상태창',
      desc: '온디바이스 AI 비전이 시선과 관절 움직임을 기기 안에서만 분석하고, 원본 영상은 즉시 폐기합니다. 남는 건 조작 불가능한 암호화 스탯뿐 — 얼굴도, 방 안 풍경도 서버로 나가지 않습니다.',
    },
    founder: {
      badge: 'OPERATOR PROFILE',
      title: '혼자, 그러나 전부',
      desc: 'RyuisLabs는 아이디어 설계부터 구현까지 한 사람이 수행하는 1인 시스템입니다.',
    },
    contact: {
      title: '제도권 결합, 기술 협력,',
      titleSub: '사업 문의를 기다립니다.',
      desc: '공공·민간 프로젝트 협업, B2B 라이선스, 투자 및 멘토링 문의 모두 환영합니다.',
    },
    footer: {
      allRightsReserved: 'All rights reserved.',
      statusTicker: 'ALL SYSTEMS NOMINAL',
      backToHome: '← RyuisLabs 홈으로',
    },
    landing: {
      badge: 'PRODUCT SHOWCASE',
      titleLine1: '하나의 원리로,',
      titleLine2: '여러 형태의 도구를 만듭니다.',
      desc: 'RyuisLabs는 하나의 제품에 머무르지 않습니다. 몰입을 다루는 시리즈, 기록을 다루는 유틸리티, 비밀을 다루는 보안 도구 — 각자 다른 문제를 풀지만, 감성이 아닌 인과로 설계한다는 원칙은 동일합니다.',
      viewSeries: '시리즈 보기 →',
      viewStore: 'Play 스토어 →',
      viewDetail: '자세히 보기 →',
      soonBadge: '출시 임박',
      comingSoon: '곧 공개',
    },
    abilityHub: {
      badge: 'PRODUCT LINE / ABILITY',
      titleLine1: '모든 형태의 숙련을,',
      titleLine2: '도구로 번역합니다.',
      desc: '우주의 물리 법칙이든 도가의 수행이든 — 몰입이 향하는 방향은 다르지만 그 구조는 같습니다. ABILITY는 서로 다른 세계관 위에서, 같은 원리로 작동하는 숙련의 도구들을 만듭니다.',
      closedBeta: 'CLOSED BETA',
      btnDetail: '자세히 보기 →',
      btnStore: 'Play 스토어',
      btnSoon: '준비 중',
    },
    detail: {
      soonTag: '출시 임박',
      installPlayStore: 'Play 스토어에서 설치',
      comingSoonNotice: '곧 공개됩니다',
      backToProducts: '← 전체 제품으로 돌아가기',
      backToSeries: '← 시리즈로 돌아가기',
      screenshots: 'SCREENSHOTS',
      moreFromAbility: 'MORE FROM ABILITY',
      inspect: '살펴보기 →',
    },
  },
  en: {
    nav: {
      products: 'PRODUCTS',
      status: 'STATUS',
      founder: 'FOUNDER',
      contact: 'CONTACT',
      language: 'Language',
    },
    hero: {
      terminalTitle: 'TERMINAL // SYSTEM_INIT',
      badge: 'ESTABLISHED 2026 · SYSTEM ARCHITECTURE',
      ctaExplore: 'Explore Flagship — RYUis : STATUS',
      ctaInquire: 'Business Inquiry',
    },
    status: {
      badge: 'FLAGSHIP MODULE / RYUis : STATUS',
      title: 'Tamper-Proof Verification,',
      titleSub: 'Privacy-Preserving Status HUD',
      desc: 'On-device AI vision analyzes gaze and kinematic movement strictly inside the device, purging raw footage instantly. Only immutable encrypted metrics remain—zero facial or background telemetry ever leaves the hardware.',
    },
    founder: {
      badge: 'OPERATOR PROFILE',
      title: 'Solo, Yet Complete',
      desc: 'RyuisLabs is a single-operator engineering system executing end-to-end architecture from planning to realization.',
    },
    contact: {
      title: 'Institutional Integration, Technology Alliances,',
      titleSub: 'and Strategic Partnerships.',
      desc: 'Open to enterprise collaboration, B2B licensing, investments, and institutional partnerships.',
    },
    footer: {
      allRightsReserved: 'All rights reserved.',
      statusTicker: 'ALL SYSTEMS NOMINAL',
      backToHome: '← Back to RyuisLabs Home',
    },
    landing: {
      badge: 'PRODUCT SHOWCASE',
      titleLine1: 'From a Single Principle,',
      titleLine2: 'We Construct Diverse Instruments.',
      desc: 'RyuisLabs does not confine itself to a solitary product. From mastery series to friction-free utilities and encrypted vaults—each tackles distinct domains, yet all adhere to engineered causality.',
      viewSeries: 'View Series →',
      viewStore: 'Google Play →',
      viewDetail: 'Learn More →',
      soonBadge: 'COMING SOON',
      comingSoon: 'Coming Soon',
    },
    abilityHub: {
      badge: 'PRODUCT LINE / ABILITY',
      titleLine1: 'Translating Every Form of Mastery',
      titleLine2: 'into Precise Instruments.',
      desc: 'Whether through astrophysical mechanics or Eastern cultivation—while paths of immersion diverge, their underlying architecture remains invariant. ABILITY builds tools across diverse cosmologies on unified principles.',
      closedBeta: 'CLOSED BETA',
      btnDetail: 'Learn More →',
      btnStore: 'Google Play',
      btnSoon: 'In Development',
    },
    detail: {
      soonTag: 'COMING SOON',
      installPlayStore: 'Install on Google Play',
      comingSoonNotice: 'Public release coming soon',
      backToProducts: '← Back to All Products',
      backToSeries: '← Back to ABILITY Series',
      screenshots: 'SCREENSHOTS',
      moreFromAbility: 'MORE FROM ABILITY',
      inspect: 'Explore →',
    },
  },
  ja: {
    nav: {
      products: 'PRODUCTS',
      status: 'STATUS',
      founder: 'FOUNDER',
      contact: 'CONTACT',
      language: '言語',
    },
    hero: {
      terminalTitle: 'TERMINAL // SYSTEM_INIT',
      badge: 'ESTABLISHED 2026 · SYSTEM ARCHITECTURE',
      ctaExplore: '製品を見る — RYUis : STATUS',
      ctaInquire: 'ビジネスお問い合わせ',
    },
    status: {
      badge: 'FLAGSHIP MODULE / RYUis : STATUS',
      title: '監視を伴わずに証明する、',
      titleSub: 'プライバシー保護型ステータスHUD',
      desc: 'オンデバイスAIビジョンが視線と骨格動作を端末内のみで解析し、元映像は即時破棄。残るのは改ざん不可能な暗号化統計値のみ — 顔や室内の様子がサーバーへ送信されることは一切ありません。',
    },
    founder: {
      badge: 'OPERATOR PROFILE',
      title: '独創、しかし完全',
      desc: 'RyuisLabsは、設計思想から実装・運用までを一人で完結させるシングルオペレーターシステムです。',
    },
    contact: {
      title: '制度的連携・技術協業・',
      titleSub: '事業連携のお問い合わせ',
      desc: '産学官プロジェクト連携、B2Bライセンス供与、投資やメンタリングのご相談を随時受け付けております。',
    },
    footer: {
      allRightsReserved: 'All rights reserved.',
      statusTicker: 'ALL SYSTEMS NOMINAL',
      backToHome: '← RyuisLabs ホームへ戻る',
    },
    landing: {
      badge: 'PRODUCT SHOWCASE',
      titleLine1: '一つの原理から、',
      titleLine2: '多様な形態のツールを創出する。',
      desc: 'RyuisLabsは単一の製品にとどまりません。没入を司るシリーズ、記録を司るユーティリティ、機密を守る暗号保管庫 — 挑む領域は異なれど、「感性ではなく因果で設計する」という原則は一貫しています。',
      viewSeries: 'シリーズを見る →',
      viewStore: 'Playストア →',
      viewDetail: '詳細を見る →',
      soonBadge: '近日公開',
      comingSoon: 'まもなく公開',
    },
    abilityHub: {
      badge: 'PRODUCT LINE / ABILITY',
      titleLine1: 'あらゆる形態の習練を、',
      titleLine2: '道具へと翻訳する。',
      desc: '宇宙の物理法則であれ、道家の修行であれ — 没入が目指す方向は異なれど、その根底構造は同一です。ABILITYは異なる世界観の上で、同一の原理に従って作動する習練の道具を構築します。',
      closedBeta: 'CLOSED BETA',
      btnDetail: '詳細を見る →',
      btnStore: 'Playストア',
      btnSoon: '準備中',
    },
    detail: {
      soonTag: '近日公開',
      installPlayStore: 'Playストアでインストール',
      comingSoonNotice: '近日一般公開予定',
      backToProducts: '← 全製品一覧へ戻る',
      backToSeries: '← シリーズ一覧へ戻る',
      screenshots: 'SCREENSHOTS',
      moreFromAbility: 'MORE FROM ABILITY',
      inspect: '確認する →',
    },
  },
  'zh-TW': {
    nav: {
      products: 'PRODUCTS',
      status: 'STATUS',
      founder: 'FOUNDER',
      contact: 'CONTACT',
      language: '語言',
    },
    hero: {
      terminalTitle: 'TERMINAL // SYSTEM_INIT',
      badge: 'ESTABLISHED 2026 · SYSTEM ARCHITECTURE',
      ctaExplore: '探索旗艦模組 — RYUis : STATUS',
      ctaInquire: '商務合作洽詢',
    },
    status: {
      badge: 'FLAGSHIP MODULE / RYUis : STATUS',
      title: '無侵入式客觀證明，',
      titleSub: '隱私保護型狀態儀表板',
      desc: '本機端 AI 視覺演算僅於設備內部解析視線與肢體骨架運動，原始影像即刻銷毀。僅保留不可篡改之加密統計指標 — 面容與私人空間畫面絕不上傳至伺服器。',
    },
    founder: {
      badge: 'OPERATOR PROFILE',
      title: '獨自操盤，縱覽全局',
      desc: 'RyuisLabs 乃是由單一工程師獨立貫穿從架構構想至系統落地的端到端獨立架構體系。',
    },
    contact: {
      title: '體系整合、技術結盟與',
      titleSub: '商務合作機會。',
      desc: '誠摯歡迎公私立專案協同、B2B 技術授權、商業投資及戰略合作諮詢。',
    },
    footer: {
      allRightsReserved: 'All rights reserved.',
      statusTicker: 'ALL SYSTEMS NOMINAL',
      backToHome: '← 返回 RyuisLabs 首頁',
    },
    landing: {
      badge: 'PRODUCT SHOWCASE',
      titleLine1: '源自單一法則，',
      titleLine2: '淬煉多元形態之數位器具。',
      desc: 'RyuisLabs 不拘泥於單一產品。從專注修煉系列、零摩擦筆記工具到高強度加密保險庫 — 雖應對不同問題領域，但「以因果替代感性設計」之核心原則始終如一。',
      viewSeries: '檢視系列 →',
      viewStore: '前往 Play 商店 →',
      viewDetail: '深入了解 →',
      soonBadge: '即將推出',
      comingSoon: '敬請期待',
    },
    abilityHub: {
      badge: 'PRODUCT LINE / ABILITY',
      titleLine1: '將一切形態的精進修煉，',
      titleLine2: '轉譯為精準器具。',
      desc: '無論是天體物理法則或道家精神修煉 — 沉浸的方向或許迥異，其底層結構卻全然相通。ABILITY 於相異的世界觀之上，以相同原則建構淬煉心智的實用器具。',
      closedBeta: 'CLOSED BETA',
      btnDetail: '深入了解 →',
      btnStore: '前往 Play 商店',
      btnSoon: '籌備中',
    },
    detail: {
      soonTag: '即將推出',
      installPlayStore: '於 Google Play 安裝',
      comingSoonNotice: '即將正式推出',
      backToProducts: '← 返回全產品列表',
      backToSeries: '← 返回 ABILITY 系列',
      screenshots: 'SCREENSHOTS',
      moreFromAbility: 'MORE FROM ABILITY',
      inspect: '深入瀏覽 →',
    },
  },
};

export function getUiTranslations(locale: Locale): UiTranslations {
  return UI_TRANSLATIONS[locale] || UI_TRANSLATIONS.ko;
}
