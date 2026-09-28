# RyuisLabs 프로젝트 가이드 (AGENT.md)

이 문서는 **RyuisLabs** 공식 웹 플랫폼 프로젝트의 아키텍처, 제품군, 다국어(i18n) 체계, 디자인 시스템 및 개발 규칙을 AI 에이전트와 개발자가 일관되게 이해하고 유지보수할 수 있도록 정리한 기술 지침서입니다.

---

## 1. 프로젝트 개요 (Overview)

- **기업/스튜디오명**: RyuisLabs (류이즈랩스)
- **설립/기준년도**: 2026
- **창립자 / 오퍼레이터**: ryuis (Founder / Engineer)
- **공식 문의**: `content@ryuislabs.com`
- **핵심 슬로건**:
  > *"모든 성취의 이면에는, 치열한 과정이 존재합니다."*  
  > *"우연에 기대지 않습니다. 비즈니스의 성공도, 시스템의 구동도 모두 설계된 인과의 결과입니다."*
- **브랜드 정체성**:
  - 개인 포트폴리오의 가벼운 느낌을 철저히 배제하고, 엔지니어링 도면이나 시스템 아키텍처를 보는 듯한 **묵직한 신뢰감과 절차적 정당성**을 제공하는 딥테크 인디 스튜디오/시스템 브랜드.
  - 온디바이스 AI 비전 및 제로 지식(Zero-Knowledge) 원칙 기반의 프라이버시 보존형 상태 검증 엔진 개발.

---

## 2. 기술 스택 및 환경 (Tech Stack)

| 구분 | 기술 / 도구 | 버전 및 비고 |
| :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `16.2.9` |
| **UI Library** | React / React DOM | `19.2.4` |
| **Language** | TypeScript | `^5` |
| **Package Manager** | pnpm | `pnpm-workspace.yaml`, `pnpm-lock.yaml` |
| **Styling** | Vanilla CSS Modules + Tailwind CSS | `@tailwindcss/postcss ^4`, Geist Font (`next/font`) |
| **Internationalization** | Multi-locale SSG Subpath Routing | `ko`, `en`, `ja`, `zh-TW` (4개 국어 완전 지원) |
| **Code Quality** | ESLint (`eslint-config-next`) | `^9` |

---

## 3. 다국어(i18n) 아키텍처

본 프로젝트는 SEO 최적화와 링크 공유성을 극대화하기 위해 **URL 서브패스 기반 정적 라우팅(`/[lang]/...`)** 방식을 채택하고 있습니다.

### 3.1 지원 언어 (Supported Locales)

| 로케일 코드 | 언어명 | 표시 레이블 | 대상 권역 |
| :--- | :--- | :--- | :--- |
| `ko` (기본값) | 한국어 | KO / 한국어 | 국내 기본 시장 |
| `en` | English | EN / English | 글로벌 엔터프라이즈 및 영미권 |
| `ja` | 日本語 | JA / 日本語 | 일본 B2B/B2C 시장 |
| `zh-TW` | 繁體中文 | 繁中 / 繁體中文 | 대만, 홍콩 등 번체 중화권 |

### 3.2 i18n 디렉토리 및 파일 구성

```text
home/
├── middleware.ts                      # 언어 감지(Accept-Language) 및 누락 시 /[lang] 리다이렉트
└── constants/
    ├── i18n.ts                        # 로케일 목록, 기본 로케일, 메타데이터 및 유효성 검사 유틸
    └── translations/                  # 언어별 번역 리소스
        ├── ui.ts                      # 네비게이션, 공통 버튼, 모달, 푸터 텍스트 사전
        ├── company.ts                 # 기업 소개, 부팅 터미널, 상태 모듈, 타깃, BM 번역
        └── products.ts                # 제품 카탈로그, 앱 상세(기능, 통계, 소개) 번역
```

### 3.3 언어 전환 메커니즘
- **헤더 & 서브헤더 연동**: `LanguageSwitcher` 컴포넌트가 현재 URL 경로의 언어 세그먼트를 감지하여, 페이지 상태를 유지한 채 타겟 언어로 즉각 라우팅합니다. (예: `/ko/landing/ability` ↔ `/en/landing/ability`)
- **정적 사이트 생성(SSG)**: 모든 `[lang]` 동적 라우트에 `generateStaticParams()`를 선언하여 빌드 시점에 4개 국어 전체 페이지(총 34개 정적 페이지)를 100% 사전 렌더링합니다.

---

## 4. 디렉토리 구조 (Repository Layout)

