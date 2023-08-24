import Image from "next/image";

const FeaturesSection = () => {
  return (
    <div>
      <section className="mt-[30px] lg:mt-8">
        <div className="container">
          <div className="m-auto flex flex-col-reverse lg:flex-row flex-wrap max-w-[1040px] items-center justify-center">
            <div className="flex w-full justify-end lg:mr-[4%] lg:w-[45%]">
              <div
                className="wow fadeInUp relative mx-auto mb-0 aspect-[25/18] w-[95%] max-w-[410px] pr-0 lg:pr-[60px] text-center lg:m-0"
                data-wow-delay=".15s">
                <Image
                  src="/images/features/live_search.gif"
                  alt="website search result window"
                  fill
                />
              </div>
            </div>
            <div className="w-full lg:w-[50%] px-4">
              <div className="wow fadeInUp max-w-auto lg:max-w-[470px]" data-wow-delay=".2s">
                <div className="mb-6 lg:mb-9">
                  <h2 className="mb-[5px] text-[15px] md:text-[16px] lg:text-[18px] text-gray-800 ">
                    Live search with autocomplete function
                  </h2>
                  <p className="text-[12px] lg:text-[13px] text-gray-700">
                    You can utilize the search to find relevant information in the blog posts, pages, woocommerce products by searching in the titles and description.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-7 sm:mt-9 lg:mt-8">
        <div className="container">
          <div className="m-auto flex flex-wrap max-w-[1040px] items-center justify-center">
            <div className="w-full lg:w-[50%] px-4">
              <div className="wow fadeInUp max-w-auto lg:max-w-[470px]" data-wow-delay=".2s">
                <div className="mb-6 lg:mb-9">
                  <h2 className="mb-[5px] text-[15px] md:text-[16px] lg:text-[18px] text-gray-800 ">
                    Admin area with customization options
                  </h2>
                  <p className="text-[12px] lg:text-[13px] text-gray-700">
                    The admin dashboard contains easy-to-use user interface to customise the search bar. <br />
                    The administrators can adjust the style, typography backgorund and text color to customize it to the website content.
                    You can edit the style to fit it to the mobile screens.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-end lg:mr-[4%] lg:w-[45%]">
              <div
                className="wow fadeInUp relative mb-0 aspect-[25/18] w-[95%] max-w-[540px] pr-0 lg:pr-[60px] mx-auto text-center"
                data-wow-delay=".15s">
                <Image
                  src="/images/features/editor_admin_area_02.png"
                  alt="webariadne user interface customisation options"
                  fill
                  style={{objectFit: "contain"}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="mt-7 lg:mt-8">
        <div className="container">
          <div className="m-auto flex flex-col-reverse lg:flex-row flex-wrap max-w-[1040px] items-center justify-center">
            <div className="flex w-full justify-end lg:mr-[4%] lg:w-[45%]">
              <div
                className="wow fadeInUp relative mx-auto mb-0 aspect-[25/18] w-[95%] max-h-[280px] pr-[60px] text-center lg:m-0"
                data-wow-delay=".15s">
                <Image
                  src="/images/features/enabling_result_window_content.png"
                  alt="search results customization"
                  fill
                  style={{objectFit: "contain"}}
                />
              </div>
            </div>
            <div className="w-full lg:w-[50%] px-4">
              <div className="wow fadeInUp max-w-auto lg:max-w-[470px]" data-wow-delay=".2s">
                <div className="mb-6 lg:mb-9">
                  <h2 className="mb-[5px] text-[15px] md:text-[16px] lg:text-[18px] text-gray-800">
                    Customize the search content
                  </h2>
                  <p className="text-[12px] lg:text-[13px] text-gray-700">
                    The images providing more information about the blog posts, pages, products can be enabled in the admin area. 
                    The dimensions can be adjusted according to the content of the website. <br />
                    The categories, attributes, Sku information of the products can be enabled to be displayed in the result cards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-7 lg:mt-8 mb-8 md:mb-10 lg:mb-14"> 
        <div className="container">
          <div className="m-auto flex flex-wrap max-w-[1040px] items-center justify-center">
            <div className="w-full lg:w-[50%] px-4">
              <div className="wow fadeInUp max-w-auto lg:max-w-[470px]" data-wow-delay=".2s">
                <div className="mb-6 lg:mb-9">
                  <h2 className="mb-[5px] text-[15px] md:text-[16px] lg:text-[18px] text-gray-800">
                    Work with theme copies
                  </h2>
                  <p className="text-[12px] lg:text-[13px] text-gray-700">
                   You can work with duplicates of created themes if it is required to keep the original attributes and brainstorm interface ideas. 
                    The themes have assigned specific shortcodes, which can be added to the websites content to display the search interface with the applied theme.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-end lg:mr-[4%] lg:w-[45%]">
              <div
                className="wow fadeInUp relative mx-auto mb-0 aspect-[25/18] w-[95%] max-w-[325px] pr-0 lg:pr-[60px] text-center lg:m-0"
                data-wow-delay=".15s">
                <Image
                  src="/images/features/duplicate_theme.gif"
                  alt="webariadne user interface customisation options"
                  fill
                  style={{objectFit: "contain"}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
