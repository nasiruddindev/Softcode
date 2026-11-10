import React from 'react';
import { siteData } from '../data/siteData';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const prefilledMessage = encodeURIComponent(
    'হ্যালো সফটকোড আমি একটি ওয়েবসাইট তৈরি করতে আগ্রহী'
  );

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={`https://wa.me/${siteData.whatsappNumber}?text=${prefilledMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center gap-2.5 px-4 py-3.5 sm:px-5 sm:py-4 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-xs uppercase tracking-wider shadow-[0_10px_35px_rgba(16,185,129,0.4)] border-2 border-emerald-300/60 hover:border-white transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
      >
        {/* Subtle shine sweep */}
        <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />

        {/* Pulsing notification indicator */}
        <span className="relative flex h-3 w-3 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-80"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>

        {/* WhatsApp Icon */}
        <MessageCircle className="w-5 h-5 fill-white stroke-none group-hover:rotate-12 transition-transform shrink-0" />

        <div className="hidden sm:flex flex-col text-left">
          <span className="text-[11px] font-black tracking-wide leading-none">
            WhatsApp চ্যাট
          </span>
          <span className="text-[9px] font-medium text-emerald-100 leading-tight">
            ইনস্ট্যান্ট রিপ্লাই
          </span>
        </div>
      </a>
    </div>
  );
};
