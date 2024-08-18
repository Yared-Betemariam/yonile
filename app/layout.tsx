/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { FaPhone } from "react-icons/fa";
import "./globals.css";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yonile Digitals",
  description: "We provide different services",
  icons: [
    {
      rel: "icon",
      url: "/logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="pattern fixed inset-0 opacity-[0.012]" />
        <Nav />
        <section className="bg-gray-800 sticky top-0 z-50 h-16  md:h-14 text-sm md:text-base border-b border-gray-100/30 font-light flex items-center">
          <div className="wrapper text-gray-100 flex items-center md:justify-between md:gap-2 gap-0.5 flex-col md:flex-row">
            <p>
              We are offereing special discounts for our services this month.
            </p>
            <a
              href=""
              className="text-blue-400 flex  items-center gap-3 underline font-medium"
            >
              Call us <FaPhone className="rotate-90 text-sm" /> +291 1919 1919
              19
            </a>
          </div>
        </section>
        {children}
        <Footer />
      </body>
    </html>
  );
}
