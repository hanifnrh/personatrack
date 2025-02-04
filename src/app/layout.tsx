import Footer from "@/components/ui/footer";
import ResponsiveNavbar from "@/components/ui/navbar";
import type { Metadata } from "next";
import "./globals.css";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: baseUrl ? new URL(baseUrl) : undefined,
  applicationName: "Sonatra",
  title: {
    default: "Analyze Your Music Persona - Sonatra",
    template: "%s | Sonatra"
  },
  keywords: [
    "sonatra",
    "spotify",
    "receiptify",
    "personality",
    "portfolio",
    "website",
  ],
  verification: {
    google: "",
  },
  icons: {
    icon: `/favicon.ico`,
  },
  description:
    "Analyze your music persona based on your top artists on Spotify",
  openGraph: {
    title: "Analyze Your Music Persona - Sonatra",
    url: baseUrl,
    siteName: "Ecofix",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og`,
        alt: "Sonatra",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Analyze Your Music Persona - Sonatra",
    images: [`${baseUrl}/og`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-gradient-to-b from-[#24234b] to-[#000000] min-h-screen`}
      >
        <div className="max-w-sm mx-auto">
          <ResponsiveNavbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
