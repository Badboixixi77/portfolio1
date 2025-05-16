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
  title: "Maxwell Okosun | Frontend Developer",
  description: "Portfolio website of Maxwell Okosun, a Frontend Developer specializing in React, Next.js, and modern web technologies.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/185078084.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/185078084.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
