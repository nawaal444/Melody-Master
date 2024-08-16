import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import '@/components/Navbar'
import Navbar from "@/components/Navbar";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Melody Master",
  description: "A next app to help you with your melodies ;)",
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['./apple.png?v=4'],
    shortcut: ['/apple.png?v=4'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
      <div className="relative w-full flex items-center justify-center">
      <Navbar/>
      </div>
        {children}
      <Footer/>
        </body>
    </html>
  );
}
