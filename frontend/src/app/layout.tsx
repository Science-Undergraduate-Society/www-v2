import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { Footer } from "@/components/layout/Footer/Footer";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-figtree",
});

const gtmId = "GTM-PGBF9S6V"

export const metadata: Metadata = {
  title: "UBC SUS",
  description: "UBC Science Undergraduate Society",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html
          lang="en"
          className={`${figtree.className} ${figtree.variable}`}
      >
      <body>
      {children}
    <html lang="en">
      <GoogleTagManager gtmId={gtmId} />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Footer />
      </body>
      </html>
  );
}
