import { useState } from "react";
import { EventData } from "../data/types";
import EventMarker from "./EventMarker";
import EventModal from "./EventModal";

interface TimelineProps {
  events: EventData[];
  onEventClick: (event: EventData) => void;
}

function Timeline({ events }: TimelineProps) {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  return (
    <div id="timeline">
      {events.map((event) => (
        <EventMarker
          key={event.year}
          event={event}
          isActive={selectedEvent?.year === event.year}
          onClick={() => setSelectedEvent(event)}
        />
      ))}

      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}

export default Timeline;
