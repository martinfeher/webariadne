import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { useTheme } from "next-themes";

import { Poppins } from "@next/font/google";
  const poppins = Poppins({
    weight: '400',
    subsets: ["latin"] });


    

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionTwo />
      <Video />
      <Brands />
      <AboutSectionOne />
  
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
