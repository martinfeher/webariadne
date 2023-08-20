import Breadcrumb from "@/components/Blog/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Search user interface | WebAriadne blog',
  description: 'Search user interface article',
  keywords: 'blog post WebAriadne, search user interface',
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

const SearchUserInterfacePage = () => {
  return (
    <>
      <Breadcrumb pageName="Search user interface" description="" />
      <section className="pb-[30px] pt-[30px]">
        <div className="container text-[14px] font-[200] leading-[21px] text-gray-700">
          <div className="mb-[12px]">
            Search is an important element of a large website in case navigation
            becomes too complex for visitors to find relevant information. In
            the usability studies a half of the visitors most of them who are
            task oriented prefer search user interface, the other part of the
            users prefer to click through the links from the home page to find
            the demanded information. There is a group of people with
            mixed-behaviour using the search user interface and the link tree.
          </div>
          <div className="mb-[12px]">
            Well-placed website search is available for users in any situation
            You can put the search on the sidebar or in the website menu to be
            accessible for the visitors if they need a quick access to the user
            interface. If the visitors don&quot;t know the exact path of the links
            they can use the search to quickly sail to the specific post.
          </div>
          <div className="mb-[12px]">
            If your website is using images to illustrate the posts, you can use
            the thumbnails in the search results. Since we have a sense of
            balance you can use space around the blocks of the content.
          </div>
          <div className="mb-[14px] flex flex-col">
            <div className="mb-[8px]">
              <Image
                src="/blog/search-user-interface/design_desktop.jpg"
                alt="search result window full screen layout"
                width={624}
                height={300}
                className=""
              />
            </div>
            <Image
              src="/blog/search-user-interface/design_mobile_search_results.jpg"
              alt="search result window responsive layout"
              width={240}
              height={240}
              className="mb-[8px]"
            />
          </div>
          <div className="mb-[12px]">
            <div className="mb-[5px]">
              To adjust the layout of the search results window you can:
            </div>
            <ul className="ml-[12px] list-disc text-[13px]">
              <li className="ml-[12px]">
                adjust width and height of the illustration images
              </li>
              <li className="ml-[12px]">number of description lines</li>
              <li className="ml-[12px]">
                display or disable supporting information: categories,
                attributes, tags{" "}
              </li>
            </ul>
          </div>
          <div className="mb-[12px]">
            For mobile devices you can alter the dimensions of the results cards
            for them to be better selectable and the readability of text by
            settling the font size.
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchUserInterfacePage;
