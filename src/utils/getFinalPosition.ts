import { arrowPosition } from "./arrowPosition";
import { calculatePosition } from "./calculatePosition";
import { isFitsMainAxis } from "./flipPosition";
import { preventOverflow } from "./preventOverflow";
import type { Coords, Placement, TooltipCoords } from "../types";

type Props = {
  placement: Placement;
  triggerRect: DOMRect;
  tooltipRect: DOMRect;
  offset: number;
};
export function getFinalPosition({
  placement,
  triggerRect,
  tooltipRect,
  offset,
}: Props): Coords {
  let coords: TooltipCoords = calculatePosition({
    placement,
    triggerRect,
    tooltipRect,
    offset,
  });
  const checkedPlacement = isFitsMainAxis(coords, placement, tooltipRect);
  coords = calculatePosition({
    placement: checkedPlacement,
    triggerRect,
    tooltipRect,
    offset,
  });
  coords = preventOverflow(coords, tooltipRect, offset);
  const arrowCoords = arrowPosition({
    tooltipRect,
    coords,
    triggerRect,
    position: checkedPlacement,
  });
  return { coords, arrowCoords, placement: checkedPlacement };
}
