import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize GoogleGenAI client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "dummy-key",
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

// In-memory storage for inquiries/bookings
const inquiries: any[] = [];

// API Route: Generate Personalized AI Itinerary
app.post("/api/generate-itinerary", async (req, res) => {
  try {
    const { destination, duration, style, travelers, budget, interests, specialRequests } = req.body;

    const prompt = `Create a detailed, immersive, luxury day-by-day travel itinerary for a trip to ${destination}.
    - Duration: ${duration}
    - Travel Style: ${style} (e.g. Luxury, Adventure, Cultural, Wellness, Romantic)
    - Number of Travelers: ${travelers}
    - Budget Range: ${budget}
    - Interests: ${interests?.join(", ") || "General sightseeing, local cuisine, culture"}
    - Special Requests: ${specialRequests || "None"}

    Return the response as a JSON object with the following structure:
    {
      "tripTitle": "Catchy title for the trip",
      "destination": "${destination}",
      "duration": "${duration}",
      "overview": "A 2-3 sentence inspiring summary of the tailored journey.",
      "estimatedCostPerPerson": "$X,XXX",
      "highlights": ["Highlight 1", "Highlight 2", "Highlight 3", "Highlight 4"],
      "days": [
        {
          "day": 1,
          "title": "Day 1 title",
          "morning": "Detailed morning activity with recommended time or spot.",
          "afternoon": "Detailed afternoon activity.",
          "evening": "Dinner recommendation and evening leisure.",
          "hotelSuggestion": "Name of curated 5-star or boutique hotel."
        }
      ],
      "inclusions": ["24/7 Dedicated Concierge", "Private Airport Transfers", "Handpicked Boutique Accommodation", "Exclusive VIP Experiences"]
    }
    Ensure the JSON is strictly valid JSON without markdown wrapping if possible, or parseable.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.7,
      },
    });

    const text = response.text || "{}";
    let itineraryData;
    try {
      itineraryData = JSON.parse(text);
    } catch (err) {
      // Clean markdown code blocks if present
      const cleaned = text.replace(/```json/g, "").replace(/```/g, "").trim();
      itineraryData = JSON.parse(cleaned);
    }

    res.json({ success: true, itinerary: itineraryData });
  } catch (error: any) {
    console.error("Error generating itinerary:", error);
    res.status(500).json({ success: false, error: error.message || "Failed to generate itinerary" });
  }
});

// API Route: 24/7 AI Travel Concierge Chatbot
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body; // Array of { role: 'user' | 'model', content: string }

    const formattedHistory = messages.slice(0, -1).map((m: any) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }]
    }));

    const lastMessage = messages[messages.length - 1]?.content || "Hello";

    const chat = ai.chats.create({
      model: "gemini-3.5-flash",
      config: {
        systemInstruction: `You are 'Aria', the 24/7 Head Concierge at Wanderlust Global Travel Agency. 
        You specialize in luxury worldwide travel packages, personalized custom itineraries, visa guidance, flight bookings, and 24/7 on-trip assistance. 
        Be extremely polite, knowledgeable, warm, professional, and helpful. Give precise recommendations for destinations, hotels, dining, and activities.`,
      },
    });

    // Send message using chat object
    const response = await chat.sendMessage({ message: lastMessage });
    res.json({ success: true, reply: response.text });
  } catch (error: any) {
    console.error("Error in chat:", error);
    res.status(500).json({ success: false, error: error.message || "Chat error" });
  }
});

// API Route: Submit Booking / Consultation Inquiry
app.post("/api/inquiries", (req, res) => {
  const inquiry = {
    id: Date.now().toString(),
    ...req.body,
    createdAt: new Date().toISOString(),
    status: "Pending Review"
  };
  inquiries.push(inquiry);
  res.json({ success: true, inquiryId: inquiry.id, message: "Inquiry received successfully! Our 24/7 concierge will contact you within 2 hours." });
});

app.get("/api/inquiries", (req, res) => {
  res.json({ success: true, inquiries });
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Wanderlust Global Travel Agency server running on http://localhost:${PORT}`);
  });
}

startServer();
