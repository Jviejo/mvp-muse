
import type { Metadata } from "next";
import Header from "@/components/headerFooter/Header";
import Footer from "@/components/headerFooter/Footer";
import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "muse scene labs",
  description: "muse scene labs",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          <main className="h-5/6">{children}</main>
          
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
