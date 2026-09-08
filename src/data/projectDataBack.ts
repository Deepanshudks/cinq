import { images } from "@/assets/cinq";

export const navigation = [
  "Overview",
  "Location",
  "Amenities",
  "Residences",
  "Master Plan",
  "Clubhouse",
  "Specifications",
];

export const stats = [
  { value: "7.19", label: "Sprawling Acres" },
  { value: "5", label: "Majestic Towers" },
  { value: "61", label: "Harmonic Floors" },
  { value: "4", label: "Apartments Per Floor" },
];

type Place = { name: string; distance: string; time: string };
const places = (rows: string[][]): Place[] =>
  rows.map(([name = "", distance = "", time = ""]) => ({ name, distance, time }));
export const locations = {
  "Business & IT": places([
    ["Amazon Development Centre", "0.30 KM", "02 MIN"],
    ["Waverock SEZ", "0.40 KM", "02 MIN"],
    ["Google", "0.60 KM", "02 MIN"],
    ["Capgemini", "0.85 KM", "03 MIN"],
    ["ICICI Corporate", "0.75 KM", "04 MIN"],
    ["Cognizant", "0.80 KM", "04 MIN"],
    ["Accenture", "0.85 KM", "04 MIN"],
    ["NVIDIA", "1.00 KM", "05 MIN"],
    ["Wipro", "1.20 KM", "07 MIN"],
    ["Microsoft India", "2.00 KM", "07 MIN"],
    ["Infosys", "2.80 KM", "09 MIN"],
    ["PepsiCo Global LLP", "3.50 KM", "12 MIN"],
    ["TCS", "4.00 KM", "12 MIN"],
  ]),
  Leisure: places([
    ["Hyatt Hyderabad", "0.30 KM", "02 MIN"],
    ["Sheraton Hyderabad", "0.75 KM", "04 MIN"],
    ["The Fisherman’s Wharf", "1.80 KM", "06 MIN"],
    ["Fairfield by Marriott", "2.40 KM", "08 MIN"],
    ["California Burrito Mexico Kitchen", "3.80 KM", "12 MIN"],
    ["Sharath City Mall", "5.90 KM", "14 MIN"],
    ["IKEA", "6.50 KM", "15 MIN"],
    ["Golkonda Resorts", "6.80 KM", "15 MIN"],
    ["Inorbit Mall", "7.90 KM", "18 MIN"],
    ["Hyderabad Polo Riding Club", "11.40 KM", "21 MIN"],
  ]),
  "Hospitals & Healthcare": places([
    ["Continental Hospital", "0.85 KM", "02 MIN"],
    ["Star Hospital", "1.80 KM", "06 MIN"],
    ["Care Hospital", "5.30 KM", "12 MIN"],
    ["AIG Hospital", "5.70 KM", "13 MIN"],
    ["Arete Hospital", "5.60 KM", "14 MIN"],
    ["Apollo Spectra Hospital", "6.30 KM", "15 MIN"],
    ["Medicover Hospital", "7.80 KM", "15 MIN"],
  ]),
  Education: places([
    ["The Gaudium School", "1.30 KM", "06 MIN"],
    ["Shriram Universal School", "1.50 KM", "07 MIN"],
    ["Keystone International School", "1.80 KM", "08 MIN"],
    ["Indian School of Business", "2.40 KM", "08 MIN"],
    ["Kairos International School", "3.00 KM", "08 MIN"],
    ["Oakridge International School", "3.00 KM", "09 MIN"],
    ["Delhi Public School", "4.00 KM", "10 MIN"],
    ["Hyderabad Central University", "5.60 KM", "13 MIN"],
  ]),
  Connectivity: places([
    ["Wipro Circle", "2.00 KM", "03 MIN"],
    ["Outer Ring Road", "2.50 KM", "06 MIN"],
    ["Raidurgam Metro Station", "6.80 KM", "14 MIN"],
    ["RGI Airport", "30.00 KM", "25 MIN"],
  ]),
};

