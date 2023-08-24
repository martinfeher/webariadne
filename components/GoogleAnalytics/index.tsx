"use client";
import Script from "next/script";
import React, { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";
const GoogleAnalytics = ({ GA_TRACKING_ID }: { GA_TRACKING_ID: string }) => {

  useEffect(() => {
    setCookiesConsent(hasCookie("cookiesConsent"));
  }, []);

  const [cookiesConsent, setCookiesConsent] = useState(false);

  return (
    <>
      {cookiesConsent && cookiesConsent && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
      )}
      {cookiesConsent && cookiesConsent && (
        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_TRACKING_ID}');
        `}
        </Script>
      )}
    </>
  );
};

export default GoogleAnalytics;