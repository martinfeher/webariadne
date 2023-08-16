import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const Download = () => {
  return (
    <>
      <div className="container mt-[150px] text-[14px]">
        <div className="flex">
          <div className="flex flex-col">
            <div>Download</div>
            <div>
              <h3>Change log</h3>
              <div>
                <div>
                  <div>0.91</div>
                  <div>
                    <div>theme added autocomplete</div>
                    <div>characters dots, commas, hyphens, slashes, backslashes </div>
                    <div>price enable, option to display</div>
                    <div>link section enable, option to display</div>
                    {/* <div>update order of rest api, server-side processing update</div> */}
                    <div>price enable exclude</div>
                  </div>
                </div>
                <div>
                  <div>0.90</div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div>Information</div>
        </div>
      </div>
    </>
  );
};

export default Download;
