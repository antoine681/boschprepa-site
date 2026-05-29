import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-red-hat",
  weight: ["300", "400", "500", "600", "700"],
});

const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.woff2",
  display: "swap",
  variable: "--font-cal",
  weight: "600",
});

export const metadata: Metadata = {
  title: "BoschPrepa — Préparateur moteur · Perpignan",
  description:
    "Atelier de préparation moteur à Perpignan (66) : passage au banc, montage, usinage, machines proto vario. Travail à la cote, finitions soignées, performance mesurée.",
  metadataBase: new URL("https://boschprepa.fr"),
  openGraph: {
    title: "BoschPrepa — Préparateur moteur",
    description:
      "Préparation moteur, banc de puissance et usinage à Perpignan. Du bloc nu à la courbe de couple.",
    type: "website",
    locale: "fr_FR",
  },
  icons: {
    icon: "/brand/submark-light.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${redHat.variable} ${calSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
