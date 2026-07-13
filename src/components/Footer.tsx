import React from 'react';
import { Compass, PhoneCall, Mail, MapPin, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white block">
                  WANDERLUST
                </span>
                <span className="text-[10px] tracking-[0.25em] text-amber-400 uppercase font-medium block">
                  Global Luxury Voyages
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Crafting extraordinary worldwide travel packages with bespoke personalized itineraries and dedicated 24/7 on-trip concierge support.
            </p>
            <div className="flex items-center gap-3 text-xs text-amber-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ABTA Bonded & ATOL Protected (No. 9482)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-white font-bold text-sm tracking-wide uppercase">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onNavigate('packages')} className="hover:text-amber-400 transition-colors">
                  Worldwide Packages
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ai-planner')} className="hover:text-amber-400 transition-colors">
                  AI Itinerary Builder
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('why-us')} className="hover:text-amber-400 transition-colors">
                  Why Wanderlust
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('testimonials')} className="hover:text-amber-400 transition-colors">
                  Traveler Stories
                </button>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="space-y-4">
            <h4 className="font-serif text-white font-bold text-sm tracking-wide uppercase">Top Regions</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="hover:text-amber-400 cursor-pointer transition-colors" onClick={() => onNavigate('packages')}>Europe & Alps</li>
              <li className="hover:text-amber-400 cursor-pointer transition-colors" onClick={() => onNavigate('packages')}>Asia & Japan</li>
              <li className="hover:text-amber-400 cursor-pointer transition-colors" onClick={() => onNavigate('packages')}>African Safaris</li>
              <li className="hover:text-amber-400 cursor-pointer transition-colors" onClick={() => onNavigate('packages')}>Patagonia & Americas</li>
              <li className="hover:text-amber-400 cursor-pointer transition-colors" onClick={() => onNavigate('packages')}>South Pacific & Bali</li>
            </ul>
          </div>

          {/* Contact & 24/7 Support */}
          <div className="space-y-4">
            <h4 className="font-serif text-white font-bold text-sm tracking-wide uppercase">24/7 Support</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-white">+1 (800) 555-WAND</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>concierge@wanderlustglobal.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>750 Lexington Ave, Suite 2400, New York, NY 10022</span>
              </li>
            </ul>
            <button
              onClick={onOpenConsultation}
              className="mt-2 w-full bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/40 text-xs font-semibold py-2.5 rounded-xl transition-colors"
            >
              Book Consultation
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Wanderlust Global Travel Agency, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Traveler Insurance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
