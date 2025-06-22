"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
const AnimatedSvg = ({
  width,
  height,
  viewBox,
  className,
  svgContent,
}: {
  className?: string;
  svgContent: React.ReactNode;
  width: number;
  height: number;
  viewBox?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll("path");

      gsap.set(paths, {
        opacity: 0,
        x: 100,
        transformOrigin: "bottom",
      });

      gsap.to(paths, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.3,
      });
    }
  }, []);
  return (
    <svg
      ref={svgRef}
      className={className}
      height={height}
      width={width}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {svgContent}
    </svg>
  );
};

export default AnimatedSvg;
