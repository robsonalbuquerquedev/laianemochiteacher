import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desafio: 1 ano em 14 semanas",
  description: "Acompanhe os vídeos da professora Laiane Mochi e torne-se um poliglota junto com ela!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
