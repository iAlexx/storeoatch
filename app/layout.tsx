import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "دكانك | SyriaStore Builder Investor Platform",
  description:
    "Apple Vision Pro inspired 3D investor platform for a mobile-first SaaS commerce builder."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
