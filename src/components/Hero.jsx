import React from 'react';
import { siteData } from '../data/siteData';
import { Sparkles, ArrowRight, ShieldCheck, Zap, CreditCard, ExternalLink, CheckCircle2, TrendingUp, Star, ShoppingBag } from 'lucide-react';

export const Hero = ({ onOpenOrder }) => {
  const { hero } = siteData;

  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-theme-primary">
      {/* Subtle luxury background radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--accent-gold)] opacity-[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-[#14213D] dark:bg-[#1B2A41] opacity-25 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* LEFT COLUMN: Clean, proportional typography (col-span-5 on xl) */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-5 text-left">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold bg-gold-light border border-[var(--accent-gold)] text-theme-primary shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse shrink-0" />
              <span>{hero.eyebrow}</span>
            </div>

            {/* Balanced Luxury Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-black tracking-tight text-theme-primary leading-[1.2]">
              {hero.headline} <br />
              <span className="gold-gradient-text block mt-1.5 text-xl sm:text-2xl lg:text-[30px] xl:text-[34px]">
                {hero.highlightWord}
              </span>
            </h1>

            {/* Balanced Subtext */}
            <p className="text-xs sm:text-sm text-theme-secondary font-medium leading-relaxed max-w-lg">
              {hero.subtext}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={() => onOpenOrder(siteData.pricing.packages[1])}
                className="gold-btn px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span className="font-bold">{hero.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#projects"
                className="gold-outline-btn px-5 py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer font-bold"
              >
                <span>{hero.secondaryCtaText}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Sleek Trust Value Pills (4 compact badges) */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div className="p-2.5 rounded-xl border border-theme bg-theme-secondary/80 flex items-center gap-2">
                <Zap className="w-4 h-4 text-gold shrink-0" />
                <div>
                  <p className="text-[11px] font-bold text-theme-primary">১.১ সে. স্পিড</p>
                  <p className="text-[9px] text-theme-secondary">রকেট লোডিং</p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl border border-theme bg-theme-secondary/80 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-gold shrink-0" />
                <div>
                  <p className="text-[11px] font-bold text-theme-primary">AutoPay</p>
                  <p className="text-[9px] text-theme-secondary">বিকাশ ও নগদ</p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl border border-theme bg-theme-secondary/80 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                <div>
                  <p className="text-[11px] font-bold text-theme-primary">১০০% ওনার</p>
                  <p className="text-[9px] text-theme-secondary">নো মান্থলি ফি</p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl border border-theme bg-theme-secondary/80 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold shrink-0" />
                <div>
                  <p className="text-[11px] font-bold text-theme-primary">৩-৫ দিনে রেডি</p>
                  <p className="text-[9px] text-theme-secondary">ফুল লাইভ স্টোর</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Large, Prominent E-Commerce Showcase (col-span-7 on xl) */}
          <div className="lg:col-span-6 xl:col-span-7 relative">
            
            {/* Ambient luxury backlight glow */}
            <div className="absolute -inset-3 bg-gradient-to-r from-[var(--accent-gold)] via-[#14213D] to-[var(--accent-gold)] rounded-3xl opacity-20 blur-2xl group-hover:opacity-35 transition-opacity duration-500 pointer-events-none" />

            {/* Showcase Mockup Window with Hover Effects */}
            <div className="relative rounded-2xl sm:rounded-3xl border-2 border-[var(--accent-gold)] bg-theme-card p-2 sm:p-2.5 shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(181,139,69,0.28)] group cursor-pointer overflow-hidden">
              
              {/* Browser Header Bar */}
              <div className="px-3 py-2 bg-theme-secondary rounded-t-xl border-b border-theme flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>

                <div className="px-4 py-1 rounded-md bg-theme-primary border border-theme text-[11px] font-mono text-theme-secondary flex items-center gap-2 shadow-xs">
                  <span className="text-emerald-500 font-bold">🔒</span>
                  <span className="font-semibold text-theme-primary">https://softcode.com.bd/store</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px] font-mono font-bold text-gold uppercase hidden sm:inline">LIVE</span>
                </div>
              </div>

              {/* Large, Tall E-Commerce Preview Image Container */}
              <div className="relative rounded-b-xl overflow-hidden h-[340px] sm:h-[420px] md:h-[460px] lg:h-[450px] xl:h-[480px]">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=85"
                  alt="SoftCode Premium E-Commerce Platform"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-106 group-hover:brightness-105"
                />

                {/* Subtle Light Reflection Sheen sweep across image on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/12 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                {/* Gradient vignette for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090F1D]/85 via-[#090F1D]/20 to-transparent opacity-75 group-hover:opacity-60 transition-opacity" />

                {/* Floating Notification 1: Top-Right (New Order with bKash AutoPay) */}
                <div className="absolute top-4 right-4 p-2.5 sm:p-3 rounded-2xl bg-theme-card/95 border border-[var(--accent-gold)] shadow-xl backdrop-blur-md flex items-center gap-3 transform group-hover:scale-105 transition-transform duration-300">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      নতুন অনলাইন সেলস
                    </p>
                    <p className="text-xs sm:text-sm font-black text-theme-primary">
                      ৳৩,৪৯০ • বিকাশ AutoPay
                    </p>
                  </div>
                </div>

                {/* Floating Notification 2: Top-Left (Rating Badge) */}
                <div className="hidden sm:flex absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-theme-card/95 border border-theme shadow-lg backdrop-blur-md items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-[var(--accent-gold)] text-[var(--accent-gold)]" />
                  <span className="text-[11px] font-black text-theme-primary font-mono">৪.৯/৫</span>
                  <span className="text-[10px] text-theme-secondary font-medium">রেটিং</span>
                </div>

                {/* Floating Notification 3: Bottom-Left (Edge Speed Metric) */}
                <div className="absolute bottom-4 left-4 p-2.5 sm:p-3 rounded-2xl bg-theme-card/95 border border-theme shadow-xl backdrop-blur-md flex items-center gap-3 transform group-hover:scale-105 transition-transform duration-300">
                  <div className="w-9 h-9 rounded-xl bg-gold-light border border-[var(--accent-gold)] flex items-center justify-center text-gold shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                      <span className="text-[10px] font-mono font-bold text-theme-secondary uppercase">
                        Vercel Edge
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-black text-theme-primary font-mono">
                      ০.৮ সে. রকেট স্পিড
                    </p>
                  </div>
                </div>

                {/* Floating Notification 4: Bottom-Right (Courier Sync) */}
                <div className="hidden sm:flex absolute bottom-4 right-4 px-3.5 py-2 rounded-xl bg-[#090F1D]/90 border border-[var(--accent-gold)] text-[11px] font-mono text-[var(--accent-gold)] font-bold items-center gap-2 shadow-xl backdrop-blur-md">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>স্টেডফাস্ট ও পাঠাও সিঙ্কড</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
