import Footer from "@/components/ui/footer";
import ResponsiveNavbar from "@/components/ui/navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personalify",
  description: "Describe your music personality",
  keywords: [
    "personalify",
    "spotify",
    "receiptify",
    "personality",
    "portfolio",
    "website",
  ],
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
          <ResponsiveNavbar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
