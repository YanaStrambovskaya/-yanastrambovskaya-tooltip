import { useTooltip } from "./hooks/useTooltip";
import React from "react";
import "./tooltip.css";
import { caret } from "./constants";

export function TooltipCaret() {
  const { finalCoords, bgColor } = useTooltip();
  if (!finalCoords) return;
  const placementStyles = {
    top: "yana-ui-caretTop",
    bottom: "yana-ui-caretBottom",
    left: "yana-ui-caretLeft",
    right: "yana-ui-caretRight",
  };
  return (
    <div
      style={{
        ...finalCoords.arrowCoords,
        width: caret,
        height: caret,
        backgroundColor: bgColor,
      }}
      className={`yana-ui-caret ${placementStyles[finalCoords.placement]}`}
    />
  );
}
