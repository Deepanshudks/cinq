import tower2Plan from "@/assets/cinq/tower-2-plan.webp";
import tower4Plan from "@/assets/cinq/tower-4-plan.webp";
import tower5Plan from "@/assets/cinq/tower-5-plan.webp";

import amenitySky from "@/assets/cinq/amenitySky.jpeg";
import amenityStilt from "@/assets/cinq/amenityStilt.jpeg";
import amenityOasis from "@/assets/cinq/oasis.jpeg";
import { images } from "@/assets/cinq";

export const navigation = [
  "Overview",
  "Highlights",
  "Amenities",
  "Plans",
  "Gallery",
  "Location",
  "About",
];

export const stats = [
  { value: "61", label: "Floors" },
  { value: "7.19", label: "Acres" },
  { value: "5", label: "Majestic Towers" },
  { value: "4", label: "Apartments Per Floor" },
];

export const highlights = [
  [
    "7.19 Acres of Fine Living",
    "A landmark residential development thoughtfully planned across 7.19 acres in the Financial District.",
  ],
  [
    "5 Majestic Towers",
    "A distinctive collection of five residential towers designed to create an elevated urban address.",
  ],
  [
    "61 Harmonic Floors",
    "Soaring 61-floor towers creating an impressive presence in the Financial District skyline.",
  ],
  [
    "Only 4 Apartments Per Floor",
    "Limited residences per floor create a more private and exclusive living experience.",
  ],
  [
    "2.5+ Lakh Sq. Ft. of Curated Leisure",
    "A distinctive private amenity destination bringing recreation, relaxation and lifestyle experiences to the towers.",
  ],
  [
    "Sky Level Amenities",
    "A breathtaking elevated lifestyle space featuring views and amenities above the city.",
  ],
];

export const amenityLevels = [
  {
    id: "stilt",
    number: "01",
    label: "STILT LEVEL",
    subtitle: "Hub for Indoor & Outdoor Activities",
    title: "A Vibrant Landscape of Everyday Experiences",
    image: images.architecture,
    amenities: [
      "Teen Lounge",
      "Kids Lounge",
      "Business Lounge",
      "Senior Citizen Lounge",
      "Multipurpose Lounge",
      "Water Feature with Seating Area",
      "Jogging Walkway",
      "Butterfly Walkway",
      "Sensory Walkway",
      "Banquet Hall",
      "Pre-function Area",
      "Crèche",
      "Tennis Court",
      "Skating Rink",
      "Fitness Haven",
      "Basketball Court",
      "Practice Net",
      "Rock Climbing Wall",
      "Aerobic Plaza",
      "Nature Trails",
      "Pet Garden",
    ],
  },

  {
    id: "oasis",
    number: "02",
    label: "THE OASIS",
    subtitle: "Private Amenities in Every Tower",
    title: "Your Own Private Resort, Elevated Above the City",
    image: amenityOasis,
    amenities: [
      "Swimming Pool",
      "Jacuzzi",
      "Walking Track",
      "Viewing Deck",
      "Party Area",
      "Forest Nook",
      "Kids Pool",
      "Adventure Play Area",
      "Kids Tunnel",
      "Jumping Berm",
      "Climbing Cargo Net",
      "Trampoline",
      "Spring Rider",
      "Ball Pit",
    ],
  },

  {
    id: "sky",
    number: "03",
    label: "SKY LEVEL",
    subtitle: "Breathtaking Views & Wellness Experiences",
    title: "Luxury Reaches New Heights",
    image: amenitySky,
    amenities: [
      "Yoga Deck",
      "Pickle Ball Court",
      "Skyview Fitness",
      "Juice Bar",
      "Party Deck",
      "Rooftop Seating",
      "Sky Lounge Seating Area",
    ],
  },
];

export const plans = [
  {
    name: "Tower 2",
    price: "Price on request",
    title: "4 BHK Residences",
    detail: "Tower 2",
    area: "3,589 – 3,620 sq.ft.",
    image: tower2Plan,
    features: [
      "4 Bedrooms",
      "Spacious Living & Dining",
      "Premium Private Residences",
      "Multiple Orientation Options",
    ],
  },
  {
    name: "Tower 4",
    price: "Price on request",
    title: "4 BHK Residences",
    detail: "Tower 4",
    area: "3,589 – 3,644 sq.ft.",
    image: tower4Plan,

    features: [
      "4 Bedrooms",
      "Spacious Living & Dining",
      "Premium Private Residences",
      "East & West Facing Options",
    ],
  },
  {
    name: "Tower 5",
    price: "Price on request",
    title: "4 BHK Residences",
    detail: "Tower 5",
    image: tower5Plan,
    area: "3,575 – 3,586 sq.ft.",
    features: [
      "4 Bedrooms",
      "Spacious Living & Dining",
      "Premium Private Residences",
      "East & West Facing Options",
    ],
  },
];

export const locationHighlights = [
  ["Amazon Development Centre", "2 Mins"],
  ["Google", "2 Mins"],
  ["Waverock SEZ", "2 Mins"],
  ["Continental Hospital", "2 Mins"],
  ["Hyatt Hyderabad", "2 Mins"],
  ["Wipro Circle", "3 Mins"],
  ["Microsoft India", "7 Mins"],
  ["Oakridge International School", "9 Mins"],
  ["Raidurgam Metro Station", "14 Mins"],
  ["IKEA", "15 Mins"],
  ["HITEC City", "15 Mins"],
  ["RGI Airport", "25 Mins"],
];
