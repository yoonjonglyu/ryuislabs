import React from 'react';

export default function Philosophy() {
  return (
    <section className='py-32 px-6 lg:px-12 bg-zinc-950 overflow-hidden'>
      <div className='max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
        <div>
          <h2 className='text-3xl font-bold text-white mb-8 tracking-tight'>
            신뢰 할 수 있는 증명:
            <br />
            노력의 가치를 자산으로.
          </h2>
          <div className='space-y-6 text-zinc-400 font-light leading-relaxed'>
            <p>
              우리는 단순히 &apos;이루어낸 결과&apos;에만 주목하는 세상의
              불명확함에 반대합니다. 성공이라는 결과는 우연일 수 있지만, 그곳에
              도달하기 위해 쌓아 올린 &apos;개인의 노력&apos;은 완전한 필연이자
              과학입니다.
            </p>
            <p>
              RyuisLabs는 과정의 밀도를 정량적으로 데이터화하여, 눈에 보이지
              않던 노력의 가치를 객관적인 자산으로 증명해 냅니다.
            </p>
          </div>
        </div>
        <div className='relative aspect-square border border-zinc-800 flex items-center justify-center bg-zinc-900/20'>
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className='text-[10rem] font-bold text-zinc-900 select-none'>
            LOGIC
          </div>
        </div>
      </div>
    </section>
  );
}
