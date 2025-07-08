import AnimatedSvg from "@/components/shared/AnimatedSvg";
import clsx from "clsx";
import Image from "next/image";

const Services = () => {
  return (
    <section className="relative z-10 font-cairo bg-white">
      <div className="mx-auto gap-[90px] py-[30px] px-[20px] container flex flex-col font-bold">
        <div className="gap-[10px] flex items-center  ">
          <AnimatedSvg
            className="max-md:w-[24px] max-md:h-[19px]"
            width={40}
            height={32}
            viewBox="0 0 40 32"
            svgContent={
              <>
                <path
                  d="M30.5559 31.6813L39.9997 0.318848H33.2763L23.8325 31.6813H30.5559Z"
                  fill="#0000C4"
                />
                <path
                  d="M18.6415 31.6813L28.0861 0.318848H21.3628L11.9189 31.6813H18.6415Z"
                  fill="#FEEA4D"
                />
                <path
                  d="M6.72774 31.6813L16.1716 0.318848H9.449L0.00439453 31.6813H6.72774Z"
                  fill="#FF220F"
                />
              </>
            }
          />
          <h1 className="text-4xl max-md:text-xl">الخدمات</h1>
        </div>
        <div className={clsx("flex ", "max-md:flex-col max-md:gap-[90px]")}>
          <div className="basis-4/12 flex flex-col items-center">
            <Image
              width={58}
              height={52}
              src="/services/1.png"
              alt=""
              className="max-md:w-[45px] max-md:h-[41px]"
            />
            <h1
              className={clsx(
                "pt-[20px] pb-[16px] text-3xl text-center",
                "max-md:text-2xl"
              )}
            >
              تأجير مولدات
            </h1>
            <p className={clsx("max-w-[300px] text-center", "max-md:text-sm")}>
              وفّر لك مولد كهربائي مع فني تشغيل مدرّب ضمن عقود مرنة، مثالية
              للفعاليات
            </p>
          </div>
          <div className="basis-4/12 flex flex-col items-center">
            <Image
              width={58}
              height={58}
              src="/services/2.png"
              alt=""
              className="max-md:w-[45px] max-md:h-[45px]"
            />
            <h1
              className={clsx(
                "pt-[20px] pb-[16px] text-3xl text-center",
                "max-md:text-2xl"
              )}
            >
              حلول للطوارئ
            </h1>
            <p className={clsx("max-w-[300px] text-center", "max-md:text-sm")}>
              نخدمك في أوقات انقطاع التيار المفاجئ استجابة خلال 1–2 ساعات
            </p>
          </div>
          <div className="basis-4/12 flex flex-col items-center">
            <Image
              width={58}
              height={56}
              src="/services/3.png"
              alt=""
              className="max-md:w-[45px] max-md:h-[36px]"
            />
            <h1
              className={clsx(
                "pt-[20px] pb-[16px] text-3xl text-center",
                "max-md:text-2xl"
              )}
            >
              مولدات متنقلة
            </h1>
            <p className={clsx("max-w-[300px] text-center", "max-md:text-sm")}>
              مولدات يمكن نقلها وتشغيلها بسهولة في عدة مواقع، مثالية للمشاريع
              المتنقلة
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
