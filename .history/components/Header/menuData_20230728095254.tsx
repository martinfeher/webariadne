import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Features",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 4,
    title: "Blog",
    newTab: false,
    submenu: [
      {
        id: 43,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
    ],
  {
    id: 42,
    title: "Contact Us",
    path: "/contact-us",
    newTab: false,
  },
  },
];
export default menuData;
