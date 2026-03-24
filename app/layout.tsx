import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "DigiSurf Australia — AI Automation for Australian Businesses",
  description:
    "Sydney-based AI automation agency. We build custom AI solutions for healthcare, fitness, retail, and content creators across Australia.",
  keywords: [
    "AI automation Australia",
    "AI chatbot Sydney",
    "business automation Sydney",
    "AI agency Australia",
  ],
  openGraph: {
    title: "DigiSurf Australia — AI Automation",
    description: "Custom AI automation for Australian businesses.",
    url: "https://digisurfaustralia.com.au",
    siteName: "DigiSurf Australia",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
    </html>
  );
}
