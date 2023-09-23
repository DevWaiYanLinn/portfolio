import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppLayOut from "./_utils/components/AppLayOut";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppLayOut>{children}</AppLayOut>
      </body>
    </html>
  );
}
