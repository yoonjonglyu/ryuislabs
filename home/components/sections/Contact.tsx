import React from 'react';
import { COMPANY_INFO } from '@/constants/company';

export default function Contact() {
  return (
    <footer className='bg-zinc-950 border-t border-zinc-800 pt-24 pb-12 px-6 lg:px-12'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24'>
          <div>
            <h2 className='text-2xl font-semibold text-white mb-6 uppercase tracking-wider'>
              Business Inquiry
            </h2>
            <p className='text-zinc-400 mb-8 font-light'>
              RyuisLabs의 정교한 기록 솔루션은 개인의 성장(B2C)부터 기업의
              생산성 인프라(B2B)까지
              <br />
              흐트러짐 없는 시스템적 질서를 제공합니다.
              <br />
              당사의 솔루션 도입 및
              기술 협력이 필요하시다면 공식 인콰이어리를 통해 문의해 주십시오.
            </p>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className='inline-block px-8 py-4 border border-zinc-700 text-white font-mono hover:bg-white hover:text-black transition-all'>
              {COMPANY_INFO.email}
            </a>
          </div>
          <div className='flex flex-col justify-end text-right'>
            <div className='text-zinc-600 font-mono text-xs space-y-2'>
              <p>STRUCTURAL INTEGRITY GUARANTEED</p>
              <p>ALL SYSTEMS NOMINAL // {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>

        <div className='pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6'>
          <span className='text-zinc-500 font-bold tracking-widest'>
            {COMPANY_INFO.name}
          </span>
          <span className='text-zinc-700 text-sm font-mono'>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
