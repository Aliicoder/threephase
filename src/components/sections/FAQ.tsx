"use client";
import clsx from "clsx";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import Questions from "@/constants/Questions";
import { useState } from "react";
const FAQ = () => {
  const [active, setActive] = useState(-1);
  return (
    <section className="font-cairo">
      <div className="mx-auto py-[30px] px-[20px] container font-bold ">
        <div className="gap-[10px] flex items-center  ">
          <Image
            src="/tp-colorful-asset.png"
            className="max-md:w-[24px] max-md:h-[19px]"
            alt=""
            width={40}
            height={32}
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
