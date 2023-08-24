"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "../styles/weawp_search.min.css";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Script from "next/script";
import { appWithTranslation } from 'next-i18next';


function RootLayout({
  children,
}: {
  children: React.ReactNode;  
}) {

  return (
    <html lang="en">
      <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
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
export default appWithTranslation(RootLayout);