```text
ryuislabs/
├── AGENT.md                       # 본 프로젝트 가이드 및 에이전트 지침서
└── home/                          # Next.js 웹 애플리케이션
    ├── package.json
    ├── pnpm-lock.yaml
    ├── pnpm-workspace.yaml
    ├── next.config.ts
    ├── tsconfig.json
    ├── middleware.ts              # i18n 언어 감지 및 리다이렉트
    ├── constants/                 # 핵심 상수 및 데이터 소스
    │   ├── i18n.ts                # 로케일 정의 및 헬퍼
    │   ├── translations/          # 4개 국어(KO, EN, JA, ZH-TW) 번역 리소스
    │   │   ├── ui.ts
    │   │   ├── company.ts
    │   │   └── products.ts
    │   ├── company.ts             # 기업 프로필 호환성 레이어 및 게터
    │   └── products.ts            # 제품 카탈로그 호환성 레이어 및 게터
    ├── components/
    │   ├── common/                # 공통 레이아웃 및 UI 유틸리티
    │   │   ├── LanguageSwitcher.tsx # 언어 전환 드롭다운
    │   │   ├── Reveal.tsx         # 스크롤/뷰포트 진입 모션 래퍼
    │   │   ├── SubHeader.tsx      # 서브페이지 브레드크럼 및 헤더
    │   │   └── SubFooter.tsx      # 서브페이지 푸터
    │   └── sections/              # 메인 랜딩 구성 섹션 (locale prop 지원)
    │       ├── Header.tsx         # 글로벌 네비게이션 & 언어 스위처
    │       ├── Hero.tsx           # 시스템 부팅 터미널 애니메이션 & 메인 카피
    │       ├── Status.tsx         # 플래그십 모듈(RYUis:STATUS) & 타깃 & BM
    │       ├── Founder.tsx        # 1인 시스템 파운더 프로필 및 시스템 아카이브
    │       ├── Contact.tsx        # 사업/제휴 문의 유닛
    │       └── Footer.tsx         # 시스템 상태 티커 & 저작권 표기
    ├── app/                       # Next.js App Router 라우트 정의
    │   ├── layout.tsx             # 루트 레이아웃 (Geist Sans / Geist Mono 폰트 및 메타데이터)
    │   ├── globals.css            # 글로벌 리셋 및 테마 변수
    │   ├── ryuislabs.module.css   # 메인 랜딩 전용 스타일 시트
    │   ├── page.tsx               # 루트 리다이렉트 (-> /[lang])
    │   ├── [lang]/                # 다국어 정적 라우트
    │   │   ├── page.tsx           # 로케일별 메인 랜딩 (/)
    │   │   └── landing/           # 로케일별 제품 쇼케이스
    │   │       ├── page.tsx       # 전체 제품 카탈로그 (/landing)
    │   │       ├── [slug]/        # 단독형 제품 상세 (/landing/[slug])
    │   │       │   └── page.tsx
    │   │       └── ability/       # ABILITY 시리즈 허브 (/landing/ability)
    │   │           ├── page.tsx
    │   │           └── [slug]/    # ABILITY 앱 상세 (/landing/ability/[slug])
    │   │               └── page.tsx
    │   └── landing/               # 하위 호환 레거시 라우트 (리다이렉트 처리)
    └── public/                    # 정적 에셋 (파비콘, 브랜드 로고 등)
```

---

## 5. 페이지 및 라우팅 구조 (Routing Architecture)

| 경로 패턴 | 역할 및 내용 | 데이터 연동 |
| :--- | :--- | :--- |
| `/[lang]` | **RyuisLabs 코어 랜딩**<br>- 시스템 부팅 터미널 애니메이션<br>- 플래그십 모듈 `RYUis : STATUS` 소개<br>- 타깃군 & BM 티어, 파운더 프로필 | `getCompanyTranslation(locale)` |
| `/[lang]/landing` | **전체 프로덕트 쇼케이스 카탈로그**<br>- 출시/예정 제품군 카드 뷰<br>- ABILITY 시리즈, MemoFlow, SeedVault | `getProductsData(locale)` |
| `/[lang]/landing/[slug]` | **단독 유틸리티 제품 상세 페이지**<br>- `memoflow` (심플 드래프트 & 메모)<br>- `seedvault` (군사급 암호화 시드 금고) | `getProductsData(locale).standaloneProducts[slug]` |
| `/[lang]/landing/ability` | **ABILITY 시리즈 라인업 허브**<br>- "모든 형태의 숙련을 도구로 번역합니다"<br>- 하위 앱 카드 리스트 및 스토어 연결 | `getProductsData(locale).abilityAppList` |
| `/[lang]/landing/ability/[slug]` | **ABILITY 개별 앱 상세 페이지**<br>- `gravity-time` (SF/중력 시간 통제 타이머)<br>- `daoxin` (도가풍 마음 수행 & 내공 기록) | `getProductsData(locale).abilityApps[slug]` |

---

## 6. 핵심 비즈니스 모델 및 제품 라인업

### 6.1 플래그십 시스템: `RYUis : STATUS`
- **개념**: 온디바이스 AI 비전으로 시선과 관절 동작을 감지하여 몰입과 수행을 객관적으로 입증하는 프라이버시 보존형 상태창.
- **핵심 모듈**:
  1. `MODULE_01 / FOCUS_VISION`: 시선 추적 기반 순수 몰입 시간(Pure Focus Time) 산출.
  2. `MODULE_02 / PHYSICAL_VISION`: Pose Estimation 기반 관절 각도 정밀 카운팅.
  3. `MODULE_03 / ZERO_KNOWLEDGE_LOG`: 원본 영상 연산 즉시 파기, 암호화된 통계 벡터만 보존.
