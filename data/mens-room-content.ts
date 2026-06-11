const IMAGE_DIR = "/images";

export const HERO_VIDEO = "/videos/hero-sec.mp4";

export const SITE_IMAGES = {
  hero: `${IMAGE_DIR}/687655193_18590354293055589_4886872600044002837_n.jpg`,
  about: `${IMAGE_DIR}/about.jpg`,
  walkins: `${IMAGE_DIR}/703948033_871215655296842_3826847281718043064_n.jpg`,
} as const;

export type GalleryItem = {
  src: string;
  label: string;
  alt: string;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: `${IMAGE_DIR}/687010406_1383018113630651_5287943104508668498_n.jpg`,
    label: "Skin Fade",
    alt: "Client with a precision skin fade and textured crop",
  },
  {
    src: `${IMAGE_DIR}/684973537_1002474442110589_3853364074983287342_n.jpg`,
    label: "Taper Fade",
    alt: "Client with a clean taper fade haircut",
  },
  {
    src: `${IMAGE_DIR}/671234556_952273684223709_8429796404652387330_n.jpg`,
    label: "Beard Sculpt",
    alt: "Client with a sculpted beard and sharp lineup",
  },
  {
    src: `${IMAGE_DIR}/696084049_1352057530323981_3626754825281238682_n.jpg`,
    label: "Classic Cut",
    alt: "Client with a classic barbershop haircut",
  },
  {
    src: `${IMAGE_DIR}/714931316_18598585183055589_6333633461735811050_n.jpg`,
    label: "Slick Back",
    alt: "Client with a slick back style and groomed beard",
  },
  {
    src: `${IMAGE_DIR}/707796627_1043547314667260_4622217484182500623_n.jpg`,
    label: "Textured Crop",
    alt: "Client with a textured crop and high fade",
  },
  {
    src: `${IMAGE_DIR}/566687823_18431601895101539_8144986203268708623_n.jpg`,
    label: "Drop Fade",
    alt: "Client with a drop fade and sharp hairline",
  },
  {
    src: `${IMAGE_DIR}/703948033_871215655296842_3826847281718043064_n.jpg`,
    label: "High Skin Fade",
    alt: "Client with a high skin fade in the barber chair",
  },
  {
    src: `${IMAGE_DIR}/525186364_2072149253193723_7216786200435455184_n.jpg`,
    label: "Hard Part Fade",
    alt: "Client with a hard part fade and beard blend",
  },
  {
    src: `${IMAGE_DIR}/557706883_18224450608306498_3831120223404920349_n.jpg`,
    label: "Precision Line",
    alt: "Client with precise hairline and fade work",
  },
  {
    src: `${IMAGE_DIR}/560066967_668703102949868_9186460170609458887_n.jpg`,
    label: "Cut & Color",
    alt: "Client showing a fresh cut and color service",
  },
  {
    src: `${IMAGE_DIR}/686757765_4390864357828625_8826662750568422246_n.jpg`,
    label: "Burst Fade",
    alt: "Client with a burst fade haircut",
  },
  {
    src: `${IMAGE_DIR}/716050453_971464522548531_680444366984623505_n.jpg`,
    label: "Combo Cut",
    alt: "Client after a haircut and beard combo service",
  },
  {
    src: `${IMAGE_DIR}/670946980_940971268570465_3983723778674177608_n.jpg`,
    label: "Line Up",
    alt: "Client with a crisp lineup and fade",
  },
  {
    src: `${IMAGE_DIR}/687655193_18590354293055589_4886872600044002837_n.jpg`,
    label: "The Shop",
    alt: "Interior of Brian John's The Men's Room barber lounge",
  },
];

export type ServiceMobileTitle = {
  prefix?: string;
  emphasis: string;
  suffix?: string;
};

