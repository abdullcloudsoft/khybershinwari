import React, { useState } from 'react';
import { Phone, MessageSquare, Utensils, Scale, Clock, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface MenuSectionProps {
  onOpenChat: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenChat }) => {
  const [diningType, setDiningType] = useState<'Dine-in Dastarkhwan' | 'Takeaway'>('Dine-in Dastarkhwan');
  const [meatPref, setMeatPref] = useState('Fresh Mutton Shinwari');
  const [portion, setPortion] = useState('1 KG');
  const [guestCount, setGuestCount] = useState('4 Persons');

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      `Assalam-o-Alaikum Khyber Shinwari Dastarkhwan,\n\nI would like to inquire about placing an order:\n- Service: ${diningType}\n- Preference: ${meatPref}\n- Desired Weight/Portion: ${portion}\n- Gathering Size: ${guestCount}\n\nPlease confirm availability and total bill for today.`
    );
    window.open(`https://wa.me/923005592299?text=${message}`, '_blank');
  };

  return (
    <section id="menu" className="py-16 sm:py-20 bg-[#FAF8F5] border-t border-stone-200/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full">
            Fresh To Order
          </span>
          <h2 id="menu-heading" className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mt-3">
            Menu & Fresh Cuts
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600 leading-relaxed">
            Prepared strictly to order by live weight in authentic Pashtun Shinwari tradition.
          </p>
        </div>

        {/* Authentic Dining Tradition Cards - Compact & Light */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-white rounded-xl p-5 border border-stone-200/90 shadow-xs flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center mb-3">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-stone-900 mb-1">Prepared by Weight</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Order fresh mutton or chicken by exact weight (Pao, Half, or KG), cut right in front of you.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-stone-200/90 shadow-xs flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-stone-900 mb-1">Pure Shinwari Recipe</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Cooked solely in its own natural lamb fat, sea salt, ripe tomatoes, ginger, and green chilies.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-stone-200/90 shadow-xs flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-stone-900 mb-1">Freshly Simmered</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Never pre-cooked or reheated. Each iron wok is simmered fresh upon your order confirmation.
            </p>
          </div>
        </div>

        {/* Compact Interactive Order & Inquiry Card */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-6">
            <div>
              <h3 className="font-display text-xl font-bold text-stone-900">Direct Kitchen Inquiry & Order</h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                Contact our kitchen directly at Cricket Stadium Food Street, Shamsabad.
              </p>
            </div>
            <Utensils className="w-6 h-6 text-amber-700 hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                Dining Preference
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setDiningType('Dine-in Dastarkhwan')}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                    diningType === 'Dine-in Dastarkhwan'
                      ? 'bg-amber-700 text-white border-amber-700'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  Dine-in
                </button>
                <button
                  type="button"
                  onClick={() => setDiningType('Takeaway')}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                    diningType === 'Takeaway'
                      ? 'bg-amber-700 text-white border-amber-700'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  Takeaway
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                Fresh Cut Preference
              </label>
              <select
                value={meatPref}
                onChange={(e) => setMeatPref(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-lg py-2 px-3 text-xs text-stone-800 font-medium focus:outline-none focus:ring-1 focus:ring-amber-700"
              >
                <option value="Fresh Mutton Shinwari Karahi">Fresh Mutton Shinwari Karahi</option>
                <option value="Fresh Chicken Shinwari Karahi">Fresh Chicken Shinwari Karahi</option>
                <option value="Shinwari Seekh Kababs & BBQ">Shinwari Seekh Kababs & Charcoal BBQ</option>
                <option value="Mutton Chops & Tikka Cuts">Mutton Chops & Tikka Cuts</option>
                <option value="Special Family Feast Assortment">Special Family Feast Assortment</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                Portion Weight
              </label>
              <select
                value={portion}
                onChange={(e) => setPortion(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-lg py-2 px-3 text-xs text-stone-800 font-medium focus:outline-none focus:ring-1 focus:ring-amber-700"
              >
                <option value="Half KG (0.5 KG)">Half KG (0.5 KG)</option>
                <option value="1 KG">1 KG</option>
                <option value="1.5 KG">1.5 KG</option>
                <option value="2 KG">2 KG</option>
                <option value="Custom Order / Large Gathering">Custom / Large Gathering</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                Gathering Size
              </label>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-lg py-2 px-3 text-xs text-stone-800 font-medium focus:outline-none focus:ring-1 focus:ring-amber-700"
              >
                <option value="1-2 Persons">1 - 2 Persons</option>
                <option value="3-4 Persons">3 - 4 Persons</option>
                <option value="5-8 Persons">5 - 8 Persons</option>
                <option value="10+ Family Gathering">10+ Family Gathering</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              id="menu-whatsapp-inquire-btn"
              type="button"
              onClick={handleWhatsAppInquiry}
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire on WhatsApp (0300 5592299)</span>
            </button>

            <a
              id="menu-call-kitchen-btn"
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs sm:text-sm rounded-xl border border-stone-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-700" />
              <span>Call Kitchen Directly</span>
            </a>
          </div>

          {/* Transparent Notice */}
          <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between flex-wrap gap-2 text-[11px] text-stone-500">
            <span>Note: Exact daily market meat rates and cuts are confirmed live with the chef.</span>
            <button
              type="button"
              onClick={onOpenChat}
              className="text-amber-800 font-semibold hover:underline cursor-pointer"
            >
              Questions? Ask Assistant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
