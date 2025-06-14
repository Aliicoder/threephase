import clsx from "clsx";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
const Hero = () => {
  return (
    <section
      className="font-cairo"
      style={{
        backgroundImage: "url('/imgs/hero-lg-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto p-[40px] container flex flex-col justify-between h-svh ">
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
            "max-md:mb-[50px]"
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
            <button className="px-[30px] py-[12px] font-bold bg-[#0000C4] text-white">
              Contact Us
            </button>
            <button className="flex items-center font-bold text-white ">
              <h1 className="px-[30px] py-[12px] bg-[#0000C4]">عربي</h1>
              <div className="flex items-center justify-center px-[10px] size-full bg-[#BACA5B]">
                <FaArrowRight />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
