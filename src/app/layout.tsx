import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "AI Demand & Adoption Intelligence (US)",
  description:
    "A Tableau-driven market intelligence project comparing AI tools across Coding, Image, and Video using Google Trends and computed demand metrics.",
  openGraph: {
    title: "AI Demand & Adoption Intelligence (US)",
    description:
      "Compare AI tools across Coding, Image, and Video categories using Google Trends data and computed demand metrics.",
    type: "website",
    locale: "en_US",
    siteName: "AI Demand Intelligence",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Demand & Adoption Intelligence (US)",
    description:
      "Compare AI tools across Coding, Image, and Video categories using Google Trends data and computed demand metrics.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased bg-slate-50 text-slate-800">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
