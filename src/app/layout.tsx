import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Public_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'All Star Burgers - Premium Burgers in Brooklyn',
  description: 'Experience gourmet burgers crafted with passion in Brooklyn. Order online for pickup, delivery, or reservations for an elevated dining experience at All Star Burgers.',
  keywords: ["all star burgers, brooklyn burgers, gourmet burgers, premium burgers, online ordering, restaurant reservations, clinton avenue, best burgers brooklyn, fast casual"],
  openGraph: {
    "title": "All Star Burgers - Premium Burgers Crafted for Brooklyn",
    "description": "Handcrafted patties, bold flavors, and uncompromising quality in every bite. Order now for pickup, delivery, or dine-in at our Clinton Avenue location.",
    "url": "https://www.allstarburgers.com",
    "siteName": "All Star Burgers",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/front-view-delicious-cheeseburger-dark-background_179666-19332.jpg",
        "alt": "Gourmet burger hero image"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "All Star Burgers - Premium Burgers Crafted for Brooklyn",
    "description": "Handcrafted patties, bold flavors, and uncompromising quality in every bite. Order now for pickup, delivery, or dine-in at our Clinton Avenue location.",
    "images": [
      "http://img.b2bpic.net/free-photo/front-view-delicious-cheeseburger-dark-background_179666-19332.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${publicSans.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
