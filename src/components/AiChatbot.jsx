import React, { useState, useRef, useEffect } from 'react';
import { siteData } from '../data/siteData';
import { MessageSquare, X, Send, Bot, User, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';

export const AiChatbot = ({ onOpenOrder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: `আসসালামু আলাইকুম! আমি SoftCode থেকে বলছি।\nআপনার কোন ধরনের ওয়েবসাইট লাগবে? আপনার ব্যবসার ধরন এবং প্রয়োজনীয় ফিচারগুলো একটু বিস্তারিত জানালে আমরা এখনই আপনাকে সেরা প্যাকেজ ও সলিউশন জানিয়ে দিতে পারি:`
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    { label: '🔥 ৳১২,৯৯৯ প্যাকেজ', query: '৳১২,৯৯৯ প্যাকেজে কী কী পাব?' },
    { label: '⚡ ৳৬,৯৯৯ ফানেল', query: '৳৬,৯৯৯ টাকার প্যাকেজে কী আছে?' },
    { label: '⏱️ ডেলিভারি সময়', query: 'ওয়েবসাইট তৈরি করতে কত দিন সময় লাগে?' },
    { label: '🌐 লাইভ ডেমো', query: 'আপনাদের লাইভ ডেমো ওয়েবসাইট দেখতে চাই' },
    { label: '🛠️ সেলফ ম্যানেজমেন্ট', query: 'আমি কি নিজে প্রোডাক্ট আপলোড ও এডিট করতে পারব?' }
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = (textToSend) => {
    const q = (textToSend || input).trim();
    if (!q) return;

    const userMsg = { sender: 'user', text: q };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Process reply
    setTimeout(() => {
      const reply = generateBotReply(q);
      setMessages(prev => [...prev, reply]);
    }, 400);
  };

  const generateBotReply = (query) => {
    const lower = query.toLowerCase();

    if (lower.includes('১২,৯৯৯') || lower.includes('12999') || lower.includes('১২৯৯৯') || lower.includes('smart') || lower.includes('স্মার্ট')) {
      return {
        sender: 'bot',
        text: `🔥 আমাদের সবচেয়ে জনপ্রিয় "Smart E-Commerce প্যাকেজ" (৳১২,৯৯৯):
• মাল্টি-পেজ পূর্ণাঙ্গ রেসপনসিভ ই-কমার্স ওয়েবসাইট
• বিকাশ ও নগদ অটো মার্চেন্ট পেমেন্ট গেটওয়ে (অটো ভেরিফিকেশন)
• পাঠাও ও স্টেডফাস্ট কুরিয়ার অটো বুকিং সিঙ্ক
• আনলিমিটেড প্রোডাক্ট আপলোড ও স্টক নিয়ন্ত্রণ
• ১-ক্লিক ড্রয়ার কার্ট ও ইনস্ট্যান্ট চেকআউট
• ২ মিনিটের সহজ ভিডিও গাইডলাইন ও ফুল কোড ওনারশিপ
ডেলিভারি সময়: ৩ থেকে ৫ দিন।`,
        action: { label: '৳১২,৯৯৯ প্যাকেজ বুক করুন', pkgId: 'business' }
      };
    }

    if (lower.includes('৬,৯৯৯') || lower.includes('6999') || lower.includes('৬৯৯৯') || lower.includes('starter') || lower.includes('ফানেল')) {
      return {
        sender: 'bot',
        text: `⚡ আমাদের "স্টার্টার সেলস ফানেল" (৳৬,৯৯৯):
• ১-পেজ হাই-কনভার্টিং সেলস ফানেল ওয়েবসাইট
• ক্যাশ অন ডেলিভারি (COD) ও বিকাশ TrxID ভেরিফিকেশন
• ৫০টি পর্যন্ত প্রোডাক্ট আপলোড গাইড
• হোয়াটসঅ্যাপ ডাইরেক্ট অর্ডার বাটন
• লাইফটাইম ফ্রি SSL সিকিউরিটি
ডেলিভারি সময়: মাত্র ১ থেকে ৩ দিন।`,
        action: { label: '৳৬,৯৯৯ প্যাকেজ বুক করুন', pkgId: 'starter' }
      };
    }

    if (lower.includes('ডেলিভারি') || lower.includes('সময়') || lower.includes('সময়সূচি') || lower.includes('time') || lower.includes('day')) {
      return {
        sender: 'bot',
        text: `⏱️ ডেলিভারি সময়সূচি:
• ৳৬,৯৯৯ স্টার্টার ফানেল: মাত্র ১–৩ দিনে লাইভ!
• ৳১২,৯৯৯ স্মার্ট ই-কমার্স: মাত্র ৩–৫ দিনে সম্পূর্ণ রেডি!
• কাস্টম এন্টারপ্রাইজ প্রজেক্ট: ৭–১০ কার্যদিবস।
ডেলিভারির আগে ক্লায়েন্টকে লাইভ ডেমো দেখানো হয় এবং সন্তুষ্ট হলে সম্পূর্ণ হ্যান্ডওভার বুঝিয়ে দেওয়া হয়।`
      };
    }

    if (lower.includes('ডেমো') || lower.includes('demo') || lower.includes('পোর্টফোলিও') || lower.includes('কাজ')) {
      return {
        sender: 'bot',
        text: `🌐 আমাদের তৈরি রিয়েল লাইভ ওয়েবসাইটগুলো সরাসরি ব্রাউজ করতে পারেন:

১. GRAIN & OVEN (বেকারি ও পিজ্জা কিচেন):
👉 https://livebakery.vercel.app/

২. SmartGhor (স্মার্ট গ্যাজেট শপ):
👉 https://smartghor-ten.vercel.app/

৩. NOIR MENSWEAR (লাক্সারি মেনসওয়্যার):
👉 https://noirmenswear-delta.vercel.app/

এখানে লাইভ ১-ক্লিক ড্রয়ার চেকআউট, সাইজ চিপস ও বিকাশ পেমেন্ট ফ্লো টেস্ট করতে পারবেন।`,
        link: 'https://livebakery.vercel.app/'
      };
    }

    if (lower.includes('ম্যানেজ') || lower.includes('আপলোড') || lower.includes('এডিট') || lower.includes('পারব')) {
      return {
        sender: 'bot',
        text: `✅ হ্যাঁ, অবশ্যই পারবেন!
আমরা ওয়েবসাইট ডেলিভারির সাথে একটি সহজ এডমিন প্যানেল এবং ২ মিনিটের একটি স্পষ্ট ভিডিও গাইড পাঠাব। কোনো কোডিং ছাড়াই আপনি যেকোনো সময় নতুন প্রোডাক্ট, দাম, স্টক ও ছবি পরিবর্তন করতে পারবেন।`
      };
    }

    return {
      sender: 'bot',
      text: `আমি SoftCode থেকে বলছি। আপনার কোন ধরনের ওয়েবসাইট লাগবে? আপনার ব্যবসার ধরন এবং প্রয়োজনীয় ফিচারগুলো একটু বিস্তারিত বলুন, অথবা আমাদের সাথে সরাসরি হোয়াটসঅ্যাপে কানেক্ট করুন:`,
      isWhatsApp: true
    };
  };

  return (
    <>
      {/* Floating Chatbot Launcher Button (Bottom-Left) */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative gold-btn px-4 py-3.5 sm:px-5 sm:py-4 rounded-full flex items-center gap-3 shadow-2xl cursor-pointer group"
          aria-label="Open AI Assistant"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <Bot className="w-5 h-5" />
          <span className="hidden sm:inline font-bold text-xs uppercase tracking-wider">
            SoftCode AI
          </span>
        </button>
      </div>

      {/* Chat Drawer / Modal Window (Anchored Bottom-Left) */}
      {isOpen && (
        <div className="fixed bottom-24 left-4 sm:left-6 w-[94vw] sm:w-[420px] h-[550px] max-h-[80vh] z-50 rounded-3xl border-2 border-[var(--accent-gold)] bg-theme-card shadow-2xl flex flex-col overflow-hidden animate-fadeIn">
          
          {/* Header */}
          <div className="p-4 bg-theme-secondary border-b border-theme flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gold-light border border-[var(--accent-gold)] flex items-center justify-center">
                <Bot className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="text-xs font-black text-theme-primary flex items-center gap-1.5">
                  <span>SoftCode AI Advisor</span>
                  <Sparkles className="w-3 h-3 text-gold" />
                </h4>
                <p className="text-[10px] text-theme-secondary font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                  অনলাইন • সাহায্য করতে প্রস্তুত
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-theme-secondary hover:text-gold cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Prompts Chips */}
          <div className="p-2.5 bg-theme-secondary/40 border-b border-theme flex items-center gap-1.5 overflow-x-auto text-[11px] no-scrollbar">
            {quickPrompts.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(item.query)}
                className="px-2.5 py-1 rounded-full border border-theme bg-theme-card text-theme-primary whitespace-nowrap hover:border-[var(--accent-gold)] hover:text-gold transition-colors cursor-pointer shrink-0 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-lg bg-gold-light border border-[var(--accent-gold)] flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-4 h-4 text-gold" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[82%] space-y-2 leading-relaxed ${
                    msg.sender === 'user'
                      ? 'gold-btn text-white rounded-tr-none'
                      : 'bg-theme-secondary border border-theme text-theme-primary rounded-tl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Bot Interactive Actions */}
                  {msg.action && (
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        const matched = siteData.pricing.packages.find(p => p.id === msg.action.pkgId) || siteData.pricing.packages[1];
                        onOpenOrder(matched);
                      }}
                      className="mt-2 w-full py-2 px-3 rounded-xl gold-btn text-[11px] font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>{msg.action.label}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {msg.link && (
                    <a
                      href={msg.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-gold font-bold underline text-[11px]"
                    >
                      <span>লাইভ ডেমো দেখুন</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  {msg.isWhatsApp && (
                    <a
                      href={`https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent('হ্যালো সফটকোড আমি একটি ওয়েবসাইট তৈরি করতে আগ্রহী')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-emerald-600 text-white font-bold text-[11px] hover:bg-emerald-700"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>হোয়াটসঅ্যাপে সরাসরি চ্যাট করুন</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div className="p-3 bg-theme-secondary border-t border-theme">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="আপনার প্রশ্ন লিখুন (যেমন: প্যাকেজের দাম কত?)..."
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-theme bg-theme-card text-theme-primary text-xs focus:outline-none focus:border-[var(--accent-gold)]"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl gold-btn cursor-pointer shrink-0"
                aria-label="Send Message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      )}
    </>
  );
};
