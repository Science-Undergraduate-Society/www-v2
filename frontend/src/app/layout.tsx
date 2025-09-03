import type { Metadata } from "next";
import { Figtree, Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { Footer } from "@/components/layout/Footer/Footer";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-figtree",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const gtmId = "GTM-PGBF9S6V";

export const metadata: Metadata = {
  title: "UBC SUS",
  description: "UBC Science Undergraduate Society",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <GoogleTagManager gtmId={gtmId} />
      </head>
      <body className={`${figtree.className}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}