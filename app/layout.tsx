"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "../styles/weawp_search.min.css";
import "../styles/index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;  
}) {

  return (
    <html lang="en">
      <body>
          <Providers>
            <div className="flex min-h-screen flex-col justify-between">
              <Header />
              {children}
              <Footer />
            </div>
            <ScrollToTop />
          </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
