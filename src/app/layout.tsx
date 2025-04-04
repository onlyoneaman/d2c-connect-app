import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | D2C Connect",
    default: "D2C Connect - Bridge D2C Brands with Top Freelance Designers",
  },
  description: "D2C Connect is the premier platform connecting D2C brands with talented freelance designers. Find the perfect match for your brand design needs or showcase your design portfolio to potential clients.",
  keywords: [
    "D2C", "direct-to-consumer", 
    "designers", "freelance designers", 
    "UI/UX design", "web design", 
    "brand design", "packaging design", 
    "graphic design", "product design",
    "designer marketplace", "freelance platform"
  ],
  authors: [{ name: "D2C Connect Team", url: "https://d2c-connect-app.2000-aman-sinha.workers.dev/" }],
  creator: "D2C Connect",
  publisher: "D2C Connect",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://d2c-connect-app.2000-aman-sinha.workers.dev/"),
  alternates: {
    canonical: "/",
    languages: {
      'en-US': "https://d2c-connect-app.2000-aman-sinha.workers.dev/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://d2c-connect-app.2000-aman-sinha.workers.dev/",
    siteName: "D2C Connect",
    title: "D2C Connect - Bridge D2C Brands with Top Freelance Designers",
    description: "The premier platform connecting D2C brands with talented freelance designers. Find your perfect design match or showcase your design skills.",
    images: [
      {
        url: "https://picsum.photos/1200/630?random=1",
        width: 1200,
        height: 630,
        alt: "D2C Connect - Connecting brands with designers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "D2C Connect - Bridge D2C Brands with Top Freelance Designers",
    description: "The premier platform connecting D2C brands with talented freelance designers. Find your perfect design match or showcase your design skills.",
    images: ["https://picsum.photos/1200/630?random=1"],
    creator: "@d2cconnect",
    site: "@d2cconnect",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code
  },
  category: "Design Marketplace",
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
