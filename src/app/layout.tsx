import type { Metadata } from "next";
import { SN_Pro } from "next/font/google"; // 1. Import the font
import Navbar from "./component/Navbar";
import "./globals.css";
import LenisProvider from "./providers/LenisProvider";
import Footer from "./component/Footer";
const snPro = SN_Pro({
  subsets: ["latin"],
  variable: "--font-sans", 
  display: "swap",
});

export const metadata: Metadata = {
  title: "Resume analyzer",
  description: "AI resume analyzer that is ATS friendly", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body className={`${snPro.variable} font-sans min-h-full flex flex-col bg-[#0D0D0D] text-[#E5E4E2] antialiased`}>
        <LenisProvider>
          <Navbar/>
            <span>
              {children}
            </span>
            <Footer/>
        </LenisProvider>
      </body>
    </html>
  );
}