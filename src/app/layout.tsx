// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import GoogleAnalytics from "../components/analytics/GoogleAnalytics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nikhil Chauhan | Portfolio",
  description: "Portfolio of Nikhil Chauhan (Nickon India), a Full Stack Developer, YouTuber, and Streamer specializing in the MERN Stack.",
  keywords: [
    "Nikhil Chauhan",
    "Nickon India",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "MERN Stack",
    "Portfolio",
    "Developer Noida",
    "Web Developer India",
  ],
  verification: {
    // The correct verification code has been added.
    google: "cykNGbexAWlFhK9OdQSSG2lYoJE3TGWXstwjPxisFh4",
  },
  openGraph: {
    type: "website",
    url: "https://www.nickonindia.com/",
    title: "Nickon India | Full Stack Developer & Creator",
    description: "Portfolio of Nikhil Chauhan (Nickon India), a Full Stack Developer, YouTuber, and Streamer specializing in the MERN Stack.",
    images: [{ url: "https://www.nickonindia.com/hero-banner.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nickon India | Full Stack Developer & Creator",
    description: "Portfolio of Nikhil Chauhan (Nickon India), a Full Stack Developer, YouTuber, and Streamer specializing in the MERN Stack.",
    images: ["https://www.nickonindia.com/hero-banner.jpg"],
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
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      </head>
      <body className={inter.className}>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
