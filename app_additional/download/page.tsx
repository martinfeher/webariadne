import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

export const metadata = {
  title: 'Download | WebAriadne live search plugin for wordpress platform',
  description: 'Webariadne live website search with autocomplete function, with amdinistration zone customization, wordpress plugin',
  keywords: 'WebAriadne application download',
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

const Download = () => {
  return (
    <>
      <div className="container mt-[150px] text-[14px]">
        <div className="flex">
          <div className="flex flex-col">
            <div>Download</div>
            <div>
              <h3>Change log</h3>
              <div>
                <div>
                  <div>0.91</div>
                  <div>
                    <div>theme added autocomplete</div>
                    <div>characters dots, commas, hyphens, slashes, backslashes </div>
                    <div>price enable, option to display</div>
                    <div>link section enable, option to display</div>
                    {/* <div>update order of rest api, server-side processing update</div> */}
                    <div>price enable exclude</div>
                  </div>
                </div>
                <div>
                  <div>0.90</div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div>Information</div>
        </div>
      </div>
    </>
  );
};

export default Download;
