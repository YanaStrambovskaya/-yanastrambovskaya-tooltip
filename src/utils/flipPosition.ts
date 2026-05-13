import type { Placement, TooltipCoords } from "../types";

export function isFitsMainAxis(
  coords: TooltipCoords,
  placement: Placement,
  tooltipRect: DOMRect
): Placement {
  const oppositePlacement = {
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left",
  } as const;
  const { innerWidth, innerHeight } = window;
  const { width: tooltipW, height: tooltipH } = tooltipRect;
  const fitTop = coords.top >= 0;
  const fitBottom = coords.top + tooltipH <= innerHeight;
  const fitLeft = coords.left >= 0;
  const fitRight = coords.left + tooltipW <= innerWidth;

  switch (placement) {
    case "top":
      if (!fitTop) {
        return oppositePlacement.top;
      }
      break;
    case "bottom":
      if (!fitBottom) {
        return oppositePlacement.bottom;
      }
      break;
    case "left":
      if (!fitLeft) {
        return oppositePlacement.left;
      }
      break;
    case "right":
      if (!fitRight) {
        return oppositePlacement.right;
      }
      break;
  }
  return placement;
}
