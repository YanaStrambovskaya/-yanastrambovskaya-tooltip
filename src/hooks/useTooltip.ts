import { useContext } from "react";
import { TooltipContext } from "../context/TooltipContext";

export function useTooltip() {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error("No tooltip context");
  }

  return context;
}
