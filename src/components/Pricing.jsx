import React from 'react';
import { siteData } from '../data/siteData';
import { Check, ArrowRight, Sparkles, Clock } from 'lucide-react';

export const Pricing = ({ onOpenOrder }) => {
  const { headline, subtext, packages, addons } = siteData.pricing;

  return (
    <section id="pricing" className="py-24 bg-theme-primary border-b border-theme relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-light text-theme-primary border border-[var(--accent-gold)]">
            স্বচ্ছ ও ফিক্সড প্রাইসিং
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-theme-primary">
            {headline}
          </h2>
          <p className="text-sm sm:text-base text-theme-secondary">
            {subtext}
          </p>
        </div>

        {/* 3 Main Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => {
            return (
              <div
                key={pkg.id}
                className={`rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 card-hover-effect relative ${
                  pkg.recommended
                    ? 'bg-theme-card border-2 border-[var(--accent-gold)] ring-1 ring-[var(--accent-gold)] shadow-2xl scale-[1.02]'
                    : 'bg-theme-card border-theme'
                }`}
              >
                {pkg.recommended && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider gold-btn shadow-md whitespace-nowrap flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{pkg.badge || '🔥 মোস্ট পপুলার চয়েস'}</span>
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-black text-theme-primary">
                      {pkg.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      <span className="text-xs font-bold text-gold">
                        ডেলিভারি: {pkg.delivery}
                      </span>
                    </div>
                  </div>

                  <div className="py-2 border-y border-theme">
                    <span className="text-4xl font-black font-mono text-gold">
                      {pkg.displayPrice}
                    </span>
                    <span className="text-xs text-theme-secondary ml-2 font-medium">
                      (এককালীন • নো মান্থলি ফি)
                    </span>
                  </div>

                  <p className="text-xs text-theme-secondary leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-theme-primary">
                      প্যাকেজভুক্ত সুবিধাসমূহ:
                    </p>
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-theme-primary font-medium">
                        <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-theme">
                  <button
                    onClick={() => onOpenOrder(pkg)}
                    className={`w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      pkg.recommended
                        ? 'gold-btn'
                        : 'gold-outline-btn'
                    }`}
                  >
                    <span>{pkg.name} অর্ডার করুন</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional Addons Section */}
        <div className="rounded-3xl border border-theme bg-theme-secondary/40 p-8 space-y-6">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-black text-theme-primary">
              প্রয়োজনীয় অতিরিক্ত অ্যাড-অন সার্ভিস (Optional Add-ons)
            </h3>
            <p className="text-xs sm:text-sm text-theme-secondary">
              আপনার ব্যবসার পরিধি অনুযায়ী যেকোনো ফিচার আলাদা যুক্ত করে নিতে পারেন
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addons.map((addon) => (
              <div
                key={addon.id}
                className="p-4 rounded-xl border border-theme bg-theme-card flex items-center justify-between"
              >
                <div className="pr-2">
                  <p className="text-xs font-bold text-theme-primary">
                    {addon.name}
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-gold shrink-0 bg-gold-light px-2.5 py-1 rounded-lg border border-[var(--accent-gold)]">
                  {addon.displayPrice}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
