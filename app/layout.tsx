import { ThemeProvider } from "@/components/theme-provider"
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

import { Toaster } from "@/components/ui/sonner"
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });
import Navbar from '@/components/home/bottom-navbar';
import PoweredBy from "@/components/common/powered";

export const metadata = {
  manifest: '/manifest.json',
  metadataBase: new URL('https://ghostprotocols.pk'),
  title: "Buy & Sell Cars in Pakistan - Get Your Ride Now.",
  description: "Proudly providing unusual Car Needs in Pakistan. Buy & Sell Cars. List Your Car Now and let the Ghosts Work.",
};


export default function  RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <meta property="og:image" content="<generated>" />
      <meta property="og:image:type" content="<generated>" />
      <meta property="og:image:width" content="<generated>" />
      <meta property="og:image:height" content="<generated>" />
      <meta name="twitter:image" content="<generated>" />
<meta name="twitter:image:type" content="<generated>" />
<meta name="twitter:image:width" content="<generated>" />
<meta name="twitter:image:height" content="<generated>" />
      <GoogleAnalytics gaId="G-SF9SDMRQKF" />
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          
          <Header/>
          {/* <Navbar/> */}
          <main className="main">
            {children}
          </main>
          <Toaster />
          <PoweredBy/>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
