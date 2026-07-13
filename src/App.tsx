import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PackagesSection } from './components/PackagesSection';
import { PackageModal } from './components/PackageModal';
import { CustomItineraryBuilder } from './components/CustomItineraryBuilder';
import { SupportChatWidget } from './components/SupportChatWidget';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';
import { TravelPackage } from './types';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationDestination, setConsultationDestination] = useState('');
  
  const [searchFilter, setSearchFilter] = useState({
    destination: '',
    category: 'All',
    region: 'All'
  });

  const handleSearch = (destination: string, category: string, region: string) => {
    setSearchFilter({ destination, category, region });
    const packagesEl = document.getElementById('packages');
    if (packagesEl) {
      packagesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookPackage = (pkgTitle: string) => {
    setConsultationDestination(pkgTitle);
    setConsultationOpen(true);
  };

  const handleBookCustom = (summary: string) => {
    setConsultationDestination(summary);
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Navigation */}
      <Navbar
        onOpenConsultation={() => {
          setConsultationDestination('');
          setConsultationOpen(true);
        }}
        onNavigate={handleNavigate}
      />

      {/* Hero Section */}
      <Hero
        onSearch={handleSearch}
        onExploreAI={() => handleNavigate('ai-planner')}
      />

      {/* Worldwide Travel Packages */}
      <PackagesSection
        onSelectPackage={(pkg) => setSelectedPackage(pkg)}
        searchFilter={searchFilter}
      />

      {/* AI Itinerary Builder */}
      <CustomItineraryBuilder
        onBookCustom={handleBookCustom}
      />

      {/* Why Choose Wanderlust */}
      <WhyChooseUs />

      {/* Traveler Testimonials */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => {
          setConsultationDestination('');
          setConsultationOpen(true);
        }}
      />

      {/* Package Detail Modal */}
      <PackageModal
        pkg={selectedPackage}
        onClose={() => setSelectedPackage(null)}
        onBookNow={handleBookPackage}
      />

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialDestination={consultationDestination}
      />

      {/* 24/7 AI Concierge Chat Widget */}
      <SupportChatWidget />
    </div>
  );
}
