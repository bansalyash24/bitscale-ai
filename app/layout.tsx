import type { Metadata } from "next";
import {Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/SheetTopBar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BitScaleAi",
  description: "Assignment for BitScaleAi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen w-screen flex flex-col overflow-hidden`}
      >
        <Navbar />
        <div className="flex flex-1 h-[calc(100vh-60px)] w-full">
          <Sidebar />
          <div className="flex-1 h-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
