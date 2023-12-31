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
    setShowConsent(hasCookie("cookieUserConsentAccept"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("cookieUserConsentAccept", "true", {});
    window.location.reload(); // reload page
  };

  if (showConsent) {
    return null;
  }

  return (
    <div>
      {displayCookieSection && (
        <div className="fixed z-60">
          <div id="dataProtectionUserConsentSection" className="fixed bottom-0 left-0 right-0 flex items-center justify-end bg-gray-100 px-4 pt-[16px] pb-[8px] lg:pb-[16px]">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
              <div className="mx-[6px] lg:mr-16 text-[13px] text-gray-800 mb-[3px] xl:mb-0">
                This website uses cookies to improve user experience and google
                analytics. By using our website you consent to all cookies in
                accordance with our{" "} 
                <Link href="/cookie-policy">Cookie Policy</Link>.
              </div>
              <div className="flex justify-start mt-[6px] lg:mt-0">
                <button
                  id="btnCookieAccpetAll"
                  className="w-[124px] xl:w-[110px] rounded-[9px] xl:rounded-[7px] bg-green-500 pb-[7px] xl:pb-[6px] pt-[8px] xl:pt-[7px] text-[13px] text-white"
                  onClick={() => acceptCookie()}
                >
                  Accept all
                </button>
                <button
                  className="w-[124px] xl:w-[110px] ml-2 rounded-[9px] xl:rounded-[7px] bg-red-700 pb-[7px] xl:pb-[6px] pt-[8px] xl:pt-[7px] text-[13px] text-white"
                  onClick={() => closeCookieSection()}
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataProtectionConsent;