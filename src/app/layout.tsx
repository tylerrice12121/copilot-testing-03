import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Copilot Testing 03 - Welcome",
  description: "A modern web application built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
