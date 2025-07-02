import React from "react";
import { Partners as PartnersData } from "@/constants/Partners";
import Image from "next/image";
const SliderPlaceholder = () => {
  return (
    <div className="flex border ">
      {PartnersData.map(({ image, width, height }, index) => (
        <div
          key={index}
          className="shrink-0"
          style={
            {
              "--index": index,
            } as React.CSSProperties
          }
        >
          <Image key={index} src={image} alt="" width={width} height={height} />
        </div>
      ))}
    </div>
  );
};

export default SliderPlaceholder;
