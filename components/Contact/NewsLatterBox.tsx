import MailerLite from '@mailerlite/mailerlite-nodejs';

const NewsLatterBox = () => {

  const mailerlite = new MailerLite({
    api_key: "API_KEY"
  });

  return (
    <div
      className="container relative m-auto z-10 rounded-md px-7 sm:px-8 xl:px-12 py-2 md:py-4"
      // className="wow fadeInUp container relative z-10 rounded-md bg-primary/[3%] px-4 md:px-8 xl:px-12 py-2 md:py-4"
      style={{maxWidth:'1100px'}}
    >
      <h3 className="mb-3 text-[13px] leading-tight text-gray-500">
        Stay up-to-date on the latest news, articles and tools
      </h3>
      <form className="flex flex-col">
        <input
          type="email"
          name="email"
          placeholder="Enter your email" 
          className="mb-3 w-[260px] rounded-md border border-body-color border-opacity-10 py-[7px] px-6 text-[12px] text-body-color placeholder-body-color outline-none focus:border-sky-400 focus:border-opacity-100 focus-visible:shadow-none"
        />
        <input
          type="submit"
          value="Subscribe"
          className="duration-80 mb-3 w-[130px] cursor-pointer rounded-[5px] border border-transparent bg-primary py-[6px] text-center text-[12px] text-white outline-none transition ease-in-out hover:bg-opacity-80"
        />
      </form>
    </div>
  );
};

export default NewsLatterBox;
