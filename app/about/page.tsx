/* eslint-disable react/no-unescaped-entities */
import Ready from "@/components/Ready";
import { Button } from "@/components/ui/button";
import { cn, font2 } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  const recentWorks = [
    {
      title: "Companies",
      number: 20,
    },
    {
      title: "Years Experience",
      number: 4,
    },
    {
      title: "Happy Clients",
      number: 35,
    },
  ];
  return (
    <main>
      <section className="bg-gradient-to-r from-white to-white/10 relative border-b border-gray-900/20 overflow-hidden">
        <Image
          src={"/about.jpg"}
          alt="Us"
          width={1280}
          height={800}
          className="absolute min-w-[50%] min-h-full my-auto overflow-hidden right-0 -z-10 h-auto object-center opacity-40 object-cover maskimage"
        />
        <div className="wrapper    py-20 flex flex-col gap-10 ">
          <div className="flex flex-col gap-10">
            <span className="text-lg bg-primary/90 text-white  w-fit brightness-110 p-3 py-1">
              About us
            </span>
            <h1
              className={cn(
                "text-5xl leading-[3.75rem] md:text-6xl md:leading-[4.75rem] max-w-[22ch]  font-bold",
                font2.className
              )}
            >
              We help business with grow using social media and digital
              marketing
            </h1>
          </div>
          <div className="flex gap-8 items-center w-full max-w-xl justify-between mt-4">
            {recentWorks.map((item) => (
              <div
                key={item.title}
                className="flex hover:scale-125 drop-shadow-xl transition-all duration-300 cursor-pointer  flex-col gap-4 items-start justify-start"
              >
                <span className="text-5xl md:text-[4rem] font-semibold text-primary">
                  {item.number}+
                </span>
                <p className="text-lg opacity-60">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="wrapper py-20">
        <div className="simpleborder flex flex-col gap-6 bg-white p-10 md:p-20 max-w-4xl mx-auto shadow-xl">
          <div className="flex items-center gap-6">
            <Image
              src={"/moh.jpg"}
              alt="Founder and CEO"
              width={800}
              height={800}
              className="w-24 rounded-full drop-shadow-md"
            />
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">Yonas Mohammed</p>
              <span className="opacity-70">
                Founder and CEO of Yonile Digitals
              </span>
            </div>
          </div>
          <p className="text-base opacity-70">Updated 7, July 2024</p>
          <div className="flex flex-col gap-8 opacity-95 text-[19px]">
            <p>Dear businesses,</p>
            <p>
              Building a business in hard and tiresome espessially all the money
              that went to advertize your business just keeps not working.
            </p>
            <p>
              Don't you worry, We understand you, we have helped different
              business like you who were having trouble advertising their
              business with Digital marketing
            </p>
            <p>
              We use social media platforms to advertize your business where you
              potential customers spent their time the most
            </p>
            <div className="flex flex-col gap-2">
              <p>So what are you waiting, </p>
              <Link
                href="/contact"
                className="text-blue-500 hover:opacity-70 underline"
              >
                let's work together
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Ready simple />
    </main>
  );
};
export default AboutPage;
