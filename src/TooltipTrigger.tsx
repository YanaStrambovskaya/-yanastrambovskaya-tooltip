import { cloneElement, ReactElement } from "react";
import { useTooltip } from "./hooks/useTooltip";
import { mergeRefs } from "./helpers";

export function TooltipTrigger({
  children,
}: {
  children: ReactElement<
    React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>
  >;
}) {
  const {
    isOpen,
    triggerRef,
    handlePointerEnter,
    handlePointerLeave,
    handlePointerDown,
    handleOnFocus,
    handleEscape,
    handleOnBlur,
    id,
  } = useTooltip();

  return cloneElement(children, {
    ref: mergeRefs(triggerRef, children.props.ref),
    "aria-describedby": isOpen ? id : undefined,
    "data-state": isOpen ? "open" : "closed",
    onPointerEnter: (e: React.PointerEvent<HTMLElement>) => {
      children.props.onPointerEnter?.(e), handlePointerEnter(e);
    },
    onPointerLeave: (e: React.PointerEvent<HTMLElement>) => {
      children.props.onPointerLeave?.(e), handlePointerLeave(e);
    },
    onPointerDown: (e: React.PointerEvent<HTMLElement>) => {
      children.props.onPointerDown?.(e), handlePointerDown(e);
    },
    onFocus: (e: React.FocusEvent<HTMLElement>) => {
      children.props.onFocus?.(e), handleOnFocus();
    },
    onBlur: (e: React.FocusEvent<HTMLElement>) => {
      children.props.onBlur?.(e), handleOnBlur();
    },
    onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => {
      children.props.onKeyDown?.(e), handleEscape(e);
    },
  } as React.HTMLAttributes<HTMLElement>);
}
