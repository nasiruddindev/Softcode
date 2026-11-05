import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { IndustryNiches } from './components/IndustryNiches';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { HostingPlans } from './components/HostingPlans';
import { Process } from './components/Process';
import { BangladeshFeatures } from './components/BangladeshFeatures';
import { Pricing } from './components/Pricing';
import { RoiCalculator } from './components/RoiCalculator';
import { Testimonials } from './components/Testimonials';
import { Guarantees } from './components/Guarantees';
import { FAQ } from './components/FAQ';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { AiChatbot } from './components/AiChatbot';
import { WhatsAppButton } from './components/WhatsAppButton';
import { OrderModal } from './components/OrderModal';
import { siteData } from './data/siteData';

export function AppContent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState(siteData.pricing.packages[1]);

  const handleOpenOrder = (pkg) => {
    setSelectedPkg(pkg || siteData.pricing.packages[1]);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-theme-primary text-theme-primary selection:bg-[var(--accent-gold)] selection:text-white transition-colors duration-300">
      {/* Navigation Bar with Theme Toggle */}
      <Navbar onOpenOrder={handleOpenOrder} />

      <main className="w-full overflow-x-hidden">
        {/* Hero Section */}
        <Hero onOpenOrder={handleOpenOrder} />

        {/* Stats Counter Bar */}
        <StatsBar />

        {/* Industry Niches Grid */}
        <IndustryNiches />

        {/* Services Section */}
        <Services onOpenOrder={handleOpenOrder} />

        {/* Live Projects & Master D2C Showcase */}
        <Projects />

        {/* Hosting & Domain Plans */}
        <HostingPlans onOpenOrder={handleOpenOrder} />

        {/* 5-Step Process */}
        <Process />

        {/* Bangladesh E-commerce Features */}
        <BangladeshFeatures />

        {/* Pricing Packages */}
        <Pricing onOpenOrder={handleOpenOrder} />

        {/* Interactive Budget / ROI Calculator */}
        <RoiCalculator />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Guarantees */}
        <Guarantees />

        {/* FAQ Accordion */}
        <FAQ />

        {/* Final CTA Banner */}
        <FinalCta onOpenOrder={handleOpenOrder} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive AI Assistant Floating Chatbot (Bottom-Left) */}
      <AiChatbot onOpenOrder={handleOpenOrder} />

      {/* Floating Direct WhatsApp Button (Bottom-Right) */}
      <WhatsAppButton />

      {/* Quick Order Modal */}
      <OrderModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPackage={selectedPkg}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
