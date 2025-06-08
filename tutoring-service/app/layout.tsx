import type { Metadata } from "next";
import { Open_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { StudentLevelProvider } from "./context/StudentLevelContext";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tutoring Service",
  description: "A sample tutoring service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-white w-full">
          <div className="h-16">
            <NavBar />
          </div>
          <StudentLevelProvider>{children}</StudentLevelProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
