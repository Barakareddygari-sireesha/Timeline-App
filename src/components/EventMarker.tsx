import { EventData } from "../data/types";

interface EventMarkerProps {
  event: EventData;
  isActive: boolean;
  onClick: () => void;
}

function EventMarker({ event, isActive, onClick }: EventMarkerProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className="event"
      id={event.year} 
      role="button"
      tabIndex={0} 
      aria-current={isActive ? "true" : undefined} 
      aria-label={`Event in ${event.year}: ${event.title}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
       <div className="year">{event.year}</div>
    </div>
  );
}

export default EventMarker;
