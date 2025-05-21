import type { Metadata } from "next";
import { Archivo, Quicksand } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "900"]
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  title: "CleyFi | Change The Way You Money",
  description: "Home or away, local or global — move freely between countries and currencies with CleyFi.",
  keywords: ["banking", "digital banking", "finance", "money transfer", "global payments"],
  openGraph: {
    title: "CleyFi | Change The Way You Money",
    description: "Home or away, local or global — move freely between countries and currencies with CleyFi.",
    url: "https://cleyfi.com",
    siteName: "CleyFi",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CleyFi App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${archivo.variable} ${quicksand.variable} antialiased bg-(--cleyfi-lightBg) text-(--cleyfi-deepPurple)`}>
        {children}
      </body>
    </html>
  );
}
