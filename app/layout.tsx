import type { Metadata } from "next";
import {
  Cinzel,
  Dancing_Script,
  Lato,
  Playfair_Display,
} from "next/font/google";

import "./globals.css";
import "./mens-room.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Brian John's – The Men's Room Barber Lounge",
  description:
    "Premium barbershop in Brick Township, NJ. Haircuts, beard sculpting, hot towel treatments, and precision grooming. Walk-ins welcome.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cinzel.variable} ${lato.variable} ${dancingScript.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
