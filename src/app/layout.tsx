import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | D2C Connect",
    default: "D2C Connect - Connect D2C Brands with Freelance Designers",
  },
  description: "D2C Connect is a platform that bridges the gap between D2C brands and talented freelance designers. Find the perfect designer for your brand or showcase your design skills.",
  keywords: ["D2C", "designers", "freelance", "branding", "packaging", "web design", "UI/UX", "product design"],
  authors: [{ name: "D2C Connect Team" }],
  creator: "D2C Connect",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://d2cconnect.com",
    siteName: "D2C Connect",
    title: "D2C Connect - Connect D2C Brands with Freelance Designers",
    description: "Find the perfect designer for your D2C brand or showcase your design skills.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "D2C Connect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "D2C Connect - Connect D2C Brands with Freelance Designers",
    description: "Find the perfect designer for your D2C brand or showcase your design skills.",
    images: ["/twitter-image.jpg"],
    creator: "@d2cconnect",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
