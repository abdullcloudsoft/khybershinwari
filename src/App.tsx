/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { Chatbot } from './components/Chatbot';
import { OrderModal } from './components/OrderModal';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 flex flex-col selection:bg-amber-100 selection:text-amber-900">
      {/* Navigation */}
      <Navbar onOrderClick={() => setIsOrderModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <Hero onOrderClick={() => setIsOrderModalOpen(true)} />

        {/* Menu & Fresh Cuts Section */}
        <MenuSection onOpenChat={() => setIsChatbotOpen(true)} />

        {/* About Khyber Shinwari Dastarkhwan */}
        <AboutSection />

        {/* Photo Gallery */}
        <GallerySection />

        {/* Location & Contact Information */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp / Phone Call Actions */}
      <FloatingActions />

      {/* Discreet Restaurant Assistant Chatbot */}
      <Chatbot
        isOpen={isChatbotOpen}
        onOpen={() => setIsChatbotOpen(true)}
        onClose={() => setIsChatbotOpen(false)}
      />

      {/* Order / Reservation Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </div>
  );
}
