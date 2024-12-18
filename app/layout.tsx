import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link"
import "./globals.css";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <div className="bg-white pl-6 md:flex border-b border-gray-200 z-20 shadow-[0_0_15px_0_rgb(0,0,0,0.1)]">
        <nav>
          <Link
            href="/"
            className="mr-6 flex h-16 items-center space-x-2 xl:w-[236px] xl:border-r xl:pr-4"
          >
            <span className="text-stone-900 font-bold sm:inline-block">
              Fuel Price Finder
            </span>
          </Link>
        </nav>
      </div>
        {children}
      </body>
    </html>
  );
}
