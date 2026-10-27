import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Office Hours Bot",
  description: "A course-grounded study companion for 70-445.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
