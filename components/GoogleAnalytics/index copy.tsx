"use client";
import Script from "next/script";
import { CookiesProvider, useCookies } from "react-cookie";
const GoogleAnalytics = ({ GA_TRACKING_ID }: { GA_TRACKING_ID: string }) => {

const [cookies, setCookie, removeCookie] = useCookies(['cookiesConsent']);

// console.log('cookies');
// console.log(cookies);
// console.log(cookies.cookiesConsent );


  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;