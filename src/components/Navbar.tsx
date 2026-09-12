import React, { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, X, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOrderClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOrderClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-stone-200/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            id="nav-brand-link"
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-amber-700 text-white flex items-center justify-center font-serif text-lg font-bold shadow-sm transition-transform group-hover:scale-105">
              <UtensilsCrossed className="w-5 h-5 text-amber-100" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-stone-900 text-base sm:text-lg tracking-wide leading-tight group-hover:text-amber-800 transition-colors">
                KHYBER SHINWARI
              </span>
              <span className="text-[11px] font-semibold text-amber-800 tracking-widest uppercase">
                Dastarkhwan
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`nav-link-${link.label.toLowerCase()}`}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-stone-700 hover:text-amber-800 hover:bg-amber-50/60 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Call / Order Button */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              id="nav-phone-call-btn"
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200/80 rounded-lg transition-colors border border-stone-200"
              title="Call restaurant directly"
            >
              <Phone className="w-3.5 h-3.5 text-amber-700" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>

            <button
              id="nav-order-now-btn"
              type="button"
              onClick={onOrderClick}
              className="inline-flex items-center justify-center px-4 py-2 text-xs uppercase tracking-wider font-bold text-white bg-amber-700 hover:bg-amber-800 active:bg-amber-900 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Order Now
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              id="nav-mobile-order-btn"
              type="button"
              onClick={onOrderClick}
              className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-amber-700 rounded-md shadow-sm"
            >
              Order
            </button>
            <button
              id="nav-mobile-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-amber-800 hover:bg-stone-100 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div id="mobile-nav-menu" className="md:hidden pt-3 pb-4 border-t border-stone-200 mt-3 animate-in fade-in duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  id={`mobile-nav-link-${link.label.toLowerCase()}`}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-base font-medium text-stone-800 hover:bg-amber-50 hover:text-amber-800 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 px-2 flex flex-col gap-2">
                <a
                  id="mobile-nav-phone-link"
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-stone-800 bg-stone-100 rounded-lg border border-stone-200"
                >
                  <Phone className="w-4 h-4 text-amber-700" />
                  <span>Call {RESTAURANT_INFO.phone}</span>
                </a>
                <button
                  id="mobile-nav-order-action-btn"
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOrderClick();
                  }}
                  className="w-full py-2.5 text-sm font-bold uppercase tracking-wider text-white bg-amber-700 hover:bg-amber-800 rounded-lg shadow-sm"
                >
                  Order / Reserve Dastarkhwan
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
