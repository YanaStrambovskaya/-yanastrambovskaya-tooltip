import { PropsWithChildren } from "react";
import { useTooltip } from "./hooks/useTooltip";
import { createPortal } from "react-dom";
import React from "react";
import { Tooltip } from "./Tooltip";
import "./tooltip.css";

export function TooltipContent({ children }: PropsWithChildren) {
  const { tooltipRef, finalCoords, isOpen, maxWidth, bgColor, textColor, id } =
    useTooltip();
  if (!isOpen || !finalCoords) return null;
  return createPortal(
    <div
      ref={tooltipRef}
      role="tooltip"
      id={id}
      style={{ ...finalCoords.coords }}
      className="yana-ui-tooltip"
    >
      <div
        style={{
          backgroundColor: bgColor,
          color: textColor,
          maxWidth: maxWidth,
        }}
        className="yana-ui-tooltip-inner"
      >
        {children}
      </div>
      <Tooltip.Caret />
    </div>,
    document.body
  );
}
