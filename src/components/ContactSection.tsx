import React from 'react';
import { MapPin, Phone, Mail, ExternalLink, Clock, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-white border-t border-stone-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full">
            Visit & Connect
          </span>
          <h2 id="contact-heading" className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mt-3">
            Location & Contact
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600">
            Join us for an authentic Pashtun Dastarkhwan feast at Rawalpindi's renowned food hub.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-[#FAF8F5] rounded-2xl border border-stone-200/90 p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-stone-900 mb-1">
              {RESTAURANT_INFO.name}
            </h3>
            <p className="text-xs text-amber-800 font-semibold uppercase tracking-wider mb-6">
              {RESTAURANT_INFO.tagline}
            </p>

            <div className="space-y-5 text-sm text-stone-700">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-100/80 text-amber-900 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wide">Address</h4>
                  <p className="mt-0.5 text-stone-600 leading-snug">
                    Cricket Stadium Food Street,<br />
                    Shamsabad, Rawalpindi, Pakistan
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-100/80 text-amber-900 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wide">Phone</h4>
                  <a
                    id="contact-phone-link"
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="mt-0.5 inline-block font-semibold text-stone-900 hover:text-amber-800 transition-colors"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-100/80 text-amber-900 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wide">Email</h4>
                  <a
                    id="contact-email-link"
                    href={`mailto:${RESTAURANT_INFO.email}`}
                    className="mt-0.5 inline-block text-stone-600 hover:text-amber-800 transition-colors break-all"
                  >
                    {RESTAURANT_INFO.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-100/80 text-amber-900 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wide">Operating Hours</h4>
                  <p className="mt-0.5 text-stone-600">
                    {RESTAURANT_INFO.hours}
                  </p>
                </div>
              </div>

              {/* Social Media - Facebook */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-stone-200/60">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <span className="font-bold text-sm">f</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wide">Social Media</h4>
                  <a
                    id="contact-facebook-link"
                    href={RESTAURANT_INFO.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    <span>Follow us on Facebook</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Button */}
            <div className="mt-8 pt-4 border-t border-stone-200/80">
              <a
                id="contact-google-maps-btn"
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs sm:text-sm font-bold transition-colors shadow-xs"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 bg-stone-100 rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs h-[380px] sm:h-[440px] relative">
            <iframe
              title="Khyber Shinwari Dastarkhwan Location"
              src="https://maps.google.com/maps?q=Cricket+Stadium+Food+Street,+Shamsabad,+Rawalpindi,+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
