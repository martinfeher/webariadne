'use client';
import React, { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";
import nodemailer from "nodemailer"
import { sendEmail } from "../../lib/email";
import WelcomeTemplate from "../../emails/WelcomeTemplate";

const Contact = () => {

  async function handleSubmit(event) {

    event.preventDefault();
    // const formData = new FormData(event.target);
    // formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
    // const object = Object.fromEntries(formData);
    // const json = JSON.stringify(object);
    // const response = await fetch("/api/send-email", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json"
    //     },
    //     body: json
    // });
    // const result = await response.json();
    // if (result.success) {
    //   // console.log(result);
    // }
    // type EmailPayload = {
    //   to: string
    //   subject: string
    //   html: string
    // }

    const emailData = {};

      emailData.fullName = event.target.fullName.value;
      emailData.email = event.target.email.value;
      emailData.message = event.target.message.value;

      // let rqSendObj = { 
      //   "fullName": event.target.fullName.value,
      //   "email": event.target.email.value,
      //   "message": event.target.message.value,
      // }
      
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

      const delayDebounceFn = setTimeout(() => {
        setContactFormSubmittedSuccessFullyMessage(false);
      }, 6000)
      return () => clearTimeout(delayDebounceFn)

    });
  
  }

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [contactFormSubmittedSuccessFullyMessage, setContactFormSubmittedSuccessFullyMessage] = useState(false);

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s">
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        name="fullName"
                        value={name}
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        name="email"
                        value={email}
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={message}
                        rows={5}
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              { contactFormSubmittedSuccessFullyMessage &&
              (<div className="bg-green-500 text-gray-100 text-[14px] w-[450px] px-4 py-3 mt-[10px] rounded-[4px]">Your message has been submitted sucessfully</div>)}
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;