import { caret } from "../constants";
import type { ArrowCoords, Placement, TooltipCoords } from "../types";

type Props = {
  tooltipRect: DOMRect;
  coords: TooltipCoords;
  triggerRect: DOMRect;
  position: Placement;
};
export function arrowPosition({
  tooltipRect,
  triggerRect,
  coords,
  position,
}: Props): ArrowCoords {
  const arrowCoords = {
    top: {
      top: tooltipRect.height,
      left: triggerRect.left + triggerRect.width / 2 - coords.left,
    },
    bottom: {
      top: -caret, // todo
      left: triggerRect.left + triggerRect.width / 2 - coords.left,
    },
    left: {
      top: triggerRect.top + triggerRect.height / 2 - coords.top,
      left: tooltipRect.width,
    },
    right: {
      top: triggerRect.top + triggerRect.height / 2 - coords.top,
      left: -caret, // todo
    },
  };

  return arrowCoords[position];
}
