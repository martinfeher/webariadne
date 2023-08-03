"use client";
import { useState } from 'react';
import Script from "next/script";
// import { useMediaQuery } from 'react-responsive';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DemoWebariadne() {

  const [demoWebariadne, setDemoWebariadne] = useState('admin');
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

          <div className="flex flex-col lg:flex-row">
            
            {demoWebariadne === "admin" && (
              <div className="flex flex-row lg:flex-col w-auto lg:w-[190px] pr-[12px] mt-[26px] ">
                
                {demoAdminDescription.map((item, index) => (
                  <div key={index} className="mb-[10px] border border-gray-200 rounded-[8px] cursor-pointer w-[120px] mr-[5px] lg:w-auto">
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
              <div className="weawp_search" id="weawp_search_admin"
                className={`${demoWebariadne !== "admin" ? "hidden" : ""}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
