import { useEffect, useRef } from "react";
import { EventData } from "../data/types";

interface EventModalProps {
  event: EventData;
  onClose: () => void;
}

function EventModal({ event, onClose }: EventModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const modal = modalRef.current;
    const focusableEls = modal?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstEl = focusableEls?.[0];
    const lastEl = focusableEls?.[focusableEls.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab" && focusableEls && firstEl && lastEl) {
        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }

      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      className="modal"
      onClick={handleBackgroundClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
    >
      <div className="modal-content">
        <span
          id="close-modal"
          ref={closeBtnRef}
          onClick={onClose}
          style={{ cursor: "pointer" }}
          role="button"
          aria-label="Close modal"
          tabIndex={0}
        >
          ✖
        </span>
        <h2 id="modal-title">
          {event.title} - ({event.year})
        </h2>
        <figure>
          <img src={event.imageURL} alt={event.title} />
          <figcaption id="modal-desc">{event.description}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default EventModal;
