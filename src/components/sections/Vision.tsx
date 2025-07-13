import clsx from "clsx";
import AnimatedSvg from "../shared/AnimatedSvg";

const Vision = () => {
  return (
    <section className="relative z-10 font-cairo bg-white">
      <div className="mx-auto gap-[30px] py-[30px] px-[20px] container flex flex-col font-bold">
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
          <h1 className="text-4xl max-md:text-xl">Our Vision</h1>
        </div>
        <div className="flex justify-center">
          <p className={clsx("max-w-[700px] text-center", "max-md:text-sm")}>
            We aspire to be the leading and most influential company in
            providing integrated electrical solutions that support the film,
            media, and production industry across the Kingdom. We are committed
            to delivering a comprehensive system of high-performance generators
            and specialized technical services that ensure continuous operation
            with exceptional efficiency and reliability. We continuously strive
            to develop and upgrade our technologies and equipment in accordance
            with the latest global standards, enabling us to meet the demands of
            large-scale projects and high-requirement events, and to support
            content creators in producing their artistic and creative work with
            the highest levels of quality and professionalism—without any
            interruptions or delays.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
