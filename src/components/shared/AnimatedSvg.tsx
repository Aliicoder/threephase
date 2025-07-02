"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

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
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const paths = svgRef.current.querySelectorAll("path");

    gsap.set(paths, {
      opacity: 0,
      x: 100,
      transformOrigin: "bottom",
    });

    animationRef.current = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: false,
        once: true,
        onEnter: () => animationRef.current?.play(),
        onEnterBack: () => animationRef.current?.play(),
      },
    });

    animationRef.current.to(paths, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.3,
    });

    return () => {
      animationRef.current?.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
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
