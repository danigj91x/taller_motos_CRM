import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ConsentimientoCookiesProvider } from "@/components/cookies/ConsentimientoCookies";
import BannerCookies from "@/components/cookies/BannerCookies";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MotoTaller Demo",
  description:
    "Taller de motos ficticio «MotoTaller Demo». Base del proyecto montada con Next.js, TypeScript y Tailwind CSS.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ConsentimientoCookiesProvider>
          <Header />
          {children}
          <Footer />
          <BannerCookies />
        </ConsentimientoCookiesProvider>
      </body>
    </html>
  );
}
