import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MatchProvider } from "@/core/context/match/matchContext";
import Coupon from "@/components/Coupon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nesine Case",
  description: "Nesine Case by Erkan Kabil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MatchProvider>
          {children}
          <Coupon />
        </MatchProvider>
      </body>
    </html>
  );
}
