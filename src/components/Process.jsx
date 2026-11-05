import React from 'react';
import { siteData } from '../data/siteData';
import { FileSearch, Palette, Code, CheckCircle, Rocket } from 'lucide-react';

const stageIcons = [FileSearch, Palette, Code, CheckCircle, Rocket];

export const Process = () => {
  const { stages } = siteData.scrollStory;

  return (
    <section id="process" className="py-24 bg-theme-primary border-b border-theme relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-light text-theme-primary border border-[var(--accent-gold)]">
            সহজ ও গোছানো প্রসেস
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-theme-primary">
            প্রফেশনাল ওয়েবসাইট তৈরির ৫টি সহজ ধাপ
          </h2>
          <p className="text-sm sm:text-base text-theme-secondary">
            অর্ডার থেকে ডেলিভারি পর্যন্ত প্রতিটি ধাপে শতভাগ স্বচ্ছতা বজায় রেখে প্রজেক্ট বুঝিয়ে দেওয়া হয়।
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {stages.map((stage, idx) => {
            const Icon = stageIcons[idx % stageIcons.length];

            return (
              <div
                key={idx}
                className="rounded-2xl border border-theme bg-theme-card p-6 flex flex-col justify-between card-hover-effect relative group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gold-light border border-[var(--accent-gold)] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <span className="text-xl font-mono font-black text-gold">
                      {stage.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-theme-primary leading-snug">
                      {stage.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-gold mt-1">
                      {stage.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-theme-secondary leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-theme">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-theme-secondary">
                    ধাপ ০{idx + 1} / ০৫
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
