export const bgVariant = {
  hidden: { y: "10vh", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1, type: "spring" } },
};
export const ltrVariant = {
  hidden: { x: "-7vw", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, type: "spring" } },
};
export const hoverTitle = {
  scale: 1.1,
  transition: { type: "spring", stiffness: 200 },
};

export const btnAnim = {
  tap: { scale: 0.95, transition: { type: "spring", stiffness: 200 } },
  hover: {
    borderRadius: "1rem",
    transition: { type: "spring", stiffness: 500 },
  },
};
