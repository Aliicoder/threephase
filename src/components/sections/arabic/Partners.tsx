"use client";
import Image from "next/image";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import AnimatedText from "@/components/shared/AnimatedText";
import AnimatedSvg from "@/components/shared/AnimatedSvg";
import { Partners as PartnersData } from "@/constants/Partners";

const Partners = () => {
  const originalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (originalRef.current) {
      const original = originalRef.current;
      const trackWrapper = () => {
        const originalWidth = original.scrollWidth;
        document.documentElement.style.setProperty(
          "--original-width",
          String("-" + originalWidth + "px")
        );
      };

      const observer = new ResizeObserver(() => trackWrapper());
      observer.observe(original);
      return () => {
        observer.unobserve(original);
        observer.disconnect();
      };
    }
  }, []);
  return (
    <section className="font-cairo">
      <div
        className={clsx(
          "mx-auto space-y-[90px] py-[30px] px-[20px] container font-bold",
          "max-md:py-[30px]"
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
          <div className="text-4xl max-md:text-xl">
            <AnimatedText text="شركاؤنا" />
          </div>
        </div>
        <div
          className="slider mb-[20px]"
          style={
            {
              "--width": "180px",
              "--height": "100px",
              "--quntity": PartnersData.length,
            } as React.CSSProperties
          }
        >
          <div className="list">
            {PartnersData.map(({ image, width, height }, index) => (
              <div
                style={
                  {
                    "--index": index,
                  } as React.CSSProperties
                }
                key={index}
                className="item"
              >
                <Image src={image} alt="" width={width} height={height} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
