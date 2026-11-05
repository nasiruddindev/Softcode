import React from 'react';
import { siteData } from '../data/siteData';
import { ShoppingBag, Smartphone, Apple, Sparkles, Footprints, BookOpen } from 'lucide-react';

const icons = [ShoppingBag, Smartphone, Apple, Sparkles, Footprints, BookOpen];

export const IndustryNiches = () => {
  return (
    <section className="py-12 bg-theme-primary border-b border-theme overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gold">
            যেকোনো প্রোডাক্ট নিশের জন্য উপযুক্ত
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-theme-primary mt-1">
            বাংলাদেশের সব জনপ্রিয় বিজনেস ক্যাটাগরির জন্য কাস্টমাইজড স্টোর
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {siteData.niches.map((niche, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl border border-theme bg-theme-card card-hover-effect text-center space-y-2 group"
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-gold-light border border-[var(--accent-gold)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-xs font-bold text-theme-primary">
                  {niche.name}
                </h3>
                <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-theme-secondary text-theme-secondary">
                  {niche.count}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
