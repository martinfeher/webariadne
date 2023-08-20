import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate, path } = blog;
  
  return (
    <>
      <div
        className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark"
        data-wow-delay=".1s"
      >
        {/* <Link href="/" className="relative block h-[220px] w-full">
          <Image src={image} alt="image" fill />
        </Link> */}
        <div className="p-3 md:px-6 md:py-6">
          <Link href={path}>
            <h3 className="mb-4 block text-[19px] text-black">
              {title}
            </h3>
            <p className="mb-3 text-[14px] font-[200] leading-[21px] text-gray-700 border-b border-body-color border-opacity-10">
              {paragraph}
            </p>
          </Link>
          <div className="flex">
             {/* <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="w-full">
               <h4 className="mb-1 text-sm font-medium text-dark">
                  By {author.name}
                </h4>
                <p className="text-xs text-body-color">{author.designation}</p>
              </div>
            </div> */}
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