export type Service = {
  image: string;
  imageAlt: string;
  name: string;
  description: string;
  price: string;
  featured?: boolean;
  mobileTitle: ServiceMobileTitle;
  mobileDescription: string;
  mobilePrice: string;
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
    imageAlt: "Precision haircut with skin fade",
    name: "Haircut",
    description:
      "Precision cuts tailored to your style — from classic fades and taper cuts to textured crops and everything in between. Always sharp, always clean.",
    price: "Starting at $30",
    mobileTitle: { prefix: "THE", emphasis: "SIGNATURE", suffix: "HAIRCUT" },
    mobileDescription: "Precision cuts tailored to your personal style.",
    mobilePrice: "$30",
  },
  {
    image: `${IMAGE_DIR}/566687823_18431601895101539_8144986203268708623_n.jpg`,
    imageAlt: "Beard sculpting and lineup",
    name: "Beard Sculpting",
    description:
      "Expert beard shaping, lining, and sculpting to define your look. We craft clean edges and full shapes that complement your face perfectly.",
    price: "Starting at $20",
    mobileTitle: { emphasis: "BEARD", suffix: "SCULPTING" },
    mobileDescription: "Expert shaping, lining, and sculpting for your look.",
    mobilePrice: "$20",
  },
  {
    image: `${IMAGE_DIR}/696084049_1352057530323981_3626754825281238682_n.jpg`,
    imageAlt: "Hot towel barbershop treatment",
    name: "Hot Towel Treatment",
    description:
      "The classic barbershop ritual. A warm, steamed towel opens pores and preps skin for an ultra-close, incredibly smooth shave experience.",
    price: "Add-on Available",
    mobileTitle: { emphasis: "HOT TOWEL", suffix: "TREATMENT" },
    mobileDescription: "Classic steamed towel ritual for an ultra-smooth finish.",
    mobilePrice: "Add-on",
  },
  {
    image: `${IMAGE_DIR}/707796627_1043547314667260_4622217484182500623_n.jpg`,
    imageAlt: "Haircut and beard combo service",
    name: "Haircut + Beard Combo",
    description:
      "The full treatment. Walk in looking good, walk out looking great. Our most popular service — a complete refresh from head to beard.",
    price: "Starting at $45",
    featured: true,
    mobileTitle: { emphasis: "MASTER", suffix: "GROOMING COMBO" },
    mobileDescription: "Our most popular full refresh from head to beard.",
    mobilePrice: "$45",
  },
  {
    image: `${IMAGE_DIR}/560066967_668703102949868_9186460170609458887_n.jpg`,
    imageAlt: "Cut and color service result",
    name: "Cut & Color",
    description:
      "Whether it's a subtle tint or a bold transformation, our cut & color service combines styling expertise with professional color application.",
    price: "Starting at $60",
    mobileTitle: { emphasis: "CUT &", suffix: "COLOR" },
    mobileDescription: "Subtle tints to bold transformations with expert color.",
    mobilePrice: "$60",
  },
  {
    image: `${IMAGE_DIR}/525186364_2072149253193723_7216786200435455184_n.jpg`,
    imageAlt: "Precision grooming with hard part fade",
    name: "Precision Grooming",
    description:
      "A complete grooming experience with attention to every detail — neck clean-up, sideburns, hairline definition, and finishing touches that elevate your look.",
    price: "Starting at $25",
    mobileTitle: { emphasis: "PRECISION", suffix: "GROOMING" },
    mobileDescription: "Detailed clean-up and finishing for a polished look.",
    mobilePrice: "$25",
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

export const BOOKING_SERVICES = [
  "Haircut",
  "Beard Sculpting",
  "Haircut + Beard Combo",
  "Cut & Color",
  "Hot Towel Treatment",
  "Precision Grooming",
] as const;

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
  instagramHref: "https://instagram.com/instabarber_brian",
  mapsHref: "https://maps.google.com/?q=990+Cedarbridge+Ave+Brick+Township+NJ",
  fadezyHref: "https://fadezy.rohtiqlabs.com",
} as const;
