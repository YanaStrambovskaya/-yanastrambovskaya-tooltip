export type Placement = "top" | "bottom" | "left" | "right";
export type TooltipCoords = { top: number; left: number };
export type ArrowCoords = { top: number; left: number };
export type Coords = {
  coords: TooltipCoords;
  arrowCoords: ArrowCoords;
  placement: Placement;
};

export type TooltipContextType = {
  isOpen: boolean;
  offset: number;
  handlePointerEnter: (e: React.PointerEvent) => void;
  handlePointerLeave: (e: React.PointerEvent) => void;
  handlePointerDown: (e: React.PointerEvent) => void;
  handleOnFocus: () => void;
  handleOnBlur: () => void;
  handleEscape: (e: React.KeyboardEvent) => void;
  triggerRef: React.RefObject<HTMLElement | null>;
  tooltipRef: React.RefObject<HTMLDivElement | null>;
  finalCoords: Coords | null;
  placement: Placement;
  bgColor: string;
  textColor: string;
  maxWidth: number;
  id: string;
};
