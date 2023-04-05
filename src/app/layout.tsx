import "./globals.css";
import { ReactNode } from "react";
import { Roboto } from "next/font/google";

const font = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Keepstraight",
  description: "Keep the scores for your Straightpool game!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
