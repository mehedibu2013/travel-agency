import React, { useState } from 'react';
import { Compass, PhoneCall, Calendar, Menu, X, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white">
      {/* Top 24/7 Support Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-600 text-xs py-2 px-4 font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>24/7 Global Concierge & Emergency Traveler Support Active</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+18005550199" className="flex items-center gap-1.5 hover:text-amber-200 transition-colors">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>US/Global: +1 (800) 555-WAND</span>
            </a>
            <span className="hidden md:inline text-amber-300/60">|</span>
            <span className="hidden md:flex items-center gap-1 text-amber-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ABTA & ATOL Protected</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-900/30 group-hover:scale-105 transition-transform">
            <Compass className="w-6 h-6 text-white animate-spin-slow" />
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white block">
              WANDERLUST
            </span>
            <span className="text-[10px] tracking-[0.25em] text-amber-400 uppercase font-medium block">
              Global Luxury Voyages
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button 
            onClick={() => handleNavClick('packages')} 
            className="hover:text-amber-400 transition-colors"
          >
            Worldwide Packages
          </button>
          <button 
            onClick={() => handleNavClick('ai-planner')} 
            className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20"
          >
            <Sparkles className="w-4 h-4" />
            <span>AI Itinerary Builder</span>
          </button>
          <button 
            onClick={() => handleNavClick('why-us')} 
            className="hover:text-amber-400 transition-colors"
          >
            Why Wanderlust
          </button>
          <button 
            onClick={() => handleNavClick('testimonials')} 
            className="hover:text-amber-400 transition-colors"
          >
            Traveler Stories
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <button
            onClick={() => handleNavClick('packages')}
            className="block w-full text-left py-2 text-base font-medium text-slate-200 hover:text-amber-400"
          >
            Worldwide Packages
          </button>
          <button
            onClick={() => handleNavClick('ai-planner')}
            className="flex items-center gap-2 w-full text-left py-2 text-base font-medium text-amber-400"
          >
            <Sparkles className="w-4 h-4" />
            <span>AI Itinerary Builder</span>
          </button>
          <button
            onClick={() => handleNavClick('why-us')}
            className="block w-full text-left py-2 text-base font-medium text-slate-200 hover:text-amber-400"
          >
            Why Wanderlust
          </button>
          <button
            onClick={() => handleNavClick('testimonials')}
            className="block w-full text-left py-2 text-base font-medium text-slate-200 hover:text-amber-400"
          >
            Traveler Stories
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold py-3 rounded-xl shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
