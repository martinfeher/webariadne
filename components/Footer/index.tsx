"use client";
import Link from "next/link";
import NotificationPluginStatus from "@/components/NotificationPluginStatus";
import DataProtectionConsent from "@/components/DataProtectionConsent";

import { useState } from "react";

const Footer = () => {
const [openNotificationPluginStatus, setOpenNotificationPluginStatus] = useState(true);

const clickCloseNotificationPluginStatus = () => {
  setOpenNotificationPluginStatus(false)
}

  return (
    <>
      <footer
        className="wow fadeInUp relative pt-1"
        data-wow-delay=".1s"
      >
        <DataProtectionConsent />
        {openNotificationPluginStatus && (
          <div>
            <NotificationPluginStatus clickCloseNotificationPluginStatus={clickCloseNotificationPluginStatus} />
          </div>
        )}
        <div className="bg-primary/10 pt-4 pb-3 px-[34px] lg:px-0">
          <div className="container max-w-[1040px] px-0 lg:px-7 flex justify-between items-center">
            <div className="text-[10px] md:text-[11px] text-gray-400">
              Copyright ©2023 All rights reserved.
            </div>
            <div className="text-[11px] text-sky-300"><span style={{color: '#ede047'}} className="opacity-90">#Support</span><span className="text-sky-300">Ukraine</span></div>
            <div className="text-[10px] md:text-[11px] text-gray-500">
              <Link
                href="/privacy-policy"
                className="text-body-color hover:text-primary underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
