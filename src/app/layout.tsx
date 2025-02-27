import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Système de Tickets",
  description: "Application de gestion de tickets",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
