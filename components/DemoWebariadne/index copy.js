"use client";
import { useState } from 'react';
import Script from "next/script";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DemoWebariadne() {

  const [demoWebariadne, setDemoWebariadne] = useState('frontend');


  const [demoSectionActive, setdemoSectionActive] = useState(false);
  const clickDemoSection = () => {
    setdemoSectionActive(true)
  }

  return (
    <div className="container h-auto min-h-[150px] w-[1200px]"
        //   style={ demoSectionActive ? { 
        //     marginBottom: '275px'
        //     // height: '400px'
        //   } :
        //   {
        //     marginBottom: '0'
        //     // height: '105px'
        //   }
        // }
    >
        <Script src="/assets/webariadne/weawp_search_data.js" />
        <Script src="/assets/webariadne/admin/weawp_search.min.js" />
        <Script src="/assets/webariadne/frontend/weawp_search.min.js" />

    <div className="flex">
      <div className="flex">
        <div className={`${demoWebariadne === 'frontend' ? 'text-slate-800' : 'text-slate-600'} w-[90px] py-[6px] text-center rounded-l-[4px] bg-slate-50 hover:bg-slate-200 hover:text-slate-800 text-[12px]  border-l border-r border-t border-b border-gray-300 cursor-pointer`}  onClick={() => setDemoWebariadne('frontend')} >Frontend</div>
        <div className={` ${demoWebariadne === 'admin' ? 'text-slate-800' : 'text-slate-600'} w-[90px] py-[6px] text-center rounded-r-[4px] bg-slate-50 hover:bg-slate-200 hover:text-slate-800 text-[12px]  border-r border-t border-b border-gray-300 cursor-pointer`} onClick={() => setDemoWebariadne('admin')}>Admin</div>
      </div>
    </div>

      <div className="pt-[25px] pb-[27px] px-[25px] bg-gray-200 rounded-b-[12px] rounded-r-[12px] rounded-[4px]"
        onClick={()=> clickDemoSection()} 
          style={ demoSectionActive ? { 
            // marginBottom: '300px'
            height: '400px'
          } :
          {
            // marginBottom: '0'
            height: '105px'
          }
        }
        >
        <div id="weawp_search_frontend" className={`${demoWebariadne !== 'frontend' ? 'hidden' : ''} h-[43px]`}></div> 
        <div id="weawp_search_admin" className={`${demoWebariadne !== 'admin' ? 'hidden' : ''}`}></div> 
      </div>
    </div>
  )
}
