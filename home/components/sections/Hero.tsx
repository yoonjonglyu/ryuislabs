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
          RyuisLabs <br />
          <span className="text-zinc-500">모든 성취의 이면에는 치열한 과정이 존재합니다.</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
          RyuisLabs는 감성이나 우연에 기대지 않고, 본질적 논리와 인과 관계를 바탕으로<br />
          인간의 노력과 비즈니스의 모든 과정을 정밀하게 기록하는 고성능 솔루션을 공급합니다.
        </p>
      </div>
    </section>
  );
}