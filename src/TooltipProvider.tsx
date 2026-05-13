import React from "react";
import {
  ReactNode,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { TooltipContext } from "./context/TooltipContext";
import { getFinalPosition } from "./utils/getFinalPosition";
import { Coords, Placement } from "./types";

type Props = {
  children: ReactNode;
  placement: Placement;
  offset?: number;
  bgColor?: string;
  textColor?: string;
  maxWidth?: number;
  isControlledOpen?: boolean;
};
export function TooltipProvider({
  children,
  placement,
  offset = 10,
  bgColor = "#333333",
  textColor = "#ffffff",
  maxWidth = 150,
  isControlledOpen,
}: Props) {
  const id = useId();
  const isControlled = isControlledOpen !== undefined;
  const [isOpen, setIsOpen] = useState<boolean>(() =>
    isControlled ? isControlledOpen : false
  );
  const [finalCoords, setFinalCoords] = useState<Coords | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  function handleOnFocus() {
    if (isControlled && !isControlledOpen) return;
    setIsOpen(true);
  }
  function handleOnBlur() {
    if (isControlled && !isControlledOpen) return;
    setIsOpen(false);
  }
  function handleEscape(e: React.KeyboardEvent) {
    if (isControlled && !isControlledOpen) return;
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  }

  function handlePointerEnter(e: React.PointerEvent) {
    if (isControlled && !isControlledOpen) return;
    if (e.pointerType === "mouse") {
      setIsOpen(true);
    }
  }
  function handlePointerLeave(e: React.PointerEvent) {
    if (isControlled && !isControlledOpen) return;
    if (e.pointerType === "mouse") {
      setIsOpen(false);
    }
  }
  function handlePointerDown(e: React.PointerEvent) {
    if (isControlled && !isControlledOpen) return;
    if (e.pointerType !== "mouse") {
      setIsOpen((prev) => !prev);
    }
  }

  const updateCoords = useCallback(() => {
    if (!triggerRef.current || !isOpen || !tooltipRef.current) return;
    const triggerRect = triggerRef.current.getBoundingClientRect();

    if (triggerRect.bottom > window.innerHeight || triggerRect.top < 0) {
      setIsOpen(false);
      return;
    }
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const coords = getFinalPosition({
      placement,
      triggerRect,
      tooltipRect,
      offset,
    });
    setFinalCoords(coords);
  }, [isOpen, placement, offset]);

  useLayoutEffect(() => {
    updateCoords();
  }, [updateCoords]);

  useLayoutEffect(() => {
    document.addEventListener("scroll", updateCoords, {
      passive: true,
    });
    return () => document.removeEventListener("scroll", updateCoords);
  }, [updateCoords]);

  useLayoutEffect(() => {
    function closeOnSerize() {
      setIsOpen(false);
    }
    window.addEventListener("resize", closeOnSerize);
    return () => window.removeEventListener("resize", closeOnSerize);
  }, [updateCoords]);

  useEffect(() => {
    function closeOutside(e: MouseEvent) {
      if (
        !triggerRef.current?.contains(e.target as Node) &&
        !tooltipRef.current?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", closeOutside);
    return () => document.removeEventListener("click", closeOutside);
  }, [triggerRef, tooltipRef]);

  const value = {
    isOpen,
    offset,
    handlePointerEnter,
    handlePointerLeave,
    handlePointerDown,
    handleOnFocus,
    handleOnBlur,
    handleEscape,
    triggerRef,
    finalCoords,
    tooltipRef,
    placement,
    bgColor,
    textColor,
    maxWidth,
    id,
  };
  return (
    <TooltipContext.Provider value={value}>{children}</TooltipContext.Provider>
  );
}
