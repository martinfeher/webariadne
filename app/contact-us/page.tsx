import Contact from "@/components/Contact";

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
    </>
  );
};

export default ContactPage;
