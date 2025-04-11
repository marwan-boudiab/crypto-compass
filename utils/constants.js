import { FaBitcoinSign, FaHouse, FaNewspaper } from "react-icons/fa6";

const LINKS = [
  { path: "/", name: "home", icon: <FaHouse className="size-5" /> },
  {
    path: "/cryptocurrencies",
    name: "cryptocurrencies",
    icon: <FaBitcoinSign className="size-5" />,
  },
  { path: "/news", name: "news", icon: <FaNewspaper className="size-5" /> },
];

const OPTIONS = { precision: 3, space: true };

export { LINKS, OPTIONS };
