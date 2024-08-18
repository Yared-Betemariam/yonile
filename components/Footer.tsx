"use client";

import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { navLinks } from "./Nav";

const Footer = () => {
  const date = new Date();
  return (
    <section className=" border-t text-gray-100/95 border-gray-100/15 bg-gray-900">
      <div className="wrapper py-16 flex flex-col md:flex-row items-center justify-between gap-20">
        <div className="flex flex-col items-center md:items-start gap-4 max-w-md">
          <Logo w />
          <p className="text-base opacity-60 font-normal text-center md:text-start leading-7">
            Intero Digital is a globally acclaimed digital marketing agency that
            helps businesses fulfill their potential by leveraging integrated
            digital marketing solutions executed by top industry talent.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-center md:text-start">
          <p className="text-xl opacity-70 uppercase">Links</p>
          <div className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <a
                href={item.href}
                key={item.name}
                className={cn(
                  "text-gray-100/90 scale-110 transition-all duration-300 text-[15px] md:text-[17px]"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 max-w-[20rem] text-center md:text-start">
          <p className="text-xl opacity-70 capitalize">Get in touch</p>
          <p className="text-base opacity-60 font-normal leading-7">
            Ready to talk? We’d love to hear from you. Email us or fill out the
            contact form.
          </p>
          <a
            href="mailto:yoniledigitals@gmail.com"
            className="font-normal underline"
          >
            yoniledigitals@gmail.com
          </a>
        </div>
      </div>
      <div className="border-t border-gray-100/5 bg-zinc-800/20 shadow-md text-center py-6">
        <p className="opacity-40  hover:cursor-pointer hover:opacity-90 duration-200 transition-all text-base   font-normal">
          &copy; {date.getFullYear()} Yonile Digitals. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};
export default Footer;
