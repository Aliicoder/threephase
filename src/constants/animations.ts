import { Variants } from "framer-motion";

export const pathVariants: Variants = {
  initial: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut", // Use one of Framer Motion's easing presets
    },
  },
};
