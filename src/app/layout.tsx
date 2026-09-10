import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Daksh Babbar | Creative Developer & Motion Designer",
  description: "Portfolio of Daksh Babbar — Creative Developer, Motion Designer, and Full-Stack Engineer crafting immersive digital experiences.",
  keywords: ["Daksh Babbar", "Creative Developer", "Motion Graphics", "After Effects", "Full Stack Developer", "Portfolio"],
  openGraph: {
    title: "Daksh Babbar | Creative Developer & Motion Designer",
    description:
      "Portfolio of Daksh Babbar — Creative Developer, Motion Designer, and Full-Stack Engineer crafting immersive digital experiences.",
    images: [
      {
        url: "/sequence/frame_000_delay-0.041s.webp",
        width: 1200,
        height: 630,
        alt: "Daksh Babbar | Creative Developer & Motion Designer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daksh Babbar | Creative Developer & Motion Designer",
    description:
      "Portfolio of Daksh Babbar — Creative Developer, Motion Designer, and Full-Stack Engineer crafting immersive digital experiences.",
    images: ["/sequence/frame_000_delay-0.041s.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-[#050505]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white selection:bg-purple-500 selection:text-white overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
