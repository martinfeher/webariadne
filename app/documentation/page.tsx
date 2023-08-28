import Link from "next/link";

export const metadata = {
    title: 'Documentation | WebAriadne live search plugin for wordpress platform',
    description: 'Webariadne live website search with autocomplete function, with amdinistration zone customization, wordpress plugin',
    keywords: 'WebAriadne application Documentation, Wordpress plugin installation, processing type',
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
  
  const Documentation = () => {
    return (
      <>

        <div className="mb-[50px] mt-[120px]">
          <div className="container text-[11px] leading-[16px] text-gray-700">
            <div className="mb-[10px]">
              <h2 className="text-[13px] text-gray-700">Installation</h2>
              <div className="px-3 pt-[7px] pb-[10px] text-gray-600">The plugin file can be downloaded from the <a href="/webariadne/plugin/webariadne_wordpress_plugin_v0.93.zip" className="text-sky-800 hover:text-sky-900 hover:underline">link</a>. In the administration zone of Wordpress choose Plugins &gt; Add new. Click Upload Plugin at the top of the page. After the installation is complete, click Activate Plugin.</div>
            </div>
            <div className="mb-[10px]">
              <h2 className="text-[13px] text-gray-700">Create a new theme</h2>
              <div className="px-3 pt-[7px] pb-[10px] text-gray-600">In the administration zone to create a new theme you can select the duplicate theme button. You can specify the new theme name in the input field, click on the confirm button.</div>
            </div>
            <div className="mb-[10px]">
              <h2 className="text-[13px] text-gray-700">
                Processing type limit 
              </h2>
              <div className="px-3 pt-[7px] pb-[10px] text-gray-600">
                You can adjust the limit when the search starts processing the data in an asynchronous manner. If the count of website searchable items passes the limit, the search data are not downloaded initially. 
                As a rule of thumb, the limit can be closer to the higher band if you don&apos;t require searching in the description field.
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  

  export default Documentation;
  