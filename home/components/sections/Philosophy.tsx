import React from 'react';

export default function Philosophy() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-zinc-950 overflow-hidden">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">
            논리와 인과:<br />절차적 정당성의 가치
          </h2>
          <div className="space-y-6 text-zinc-400 font-light leading-relaxed">
            <p>
              모든 시스템 장애의 90%는 불명확한 설계와 우연적 요소에서 비롯됩니다. 
              당사는 코드를 작성하기 전, 시스템의 모든 상태 전이를 수학적 논리로 검증합니다.
            </p>
            <p>
              우리는 &apos;작동하는 것&apos;에 만족하지 않습니다. &apos;왜 작동해야만 하는가&apos;에 대한 
              인과 관계를 문서화하고, 이를 비즈니스 로직에 투영합니다.
            </p>
          </div>
        </div>
        <div className="relative aspect-square border border-zinc-800 flex items-center justify-center bg-zinc-900/20">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="text-[10rem] font-bold text-zinc-900 select-none">LOGIC</div>
        </div>
      </div>
    </section>
  );
}