import Image from "next/image";

const FeaturesSectionTwo = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="m-auto flex max-w-[1040px] flex-wrap items-center justify-center">
          <div className="w-full px-4 lg:w-[50%]">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h5 className="mb-4 text-[22px] text-gray-700 ">
                  Easy-to-use user interface to customise search experience.
                </h5>
                <p className="text-base leading-relaxed text-body-color">
                  Customise the style, typography backgorund and text color using admin user interface.
                  You can control the number of the items displayed in the search result window by editing the parameters in the admin dashboard.
                </p> 
              </div>
            </div>
          </div>
          <div className="flex w-full justify-start lg:mr-[4%] lg:w-[45%]">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/15] w-[89%] pr-[60px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/features/user_interface_search_customisation_options.png"
                alt="webariadne user interface customisation options"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSectionTwo;
