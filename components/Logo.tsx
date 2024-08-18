import Image from "next/image";

const Logo = ({ w }: { w?: boolean }) => {
  return (
    <a href="/">
      <Image
        src={w ? "/logo_w.png" : "/logo_full.png"}
        alt="logo"
        className="w-40 md:w-44"
        width={1500}
        height={350}
      />
    </a>
  );
};
export default Logo;
