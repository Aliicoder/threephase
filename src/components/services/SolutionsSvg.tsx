"use client";
import React from "react";
import { motion } from "framer-motion";
import { pathVariants } from "@/constants/animations";

export const SolutionsSvg = () => {
  return (
    <motion.svg
      className="max-md:w-[45px] max-md:h-[45px]"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M17.5 49.4V32C17.5 28.1544 19.0277 24.4662 21.747 21.747C24.4662 19.0277 28.1544 17.5 32 17.5C35.8456 17.5 39.5338 19.0277 42.253 21.747C44.9723 24.4662 46.5 28.1544 46.5 32V49.4M17.5 49.4H46.5M17.5 49.4C15.9617 49.4 14.4865 50.0111 13.3988 51.0988C12.3111 52.1865 11.7 53.6617 11.7 55.2V58.1C11.7 58.8691 12.0055 59.6068 12.5494 60.1506C13.0932 60.6945 13.8309 61 14.6 61H49.4C50.1691 61 50.9068 60.6945 51.4506 60.1506C51.9945 59.6068 52.3 58.8691 52.3 58.1V55.2C52.3 53.6617 51.6889 52.1865 50.6012 51.0988C49.5135 50.0111 48.0383 49.4 46.5 49.4M58.1 32H61M50.85 10.25L49.4 11.7M3 32H5.9M32 3V5.9M11.4941 11.4941L13.5444 13.5444M32 32V49.4"
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
