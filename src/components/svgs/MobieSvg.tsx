"use client";
import React from "react";
import { motion } from "framer-motion";
import { pathVariants } from "@/constants/animations";

const MobieSvg = () => {
  return (
    <motion.svg
      className="max-md:w-[45px] max-md:h-[41px]"
      width="64"
      height="52"
      viewBox="0 0 64 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M37.8 43.4V8.60005C37.8 7.06179 37.1889 5.58654 36.1012 4.49883C35.0135 3.41112 33.5383 2.80005 32 2.80005H8.8C7.26174 2.80005 5.78649 3.41112 4.69878 4.49883C3.61107 5.58654 3 7.06179 3 8.60005V40.5C3 41.2692 3.30553 42.0068 3.84939 42.5507C4.39325 43.0945 5.13087 43.4 5.9 43.4H11.7M11.7 43.4C11.7 46.6033 14.2967 49.2 17.5 49.2C20.7033 49.2 23.3 46.6033 23.3 43.4M11.7 43.4C11.7 40.1968 14.2967 37.6 17.5 37.6C20.7033 37.6 23.3 40.1968 23.3 43.4M40.7 43.4H23.3M40.7 43.4C40.7 46.6033 43.2967 49.2 46.5 49.2C49.7033 49.2 52.3 46.6033 52.3 43.4M40.7 43.4C40.7 40.1968 43.2967 37.6 46.5 37.6C49.7033 37.6 52.3 40.1968 52.3 43.4M52.3 43.4H58.1C58.8691 43.4 59.6068 43.0945 60.1506 42.5507C60.6945 42.0068 61 41.2692 61 40.5V29.915C60.9988 29.2569 60.7738 28.6188 60.362 28.1054L50.27 15.4904C49.9988 15.1508 49.6547 14.8765 49.2631 14.6877C48.8716 14.499 48.4427 14.4007 48.008 14.4H37.8"
        stroke="black"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
      />
    </motion.svg>
  );
};

export default MobieSvg;
