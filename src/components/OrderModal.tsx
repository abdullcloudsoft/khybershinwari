import React, { useState } from 'react';
import { X, Phone, MessageSquare, Utensils, Users, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const [orderType, setOrderType] = useState<'Dine-in Dastarkhwan' | 'Takeaway'>('Dine-in Dastarkhwan');
  const [meatChoice, setMeatChoice] = useState('Fresh Mutton Karahi');
  const [quantity, setQuantity] = useState('1 KG');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Assalam-o-Alaikum Khyber Shinwari Dastarkhwan,\n\nOrder / Reservation Details:\n- Type: ${orderType}\n- Meat Choice: ${meatChoice}\n- Quantity: ${quantity}${name ? `\n- Customer Name: ${name}` : ''}${phone ? `\n- Contact Number: ${phone}` : ''}${notes ? `\n- Instructions: ${notes}` : ''}\n\nPlease confirm availability and let me know the preparation time.`
    );
    window.open(`https://wa.me/923005592299?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div
      id="order-modal-backdrop"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="order-modal-content"
        className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-stone-200 overflow-hidden relative my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-amber-800 text-white p-5 sm:p-6 flex items-start justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-200 bg-amber-700/80 px-2.5 py-0.5 rounded-full">
              Khyber Shinwari Dastarkhwan
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold mt-1 text-white">
              Order or Reserve
            </h3>
            <p className="text-xs text-amber-100 mt-1">
              Cricket Stadium Food Street, Shamsabad • 0300 5592299
            </p>
          </div>
          <button
            id="order-modal-close-btn"
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-amber-200 hover:text-white hover:bg-amber-700 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Call Header Banner */}
        <div className="bg-stone-50 border-b border-stone-200/80 px-5 py-3 flex items-center justify-between">
          <span className="text-xs text-stone-600">Want to order immediately?</span>
          <a
            id="order-modal-quick-call"
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-900"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call 0300 5592299</span>
          </a>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSendWhatsApp} className="p-5 sm:p-6 space-y-4 text-xs">
          {/* Service Type */}
          <div>
            <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1.5">
              Service Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setOrderType('Dine-in Dastarkhwan')}
                className={`py-2 px-3 rounded-lg border font-semibold text-center transition-colors cursor-pointer ${
                  orderType === 'Dine-in Dastarkhwan'
                    ? 'bg-amber-700 text-white border-amber-700'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                Dine-in Dastarkhwan
              </button>
              <button
                type="button"
                onClick={() => setOrderType('Takeaway')}
                className={`py-2 px-3 rounded-lg border font-semibold text-center transition-colors cursor-pointer ${
                  orderType === 'Takeaway'
                    ? 'bg-amber-700 text-white border-amber-700'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                Takeaway
              </button>
            </div>
          </div>

          {/* Dish / Meat Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                Meat Preparation
              </label>
              <select
                value={meatChoice}
                onChange={(e) => setMeatChoice(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-lg py-2 px-3 text-stone-800 font-medium focus:outline-none focus:ring-1 focus:ring-amber-700"
              >
                <option value="Fresh Mutton Karahi">Fresh Mutton Karahi</option>
                <option value="Fresh Chicken Karahi">Fresh Chicken Karahi</option>
                <option value="Shinwari Seekh Kababs & BBQ">Seekh Kababs & Charcoal BBQ</option>
                <option value="Mutton Chops & Tikka">Mutton Chops & Tikka</option>
                <option value="Mixed Family Feast">Mixed Family Feast</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                Portion / Weight
              </label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-lg py-2 px-3 text-stone-800 font-medium focus:outline-none focus:ring-1 focus:ring-amber-700"
              >
                <option value="Half KG (0.5 KG)">Half KG (0.5 KG)</option>
                <option value="1 KG">1 KG</option>
                <option value="1.5 KG">1.5 KG</option>
                <option value="2 KG">2 KG</option>
                <option value="Custom Order">Custom Order / Inquire</option>
              </select>
            </div>
          </div>

          {/* Optional Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                Your Name (Optional)
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ahmad Khan"
                className="w-full bg-stone-50 border border-stone-200 rounded-lg py-2 px-3 text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-700"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                Your Phone (Optional)
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 03xx xxxxxxx"
                className="w-full bg-stone-50 border border-stone-200 rounded-lg py-2 px-3 text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-700"
              />
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1.5">
              Special Instructions / Dietary Notes (Optional)
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Less green chili, extra ginger, arrival at 8:30 PM..."
              className="w-full bg-stone-50 border border-stone-200 rounded-lg py-2 px-3 text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-700"
            />
          </div>

          <p className="text-[11px] text-stone-500 italic">
            * All meats are cut and cooked fresh in traditional cast-iron karahis with natural animal fat and salt.
          </p>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2">
            <button
              id="order-modal-submit-whatsapp-btn"
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-xs transition-colors cursor-pointer text-xs sm:text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Order on WhatsApp</span>
            </button>
            <a
              id="order-modal-call-btn"
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold rounded-xl border border-stone-200 transition-colors text-xs sm:text-sm"
            >
              <Phone className="w-4 h-4 text-amber-700" />
              <span>Call 0300 5592299</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
