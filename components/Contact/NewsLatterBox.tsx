"use client";

import MailerLite from '@mailerlite/mailerlite-nodejs';
import React, { useState } from "react";
import Link from "next/link";

const NewsLatterBox = ({mailerLiteApiKey}) => {

  const mailerlite = new MailerLite({
    api_key: mailerLiteApiKey
  });

  const handleSubscribe = () => {
    setSubscribeBtnText('Processing...');

    const params = {
      email: email,
      fields: {},
      groups: ["97056613509105370"],
      status: "active",
      subscribed_at: null, // yyyy-MM-dd HH:mm:ss
      ip_address: null,
      opted_in_at: null, // yyyy-MM-dd HH:mm:ss
      optin_ip: null,
      unsubscribed_at: null // yyyy-MM-dd HH:mm:ss
    };
    
    mailerlite.subscribers.createOrUpdate(params)
      .then(response => {
        setEmail('');
        setSubscribeBtnText('Subscribed');
        setDisplaySubsrciptionMessage(true);
        const delayDebounceFn = setTimeout(() => {
          setDisplaySubsrciptionMessage(false);
        }, 7000)
        return () => clearTimeout(delayDebounceFn)

      })
      .catch(error => {
        if (error.response) console.log(error.response.data);
      });
  }

  const [email, setEmail] = useState('');
  const [displaySubsrciptionMessage, setDisplaySubsrciptionMessage] = useState(false);
  const [subscribeBtnText, setSubscribeBtnText] = useState("Subscribe");

  return (
    <div>
      <h3 className="mb-[9px] text-[13px] text-gray-600">
        Stay up-to-date on the latest news, articles and tools
      </h3>
      <form className="flex flex-col">
        <input
          type="email"
          name="email"
          placeholder="Your email" 
          className="mb-3 w-[260px] rounded-md border border-body-color border-opacity-10 py-[7px] px-4 text-[12px] text-body-color placeholder-body-color outline-none focus:border-sky-400 focus:border-opacity-100 focus-visible:shadow-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="mb-3">
          <input
            value={subscribeBtnText}
            className="duration-80 -mb-[1px] w-[114px] cursor-pointer rounded-[5px] border border-transparent bg-primary py-[6px] text-center text-[11px] text-white outline-none transition ease-in-out hover:bg-opacity-80"
            onClick={()=> handleSubscribe()} 
          />
        </div>
      </form>
      <div className="text-[11px] text-gray-400 font-[200]">By signing up to the newsletter you agree to receiving newsletter by email. You can always unsubcribe via the link in the email, <Link href="/privacy-policy">privacy & policy</Link></div>
      <div className="h-[42px]">
        {displaySubsrciptionMessage && 
        (<div className="w-auto md:w-[380px] px-5 py-[7px] mt-[8px] bg-green-400 text-green-800 text-[12px] rounded-[4px]">You have been successfully subscribed to the newsletter</div>)}
      </div>
    </div>
  );
};

export default NewsLatterBox;
