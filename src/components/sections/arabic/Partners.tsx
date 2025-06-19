"use client";
import Image from "next/image";
import clsx from "clsx";
import { useEffect, useRef } from "react";

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
          <Image
            src="/tp-colorful-asset.png"
            className="max-md:w-[24px] max-md:h-[19px]"
            alt=""
            width={40}
            height={32}
          />
          <h1 className="text-4xl max-md:text-xl">شركاؤنا</h1>
        </div>
        <div className="poninter-events-none overflow-hidden">
          <div
            ref={originalRef}
            id="original"
            className="relative flex scrollX"
          >
            <Image
              className="p-8 flex-1"
              src="/partners/alinma.png"
              alt=""
              width={180}
              height={36}
            />
            <Image
              className="p-8 flex-1"
              src="/partners/alinma.png"
              alt=""
              width={180}
              height={36}
            />
            <Image
              className="p-8 flex-1"
              src="/partners/alinma.png"
              alt=""
              width={180}
              height={36}
            />
            <Image
              className="p-8 flex-1"
              src="/partners/alinma.png"
              alt=""
              width={180}
              height={36}
            />
            <div
              style={{
                right: `var(--original-width)`,
                top: 0,
              }}
              className="absolute bg-[#BACA5B] flex w-full h-full "
            >
              <Image
                className="p-8 flex-1"
                src="/partners/alinma.png"
                alt=""
                width={180}
                height={36}
              />
              <Image
                className="p-8 flex-1"
                src="/partners/alinma.png"
                alt=""
                width={180}
                height={36}
              />
              <Image
                className="p-8 flex-1"
                src="/partners/alinma.png"
                alt=""
                width={180}
                height={36}
              />
              <Image
                className="p-8 flex-1"
                src="/partners/alinma.png"
                alt=""
                width={180}
                height={36}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
