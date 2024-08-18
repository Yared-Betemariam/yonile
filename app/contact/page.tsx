/* eslint-disable react/no-unescaped-entities */
import { cn, font2 } from "@/lib/utils";
import { Mail, PhoneCall } from "lucide-react";
import Image from "next/image";
import { FaFacebook, FaHandshake, FaLinkedin, FaTiktok } from "react-icons/fa";
import {
  FaArrowRight,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const socialLinks = [
  {
    icon: <FaLinkedin />,
    link: "https://github.com/Yared-Betemariam",
  },
  {
    icon: <FaFacebook />,
    link: "https://github.com/Yared-Betemariam",
  },
  {
    icon: <FaTiktok />,
    link: "https://twitter.com/thecodingray",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/yaredoray/",
  },
];

const ContactPage = () => {
  return (
    <main className="relative grainy_gradient md:pb-20">
      <Image
        src={"/about.jpg"}
        alt="Us"
        width={1280}
        height={800}
        className="absolute min-w-[50%] min-h-full right-0 h-full object-top object-cover maskimage opacity-[0.07] "
      />
      <section id="contact" className=" text-gray-100">
        <div className="py-20 flex items-center flex-col md:flex-row justify-between wrapper gap-10">
          <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-start">
            <h2
              className={cn(
                "text-6xl md:text-[4.5rem] max-w-[10ch] font-bold",
                font2.className
              )}
            >
              Let's Work <span className="text-primary">Together</span>
            </h2>
            <p className=" font-normal max-w-[26ch] text-base md:text-xl opacity-70 ">
              Ready to level up your business with our help, contact us right
              away!
            </p>
          </div>
          <FaHandshake size={280} className="drop_glow -rotate-[20deg]" />

          {/* <div className="bg-primary  p-16 rounded-full glow text-gray-100">
            <FaHandshake size={140} className="drop_glow" />
          </div> */}
        </div>
      </section>
      <section className="bg-white max-w-[72rem] shadow-xl p-10 w-full mx-auto">
        <div className="flex flex-col px-6 py-12 pb-10 gap-14">
          <div className="flex flex-col gap-5 text-gray-800/90">
            <p className={cn("text-5xl font-bold", font2.className)}>
              Contact us
            </p>
            <p className="text-lg md:text-xl opacity-85">
              We appreciate you reaching out to Search Revolutions. Please allow
              a full business day to return your inquiry and we look forward to
              providing the information you are looking for.
            </p>
          </div>
          <div className="flex lg:items-center gap-10 mg:gap-4 lg:flex-row flex-col mb-4 lg:justify-between">
            <div className="flex items-center gap-5">
              <span className="bg-primary/80 text-gray-100  rounded-full p-6">
                <PhoneCall size={36} className="" />
              </span>

              <div className="flex flex-col gap-1">
                <p className="opacity-80 text-xl font-semibold">Call us</p>
                <p className="text-3xl md:text-2xl font-bold opacity-90">
                  +251 1919 1919 19
                </p>
              </div>
            </div>
            <EmailBox />
          </div>
          <Socials />
        </div>
      </section>
    </main>
  );
};
const EmailBox = () => {
  return (
    <a
      href="mailto:yoniledigitals@gmail.com"
      className="flex items-center justify-between p-6 px-8 md:p-8 md:px-10 rounded-full border-[1.3px] border-gray-900/10 bg-gradient-to-br text-white from-primary/80 to-primary/75 shadow w-full max-w-xl group/boxhs text-base md:text-xl brightness-110"
    >
      <div className="flex items-center gap-4">
        <Mail
          size={26}
          className="group-hover/boxhs:scale-110 transform duration-300 transition-all"
        />
        <span className="font-semibold drop-shadow-md">
          yoniledigitals@gmail.com
        </span>
      </div>
      <FaArrowRight className="group-hover/boxhs:translate-x-1 transform duration-300 transition-all" />
    </a>
  );
};

const Socials = () => {
  return (
    <div className="flex mx-auto w-fit items-center gap-16">
      {socialLinks.map((item) => (
        <a
          href={item.link}
          target="_blank"
          key={item.link}
          className="text-[2.75rem] text-gray-900/70 hover:text-gray-900 hover:scale-110 transition-all duration-300"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};
export default ContactPage;
