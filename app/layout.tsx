import type { Metadata } from "next";
import { Space_Grotesk, Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { ChatWidget } from "@/components/ui/ChatWidget";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Analytics } from "@vercel/analytics/next";
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
    'Australian AI automation agency helping small businesses save time and grow. AI receptionists, chatbots, voice agents, social media AI, and more. No lock-in contracts. Remote-first delivery across Australia.',
  keywords: [
    'AI automation Australia',
    'AI receptionist Australia',
    'AI chatbot Australia',
    'business automation Australia',
    'AI agency Australia',
    'AI voice agent Australia',
    'small business AI Australia',
    'AI automation Sydney',
    'AI receptionist small business',
    'chatbot for Australian business',
    'DigiSurf Australia',
    'automated lead follow-up Australia',
    'AI social media manager Australia',
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
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'DigiSurf Australia — AI Automation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DigiSurf Australia — AI Automation for Australian Businesses',
    description: 'AI systems that answer your phones, reply to leads, post your content, and run your admin — 24/7.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: 'https://www.digisurfaustralia.com.au',
  },
  verification: {
    google: undefined, // Add Google Search Console verification code here when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${spaceGrotesk.variable} ${inter.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <head>
        {/* LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "DigiSurf Australia",
              "url": "https://www.digisurfaustralia.com.au",
              "logo": "https://www.digisurfaustralia.com.au/icon",
              "description": "Australian AI automation agency helping small businesses save time and grow with AI receptionists, chatbots, voice agents, and social media automation.",
              "telephone": "+61498541273",
              "email": "info@digisurfaustralia.com.au",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bondi Beach",
                "addressRegion": "NSW",
                "addressCountry": "AU"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Australia"
              },
              "priceRange": "$$",
              "currenciesAccepted": "AUD",
              "openingHours": "Mo-Su 00:00-23:59",
              "sameAs": [
                "https://www.facebook.com/digisurfaustralia",
                "https://instagram.com/digisurf.au"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Automation Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Receptionist" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Chatbot" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Voice Agent" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Social Media Manager" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Google Review Automation" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Document Automation" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI CRM & Lead Automation" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Video Workflow" } }
                ]
              }
            })
          }}
        />
        {/* FAQPage structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How long does it take to get set up?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Most clients are live within 7–14 days of the strategy call. Simple automations can be ready in as little as 5 days." }
                },
                {
                  "@type": "Question",
                  "name": "Do I need any technical knowledge?",
                  "acceptedAnswer": { "@type": "Answer", "text": "None at all. DigiSurf handles everything from design and build to testing and launch. All you need to do is answer questions about your business during onboarding." }
                },
                {
                  "@type": "Question",
                  "name": "Can DigiSurf integrate with my existing software?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes. We integrate with most major platforms including HubSpot, Salesforce, Cliniko, Mindbody, Xero, QuickBooks, Slack, and hundreds of others via Zapier, Make, and custom APIs." }
                },
                {
                  "@type": "Question",
                  "name": "Can I cancel my subscription anytime?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes. There are no lock-in contracts. All plans require 30 days notice to cancel." }
                },
                {
                  "@type": "Question",
                  "name": "How is DigiSurf different from just using ChatGPT myself?",
                  "acceptedAnswer": { "@type": "Answer", "text": "DigiSurf builds purpose-built AI systems trained on your business, integrated with your tools, connected to your calendar and CRM, running 24/7 without you doing anything. It's the difference between a hammer and a factory." }
                }
              ]
            })
          }}
        />
        <Script
          id="hs-script-loader"
          src="//js-na2.hs-scripts.com/245675138.js"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatWidget />
          <WhatsAppButton />
          <CookieBanner />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
