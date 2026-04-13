import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mishraoptix.vercel.app'), // Matches your GitHub repo name!
  title: 'MishOptix | Premium Blue-Light Eye Protection for Kids',
  description: 'Protect your child\'s eyes with MishOptix. Doctor-backed blue-light glasses for ages 0-14. Zero yellow tint, 99.9% protection.',
  keywords: 'kids blue light glasses, children eyewear, computer glasses for kids, MishOptix, screen protection',
  openGraph: {
    title: 'MishOptix | Future-Proof Eye Protection',
    description: 'The science-first eyewear brand for the digital generation.',
    images: ['/images/hero_child.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
