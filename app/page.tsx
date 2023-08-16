import FeaturesSection from "@/components/Features/FeaturesSection";
import DemoWebariadne from "@/components/DemoWebariadne";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Head from 'next/head'
import type { Metadata } from 'next'

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
// export const metadata: Metadata = {
//   description: 'Webariadne live website search with autocomplete function, content customization, Wordpress search plugin',
// }

export default function Home() {
  return (
    <>
      <Head>
        <title>Webariadne live search | Wordpress plugin</title>
      </Head>
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