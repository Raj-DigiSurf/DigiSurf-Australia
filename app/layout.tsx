import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}
