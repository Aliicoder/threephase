"use client";
import clsx from "clsx";
import Image from "next/image";
import CountUp from "react-countup";
const Statistics = () => {
  return (
    <section className="bg-[#BACA5B]">
      <div
        className={clsx(
          "relative container mx-auto p-[40px] gap-8 grid grid-cols-4 font-cairo font-bold text-white ",
          "max-md:grid-cols-2"
        )}
      >
        <Image
          src="/tp-white-asset.png"
          alt=""
          width={280}
          height={220}
          className="absolute bottom-0 right-0"
        />
        <div>
          <h1 className={clsx("text-3xl", "max-md:text-xl")}>
            <CountUp end={5} duration={3} />{" "}
            <span className={clsx("ml-1 text-xl", "max-md:text-lg")}>+</span>
          </h1>
          <p className={clsx("text-xl", "max-md:text-sm")}>سنوات الخبرة</p>
        </div>
        <div>
          <h1 className={clsx("text-3xl", "max-md:text-xl")}>
            <CountUp end={12} duration={3} />{" "}
            <span className={clsx("ml-1 text-xl", "max-md:text-lg")}>+</span>
          </h1>
          <p className={clsx("text-xl", "max-md:text-sm")}>العملاء</p>
        </div>
        <div>
          <h1 className={clsx("text-3xl", "max-md:text-xl")}>
            <CountUp end={67} duration={3} />{" "}
            <span className={clsx("ml-1 text-xl", "max-md:text-lg")}>+</span>
          </h1>
          <p className={clsx("text-xl", "max-md:text-sm")}>عدد الزيارات</p>
        </div>
        <div>
          <h1 className={clsx("text-3xl", "max-md:text-xl")}>
            <CountUp end={37} duration={3} />{" "}
            <span className={clsx("ml-1 text-xl", "max-md:text-lg")}>+</span>
          </h1>
          <p className={clsx("text-xl", "max-md:text-sm")}>عدد المشاريع</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
