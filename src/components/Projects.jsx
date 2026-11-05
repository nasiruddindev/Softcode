import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { ExternalLink, CheckCircle2, Sparkles, Smartphone, ShoppingBag, ShieldCheck, Wifi, ArrowUpRight, Zap, Star } from 'lucide-react';

export const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const liveStores = [
    {
      id: 'smartghor',
      tag: '🔥 গ্যাজেট শপ ফ্ল্যাগশিপ',
      category: 'Smart Home & Wearable Gadgets',
      title: 'SmartGhor | স্মার্ট হোম ও ইউনিক গ্যাজেট শপ',
      url: 'https://smartghor-ten.vercel.app/',
      displayUrl: 'smartghor-ten.vercel.app',
      description: 'বাংলাদেশের সেরা উদ্ভাবনী ও ইউনিক স্মার্ট গ্যাজেটের কালেকশন। স্মার্ট ওয়াচ, ওয়্যারলেস ইয়ারবাডস ও হোম গ্যাজেটের জন্য রেডি-টু-লঞ্চ লাইভ ই-কমার্স প্ল্যাটফর্ম।',
      image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1200&auto=format&fit=crop&q=85',
      metrics: '⚡ ০.৭ সে. স্পিড • বিকাশ ও নগদ AutoPay • স্টেডফাস্ট কুরিয়ার সিঙ্ক',
      keywords: ['স্মার্ট ওয়াচ', 'ওয়্যারলেস ইয়ারবাডস', 'হোম অটোমেশন', 'বিকাশ AutoPay', 'স্টেডফাস্ট সিঙ্ক', '০.৭ সে. স্পিড', '১-ক্লিক অর্ডার'],
      highlights: [
        'ইনস্ট্যান্ট ড্রয়ার কার্ট ও ক্যাশ অন ডেলিভারি',
        'বিকাশ ও নগদ অটো মার্চেন্ট পেমেন্ট ভেরিফিকেশন',
        'মোবাইলে ০.৭ সেকেন্ড লোডিং স্পিড'
      ]
    },
    {
      id: 'noir-menswear',
      tag: '👑 লাক্সারি ক্লথিং ব্র্যান্ড',
      category: "Dhaka's Definitive Men's Lifestyle & Panjabi",
      title: 'NOIR MENSWEAR | মেনস লাইফস্টাইল ও পাঞ্জাবি',
      url: 'https://noirmenswear-delta.vercel.app/',
      displayUrl: 'noirmenswear-delta.vercel.app',
      description: 'মডার্ন বাংলাদেশি জেন্টলম্যানদের জন্য হাই-এন্ড ফ্যাশন ও লাইফস্টাইল স্টোর। ২৪০ GSM ওভারসাইজড ড্রপ-শোল্ডার টিজ, রয়্যাল মিশরীয় কটন পাঞ্জাবি ও টেক্সচার্ড পোলোর এক্সক্লুসিভ কালেকশন।',
      image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=1200&auto=format&fit=crop&q=85',
      metrics: '👔 ৩ গুণ কনভার্সন • সাইজ চিপস (S-XXL) • ১-ক্লিক ড্রয়ার চেকআউট',
      keywords: ['২৪০ GSM ওভারসাইজড টিজ', 'রয়্যাল কটন পাঞ্জাবি', 'সাইজ চিপস (S-XXL)', 'টেক্সচার্ড পোলো', '১-ক্লিক চেকআউট', 'লাক্সারি ডার্ক মোড'],
      highlights: [
        'পারফেক্ট ফিটিং সাইজ চিপস (S, M, L, XL, XXL)',
        'ফাস্ট মোবাইল ড্রয়ার চেকআউট ও ইনস্ট্যান্ট ইনভয়েস',
        'উচ্চ রেজুলেশন ফেব্রিক জুম ও মেগা ক্যাটালগ'
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-theme-primary border-b border-theme relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[var(--accent-gold)] opacity-[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-light text-theme-primary border border-[var(--accent-gold)]">
            <Sparkles className="w-3.5 h-3.5 text-gold inline mr-1" />
            লাইভ ক্লায়েন্ট ডেমো স্টোর
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-theme-primary">
            আমাদের তৈরি রিয়েল লাইভ ওয়েবসাইটসমূহ
          </h2>
          <p className="text-sm sm:text-base text-theme-secondary">
            কোনো ডেমো ছবি নয়, সরাসরি লাইভ সার্ভারে ডিপ্লয় করা সাইটগুলো ভিজিট করে স্পিড, ড্রয়ার চেকআউট ও পেমেন্ট সিস্টেম স্বচক্ষে দেখুন।
          </p>
        </div>

        {/* 1. Primary Showcase Cards: SmartGhor & Noir Menswear */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {liveStores.map((store) => (
            <div
              key={store.id}
              className="rounded-3xl border-2 border-[var(--accent-gold)] bg-theme-card p-5 sm:p-7 shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(181,139,69,0.25)] flex flex-col justify-between group overflow-hidden relative"
            >
              <div className="space-y-5">
                
                {/* Browser Mockup Chrome Header */}
                <div className="px-3.5 py-2.5 bg-theme-secondary rounded-xl border border-theme flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>

                  <a
                    href={store.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-0.5 rounded-md bg-theme-primary border border-theme text-[11px] font-mono text-theme-secondary hover:text-gold flex items-center gap-1.5 transition-colors"
                  >
                    <span className="text-emerald-500 font-bold">🔒</span>
                    <span className="font-semibold text-theme-primary">{store.displayUrl}</span>
                    <ExternalLink className="w-3 h-3 text-gold" />
                  </a>

                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[10px] font-mono font-bold text-gold uppercase">LIVE</span>
                  </div>
                </div>

                {/* Banner Image Container with Hover Effect */}
                <div className="relative rounded-2xl overflow-hidden h-60 sm:h-72 border border-theme relative group/img">
                  <img
                    src={store.image}
                    alt={store.title}
                    className="w-full h-full object-cover group-hover/img:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090F1D]/90 via-[#090F1D]/30 to-transparent opacity-80 group-hover/img:opacity-60 transition-opacity" />

                  {/* Top-Right Badge */}
                  <div className="absolute top-3.5 right-3.5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#090F1D]/90 text-[var(--accent-gold)] border border-[var(--accent-gold)] backdrop-blur-md shadow-md">
                      {store.tag}
                    </span>
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white space-y-1">
                    <p className="text-[11px] font-mono text-slate-300 font-semibold">
                      {store.category}
                    </p>
                    <p className="text-xs font-mono font-bold text-[var(--accent-gold)] bg-black/50 px-2.5 py-1 rounded-lg backdrop-blur-xs inline-block">
                      {store.metrics}
                    </p>
                  </div>
                </div>

                {/* Content & Details */}
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-black text-theme-primary">
                    {store.title}
                  </h3>

                  <p className="text-xs text-theme-secondary leading-relaxed">
                    {store.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-1.5 pt-1">
                    {store.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-theme-primary font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Keywords Pill Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {store.keywords.map((kw, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-theme-secondary text-theme-secondary border border-theme hover:border-[var(--accent-gold)] transition-colors"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Link Button */}
              <div className="pt-6 mt-6 border-t border-theme">
                <a
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-btn w-full py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>সরাসরি ওয়েবসাইট লাইভ ভিজিট করুন</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Corporate & Institutional Client Projects Grid */}
        <div className="space-y-6 pt-6">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-theme-primary">
              কর্পোরেট ও প্রাতিষ্ঠানিক প্রজেক্টসমূহ
            </h3>
            <p className="text-xs sm:text-sm text-theme-secondary">
              সিকিউরিটি ম্যানেজমেন্ট ও ব্রডব্যান্ড নেটওয়ার্কের জন্য তৈরি কাস্টম এন্টারপ্রাইজ সিস্টেম
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteData.projects.slice(2).map((proj) => (
              <div
                key={proj.id}
                className="rounded-3xl border border-theme bg-theme-card p-6 sm:p-7 card-hover-effect flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden border border-theme h-48 relative group">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#090F1D]/80 text-[var(--accent-gold)] border border-[var(--accent-gold)]">
                        {proj.category}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-black text-theme-primary">
                      {proj.title}
                    </h4>
                    <p className="text-xs text-theme-secondary mt-1 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.keywords.map((kw, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-theme-secondary text-theme-secondary border border-theme"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-theme">
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-outline-btn w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>ওয়েবসাইট ভিজিট করুন</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
