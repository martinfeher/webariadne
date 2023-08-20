import { Menu } from "@/types/menu";

const menuData : Menu[] = [
  {
    id: 1,
    title: "Features",
    path: "/",
    newTab: false,
    submenu: [],
  },
    {
    id: 2,
    title: "Blog",
    path: "/blog",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Search user interface",
        path: "/search-user-interface",
        newTab: false,
      }
    ],
  },
  {
    id: 2,
    title: "Contact Us",
    path: "/contact-us",
    newTab: false,
    submenu: [],
  }
];

export default menuData;
