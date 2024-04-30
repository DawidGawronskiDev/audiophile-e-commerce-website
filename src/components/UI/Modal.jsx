import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, onClose, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const modal = ref.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog
      onClose={onClose}
      ref={ref}
      {...props}
      className="w-full p-8 rounded-lg"
    >
      {children}
    </dialog>,
    document.getElementById("modal"),
  );
}
