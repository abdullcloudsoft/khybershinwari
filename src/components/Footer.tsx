import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 text-stone-700 border-t border-stone-200/90 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-stone-200">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center font-serif text-sm font-bold">
                <UtensilsCrossed className="w-4 h-4 text-amber-100" />
              </div>
              <span className="font-display font-bold text-stone-900 text-lg">
                KHYBER SHINWARI
              </span>
            </div>
            <p className="text-xs text-amber-800 font-semibold uppercase tracking-wider mb-2">
              Dastarkhwan
            </p>
            <p className="text-xs text-stone-600 leading-relaxed max-w-sm">
              Authentic Shinwari taste and traditional Pashtun dining hospitality at Cricket Stadium Food Street, Shamsabad, Rawalpindi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-stone-900 text-sm mb-3">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-amber-800 transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-800 transition-colors">Menu & Fresh Cuts</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-800 transition-colors">About Our Tradition</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-800 transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-800 transition-colors">Location & Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-display font-bold text-stone-900 text-sm mb-3">Direct Contact</h4>
            <ul className="space-y-2.5 text-xs text-stone-600">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>Cricket Stadium Food Street, Shamsabad, Rawalpindi, Pakistan</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-700 shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="hover:text-amber-800 font-semibold text-stone-800">
                  {RESTAURANT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-700 shrink-0" />
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="hover:text-amber-800 break-all">
                  {RESTAURANT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">f</span>
                <a
                  href={RESTAURANT_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-800 inline-flex items-center gap-1 text-blue-700 font-semibold"
                >
                  <span>Facebook Page</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-2">
          <p>© {new Date().getFullYear()} Khyber Shinwari Dastarkhwan. All rights reserved.</p>
          <p>Cricket Stadium Food Street, Shamsabad, Rawalpindi</p>
        </div>
      </div>
    </footer>
  );
};
