import React, { useState } from 'react';
import { TravelPackage } from '../types';
import { CATEGORIES, REGIONS, TRAVEL_PACKAGES } from '../data/mockData';
import { Star, MapPin, Clock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface PackagesSectionProps {
  onSelectPackage: (pkg: TravelPackage) => void;
  searchFilter: { destination: string; category: string; region: string };
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage, searchFilter }) => {
  const [activeCategory, setActiveCategory] = useState(searchFilter.category || 'All');
  const [activeRegion, setActiveRegion] = useState(searchFilter.region || 'All');

  // Filter packages based on active category, region, and search destination query
  const filteredPackages = TRAVEL_PACKAGES.filter((pkg) => {
    const matchesCategory = activeCategory === 'All' || pkg.category === activeCategory;
    const matchesRegion = activeRegion === 'All' || pkg.region === activeRegion;
    const matchesDestination = 
      !searchFilter.destination || 
      pkg.destination.toLowerCase().includes(searchFilter.destination.toLowerCase()) ||
      pkg.title.toLowerCase().includes(searchFilter.destination.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchFilter.destination.toLowerCase());

    return matchesCategory && matchesRegion && matchesDestination;
  });

  return (
    <section id="packages" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Handcrafted Collections</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Worldwide Travel Packages
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Each journey is meticulously designed by expert travel architects and includes 24/7 dedicated on-trip concierge support.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0">
            <span className="text-xs text-slate-400 uppercase font-semibold shrink-0">Region:</span>
            {REGIONS.map((reg) => (
              <button
                key={reg}
                onClick={() => setActiveRegion(reg)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  activeRegion === reg
                    ? 'bg-slate-800 text-amber-400 border border-amber-500/40 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        {filteredPackages.length === 0 ? (
          <div className="text-center py-20 bg-slate-950/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-lg mb-4">No travel packages match your specific filters.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setActiveRegion('All');
              }}
              className="bg-amber-500 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-sm"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800/80 hover:border-amber-500/50 transition-all duration-300 group flex flex-col shadow-xl"
              >
                {/* Image & Badges */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-amber-400 border border-slate-700">
                    {pkg.category}
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-1 border border-slate-700">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{pkg.rating}</span>
                    <span className="text-slate-400 text-[10px]">({pkg.reviewsCount})</span>
                  </div>

                  {/* Destination Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-1.5 text-xs text-amber-300 font-medium mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{pkg.destination}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <p className="text-xs text-amber-400/90 font-medium mb-2">{pkg.subtitle}</p>
                    <p className="text-slate-300 text-sm line-clamp-2 leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-amber-500" />
                        <span>{pkg.durationDays} Days / {pkg.durationDays - 1} Nights</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>24/7 Concierge</span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Starting From</span>
                      <span className="font-serif text-2xl font-bold text-white">${pkg.priceFrom.toLocaleString()}</span>
                      <span className="text-xs text-slate-400"> / person</span>
                    </div>

                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-1.5 group-hover:gap-2 shadow-lg shadow-amber-500/20"
                    >
                      <span>View Itinerary</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
