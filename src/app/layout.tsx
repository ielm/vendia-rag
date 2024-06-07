import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import cx from "@/utils/cx";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://eliza.ielm.io"),
  title: {
    default: "ELIZA",
    template: "ELIZA | %s",
  },
  description: "Eliza is your personal assistant to help you navigate Vendia's digital landscape.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Eliza, by Ivan Leon",
    description: "Eliza is your personal assistant to help you navigate Vendia's digital landscape.",
    url: "https://eliza.ielm.io",
    siteName: "Eliza",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Eliza, by Ivan Leon",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className={cx(inter.className, "text-sm md:text-base bg-zinc-100 dark:bg-zinc-900")}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-5M83YHVWTK" />
    </html>
  );
}
