import React from "react";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "TeckFirm – Comprehensive Technology Solutions",
  description: "TeckFirm offers cutting-edge web development, mobile development, cloud solutions, and comprehensive technology services to transform your business.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
