import Contact from "@/components/Contact";

export const metadata = {
  title: 'Contact us | WebAriadne live search ui',
  description: 'Webariadne live website search with autocomplete function, with amdinistration zone customization, wordpress plugin',
  keywords: 'WebAriadne application contact us',
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

const ContactPage = () => {
  return (
    <>
      <div className="mt-[150px]">
        <div className="container">
          <h2 className="mb-[20px] text-[17px] font-[600] text-gray-600">
            Contact Form
          </h2>
        </div>
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
