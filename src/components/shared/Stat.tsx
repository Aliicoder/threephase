"use client";
import React, { useRef, useEffect, useState } from "react";
import clsx from "clsx";
import CountUp from "react-countup";
import AnimatedText from "./AnimatedText";
const Stat = ({ count, title }: { count: number; title: string }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { root: null, rootMargin: "0px", threshold: 1.0 }
    );
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [textRef, started]);

  return (
    <div ref={textRef}>
      <h1 className={clsx("text-3xl", "max-md:text-xl")}>
        {started ? <CountUp end={count} duration={3} /> : count}
        <span className={clsx("ml-1 text-xl", "max-md:text-lg")}>+</span>
      </h1>
      <AnimatedText className="text-xl max-md:text-sm" text={title} />
    </div>
  );
};

export default Stat;
