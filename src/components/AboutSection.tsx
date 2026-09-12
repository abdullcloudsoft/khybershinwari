import React from 'react';
import { Flame, ShieldCheck, MapPin, Award } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-t border-stone-200/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full">
              Heritage & Tradition
            </span>

            <h2 id="about-heading" className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mt-4 leading-tight">
              About Khyber Shinwari Dastarkhwan
            </h2>

            <div className="mt-5 space-y-4 text-sm sm:text-base text-stone-600 leading-relaxed">
              <p>
                Located at Cricket Stadium Food Street, Shamsabad in Rawalpindi,{' '}
                <strong className="text-stone-900 font-semibold">Khyber Shinwari Dastarkhwan</strong>{' '}
                brings the time-honored culinary tradition of the Khyber region directly to your table.
              </p>
              <p>
                True Shinwari cooking centers on pure simplicity: tender, fresh meat cooked in its own natural fat,
                seasoned solely with sea salt, ripe red tomatoes, and fragrant green chilies. We do not mask the meat
                with artificial spices or heavy gravies—allowing the rich natural flavor of premium lamb and mutton to shine.
              </p>
              <p>
                Our spacious Dastarkhwan floor and table seating provides an authentic Pashtun dining atmosphere where
                families and friends gather to share fresh, piping-hot karahi and tandoori naan.
              </p>
            </div>

            {/* Quick Pillars */}
            <div className="mt-8 grid grid-cols-2 gap-4 pt-4 border-t border-stone-100">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-stone-900">Live Charcoal & Wok</h4>
                  <p className="text-[11px] sm:text-xs text-stone-500">Cooked fresh in cast iron karahis</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-stone-900">100% Fresh Daily Cuts</h4>
                  <p className="text-[11px] sm:text-xs text-stone-500">Selected meat prepared to order</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlight Card - Warm, clean, light */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF8F5] rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-xs">
              <div className="inline-flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
                <Award className="w-4 h-4" />
                <span>The Dastarkhwan Ethos</span>
              </div>
              <h3 className="font-display text-xl font-bold text-stone-900 mb-3">
                Hospitality from the Heart
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                In Pashtun culture, the <em>dastarkhwan</em> is more than a dining cloth—it represents boundless generosity,
                respect for guests, and shared warmth over nourishing food.
              </p>

              <div className="space-y-3 text-xs text-stone-700 bg-white p-4 rounded-xl border border-stone-200/80">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Cricket Stadium Food Street, Shamsabad, Rawalpindi</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 ml-1 mr-1" />
                  <span className="font-semibold text-stone-800">{RESTAURANT_INFO.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
