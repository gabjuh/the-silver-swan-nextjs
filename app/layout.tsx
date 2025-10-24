import './globals.css';

import { Roboto } from 'next/font/google';

import Footer from './components/Footer';
import Nav from './components/Nav';

import type { Metadata } from "next";
const inter = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Silver Swan",
  description: "Willkommen bei der Konzertreihe The Silver Swan!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  async function getData() {
    const res = await fetch(
      `https://${process.env.NEXT_PUBLIC_BACKEND_API}/data.json`,
      { cache: "no-store" }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }

  

  const data = await getData();

  // Default menu items since API doesn't provide them
  const defaultMenuItems = [
    { sheetId: "1", id: "home", titleEn: "Home", titleDe: "Home", titleHu: "Főoldal", link: "/", active: "1" },
    { sheetId: "2", id: "artists", titleEn: "Artists", titleDe: "Artists", titleHu: "Művészek", link: "/artists", active: "1" },
    { sheetId: "3", id: "concerts", titleEn: "Concerts", titleDe: "Concerts", titleHu: "Koncertek", link: "/concerts", active: "1" },
  ];

  // Default settings since API doesn't provide them
  const defaultSettings = [{
    homepageTitle: "The Silver Swan",
    email: "thesilverswan.bremen@gmail.com",
    emailTooltipTextDe: "E-Mail senden",
    copyright: "© 2025 The Silver Swan"
  }];

  return (
    // <html lang="en" data-theme="dark">
    // <ParallaxProvider>
    // <html lang="de" data-theme="corporate">
    <html lang="de" data-theme={data.settings?.[0].theme ?? ''}>
      <body className={`${inter.className} min-h-[100vh] relative pb-[112px]`}>
        <Nav data={[defaultMenuItems, defaultSettings]} />
        {children}
        <Footer data={defaultSettings} timeStamp={data.timeStamp} />     
      </body>
    </html>
    // </ParallaxProvider>
  );
}
