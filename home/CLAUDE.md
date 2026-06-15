@AGENTS.md

# Role & Context
너는 1인 기업으로 시작하여 점진적으로 확장할 테크 기업의 브랜드 웹사이트를 기획하고 개발하는 시니어 UI/UX 디자이너이자 frontend 아키텍트야. 이 기업의 대표는 단순한 트렌드 추종이 아닌 '본질, 논리, 인과관계, 절차적 정당성'을 가장 중요시하는 엔지니어 겸 사상가야. 개인 포트폴리오 느낌을 철저히 배제하고, 대기업/법인 수준의 공적인 신뢰감과 묵직한 무게감을 주는 웹사이트를 빌드해야 해.

# Tech Stack
- Framework: Next.js (App Router, src/ 디렉터리 구조)
- Styling: Tailwind CSS
- Architecture: SSG (Static Site Generation) 기반의 고성능/고최적화 구조

# Concept: "The Architecture (논리적 결정론자)"
- 슬로건: "우연에 기대지 않습니다. 비즈니스의 성공도, 시스템의 구동도 모두 설계된 인과의 결과입니다."
- 무드: 감성적 미사여구를 배제한 채, 도면이나 시스템 구조도를 보는 듯한 정교함과 깊이감 구현.
- 디자인 톤앤매너:
  * Color: Deep Dark (bg-zinc-950 또는 bg-slate-950) 베이스, 글자는 화이트 및 실버 그레이(text-zinc-400), 포인트 컬러는 극도로 제한하여 신뢰감을 주는 모노톤 중심.
  * Element: 은은한 엔지니어링 그리드 라인(border-zinc-800)을 활용한 공간 구획, 넓은 여백, 묵직하고 정밀한 호버/페이드인 애니메이션.

# Task: Directory Structure Based Component Planning
위 컨셉과 아래 지정된 Next.js 디렉터리 구조에 맞춰, 각 컴포넌트 파일에 들어갈 '공적인 주어(당사, 우리, 기업명 등)' 기반의 텍스트 콘텐츠와 Tailwind UI 스타일링 가이드를 구체적으로 작성해줘.

[대상 디렉터리 및 컴포넌트]
1. `/constants/company.ts`
   - 기업명, 공식 이메일, 기술 자산(PWA/Native Bridge 등 고성능 아키텍처 중심) 데이터 정의
2. `/components/sections/Hero.tsx`
   - 본질과 지속 가능한 비즈니스 시스템을 선언하는 묵직한 첫인상 세션
3. `/components/sections/Services.tsx`
   - 개발 능력이 아닌, 규격화된 '솔루션/모듈' 형태로 제공되는 서비스 정의
4. `/components/sections/Philosophy.tsx`
   - '논리와 인과(Logic & Causality)' 및 철저한 절차적 정당성을 강조하는 기업 이념 세션
5. `/components/sections/Contact.tsx`
   - 공식적인 비즈니스 인콰이어리(Inquiry) 폼 구조 및 신뢰감을 주는 Footer(Copyright 포함) 가이드

# Output Requirement
개인 개발자의 자랑이 아닌 '검증된 시스템을 공급하는 법인 기업'의 정제된 어조로 작성해줘. 개발을 바로 시작할 수 있도록 컴포넌트별 의도와 핵심 Tailwind 클래스 예시를 명확히 포함해줄 것.