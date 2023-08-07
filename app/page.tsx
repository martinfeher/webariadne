import FeaturesSection from "@/components/Features/FeaturesSection";
import FeaturesSectionOne from "@/components/Features/FeaturesSectionOne";
import FeaturesSectionTwo from "@/components/Features/FeaturesSectionTwo";
import DemoWebariadne from "@/components/DemoWebariadne";
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
// import { useState } from 'react'

import { Poppins } from "@next/font/google";
  const poppins = Poppins({
    weight: '400',
    subsets: ["latin"] 
  });

// import { Roboto } from "@next/font/google";
// const roboto = Roboto({
//   weight: '400',
//   subsets: ['latin'],
// })
// import { Lato } from "@next/font/google";
//   const lato = Lato({
//     weight: '400',
//     subsets: ["latin"] 
//   });


// const [demoActive, setdemoActive] = useState('frontend');

export default function Home() {
  return (

    <>
      <ScrollUp />
      <Hero />
      <DemoWebariadne />
      <FeaturesSection />
      {/* <FeaturesSectionOne /> */}
      {/* <FeaturesSectionTwo /> */}
      {/* <AboutSectionTwo /> */}
      {/* <AboutSectionOne /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>

  );
}