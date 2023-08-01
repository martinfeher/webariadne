import FeaturesSectionOne from "@/components/Features/FeaturesSectionOne";
import FeaturesSectionTwo from "@/components/Features/FeaturesSectionTwo";
// import FrontendDemo from "@/components/FrontendDemo";
// import AboutSectionOne from "@/components/About/AboutSectionOne";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
// import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing";
// import Testimonials from "@/components/Testimonials";
// import Video from "@/components/Video";
import Script from "next/script";

import { Poppins } from "@next/font/google";
  const poppins = Poppins({
    weight: '400',
    subsets: ["latin"] });


export default function Home() {
  return (

    <>

      <ScrollUp />
      <Hero />
        <Script src="/js/weawp_search_data.js" />
        <Script src="/js/weawp_search.js" />
      <FeaturesSectionOne />
      <FeaturesSectionTwo />
      {/* <AboutSectionTwo /> */}
      {/* <AboutSectionOne /> */}
      {/* <Pricing /> */}
      <Blog />
      <Contact />
    </>

  );
}