export const stiltAmenities = [
  "Teen Lounge",
  "Kids Lounge",
  "Multipurpose Lounge",
  "Business Lounge",
  "Senior Citizen Lounge",
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
];

export const experiences = [
  {
    label: "Fitness",
    title: "Fitness Haven",
    image: images.amenities,
    copy: "Dedicated spaces for purposeful movement.",
  },
  {
    label: "Sports",
    title: "Courts & Play",
    image: images.play,
    copy: "Active settings for every generation.",
  },
  {
    label: "Nature",
    title: "Walkways & Gardens",
    image: images.stilt,
    copy: "Landscaped paths woven through the stilt level.",
  },
  {
    label: "Family",
    title: "Places to Belong",
    image: images.oasisLife,
    copy: "Shared spaces planned around time together.",
  },
];

export const oasisAmenities = [
  "Pool",
  "Jacuzzi",
  "Walking Track",
  "Party Area",
  "Viewing Deck",
  "Forest Nook",
  "Kids Pool",
  "Adventure Play Area",
  "Kids Tunnel",
  "Jumping Berm",
  "Climbing Cargo Net",
  "Trampoline",
  "Spring Rider",
  "Ball Pit",
];
export const skyAmenities = [
  "Skyview Fitness",
  "Party Deck",
  "Juice Bar",
  "Rooftop Seating",
  "Yoga Deck",
  "Pickle Ball",
  "Seating Area",
];

export const towers = [
  {
    id: 1,
    title: "Multipurpose Lounge",
    amenities: ["Social Lounge", "Get-Together Lobby"],
    image: images.clubSocial,
  },
  {
    id: 2,
    title: "Business Lounge",
    amenities: ["Art Pavilion", "Collaboration Zone", "Billiards", "Library", "Business Hub"],
    image: images.clubWork,
  },
  {
    id: 3,
    title: "Senior Citizen Lounge",
    amenities: ["Oxygen Lounge", "Social Club", "Library"],
    image: images.clubReception,
  },
  {
    id: 4,
    title: "Teen Lounge",
    amenities: ["Music Room", "Activity Room", "Dance Room", "Boxing Room", "Study Area"],
    image: images.clubFitness,
  },
  { id: 5, title: "Kids Lounge", amenities: ["LEGO Room", "Play Area"], image: images.play },
];

const residenceGroup = (towers: number[], image: string, entries: [string, string][]) =>
  towers.flatMap((tower) => entries.map(([size, facing]) => ({ tower, size, facing, image })));
export const residences = [
  ...residenceGroup([1, 4], images.tower14Plan, [
    ["3630 Sq.Ft.", "East Facing"],
    ["3644 Sq.Ft.", "West Facing"],
    ["3589 Sq.Ft.", "West Facing"],
    ["3620 Sq.Ft.", "East Facing"],
  ]),
  ...residenceGroup([2], images.tower2Plan, [
    ["3589 Sq.Ft.", "East Facing"],
    ["3620 Sq.Ft.", "West Facing"],
    ["3592 Sq.Ft.", "West Facing"],
    ["3586 Sq.Ft.", "East Facing"],
  ]),
  ...residenceGroup([3, 5], images.tower35Plan, [
    ["3584 Sq.Ft.", "East Facing"],
    ["3575 Sq.Ft.", "West Facing"],
    ["3579 Sq.Ft.", "West Facing"],
    ["3586 Sq.Ft.", "East Facing"],
  ]),
];

