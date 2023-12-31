import Link from "next/link";


export const metadata = {
    title: 'Cookie policy | WebAriadne live search plugin for wordpress platform',
    description: 'Webariadne live website search with autocomplete function, with amdinistration zone customization, wordpress plugin',
    keywords: 'WebAriadne application cookie policy',
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
  
  const CookiePolicy = () => {
    return (
      <>
        <div className="mb-[50px] mt-[100px]">
          <div className="container text-[11px] leading-[15px] text-gray-700">
            <h1 className="mt-[5px] text-[15px] leading-[30px]">
              Cookie Policy for WebAriadne
            </h1>
            <p>
              This is the Cookie Policy for WebAriadne, accessible from
              https://nx.webariadne.com
            </p>
            <h2 className="mt-[3px] text-[15px] leading-[30px]">
              What Are Cookies
            </h2>
            <p>
              As is common practice with almost all professional websites this
              site uses cookies, which are tiny files that are downloaded to
              your computer, to improve your experience. This page describes
              what information they gather, how we use it and why we sometimes
              need to store these cookies. We will also share how you can
              prevent these cookies from being stored however this may downgrade
              or &apos;break&apos; certain elements of the sites functionality.
            </p>

            <h2 className="mt-[3px] text-[15px] leading-[30px]">
              How We Use Cookies
            </h2>
            <p>
              We use cookies for a variety of reasons detailed below.
              Unfortunately in most cases there are no industry standard options
              for disabling cookies without completely disabling the
              functionality and features they add to this site. It is
              recommended that you leave on all cookies if you are not sure
              whether you need them or not in case they are used to provide a
              service that you use.
            </p>

            <h2 className="mt-[3px] text-[15px] leading-[30px]">
              Disabling Cookies
            </h2>
            <p>
              You can prevent the setting of cookies by adjusting the settings
              on your browser (see your browser Help for how to do this). Be
              aware that disabling cookies will affect the functionality of this
              and many other websites that you visit. Disabling cookies will
              usually result in also disabling certain functionality and
              features of the this site. Therefore it is recommended that you do
              not disable cookies.
            </p>

            <h2 className="mt-[3px] text-[15px] leading-[30px]">
              The Cookies We Set
            </h2>
            <p>Site preferences cookies</p>
            <p>
              In order to provide you with a great experience on this site we
              provide the functionality to set your preferences for how this
              site runs when you use it. In order to remember your preferences
              we need to set cookies so that this information can be called
              whenever you interact with a page is affected by your preferences.
            </p>

            <h2 className="mt-[3px] text-[15px] leading-[30px]">
              Third Party Cookies
            </h2>
            <p>
              In some special cases we also use cookies provided by trusted
              third parties. The following section details which third party
              cookies you might encounter through this site.
            </p>
            <p>
              This site uses Google Analytics which is one of the most
              widespread and trusted analytics solution on the web for helping
              us to understand how you use the site and ways that we can improve
              your experience. These cookies may track things such as how long
              you spend on the site and the pages that you visit so we can
              continue to produce engaging content.
            </p>
            <p>
              For more information on Google Analytics cookies, see the official
              Google Analytics page.
            </p>

            <h2 className="mt-[3px] text-[15px] leading-[30px]">
              More Information
            </h2>
            <p className="mb-1">
              Hopefully that has clarified things for you and as was previously
              mentioned if there is something that you aren&apos;t sure whether
              you need or not it&apos;s usually safer to leave cookies enabled
              in case it does interact with one of the features you use on our
              site.
            </p>

            <p className="mb-1">
              However if you are still looking for more information then you can
              contact us through one of our preferred contact methods:
            </p>
            <p className="mb-1">
              Email:
              <a href="mailto:support@webariadne.com">
                support@webariadne.com
              </a>
            </p>
          </div>
        </div>
      </>
    );
  };
  
  export default CookiePolicy;
  