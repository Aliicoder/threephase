import clsx from "clsx";
import Image from "next/image";
import React from "react";

const Frame = ({
  src,
  width,
  height,
}: {
  src: string;
  width: number;
  height: number;
}) => {
  return (
    <div
      className={clsx(
        "shrink-0 basis-5/12 flex justify-center items-center aspect-video overflow-hidden",
        "max-md:basis-full"
      )}
    >
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default Frame;
