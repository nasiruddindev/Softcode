import React from 'react';
import { siteData } from '../data/siteData';
import { Phone, Mail, MapPin, Send, MessageCircle, MessageSquare } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-theme-secondary text-theme-secondary border-t border-theme pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#14213D] to-[#090F1D] border border-[var(--accent-gold)] flex items-center justify-center">
                <span className="text-[var(--accent-gold)] font-mono font-black text-xl">S</span>
              </div>
              <span className="font-mono font-black text-2xl text-theme-primary">
                SOFT<span className="text-gold">CODE</span>
              </span>
            </div>
            <p className="text-xs text-theme-secondary leading-relaxed">
              {siteData.agencyTagline}। কোনো মাসিক হিডেন চার্জ ছাড়াই আপনার ব্যবসার অনলাইন বিক্রির বিশ্বস্ত সমাধান।
            </p>
            <div className="pt-2 flex items-center gap-3">
              {siteData.socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg border border-theme text-xs font-bold text-theme-primary hover:border-[var(--accent-gold)] hover:text-gold transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-theme-primary">
              ন্যাভিগেশন
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-gold transition-colors">সার্ভিসসমূহ</a></li>
              <li><a href="#projects" className="hover:text-gold transition-colors">প্রজেক্ট ও লাইভ ডেমো</a></li>
              <li><a href="#pricing" className="hover:text-gold transition-colors">প্রাইসিং প্যাকেজ</a></li>
              <li><a href="#hosting" className="hover:text-gold transition-colors">ডোমেইন ও হোস্টিং</a></li>
              <li><a href="#process" className="hover:text-gold transition-colors">কাজের ধাপ</a></li>
              <li><a href="#faq" className="hover:text-gold transition-colors">সাধারণ প্রশ্নোত্তর (FAQ)</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-theme-primary">
              জনপ্রিয় সলিউশন
            </h4>
            <ul className="space-y-2 text-xs">
              <li>স্মার্ট ই-কমার্স স্টোর (৳১২,৯৯৯)</li>
              <li>হাই-কনভার্টিং ১-পেজ ফানেল (৳৬,৯৯৯)</li>
              <li>বিকাশ ও নগদ অটো মার্চেন্ট API</li>
              <li>স্টেডফাস্ট ও পাঠাও কুরিয়ার সিঙ্ক</li>
              <li>BDIX ও NVMe cPanel হোস্টিং</li>
              <li>কর্পোরেট বিজনেস পোর্টাল</li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-theme-primary">
              যোগাযোগ
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                <a href={`tel:${siteData.directCallNumber}`} className="hover:text-gold">
                  {siteData.displayCallNumber} (Call)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-gold shrink-0" />
                <a href={`https://wa.me/${siteData.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                  {siteData.displayWhatsapp} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-gold shrink-0" />
                <a href={`sms:${siteData.directCallNumber}`} className="hover:text-gold">
                  {siteData.displayCallNumber} (SMS)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                <a href={`mailto:${siteData.email}`} className="hover:text-gold">
                  {siteData.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>{siteData.location}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-theme flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} SoftCode. সর্বস্বত্ব সংরক্ষিত।</p>
          <p className="text-[11px] text-theme-secondary font-mono">
            Crafted with React, Tailwind & Premium Luxury Architecture
          </p>
        </div>
      </div>
    </footer>
  );
};
