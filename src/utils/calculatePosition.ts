import type { Placement, TooltipCoords } from "../types";

type Props = {
  placement: Placement;
  triggerRect: DOMRect;
  tooltipRect: DOMRect;
  offset: number;
};

export function calculatePosition({
  placement,
  triggerRect,
  tooltipRect,
  offset,
}: Props): TooltipCoords {
  switch (placement) {
    case "top":
      return {
        top: triggerRect.top - (tooltipRect.height + offset),
        left: triggerRect.left - tooltipRect.width / 2 + triggerRect.width / 2,
      };
    case "bottom":
      return {
        top: triggerRect.top + triggerRect.height + offset,
        left: triggerRect.left - tooltipRect.width / 2 + triggerRect.width / 2,
      };
    case "left":
      return {
        top: triggerRect.top - tooltipRect.height / 2 + triggerRect.height / 2,
        left: triggerRect.left - (tooltipRect.width + offset),
      };
    case "right":
      return {
        top: triggerRect.top - tooltipRect.height / 2 + triggerRect.height / 2,
        left: triggerRect.left + triggerRect.width + offset,
      };
  }
}
