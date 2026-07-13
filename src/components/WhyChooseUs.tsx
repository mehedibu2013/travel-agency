import React from 'react';
import { Clock, ShieldCheck, Sparkles, Globe, Award, Headphones } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Headphones className="w-6 h-6 text-amber-400" />,
      title: '24/7 Global On-Trip Concierge',
      description: 'Whether you need a last-minute restaurant reservation in Tokyo or flight rebooking in Zurich, our dedicated concierge team is available 24/7 via phone, WhatsApp, and live chat.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      title: '100% Tailored Itineraries',
      description: 'We do not sell cookie-cutter group tours. Every journey is hand-crafted from scratch by expert destination architects around your unique passions, pace, and style.'
    },
    {
      icon: <Globe className="w-6 h-6 text-amber-400" />,
      title: 'Exclusive Worldwide Network',
      description: 'Enjoy VIP perks, room upgrades, private after-hours museum tours, and insider access at over 1,500 luxury partner properties across all 7 continents.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
      title: 'Complete Financial Protection',
      description: 'Travel with absolute peace of mind. We are fully ABTA bonded and ATOL protected, ensuring your payments and bookings are 100% secure.'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>The Wanderlust Standard</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Why Travelers Choose Us
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We redefine luxury travel by combining uncompromising personalized service with round-the-clock peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, index) => (
            <div
              key={index}
              className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all group flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">{feat.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
