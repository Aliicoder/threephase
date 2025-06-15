import clsx from "clsx";
import Image from "next/image";

const OnSite = () => {
  return (
    <section className="font-cairo">
      <div className="mx-auto space-y-[30px] py-[30px] px-[20px] container font-bold ">
        <div className="gap-[10px] flex items-center  ">
          <Image
            src="/tp-colorful-asset.png"
            className="max-md:w-[24px] max-md:h-[19px]"
            alt=""
            width={40}
            height={32}
          />
          <h1 className="text-4xl max-md:text-xl">On Site</h1>
        </div>
        <div
          className={clsx(
            "p-[10px] gap-[16px] flex ",
            "lg:p-[90px] md:p-[60px]"
          )}
        >
          <div
            className={clsx(
              "shrink-0 basis-5/12 flex justify-center items-center aspect-video overflow-hidden",
              "max-md:basis-full"
            )}
          >
            <Image
              src="/onsite/1.jpg"
              alt=""
              width={770}
              height={353}
              className=""
            />
          </div>
          <div
            className={clsx(
              "shrink-0 basis-5/12 flex justify-center items-center aspect-video overflow-hidden",
              "max-md:basis-full"
            )}
          >
            <Image src="/onsite/2.jpg" alt="" width={770} height={353} />
          </div>
          <div
            className={clsx(
              "shrink-0 basis-5/12 flex justify-center items-center aspect-video overflow-hidden",
              "max-md:basis-full"
            )}
          >
            <Image src="/onsite/3.jpg" alt="" width={770} height={353} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnSite;
