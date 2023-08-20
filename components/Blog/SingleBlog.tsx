import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate, path } = blog;
  
  return (
    <>
      <div
        className="wow fadeInUp relative overflow-hidden rounded-md bg-white"
        data-wow-delay=".1s"
      >
        <div className="p-3 md:px-6 md:py-6">
          <Link href={path}>
            <h3 className="mb-4 block text-[19px] text-black">
              {title}
            </h3>
            <p className="mb-3 text-[14px] font-[200] leading-[21px] text-gray-700">
              {paragraph}
            </p>
          </Link>
          <div className="flex">
       
            <div className="flex items-center ml-[12px]">
              <h4 className="text-[13px] text-gray-600">Date: </h4>
              <p className="text-[12px] text-gray-400 ml-[7px]">{publishDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
