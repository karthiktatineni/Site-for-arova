"use client";

import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { usePathname } from "next/navigation";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  return (
    <html lang="en" className={`${manrope.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body min-h-screen flex flex-col" suppressHydrationWarning>
        {!isStudio ? (
          <SmoothScrollProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        ) : (
          <main className="flex-grow">{children}</main>
        )}
      </body>
    </html>
  );
}
