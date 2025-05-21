import { useRef, useLayoutEffect } from "react";

export type CleanupFn = () => void;
export type AttachmentFn<T extends HTMLElement = HTMLElement> = (
  element: T
) => void | CleanupFn;
export type Attachment<T extends HTMLElement = HTMLElement> =
  | AttachmentFn<T>
  | null
  | undefined;

export function useAttach<T extends HTMLElement = HTMLElement>(
  attachment: Attachment<T>,
  deps: unknown[] = []
) {
  const ref = useRef<T | null>(null);
  const cleanupRef = useRef<CleanupFn | void>(undefined);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element || !attachment) return;
    const cleanup = attachment(element);
    cleanupRef.current = cleanup;
    return () => {
      if (typeof cleanupRef.current === "function") cleanupRef.current();
    };
  }, [attachment, ...deps]);

  return ref;
}
