
export const metadata = {
  title: 'Privacy policy | WebAriadne live search plugin for wordpress platform',
  description: 'Webariadne live website search with autocomplete function, with amdinistration zone customization, wordpress plugin',
  keywords: 'WebAriadne application privacy policy',
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

const PrivacyPolicyPage = () => {
  return (
    <>
      <div className="mt-[100px] mb-[50px]">
         <div className="container text-[11px] text-gray-700 leading-[15px]">
          <h1 className="leading-[30px] text-[15px] mt-[5px]">Privacy Policy for Webariadne</h1>
          <p>At Webariadne, accessible from https://nx.webariadne.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Webariadne and how we use it.</p>
          <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
          <h2 className="leading-[30px] text-[15px] mt-[3px]">Log Files</h2>
          <p>Webariadne follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the <a href="https://www.privacypolicygenerator.org">Privacy Policy Generator</a>.</p>
          <h2 className="leading-[30px] text-[15px] mt-[3px]">Cookies and Web Beacons</h2>
          <p>Like any other website, Webariadne uses &apos;cookies&apos;. These cookies are used to store information including visitors preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users experience by customizing our web page content based on visitors browser type and/or other information.</p>
          <h2 className="leading-[30px] text-[15px] mt-[3px]">Privacy Policies</h2>
          <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Webariadne.</p>
          <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Webariadne, which are sent directly to users browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
          <p>Note that Webariadne has no access to or control over these cookies that are used by third-party advertisers.</p>
          <h2 className="leading-[30px] text-[15px] mt-[3px]">Third Party Privacy Policies</h2>
          <p>Webariadne&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>
          <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers respective websites.</p>
          <h2 className="leading-[30px] text-[15px] mt-[3px]">Children s Information</h2>
          <p>If you think that your child provided any information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
          <h2 className="leading-[30px] text-[15px] mt-[3px]">Online Privacy Policy Only</h2>
          <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Webariadne. This policy is not applicable to any information collected offline or via channels other than this website.</p>
          <h2 className="leading-[30px] text-[15px] mt-[3px]">Consent</h2>
          <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>									
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
