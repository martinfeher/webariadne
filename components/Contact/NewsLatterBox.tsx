"use client";

import MailerLite from '@mailerlite/mailerlite-nodejs';
import React, { useState } from "react";
import Link from "next/link";

const NewsLatterBox = () => {

  const mailerlite = new MailerLite({
    api_key: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNmI3Mzc3MzJmMDQzYTNhZTIxZjkxMWY5NGI4NzNkNDNhZDFmNzg4NjYxZTc1ZTQ5YWZlNmE4Y2RiZmEzYTA0NzVlNGRjYWZhOGNmOTBjMGEiLCJpYXQiOjE2OTIwODQ3NDUuOTc0NTU3LCJuYmYiOjE2OTIwODQ3NDUuOTc0NTU5LCJleHAiOjQ4NDc3NTgzNDUuOTY5NTMsInN1YiI6IjU4MjYxMSIsInNjb3BlcyI6W119.FXqNlQZg2HloAbdJtllNRNp0zZulH2c68qhLg3fP5aSq0BHWuWZKM51j1fnqdLfPg0S_cPe_bPAJGWwbF45HxEGuPjRJf6vragYl2nvrXl2_hUcQMcuYg31AlTbPL0wfqaRl-7HJ7vKZ9VX3MnYpHDiFAqCnRRZxacPWhFtx-PF2h0qHknYwz5-ZWZrNqGecAYs_4z_DH9cE6a4U2s3KbrCOvvp7QhUjdcx5JYex0BzB0e8rtR2xYAB6Ac3_fZJ72lBNEK_kcqR9SMhSZIjQXwhrv6RejNhQQijEttYjJGTg8XGILXbc8wJWknJMIQzZKi7Q4NujHR6_fUXv_PaIydhsOIJJP4QdOsagMNHg_6tjabAfoxpIJ4A7YLHWXajg6cv7ZobgkY5iLiDiEdwS8rSC2i-BupIcqaltv2I7JiVo0au_tJbqqnpr9fQAgoA0BFxaG77OUOcYxwD5_mZctz1foDtoCpH3W1XD9jHjov4aH3Jhz--KibVXe8ut90zhgb9yypQ-RsQFIUfweabk8wJmAXZpiJezDSkDWDOJqhL_dDnrtO_Trz_rCLUCp8R_1t4wUfXadxg6NtfEbAxBoTwSdSj5U5BN5W8g_1mpxGZoN8ScrhjDAt_woSxDqiXyHsFaK4kLX83DH-T-5efCHhlOhkZTwvnIJv_d6XVxlWQ'
    // api_key: process.env.MAILERLITE_API_KEY
  });

  const handleSubscribe = () => {
    setSubscribeBtnText('Processing...');

    const params = {
      email: email,
      fields: {},
      groups: ["97056613509105370"], // 97056613509105370 group id of nx.webariadne.com
      status: "active",
      // subscribed_at: null, // yyyy-MM-dd HH:mm:ss
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
        <input
          value={subscribeBtnText}
          className="duration-80 mb-3 w-[114px] cursor-pointer rounded-[5px] border border-transparent bg-primary py-[6px] text-center text-[11px] text-white outline-none transition ease-in-out hover:bg-opacity-80"
          onClick={()=> handleSubscribe()} 
        />
      </form>
      <div className="text-[11px] text-gray-400 font-[200]">By signing up to the newsletter you agree to receiving newsletter by email. You can always unsubcribe via the link in the email, <Link href="/privacy-policy">privacy & policy</Link></div>
      <div className="h-[42px]">
        {displaySubsrciptionMessage && (<div className="w-[380px] px-5 py-[7px] mt-[8px] bg-green-400 text-green-800 text-[12px] rounded-[4px]">You have been successfully subscribed to the newsletter</div>)}
      </div>
    </div>
  );
};

export default NewsLatterBox;
