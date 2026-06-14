import React from 'react';
import { TECH_ASSETS } from '@/constants/company';

export default function Services() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-2">Service Modules</h2>
          <h3 className="text-3xl font-semibold text-white">규격화된 기술 자산</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-zinc-800">
          {TECH_ASSETS.map((asset) => (
            <div key={asset.id} className="p-8 border-r border-b border-zinc-800 hover:bg-zinc-900/50 transition-colors group">
              <div className="w-2 h-2 bg-zinc-700 mb-6 group-hover:bg-white transition-colors" />
              <h4 className="text-xl font-medium text-white mb-4">{asset.label}</h4>
              <p className="text-zinc-500 leading-relaxed font-light">
                {asset.description}
              </p>
              <div className="mt-8 text-xs font-mono text-zinc-600">
                DOC_REF: {asset.id.toUpperCase()}_v1.0
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}