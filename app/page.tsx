import FeaturesSection from "@/components/Features/FeaturesSection";
import DemoWebariadne from "@/components/DemoWebariadne";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import { Poppins } from "@next/font/google";
import Script from "next/script";
import Head from 'next/head'

  const poppins = Poppins({
    weight: '200',
    style: ['normal', 'italic'],
    subsets: ["latin"] 
  });

export const metadata = {
  title: 'WebAriadne live search ui',
  description: 'WordPress search plugin to help visitors to find relevant information in a quick manner',
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

export default function Home({data, locale}) {  

  return (
    <>
      <div>
        <Head>
          <Script
            id="webariadne_homepage_structured_markup"
            type="application/ld+json"
          >
            {`
          "@context": "https://schema.org/",
          "@type": "Page",
          "name": "WebAriadne live search ui",
          "datePublished": "2023-08-16",
          "description": "WordPress search plugin to help visitors to find relevant information in a quick manner.",
        `}
          </Script>
        </Head>
        <ScrollUp />
        <Hero />
        <DemoWebariadne />
        <FeaturesSection />
        <div
          className="container relative z-10 m-auto rounded-md px-7 pb-1 pt-6 sm:px-8 md:pt-10 xl:px-12"
          style={{ maxWidth: "1100px" }}
        >
          <div className="max-w-[440px]">
            <NewsLatterBox mailerLiteApiKey={process.env.MAILERLITE_API_KEY} />
          </div>
        </div>
      </div>
    </>
  );
}