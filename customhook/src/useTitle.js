import React from "react";
import { useEffect } from "react";

export default function useTitle(num) {
  useEffect(() => {
    document.title = `Number ${num}`;
  }, [num]);
}
