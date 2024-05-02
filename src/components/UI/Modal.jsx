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

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (!e.target.closest("#modal-content")) {
        const modal = ref.current;

        modal.close();
      }
    };

    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return createPortal(
    <dialog
      onClose={onClose}
      ref={ref}
      {...props}
      className="w-full rounded-lg md:m-0 md:open:fixed md:top-28 md:left-full md:-translate-x-dialog md:max-w-lg"
    >
      <div id="modal-content" className="p-8">
        {children}
      </div>
    </dialog>,
    document.getElementById("modal"),
  );
}
