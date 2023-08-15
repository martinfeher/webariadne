import Contact from "@/components/Contact";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";

const ContactPage = () => {
  return (
    <>
      <div className="mt-[150px]">
        <div className="container">
          <h2 className="text-[17px] font-[600] text-gray-600 mb-[20px]">Contact Form</h2>
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
