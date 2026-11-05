import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 bg-theme-primary border-b border-theme relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-light text-theme-primary border border-[var(--accent-gold)]">
            <HelpCircle className="w-3.5 h-3.5 text-gold inline mr-1" />
            সাধারণ প্রশ্নোত্তর (FAQ)
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-theme-primary">
            আপনার মনে থাকা কিছু কমন প্রশ্ন ও উত্তর
          </h2>
          <p className="text-sm sm:text-base text-theme-secondary">
            ওয়েবসাইট তৈরি করার আগে প্রতিটি বিষয়ে সুস্পষ্ট ধারণা রাখুন।
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {siteData.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[var(--accent-gold)] bg-theme-card shadow-md'
                    : 'border-theme bg-theme-card hover:border-theme-primary'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-theme-primary">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border border-theme transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-gold text-white border-gold' : 'text-theme-secondary'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-theme-secondary leading-relaxed border-t border-theme/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
