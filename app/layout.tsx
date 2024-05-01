import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ErrorBoundary from './ErrorBoundary';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Family Cladding - Construction Company",
  description: "Family Cladding is a construction company providing high-quality services.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ErrorBoundary>
    <html lang="en">
      <body className={inter.className}>
        < Header />
        {children}
        <Footer />
        </body>
    </html>
    </ErrorBoundary>
  );
}
