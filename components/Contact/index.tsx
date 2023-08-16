'use client';
import React, { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";
import nodemailer from "nodemailer"
import { sendEmail } from "../../lib/email";
import WelcomeTemplate from "../../emails/WelcomeTemplate";

const Contact = () => {

  async function handleSubmit(event) {

    event.preventDefault();

    const emailData = {};

    fetch("/api/contact", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: event.target.fullName.value,
        email: event.target.email.value,
        message: event.target.message.value,
      })

    }).then(async (result) => {
      setName('');
      setEmail('');
      setMessage('');
      setContactFormSubmittedSuccessFullyMessage(true);
      setBtnSubmitText('Sent');
      setMessageSent(true);

      const delayDebounceFn = setTimeout(() => {
        setContactFormSubmittedSuccessFullyMessage(false);
      }, 7000)
      return () => clearTimeout(delayDebounceFn)

    });
  }

  const [name, setName] = useState<any>('');
  const [email, setEmail] = useState<any>('');
  const [message, setMessage] = useState<any>('');

  const [contactFormSubmittedSuccessFullyMessage, setContactFormSubmittedSuccessFullyMessage] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const [messageSent, setMessageSent] = useState(false);

  const handleClickSubmit = () => {
    setBtnSubmitText('Sending');
  }

  const [btnSubmitText, setBtnSubmitText] = useState('Submit');

  return (
    <section id="contact" className="pb-4">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-4 px-8"
            // <div className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-4 px-8 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s">
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-[13px] text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        name="fullName"
                        value={name}
                        onChange={(e)=>handleNameChange(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-[13px] text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        name="email"
                        value={email}
                        onChange={(e)=>handleEmailChange(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={message}
                        onChange={(e)=>handleMessageChange(e)}
                        rows={5}
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-[13px] text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className={`rounded-md ${messageSent ? 'bg-green-600' : 'bg-primary'} pt-[7px] pb-[5px] px-5 text-[13px] font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp`}
                    onClick={()=> handleClickSubmit()}>
                      {btnSubmitText}
                    </button>
                  </div>
                </div>
              </form>
              { contactFormSubmittedSuccessFullyMessage &&
              (<div className="bg-green-500 text-gray-100 text-[14px] w-auto md:w-[450px] px-4 py-3 mt-[10px] rounded-[4px]">Thank you for contacting webariadne. Your message has been sent successfully.</div>)}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;