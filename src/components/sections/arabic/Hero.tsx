import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
const Hero = () => {
  return (
    <section
      className="font-cairo max-md:!bg-[url('/imgs/hero-sm-bg.jpg')]"
      style={{
        backgroundImage: "url('/imgs/hero-lg-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto py-[30px] px-[20px] container flex flex-col justify-between h-svh ">
        <div className="flex justify-center items-center">
          <Image
            className="max-md:w-[125px] max-md:h-[37px] "
            width={200}
            height={58}
            src="/logo.png"
            alt=""
          />
        </div>
        <div
          className={clsx(
            "gap-[30px] mb-[100px] flex flex-col  ",
            "max-md:mb-[0px]"
          )}
        >
          <div
            className={clsx(
              "w-[770px] text-6xl font-bold text-balance text-white",
              "max-md:w-[280px] max-md:text-3xl"
            )}
          >
            <h1>لتستمر أعمالك بلا توقف</h1>
          </div>
          <div
            className={clsx(
              "w-[770px] text-xl text-balance font-bold leading-[1.2] line-clamp-3 tracking-wide text-white",
              "max-md:w-[280px] max-md:text-xl"
            )}
          >
            <h1>
              نقدّم لك أحدث مولدات الكهرباء وخدمات هندسية متكاملة، بموثوقية
              عالية، دعم فني فوري، وخبرة تمتد لسنوات .
            </h1>
          </div>
          <div className="flex flex-wrap gap-[20px]">
            <Link
              href="/arabic"
              className={clsx(
                "px-6 py-2 flex items-center font-bold bg-[#0000C4] text-white ",
                "max-md:text-sm",
                "hover:scale-95 transition-all duration-300"
              )}
            >
              تواصل معنا{" "}
            </Link>
            <Link
              href="/"
              className={clsx(
                "flex items-center font-bold text-white ",
                "hover:scale-95 transition-all duration-300"
              )}
            >
              <h1 className={clsx("px-6 py-3 bg-[#0000C4]", "max-md:text-sm")}>
                English
              </h1>
              <div className="flex items-center justify-center px-[10px] size-full bg-[#BACA5B]">
                <FaArrowRight className="rotate-180  " />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
