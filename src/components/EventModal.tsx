import { EventData } from "../data/types";

interface EventModalProps {
  event: EventData;
  onClose: () => void;
}

function EventModal({ event, onClose }: EventModalProps) {
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className="modal" onClick={handleBackgroundClick}>
      <div className="modal-content">
        <span id="close-modal" onClick={onClose} style={{ cursor: "pointer" }}>
          ✖
        </span>
        <h2>
          {event.title} - ({event.year})
        </h2>
       <figure>
          <img src={event.imageURL} alt={event.title} />
          <figcaption>{event.description}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default EventModal;
