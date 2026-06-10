// app/layout.tsx
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Toaster } from "sonner";
import { seo } from "../data";

const jostSans = Jost({
  variable: "--font-jost-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: seo.layout.titleDefault,
    template: seo.layout.titleTemplate,
  },
  description: seo.layout.description,
  keywords: seo.layout.keywords,
  openGraph: {
    title: seo.layout.og.title,
    description: seo.layout.og.description,
    type: seo.layout.og.type as "website",
    locale: seo.layout.og.locale,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${jostSans.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        
        <Toaster 
          position="top-right"
          expand={false}
          richColors
          closeButton
          duration={4000}
          theme="light"
        />
      </body>
    </html>
  );
}