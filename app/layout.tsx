"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "../styles/weawp_search.min.css";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { useTheme } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;  
}) {

  return (
    <html lang="en">
    {/* <html suppressHydrationWarning lang="en"> */}
      <body className="dark:bg-black">
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
