import { TooltipTrigger } from "./TooltipTrigger";
import { TooltipCaret } from "./TooltipCaret";
import { TooltipContent } from "./TooltipContent";
import { TooltipProvider } from "./TooltipProvider";

export const Tooltip = Object.assign(TooltipProvider, {
  Trigger: TooltipTrigger,
  Content: TooltipContent,
  Caret: TooltipCaret,
});
