import Contact from "@/components/Contact";
import Head from 'next/head'

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact us | Webariadne live search</title>
      </Head>
      <div className="mt-[150px]">
        <div className="container">
          <h2 className="mb-[20px] text-[17px] font-[600] text-gray-600">
            Contact Form
          </h2>
          {/* <div className="text-[15px] text-gray-500">
              You can leave a message 
          </div> */}
        </div>
        <Contact />
      </div>
      {/* <div className="container">
        <div className="max-w-[540px] flex justify-start">
          <NewsLatterBox />
        </div>
      </div> */}
    </>
  );
};

export default ContactPage;
