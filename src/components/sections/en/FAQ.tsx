"use client";
import clsx from "clsx";
import { Plus, X } from "lucide-react";
import { en as Questions } from "@/constants/Questions";
import { useState } from "react";
import AnimatedSvg from "../../../components/shared/AnimatedSvg";
const FAQ = () => {
  const [active, setActive] = useState(-1);
  return (
    <section className="relative z-10 font-cairo bg-white">
      <div className="mx-auto py-[30px] px-[20px] container font-bold ">
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
          <h1 className="text-4xl max-md:text-xl">FAQ</h1>
        </div>
        <div className="pt-[10px] flex flex-col">
          {Questions.map((item, index) => (
            <div
              key={index}
              className={clsx(
                index != Questions.length - 1 && "border-b border-[#BACA5B]"
              )}
            >
              <div key={index} className="gap-4 py-4 flex justify-between">
                <h1 className={clsx("text-xl font-bold", "max-md:text-sm")}>
                  {item.question}
                </h1>
                {active === index ? (
                  <X
                    className="w-[24px] h-[24px] max-md:w-[20px] max-md:h-[20px]"
                    onClick={() =>
                      setActive((prev) => (prev === index ? -1 : index))
                    }
                  />
                ) : (
                  <Plus
                    className="w-[24px] h-[24px] max-md:w-[20px] max-md:h-[20px]"
                    onClick={() =>
                      setActive((prev) => (prev === index ? -1 : index))
                    }
                  />
                )}
              </div>
              {active === index && (
                <div className="pb-4">
                  <p className="text-xl max-md:text-sm text-[#454545]">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
