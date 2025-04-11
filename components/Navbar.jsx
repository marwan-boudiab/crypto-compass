"use client"
import { LINKS } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = ({
  containerStyles,
  linkStyles,
  markStyles,
  side = false,
}) => {
  const pathname = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {LINKS.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize text-[0.875rem] font-bold ${linkStyles}`}
          >
            <div
              className={`flex gap-x-4 items-center ${markStyles} ${
                link.path == pathname
                  ? `${
                      side ? "rounded-xl" : "rounded-full"
                    } bg-white text-muted p-2`
                  : "hover:bg-muted p-2 rounded-xl"
              }`}
            >
              {side && link.icon}
              {link.name}
            </div>
          </Link>
        );
      })}
    </nav>
  );
};
export default Nav;
