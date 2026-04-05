import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tharun Kumar Senthilkumar — Portfolio",
  description:
    "Portfolio of Tharun Kumar Senthilkumar — Full-Stack Developer, Data Science Researcher, CS @ Purdue University",
  keywords: [
    "Tharun Kumar",
    "Purdue",
    "Computer Science",
    "Full Stack Developer",
    "Portfolio",
  ],
  openGraph: {
    title: "Tharun Kumar Senthilkumar — Portfolio",
    description:
      "Full-Stack Developer & Data Science Researcher at Purdue University",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
