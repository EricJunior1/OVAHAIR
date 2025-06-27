import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'OVA HAIR - Luxury Human Hair Wigs & Extensions',
  description: 'Transform your look with premium human hair wigs, lace fronts, and extensions. Free shipping over $150. 30-day returns. 4.9★ rated.',
  keywords: 'luxury wigs, human hair wigs, lace front wigs, hair extensions, premium hair',
  openGraph: {
    title: 'OVA HAIR - Luxury Human Hair Wigs',
    description: 'Premium human hair wigs with 4.9★ reviews. Free shipping over $150.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-black">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}