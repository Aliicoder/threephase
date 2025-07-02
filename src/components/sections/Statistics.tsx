"use client";
import clsx from "clsx";
import Image from "next/image";
import CountUp from "react-countup";
import Stat from "../shared/Stat";
import AnimatedSvg from "../shared/AnimatedSvg";
const Statistics = () => {
  return (
    <section className="bg-[#BACA5B]">
      <div
        className={clsx(
          "relative container mx-auto p-[40px] gap-8 grid grid-cols-4 font-cairo font-bold text-white ",
          "max-md:grid-cols-2"
        )}
      >
        <AnimatedSvg
          width={280}
          height={141}
          viewBox="0 0 280 141"
          className="absolute bottom-0 right-0"
          svgContent={
            <g opacity="0.1">
              <path
                d="M213.888 199.561L280 -20H232.933L166.821 199.561H213.888Z"
                fill="white"
              />
              <path
                d="M130.477 199.561L196.595 -20H149.528L83.416 199.561H130.477Z"
                fill="white"
              />
              <path
                d="M47.067 199.561L113.179 -20H66.1172L0 199.561H47.067Z"
                fill="white"
              />
            </g>
          }
        />
        <Stat count={5} title="Experience" />
        <Stat count={12} title="Total Clients" />
        <Stat count={67} title="Total Visits" />
        <Stat count={37} title="Total Projects" />
      </div>
    </section>
  );
};

export default Statistics;
