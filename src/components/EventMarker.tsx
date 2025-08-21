import { EventData } from "../data/types";

interface EventMarkerProps {
  event: EventData;
  onClick: () => void;
}

function EventMarker({ event, onClick }: EventMarkerProps) {
  return (
    <div className="event" id={event.year} onClick={onClick}>
      <div className="year">{event.year}</div>
    </div>
  );
}

export default EventMarker;
