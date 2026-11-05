import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Calculator, Check, MessageSquare, ArrowRight } from 'lucide-react';

export const RoiCalculator = () => {
  const [selectedPkg, setSelectedPkg] = useState('business');
  const [selectedHosting, setSelectedHosting] = useState('business');
  const [selectedAddons, setSelectedAddons] = useState(['courier_sync']);

  const pkgMap = {
    starter: { name: 'স্টার্টার সেলস ফানেল', price: 6999 },
    business: { name: 'স্মার্ট ই-কমার্স স্টোর', price: 12999 },
    enterprise: { name: 'কাস্টম এন্টারপ্রাইজ', price: 19999 },
  };

  const hostingMap = {
    none: { name: 'আমার নিজস্ব হোস্টিং আছে (ফ্রি সেটআপ)', price: 0 },
    edge: { name: 'ক্লাউড এজ স্টার্টার (.com সহ)', price: 1990 },
    business: { name: 'বিজনেস প্রো cPanel (10GB NVMe + .com)', price: 3490 },
    enterprise: { name: 'এন্টারপ্রাইজ ভিআইপি (25GB NVMe + .com)', price: 5990 },
  };

  const addonList = [
    { id: 'bkash_autopay', name: 'bKash & Nagad AutoPay API Integration', price: 1500 },
    { id: 'extra_products', name: 'অতিরিক্ত ৫০টি প্রোডাক্ট ক্যাটালগ আপলোড', price: 1000 },
    { id: 'whatsapp_funnel', name: 'অটোমেটেড হোয়াটসঅ্যাপ অর্ডার জেনারেটর', price: 800 },
    { id: 'courier_sync', name: 'Pathao / Steadfast Courier Auto Sync', price: 1500 },
  ];

  const toggleAddon = (id) => {
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const basePrice = pkgMap[selectedPkg].price;
  const hostingPrice = hostingMap[selectedHosting].price;
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const item = addonList.find(a => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const grandTotal = basePrice + hostingPrice + addonsTotal;

  const handleWhatsAppOrder = () => {
    const pkgName = pkgMap[selectedPkg].name;
    const hostName = hostingMap[selectedHosting].name;
    const addonNames = selectedAddons.map(id => addonList.find(a => a.id === id)?.name).filter(Boolean);

    const message = `হ্যালো SoftCode,
আমি ওয়েবসাইট তৈরির জন্য নিচের কনফিগারেশনটি সিলেক্ট করেছি:
- প্যাকেজ: ${pkgName} (৳${basePrice.toLocaleString('bn-BD')})
- হোস্টিং: ${hostName} (৳${hostingPrice.toLocaleString('bn-BD')})
- অ্যাড-অন: ${addonNames.length ? addonNames.join(', ') : 'কোনোটি নয়'} (৳${addonsTotal.toLocaleString('bn-BD')})
মোট এস্টিমেটেড বাজেট: ৳${grandTotal.toLocaleString('bn-BD')}

আমি এই প্রজেক্টটি শুরু করতে চাই। বিস্তারিত জানাবেন প্লিজ।`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${siteData.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section className="py-24 bg-theme-secondary/40 border-b border-theme relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-light text-theme-primary border border-[var(--accent-gold)]">
            <Calculator className="w-4 h-4 text-gold" />
            <span>লাইভ বাজেট ক্যালকুলেটর</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-theme-primary">
            আপনার নিজস্ব বাজেটের হিসেব করুন
          </h2>
          <p className="text-sm sm:text-base text-theme-secondary">
            প্যাকেজ ও প্রয়োজনীয় সার্ভিস সিলেক্ট করে এক নজরে মোট খরচ ও সরাসরি হোয়াটসঅ্যাপে বুকিং করুন।
          </p>
        </div>

        {/* Calculator Body */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-theme bg-theme-card p-6 sm:p-10 shadow-xl space-y-8">
          
          {/* Step 1: Base Package */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-theme-primary">
              ১. মূল ওয়েবসাইট প্যাকেজ নির্বাচন করুন:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {Object.entries(pkgMap).map(([key, val]) => (
                <button
                  key={key}
                  onClick={() => setSelectedPkg(key)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedPkg === key
                      ? 'border-[var(--accent-gold)] bg-gold-light/40 shadow-xs ring-1 ring-[var(--accent-gold)]'
                      : 'border-theme bg-theme-secondary hover:border-theme-primary'
                  }`}
                >
                  <p className="text-xs font-bold text-theme-primary">{val.name}</p>
                  <p className="text-base font-black font-mono text-gold mt-1">
                    ৳{val.price.toLocaleString('bn-BD')}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Hosting */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-theme-primary">
              ২. ডোমেইন ও হোস্টিং অপশন নির্বাচন করুন:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(hostingMap).map(([key, val]) => (
                <button
                  key={key}
                  onClick={() => setSelectedHosting(key)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedHosting === key
                      ? 'border-[var(--accent-gold)] bg-gold-light/40 shadow-xs ring-1 ring-[var(--accent-gold)]'
                      : 'border-theme bg-theme-secondary hover:border-theme-primary'
                  }`}
                >
                  <p className="text-xs font-bold text-theme-primary">{val.name}</p>
                  <p className="text-sm font-bold font-mono text-gold mt-1">
                    {val.price === 0 ? 'ফ্রি' : `+৳${val.price.toLocaleString('bn-BD')}/বছর`}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Addons */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-theme-primary">
              ৩. অতিরিক্ত ফিচার (ঐচ্ছিক):
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {addonList.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-3.5 rounded-xl border flex items-center justify-between text-left transition-all cursor-pointer ${
                      isChecked
                        ? 'border-[var(--accent-gold)] bg-gold-light/30 ring-1 ring-[var(--accent-gold)]'
                        : 'border-theme bg-theme-secondary'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-5 h-5 rounded flex items-center justify-center border ${isChecked ? 'bg-gold border-gold text-white' : 'border-theme'}`}>
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <span className="text-xs font-medium text-theme-primary">{addon.name}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-gold ml-2">
                      +৳{addon.price.toLocaleString('bn-BD')}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Summary & WhatsApp Action */}
          <div className="pt-6 border-t border-theme flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs text-theme-secondary font-medium uppercase tracking-wider">
                সর্বমোট এস্টিমেটেড বাজেট
              </p>
              <p className="text-3xl sm:text-4xl font-black font-mono text-gold mt-1">
                ৳{grandTotal.toLocaleString('bn-BD')}
              </p>
              <p className="text-[11px] text-theme-secondary mt-0.5">
                কোনো হিডেন ফি নেই • ১ বছরের ফুল সাপোর্ট
              </p>
            </div>

            <button
              onClick={handleWhatsAppOrder}
              className="gold-btn w-full sm:w-auto px-8 py-4 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2.5 cursor-pointer shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>এই বাজেটে হোয়াটসঅ্যাপে অর্ডার দিন</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
