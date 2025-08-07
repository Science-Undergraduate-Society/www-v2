import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-figtree",
});

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
      </body>
      </html>
  );
}
