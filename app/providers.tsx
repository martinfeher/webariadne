"use client";

import { ThemeProvider } from "next-themes";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <GoogleReCaptchaProvider reCaptchaKey="6LdTybcnAAAAABmI4S_tMgiq2wijUAevYX6f6-wc">
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
        {children}
      </ThemeProvider>
    // </GoogleReCaptchaProvider>
  );
}
