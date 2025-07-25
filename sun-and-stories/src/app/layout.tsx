import type { Metadata } from "next";
import { Inter, Playfair_Display, Great_Vibes, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Table 4 Six | Connecting Strangers Over Sunday Brunch",
  description: "Join a handpicked group of strangers for meaningful conversations over Sunday brunch in Mumbai with Table 4 Six.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} ${montserrat.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
