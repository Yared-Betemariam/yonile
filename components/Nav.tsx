"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import MenuSheet from "./MenuSheet";
import { Button } from "./ui/button";

export const navLinks = [
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Works",
    href: "#",
  },
  {
    name: "About",
    href: "/about",
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <header className="w-full gray-100h-12 md:h-[5.5rem] border-b border-gray-900/20">
      <nav className="wrapper flex items-center h-full justify-between">
        <Logo />
        <div className="flex items-center ml-auto gap-6">
          <div className="flex items-center gap-10">
            {navLinks.map((item) => (
              <a
                href={item.href}
                key={item.name}
                className={cn(
                  pathname === item.href
                    ? "text-primary scale-110"
                    : "text-gray-900/95 opacity-80",
                  "transition-all hidden md:block duration-300 text-lg"
                )}
              >
                {item.name}
              </a>
            ))}
            <a href={"/contact"} className="mr-auto">
              <Button
                size={"lg"}
                variant={"secondary"}
                className="font-semibold bg-primary text-gray-100 h-10 px-6 shadow-md hover:bg-primary/90 text-lg hover:text-gray-100 duration-300 transition-all rounded-none"
              >
                Contact
              </Button>
            </a>
          </div>
          <div className="relative md:hidden h-10 w-10">
            <MenuSheet />
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
