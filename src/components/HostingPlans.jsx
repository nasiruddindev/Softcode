import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Check, Zap, Server, Globe, Shield, Sparkles, ArrowRight } from 'lucide-react';

export const HostingPlans = ({ onOpenOrder }) => {
  const [billingCycle, setBillingCycle] = useState('yearly');
  const { hostingPackages } = siteData;

  return (
    <section id="hosting" className="py-24 bg-theme-secondary/40 border-b border-theme relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-light text-theme-primary border border-[var(--accent-gold)]">
            ডোমেইন ও সুপারফাস্ট হোস্টিং প্ল্যান
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-theme-primary">
            ই-কমার্স স্টোরের জন্য BDIX আল্ট্রা-স্পিড সার্ভার
          </h2>
          <p className="text-sm sm:text-base text-theme-secondary">
            প্রতিটি হোস্টিং প্ল্যানে ১ বছরের অফিশিয়াল .com ডোমেইন এবং ফ্রি লাইফটাইম SSL সার্টিফিকেট অন্তর্ভুক্ত।
          </p>

          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-2xl bg-theme-card border border-theme shadow-xs mt-2">
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                billingCycle === 'yearly'
                  ? 'gold-btn'
                  : 'text-theme-secondary hover:text-theme-primary'
              }`}
            >
              বাৎসরিক প্ল্যান (১ ডোমেইন ফ্রি 🎁)
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'gold-btn'
                  : 'text-theme-secondary hover:text-theme-primary'
              }`}
            >
              মাসিক প্ল্যান
            </button>
          </div>
        </div>

        {/* Hosting Explainer Box */}
        <div className="rounded-2xl border border-theme bg-theme-card p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-light border border-[var(--accent-gold)] flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-theme-primary">১০০% আপনার ডোমেইন</h4>
              <p className="text-xs text-theme-secondary mt-0.5">
                আপনার পছন্দের ব্র্যান্ড নেমে (.com) সরাসরি আপনার নামে রেজিস্ট্রেশন।
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-light border border-[var(--accent-gold)] flex items-center justify-center shrink-0">
              <Server className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-theme-primary">NVMe SSD & BDIX</h4>
              <p className="text-xs text-theme-secondary mt-0.5">
                বাংলাদেশে দ্রুততম লোডিংয়ের জন্য লোকাল BDIX এবং পিওর NVMe স্টোরেজ।
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-light border border-[var(--accent-gold)] flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-theme-primary">অটো উইকলি ব্যাকআপ</h4>
              <p className="text-xs text-theme-secondary mt-0.5">
                আপনার প্রোডাক্ট ও কাস্টমার ডেটা সবসময় সুরক্ষিত ও অটো ব্যাকআপ নিশ্চিত।
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {hostingPackages.map((plan) => {
            const price = billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
            const cycleText = billingCycle === 'yearly' ? '/বছর' : '/মাস';

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 card-hover-effect relative ${
                  plan.popular
                    ? 'bg-theme-card border-2 border-[var(--accent-gold)] ring-1 ring-[var(--accent-gold)] shadow-xl'
                    : 'bg-theme-card border-theme'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider gold-btn shadow-md whitespace-nowrap">
                    {plan.badge}
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    {!plan.popular && (
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-theme-secondary text-theme-secondary border border-theme">
                        {plan.badge}
                      </span>
                    )}
                    <h3 className="text-2xl font-black text-theme-primary mt-2">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-theme-secondary font-mono mt-0.5">
                      {plan.subName}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black font-mono text-gold">
                        ৳{price.toLocaleString('bn-BD')}
                      </span>
                      <span className="text-xs font-semibold text-theme-secondary">
                        {cycleText}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-[11px] text-theme-secondary line-through">
                        রেগুলার ৳{plan.regularYearlyPrice.toLocaleString('bn-BD')}/বছর
                      </p>
                    )}
                  </div>

                  <p className="text-xs text-theme-secondary leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="pt-4 border-t border-theme space-y-2.5">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-theme-primary font-medium">
                        <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-theme">
                  <button
                    onClick={() => onOpenOrder(plan)}
                    className={`w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      plan.popular
                        ? 'gold-btn'
                        : 'gold-outline-btn'
                    }`}
                  >
                    <span>হোস্টিং প্যাকেজ অর্ডার করুন</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
