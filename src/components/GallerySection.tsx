import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Karahi', 'Mutton', 'Kababs', 'Naan', 'Dining'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-[#FAF8F5] border-t border-stone-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full">
            Visual Tour
          </span>
          <h2 id="gallery-heading" className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mt-3">
            Our Food & Dastarkhwan
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600">
            A glimpse into authentic Shinwari preparation, char-grilled skewers, and Pashtun dining.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-700 text-white shadow-xs'
                  : 'bg-white text-stone-700 border border-stone-200/80 hover:bg-amber-50 hover:text-amber-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => setActiveItem(item)}
              className="group relative bg-white rounded-xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-xs text-stone-800 p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-xs">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
                <div className="absolute bottom-2.5 left-2.5 bg-stone-900/70 text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md backdrop-blur-xs">
                  {item.category}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <h3 className="font-display text-base font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-stone-500 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeItem && (
        <div
          id="gallery-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="gallery-modal-close-btn"
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute top-3 right-3 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors cursor-pointer"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-16/10 sm:aspect-16/9 bg-stone-100 overflow-hidden">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 sm:p-6 bg-white">
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="font-display text-xl font-bold text-stone-900">
                  {activeItem.title}
                </h3>
                <span className="text-xs font-semibold text-amber-800 bg-amber-100/70 px-2.5 py-0.5 rounded-md">
                  {activeItem.category}
                </span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
