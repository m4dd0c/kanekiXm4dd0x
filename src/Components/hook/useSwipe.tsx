import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

export const useSwipe = () => {
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = () => (ev: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(ev.targetTouches[0].clientY);
  };

  const onTouchMove = () => (ev: React.TouchEvent) => {
    setTouchEnd(ev.targetTouches[0].clientY);
  };

  const onTouchEnd = (apiObj: scrollVisibilityApiType) => () => {
    if (!touchStart || !touchEnd) return false;
    const distance = touchStart - touchEnd;
    const isHorizontalSwipe = Math.abs(distance) > minSwipeDistance;
    const toDown = distance < minSwipeDistance;

    if (isHorizontalSwipe) {
      if (toDown) {
        apiObj.scrollPrev();
      } else {
        apiObj.scrollNext();
      }
    }
  };

  return { onTouchStart, onTouchEnd, onTouchMove };
};
