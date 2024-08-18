import { cn, font2 } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";
import { FaTelegram } from "react-icons/fa";

/* eslint-disable react/no-unescaped-entities */
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Daniel G.",
      role: "Thumbnail designer",
      star: 5,
      feedback:
        "The website looks fancy, the slide show for the thumbnails, the font, bg are best and the time was also great cuz you finished the website in just 2 days",
    },
    {
      name: "BÂŽÎ_DESIGNS.",
      role: "Graphics design agency",
      star: 5,
      feedback: "Very professional and simple website, just like we wanted!",
    },
  ];
  return (
    <section id="testimonials" className="wrapper flex flex-col">
      <div className="flex flex-col py-20 gap-4">
        <h2
          className={cn(
            "text-5xl md:text-6xl font-bold mx-auto text-center",
            font2.className
          )}
        >
          A few <span className="text-primary">client reviews</span>
        </h2>
        <p className="mx-auto text-base md:text-xl opacity-80 mb-12">
          Here are some of my past clients
        </p>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-20 mx-auto px-2">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col p-6 px-3 w-full max-w-[24rem] md:max-w-[28rem] gap-4 rounded-3xl"
            >
              <div className="relative px-4 py-2 text-center">
                <span className="text-5xl font-bold absolute -top-2 -left-2 opacity-80">
                  "
                </span>
                <span className="text-xl font-medium leading-7">
                  {item.feedback}
                </span>
                <span className="text-5xl font-bold absolute -bottom-2 -right-2 opacity-80">
                  "
                </span>
              </div>
              <div className="h-[.8px] bg-gray-900/15 rounded-full mx-12" />
              <div className="flex items-center justify-center gap-2 text-center flex-col">
                <div className="flex items-center gap-3 px-4">
                  <div className="flex flex-col text-sm">
                    <span className="text-lg font-semibold">{item.name}</span>
                    <span>{item.role}</span>
                  </div>
                </div>
                <div className="flex gap-2 items-center ">
                  {Array.from({ length: item.star }).map((item, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TestimonialsSection;
