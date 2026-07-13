export interface TravelPackage {
  id: string;
  title: string;
  subtitle: string;
  destination: string;
  region: string; // 'Europe' | 'Asia' | 'Africa' | 'Americas' | 'Oceania'
  category: 'Luxury' | 'Adventure' | 'Cultural' | 'Honeymoon' | 'Family' | 'Wellness';
  durationDays: number;
  priceFrom: number;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  highlights: string[];
  inclusions: string[];
  bestTime: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  morning: string;
  afternoon: string;
  evening: string;
  hotelSuggestion: string;
}

export interface GeneratedItinerary {
  tripTitle: string;
  destination: string;
  duration: string;
  overview: string;
  estimatedCostPerPerson: string;
  highlights: string[];
  days: ItineraryDay[];
  inclusions: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
  timestamp: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  travelDates: string;
  travelers: number;
  budget: string;
  notes: string;
}
