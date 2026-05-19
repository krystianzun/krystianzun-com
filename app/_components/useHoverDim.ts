import { useState, type PointerEvent } from "react";

/**
 * Tracks a hovered index within a list and provides helpers to dim non-hovered
 * items. Only responds to mouse pointers — touch input is ignored, which
 * prevents the "sticky hover" effect on mobile after tapping a list item.
 */
export function useHoverDim() {
  const [hovered, setHovered] = useState<number | null>(null);

  const isDimmed = (index: number) => hovered !== null && hovered !== index;

  const bind = (index: number) => ({
    onPointerEnter: (e: PointerEvent) => {
      if (e.pointerType === "mouse") setHovered(index);
    },
    onPointerLeave: (e: PointerEvent) => {
      if (e.pointerType === "mouse") setHovered(null);
    },
  });

  return { isDimmed, bind };
}
