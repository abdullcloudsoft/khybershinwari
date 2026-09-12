import React, { useState } from 'react';
import { Phone, MessageCircle, ChevronUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const FloatingActions: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div id="floating-contact-container" className="fixed bottom-6 left-4 sm:left-6 z-40 flex flex-col items-start gap-2">
      {/* Expanded options popup */}
      {expanded && (
        <div className="bg-white rounded-2xl shadow-xl border border-stone-200/90 p-3 mb-1 flex flex-col gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200 min-w-[210px]">
          <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider px-1">
            Quick Kitchen Contact
          </div>
          <a
            id="floating-action-whatsapp-link"
            href={RESTAURANT_INFO.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-colors"
          >
            <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div>
              <div>Chat on WhatsApp</div>
              <div className="text-[10px] text-emerald-600 font-normal">0300 5592299</div>
            </div>
          </a>

          <a
            id="floating-action-call-link"
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="flex items-center gap-2.5 p-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold transition-colors"
          >
            <div className="w-7 h-7 rounded-lg bg-amber-700 text-white flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div>Call Directly</div>
              <div className="text-[10px] text-amber-700 font-normal">0300 5592299</div>
            </div>
          </a>
        </div>
      )}

      {/* Main Floating WhatsApp / Call Button */}
      <button
        id="floating-whatsapp-trigger-btn"
        type="button"
        onClick={() => setExpanded(!expanded)}
        aria-label="Contact restaurant on WhatsApp or phone"
        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold tracking-wide">
          WhatsApp / Call
        </span>
        <span className="hidden sm:inline text-xs font-normal text-emerald-100">
          • 0300 5592299
        </span>
        <ChevronUp className={`w-3.5 h-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
};
