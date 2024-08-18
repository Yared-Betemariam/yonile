import { cn, font2 } from "@/lib/utils";
import { Button } from "./ui/button";

const Ready = ({ simple }: { simple?: boolean }) => {
  return (
    <section
      className={cn(
        simple
          ? "bg-gradient-to-br from-gray-50/80 to-gray-900/10 border-t border-gray-900/10"
          : "bg-gradient-to-b to-gray-900 from-gray-800  text-gray-100",
        "relative"
      )}
    >
      <div className="pattern3 absolute inset-0 opacity-[0.085] bg-black/20" />
      <div className="wrapper py-28 flex gap-10 flex-col items-center justify-center">
        {simple ? (
          <h2
            className={cn(
              "text-5xl text-center font-semibold",
              font2.className
            )}
          >
            Ready to{" "}
            <span className="text-primary brightness-[1.35]">level up?</span>
          </h2>
        ) : (
          <h2
            className={cn(
              "text-4xl text-center md:text-6xl font-bold",
              font2.className
            )}
          >
            Ready to{" "}
            <span className="text-primary brightness-[1.35]">
              grow your business
            </span>
          </h2>
        )}
        {simple ? (
          <p className="text-lg max-w-[32ch]  text-center  md:text-xl opacity-60">
            You will get a full marketing compain setted up for your business to
            increase your customers
          </p>
        ) : (
          <p className="text-lg max-w-[40ch]  text-center font-normal md:text-xl opacity-60">
            You will get a full marketing compain setted up for your business to
            increase your customers
          </p>
        )}
        <Button
          size={"lg"}
          className="rounded-none brightness-[1.05] shadow text-xl px-10 h-16"
        >
          Get started
        </Button>
      </div>
    </section>
  );
};
export default Ready;
