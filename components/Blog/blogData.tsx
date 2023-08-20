import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Search user interface",
    paragraph:
      "Search is an important element of a large website in case navigation becomes too complex for visitors to find relevant information. In the usability studies a half of the visitors most of them who are task oriented prefer search user interface, the other part of the users prefer to click through the links from the home page to find the demanded information.",
    image: "",
    // image: "/images/blog/blog-01.jpg",
    author: {
      name: "",
      image: "",
      // image: "/images/blog/author-01.png",
    },
    tags: [""],
    publishDate: "19.8.2023",
    path: '/blog/searchuserinterface',
    // path: '/blog/search-user-interface',
  }
];
export default blogData;
