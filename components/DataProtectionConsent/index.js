"use client";

import React, { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";

const DataProtectionConsent = (props) => {
  const [showConsent, setShowConsent] = useState(true);
  const [displayCookieSection, setdisplayCookieSection] = useState(true);

  const closeCookieSection = () => {
    setdisplayCookieSection(false);
  }

  useEffect(() => {
    setShowConsent(hasCookie("cookiesConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("cookiesConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div>
      {displayCookieSection && (
        <div className="fixed z-40">
          <div className="fixed bottom-0 left-0 right-0 flex items-center justify-end bg-gray-100 px-4 py-[14px]">
            <span className="mr-16 text-[13px] text-gray-800">
              This website uses cookies to improve user experience and google
              analytics. By using our website you consent to all cookies in
              accordance with our <Link  href="/cookie-policy">Cookie Policy</Link>.
            </span>
            <button
              className="rounded-[7px] bg-green-500 px-6 pt-[7px] pb-[6px] text-[13px] text-white"
              onClick={() => acceptCookie()}
            >
              Accept all
            </button>
            <button className="ml-2 rounded-[7px] bg-red-700 px-6 pt-[7px] pb-[6px] text-[13px] text-white" onClick={()=> closeCookieSection()}>
              Decline
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataProtectionConsent;