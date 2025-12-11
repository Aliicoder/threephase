import Image from "next/image";
import clsx from "clsx";
import AnimatedSvg from "@/components/shared/AnimatedSvg";
import Counter from "@/components/shared/Counter";

const WhyChooseUs = () => {
  return (
    <section className="relative z-10 font-cairo bg-white">
      <div
        className={clsx(
          "mx-auto space-y-[90px] pt-[30px] pb-[90px] px-[20px] container font-bold"
        )}
      >
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
          <h4 className="text-4xl max-md:text-xl">لماذا تختارنا؟ </h4>
        </div>
        <div className="flex flex-col gap-[90px]">
          <div
            id="reason-1"
            className={clsx(
              "flex px-[30px] items-center justify-between",
              "max-md:px-[0px] max-md:flex-col-reverse max-md:gap-[30px]"
            )}
          >
            <div className={clsx("relative aspect-[1/1] h-full")}>
              <AnimatedSvg
                className="max-md:w-[24px] max-md:h-[19px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
              <Image
                src="/assets/whyChooseUs/1.webp"
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
                <h4 className="relative text-4xl">
                  <div
                    className={clsx(
                      `absolute z-[-1]
                  top-1/2 right-0 translate-x-2/3 
                  -translate-y-1/2  text-[123px] text-[#BACA5B]`,
                      "max-md:static max-md:translate-x-1/3 max-md:translate-y-0 max-md:text-[63px]"
                    )}
                  >
                    <Counter duration={0} count={1} />
                  </div>
                  جودة لا <br /> تُضاهى
                </h4>
              </div>
              <p className="max-w-[450px]">
                جميع معداتنا ومولداتنا معتمدة من أفضل الشركات العالمية، ونخضع
                لرقابة جودة صارمة في كل مرحلة من مراحل التنفيذ لضمان الأداء
                الأمثل والاستدامة.
              </p>
            </div>
          </div>
          <div
            id="reason-2"
            className={clsx(
              "flex px-[30px] items-center justify-between",
              "max-md:px-[0px] max-md:flex-col max-md:gap-[30px]"
            )}
          >
            <div
              className={clsx("gap-[50px] flex flex-col", "max-md:gap-[20px]")}
            >
              <div className="flex justify-center">
                <h4 className="relative text-4xl">
                  <div
                    className={clsx(
                      `absolute z-[-1]
                  top-1/2 right-0 translate-x-2/3 
                  -translate-y-1/2  text-[123px] text-[#BACA5B]`,
                      "max-md:static max-md:translate-x-1/6 max-md:translate-y-0 max-md:text-[63px]"
                    )}
                  >
                    <Counter duration={0} count={2} />
                  </div>
                  خبرة تمتد
                  <br /> لسنوات{" "}
                </h4>
              </div>
              <p className="max-w-[450px]">
                نتمتع بخبرة سنوات في مجال الطاقة الكهربائية، حيث نفذنا العديد من
                المشاريع الناجحة لعملاء من مختلف القطاعات
              </p>
            </div>
            <div className={clsx("relative aspect-[1/1] h-full")}>
              <AnimatedSvg
                className="max-md:w-[24px] max-md:h-[19px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
              <Image
                src="/assets/whyChooseUs/2.webp"
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
              "max-md:px-[0px] max-md:flex-col-reverse max-md:gap-[30px]"
            )}
          >
            <div className={clsx("relative aspect-[1/1] h-full")}>
              <AnimatedSvg
                className="max-md:w-[24px] max-md:h-[19px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
              <Image
                src="/assets/whyChooseUs/3.webp"
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
                <h4 className="relative text-4xl">
                  <div
                    className={clsx(
                      `absolute z-[-1]
                  top-1/2 right-0 translate-x-2/3 
                  -translate-y-1/2  text-[123px] text-[#BACA5B]`,
                      "max-md:static max-md:translate-x-1/12 max-md:translate-y-0 max-md:text-[63px]"
                    )}
                  >
                    <Counter duration={0} count={3} />
                  </div>
                  دعم فني على <br />
                  مدار الساعة
                </h4>
              </div>
              <p className="max-w-[450px]">
                نحن إلى جانبك دائمًا. فريق الدعم الفني لدينا متاح 24/7 للاستجابة
                لأي طارئ، سواء عبر الهاتف أو عبر فرقنا الميدانية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
