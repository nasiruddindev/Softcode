import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { X, Check, MessageSquare, Phone, Sparkles } from 'lucide-react';

export const OrderModal = ({ isOpen, onClose, selectedPackage }) => {
  if (!isOpen || !selectedPackage) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const pkgName = selectedPackage.name;
    const price = selectedPackage.displayPrice || (selectedPackage.yearlyPrice ? `৳${selectedPackage.yearlyPrice}/বছর` : '');

    const message = `হ্যালো SoftCode,
আমি ওয়েবসাইট তৈরির জন্য অর্ডার কনফার্ম করতে চাই:
• প্যাকেজ: ${pkgName} (${price})
• কাস্টমার নাম: ${name || 'দেওয়া হয়নি'}
• মোবাইল নম্বর: ${phone || 'দেওয়া হয়নি'}
• বিজনেসের নাম: ${businessName || 'দেওয়া হয়নি'}
${notes ? `• বিশেষ নোট: ${notes}\n` : ''}
দয়া করে প্রজেক্ট শুরু করার পরবর্তী পদক্ষেপগুলো জানান।`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${siteData.whatsappNumber}?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div className="w-full max-w-lg rounded-3xl border-2 border-[var(--accent-gold)] bg-theme-card p-6 sm:p-8 shadow-2xl relative space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-theme-secondary hover:text-gold hover:bg-theme-secondary cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1.5 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gold-light text-theme-primary border border-[var(--accent-gold)]">
            <Sparkles className="w-3 h-3 text-gold" />
            <span>অর্ডার রিকোয়েস্ট</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-theme-primary">
            {selectedPackage.name}
          </h3>
          <p className="text-sm font-bold font-mono text-gold">
            {selectedPackage.displayPrice || (selectedPackage.yearlyPrice ? `৳${selectedPackage.yearlyPrice}/বছর` : '')}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-theme-primary mb-1">
              আপনার নাম *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="যেমন: মো: আরিফুল ইসলাম"
              className="w-full px-4 py-3 rounded-xl border border-theme bg-theme-secondary text-theme-primary focus:outline-none focus:border-[var(--accent-gold)]"
            />
          </div>

          <div>
            <label className="block font-bold text-theme-primary mb-1">
              মোবাইল / হোয়াটসঅ্যাপ নম্বর *
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="যেমন: 01889-013446"
              className="w-full px-4 py-3 rounded-xl border border-theme bg-theme-secondary text-theme-primary focus:outline-none focus:border-[var(--accent-gold)]"
            />
          </div>

          <div>
            <label className="block font-bold text-theme-primary mb-1">
              ব্যবসা বা ফেসবুক পেজের নাম
            </label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="যেমন: Aarshi Fashion House"
              className="w-full px-4 py-3 rounded-xl border border-theme bg-theme-secondary text-theme-primary focus:outline-none focus:border-[var(--accent-gold)]"
            />
          </div>

          <div>
            <label className="block font-bold text-theme-primary mb-1">
              কোনো বিশেষ চাহিদা বা পছন্দের কালার (ঐচ্ছিক)
            </label>
            <textarea
              rows="2"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="আপনার রিকোয়ারমেন্ট থাকলে সংক্ষেপে লিখুন..."
              className="w-full px-4 py-3 rounded-xl border border-theme bg-theme-secondary text-theme-primary focus:outline-none focus:border-[var(--accent-gold)] resize-none"
            ></textarea>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="gold-btn w-full py-4 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>হোয়াটসঅ্যাপে প্রজেক্ট কনফার্ম করুন</span>
            </button>
          </div>
        </form>

        <p className="text-[11px] text-center text-theme-secondary">
          অর্ডার পাঠানোর সাথে সাথে SoftCode ইঞ্জিনিয়ারিং টিম আপনার সাথে যোগাযোগ করবে।
        </p>

      </div>
    </div>
  );
};
