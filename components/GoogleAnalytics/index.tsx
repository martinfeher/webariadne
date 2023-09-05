"use client";
import Script from "next/script";
import React, { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";
const GoogleAnalytics = ({ GA_TRACKING_ID }: { GA_TRACKING_ID: string }) => {

  useEffect(() => {
    setcookieUserConsentAccept(hasCookie("cookieUserConsentAccept"));
  }, []);

  const [cookieUserConsentAccept, setcookieUserConsentAccept] = useState(false);

  return (
    <>
     
      {cookieUserConsentAccept && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
      )}
      {cookieUserConsentAccept && (
        <Script src="/assets/webariadne/frontend/google-analytics.js" />
      )}
    </>
  );
};

export default GoogleAnalytics;