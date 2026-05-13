import { createContext } from "react";
import type { TooltipContextType } from "../types";

export const TooltipContext = createContext<TooltipContextType | null>(null);
