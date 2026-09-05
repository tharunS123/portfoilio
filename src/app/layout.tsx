import type { Metadata } from "next";
import {
  Archivo,
  Bodoni_Moda,
  Instrument_Sans,
  JetBrains_Mono,
  Shantell_Sans,
} from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const shantellSans = Shantell_Sans({
  variable: "--font-shantell",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Assumes the Vercel project is named `tharun`, which claims this URL.
  // Change here if the project is named something else.
  metadataBase: new URL("https://tharun.vercel.app"),
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
      // Next 16 no longer overrides scroll-behavior during navigation;
      // this opts back in so the anchor nav stays smooth.
      data-scroll-behavior="smooth"
      className={`${archivo.variable} ${bodoni.variable} ${instrumentSans.variable} ${jetbrainsMono.variable} ${shantellSans.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
