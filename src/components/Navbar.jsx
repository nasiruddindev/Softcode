import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { siteData } from '../data/siteData';
import { Sun, Moon, Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';

export const Navbar = ({ onOpenOrder }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'সার্ভিসসমূহ', href: '#services' },
    { name: 'প্রজেক্ট ডেমো', href: '#projects' },
    { name: 'প্যাকেজসমূহ', href: '#pricing' },
    { name: 'হোস্টিং', href: '#hosting' },
    { name: 'কাজের ধাপ', href: '#process' },
    { name: 'রিভিউ', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 backdrop-blur-md shadow-md border-b border-theme'
          : 'py-5 bg-transparent'
      }`}
      style={{
        backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#14213D] to-[#090F1D] border border-[var(--accent-gold)] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <span className="text-[var(--accent-gold)] font-mono font-black text-xl">S</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-theme-primary font-mono">
              SOFT<span className="text-gold">CODE</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-theme-secondary font-semibold">
              Digital Agency
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-theme-secondary hover:text-gold transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-10 h-10 rounded-xl border border-theme bg-theme-card flex items-center justify-center text-theme-secondary hover:text-gold hover:border-[var(--accent-gold)] transition-all cursor-pointer shadow-xs"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-gold animate-spin-slow" />
            ) : (
              <Moon className="w-5 h-5 text-theme-primary" />
            )}
          </button>

          {/* Quick Call */}
          <a
            href={`tel:${siteData.directCallNumber}`}
            className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-theme-secondary hover:text-gold border border-theme hover:border-[var(--accent-gold)] transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-gold" />
            <span>{siteData.displayCallNumber}</span>
          </a>

          {/* Gold CTA Button */}
          <button
            onClick={() => onOpenOrder(siteData.pricing.packages[1])}
            className="gold-btn px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
          >
            <span>৳১২,৯৯৯ অফার</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-9 h-9 rounded-lg border border-theme bg-theme-card flex items-center justify-center text-theme-secondary cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-gold" />
            ) : (
              <Moon className="w-4 h-4 text-theme-primary" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-theme-primary hover:text-gold cursor-pointer"
            aria-label="Open Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-3 pb-6 bg-theme-card border-b border-theme shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg text-sm font-semibold text-theme-primary hover:bg-theme-secondary hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-theme flex flex-col gap-2">
              <a
                href={`tel:${siteData.directCallNumber}`}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold border border-theme text-theme-primary"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>কল করুন: {siteData.displayCallNumber}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrder(siteData.pricing.packages[1]);
                }}
                className="gold-btn w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
              >
                <span>৳১২,৯৯৯ স্পেশাল অফার নিন</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
