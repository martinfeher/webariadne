import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <div className="mt-[150px]">
        <div className="container">
          <h2 className="text-[21px] font-[600] text-gray-700 mb-[25px]">Contact Page</h2>
          <div className="text-[15px] text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.
          </div>
        </div>
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
