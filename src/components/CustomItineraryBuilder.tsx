import React, { useState } from 'react';
import { Sparkles, Calendar, MapPin, DollarSign, Users, CheckCircle2, Loader2, ArrowRight, PhoneCall, Download } from 'lucide-react';
import { GeneratedItinerary } from '../types';

interface CustomItineraryBuilderProps {
  onBookCustom: (summary: string) => void;
}

export const CustomItineraryBuilder: React.FC<CustomItineraryBuilderProps> = ({ onBookCustom }) => {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('7 Days');
  const [style, setStyle] = useState('Luxury & Relaxation');
  const [travelers, setTravelers] = useState('2 Travelers');
  const [budget, setBudget] = useState('$5,000 - $10,000');
  const [interests, setInterests] = useState<string[]>(['Gastronomy', 'Local Culture']);
  const [specialRequests, setSpecialRequests] = useState('');

  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState<GeneratedItinerary | null>(null);
  const [error, setError] = useState('');

  const handleInterestToggle = (interest: string) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter(i => i !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination.trim()) {
      setError('Please enter a destination.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/generate-itinerary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          destination,
          duration,
          style,
          travelers,
          budget,
          interests,
          specialRequests
        }),
      });

      const data = await res.json();
      if (data.success && data.itinerary) {
        setItinerary(data.itinerary);
      } else {
        setError(data.error || 'Failed to generate itinerary. Please try again.');
      }
    } catch (err: any) {
      setError(err.message || 'Network error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-planner" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Itinerary Architect</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Build Your Custom Itinerary
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Tell us your dream destination, travel style, and preferences. Our advanced AI travel designer will craft a bespoke day-by-day plan instantly.
          </p>
        </div>

        {!itinerary ? (
          <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 p-6 sm:p-10 rounded-3xl shadow-2xl">
            <form onSubmit={handleGenerate} className="space-y-6">
              {error && (
                <div className="bg-red-950/60 border border-red-800 text-red-200 p-4 rounded-xl text-sm">
                  {error}
                </div>
              )}

              {/* Destination */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <span>Where would you like to travel?</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Amalfi Coast, Iceland, Maui, Amalfi, Patagonia..."
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm font-medium"
                  required
                />
              </div>

              {/* Grid Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Duration */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-amber-500" />
                    <span>Duration</span>
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-amber-500 text-sm font-medium"
                  >
                    <option value="5 Days">5 Days</option>
                    <option value="7 Days">7 Days</option>
                    <option value="10 Days">10 Days</option>
                    <option value="14 Days">14 Days</option>
                    <option value="21 Days">21 Days (Grand Tour)</option>
                  </select>
                </div>

                {/* Travel Style */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Travel Style</span>
                  </label>
                  <select
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-amber-500 text-sm font-medium"
                  >
                    <option value="Luxury & Relaxation">Luxury & 5-Star Relaxation</option>
                    <option value="Adventure & Exploration">Active Adventure & Hiking</option>
                    <option value="Cultural & Culinary Immersion">Cultural & Culinary Immersion</option>
                    <option value="Romantic Honeymoon">Romantic Honeymoon</option>
                    <option value="Family Friendly">Family Friendly</option>
                  </select>
                </div>

                {/* Travelers */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-amber-500" />
                    <span>Travelers</span>
                  </label>
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-amber-500 text-sm font-medium"
                  >
                    <option value="Solo Traveler">Solo Traveler</option>
                    <option value="2 Travelers (Couple)">2 Travelers (Couple)</option>
                    <option value="Family (3-4 people)">Family (3-4 people)</option>
                    <option value="Small Group (5+ people)">Small Group (5+ people)</option>
                  </select>
                </div>

                {/* Budget */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-amber-500" />
                    <span>Estimated Budget per Person</span>
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-amber-500 text-sm font-medium"
                  >
                    <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                    <option value="$20,000+ (Ultra Luxury)">$20,000+ (Ultra Luxury)</option>
                  </select>
                </div>
              </div>

              {/* Interests Multi-select */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                  Key Interests & Experiences
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {['Gastronomy & Wine', 'Private Yacht/Boat', 'Ancient History', 'Wellness & Spa', 'Wildlife Safaris', 'Helicopter Tours', 'Art & Architecture'].map((item) => {
                    const isSelected = interests.includes(item);
                    return (
                      <button
                        type="button"
                        key={item}
                        onClick={() => handleInterestToggle(item)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                          isSelected
                            ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                            : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {item} {isSelected && '✓'}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                  Special Requests or Dietary Needs (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Vegetarian dining preference, anniversary celebration, connecting rooms..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm font-medium resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold py-4 rounded-xl shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-3 text-base disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Crafting Your Custom Itinerary with AI...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>Generate AI Itinerary Now</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* Render Generated Itinerary */
          <div className="max-w-4xl mx-auto bg-slate-900 border border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl animate-fade-in space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-slate-800">
              <div>
                <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-1">
                  AI Generated Bespoke Itinerary
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {itinerary.tripTitle}
                </h3>
              </div>
              <button
                onClick={() => setItinerary(null)}
                className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2 rounded-xl transition-colors"
              >
                Create Another Itinerary
              </button>
            </div>

            {/* Overview & Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-950 p-5 rounded-2xl border border-slate-800">
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider block">Destination</span>
                <span className="font-bold text-white text-base">{itinerary.destination}</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider block">Duration</span>
                <span className="font-bold text-amber-400 text-base">{itinerary.duration}</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider block">Est. Cost / Person</span>
                <span className="font-bold text-emerald-400 text-base">{itinerary.estimatedCostPerPerson}</span>
              </div>
            </div>

            <div>
              <p className="text-slate-300 text-base leading-relaxed">{itinerary.overview}</p>
            </div>

            {/* Highlights */}
            <div>
              <h4 className="font-serif text-lg font-bold text-amber-400 mb-3">Key Highlights</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {itinerary.highlights?.map((h, i) => (
                  <div key={i} className="flex items-center gap-2.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day by Day */}
            <div>
              <h4 className="font-serif text-xl font-bold text-white mb-6">Day-by-Day Journey Plan</h4>
              <div className="space-y-6">
                {itinerary.days?.map((dayObj) => (
                  <div key={dayObj.day} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <span className="bg-amber-500 text-slate-950 font-bold px-3 py-1 rounded-full text-xs">
                        Day {dayObj.day}
                      </span>
                      <span className="text-xs text-amber-300 font-medium">
                        🏨 {dayObj.hotelSuggestion}
                      </span>
                    </div>
                    <h5 className="font-serif text-lg font-bold text-white">{dayObj.title}</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs sm:text-sm text-slate-300">
                      <div className="bg-slate-900 p-3 rounded-xl border border-slate-800/80">
                        <strong className="text-amber-400 block mb-1">Morning</strong>
                        <span>{dayObj.morning}</span>
                      </div>
                      <div className="bg-slate-900 p-3 rounded-xl border border-slate-800/80">
                        <strong className="text-amber-400 block mb-1">Afternoon</strong>
                        <span>{dayObj.afternoon}</span>
                      </div>
                      <div className="bg-slate-900 p-3 rounded-xl border border-slate-800/80">
                        <strong className="text-amber-400 block mb-1">Evening</strong>
                        <span>{dayObj.evening}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action to book */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <PhoneCall className="w-4 h-4 text-amber-500" />
                <span>Includes 24/7 dedicated concierge and private transfers</span>
              </div>
              <button
                onClick={() => onBookCustom(itinerary.tripTitle)}
                className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 text-sm"
              >
                <span>Book This Custom Itinerary</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
