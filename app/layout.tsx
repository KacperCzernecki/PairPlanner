import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./ui/Nav/Nav";
import Breadcrumbs from "./ui/Breadcrumbs/Breadcrumbs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pair Planner",
  description: "Plan your life together",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col md:flex-row">
        <Nav />
        <main className="flex-1 ">
          <Breadcrumbs />
          <div className="px-5 lg:px-9 py-5 lg:py-7 ">{children}</div>
        </main>
      </body>
    </html>
  );
}
