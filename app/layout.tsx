import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EqualVoice PH — End Gender-Based Violence",
  description:
    "A gender-responsive platform promoting awareness, equality, and empowerment by addressing gender-based violence in the Philippines and worldwide.",
  keywords: [
    "gender-based violence",
    "GBV",
    "gender equality",
    "Philippines",
    "women empowerment",
    "VAWC",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
