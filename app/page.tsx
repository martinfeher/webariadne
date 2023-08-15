import FeaturesSection from "@/components/Features/FeaturesSection";
import DemoWebariadne from "@/components/DemoWebariadne";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";


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
      {/* <div className="container">
        <div className="max-w-[540px] flex justify-start">
          <NewsLatterBox />
        </div>
      </div> */}
    </>

  );
}