"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { useTheme } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const { theme, setTheme } = useTheme("light");
  // onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className="dark:bg-black">
        <Providers>
          <Header
          onClick={() => setTheme('light')}  />
          
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
