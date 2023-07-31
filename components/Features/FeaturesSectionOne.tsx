import Image from "next/image";

const FeaturesSectionOne = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center max-w-[1040px] m-auto">
          <div className="w-full flex justify-end lg:w-[45%] lg:mr-[4%]">
            <div
              className="wow fadeInUp relative aspect-[25/18] max-w-[440px] w-[95%] mx-auto mb-12 text-center lg:m-0 pr-[60px]"
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
                  Find the relevant items searching in the titles and descriptions of the Woocommerce products, blog posts, pages. You can enable and exclude each data type from the search results.
                  You can search by the WordPress terms and taxonomies (categories, tags), attributes color, size.
                  You can utilize searching by Sku of the Woocommerce products.
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSectionOne;
