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
        backgroundAttachment: "fixed",
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
            "gap-[30px] mb-[100px] flex flex-col ",
            "max-md:mb-[0px]"
          )}
        >
          <h1
            className={clsx(
              "w-[770px] text-6xl font-bold text-white",
              "max-md:w-[280px] max-md:text-3xl"
            )}
          >
            To keep your business running without interruption{" "}
          </h1>
          <p
            className={clsx(
              "w-[770px] text-xl font-bold leading-[1.2] line-clamp-3 tracking-wide text-white",
              "max-md:w-[280px] max-md:text-xl"
            )}
          >
            We provide you with the latest power generators and comprehensive
            engineering services, offering high reliability, instant technical
            support, and years of experien
          </p>
          <div className="flex flex-wrap gap-[20px]">
            <button
              className={clsx(
                "px-6 py-2 font-bold bg-[#0000C4] text-white",
                "max-md:text-sm"
              )}
            >
              Contact Us
            </button>
            <Link
              href="/arabic"
              className="flex items-center font-bold text-white "
            >
              <h1 className={clsx("px-6 py-3 bg-[#0000C4]", "max-md:text-sm")}>
                عربي
              </h1>
              <div className="flex items-center justify-center px-[10px] size-full bg-[#BACA5B]">
                <FaArrowRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
