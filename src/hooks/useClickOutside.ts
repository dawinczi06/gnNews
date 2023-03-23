import { MutableRefObject, useEffect } from "react";

const useClickOutside = (
  ref: MutableRefObject<HTMLElement | null>,
  action: () => void
): void => {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        action();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [ref, action]);
};

export default useClickOutside;
