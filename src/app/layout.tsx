// src/app/layout.tsx
import type { Metadata } from "next";
import nextFontLocal from "next/font/local";
import GoogleAnalytics from "../components/analytics/GoogleAnalytics";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "../providers/ThemeProvider"; // 1. Import the new ThemeProvider
import "./globals.css";

const inter = nextFontLocal({
  src: '../fonts/Inter-VariableFont_opsz,wght.ttf',
  display: 'swap',
});

// Your existing metadata and jsonLd objects remain the same
export const metadata: Metadata = {
  title: "Nikhil Chauhan | Portfolio",
  description: "Portfolio of Nikhil Chauhan (Nickon India), a Full Stack Developer, YouTuber, and Streamer specializing in the MERN Stack.",
  keywords: ["Nikhil Chauhan", "Nickon India", "Full Stack Developer", "Next.js Developer", "React Developer", "Node.js Developer", "MERN Stack", "Portfolio", "Developer Noida", "Web Developer India"],
  verification: { google: "cykNGbexAWlFhK9OdQSSG2lYoJE3TGWXstwjPxisFh4" },
  openGraph: { type: "website", url: "https://www.nickonindia.com/", title: "Nickon India | Full Stack Developer & Creator", description: "Portfolio of Nikhil Chauhan (Nickon India), a Full Stack Developer, YouTuber, and Streamer specializing in the MERN Stack.", images: [{ url: "https://www.nickonindia.com/hero-banner.jpg" }] },
  twitter: { card: "summary_large_image", title: "Nickon India | Full Stack Developer & Creator", description: "Portfolio of Nikhil Chauhan (Nickon India), a Full Stack Developer, YouTuber, and Streamer specializing in the MERN Stack.", images: ["https://www.nickonindia.com/hero-banner.jpg"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nikhil Chauhan",
  "alternateName": "Nickon India",
  "url": "https://nickonindia.com",
  "image": "https://res.cloudinary.com/dxlz9c5xr/image/upload/v1753192708/nickonindia.jpg",
  "sameAs": ["https://www.youtube.com/@NickonIndia", "https://www.instagram.com/nickon.india", "https://twitter.com/NickonIndia", "https://github.com/nikhilchauhanx", "https://www.linkedin.com/in/nikhilchauhan186/"],
  "jobTitle": "Full Stack Developer, YouTuber, Digital Creator",
  "worksFor": { "@type": "Organization", "name": "Nickon India" },
  "description": "Nikhil Chauhan aka Nickon India is a Full Stack Developer, YouTuber, and Digital Creator based in Noida, India.",
  "email": "nikhilchauhan0618@gmail.com",
  "alumniOf": { "@type": "CollegeOrUniversity", "name": "Amity University" }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {/* 2. Wrap everything in the body with the ThemeProvider */}
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
