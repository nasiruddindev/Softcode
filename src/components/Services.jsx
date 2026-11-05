import React from 'react';
import { siteData } from '../data/siteData';
import { ShoppingCart, Zap, Building2, CreditCard, Gauge, Shield, ArrowUpRight } from 'lucide-react';

const serviceIcons = {
  ecommerce: ShoppingCart,
  landing: Zap,
  corporate: Building2,
  payment: CreditCard,
  speed: Gauge,
  maintenance: Shield,
};

export const Services = ({ onOpenOrder }) => {
  return (
    <section id="services" className="py-24 bg-theme-secondary/50 border-b border-theme relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-light text-theme-primary border border-[var(--accent-gold)]">
            আমাদের সার্ভিসসমূহ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-theme-primary">
            উদ্যোক্তাদের বিক্রি বাড়ানোর জন্য স্পেশাল সলিউশন
          </h2>
          <p className="text-sm sm:text-base text-theme-secondary">
            ফেসবুক ইনবক্সে ঘণ্টার পর ঘণ্টা বসে না থেকে অটোমেটেড ওয়েবসাইট দিয়ে বিজনেস স্কেল করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.services.map((service) => {
            const Icon = serviceIcons[service.id] || Zap;
            const isPopular = service.id === 'ecommerce';

            return (
              <div
                key={service.id}
                className={`rounded-2xl p-7 border transition-all duration-300 flex flex-col justify-between card-hover-effect relative ${
                  isPopular
                    ? 'bg-theme-card border-[var(--accent-gold)] ring-1 ring-[var(--accent-gold)]'
                    : 'bg-theme-card border-theme'
                }`}
              >
                {isPopular && (
                  <span className="absolute -top-3 right-6 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider gold-btn shadow-sm">
                    Most Popular
                  </span>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gold-light border border-[var(--accent-gold)] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <span className="text-xs font-mono font-bold text-theme-secondary">
                      {service.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-theme-primary">
                      {service.title}
                    </h3>
                    <p className="text-xs font-bold text-gold mt-1">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-theme-secondary leading-relaxed">
                    {service.details}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-theme-secondary text-theme-secondary border border-theme"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-theme flex items-center justify-between">
                  <button
                    onClick={() => {
                      const matched = siteData.pricing.packages.find(p => 
                        (service.id === 'ecommerce' && p.id === 'business') ||
                        (service.id === 'landing' && p.id === 'starter') ||
                        (service.id === 'corporate' && p.id === 'enterprise')
                      ) || siteData.pricing.packages[1];
                      onOpenOrder(matched);
                    }}
                    className="text-xs font-bold text-theme-primary hover:text-gold flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <span>বিস্তারিত ও অর্ডার করুন</span>
                    <ArrowUpRight className="w-4 h-4 text-gold" />
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
