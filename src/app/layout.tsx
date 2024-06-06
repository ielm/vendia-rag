import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import cx from "@/utils/cx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vendia Guru",
  description: "Vendia Guru is your personal assistant to help you navigate Vendia's digital landscape.",
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
    </html>
  );
}
