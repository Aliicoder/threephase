"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";

gsap.registerPlugin(ScrollTrigger);

const Counter = ({ count, duration }: { count: number; duration: number }) => {
  const [started, setStarted] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!counterRef.current) return;

    ScrollTrigger.create({
      trigger: counterRef.current,
      start: "top 80%",
      onEnter: () => setStarted(true),
      once: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === counterRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div ref={counterRef}>
      0{started ? <CountUp end={count} duration={duration} /> : <span>0</span>}
    </div>
  );
};

export default Counter;
