import React from 'react';
import { siteData } from '../data/siteData';
import { MessageSquare, Phone, ArrowUpRight, Sparkles } from 'lucide-react';

export const FinalCta = ({ onOpenOrder }) => {
  return (
    <section className="py-24 bg-theme-secondary/80 border-b border-theme relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="rounded-3xl border-2 border-[var(--accent-gold)] bg-theme-card p-8 sm:p-14 shadow-2xl space-y-8 relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-gold-light border border-[var(--accent-gold)] text-theme-primary">
            <Sparkles className="w-4 h-4 text-gold animate-bounce" />
            <span>আজই আপনার ব্র্যান্ডের জন্য প্রফেশনাল ওয়েবসাইট তৈরি করুন</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-theme-primary leading-tight">
            ফেসবুক ইনবক্সের ঝামেলা বাদ দিয়ে <br className="hidden sm:inline" />
            <span className="gold-gradient-text">অটোমেটেড সেলসে এগিয়ে থাকুন</span>
          </h2>

          <p className="text-sm sm:text-base text-theme-secondary max-w-2xl mx-auto leading-relaxed">
            মাত্র ৩ থেকে ৫ দিনের মধ্যে আপনার সম্পূর্ণ ব্র্যান্ডেড ওয়েবসাইট লাইভ বুঝে নিন। বিকাশ ও নগদ অটো মার্চেন্ট পেমেন্ট এবং পাঠাও/স্টেডফাস্ট কুরিয়ার সিঙ্ক সহ ১০০% রেডি।
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenOrder(siteData.pricing.packages[1])}
              className="gold-btn w-full sm:w-auto px-8 py-4 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xl"
            >
              <span>৳১২,৯৯৯ স্পেশাল অফারটি নিন</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent('হ্যালো SoftCode, আমি ওয়েবসাইট তৈরির জন্য বিস্তারিত আলোচনা করতে চাই।')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-outline-btn w-full sm:w-auto px-7 py-4 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>সরাসরি হোয়াটসঅ্যাপে কথা বলুন</span>
            </a>
          </div>

          <div className="pt-6 border-t border-theme flex flex-wrap items-center justify-center gap-6 text-xs text-theme-secondary font-mono">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-gold" />
              হটলাইন: {siteData.displayCallNumber}
            </span>
            <span>•</span>
            <span>ইমেইল: {siteData.email}</span>
            <span>•</span>
            <span>লোকেশন: {siteData.location}</span>
          </div>

        </div>
      </div>
    </section>
  );
};
