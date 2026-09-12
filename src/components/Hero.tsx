import React from 'react';
import heroImage from '../assets/images/shinwari_hero_1789191010076.jpg';

interface HeroProps {
  onOrderClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderClick }) => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[90vh] sm:min-h-[92vh] flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Edge-to-Edge HD Hero Background Image without heavy overlays or covering sheets */}
      <img
        id="hero-bg-image"
        src={heroImage}
        alt="Khyber Shinwari Dastarkhwan authentic Pakistani Pashtun cuisine feast with mutton karahi, seekh kababs, grilled meat, and fresh tandoori naan"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
        loading="eager"
      />

      {/* Hero Content - Placed naturally and cleanly directly over the image with NO card, NO sheet, NO box */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-16 sm:py-24">
        {/* Simple text with clean optical drop shadow for perfect legibility directly over photography */}
        <h1
          id="hero-heading"
          className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-wide uppercase drop-shadow-[0_4px_14px_rgba(0,0,0,0.85)]"
        >
          Khyber Shinwari Dastarkhwan
        </h1>

        <p
          id="hero-tagline"
          className="mt-4 sm:mt-5 text-lg sm:text-2xl md:text-3xl text-amber-200 font-medium tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
        >
          Authentic Shinwari Taste
        </p>

        {/* Short clean CTA buttons directly over image */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          <a
            id="hero-view-menu-btn"
            href="#menu"
            className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-stone-900 bg-white hover:bg-amber-50 active:bg-amber-100 shadow-lg hover:shadow-xl transition-all duration-200 text-center uppercase tracking-wider"
          >
            View Menu
          </a>

          <button
            id="hero-order-now-btn"
            type="button"
            onClick={onOrderClick}
            className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-amber-700 hover:bg-amber-800 active:bg-amber-900 shadow-lg hover:shadow-xl transition-all duration-200 text-center uppercase tracking-wider cursor-pointer"
          >
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};
