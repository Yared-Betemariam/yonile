"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { navLinks } from "./Nav";
import { usePathname } from "next/navigation";

const MenuSheet = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger
        className="flex items-center justify-center md:hidden w-full h-full inset-0 rounded-none hover:bg-primary/5 px-1.5 md:hover:bg-white/75 duration-300 group/trigger transition-all border border-gray-900/20"
        asChild
      >
        <IoMenu className="text-gray-800 group-hover/trigger:text-gray-50 duration-300 transition-all" />
      </SheetTrigger>
      <SheetContent className="rounded-none shadow-lg mr-8 mt-16 max-h-[40vh] w-56 py-10 flex flex-col px-8 gap-2">
        {navLinks.map((item) => (
          <SheetClose
            key={item.name}
            className="text-start outline-none focus-visible:outline-none m-0"
          >
            <a
              href={item.href}
              className={cn(
                pathname === item.href
                  ? "text-primary scale-110"
                  : "text-gray-900/90 opacity-80",
                "transition-all duration-300 text-[15px] md:text-[17px]"
              )}
            >
              {item.name}
            </a>
          </SheetClose>
        ))}
        <SheetClose className="text-start outline-none focus-visible:outline-none m-0">
          <a
            href={"/contact"}
            className={cn(
              pathname === "/contact"
                ? "text-primary scale-110"
                : "text-gray-900/90 opacity-80",
              "transition-all duration-300 text-[15px] md:text-[17px]"
            )}
          >
            {"Contact"}
          </a>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};
export default MenuSheet;
