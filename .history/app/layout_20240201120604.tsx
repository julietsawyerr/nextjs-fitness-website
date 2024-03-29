import type { Metadata } from "next";
import { sans, mont } from "@/app/ui/fonts"
import "./globals.css";



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
      <body className={`${sans.variable} ${mont.variable} `}>{children}</body>
    </html>
  );
}