- **비즈니스 티어**:
  - **B2C**: 기본 상태창 무료 + AI 비전 검증 세션 프리미엄 구독.
  - **B2B2C**: 학부모, PT 코치 등 제3자 신뢰 검증 리포트 제공.
  - **B2B**: 스터디카페, 관리형 학원, 피트니스 센터용 검증 SDK/API 라이선스.

### 6.2 프로덕트 카탈로그
1. **ABILITY Series**:
   - `ABILITY: Gravity & Time`: 딥 그레이 SF 테마, 클래식/포모도로/인터벌 3중 모드 및 백그라운드 안정성.
   - `ABILITY: DaoXin (도심)`: 수묵화·서예 질감, 일상 습관의 정신 수행화, 경지·별자리 통계 시스템.
2. **Standalone Utilities**:
   - `MemoFlow`: 즉각적인 생각 캡처, 드래프트 모드, 다중 포맷 익스포트(HTML/MD/JSON).
   - `SeedVault`: Argon2id + AES-256-GCM 기반 로컬 제로 지식 암호화 금고 (출시 예정).

---

## 7. 디자인 시스템 & 인터랙션 철학 (Design Guidelines)

1. **Aesthetics (The Blueprint & Determinism)**:
   - **Background**: 딥 다크 (`bg-zinc-950` / `#0a0b0e` 계열) 기반.
   - **Grid & Lines**: 은은한 엔지니어링 도면 그리드 라인(`rgba(255, 255, 255, 0.04)` ~ `border-zinc-800`).
   - **Typography**: 헤드라인은 절제된 모던 산세리프(Geist Sans), 시스템 레이블/코드/레퍼런스는 모노스페이스(Geist Mono).
   - **Color Accents**: 앱별 고유 액센트 컬러(`--accent`)를 인라인 CSS 변수로 주입해 정밀하게 통제.
2. **반응형 브레이크포인트 (Responsive Design)**:
   - **데스크톱 / 태블릿**: `768px`, `640px`
   - **모바일 헤더 & 네비게이션 브레이크포인트**: `420px` (헤더 폰트 크기, 간격, 언어 전환 드롭다운 패딩 압축 기준점)
3. **Motion & Accessibility**:
   - `useSyncExternalStore` 기반 `prefers-reduced-motion` 미디어 쿼리 감지.
   - 모션 감소 활성화 시 터미널 타이핑 딜레이를 스킵하고 즉시 콘텐츠를 표출.
   - `IntersectionObserver` 기반의 경량화된 `Reveal` 컴포넌트로 성능 부담 없는 페이드인 연출.
4. **Copywriting Tone**:
   - 4개 국어 모두 감성적 과장이나 개인적인 자랑을 배제하고, "당사", "RyuisLabs", "시스템", "인과"와 같은 **공적이고 절차적 정당성을 갖춘 엔지니어링 어조** 유지.

---

## 8. 개발 및 실행 가이드 (Development Workflow)

모든 작업은 `home/` 디렉토리 기준으로 수행합니다.

```bash
# 디렉토리 이동
cd home

# 의존성 설치
pnpm install

# 로컬 개발 서버 구동 (기본 포트 3000)
pnpm dev

# 타입 검사 및 프로덕션 빌드 검증 (전 언어 SSG 사전 렌더링 확인)
pnpm build

# 코드 린트 검사
pnpm lint
```

---

## 9. AI 에이전트 개발 및 협업 규칙 (Agent Rules)

1. **Next.js 16 컨벤션 준수**:
   - App Router 구조와 호환되는 최신 API만 사용합니다.
   - 비동기 dynamic route의 `params`는 `Promise<{ ... }>` 형태이므로 `await params`로 언랩핑합니다.
   - 클라이언트 상호작용(Hooks, 브라우저 이벤트)이 필요한 파일에는 상단 `'use client';`를 반드시 명시합니다.
2. **다국어 데이터와 뷰의 분리**:
   - UI 텍스트 카피는 컴포넌트에 하드코딩하지 않고 `constants/translations/ui.ts`, `company.ts`, `products.ts`에 4개 국어(KO, EN, JA, ZH-TW)로 각각 정의합니다.
   - 새로운 라우트 추가 시 `generateStaticParams()`를 통해 `LOCALES` 전체에 대한 정적 생성을 반드시 지원하도록 합니다.
3. **CSS 모듈 및 스타일링 규칙**:
   - 전역 스타일 오염을 방지하기 위해 각 페이지 및 컴포넌트 전용 `*.module.css`를 적극 활용합니다.
   - 브랜드 아이덴티티(Deep Dark, Blueprint Grid, Mono 레이블)를 훼손하는 임의의 원색이나 과도한 장식을 지양합니다.
4. **접근성 및 성능 고려**:
   - 외부 이미지 및 스크린샷에는 `loading="lazy"` 및 명확한 `alt` 속성을 부여합니다.
   - 시각 효과 구현 시 모션 감소(`prefers-reduced-motion`) 옵션을 항상 염두에 둡니다.
