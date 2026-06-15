import React from 'react';

export default function Philosophy() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-zinc-950 overflow-hidden">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">
            신뢰 할 수 있는 증명:<br />노력의 가치
          </h2>
          <div className="space-y-6 text-zinc-400 font-light leading-relaxed">
            <p>
              모든 결과의 성취는 불명확한 설계와 우연적 요소에서 비롯됩니다. 
              당사는 모든 노력을 객관화된 과정을 통해서, 추적하고 수학적 논리로 검증합니다.
            </p>
            <p>
              우리는 &apos;단순히 이루어내는 것(결과)&apos;에 만족하지 않습니다. &apos;개인의 노력&apos;의 
              밀도를 데이터화 하고, 이를 통해서 모든 개인의 노력을 증명합니다..
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