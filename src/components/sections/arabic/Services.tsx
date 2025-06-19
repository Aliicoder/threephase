import clsx from "clsx";
import Image from "next/image";

const Services = () => {
  return (
    <section className="font-cairo">
      <div className="mx-auto gap-[90px] py-[30px] px-[20px] container flex flex-col font-bold">
        <div className="gap-[10px] flex items-center  ">
          <Image
            src="/tp-colorful-asset.png"
            className="max-md:w-[24px] max-md:h-[19px]"
            alt=""
            width={40}
            height={32}
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
              نخدمك في أوقات انقطاع التيار المفاجئ استجابة خلال 2–4 ساعات
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
