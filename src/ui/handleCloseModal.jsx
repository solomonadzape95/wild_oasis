import { useEffect } from "react";

export function HandleCloseModal(ref, close) {
  return useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("Opened");
          close();
        }
      }
      document.addEventListener("click", handleClick, true);
      return () => document.removeEventListener("click", handleClick, true);
    },
    [close]
  );
}
