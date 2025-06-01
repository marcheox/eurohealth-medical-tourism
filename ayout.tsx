// Instructions: Update the page title and description to use EuroHealth instead of MARUS

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Medical Tourism to Turkey - EuroHealth Medical Tourism AŞ",
  description: "Professional medical tourism platform for Turkey by EuroHealth. We provide comprehensive support from consultation to treatment completion. Expert guidance for international patients seeking high-quality medical care in Turkey.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
