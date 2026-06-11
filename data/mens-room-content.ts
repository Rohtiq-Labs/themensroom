const IMAGE_DIR = "/images";

export const HERO_VIDEO = "/videos/hero-sec.mp4";

export const SITE_IMAGES = {
  hero: `${IMAGE_DIR}/687655193_18590354293055589_4886872600044002837_n.jpg`,
  about: `${IMAGE_DIR}/about.jpg`,
  walkins: `${IMAGE_DIR}/703948033_871215655296842_3826847281718043064_n.jpg`,
} as const;

const GALLERY_DIR = `${IMAGE_DIR}/gallery`;

export type GalleryItem = {
  src: string;
  label: string;
  alt: string;
  type: "image" | "video";
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: `${GALLERY_DIR}/687010406_1383018113630651_5287943104508668498_n.jpg`,
    label: "Skin Fade",
    alt: "Client with a precision skin fade and textured crop",
    type: "image",
  },
  {
    src: `${GALLERY_DIR}/671234556_952273684223709_8429796404652387330_n.jpg`,
    label: "Beard Sculpt",
    alt: "Client with a sculpted beard and sharp lineup",
    type: "image",
  },
  {
    src: `${GALLERY_DIR}/716050453_971464522548531_680444366984623505_n.jpg`,
    label: "Combo Cut",
    alt: "Client after a haircut and beard combo service",
    type: "image",
  },
  {
    src: `${GALLERY_DIR}/703948033_871215655296842_3826847281718043064_n.jpg`,
    label: "In The Chair",
    alt: "Client receiving a fresh cut at The Men's Room",
    type: "image",
  },
  {
    src: `${GALLERY_DIR}/gal-01.mp4`,
    label: "Shop Reel",
    alt: "Barbershop styling reel at The Men's Room",
    type: "video",
  },
  {
    src: `${GALLERY_DIR}/gal-02.mp4`,
    label: "Fresh Fade",
    alt: "Fade haircut video from The Men's Room",
    type: "video",
  },
  {
    src: `${GALLERY_DIR}/gal-03.mp4`,
    label: "Grooming Session",
    alt: "Grooming session video at The Men's Room",
    type: "video",
  },
];

export type Service = {
  image: string;
  imageAlt: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  featured?: boolean;
};

export type HoursRow = {
  day: string;
  time: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  service: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Best fade in Brick Township. Brian takes his time, listens to what you want, and the shop has an unbeatable vibe.",
    author: "Marcus T.",
    service: "Skin Fade",
    rating: 5,
  },
  {
    quote:
      "I've been coming here for over a year. Consistent quality every visit — sharp lines, clean beard work, and great conversation.",
    author: "James R.",
    service: "Haircut + Beard Combo",
    rating: 5,
  },
  {
    quote:
      "Walked in on a Saturday and still got top-notch service. The hot towel finish is the kind of detail you don't get everywhere.",
    author: "David K.",
    service: "Hot Towel Treatment",
    rating: 5,
  },
  {
    quote:
      "Professional from start to finish. My cut and color came out exactly how I wanted — already booked my next appointment.",
    author: "Anthony M.",
    service: "Cut & Color",
    rating: 5,
  },
  {
    quote:
      "The Men's Room is my go-to before every event. Precision grooming, friendly staff, and you always leave looking sharp.",
    author: "Chris P.",
    service: "Precision Grooming",
    rating: 5,
  },
  {
    quote:
      "Finally found a barbershop that treats every client like a regular. Clean shop, fair prices, and results that speak for themselves.",
    author: "Michael S.",
    service: "Beard Sculpting",
    rating: 5,
  },
];

export const MARQUEE_ITEMS = [
  "Haircuts",
  "Beard Sculpting",
  "Hot Towel Treatments",
  "Precision Grooming",
  "Cut & Color",
  "Walk-Ins Welcome",
] as const;

