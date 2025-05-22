import { motion, TargetAndTransition, VariantLabels, AnimationControls } from "framer-motion";
import React from "react";

interface AnimatedElementProps {
  children: React.ReactNode;
  delay?: number;
  initial?: boolean | TargetAndTransition | VariantLabels;
  animate?: boolean | TargetAndTransition | VariantLabels | AnimationControls;
  transition?: object;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  delay = 0,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.6, ease: "easeOut" },
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{ ...transition, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement; 