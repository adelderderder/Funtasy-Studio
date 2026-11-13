
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FUNTASY STUDIO® — Independent Creative Universe",
  description:
    "An independent creative studio exploring typography, digital art, graphic design and visual experiments.",
  keywords: [
    "Funtasy Studio",
    "Typography",
    "Font Foundry",
    "Graphic Design",
    "Digital Art",
    "Creative Studio",
  ],
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
