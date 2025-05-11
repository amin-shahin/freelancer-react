import { useEffect, useRef } from "react";

export default function useOutsideClick(handler, listenerCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    document.addEventListener("click", eventHandler, listenerCapturing);

    function eventHandler(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }

    return () =>
      document.removeEventListener("click", eventHandler, listenerCapturing);
  }, [handler,listenerCapturing]);

  return ref;
}
