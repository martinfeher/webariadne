import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-[55%]">
            <div
              className="wow fadeInUp relative aspect-[25/18] mx-auto mb-12 text-center lg:m-0 pr-[60px]"
              // className="wow fadeInUp relative aspect-[25/18] max-h-[320px] mx-auto mb-12 text-center lg:m-0 pr-[60px]"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/features/fe-sc_01.jpg"
                alt="website search result window"
                fill
                // width={440}
                // height={320}
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-[45%]">
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

export default AboutSectionTwo;
