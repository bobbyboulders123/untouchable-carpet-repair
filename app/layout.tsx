import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Untouchable Carpet Repair | Premium Carpet Repair & Restoration in Denver",
  description:
    "Untouchable Carpet Repair provides premium carpet stretching, patching, stain repair, threshold replacement, and water-damaged carpet restoration in Denver, Colorado.",
  keywords: [
    "carpet repair Denver",
    "carpet stretching Denver",
    "carpet patch repair Denver",
    "water damaged carpet repair Denver",
    "threshold replacement Denver",
    "Untouchable Carpet Repair",
  ],
  openGraph: {
    title: "Untouchable Carpet Repair",
    description:
      "Premium carpet repair and restoration in Denver, Colorado.",
    url: "https://untouchablecarpetrepair.com",
    siteName: "Untouchable Carpet Repair",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}