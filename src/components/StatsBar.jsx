import React from 'react';
import { siteData } from '../data/siteData';

export const StatsBar = () => {
  return (
    <section className="border-y border-theme bg-theme-secondary py-7 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {siteData.trustStats.map((stat, idx) => (
          <div key={idx} className="space-y-1">
            <p className="text-2xl sm:text-3xl font-black font-mono gold-gradient-text">
              {stat.value}
            </p>
            <p className="text-xs sm:text-sm font-bold text-theme-primary">
              {stat.label}
            </p>
            <p className="text-[11px] text-theme-secondary">
              {stat.subtext}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
