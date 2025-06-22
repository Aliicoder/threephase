"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({
  className,
  text,
  delay,
}: {
  className?: string;
  text: string;
  delay?: number;
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, x: 100 },
          {
            opacity: 1,
            delay,
            x: 0,
            duration: 1,
            scrollTrigger: {
              trigger: textRef.current,
            },
          }
        );
      }, textRef);

      return () => ctx.revert();
    }
  }, [textRef]);

  return (
    <p ref={textRef} className={className}>
      {text}
    </p>
  );
};

export default AnimatedText;
