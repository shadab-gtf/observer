import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next"
const headingFont = localFont({
  src: "../public/assets/fonts/Heading-font.woff2",
  variable: "--font-heading",
});

const regularFont = localFont({
  src: "../public/assets/fonts/Regular.woff2",
  variable: "--font-regular",
});

export const metadata: Metadata = {
  title: "Observer | Creative Studio",
  description: "Boutique creative studio focused on high-end digital experiences.",
  manifest: "/manifest.json",
  themeColor: "#000000",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: {
    icon: "/assets/appstore-images/ios/32.png",
    shortcut: "/assets/appstore-images/ios/32.png",
    apple: "/assets/appstore-images/ios/180.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${regularFont.variable} ${headingFont.variable} antialiased bg-black`}
      >
        <ClientWrapper>
          {children}
        </ClientWrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}
