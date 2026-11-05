import React from 'react';
import { siteData } from '../data/siteData';
import { Zap, ShieldCheck, DollarSign, Clock } from 'lucide-react';

const guaranteeIcons = [Zap, ShieldCheck, DollarSign, Clock];

export const Guarantees = () => {
  return (
    <section className="py-20 bg-theme-secondary/60 border-b border-theme relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.guarantees.map((item, idx) => {
            const Icon = guaranteeIcons[idx % guaranteeIcons.length];
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-theme bg-theme-card flex flex-col justify-between card-hover-effect space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-light border border-[var(--accent-gold)] flex items-center justify-center">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-base font-black text-theme-primary">
                    {item.title}
                  </h3>
                  <p className="text-xs text-theme-secondary mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
