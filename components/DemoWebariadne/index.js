"use client";
import { useState } from 'react';
import Script from "next/script";
// import { useMediaQuery } from 'react-responsive';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DemoWebariadne() {

  const [demoWebariadne, setDemoWebariadne] = useState('frontend');
  // const [demoWebariadne, setDemoWebariadne] = useState('admin');
  const [demoSectionActive, setdemoSectionActive] = useState(false);
  const clickDemoFrontendSection = () => {
    setdemoSectionActive(true)
  }

  const handleDemoButtonCLick = (value) => {
    (demoWebariadne === 'admin' && value === 'frontend') && setdemoSectionActive(false)
    setDemoWebariadne(value)
  }
  // const isTabletOrMobile = useMediaQuery({ maxWidth: settings.loaded ? parseInt(settings.loaded.Responsivity['mobileBP']) : 1224 })

  let demoAdminDescription = [
      {
        title: 'Select theme',
        description: 'In the left menu you can click on the Themes. The secondary sidebar will display the list of the themes.',
        descriptionMobileScreenOpen: false,
      },
      {
        title: 'Theme style',
        description: 'By selecting the Style, the options to edit text, backgorund, typography will appear in the secondary sidebar.',
        descriptionMobileScreenOpen: false,
      },
      {
        title: 'Data Types',
        description: 'You can select Products, Blog posts, Pages data types to be included in the result window.',
        descriptionMobileScreenOpen: false,
      },
      {
        title: 'Adding search bar',
        // title: 'Adding the search bar on the website',
        description: 'You can select the shortcode and add it to the website location.',
        descriptionMobileScreenOpen: false,
      },
      {
        id: 4,
        title: 'Duplicate theme',
        description: 'By selecting Duplicate Theme adding inserting name you are able to create a variant of the theme with new attributes.',
        descriptionMobileScreenOpen: false,
      }
    ]

    const [openDescritonSelectTheme, setOpenDescritonSelectTheme] = useState(demoAdminDescription);

    const toggleDescriptionSelectTheme = (index) => {

      setOpenDescritonSelectTheme(prevFields => {
        const newItems = [...openDescritonSelectTheme];    
        newItems[index] = {
          ...newItems[index],
          descriptionMobileScreenOpen: !openDescritonSelectTheme[index].descriptionMobileScreenOpen
        };
        return newItems;
      });
    }

  return (
    
    <div className="container h-auto min-h-[150px] w-auto xl:w-[1330px] px-[2px] lg:px-4 mb-[6px]">
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
                    ? "bg-slate-500"
                    : "bg-slate-600"
                } w-[90px] cursor-pointer rounded-l-[6px] border-b border-l border-r border-t border-gray-300 text-white py-[6px] text-center text-[12px] hover:bg-sky-700`}
                onClick={() => handleDemoButtonCLick("frontend")}
              >
                Frontend
              </div>
              <div
                className={` ${
                  demoWebariadne === "admin"
                  ? "bg-slate-500"
                  : "bg-slate-600"
                } w-[90px] cursor-pointer rounded-r-[6px] border-b border-r border-tborder-gray-300  text-white py-[6px] text-center text-[12px] hover:bg-sky-700`}
                onClick={() => handleDemoButtonCLick("admin")}
              >
                Admin
              </div>
            </div>
          </div>

          {/* <div className="flex"> */}
          <div className="flex flex-col lg:flex-row">
            {demoWebariadne === "admin" && (
                <div className="hidden lg:flex flex-col w-auto lg:w-[170px] pr-[2px] mt-[26px] ">
                  {/* <div className="flex flex-row lg:flex-col w-auto lg:w-[170px] pr-[2px] mt-[26px] "> */}
                {demoAdminDescription.map((item, index) => (
                  <div key={index} className="mb-[10px] border border-gray-200 rounded-[8px] cursor-pointer mr-[5px] w-0 md:w-auto">
                  {/* <div key={index} className="mb-[10px] border border-gray-200 rounded-[8px] cursor-pointer mr-[5px] w-[120px] w-0 md:w-auto"> */}
                    <div className="flex items-center h-[25px] mb-[1px] px-[10px] pt-[6px] pb-[6px] lg:pb-0 text-center lg:text-left" onClick={()=> toggleDescriptionSelectTheme(index)}><div>{item.title}</div></div>
                      {openDescritonSelectTheme[index].descriptionMobileScreenOpen === true && (
                        <div className={`ml-[3px] px-[10px] pt-[0] pb-[6px] text-[12px] text-gray-500 h-auto`}>
                          {/* <div className={`ml-[3px] px-[10px] pt-[0] pb-[6px] text-[12px] text-gray-500 hidden lg:block text-left ${openDescritonSelectTheme[index].descriptionMobileScreenOpen === true ? '!block' : ''} `}> */}
                          {item.description}
                        </div>
                      )}
                      {openDescritonSelectTheme[index].descriptionMobileScreenOpen !== true && (
                        <div className={`ml-[3px] px-[10px] pt-[0] pb-[6px] text-[12px] text-gray-500 h-0 lg:h-auto text-left`}>
                          {item.description}
                        </div>
                      )}
                  </div>
                  ))
                }
              </div>
            )}
            <div
              className={`w-full rounded-[5px] xs:rounded-[7px] sm:rounded-[9px] md:rounded-[12px] bg-gray-300 px-[6px] pb-[9px] pt-[9px] sm:px-[18px] sm:pb-[20px] sm:pt-[18px] md:px-[25px] md:pb-[27px] md:pt-[25px]
                ${demoSectionActive && demoWebariadne === "frontend" ? 'h-[410px]' : demoWebariadne === "admin" ? 'h-[1360px] md:h-[800px]' : 'h-[105px]' }
              `}
            >
              <div
                id="weawp_search_frontend"
                className={`${
                  demoWebariadne !== "frontend" ? "hidden" : ""
                } h-[43px]`}
                onClick={() => clickDemoFrontendSection()}
              ></div>
              <div id="weawp_search_admin" className={`weawp_search ${demoWebariadne !== "admin" ? "hidden" : ""}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}