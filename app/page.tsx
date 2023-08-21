import FeaturesSection from "@/components/Features/FeaturesSection";
import DemoWebariadne from "@/components/DemoWebariadne";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import { Poppins } from "@next/font/google";



  const poppins = Poppins({
    weight: '200',
    // weight: ["200", "400"],
    style: ['normal', 'italic'],
    subsets: ["latin"] 
  });

export const metadata = {

  title: 'WebAriadne live search ui',
  description: 'WordPress search plugin to help visitors to find relevant information in posts, page, products',
  keywords: 'live search, user customization, Wordpress plugin, audio search',
  icons: {
    icon: [{ url: '/images/favicon/favicon.ico' }, new URL('/images/favicon/favicon.ico', 'https://nx.webariadne.com')],
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
        <div className="container relative m-auto z-10 rounded-md px-7 sm:px-8 xl:px-12 pb-1 pt-6 md:pt-10"
          style={{maxWidth:'1100px'}}
        >
          <div className="max-w-[440px]">
            <NewsLatterBox />
          </div>
      </div>
    </>
  );
}