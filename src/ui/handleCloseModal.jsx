import { useEffect } from "react";

export function HandleCloseModal(ref, close) {
  return useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          close();
        }
      }
      document.addEventListener("click", handleClick, false);
      return () => document.removeEventListener("click", handleClick, false);
    },
    [close, ref]
  );
}
