import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SHENZICHEN — Programmer · AI · Games · Eastern Culture",
  description:
    "A personal space for software, AI experiments, games, and explorations of Eastern culture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
