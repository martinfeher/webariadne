import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Script from "next/script";

export const metadata = {
  title: 'Blog | WebAriadne live search',
  description: 'WordPress search plugin blog',
  keywords: 'blog page WebAriadn website',
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

const Blog = () => {
  return (
    <>
      <head>
        <Script
          id="webariadne_blog_structured_markup"
          type="application/ld+json"
        >
          {`
            "@context": "https://schema.org/",
            "@type": "Page",
            "name": "Blog WebAriadne",
            "datePublished": "2023-08-16",
            "description": "You can read articles about search user interface.",
          `}
        </Script>
      </head>
      <Breadcrumb
        pageName="Blog"
        description=""
      />
      <section className="pt-[10px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-start">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="mt-[40px] container">
        <div className="relative flex justify-start z-10 rounded-md pl-2 xl:pl-5 pr-7 sm:pr-8 xl:pr-12 pb-1 pt-2 md:pt-4"
          style={{maxWidth:'480px'}}
        >
          <NewsLatterBox mailerLiteApiKey={process.env.MAILERLITE_API_KEY} />
        </div>
      </div>
    </>
  );
};

export default Blog;
