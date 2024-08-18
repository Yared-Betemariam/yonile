import Ready from "@/components/Ready";
import { cn, font2 } from "@/lib/utils";
import Image from "next/image";
import { BsPeople } from "react-icons/bs";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdBrandingWatermark } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";

const ServicesPage = () => {
  const digitalMarketing = [
    {
      image: "/services/fb.png",
      title: "Facebook Ads",
      desc: "Advertising with facebook",
    },
    {
      image: "/services/ads.png",
      title: "Google Ads",
      desc: "Advertising with google ads",
    },
    {
      image: "/services/smm.png",
      title: "Social media marketing",
      desc: "Promotion with social media",
    },
  ];
  const services = [
    {
      Icon: MdOutlineManageAccounts,
      name: "Social media management",
      desc: "We specialize in a synergistic approach, offering a range of full-service digital marketing solutions and integrated agency services that span your entire customer journey. We are a one-stop shop for digital marketing, offering integrated solutions from start to finish that support your entire customer journey.",
    },
    {
      Icon: MdBrandingWatermark,
      name: "Brand creating",
      desc: "We specialize in a synergistic approach, offering a range of full-service digital marketing solutions and integrated agency services that span your entire customer journey. We are a one-stop shop for digital marketing, offering integrated solutions from start to finish that support your entire customer journey.",
    },
    {
      Icon: BsPeople,
      name: "Events",
      desc: "We specialize in a synergistic approach, offering a range of full-service digital marketing solutions and integrated agency services that span your entire customer journey. We are a one-stop shop for digital marketing, offering integrated solutions from start to finish that support your entire customer journey.",
    },
  ];
  return (
    <main>
      <section className="relative bg-primary text-gray-100">
        <Image
          src={"/about.jpg"}
          alt="us"
          width={1280}
          height={800}
          className="absolute min-w-[50%] h-full my-auto overflow-hidden right-0 object-center object-cover maskimage opacity-15"
        />
        <div className="wrapper py-20 pb-32 md:pb-56 flex flex-col  text-center mb-[47rem] md:mb-36">
          <div className="flex flex-col gap-6">
            <h2
              className={cn(
                "text-5xl md:text-6xl flex flex-col gap-2 mx-auto max-w-[20ch] font-bold",
                font2.className
              )}
            >
              <span>Full-service</span>
              <span className="bg-white px-4 py-2.5 shadow-lg whitespace-nowrap text-primary scale-90">
                digital marketing.
              </span>
            </h2>
            <p className="font-normal mx-auto max-w-[30ch] text-lg md:text-xl opacity-70 ">
              We offer wide range of services to our clients.
            </p>
          </div>
        </div>
        <div className="absolute w-full justify-center items-center md:items-start flex-col flex gap-14 lg:gap-20 md:-bottom-[20%] top-[80%] md:flex-row px-8">
          {digitalMarketing.map((item, i) => (
            <div
              key={i}
              className="bg-white group/sbox hover:scale-110 p-6 px-8 md:p-8 md:px-6  drop-shadow-md duration-300 hover:z-10 flex flex-col items-center justify-center transition-all simpleborder"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={800}
                className="w-32 md:w-28"
              />
              <div className="text-center text-gray-900">
                <h1 className="text-xl md:text-lg">{item.title}</h1>
                <p className="text-lg md:text-base opacity-80">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="wrapper">
        <h2 className="text-5xl font-bold text-center pt-24 pb-4 opacity-70">
          Other Services
        </h2>
        <div className="max-w-5xl md:[&>*:nth-child(even)]:flex-row-reverse mx-auto  py-24 gap-20 flex flex-col pt-16">
          {services.map((item, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row text-center md:text-start gap-16 items-center"
            >
              <div className="shadow-xl bg-primary/80 text-gray-100 flex items-center justify-center h-72 md:h-80 aspect-square relative">
                <item.Icon size={130} className="z-10 opacity-90" />
                <div className="pattern3 absolute inset-0 opacity-50 bg-black/20" />
                <span className="h-3 w-3 rounded-full bg-white absolute top-4 right-4" />
              </div>
              <div className="flex flex-col gap-10 max-w-md md:max-w-none mx-auto">
                <h2
                  className={cn(
                    "text-[2.7rem] leading-[3rem] font-bold",
                    font2.className
                  )}
                >
                  {item.name}
                </h2>
                <p className="opacity-80 text-xl">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Ready simple />
    </main>
  );
};
export default ServicesPage;