export const clubhouse = [
  {
    key: "G",
    title: "Ground",
    image: images.clubReception,
    amenities: [
      "Reception",
      "Café",
      "Pre-function Hall",
      "Banquet Hall",
      "Crèche",
      "Convenience Store",
    ],
  },
  {
    key: "1",
    title: "Level 1",
    image: images.clubWork,
    amenities: [
      "Co-working Space",
      "Mini Theater",
      "Board Rooms",
      "Huddle Room",
      "Pre-function Hall",
      "Banquet Hall",
    ],
  },
  {
    key: "2",
    title: "Level 2",
    image: images.clubSports,
    amenities: ["Badminton Court", "Indoor Games", "Squash Court", "VR Room"],
  },
  { key: "3", title: "Level 3", image: images.clubGuest, amenities: ["5 Guest Rooms"] },
  {
    key: "4",
    title: "Level 4",
    image: images.clubFitness,
    amenities: ["Sports Bar", "Bowling Alley", "Gym", "Gentlemen's Room"],
  },
  {
    key: "5",
    title: "Level 5",
    image: images.clubWellness,
    amenities: ["Gym HIIT", "Jacuzzi", "Salon", "Spa"],
  },
  {
    key: "T",
    title: "Terrace",
    image: images.clubTerrace,
    amenities: ["Infinity Pool", "Party Area", "Sit-Out Area"],
  },
];

export const specifications = [
  {
    title: "Structure",
    text: "RCC foundation and RCC framed structure. Aluminum form work and Shear Wall Technology. RCC Shear Wall Structure System designed to withstand wind and seismic loads as per relevant IS codes.",
  },
  {
    title: "Doors & Joinery",
    text: "Premium designer-made solid teak wood main-door frame with solid-core shutter, teak veneer and PU coat. Designer hardware with smart lock. Premium internal and toilet joinery as detailed in the brochure.",
  },
  {
    title: "Windows",
    text: "Aluminium double-glazed sliding doors and windows with performance glass, premium hardware and provision for mosquito mesh track.",
  },
  {
    title: "Painting",
    text: "Luxury acrylic emulsion paint to internal walls; textured or smooth exterior finish with exterior emulsion paint. Weather-proof finish to utility, sit-out and balcony walls.",
  },
  {
    title: "Flooring",
    text: "800×1600 vitrified tile flooring for drawing, living and dining; laminated wooden flooring in the master bedroom; 1000×1000 vitrified tile flooring for other bedrooms and kitchen.",
  },
  {
    title: "Tile Cladding",
    text: "Acid-resistant large-format vitrified tiles in toilets; utility wall cladding up to 3 feet; granite, vitrified tile or architectural finish to lift lobbies.",
  },
  {
    title: "Kitchen / Utility",
    text: "RO provision, chimney provision, and washing machine or dishwasher provision in the utility area.",
  },
  {
    title: "Toilets",
    text: "Premium large-format anti-skid tiles with branded high-capacity diverters, showers and wall-hung sanitary fixtures as detailed in the brochure.",
  },
  {
    title: "Electrical",
    text: "Concealed copper wiring, modular switches, 3-phase supply for each unit and prepaid energy meters. 100% DG backup as specified.",
  },
  {
    title: "Home Automation",
    text: "Wired smart-home automation for lighting control and a smart intelligent video door phone.",
  },
  {
    title: "Water",
    text: "Municipal and bore-well supply provision, treated domestic water through a water-softening system, and an on-site sewage treatment plant as per norms.",
  },
  {
    title: "Lifts",
    text: "High-speed automatic passenger lifts with rescue device and V3F energy efficiency, plus one service lift in each tower.",
  },
  {
    title: "Security",
    text: "Around-the-clock security, surveillance cameras at main security points, tower entrances, clubhouse and open areas as per design.",
  },
  {
    title: "Fire & Safety",
    text: "Fire hydrant and sprinkler systems in flats, corridors and basements; fire alarms and a public-address system.",
  },
  {
    title: "Parking",
    text: "Dedicated 3-car parking space, parking signage, car-wash space and EV charging provision as per norms.",
  },
];

export const gallery = [
  images.architecture,
  images.oasis,
  images.sky,
  images.clubReception,
  images.clubWork,
  images.clubSports,
  images.clubGuest,
  images.clubFitness,
  images.clubWellness,
  images.clubTerrace,
];
