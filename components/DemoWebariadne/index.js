"use client";
import { useState } from 'react';
import Script from "next/script";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DemoWebariadne() {

  const [demoWebariadne, setDemoWebariadne] = useState('frontend');

  return (
    <div className="container h-auto min-h-[150px] w-[1100px]">
        <Script src="/assets/webariadne/weawp_search_data.js" />
        <Script src="/assets/webariadne/admin/weawp_search.min.js" />
        <Script src="/assets/webariadne/frontend/weawp_search.min.js" />

      <div className="flex">
        <div className={` ${demoWebariadne === 'frontend' ? 'text-slate-800' : 'text-slate-600'} w-[75px] py-[7px] text-center hover:text-slate-800 bg-slate-200 border border-slate-300 cursor-pointer rounded-[5px] text-[12px]`} onClick={() => setDemoWebariadne('frontend')}>Frontend</div>
        <div className={` ${demoWebariadne === 'admin' ? 'text-slate-800' : 'text-slate-600'} w-[75px] py-[7px] text-center text-slate-600  hover:text-slate-800 bg-slate-200  border border-slate-300 cursor-pointer rounded-[5px] text-[12px] ml-2`} onClick={() => setDemoWebariadne('admin')}>Admin</div>
      </div>
      <div className="py-2">
        <div id="weawp_search_frontend" className={`${demoWebariadne !== 'frontend' ? 'hidden' : ''} h-[43px]`}></div> 
        <div id="weawp_search_admin" className={`${demoWebariadne !== 'admin' ? 'hidden' : ''}`}></div> 
      </div>
    </div>
  )
}
