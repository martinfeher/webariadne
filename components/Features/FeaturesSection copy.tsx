import Image from "next/image";

const FeaturesSection = () => {
  return (
    <div>
      <section className="py-5">
        <div className="container">
          <div className="m-auto flex max-w-[1040px] flex-wrap items-center justify-center">
            <div className="flex w-full justify-end lg:mr-[4%] lg:w-[45%]">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[25/18] w-[95%] max-w-[440px] pr-[60px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/features/live_search.gif"
                  alt="website search result window"
                  fill
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-[50%]">
              <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                <div className="mb-9">
                  <h5 className="mb-4 text-[22px] text-gray-700 ">
                    Live search with autocomplete function
                  </h5>
                  <p className="text-base leading-relaxed text-body-color">
                    {/* You can search by to blog posts, page, product titles and description */}
                    You can utilise the search to findinformation in the blog posts, pages,
                    woocommerce products. 
                    The search by search in the titles and description.
                    {/* Find relevant information searching in the titles and descriptions of the WooCommerce products, blog posts, pages. You can enable and exclude each data type from the search results.
                  You can search by the WordPress terms and taxonomies (categories, tags), attributes color, size.
                  You can utilize searching by Sku of the Woocommerce products. */}
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="m-auto flex max-w-[1040px] flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-[50%]">
              <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                <div className="mb-9">
                  <h5 className="mb-4 text-[22px] text-gray-700 ">
                    Customise the style with live editor in the admin area.
                  </h5>
                  <p className="text-base leading-relaxed text-body-color">
                    The admin dashboard contains easy-to-use user interface to customise search interface.
                    The administrators can adjust the style, typography backgorund and text color to customise it to the website content.
                    You can adjust the style to the mobile screens.
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
      <section className="py-5">
        <div className="container">
          <div className="m-auto flex max-w-[1040px] flex-wrap items-center justify-center">
            <div className="flex w-full justify-end lg:mr-[4%] lg:w-[45%]">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[25/18] w-[95%] max-w-[440px] pr-[60px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  // src="/images/features/live_search.gif"
                  alt="website search result window"
                  fill
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-[50%]">
              <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                <div className="mb-9">
                  <h5 className="mb-4 text-[22px] text-gray-700 ">
                    Enabling information being displayed in the search results.
                  </h5>
                  <p className="text-base leading-relaxed text-body-color">
                    The images providing more information about the blog posts, pages, products can be enabled in the admin area. 
                    The dimensions can be adjusted to fit the content.
                    The product categories, attributes, sku can be enabled to be displayed in the search results cards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="m-auto flex max-w-[1040px] flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-[50%]">
              <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                <div className="mb-9">
                  <h5 className="mb-4 text-[22px] text-gray-700 ">
                    Easy to create interface themes
                  </h5>
                  <p className="text-base leading-relaxed text-body-color">
                    You can work with duplicates of created themes if it is required to keep the original attributes and brainstorm interface ideas. 
                    The themes have assigned specific shortcodes, which can be added to the websites content to display the search interface with the applied theme.
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
                  // src="/images/features/user_interface_search_customisation_options.png"
                  alt="webariadne user interface customisation options"
                  fill
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
