import type { TooltipCoords } from "../types";

export function preventOverflow(
  coords: TooltipCoords,
  tooltipRect: DOMRect,
  offset: number
): TooltipCoords {
  const { innerWidth, innerHeight } = window;
  const { width: tooltipW, height: tooltipH } = tooltipRect;
  const fitTop = coords.top >= 0;
  const fitBottom = coords.top + tooltipH <= innerHeight;
  const fitLeft = coords.left >= 0;
  const fitRight = coords.left + tooltipW <= innerWidth;
  const newCoords = { ...coords };
  if (!fitTop) {
    newCoords.top = offset;
  }
  if (!fitBottom) {
    newCoords.top = coords.top - (coords.top + tooltipH - innerHeight) - offset;
  }
  if (!fitLeft) {
    newCoords.left = offset;
  }
  if (!fitRight) {
    newCoords.left =
      coords.left - offset - (coords.left + tooltipW - innerWidth);
  }
  return newCoords;
}
