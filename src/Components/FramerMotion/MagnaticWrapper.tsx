import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cPosType } from "../../vite-env";

const MagnaticWrapper = ({ children }: { children: JSX.Element }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [position, setPosition] = useState<cPosType>({ left: 0, top: 0 });

  const mouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const { clientX, clientY } = e;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) {
      return;
    }
    const { height, width, left, top } = rect;
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ left: x, top: y });
  };

  const mouseLeave = () => {
    setPosition({ left: 0, top: 0 });
  };

  return (
    <motion.div
      ref={ref}
      animate={{ x: position.left, y: position.top, origin:0 }}
      transition={{ type: "spring", stiffness: 150, damping: 10, mass: 0.2 }}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
    >
      {children}
    </motion.div>
  );
};

export default MagnaticWrapper;
