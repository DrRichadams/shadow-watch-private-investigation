import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Roboto,
  Bangers,
  Rubik_Distressed,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const bangers = Bangers({
  variable: "--font-bangers",
  subsets: ["latin"],
  weight: ["400"],
});

const rubik_distressed = Rubik_Distressed({
  variable: "--font-rubik-distressed",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Shadow Watch",
  description:
    "The official website of Shadow Watch, your trusted partner in Private Investigations and Security",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${bangers.variable} ${rubik_distressed.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
