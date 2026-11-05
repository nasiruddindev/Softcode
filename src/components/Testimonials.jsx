import React from 'react';
import { siteData } from '../data/siteData';
import { Star, Quote, CheckCircle } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-theme-primary border-b border-theme relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-light text-theme-primary border border-[var(--accent-gold)]">
            বাস্তব ক্লায়েন্ট রিভিউ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-theme-primary">
            উদ্যোক্তারা আমাদের সার্ভিস নিয়ে কী বলছেন
          </h2>
          <p className="text-sm sm:text-base text-theme-secondary">
            ফ্যাশন, গ্যাজেট ও করপোরেট ক্লায়েন্টদের বাস্তব অভিজ্ঞতা ও শতভাগ ক্লায়েন্ট সন্তুষ্টির প্রমাণ।
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {siteData.testimonials.map((test) => (
            <div
              key={test.id}
              className="rounded-3xl border border-theme bg-theme-card p-8 flex flex-col justify-between space-y-6 card-hover-effect relative"
            >
              <Quote className="w-10 h-10 text-gold opacity-15 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[var(--accent-gold)] text-[var(--accent-gold)]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-gold-light text-theme-primary border border-[var(--accent-gold)]">
                    {test.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-theme-primary font-medium leading-relaxed italic">
                  "{test.quote}"
                </p>

                <div className="p-3 rounded-xl bg-theme-secondary text-[11px] font-mono font-bold text-gold border border-theme">
                  {test.metrics}
                </div>
              </div>

              <div className="pt-4 border-t border-theme flex items-center gap-3.5">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[var(--accent-gold)] shrink-0"
                />
                <div>
                  <h4 className="text-sm font-extrabold text-theme-primary flex items-center gap-1.5">
                    <span>{test.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-gold inline" />
                  </h4>
                  <p className="text-[11px] text-theme-secondary font-medium">
                    {test.role}, {test.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
