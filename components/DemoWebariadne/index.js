"use client";
import { useState } from 'react';
import Script from "next/script";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DemoWebariadne() {

  const [demoWebariadne, setDemoWebariadne] = useState('frontend');
  const [demoSectionActive, setdemoSectionActive] = useState(false);
  const clickDemoFrontendSection = () => {
    setdemoSectionActive(true)
  }

  const handleDemoButtonCLick = (value) => {
    (demoWebariadne === 'admin' && value === 'frontend') && setdemoSectionActive(false)
    setDemoWebariadne(value)
  }

  return (
    <div className="container h-auto min-h-[150px] w-[1200px]">
      <Script src="/assets/webariadne/weawp_search_data.js" />
      <Script src="/assets/webariadne/admin/weawp_search.min.js" />
      <Script src="/assets/webariadne/frontend/weawp_search.min.js" />

      <div className="flex text-[13px] text-gray-600 ">
        <div className="flex w-full flex-col">
          <div className="flex mb-[8px]">
            <div className="flex">
              <div
                className={`${
                  demoWebariadne === "frontend"
                    ? "text-slate-800"
                    : "text-slate-600"
                } w-[90px] cursor-pointer rounded-l-[4px] border-b border-l border-r border-t border-gray-300  bg-slate-50 py-[6px] text-center text-[12px] hover:bg-slate-200 hover:text-slate-800`}
                onClick={() => handleDemoButtonCLick("frontend")}
              >
                Frontend
              </div>
              <div
                className={` ${
                  demoWebariadne === "admin"
                    ? "text-slate-800"
                    : "text-slate-600"
                } w-[90px] cursor-pointer rounded-r-[4px] border-b border-r border-t border-gray-300 bg-slate-50  py-[6px] text-center text-[12px] hover:bg-slate-200 hover:text-slate-800`}
                onClick={() => handleDemoButtonCLick("admin")}
              >
                Admin
              </div>
            </div>
          </div>
          <div className="flex">
          {/* <div className="flex border border-gray-300 rounded-[12px] overflow-hidden"> */}
            {demoWebariadne === "admin" && (
              <div className="mt-[26px] flex w-[190px] flex-col pr-[12px]">
                <div className="mb-[10px]  border border-gray-200 rounded-[8px] cursor-pointer">
                  <div className="mb-[1px] px-[10px] pt-[9px] pb-[1px]">Select theme</div>
                  {/* <div className="mb-[1px] px-[10px] py-[5px] border-b border-gray-150">Select theme</div> */}
                  <div className="ml-[3px] px-[10px] pt-[0] pb-[6px] text-[12px] text-gray-500">
                    In the left menu you can click on the Themes. The secondary sidebar will display the list of the themes.
                  </div>
                </div>
               
                <div className="mb-[10px] px-[12px] py-[10px] border border-gray-200 rounded-[8px] cursor-pointer">
                  <div>Theme style</div>
                  <div className="ml-[3px] text-[12px] text-gray-500">
                    By selecting the Style, the options to edit text, backgorund, typography will appear in the secondary sidebar.
                    {/* By selecting the Style the options to edit text, backgorund, typography will appear in the secondary sidebar. */}
                  </div>
                </div>
                <div className="mb-[10px] px-[12px] py-[10px] border border-gray-200 rounded-[8px] cursor-pointer">
                  <div>Data Types</div>
                  <div className="ml-[3px] text-[12px] text-gray-500">
                    You can select Porducts, Blog posts, Pages data types to be included in the result window.
                  </div>
                </div>
                <div className="mb-[10px] px-[12px] py-[10px] border border-gray-200 rounded-[8px] cursor-pointer">
                  <div className="mb-[1px]">Adding the search bar on the website</div>
                  <div className="ml-[3px] text-[12px] text-gray-500">
                    You can select the shortcode and add it to the website location.
                  </div>
                </div>
                <div className="mb-[10px] px-[12px] py-[10px] border border-gray-200 rounded-[8px] cursor-pointer">
                  <div>Duplicate theme</div>
                  <div className="ml-[3px] text-[12px] text-gray-500">
                     By selecting Duplicate Theme adding inserting name you are able to create a variant of the theme with new attributes.
                  </div>
                </div>
              </div>
            )}
            <div
              className="w-full rounded-[12px] bg-gray-300 px-[25px] pb-[27px] pt-[25px]"
              style={
                demoSectionActive && demoWebariadne === "frontend"
                  ? { height: "410px" }
                  : demoWebariadne === "admin"
                  ? { height: "800px" }
                  : { height: "105px" }
              }
            >
              <div
                id="weawp_search_frontend"
                className={`${
                  demoWebariadne !== "frontend" ? "hidden" : ""
                } h-[43px]`}
                onClick={() => clickDemoFrontendSection()}
              ></div>
              <div
                id="weawp_search_admin"
                className={`${demoWebariadne !== "admin" ? "hidden" : ""}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
