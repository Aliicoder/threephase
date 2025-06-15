import Image from "next/image";
import clsx from "clsx";

const WhyChooseUs = () => {
  return (
    <section className="font-cairo">
      <div
        className={clsx(
          "mx-auto space-y-[90px] py-[30px] px-[20px] container font-bold"
        )}
      >
        <div className="gap-[10px] flex items-center  ">
          <Image
            src="/tp-colorful-asset.png"
            className="max-md:w-[24px] max-md:h-[19px]"
            alt=""
            width={40}
            height={32}
          />
          <h1 className="text-4xl max-md:text-xl">Why Choose Us ?</h1>
        </div>
        <div className="flex flex-col gap-[90px]">
          <div
            id="reason-1"
            className={clsx(
              "flex px-[30px] items-center justify-between",
              "px-[0px] max-md:flex-col-reverse max-md:gap-[30px]"
            )}
          >
            <div className={clsx("relative aspect-[1/1] h-full")}>
              <Image
                src="/tp-colorful-asset.png"
                className="max-md:w-[24px] max-md:h-[19px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                alt=""
                width={40}
                height={32}
              />
              <Image
                src="/whyChooseUs/1.jpg"
                className=""
                alt=""
                width={285}
                height={285}
              />
            </div>
            <div
              className={clsx("gap-[50px] flex flex-col", "max-md:gap-[20px]")}
            >
              <div className="flex justify-center">
                <h1 className="relative text-4xl">
                  <div
                    className={clsx(
                      `absolute z-[-1]
                  top-1/2 right-0 translate-x-2/3 
                  -translate-y-1/2  text-[123px] text-[#BACA5B]`,
                      "max-md:static max-md:translate-y-0 max-md:text-[63px]"
                    )}
                  >
                    01
                  </div>
                  Unmatched <br /> quality
                </h1>
              </div>
              <p className="max-w-[450px]">
                All our equipment and generators are certified by top global
                companies. We adhere to strict quality control at every stage of
                execution to ensure optimal performance and sustainability.
              </p>
            </div>
          </div>
          <div
            id="reason-2"
            className={clsx(
              "flex px-[30px] items-center justify-between",
              "px-[0px] max-md:flex-col max-md:gap-[30px]"
            )}
          >
            <div
              className={clsx("gap-[50px] flex flex-col", "max-md:gap-[20px]")}
            >
              <div className="flex justify-center">
                <h1 className="relative text-4xl">
                  <div
                    className={clsx(
                      `absolute z-[-1]
                  top-1/2 right-0 translate-x-2/3 
                  -translate-y-1/2  text-[123px] text-[#BACA5B]`,
                      "max-md:static max-md:translate-y-0 max-md:text-[63px]"
                    )}
                  >
                    02
                  </div>
                  Years of Proven <br /> Experience
                </h1>
              </div>
              <p className="max-w-[450px]">
                We have over 5 years of experience in the electrical power
                sector, having successfully completed hundreds of projects for
                clients across various industrial, commercial, and medical
                sectors.
              </p>
            </div>
            <div className={clsx("relative aspect-[1/1] h-full")}>
              <Image
                src="/tp-colorful-asset.png"
                className="max-md:w-[24px] max-md:h-[19px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                alt=""
                width={40}
                height={32}
              />
              <Image
                src="/whyChooseUs/2.jpg"
                className=""
                alt=""
                width={285}
                height={285}
              />
            </div>
          </div>
          <div
            id="reason-3"
            className={clsx(
              "flex px-[30px] items-center justify-between",
              "px-[0px] max-md:flex-col-reverse max-md:gap-[30px]"
            )}
          >
            <div className={clsx("relative aspect-[1/1] h-full")}>
              <Image
                src="/tp-colorful-asset.png"
                className="max-md:w-[24px] max-md:h-[19px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                alt=""
                width={40}
                height={32}
              />
              <Image
                src="/whyChooseUs/3.jpg"
                className=""
                alt=""
                width={285}
                height={285}
              />
            </div>
            <div
              className={clsx("gap-[50px] flex flex-col", "max-md:gap-[20px]")}
            >
              <div className="flex justify-center">
                <h1 className="relative text-4xl">
                  <div
                    className={clsx(
                      `absolute z-[-1]
                  top-1/2 right-0 translate-x-2/3 
                  -translate-y-1/2  text-[123px] text-[#BACA5B]`,
                      "max-md:static max-md:translate-y-0 max-md:text-[63px]"
                    )}
                  >
                    03
                  </div>
                  24/7 Technical
                  <br /> Support
                </h1>
              </div>
              <p className="max-w-[450px]">
                We&apos;re always by your side. Our technical support team is
                available 24/7 to respond to any emergency — whether by phone or
                through our on-site field teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
