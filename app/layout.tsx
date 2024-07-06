import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Krystian Zun",
  description: "Product designer and maker in love with building and shipping products that provide value.",
  openGraph: {
    title: "Krystian Zun",
    description: "Product designer and maker in love with building and shipping products that provide value.",
    images: [
      {
        url: "/images/kzcom-preview.png",
        width: 1200,
        height: 630,
        alt: "Krystian Zun - Product Designer and Maker",
      },
    ],
    locale: "en_US",
    type: "website",
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
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐥</text></svg>"/>
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
