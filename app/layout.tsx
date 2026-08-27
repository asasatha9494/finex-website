import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Work_Sans,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "FineX Associates | Bookkeeping & Accounting",
  description:
    "Offshore bookkeeping and accounting services built around accuracy, clarity and consistency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${workSans.variable} ${plexMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}