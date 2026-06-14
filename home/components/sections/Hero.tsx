import React from 'react';
import { COMPANY_INFO } from '@/constants/company';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center px-6 lg:px-12 border-b border-zinc-800 bg-zinc-950">
      {/* 배경 그리드 라인 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="relative z-10 max-w-5xl">
        <span className="text-zinc-500 font-mono tracking-tighter mb-4 block">
          ESTABLISHED {COMPANY_INFO.foundation} / SYSTEM ARCHITECTURE
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8 tracking-tighter">
          우연에 기대지 않는<br />
          <span className="text-zinc-500">설계된 비즈니스의 성공.</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
          당사는 본질적 논리와 인과 관계를 바탕으로 지속 가능한 시스템을 구축합니다. 
          단순한 개발을 넘어, 비즈니스의 구동 원리를 규격화하고 정당성을 증명합니다.
        </p>
      </div>
    </section>
  );
}