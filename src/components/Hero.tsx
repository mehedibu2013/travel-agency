import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Sparkles, Shield, Clock, Award } from 'lucide-react';
import { CATEGORIES, REGIONS } from '../data/mockData';

interface HeroProps {
  onSearch: (destination: string, category: string, region: string) => void;
  onExploreAI: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onExploreAI }) => {
  const [destinationQuery, setDestinationQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(destinationQuery, selectedCategory, selectedRegion);
  };

  return (
    <div id="hero" className="relative min-h-[85vh] bg-slate-950 flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=85"
          alt="Breathtaking Worldwide Travel"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-4 py-2 rounded-full text-amber-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-lg">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Curated Worldwide Journeys & 24/7 Dedicated Concierge</span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6">
          Explore the World, <br />
          <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
            Crafted Exclusively For You.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-normal">
          From secluded alpine chalets to private island paradises. Tailor-made itineraries backed by round-the-clock expert support anywhere on Earth.
        </p>

        {/* Search / Filter Box */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 p-4 sm:p-6 rounded-2xl shadow-2xl text-left">
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Destination Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Destination or Keyword
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-3.5 w-5 h-5 text-amber-500" />
                <input
                  type="text"
                  placeholder="e.g. Kyoto, Bali, Swiss Alps..."
                  value={destinationQuery}
                  onChange={(e) => setDestinationQuery(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-700 rounded-xl pl-11 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm font-medium"
                />
              </div>
            </div>

            {/* Travel Style */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Travel Style
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 text-sm font-medium"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'All' ? 'All Styles' : cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Region / Action */}
            <div className="space-y-1.5 flex flex-col justify-end">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold py-3 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
              >
                <Search className="w-4 h-4" />
                <span>Search Packages</span>
              </button>
            </div>
          </form>

          {/* Quick AI Planner CTA inside Hero */}
          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-semibold">Want a completely bespoke itinerary?</span>
              <span>Let our AI Travel Architect build your dream trip in seconds.</span>
            </div>
            <button
              onClick={onExploreAI}
              className="text-amber-400 hover:text-amber-300 font-semibold underline flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Try AI Itinerary Builder</span>
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-slate-300">
          <div className="flex items-center justify-center gap-3 bg-slate-900/40 border border-slate-800/80 p-4 rounded-xl">
            <Clock className="w-6 h-6 text-amber-500 shrink-0" />
            <div className="text-left">
              <div className="font-bold text-white text-sm">24/7 Support</div>
              <div className="text-xs text-slate-400">On-trip concierge</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 bg-slate-900/40 border border-slate-800/80 p-4 rounded-xl">
            <Sparkles className="w-6 h-6 text-amber-500 shrink-0" />
            <div className="text-left">
              <div className="font-bold text-white text-sm">100% Tailored</div>
              <div className="text-xs text-slate-400">Custom crafted routes</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 bg-slate-900/40 border border-slate-800/80 p-4 rounded-xl">
            <Shield className="w-6 h-6 text-amber-500 shrink-0" />
            <div className="text-left">
              <div className="font-bold text-white text-sm">Fully Protected</div>
              <div className="text-xs text-slate-400">ABTA & ATOL bonded</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 bg-slate-900/40 border border-slate-800/80 p-4 rounded-xl">
            <Award className="w-6 h-6 text-amber-500 shrink-0" />
            <div className="text-left">
              <div className="font-bold text-white text-sm">Expert Advisors</div>
              <div className="text-xs text-slate-400">15+ yrs experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
