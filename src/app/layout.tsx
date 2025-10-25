import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components";
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
  title: "FourBtech Frontend Developer Intern Task ",
  description:
    "This project was developed as part of the Frontend Developer Intern Evaluation Process for FourBtech. It converts a Figma design into a fully responsive and interactive Next.js application, focusing on clean code structure, component reusability, and UI/UX precision",
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
        <div className="min-h-screen flex flex-col">
          <div className="grow-1">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
