"use client";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedSvg from "../shared/AnimatedSvg";
gsap.registerPlugin(ScrollTrigger);
const OnSite = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const slides = gsap.utils.toArray("#slider > div") as HTMLDivElement[];
    const totalWidth =
      slides.reduce((acc, slide) => acc + slide.offsetWidth, 0) -
      (slider?.offsetWidth || 0);

    const animation = gsap.to(slides, {
      x: () => `-=${totalWidth}`,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: "#slider",
      start: "top 40%",
      end: () => `+=${totalWidth * 2}`,
      pin: true,
      animation: animation,
      scrub: 1,
      onUpdate: (self) => {
        // Reverse direction when scrolling up
        if (self.direction === -1) {
          animation.timeScale(-1);
        } else {
          animation.timeScale(1);
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section className="relative z-10 font-cairo bg-white">
      <div className="mx-auto space-y-[30px] py-[30px] px-[20px] container font-bold ">
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
          <h1 className="text-4xl max-md:text-xl">On Site</h1>
        </div>
        <div
          id="slider"
          ref={sliderRef}
          dir="ltr"
          className={clsx(
            "p-[10px] gap-[16px] flex overflow-x-hidden",
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
              className="object-cover w-full h-full"
            />
          </div>
          <div
            className={clsx(
              "shrink-0 basis-5/12 flex justify-center items-center aspect-video overflow-hidden",
              "max-md:basis-full"
            )}
          >
            <Image
              src="/onsite/2.jpg"
              alt=""
              width={770}
              height={353}
              className="object-cover w-full h-full"
            />
          </div>
          <div
            className={clsx(
              "shrink-0 basis-5/12 flex justify-center items-center aspect-video overflow-hidden",
              "max-md:basis-full"
            )}
          >
            <Image
              src="/onsite/3.jpg"
              alt=""
              width={770}
              height={353}
              className="object-cover w-full h-full"
            />
          </div>
          <div
            className={clsx(
              "shrink-0 basis-5/12 flex justify-center items-center aspect-video overflow-hidden",
              "max-md:basis-full"
            )}
          >
            <Image
              src="/onsite/3.jpg"
              alt=""
              width={770}
              height={353}
              className="object-cover w-full h-full"
            />
          </div>
          <div
            className={clsx(
              "shrink-0 basis-5/12 flex justify-center items-center aspect-video overflow-hidden",
              "max-md:basis-full"
            )}
          >
            <Image
              src="/onsite/3.jpg"
              alt=""
              width={770}
              height={353}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnSite;
