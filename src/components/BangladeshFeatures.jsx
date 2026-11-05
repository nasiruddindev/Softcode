import React from 'react';
import { siteData } from '../data/siteData';
import { Wallet, CreditCard, MessageSquare, Truck, Smartphone, Globe, Server } from 'lucide-react';

const iconMap = {
  Wallet,
  CreditCard,
  MessageSquare,
  Truck,
  Smartphone,
  Globe,
  Server,
};

export const BangladeshFeatures = () => {
  return (
    <section className="py-24 bg-theme-secondary/50 border-b border-theme relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-light text-theme-primary border border-[var(--accent-gold)]">
            বাংলাদেশি ই-কমার্স স্পেশালাইজেশন
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-theme-primary">
            দেশীয় মার্কেটের উপযোগী প্রতিটি ফিচার রেডি
          </h2>
          <p className="text-sm sm:text-base text-theme-secondary">
            আন্তর্জাতিক প্ল্যাটফর্মগুলোতে যা তৈরি করতে বাড়তি খরচ ও জটিল প্লাগিনের প্রয়োজন হয়, SoftCode-এ তা এক প্যাকেজেই অন্তর্ভুক্ত।
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {siteData.bangladeshFeatures.map((feat, idx) => {
            const Icon = iconMap[feat.icon] || Server;

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-theme bg-theme-card card-hover-effect flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-light border border-[var(--accent-gold)] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-theme-primary">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-theme-secondary">
                    {feat.label}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Bonus 8th Feature Card for grid symmetry */}
          <div className="p-6 rounded-2xl border border-[var(--accent-gold)] bg-gold-light/40 card-hover-effect flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gold text-white flex items-center justify-center shrink-0 shadow-sm">
              <span className="font-mono font-black text-lg">⚡</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-theme-primary">
                Meta Pixel & CAPI রেডি
              </h3>
              <p className="text-xs text-theme-secondary">
                সঠিক কনভার্সন ট্র্যাকিং ও এডের আরওআই বৃদ্ধি
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
