import React from 'react';
import { TravelPackage } from '../types';
import { X, Star, MapPin, Clock, ShieldCheck, CheckCircle2, Calendar, PhoneCall, Award } from 'lucide-react';

interface PackageModalProps {
  pkg: TravelPackage | null;
  onClose: () => void;
  onBookNow: (pkgTitle: string) => void;
}

export const PackageModal: React.FC<PackageModalProps> = ({ pkg, onClose, onBookNow }) => {
  if (!pkg) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-slate-950/70 hover:bg-slate-800 text-white p-2.5 rounded-full backdrop-blur-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Hero Image */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="bg-amber-500 text-slate-950 font-bold px-3 py-1 rounded-full text-xs">
                {pkg.category}
              </span>
              <span className="bg-slate-950/80 backdrop-blur-md text-amber-300 border border-slate-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {pkg.destination}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight mb-2">
              {pkg.title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-medium">{pkg.subtitle}</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Quick Overview Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider block">Duration</span>
              <span className="font-bold text-white text-base">{pkg.durationDays} Days</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider block">Best Time</span>
              <span className="font-bold text-amber-400 text-sm">{pkg.bestTime}</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider block">Support</span>
              <span className="font-bold text-emerald-400 text-sm flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" /> 24/7 Concierge
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider block">Rating</span>
              <span className="font-bold text-white text-base flex items-center gap-1">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> {pkg.rating} ({pkg.reviewsCount} reviews)
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-3">Trip Overview</h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {pkg.description}
            </p>
          </div>

          {/* Highlights & Inclusions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-950/60 p-6 rounded-2xl border border-slate-800">
              <h4 className="font-serif text-lg font-bold text-amber-400 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Curated Highlights</span>
              </h4>
              <ul className="space-y-3">
                {pkg.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950/60 p-6 rounded-2xl border border-slate-800">
              <h4 className="font-serif text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                <span>What's Included</span>
              </h4>
              <ul className="space-y-3">
                {pkg.inclusions.map((inclusion, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{inclusion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 24/7 Concierge Note */}
          <div className="bg-gradient-to-r from-amber-950/40 via-amber-900/20 to-slate-950 p-6 rounded-2xl border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0 border border-amber-500/40">
                <PhoneCall className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h5 className="font-bold text-white text-base">24/7 On-Trip Concierge Assistance</h5>
                <p className="text-xs text-slate-300">Your dedicated travel architect and support team are available 24/7 throughout your entire journey.</p>
              </div>
            </div>
            <div className="text-right shrink-0">
              <span className="text-xs text-slate-400 block">From</span>
              <span className="font-serif text-3xl font-bold text-white">${pkg.priceFrom.toLocaleString()}</span>
              <span className="text-xs text-slate-400"> / person</span>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-end gap-4">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-300 text-sm font-semibold transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookNow(pkg.title);
              }}
              className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-8 py-3 rounded-xl text-sm shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Inquire & Customize This Package</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
