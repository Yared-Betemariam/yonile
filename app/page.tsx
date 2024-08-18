import HeroSection from "@/components/HeroSection";
import Ready from "@/components/Ready";
import TestimonialsSection from "@/components/TestimonialsSection";
import { cn, font2 } from "@/lib/utils";
import { MessageSquareText, MousePointerClick, Notebook } from "lucide-react";
import Image from "next/image";
import { BiMoney } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  const threeServices = [
    {
      Icon: MessageSquareText,
      title: "Establish social idendity",
      desc: "Using social media to give your business identity and well known credebitltiy in the public",
    },
    {
      Icon: MousePointerClick,
      title: "Ads compaigns",
      desc: "Running social media ads to your intended customers, telling them that your business presents the solution",
    },
    {
      Icon: Notebook,
      title: "Branding",
      desc: "Branding your busniess future with the right methods and practices used by big companies",
    },
  ];
  return (
    <main className="flex flex-col flex-1">
      <HeroSection />
      <section>
        <div className="wrapper flex flex-col gap-10 items-center justify-center pb-20 pt-32">
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4 companyimages">
            <Image
              src="/companies/canal.svg"
              width={1000}
              height={1000}
              alt="partner logo"
              className="w-44 md:w-52"
            />
            <Image
              src="/companies/dstv.png"
              width={1000}
              height={1000}
              alt="partner logo"
              className="w-44 md:w-52"
            />
            <Image
              src="/companies/canal.svg"
              width={1000}
              height={1000}
              alt="partner logo"
              className="w-44 md:w-52"
            />
            <Image
              src="/companies/dstv.png"
              width={1000}
              height={1000}
              alt="partner logo"
              className="w-44 md:w-52"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper py-20">
          <div className="flex items-center flex-col md:flex-row justify-between gap-12 md:gap-8 lg:gap-10">
            {threeServices.map((item, i) => (
              <div
                key={i}
                className={cn(
                  "p-10 py-12 border bg-white border-gray-900/20 shadow-xl flex flex-col gap-4 max-w-md",
                  i === 1 && "md:mb-80"
                )}
              >
                <item.Icon className="w-14 h-14 text-primary drop-shadow" />
                <p className={cn("text-3xl font-bold text", font2.className)}>
                  {item.title}
                </p>
                <p className="opacity-80 font-normal text-base lg:text-lg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-primary/10 border-y border-gray-900/20">
        <div className="wrapper py-20 flex flex-col justify-center gap-8 items-center">
          <p className="text-3xl opacity-80 font-bold bg-primary brightness-110 glow2 text-white px-4 py-2">
            Our goal
          </p>
          <h2
            className={cn(
              "text-4xl md:text-[2.65rem] max-w-[30ch] leading-[3rem] md:leading-[4rem] text-center font-bold opacity-90",
              font2.className
            )}
          >
            Our digital agency boosts your business on social media, connecting
            you with potential customers in a{" "}
            <span className="text-emerald-600">friendly way.</span>
          </h2>
        </div>
      </section>
      <section>
        <div className="wrapper flex gap-20 flex-col md:flex-row  py-20 items-center">
          <Image
            src="/dominate.png"
            alt="Domination of social media"
            width={1000}
            height={1000}
            className="min-w-[44%] max-w-md mask"
          />
          <div className="flex flex-col gap-6 text-center md:text-start md:gap-10">
            <h3
              className={cn(
                "text-5xl lg:text-[3.25rem] lg:leading-[4rem] font-bold",
                font2.className
              )}
            >
              <span className="text-primary">Social Media</span> is{" "}
              <em className="underline">dominating</em> attention
            </h3>
            <p className="opacity-80 text-xl">
              Socal medias are growing more than ever grabing attention of
              peoples all over ethiopia and the world. TV, radios and other
              advertising methods are less effective now for pitching business.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper flex flex-col py-20 text-center gap-12 md:gap-16 items-center justify-center">
          <h3
            className={cn(
              "text-5xl lg:text-[3.25rem] lg:leading-[4rem] font-bold",
              font2.className
            )}
          >
            <span>We</span> is{" "}
            <em className="underline text-primary">Leverage</em> social media
            for growth
          </h3>

          <p className="opacity-80 max-w-[38ch] text-xl">
            Socal medias are growing more than ever grabing attention of peoples
            all over ethiopia and the world. TV, radios and other advertising
            methods are less effective now for pitching business.
          </p>
          <div className="relative group/social hover:scale-[1.03] duration-300 ease-in-out transition-all bg-white  p-6 px-8 simpleborder hover:bg-white/90 rounded-none shadow-xl gap-6 flex flex-col ">
            <div className="grid grid-cols-3 gap-6 business_info">
              <div className="flex flex-col items-start simpleborder bg-black/[0.03] rounded-none p-3 px-4 gap-1">
                <p className="text-sm opacity-60">Profits</p>
                <div className="text-emerald-600 text-sm md:text-lg gap-1 flex items-center">
                  <FaArrowTrendUp /> <p>+120%</p>
                </div>
              </div>
              <div className="flex flex-col items-start simpleborder bg-black/[0.03] rounded-none p-3 px-4 gap-1">
                <p className="text-sm opacity-60">Customers</p>
                <div className="text-emerald-600 text-sm md:text-lg gap-1 flex items-center">
                  <BsPerson /> <p>+22</p>
                </div>
              </div>
              <div className="flex flex-col items-start simpleborder bg-black/[0.03] rounded-none p-3 px-4 gap-1">
                <p className="text-sm opacity-60">Revenue</p>
                <div className="text-emerald-600 text-sm md:text-lg gap-1 flex items-center">
                  <BiMoney /> <p>+81000</p>
                </div>
              </div>
            </div>
            <Image
              src="/together.png"
              alt="Domination of social media"
              width={700}
              height={200}
              className="w-[34rem] opacity-70 bg-black/[0.03]   rounded-none simpleborder p-8"
            />
            <span className="w-3 h-3 rounded-full group-hover/social:ring-2 group-hover/social:bg-transparent bg-primary absolute top-3 right-3 duration-300 ease-in-out transition-all" />
          </div>
        </div>
      </section>
      <TestimonialsSection />
      <Ready />
    </main>
  );
}