export const SERVICES: Service[] = [
  {
    image: `${IMAGE_DIR}/687010406_1383018113630651_5287943104508668498_n.jpg`,
    imageAlt: "Senior haircut service at The Men's Room",
    name: "Senior Haircut (65+)",
    description: "A tailored haircut experience for guests aged 65 and over.",
    price: "$30.00",
    duration: "30 mins",
  },
  {
    image: `${IMAGE_DIR}/696084049_1352057530323981_3626754825281238682_n.jpg`,
    imageAlt: "Sea salt spray styling product",
    name: "Sea Salt Spray",
    description: "Finish your look with sea salt spray for texture and hold.",
    price: "$10.00",
    duration: "30 mins",
  },
  {
    image: `${IMAGE_DIR}/560066967_668703102949868_9186460170609458887_n.jpg`,
    imageAlt: "Men's full color service",
    name: "Mens Full Color",
    description: "Full head of color",
    price: "$65.00",
    duration: "45 mins",
  },
  {
    image: `${IMAGE_DIR}/707796627_1043547314667260_4622217484182500623_n.jpg`,
    imageAlt: "Kids haircut with wash and design",
    name: "Kids Haircut with Wash & Design",
    description: "A complete kids cut with wash and styled finish.",
    price: "$40.00",
    duration: "30 mins",
  },
  {
    image: `${IMAGE_DIR}/684973537_1002474442110589_3853364074983287342_n.jpg`,
    imageAlt: "Kids haircut service",
    name: "Kids Haircut",
    description: "Clean, age-appropriate cuts for young clients.",
    price: "$35.00",
    duration: "30 mins",
  },
  {
    image: `${IMAGE_DIR}/525186364_2072149253193723_7216786200435455184_n.jpg`,
    imageAlt: "Haircut and color service",
    name: "Haircut + Color",
    description: "A full haircut paired with professional color application.",
    price: "$100.00",
    duration: "1 hr 30 mins",
  },
  {
    image: `${IMAGE_DIR}/566687823_18431601895101539_8144986203268708623_n.jpg`,
    imageAlt: "Haircut and beard grooming service",
    name: "Haircut & Beard",
    description: "Complete grooming with a sharp cut and detailed beard work.",
    price: "$60.00",
    duration: "30 mins",
    featured: true,
  },
  {
    image: `${IMAGE_DIR}/671234556_952273684223709_8429796404652387330_n.jpg`,
    imageAlt: "Men's precision haircut",
    name: "Haircut",
    description: "Precision cuts tailored to your style and finish preference.",
    price: "$45.00",
    duration: "30 mins",
  },
  {
    image: `${IMAGE_DIR}/686757765_4390864357828625_8826662750568422246_n.jpg`,
    imageAlt: "Executive beard and color service",
    name: "Executive Beard + Color",
    description: "The executive Beard + color service",
    price: "$65.00",
    duration: "1 hr",
  },
  {
    image: `${IMAGE_DIR}/557706883_18224450608306498_3831120223404920349_n.jpg`,
    imageAlt: "Beard trim and lineup",
    name: "Beard Trim",
    description: "Expert beard shaping, lining, and clean-up.",
    price: "$30.00",
    duration: "30 mins",
  },
];

export const HOURS: HoursRow[] = [
  { day: "Monday", time: "10:00 AM – 7:00 PM" },
  { day: "Tuesday", time: "10:00 AM – 7:00 PM" },
  { day: "Wednesday", time: "10:00 AM – 7:00 PM" },
  { day: "Thursday", time: "10:00 AM – 7:00 PM" },
  { day: "Friday", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 6:00 PM" },
  { day: "Sunday", time: "By Appointment" },
];

export const BOOKING_SERVICES = SERVICES.map((service) => service.name);

export const BOOKING_TIMES = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
] as const;

export const CONTACT = {
  address: "990 Cedarbridge Ave",
  city: "Brick Township, NJ",
  phone: "732-898-6800",
  phoneHref: "tel:7328986800",
  instagram: "@instabarber_brian",
  instagramHref: "https://www.instagram.com/instabarber_brian/",
  whatsappHref: "https://wa.me/17328986800",
  mapsHref: "https://maps.google.com/?q=990+Cedarbridge+Ave+Brick+Township+NJ",
  fadezyHref: "https://fadezy.rohtiqlabs.com",
} as const;
