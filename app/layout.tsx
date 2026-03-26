import type { Metadata } from "next";
import { Space_Grotesk, Inter, Montserrat } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { ChatWidget } from "@/components/ui/ChatWidget";
import { CookieBanner } from "@/components/ui/CookieBanner";
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

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "800", "900"],
  variable: "--font-logo",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.digisurfaustralia.com.au'),
  title: {
    default: 'DigiSurf Australia — AI Automation for Australian Businesses',
    template: '%s | DigiSurf Australia',
  },
  description:
    'Australian AI automation agency. We build custom AI systems for small businesses — AI receptionists, chatbots, voice agents, social media AI, and more. Remote-first delivery, no lock-in contracts.',
  keywords: [
    'AI automation Australia',
    'AI receptionist Australia',
    'AI chatbot Australia',
    'business automation Australia',
    'AI agency Australia',
    'AI voice agent Australia',
    'small business AI Australia',
    'DigiSurf Australia',
  ],
  authors: [{ name: 'DigiSurf Australia', url: 'https://www.digisurfaustralia.com.au' }],
  creator: 'DigiSurf Australia',
  openGraph: {
    title: 'DigiSurf Australia — AI Automation for Australian Businesses',
    description: 'AI systems that answer your phones, reply to leads, post your content, and run your admin — 24/7. Built for Australian businesses.',
    url: 'https://www.digisurfaustralia.com.au',
    siteName: 'DigiSurf Australia',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DigiSurf Australia — AI Automation for Australian Businesses',
    description: 'AI systems that answer your phones, reply to leads, post your content, and run your admin — 24/7.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://www.digisurfaustralia.com.au',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${spaceGrotesk.variable} ${inter.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatWidget />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
