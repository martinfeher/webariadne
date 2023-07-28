import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                // src="/images/about/about-image-2.svg"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h5 className="mb-4 text-[22px] text-gray-700 ">
                Live search with autocomplete function
                </h5>
                <p className="text-base leading-relaxed text-body-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="mb-9">
                <h5 className="mb-4 text-[22px] text-gray-700 ">
                Search in in blog post, page, product titles and description.
                </h5>
                <p className="text-base leading-relaxed text-body-color">
                </p>
              </div>
              {/* <div className="mb-1">
                <h5 className="mb-4 text-[22px] text-black ">
                  Optimization of data processing, adaptive search client-side, server-side processing
                </h5>
                <p className="text-base leading-relaxed text-body-color">
                  Client-side processing speeds up the performance of the search. Passing the limit the 
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
