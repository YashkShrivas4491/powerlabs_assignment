import { useState, useRef } from "react";

export default function useToast() {
  const [toast, setToast] = useState("");
  const timeoutRef = useRef(null);

  const showToast = (message) => {
    setToast(message);

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => setToast(""), 1800);
  };

  return { toast, showToast };
}
