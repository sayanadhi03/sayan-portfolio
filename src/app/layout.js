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

export const metadata = {
  title: "Sayan Adhikary",
  description:
    "Full-Stack Developer & Software Engineer - Creating innovative digital solutions with modern web technologies",
  keywords:
    "Sayan Adhikary, Full Stack Developer, Software Engineer, React, Next.js, Node.js, JavaScript, Web Development",
  authors: [{ name: "Sayan Adhikary" }],
  creator: "Sayan Adhikary",
  openGraph: {
    title: "Sayan Adhikary - Full-Stack Developer",
    description:
      "Full-Stack Developer & Software Engineer - Creating innovative digital solutions with modern web technologies",
    url: "https://sayan-adhikary.com",
    siteName: "Sayan Adhikary Portfolio",
    images: [
      {
        url: "/portfolio image.jpg",
        width: 1200,
        height: 630,
        alt: "Sayan Adhikary - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayan Adhikary - Full-Stack Developer",
    description:
      "Full-Stack Developer & Software Engineer - Creating innovative digital solutions with modern web technologies",
    images: ["/portfolio image.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/portfolio image.jpg",
        sizes: "32x32",
        type: "image/jpeg",
      },
      {
        url: "/portfolio image.jpg",
        sizes: "16x16",
        type: "image/jpeg",
      },
    ],
    shortcut: "/portfolio image.jpg",
    apple: {
      url: "/portfolio image.jpg",
      sizes: "180x180",
      type: "image/jpeg",
    },
    other: [
      {
        rel: "icon",
        url: "/portfolio image.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        rel: "icon",
        url: "/portfolio image.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ff6b35" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Sayan Adhikary" />
        <link rel="canonical" href="https://sayan-adhikary.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
