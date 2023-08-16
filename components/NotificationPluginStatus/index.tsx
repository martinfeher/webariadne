// "use client"; 
import Image from "next/image";
import { useState } from "react";

const NotificationPluginStatus = ({ clickCloseNotificationPluginStatus }) => {

  return (
    <>
        <div className="z-100 fixed inset-x-0 bottom-0 translate-y-0 scale-100 transform pb-2 opacity-100 transition duration-500 ease-out sm:pb-5">
          <div className="mx-auto max-w-screen-sm px-2 sm:px-4" >
          {/* <div className="rounded-[9px] bg-green-500 shadow-lg p-[4px] sm:p-[5px] border border-gray-300" > */}
            <div className="rounded-[9px] bg-blue-200 shadow-lg border border-gray-200" >
              <div className="flex items-center justify-between" >
              {/* <div className="flex flex-wrap items-center justify-between" > */}
                <div className="text-slate-700 text-[13px] px-[4px] py-[12px] sm:py-[14px] ml-[18px]"><a href="/webariadne/plugin/webariadne_wordpress_plugin_beta_v0.91.zip" className="text-sky-800 hover:text-sky-900 hover:underline" download>Beta version</a> of Wordpress plugin is available for you to be installed</div>
                <div className="order-2 flex-shrink-0 sm:order-3 mx-[6px]" >
                  <button
                    type="button"
                    className="group -mr-1 flex rounded-[17px] p-[5px]  hover:bg-blue-300 transition duration-200"
                    aria-label="Hide banner"
                    onClick={()=> clickCloseNotificationPluginStatus()}
                  >
                    <svg
                      className="h-6 w-6 text-white group-hover:text-slate-600 transition duration-200"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    </>
  );
};

export default NotificationPluginStatus;