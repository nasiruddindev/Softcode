import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { ExternalLink, CheckCircle2, Sparkles, Layers, ShieldCheck, Wifi } from 'lucide-react';

export const Projects = () => {
  const [activeNicheTab, setActiveNicheTab] = useState(0);

  const d2cNiches = [
    {
      title: 'লাক্সারি ফ্যাশন ও বুটিক',
      desc: 'সাইজ চিপস (S, M, L, XL), কালার সোয়াচ, ১-ক্লিক অর্ডার ড্রয়ার ও বিকাশ অটো পেমেন্ট।',
      metric: '৩ গুণ দ্রুত চেকআউট',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop&q=80'
    },
    {
      title: 'স্মার্ট গ্যাজেট ও অ্যাক্সেসরিজ',
      desc: 'টেক স্পেসিফিকেশন চার্ট, ওয়ারেন্টি সিলেক্টর ও ইনস্ট্যান্ট ক্যাশ অন ডেলিভারি।',
      metric: '০.৮ সেকেন্ড পেজ লোড',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80'
    },
    {
      title: 'কসমেটিকস ও স্কিনকেয়ার',
      desc: 'স্কিন টাইপ ফিল্টারিং, ইনগ্রেডিয়েন্ট গাইড ও হোয়াটসঅ্যাপ ডাইরেক্ট কনসালটেশন।',
      metric: '৯৯.২% কাস্টমার রিটেনশন',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80'
    },
    {
      title: 'অর্গানিক ফুড ও গ্রোসারি',
      desc: 'ওয়েট/কেজি ভ্যারিয়েন্ট সিলেক্টর ও পাঠাও/স্টেডফাস্ট সেম-ডে কুরিয়ার সিঙ্ক।',
      metric: '১-ক্লিক রি-অর্ডারিং',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80'
    },
    {
      title: 'প্রিমিয়াম স্নিকার্স ও শুজ',
      desc: 'সাইজ চার্ট গাইড, স্টক স্ট্যাটাস ও ইনস্ট্যান্ট ট্র্যাকিং আইডি জেনারেটর।',
      metric: '০% মিসিং ট্রানজেকশন',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-theme-primary border-b border-theme relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-light text-theme-primary border border-[var(--accent-gold)]">
            লাইভ পোর্টফোলিও & ডেমো
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-theme-primary">
            বাস্তবে যেমন হবে আপনার ওয়েবসাইট
          </h2>
          <p className="text-sm sm:text-base text-theme-secondary">
            কোনো ডেমো ছবি নয়, সরাসরি লাইভ সার্ভারে ডিপ্লয় করা সাইটগুলো ব্রাউজ করে স্পিড ও ফিচার পরীক্ষা করুন।
          </p>
        </div>

        {/* 1. Master D2C Flagship Engine Showcase */}
        <div className="rounded-3xl border-2 border-[var(--accent-gold)] bg-theme-card p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-gold-light text-theme-primary border border-[var(--accent-gold)]">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>মাস্টার ডিটুসি ই-কমার্স ফ্ল্যাগশিপ</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-theme-primary">
                  {siteData.featuredProject.title}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-gold mt-1">
                  {siteData.featuredProject.category}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-theme-secondary leading-relaxed">
                {siteData.featuredProject.description}
              </p>

              {/* Niche Tabs */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-theme-primary uppercase tracking-wider">
                  ৫টি রেডি-টু-লঞ্চ স্টোর দেখুন:
                </p>
                <div className="flex flex-wrap gap-2">
                  {d2cNiches.map((niche, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveNicheTab(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        activeNicheTab === idx
                          ? 'gold-btn'
                          : 'border border-theme bg-theme-secondary text-theme-secondary hover:border-[var(--accent-gold)]'
                      }`}
                    >
                      {niche.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Tab Info Box */}
              <div className="p-4 rounded-xl border border-theme bg-theme-secondary space-y-1.5">
                <p className="text-xs font-bold text-theme-primary">
                  {d2cNiches[activeNicheTab].title}
                </p>
                <p className="text-xs text-theme-secondary">
                  {d2cNiches[activeNicheTab].desc}
                </p>
                <p className="text-[11px] font-mono font-bold text-gold pt-1">
                  🚀 {d2cNiches[activeNicheTab].metric}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={siteData.featuredProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold shadow-md cursor-pointer"
                >
                  <span>সম্পূর্ণ লাইভ ডেমো স্টোর ভিজিট করুন</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Image / Mockup */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden border border-theme shadow-2xl relative group">
                <img
                  src={d2cNiches[activeNicheTab].image}
                  alt={d2cNiches[activeNicheTab].title}
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090F1D]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--accent-gold)] text-slate-950 font-bold uppercase">
                      Live Preview
                    </span>
                    <p className="text-base font-bold">{d2cNiches[activeNicheTab].title}</p>
                    <p className="text-xs text-slate-300 font-mono">React 19 • Tailwind • Vite • bKash AutoPay</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Client Corporate & ISP Projects Grid */}
        <div className="space-y-6">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-theme-primary">
              কর্পোরেট ও এন্টারপ্রাইজ প্রজেক্টসমূহ
            </h3>
            <p className="text-xs sm:text-sm text-theme-secondary">
              বিভিন্ন ইন্ডাস্ট্রির প্রতিষ্ঠিত ব্র্যান্ডের জন্য নির্মিত লাইভ প্ল্যাটফর্ম
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteData.projects.slice(1).map((proj) => (
              <div
                key={proj.id}
                className="rounded-3xl border border-theme bg-theme-card p-6 sm:p-8 card-hover-effect flex flex-col justify-between space-y-6"
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
                    <h4 className="text-xl font-black text-theme-primary">
                      {proj.title}
                    </h4>
                    <p className="text-xs text-theme-secondary mt-1 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-theme-secondary text-theme-secondary border border-theme"
                      >
                        {tech}
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
