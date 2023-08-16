import FeaturesSection from "@/components/Features/FeaturesSection";
import DemoWebariadne from "@/components/DemoWebariadne";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";

import { Poppins } from "@next/font/google";
  const poppins = Poppins({
    weight: '400',
    subsets: ["latin"] 
  });


// import { Lato } from "@next/font/google";
//   const lato = Lato({
//     weight: '400',
//     subsets: ["latin"] 
//   });

export const metadata = {
  title: 'WebAriadne live search',
  description: 'WordPress search plugin to help visitors to find relevant information in posts, page, products',
  keywords: 'live search, user customization, Wordpress plugin, audio search',
  icons: {
    icon: [{ url: '/images/favicon/favicon.ico' }, new URL('/images/favicon/favicon.ico', 'https://nx.webariadne.com')],
    // shortcut: ['/shortcut-icon.png'],
    apple: [
      { url: '/images/favicon/apple-touch-icon.png' },
      { url: '/images/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/images/favicon/android-chrome-192x192.png',
      },
    ],
  },
}


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