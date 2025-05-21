import { useEffect, useRef } from "react";

export function useAttach<T extends HTMLElement = HTMLElement>(
  attachFn: (element: T) => void | (() => void),
  deps: unknown[] = []
) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (!elementRef.current || typeof attachFn !== "function") return;

    const cleanup = attachFn(elementRef.current);

    return () => {
      if (typeof cleanup === "function") {
        cleanup();
      }
    };
  }, [attachFn, ...deps]);

  return elementRef;
}
