import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { cn, font2 } from "@/lib/utils";

/* eslint-disable react/no-unescaped-entities */
const HeroSection = () => {
  return (
    <div className=" overflow-hidden relative border-b border-gray-900/10 text-gray-100">
      <Image
        src={"/about.jpg"}
        alt="Us"
        width={1280}
        height={800}
        className="absolute min-w-[50%] min-h-full my-auto overflow-hidden right-0 h-auto object-center object-cover maskimage opacity-20 -z-40"
      />
      <div className="pattern2 absolute inset-0 opacity-10 bg-black/20 -z-10 " />
      <div className="absolute inset-0 bg-primary -z-50" />
      <section className="wrapper py-20 flex-col gap-12 md:gap-20 md:flex-row md:items-center">
        <div className="flex flex-col items-center justify-center text-center py-6 gap-12 lg:flex-1">
          <div className="flex items-center">
            <h1
              className={cn(
                "text-4xl md:text-6xl leading-[3.5rem] md:leading-[5.75rem] font-bold drop-shadow-md capitalize",
                font2.className
              )}
            >
              grow your business with{" "}
              <span className="font-bold bg-gray-100 text-primary m-2 whitespace-nowrap p-2 px-4">
                digital marketing.
              </span>
            </h1>
          </div>
          <p className="text-base md:text-xl md:leading-[2rem] font-medium max-w-xl opacity-70">
            Our agency leverages social media to 2-10x your customers with
            digital marketing and differnt ads campains
          </p>
          <Link href={"/contact"}>
            <Button
              size={"lg"}
              variant={"secondary"}
              className="font-semibold bg-gray-100 text-primary h-14 px-12 shadow-md hover:bg-gray-100/80 text-2xl hover:text-primary duration-300 transition-all rounded-none"
            >
              Let's work
            </Button>
          </Link>
        </div>
        {/* <div className="relative w-[65%] md:w-[35%] animate-puls lg:w-[30%] h-80 md:h-96 flex items-center justify-center overflow-hidden mx-auto">
        <Image
          src={"/heroweb.png"}
          className="origin-center w-60 lg:w-64 object-contain z-10 drop-shadow-md"
          alt="hero"
          fill
        />
      </div> */}
      </section>
    </div>
  );
};
export default HeroSection;
